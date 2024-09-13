import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CREATE_NEW_POST, TAKE_MY_PROFILE, getOrModifyPost, getProfile } from "../../redux/actions";
import { GrMultimedia } from "react-icons/gr";
import { MdEvent } from "react-icons/md";
import { Container, Col, Row, Modal, Button, Form } from "react-bootstrap";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import SpinnerCircle from "../spinners/SpinnerCircle";
import SpinnerBars from "../spinners/SpinnerBars";
import SpinnerDots from "../spinners/SpinnerDots";


const CreatePost = () => {

  const dispatch = useDispatch();
  const profile = useSelector(store => store.profile.myProfile)
  const [showModal, setShowModal] = useState(false);
  const [contentText, setContentText] = useState('')
  const [writePost, setWritePost] = useState("");

  useEffect(() => {
    dispatch(getProfile('me', TAKE_MY_PROFILE))
  }, [])

  const handleCloseModal = () => setShowModal(false);

  const showForm = () => {
    setShowModal(true);
  };

  const publishPost = () => {
    dispatch(getOrModifyPost('POST', CREATE_NEW_POST, { text: contentText }))
    setContentText('')
    handleCloseModal();
  }

  return (
    <>
      { !profile.image && <SpinnerDots/> }
      {profile.image && ( 
        <div className="card-create px-3 pt-2 mb-3">
        <div className="body-input mb-2">
          <div className="post-img">
            <Link to="/myprofile">
              <img src={profile.image} alt="profile-image" className="rounded-pill" />
            </Link>
          </div>
          <div className="body-input-text h-100" onClick={showForm}>
            Crea un post
          </div>
        </div>
        <Container fluid className="p-0 w-100">
          <Row className="w-100 d-flex justify-content-between pb-2">
            <Col xs={5} lg={5} className="button-media d-flex align-items-center justify-content-start px-2">
              <GrMultimedia className="icon-media" />
              <p className="desc-button">Contenuti Multimediali</p>
            </Col>
            <Col xs={3} lg={2} className="button-media d-flex align-items-center justify-content-center p-0">
              <MdEvent className="icon-event" />
              <p className="desc-button"> Evento</p>
            </Col>
            <Col xs={4} lg={4} className="button-media d-flex align-items-center justify-content-center p-0">
              <GrMultimedia className="icon-article" />
              <p className="desc-button"> Scrivi un articolo</p>
            </Col>
          </Row>
        </Container>
      </div>

      )}
      


      {/* FORM PER IL POST  */}

      <Modal size="lg" show={showModal} onHide={handleCloseModal}>
        <Modal.Header className="bg-dark text-light border-0 py-3 px-2">
          <Modal.Title className="w-100 d-flex">

            <div className="w-100 d-flex align-items-center">
              <div className="create-post-img me-2 d-flex align-items-center">
                <img className="rounded-circle" src={(profile.image)} alt={profile.username} />
              </div>
              <div className="user-post h-100 d-flex align-items-center">
                <div>{profile.username}</div>
              </div>
            </div>

            <RxCross2 className="close-icon" onClick={handleCloseModal} />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-light">
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
        </Modal.Body>
        <Modal.Footer className="bg-dark text-light border-0">
          <Button variant="light" onClick={publishPost}>
            Pubblica
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default CreatePost;

