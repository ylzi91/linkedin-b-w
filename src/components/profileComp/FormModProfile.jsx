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
    <Modal size="lg" show>
      <Modal.Header className="modali text-light justify-content-between p-3">
        <h4>Modifica presentazione</h4>
        <IoMdClose
          className="fs-3 text-white-50"
          onClick={(e) => {
            e.preventDefault();
            close();
          }}
        />{" "}
      </Modal.Header>
      <Modal.Body className="p-0 modal-body">
        <Form
          className="pb-3 px-4 text-light modali formProfile"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.keyCode === 13) {
              dispatch(modifyProfile(prof));
              close();
              changes();
            }
          }}
        >
          <Form.Group className="mb-3 text-white-50" controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              value={prof.name}
              type="name"
              placeholder="Enter name"
              onChange={(e) => handleChange("name", e)}
            />
          </Form.Group>

          <Form.Group
            className="mb-3 text-white-50"
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

          <Form.Group className="mb-3 text-white-50" controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              value={prof.email}
              placeholder="mario@rossi.example"
              onChange={(e) => handleChange("email", e)}
            />
          </Form.Group>
          <Form.Group
            className="mb-3 text-white-50"
            controlId="formGridUsername"
          >
            <Form.Label>Username</Form.Label>
            <Form.Control
              value={prof.username}
              placeholder="Usern@me here"
              onChange={(e) => handleChange("username", e)}
            />
          </Form.Group>

          <Form.Group className="mb-3 text-white-50" controlId="formBio">
            <Form.Label>Bio</Form.Label>
            <Form.Control
              value={prof.bio}
              placeholder="Enter your bio..."
              onChange={(e) => handleChange("bio", e)}
            />
          </Form.Group>

          <Form.Group className="mb-3 text-white-50" controlId="formGridArea">
            <Form.Label>Area</Form.Label>
            <Form.Control
              value={prof.area}
              placeholder="Enter your area"
              onChange={(e) => handleChange("area", e)}
            />
          </Form.Group>
          <Form.Group className="mb-3 text-white-50" controlId="formGridImg">
            <Form.Label>Img</Form.Label>
            <Form.Control
              value={prof.image}
              placeholder="Enter your img link"
              onChange={(e) => handleChange("image", e)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer className="modali text-light justify-content-end ">
        <Button
          variant="info py-1 rounded-pill my-3"
          size="md"
          onClick={() => {
            dispatch(modifyProfile(prof));
            close();
            changes();
          }}
        >
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FormModProfile;
