import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getOrModifyPost } from "../../redux/actions";
import PostItemS from "./PostItemS";

function PostSearched({ query }) {
  const dispatch = useDispatch();
  const reduxPosts = useSelector((s) => s.post.allPosts);
  const [postExpand, setPostExpand] = useState(5);
  const [expand, setExpand] = useState(false);

  // Effettua la chiamata iniziale per ottenere i post
  useEffect(() => {
    dispatch(getOrModifyPost());
  }, [dispatch]);

  // Filtra i post in base alla query
  const filteredPosts = reduxPosts.filter((p) => p.text.includes(query));

  return (
    <>
      <Card className="experience-section bg-dark text-light rounded-3">
    
          {filteredPosts.length === 0 ? (
            <div className="d-flex align-items-center px-3 text-secondary" style={{ height: "70px" }}>
              <p> Nessuna post trovato. </p>
            </div>
          ) : (
            <>
              {filteredPosts.slice(0, postExpand).map((post) => {
                return <PostItemS key={post._id} post={post} />;
              })}
            </>
          )}
      
        {filteredPosts.length > 0 && (
          expand ? (
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
                  setPostExpand(filteredPosts.length); 
                }}
              >
                Show all {filteredPosts.length} Posts <span className="ms-1">&rarr;</span>
              </button>
            </div>
          )
        )}
      </Card>
    </>
  );
}

export default PostSearched;
