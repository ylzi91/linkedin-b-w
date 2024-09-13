import React, { useEffect, useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteExperience,
  getExperiences,
  modifyExperience,
  modifyProfile,
  postExperience,
  TAKE_EXP,
} from "../../redux/actions";
import DatePicker from "react-datepicker";
import { IoMdClose } from "react-icons/io";
import "react-datepicker/dist/react-datepicker.css";

const FormExp = ({ id, close, expid, add }) => {
  const reduxExp = useSelector((s) => s.experience.specificExperience);
  const dispatch = useDispatch();
  const [date, setDate] = React.useState(new Date());
  const [exp, setExp] = useState({
    role: "",
    company: "",
    startDate: date,
    endDate: date,
    description: "",
    area: "",
    _id: id,
  });

  const handleChange = (p, v) => {
    setExp({
      ...exp,
      [p]: v.target.value,
    });
  };

  useEffect(() => {
    setExp({
      role: "",
      company: "",
      startDate: date,
      endDate: date,
      description: "",
      area: "",
      _id: id,
    });
  }, [add]);

  useEffect(() => {
    if (expid) setExp({ ...expid });
  }, [expid]);

  return (
    <>
      <Modal show size="lg" className="modal-custom-overflow">
        <Modal.Header className="modali text-light justify-content-between border-0">
          <h4>Modifica Esperienza</h4>
          <IoMdClose
            className="fs-3 text-white-50"
            onClick={(e) => {
              e.preventDefault();
              close();
            }}
          />{" "}
        </Modal.Header>
        <Modal.Body className="p-0 modal-body border-0 modal-custom-overflow">
          <Form
            className="p-3 bg-dark text-light formProfile text-white-50"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.keyCode === 13) {
                if (exp._id) {
                  dispatch(modifyExperience(id, exp._id, exp));
                } else dispatch(postExperience(id, exp));

                dispatch(getExperiences(id, TAKE_EXP))
                close();
              }
            }}
          >
            <div className="d-flex">
              <Form.Group controlId="formGridRole" className="mb-3 text-white-50 w-50 pe-2">
                <Form.Label>Role</Form.Label>
                <Form.Control
                  value={exp.role}
                  type="role"
                  placeholder="Enter your role"
                  onChange={(e) => handleChange("role", e)}
                />
              </Form.Group>

              <Form.Group className="mb-3 text-white-50 w-50 ps-2" controlId="formGridCompany">
                <Form.Label>Company</Form.Label>
                <Form.Control
                  value={exp.company}
                  type="company"
                  placeholder="Enter Company"
                  onChange={(e) => handleChange("company", e)}
                />
              </Form.Group>
            </div>

            <div className="d-flex">
              <Form.Group

                className="mb-3 text-white-50 w-50 pe-2"
                controlId="formGridStartDate"
              >
                <div>
                  <Form.Label>Start Date</Form.Label>
                </div>

                <DatePicker
                  selected={exp.startDate}
                  onChange={(e) => setExp({ ...exp, startDate: e })}
                  className="form-control w-100"
                  popperContainer={({ children }) => <div>{children}</div>}
                  popperClassName="custom-datepicker-popper"
                  withPortal
                />{" "}
              </Form.Group>
              <Form.Group className="mb-3 text-white-50 w-50 pe-2" controlId="formGridEndDate">
                <Form.Label>End Date</Form.Label>
                <br />
                <DatePicker
                  selected={exp.endDate}
                  onChange={(e) => setExp({ ...exp, endDate: e })}
                  className="form-control"
                  popperContainer={({ children }) => <div>{children}</div>}
                  popperClassName="custom-datepicker-popper"
                  withPortal
                />{" "}
              </Form.Group>
            </div>

            <Form.Group className="mb-3" controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                value={exp.description}
                placeholder="Enter the description of your experience"
                onChange={(e) => handleChange("description", e)}
              />
            </Form.Group>

            <Form.Group controlId="formGridArea">
              <Form.Label>Area</Form.Label>
              <Form.Control
                value={exp.area}
                placeholder="Enter your area"
                onChange={(e) => handleChange("area", e)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="modali text-light justify-content-end border-0 ">
          {" "}
          <Button
            variant="outline-secondary"
            size="md"
            type="submit"
            onClick={() => {
              if (exp._id) {
                dispatch(modifyExperience(id, exp._id, exp));
              } else dispatch(postExperience(id, exp));

              dispatch(getExperiences(id, TAKE_EXP))
              close();
            }}
          >
            Submit
          </Button>
          {expid._id && (
            <Button
            variant="outline-danger"
            size="md"
            type="delete"
              onClick={(e) => {
                e.preventDefault();
                dispatch(deleteExperience(id, exp._id));
                dispatch(getExperiences(id, TAKE_EXP));
                close();
              }}
            >
              Delete
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FormExp;
