import { useEffect } from "react"
import { Button, Card, ListGroup } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { getProfile, TAKE_ALL_PROFILE } from "../../redux/actions"
import { IoMdPersonAdd } from "react-icons/io"

function OtherProfile (){
    const AllProfile = useSelector((s)=> s.profile.allProfiles)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getProfile('', TAKE_ALL_PROFILE))
    },[dispatch])
    return (
        <>
        <Card bg="dark" className="text-white" >
            <Card.Title className="ms-3 py-3"> Profili che potrebbero interessarti</Card.Title>
      <ListGroup >
        {AllProfile.slice(4, 9).map((p)=>{
            return(
                <ListGroup.Item className="bg-dark border-0 border-black border-bottom d-flex">
                    <div>
                        <img src={p.image} className="profileo rounded-circle" alt="profile" />
                    </div>
                    <div className="text-white flex-column ps-3 pb-2">
                        <h5>{p.name} {p.surname}</h5>
                        <p>{p.title}</p>
                        <Button variant="outline-light" className="rounded-pill"><IoMdPersonAdd /> Collegati </Button>
                    </div>
                </ListGroup.Item>
            )
        })}
      </ListGroup>
    </Card></>
    )
}
export default OtherProfile