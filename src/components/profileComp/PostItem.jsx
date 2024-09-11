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

const PostItem = ({ post, openForm }) => {
  const profiles = useSelector((store) => store.profile.allProfiles);
  const myProfile = useSelector((store) => store.profile.myProfile);
  const dispatch = useDispatch()
  const getProfileImage = (username) => {
    const profile = profiles.find((profile) => profile.username === username);
    return profile ? profile.image : "default-profile.png";
  };

  const getProfileNameSurname = (username) => {
    const profile = profiles.find((profile) => profile.username === username);
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

  useEffect(() => {}, []);

  return (
    <Row className="experience-item mb-4 gutter">
      <Col>
        <div
          className="card-create px-3 py-3 rounded-0 border-bottom border-light"
          key={post._id}
        >
          <div className="body-input mb-3">
            <div className="post-img">
              <img
                className="rounded-circle profileo"
                src={getProfileImage(post.username)}
                alt={post.username}
              />
            </div>
            <div className="user-post w-100 h-100">
              <div>
                {getProfileNameSurname(post.username).name}{" "}
                {getProfileNameSurname(post.username).surname}
              </div>
              <div>{timeAgo(post.createdAt)}</div>
            </div>
            <div className="edit-icon d-flex align-items-center">
              <BsThreeDots className="me-3"                   onClick={() => {
                    openForm(post);
                  }}
/>
              {myProfile.username === post.username ? (
                <FaTrashAlt
                onClick={()=>{              dispatch(getOrModifyPost("DELETE", DELETE_POST, "", post._id));
                  dispatch(getOrModifyPost());
    }}
                  className=" text-danger opacity-75"
                />
              ) : (
                <RxCross2 />
              )}
            </div>
          </div>
          <div className="text-light py-2 border-bottom-custom d-flex align-items-center">
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

export default PostItem;
