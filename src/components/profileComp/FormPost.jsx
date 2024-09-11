import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  CREATE_NEW_POST,
  DELETE_POST,
  getOrModifyPost,
  MODIFY_POST,
} from "../../redux/actions";

const FormExp = ({ id, close, post = {}, add }) => {
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
      <Form
        className="p-3"
        onSubmit={(e) => {
          e.preventDefault();
          if (post._id)
            dispatch(
              getOrModifyPost("PUT", MODIFY_POST, { text: posts }, post._id)
            );
          else
            dispatch(getOrModifyPost("POST", CREATE_NEW_POST, { text: posts }));

          close();
        }}
      >
        <Form.Group className="mb-3" controlId="formDescription">
          <Form.Label>Insert Text...</Form.Label>
          <Form.Control
            value={posts}
            placeholder="Enter the description of your post"
            onChange={(e) => handleChange(e.target.value)}
          />
        </Form.Group>

        <Button
          variant="outline-primary py-1 rounded-pill"
          size="lg"
          type="submit"
        >
          Submit
        </Button>
        <Button
          variant="outline-warning py-1 rounded-pill ms-3"
          size="lg"
          onClick={close}
        >
          Cancel
        </Button>
        {post._id && (
          <Button
            variant="outline-danger py-1 rounded-pill ms-3"
            type="delete"
            size="lg"
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
      </Form>
    </>
  );
};

export default FormExp;
