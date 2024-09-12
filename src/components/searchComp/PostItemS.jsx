/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { BiRepost } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa6";
import { GoComment } from "react-icons/go";
import { IoIosSend } from "react-icons/io";
import { IoPencilOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_POST, getOrModifyPost } from "../../redux/actions";

const PostItemS = ({ post }) => {
  const [postProf, setPostProf] = useState({
    name: "",
    surname: "",
    img: "",
    username: "",
  });
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
              <div className="post-img">
                <img
                  className="rounded-circle profileo"
                  src={postProf.img}
                  alt={post.username}
                />
              </div>
            )}
            <div className="user-post w-50 h-100">
              <div>
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
          <div className="text-light py-3 px-3 border-bottom-custom d-flex align-items-center text-wrap">
            {post.text}
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
                className="button-media text-light d-flex  justify-content-center align-items-center p-2"
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
          </Container>
        </div>
      </Col>
    </Row>
  );
};

export default PostItemS;
