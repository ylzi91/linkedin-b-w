import { Button, Card, Modal } from "react-bootstrap";
import ExpItem from "./ExpItem";
import { useEffect, useState } from "react";
import { IoMdAdd, IoMdClose } from "react-icons/io";
import { IoPencilOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  getExperiences,
  getOrModifyPost,
  TAKE_EXP,
  TAKE_MY_PROFILE,
} from "../../redux/actions";
import PostItem from "./PostItem";
import FormPost from "./FormPost";

const PostCard = ({ id }) => {
  const [add2, setAdd2] = useState(false);
  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();
  const reduxPosts = useSelector((s) => s.post.allPosts);

  useEffect(() => {
    if (id) dispatch(getOrModifyPost());
  }, [id]);
  useEffect(() => {
    if (id) dispatch(getOrModifyPost());
  }, [add2]);

  const close = () => {
    setAdd2(false);
  };

  const openForm = (post) => {
    setPosts({ ...post });
    setAdd2(true);
  };

  useEffect(() => {
    console.log(reduxPosts);
  }, []);

  return (
    <>
      {add2 ? (
        <Card className="experience-section mb-4 bg-dark text-light">
          <Modal show>
            <Modal.Header className="bg-dark text-light justify-content-end border-0 pb-0">
              <IoMdClose
                className="fs-2"
                onClick={(e) => {
                  e.preventDefault();
                  close();
                }}
              />{" "}
            </Modal.Header>
            <FormPost id={id} close={close} post={posts} />
          </Modal>
        </Card>
      ) : (
        <Card className="experience-section mb-4 bg-dark text-light">
          <Card.Body>
            <Card.Title className="mb-4">
              <div className="d-flex flex-row justify-content-between flex-nowrap">
                <p>Attività</p>
                <div
                  onClick={() => {
                    setAdd2(true);
                    setPosts([]);
                  }}
                >
                  <Button variant="outline-primary" className="btnn me-3 px-3 py-1">Crea un post</Button>
                  <IoPencilOutline />
                </div>
              </div>
            </Card.Title>

            {reduxPosts
              .filter((p) => {
                if (p.user._id == id) return p;
              })
              .map((post) => {
                return (
                  <PostItem
                    key={post._id}
                    post={post}
                    openForm={openForm}
                    add={add2}
                  />
                );
              })}
          </Card.Body>
          <div className="show-all-experiences">
            <button className="btn btn-link text-decoration-none w-100 py-3 text-secondary fw-semibold">
              Show all {reduxPosts.filter((p) => p._id.includes(id)).length}{" "}
              Posts <span className="ms-1">&rarr;</span>
            </button>
          </div>
        </Card>
      )}
    </>
  );
};

export default PostCard;
