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
import { HiOutlinePencil } from "react-icons/hi";

const PostCard = ({ id }) => {
  const [add2, setAdd2] = useState(false);
  const [posts, setPosts] = useState([]);
  const [postExpand, setPostExpand] = useState(5);
  const [expand, setExpand] = useState(false);
  const dispatch = useDispatch();
  const reduxPosts = useSelector((s) => s.post.allPosts);
  const myProfile = useSelector((s) => s.profile.myProfile);

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
        <FormPost id={id} close={close} post={posts} />
      ) : (
        <Card className="experience-section mb-4 bg-dark text-light rounded-3">
          <Card.Body>
            <Card.Title className="mb-4">
              <div className="d-flex flex-row justify-content-between flex-nowrap">
                <p>Attività</p>
                {id === myProfile._id && (
                  <div
                    className="clickable"
                    onClick={() => {
                      setAdd2(true);
                      setPosts([]);
                    }}
                  >
                    <Button className="btnn btn_info_out me-3 px-3">
                      Crea un post
                    </Button>
                    <HiOutlinePencil />
                  </div>
                )}
              </div>
            </Card.Title>

            {reduxPosts
              .filter((p) => {
                if (p.user._id == id) return p;
              })
              .reverse()
              .slice(0, postExpand)
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
         {expand ? ( <div className="show-all-experiences">
            <button
              className="btn btn-link text-decoration-none w-100 py-3 text-secondary fw-semibold"
              onClick={() => {
                setExpand(false)
                setPostExpand(5);
              }}
            >
              Hide
              Posts <span className="ms-1">&rarr;</span>
            </button>
          </div>) : ( <div className="show-all-experiences">
            <button
              className="btn btn-link text-decoration-none w-100 py-3 text-secondary fw-semibold"
              onClick={() => {
                setExpand(true)
                setPostExpand(
                  reduxPosts.filter((p) => {
                    if (p.user._id == id) return p;
                  }).length
                );
              }}
            >
              Show all{" "}
              {
                reduxPosts.filter((p) => {
                  if (p.user._id == id) return p;
                }).length
              }{" "}
              Posts <span className="ms-1">&rarr;</span>
            </button>
          </div>)}
        </Card>
      )}
    </>
  );
};

export default PostCard;
