import { useEffect, useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { modifyProfile } from "../../redux/actions";
import { IoMdClose } from "react-icons/io";
import { useSubmit } from "react-router-dom";

const FormModProfile = ({ close, changes }) => {
  const myProf = useSelector((s) => s.profile.myProfile);
  const dispatch = useDispatch();
  const [prof, setProf] = useState({ ...myProf });

  const handleChange = (p, v) => {
    setProf({
      ...prof,
      [p]: v.target.value,
    });
  };

  useEffect(() => {
    setProf({ ...myProf });
  }, []);

  return (
    <Modal size="lg" show className="">
      <Modal.Header className="modali text-light justify-content-between border-0">
        <h4>Modifica presentazione</h4>
        <IoMdClose
          className="fs-3 text-white-50 clickable"
          onClick={(e) => {
            e.preventDefault();
            close();
          }}
        />{" "}
      </Modal.Header>
      <Modal.Body className="p-0 modal-body">
        <Form
          className="px-3 text-light modali formProfile"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.keyCode === 13) {
              dispatch(modifyProfile(prof));
              close();
              changes();
            }
          }}
        >
          <div className="d-flex align-items-center">

            <Form.Group className="mb-3 text-white-50 w-50 pe-2" controlId="formGridName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                value={prof.name}
                type="name"
                placeholder="Enter name"
                onChange={(e) => handleChange("name", e)}
              />
            </Form.Group>

            <Form.Group
              className="mb-3 text-white-50 w-50 ps-2"
              controlId="formGridSurname"
            >
              <Form.Label>Surname</Form.Label>
              <Form.Control
                value={prof.surname}
                type="surname"
                placeholder="Enter Surname"
                onChange={(e) => handleChange("surname", e)}
              />
            </Form.Group>
          </div>

          <div className="d-flex align-items-center">
            <Form.Group className="mb-3 text-white-50 w-50 pe-2" controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                value={prof.email}
                placeholder="mario@rossi.example"
                onChange={(e) => handleChange("email", e)}
              />
            </Form.Group>

            <Form.Group
              className="mb-3 text-white-50 w-50 ps-2"
              controlId="formGridUsername"
            >
              <Form.Label>Username</Form.Label>
              <Form.Control
                value={prof.username}
                placeholder="Usern@me here"
                onChange={(e) => handleChange("username", e)}
              />
            </Form.Group>
          </div>






          <div className="d-flex align-items-center">
            <Form.Group className="mb-3 text-white-50 w-50 pe-2" controlId="formBio">
              <Form.Label>Bio</Form.Label>
              <Form.Control
                value={prof.bio}
                placeholder="Enter your bio..."
                onChange={(e) => handleChange("bio", e)}
              />
            </Form.Group>


            <Form.Group className="mb-3 text-white-50 w-50 ps-2" controlId="formGridArea">
              <Form.Label>Area</Form.Label>
              <Form.Control
                value={prof.area}
                placeholder="Enter your area"
                onChange={(e) => handleChange("area", e)}
              />
            </Form.Group>
          </div>



          <Form.Group className="text-white-50" controlId="formGridImg">
            <Form.Label>Img</Form.Label>
            <Form.Control
              value={prof.image}
              placeholder="Enter your img link"
              onChange={(e) => handleChange("image", e)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer className=" p-0 modali text-light justify-content-end border-0 ">
        <div className="py-3 px-3 m-0">

          <Button
            variant="outline-secondary"
            size="md"
            type="submit"
            onClick={() => {
              dispatch(modifyProfile(prof));
              close();
              changes();
            }}
          >
            Submit
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default FormModProfile;
