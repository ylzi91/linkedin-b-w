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

  // Fetch the posts when component mounts or query changes
  useEffect(() => {
    dispatch(getOrModifyPost());
  }, [query]);

  // Fetch the posts on mount
  useEffect(() => {
    dispatch(getOrModifyPost());
  }, []);

  // Filtra i post in base alla query
  const filteredPosts = reduxPosts.filter((p) => p.text.includes(query));

  return (
    <Card className="experience-section bg-dark text-light rounded-3">
      {/* Mostra il titolo solo se ci sono post filtrati */}
      {filteredPosts.length > 0 && (
        <Card.Body>
          <Card.Title className="mb-4">Post</Card.Title>
          {filteredPosts.slice(0, postExpand).map((post) => (
            <PostItemS key={post._id} post={post} />
          ))}
        </Card.Body>
      )}

      {/* Mostra il messaggio di "Nessuna post trovato" se non ci sono post filtrati */}
      {filteredPosts.length === 0 && (
        <div className="d-flex align-items-center px-3 text-secondary" style={{ height: "70px" }}>
          <p>Nessun post trovato.</p>
        </div>
      )}

      {/* Mostra i bottoni di espansione se ci sono più post */}
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
              Nascondi post <span className="ms-1">&larr;</span>
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
              Mostra tutti i {filteredPosts.length} post <span className="ms-1">&rarr;</span>
            </button>
          </div>
        )
      )}
    </Card>
  );
}

export default PostSearched;
