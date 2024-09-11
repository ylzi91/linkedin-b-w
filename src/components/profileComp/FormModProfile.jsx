import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { modifyProfile } from "../../redux/actions";

const FormModProfile = ({close, changes}) => {
  const myProf = useSelector((s) => s.profile.myProfile);
    const dispatch = useDispatch()
  const [prof, setProf] = useState({...myProf})

  const handleChange = (p, v) => {
    setProf({
        ...prof,
        [p]: v.target.value,
    })
  }

  useEffect(()=>{
    setProf({...myProf})
  },[])

  return (
    <>
      <Form onSubmit={(e)=>{
        e.preventDefault()
        dispatch(modifyProfile(prof))
        close()
        changes()
      }}>
        <Row className="my-3">
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control value={prof.name} type="name" placeholder="Enter name" onChange={(e)=>handleChange('name', e)} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridSurname">
            <Form.Label>Surname</Form.Label>
            <Form.Control value={prof.surname} type="surname" placeholder="Enter Surname" onChange={(e)=>handleChange('surname', e)}/>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} className="mb-3" controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control value={prof.email} placeholder="mario@rossi.example" onChange={(e)=>handleChange('email', e)}/>
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="formGridUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control value={prof.username} placeholder="Usern@me here" onChange={(e)=>handleChange('username', e)}/>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formBio">
          <Form.Label>Bio</Form.Label>
          <Form.Control value={prof.bio} placeholder="Enter your bio..." onChange={(e)=>handleChange('bio', e)}/>
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridArea">
            <Form.Label>Area</Form.Label>
            <Form.Control value={prof.area} placeholder="Enter your area" onChange={(e)=>handleChange('area', e)} />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridImg">
            <Form.Label>Img</Form.Label>
            <Form.Control value={prof.image} placeholder="Enter your img link" onChange={(e)=>handleChange('image', e)}/>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check" required />
        </Form.Group>

        <Button variant="primary py-1 rounded-pill" size="lg" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default FormModProfile;
