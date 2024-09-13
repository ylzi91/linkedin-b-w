/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { BsThreeDots } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";
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

    return profile ? profile : { name: "Unknown", surname: "" };

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



  return (
    <Row className="experience-item mb-4 gutter">
      <Col>
        <div className="card-create px-3 py-3 rounded-0" key={post._id}>
          <div className="body-input mb-3">
            <div className="post-img">
              <img className="rounded-circle profileo" src={getProfileImage(post.username)} alt={post.username}
              />
            </div>
            <div className="user-post w-100 h-100">
              <div>
                {getProfileNameSurname(post.username).name}{" "}
                {getProfileNameSurname(post.user).surname}
              </div>
              <div>{timeAgo(post.createdAt)}</div>
            </div>
            <div className="edit-icon d-flex align-items-center">
              <BsThreeDots className="me-3" onClick={() => {
                openForm(post);
              }}
              />
              {myProfile.username === post.username ? (
                <RxCross2
                  onClick={() => {
                    dispatch(getOrModifyPost("DELETE", DELETE_POST, "", post._id));
                    dispatch(getOrModifyPost());
                  }}
                />
              ) : (
                <FaTrashAlt />
              )}
            </div>
          </div>
          <div className="text-light py-2 border-bottom-custom d-flex align-items-center">
            {post.text}
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default PostItem;
