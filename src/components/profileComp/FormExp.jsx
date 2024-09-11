import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getExperiences, modifyProfile, postExperience, TAKE_EXP } from "../../redux/actions";
import DatePicker from "react-datepicker";

const FormExp = ({id, close, expid}) => {
    const reduxExp = useSelector((s)=>s.experience.specificExperience)
    const dispatch = useDispatch()
    const [date, setDate] = React.useState(new Date());
  const [exp, setExp] = useState({
    role: '',
    company: '',
    startDate: date,
    endDate: date,
    description: '',
    area: '',
    _id: id,
  })

  const handleChange = (p, v) => {
    setExp({
        ...exp,
        [p]: v.target.value,
    })
  }

  useEffect(()=>{
    if(expid)
        dispatch(getExperiences(id, TAKE_EXP, expid))
    if(reduxExp)
        setExp({...reduxExp})
  },[])

  return (
    <>
      <Form onSubmit={(e)=>{
        e.preventDefault()
        dispatch(postExperience(id, exp))
        close()
      }}>
        <Row className="my-3">
          <Form.Group as={Col} controlId="formGridRole">
            <Form.Label>Role</Form.Label>
            <Form.Control value={exp.role} type="role" placeholder="Enter your role" onChange={(e)=>handleChange('role', e)} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCompany">
            <Form.Label>Company</Form.Label>
            <Form.Control value={exp.company} type="company" placeholder="Enter Company" onChange={(e)=>handleChange('company', e)}/>
          </Form.Group>
        </Row>

        <Row className="mb-3">
        
          <Form.Group as={Col} className="mb-3" controlId="formGridStartDate">
            <Form.Label>Start Date</Form.Label>
            <DatePicker
        selected={exp.startDate}
        onChange={(e)=>setExp({...exp,
            startDate: e,
        })}
        className="form-control"
      />          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="formGridEndDate">
            <Form.Label>End Date</Form.Label>
            <DatePicker
        selected={exp.endDate}
        onChange={(e)=>setExp({...exp,
            endDate: e,
        })}
        className="form-control"
      />                    </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control value={exp.description} placeholder="Enter the description of your experience" onChange={(e)=>handleChange('description', e)}/>
        </Form.Group>

          <Form.Group controlId="formGridArea">
            <Form.Label>Area</Form.Label>
            <Form.Control value={exp.area} placeholder="Enter your area" onChange={(e)=>handleChange('area', e)} />
          </Form.Group>
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

export default FormExp;
