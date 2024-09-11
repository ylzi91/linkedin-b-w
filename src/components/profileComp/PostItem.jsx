/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { IoPencilOutline } from "react-icons/io5";

const PostItem = ({
 post,
 openForm,
}) => {


  useEffect(() => {
  }, []);

  return (
    <Row className="experience-item mb-4">
          <Col>
            <div className="justify-content-between d-flex">
              <h3 className="company-name mb-0">{post.text}</h3>{" "}
              <div>
                <IoPencilOutline onClick={() => { openForm(post)}} />
              </div>
            </div>
            <p className="role text-white-50 mb-0">{post.username}</p>
            <p className="duration text-white-50 mb-0">Created at: {post.createdAt}</p>
          </Col>
        
    </Row>
  );
};

export default PostItem;
