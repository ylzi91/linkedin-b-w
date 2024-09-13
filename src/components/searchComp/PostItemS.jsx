/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { Row, Col, Container, Button, Form } from "react-bootstrap";
import { BiRepost } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { FaPen, FaTrash, FaTrashAlt } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa6";
import { GoComment } from "react-icons/go";
import { IoIosSend } from "react-icons/io";
import { IoPencilOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { addComment, DELETE_POST, deleteComment, getOrModifyPost, modifyComment, takeComments } from "../../redux/actions";
import { useNavigate } from "react-router-dom";

const PostItemS = ({ post }) => {
  const [postProf, setPostProf] = useState({
    name: "",
    surname: "",
    img: "",
    username: "",
  });
  const [myClick, setMyClick] = useState("");
  const [modify, setModify] = useState("");
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [writeComment, setWriteComment] = useState("");
  const [showComment, setShowComment] = useState("");
  const comments = useSelector((store) => store.comment.allComment);
  const profiles = useSelector((store) => store.profile.allProfiles);
  const myProfile = useSelector((store) => store.profile.myProfile);
  const getProfileNameSurname = (u) => {
      const profile = profiles.find((profile) => profile.username === u);

      console.log("Profile", profile);
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

  const getProfileFromComment = (author) => {
    if (author === "yuri@lenzi.com") {
      return myProfile;
    } else {
      let profile = profiles.find((profile) => profile.email === author);
      if (!profile) {
        profile = {
          name: "Nome",
          surname: "Cognome",
          image:
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
        };
      }
      return profile;
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

  return (
    <Row className="experience-item mb-4 gutter" id="Post">
      <Col>
        <div className="card-create px-3 py-3 rounded-0" key={post._id}>
          {postProf.name && <div className="body-input mb-3">
            {postProf.img && (
              <div className="post-img clickable" onClick={()=> navigate(`/profile/${post.user._id}`)}>
                <img
                  className="rounded-circle profileo"
                  src={postProf.img}
                  alt={post.username}
                />
              </div>
            )}
            <div className="user-post w-50 h-100 ">
              <div className="clickable" onClick={()=> navigate(`/profile/${post.user._id}`)}>
                  {postProf.name} {postProf.surname} </div> <div>{postProf.username}
              </div>
              <div className="text-secondary py-1">{timeAgo(post.createdAt)}</div>
            </div>
            <div className="edit-icon d-flex align-items-center">
              <BsThreeDots className="me-3" />
              {myProfile.username === post.username ? (
                <RxCross2 />
              ) : (
                <RxCross2 />
              )}
            </div>
          </div>}
          <div className="text-light py-3 px-3 border-bottom-custom d-flex justify-content-between align-items-center text-wrap">
            {post.text}<div
                  className=" text-end clickable text-nowrap"
                  style={{ fontSize: "0.8em" }}
                  onClick={() =>
                    showComment !== post._id
                      ? setShowComment(post._id)
                      : setShowComment("")
                  }
                >
                  {comments.filter((comment) => comment.elementId === post._id)
                    .length > 0 &&
                    comments.filter((comment) => comment.elementId === post._id)
                      .length + " commenti"}
                </div>
          </div>
          <Container className="p-0">
            <Row className="pt-1">
              <Col
                xs={3}
                md={3}
                lg={3}
                xl={3}
                className="button-media text-light d-flex justify-content-center align-items-center p-2"
              >
                <FaRegThumbsUp className="like-icon" />
                <p className="d-md-none d-lg-none d-xl-block"> Consiglia</p>
              </Col>
              <Col
                xs={3}
                md={3}
                lg={3}
                xl={3}
                className="button-media text-light d-flex  justify-content-center align-items-center p-2" onClick={() => {
                  myClick !== post._id
                    ? setMyClick(post._id)
                    : setMyClick("");
                  setWriteComment("");
                  setModify("");
                }}
              >
                <GoComment className="like-icon" />
                <p className="d-md-none d-lg-none d-xl-block"> Commenta</p>
              </Col>
              <Col
                xs={3}
                md={3}
                lg={3}
                xl={4}
                className="button-media text-light d-flex  justify-content-center align-items-center p-2"
              >
                <BiRepost className="like-icon" />
                <p className="d-md-none d-lg-none d-xl-block"> Diffondi post</p>
              </Col>
              <Col
                xs={3}
                md={3}
                lg={3}
                xl={2}
                className="button-media text-light d-flex  justify-content-center align-items-center"
              >
                <IoIosSend className="like-icon" />
                <p className="d-md-none d-lg-none d-xl-block"> Invia</p>
              </Col>
            </Row>
            {myClick === post._id && (
                  <Row className=" align-items-center mt-2">
                    <Col xs={2}>
                      <div className="post-img">
                        <img
                          src={myProfile.image}
                          alt="profile-image"
                          className="rounded-pill"
                        />
                      </div>
                    </Col>
                    <Col className=" text-light" xs={10}>
                      <Form
                        onSubmit={(e) => {
                          e.preventDefault();
                          if (modify !== "") {
                            dispatch(modifyComment(modify, writeComment));
                            setModify("");
                            setTimeout(() => {
                              dispatch(takeComments());
                            }, 500);
                          } else {
                            dispatch(addComment(post._id, writeComment));
                            setModify("");
                            setShowComment(post._id);
                          }
                          setWriteComment("");
                        }}
                      >
                        <Form.Control
                          value={writeComment}
                          style={{ fontSize: "0.9em" }}
                          className=" bg-dark rounded-5 text-light"
                          placeholder="Scrivi commento..."
                          type="text"
                          onChange={(e) => {
                            setWriteComment(e.target.value);
                          }}
                        />
                      </Form>
                    </Col>
                  </Row>
                )}

            {showComment === post._id &&
                  comments
                    .filter((comment) => comment.elementId === post._id)
                    .map((cacca) => {
                      return (
                        <Row className="mt-2 ">
                          <Col xs = {2} className=" p-2">
                            <div className="post-img">
                              <img
                                className="rounded-circle"
                                src={getProfileFromComment(cacca.author).image}

                              />
                            </div>
                          </Col>
                          <Col className=" text-light bg-secondary p-2 rounded-2 align-items-center" xs={10}>
                          <p className=" d-flex justify-content-between mb-2"> 
                                <span className=" fw-bold clickable" onClick={(e) => {
                                  e.preventDefault()
                                  if(cacca.author === 'yuri@lenzi.com'){
                                    navigate('/myprofile')
                                  }
                                  else if (!getProfileFromComment(cacca.author)?._id){
                                    alert('Non posso andare alla pagina')
                                  }
                                  else {
                                    navigate(navigate(`/profile/${getProfileFromComment(cacca.author)._id}`))
                                  }
                                }}>{getProfileFromComment(cacca.author)?.name} {getProfileFromComment(cacca.author)?.surname}</span>
                                <span>{timeAgo(cacca.createdAt)}</span>
                          </p>
                            <p className="text-light d-flex justify-content-between align-items-center">
                              <span>
                                {cacca.comment}
                              </span>
                              <span>
                                <Button
                                  className="rounded-start-2 me-1"
                                  variant="outline-dark"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setMyClick(post._id);
                                    setWriteComment(cacca.comment);
                                    setModify(cacca._id);
                                  }}
                                >
                                  <FaPen />
                                </Button>
                                <Button
                                  className="rounded-end-2"
                                  variant="outline-dark"
                                  onClick={() => {
                                    dispatch(deleteComment(cacca._id));
                                    setTimeout(() => {
                                      dispatch(takeComments());
                                    }, 1000);
                                  }}
                                >
                                  <FaTrash />
                                </Button>
                              </span>{" "}
                            </p>
                          </Col>
                        </Row>
                      );
                    })}

          </Container>
        </div>
      </Col>
    </Row>
  );
};

export default PostItemS;
