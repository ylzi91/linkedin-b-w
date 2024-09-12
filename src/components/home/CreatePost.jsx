import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CREATE_NEW_POST,
  TAKE_MY_PROFILE,
  getOrModifyPost,
  getProfile,
} from "../../redux/actions";
import { GrMultimedia } from "react-icons/gr";
import { MdEvent } from "react-icons/md";
import { Container, Col, Row, Modal, Button, Form } from "react-bootstrap";
import { RxCross2 } from "react-icons/rx";

const CreatePost = () => {
  const dispatch = useDispatch();
  const profile = useSelector((store) => store.profile.myProfile);
  const [writePost, setWritePost] = useState("");
  // const [post, setPost] = useState('')
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(getProfile("me", TAKE_MY_PROFILE));
  }, []);

  const handleCloseModal = () => setShowModal(false);

  const showForm = () => {
    setShowModal(true);
  };

  return (
    <>
      <div className="card-create px-3 pt-2 mb-3">
        <div className="body-input mb-2">
          <div className="post-img">
            <img src={profile.image} alt="profile-image" />
          </div>
          <div className="body-input-text w-100 h-100" onClick={showForm}>
            Crea un post
          </div>
        </div>
        <Container fluid className="p-0 w-100">
          <Row className="w-100 d-flex justify-content-between pb-2">
            <Col
              lg={5}
              className="button-media d-flex align-items-center justify-content-start px-2"
            >
              <GrMultimedia className="icon-media" />
              <p className="desc-button">Contenuti Multimediali</p>
            </Col>
            <Col
              lg={2}
              className="button-media d-flex align-items-center justify-content-center p-0"
            >
              <MdEvent className="icon-event" />
              <p className="desc-button"> Evento</p>
            </Col>
            <Col
              lg={4}
              className="button-media d-flex align-items-center justify-content-center p-0"
            >
              <GrMultimedia className="icon-article" />
              <p className="desc-button"> Scrivi un articolo</p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* FORM PER IL POST  */}

      <Modal size="lg" show={showModal} onHide={handleCloseModal}>
        <Modal.Header className="bg-dark text-light border-0 py-4 px-2">
          <Modal.Title className="w-100 d-flex">
            <div className="mb-3 w-100 d-flex align-items-center">
              <div className="create-post-img me-2">
                <img
                  className="rounded-circle"
                  src={profile.image}
                  alt={profile.username}
                />
              </div>
              <div className="user-post h-100">
                <div>
                  {profile.name} {profile.surname}
                </div>
              </div>
            </div>

            <RxCross2 className="close-icon" onClick={handleCloseModal} />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-light">
          <form>
      
            <Form.Control
              onKeyDown={(e) => {
              
                if (e.key === "Enter" || e.keyCode === "13") {
                  dispatch(
                    getOrModifyPost("POST", CREATE_NEW_POST, {
                      text: writePost,
                    })
                  );
                  dispatch(getOrModifyPost());
                  handleCloseModal();
                  setWritePost("");
                }
              }}
              as="textarea"
              maxLength={1200}
              rows={10}
              autoFocus
              value={writePost}
              onChange={(e) => {
                setWritePost(e.target.value);
              }}
              className=" fs-5 bg-dark border-0 text-light"
              placeholder="Di cosa vorresti parlare..."
            ></Form.Control>

            {/* <input className="w-100 text-input-area" type="text" placeholder="Scrivi qualcosa..." maxLength={1200}></input> */}
          </form>
        </Modal.Body>
        <Modal.Footer className="bg-dark text-light border-0">
          <Button
            type="submit"
            variant="outline-secondary"
            onClick={(e) => {
              e.preventDefault();
              dispatch(
                getOrModifyPost("POST", CREATE_NEW_POST, { text: writePost })
              );
              dispatch(getOrModifyPost());
              handleCloseModal();
              setWritePost("");
            }}
          >
            Pubblica
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CreatePost;

