/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { Row, Col, Container, Modal, Button } from "react-bootstrap";
import { BsThreeDots } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import {
  DELETE_POST,
  getOrModifyPost,
  getProfile,
  TAKE_MY_PROFILE,
} from "../../redux/actions";

const PostItem = ({
  post,
  openForm,
}) => {
  const [postProf, setPostProf] = useState({
    name: "",
    surname: "",
    img: "",
    username: "",
  });
  const [hiddenPosts, setHiddenPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const profiles = useSelector((store) => store.profile.allProfiles);
  const myProfile = useSelector((store) => store.profile.myProfile);
  const dispatch = useDispatch();

  const getProfileNameSurname = (username) => {
    const profile = profiles.find((profile) => profile.username === username);
    console.log('pppppppppppp', username)
    return profile;
  };

  const timeAgo = (timestamp) => {
    const now = new Date();
    const time = new Date(timestamp);
    const diffInMs = now - time;
    const diffInSeconds = Math.floor(diffInMs / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);
    const diffInMonths = Math.floor(diffInDays / 30);
    const diffInYears = Math.floor(diffInDays / 365);

    if (diffInSeconds < 60) {
      return `${diffInSeconds} secondi fa`;
    } else if (diffInMinutes < 60) {
      return `${diffInMinutes} minuti fa`;
    } else if (diffInHours < 24) {
      return `${diffInHours} ore fa`;
    } else if (diffInDays < 30) {
      return `${diffInDays} giorni fa`;
    } else if (diffInMonths < 12) {
      return `${diffInMonths} mesi fa`;
    } else {
      return `${diffInYears} anni fa`;
    }
  };

  useEffect(() => {
    const user = { ...getProfileNameSurname(post.username) };
    console.log("user", user);

    setPostProf({
      name: user.name,
      surname: user.surname,
      img: user.image,
    });
  }, [post]);
  useEffect(() => {
    const user = { ...getProfileNameSurname(post.username) };
    console.log("user", user);

    setPostProf({
      name: user.name,
      surname: user.surname,
      username: user.username,
      img: user.image,
    });
  }, []);

  const hidePost = (postId) => {
    setHiddenPosts((prevHiddenPosts) => [...prevHiddenPosts, postId]);
    setModalMessage("Il post è stato rimosso dal tuo feed.");
    setShowModal(true);
  };


  const handlePostAction = (post) => {
    if (post.username === myProfile.username) {
      dispatch(
        getOrModifyPost("DELETE", DELETE_POST, "", post._id)
      );
      dispatch(getOrModifyPost());
    } else {
      hidePost(post._id);
    }
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <Row className={`card-create px-3 py-3 mb-3 experience-item mb-4 gutter ${
      hiddenPosts.includes(post._id) 
        ? "d-none"
        : ""
    }`}>
      <Col>
        <div className="card-create px-3 py-3 rounded-0" key={post._id}>
          <div className="body-input mb-3">
            <div className="post-img">
              <img
                className="rounded-circle profileo"
                src={postProf.img}
                alt={post.username}
              />
            </div>
            <div className="user-post w-100 h-100">
              <div>
                {postProf.name}{" "}
                {postProf.surname}
              </div>
              <div>{timeAgo(post.createdAt)}</div>
            </div>
            <div className="edit-icon d-flex align-items-center">
            <BsThreeDots className= {post.user._id === myProfile._id ? 'me-2' : 'me-2 text-white-50' } onClick={() => { if(post.user._id === myProfile._id)openForm(post)}} />

              
                <RxCross2
                  onClick={() => handlePostAction(post)}
                />
             
            </div>
          </div>
          <div className="text-light py-2 border-bottom-custom d-flex align-items-center">
            {post.text}
          </div>
        </div>
      </Col>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header className="bg-dark text-light border-0">
          <Modal.Title>Post rimosso</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-light">{modalMessage}</Modal.Body>
        <Modal.Footer className="bg-dark text-light border-0">
          <Button variant="light" onClick={handleCloseModal}>
            Chiudi
          </Button>
        </Modal.Footer>
      </Modal>


    </Row>
  );
};

export default PostItem;
