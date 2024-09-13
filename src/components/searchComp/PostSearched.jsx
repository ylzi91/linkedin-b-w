import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { HiOutlinePencil } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { getOrModifyPost } from "../../redux/actions";
import PostItem from "../profileComp/PostItem";
import PostItemS from "./PostItemS";

function PostSearched({ query }) {
  const dispatch = useDispatch();
  const reduxPosts = useSelector((s) => s.post.allPosts);
  const [postExpand, setPostExpand] = useState(5);
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    dispatch(getOrModifyPost());
  }, []);

  useEffect(() => {
    dispatch(getOrModifyPost());
  }, [query]);

  return (
    <>
      {" "}
      <Card className="experience-section mb-2 bg-dark text-light rounded-3">
        <Card.Body>
          <Card.Title className="mb-4">Post</Card.Title>

          {reduxPosts
            .filter((p) => p.text.includes(`${query}`))
            .slice(0, postExpand)
            .map((post) => {
              return <PostItemS key={post._id} post={post} />;
            })}
        </Card.Body>
        {expand ? (
          <div className="show-all-experiences">
            <button
              className="btn btn-link text-decoration-none w-100 py-3 text-secondary fw-semibold"
              onClick={() => {
                setExpand(false);
                setPostExpand(5);
              }}
            >
              Hide Posts <span className="ms-1">&larr;</span>
            </button>
          </div>
        ) : (
          <div className="show-all-experiences">
            <button
              className="btn btn-link text-decoration-none w-100 py-3 text-secondary fw-semibold"
              onClick={() => {
                setExpand(true);
                setPostExpand(
                  reduxPosts.filter((p) => p.text.includes(`${query}`)).length
                );
              }}
            >
              Show all{" "}
              {reduxPosts.filter((p) => p.text.includes(`${query}`)).length}{" "}
              Posts <span className="ms-1">&rarr;</span>
            </button>
          </div>
        )}
      </Card>
    </>
  );
}

export default PostSearched;
