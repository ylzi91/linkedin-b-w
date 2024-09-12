import { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { HiOutlinePencil } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { getOrModifyPost } from "../../redux/actions";
import PostItem from "../profileComp/PostItem";
import PostItemS from "./PostItemS";

function JobsSearched({ query }) {
  const dispatch = useDispatch();
  const reduxPosts = useSelector((s) => s.post.allPosts);

  useEffect(() => {
    dispatch(getOrModifyPost());
  }, []);

  return (
    <>
      {" "}
      <Card className="experience-section mb-4 bg-dark text-light rounded-3">
        <Card.Body>
          <Card.Title className="mb-4">Post</Card.Title>

          {reduxPosts
            .filter((p) => p.text.includes(query))
            .reverse()
            .map((post) => {
              return <PostItemS key={post._id} post={post} />;
            })}
        </Card.Body>
        <div className="show-all-experiences">
          <button className="btn btn-link text-decoration-none w-100 py-3 text-secondary fw-semibold">
            Show all {reduxPosts.filter((p) => p.text.includes(query)).length} Posts{" "}
            <span className="ms-1">&rarr;</span>
          </button>
        </div>
      </Card>
    </>
  );
}

export default JobsSearched;
