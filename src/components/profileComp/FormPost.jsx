import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  CREATE_NEW_POST,
  DELETE_POST,
  getOrModifyPost,
  MODIFY_POST,
} from "../../redux/actions";
import { RxCross2 } from "react-icons/rx";

const FormExp = ({ id, close, post = {}, add }) => {
  const profile = useSelector((store) => store.profile.myProfile);
  const dispatch = useDispatch();
  const [posts, setPost] = useState("");

  const handleChange = (p) => {
    setPost(p);
  };

  useEffect(() => {
    setPost("");
  }, [add]);

  useEffect(() => {
    if (post.text) setPost(post.text);
  }, [post]);

  return (
    <>
          <Modal size="lg" show>
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

            <RxCross2 className="close-icon" onClick={close} />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-light">
          <form >
      
            <Form.Control
             onKeyDown={(e) => {
              
              if (e.key === "Enter" || e.keyCode === "13") {
                e.preventDefault();
                if (post._id)
                  dispatch(
                    getOrModifyPost("PUT", MODIFY_POST, { text: posts }, post._id)
                  );
                else
                  dispatch(getOrModifyPost("POST", CREATE_NEW_POST, { text: posts }));
      
                close();
      }
            }}
              as="textarea"
              maxLength={1200}
              rows={10}
              autoFocus
              value={posts}
              onChange={(e) => handleChange(e.target.value)}
                className=" fs-5 bg-dark border-0 text-light"
              placeholder="Di cosa vorresti parlare..."
            ></Form.Control>

            {/* <input className="w-100 text-input-area" type="text" placeholder="Scrivi qualcosa..." maxLength={1200}></input> */}
          </form>
        </Modal.Body>
        <Modal.Footer className="bg-dark text-light border-0">
        <Button onClick={()=>{ if (post._id)
            dispatch(
              getOrModifyPost("PUT", MODIFY_POST, { text: posts }, post._id)
            );
          else
            dispatch(getOrModifyPost("POST", CREATE_NEW_POST, { text: posts }));

          close();}}
          variant="outline-secondary"
          size="md"
          type="submit"
        >
          Submit
        </Button>{post._id && (
          <Button
            variant="outline-danger mx-3"
            type="delete"
            size="md"
            onClick={(e) => {
              e.preventDefault();
              dispatch(getOrModifyPost("DELETE", DELETE_POST, "", post._id));
              dispatch(getOrModifyPost(id));
              close();
            }}
          >
            Delete
          </Button>
        )}  
        <Button
          variant="outline-warning ms-5"
          size="md"
          onClick={close}
        >
          Cancel
        </Button>
              </Modal.Footer>
      </Modal>

    </>
  );
};

export default FormExp;
