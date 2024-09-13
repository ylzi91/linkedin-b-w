import { useEffect } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProfile, TAKE_ALL_PROFILE } from "../../redux/actions";
import { IoMdPersonAdd } from "react-icons/io";
import SpinnerCircle from "../spinners/SpinnerCircle"; 
import { useNavigate } from "react-router-dom"

function OtherProfile (){
    const AllProfile = useSelector((s)=> s.profile.allProfiles)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(()=>{
        dispatch(getProfile('', TAKE_ALL_PROFILE))
    },[dispatch])
    return (
        <>
          <Card bg="dark" className="text-white rounded-3 text-wrap">
            <Card.Title className="ms-3 py-3">
              Profili che potrebbero interessarti
            </Card.Title>
            {!AllProfile.length ? (
              <SpinnerCircle />
            ) : (
              <ListGroup>
                {AllProfile.slice(4, 9).map((p) => {
                  return (
                    <ListGroup.Item
                      key={p._id}
                      className="bg-dark border-0 border-black border-bottom d-flex"
                    >
                      <div>
                        <img
                        onClick={()=> navigate(`/profile/${p._id}`)}
                          src={p.image}
                          className="profileo rounded-circle clickable"
                          alt="profile"
                        />
                      </div>
                      <div className="text-white flex-column ps-3 pb-2 clickable"                         onClick={()=> navigate(`/profile/${p._id}`)}
                      >
                        <h5>
                          {p.name} {p.surname}
                        </h5>
                        <p>{p.title}</p>
                        <Button variant="outline-light" className="rounded-pill">
                          <IoMdPersonAdd /> Collegati
                        </Button>
                      </div>
                    </ListGroup.Item>
                  );
                })}
              </ListGroup>
            )}
          </Card>
        </>
      );}

export default OtherProfile;
