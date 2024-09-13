import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getSearch } from "../../redux/actions"
import { Button, Card, ListGroup } from "react-bootstrap"
import { MdOutlineExpandLess, MdOutlineExpandMore } from "react-icons/md"
import SpinnerDots from "../spinners/SpinnerDots"





export const Dxbar = () => {
    const [numJobs, setNumJobs] = useState(10)
    const [myOpen, setMyOpen] = useState(false)
    const jobs = useSelector((state) => state.job.querySearch)
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(getSearch('developer'))
    }, [dispatch])

    return (
        
        <>
        {!jobs[0] &&  <SpinnerDots/>}
        {jobs[0] && (
             <Card data-bs-theme='dark'>
             <ListGroup className=" pt-2">
                 <h4 className=" text-center">Linkedin Jobs</h4>
                 {jobs.slice(0, numJobs).map((job) => {
                     return (
                     
                     <ListGroup.Item onClick={() => {window.open(job.url, '_blank')}} action className=" border-0">
                         <p className=" fw-bold">{job.title}</p>
                         <span className=" fs-6" >{job.company_name} | {job.category}</span> 
                     
                     </ListGroup.Item>)
                 })}
     
                 <ListGroup.Item> <Button onClick={() => {
                     setNumJobs(!myOpen ? numJobs + 5: numJobs -5)
                     setMyOpen(!myOpen)
                     }} className=" border-0" variant="outline-light">{!myOpen ? 'Vedi altro' : 'Nascondi' }{!myOpen ? <MdOutlineExpandMore /> : <MdOutlineExpandLess />}</Button>  </ ListGroup.Item>
             </ListGroup>
     
     
             </Card>

        )}
       

        </>
    )
}