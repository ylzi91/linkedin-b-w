import { useState, useEffect } from "react";
import { Card, ListGroup } from "react-bootstrap";
import SpinnerDots from "../spinners/SpinnerDots"; 
import SpinnerCircle from "../spinners/SpinnerCircle";

const LftBarS = () => {
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Card bg="dark" text="white">
        <Card.Header className="border-0 fs-5">Su questa pagina</Card.Header>
        <ListGroup variant="flush" className="fs-6">
          <a
            href="#Jobs"
            className="list-group-item border-0 py-2 bg-dark text-white ps-3"
          >
            Jobs
          </a>
          <a
            href="#Company"
            className="list-group-item border-0 py-2 bg-dark text-white ps-3"
          >
            Company
          </a>
          <a
            href="#Category"
            className="list-group-item border-0 py-2 bg-dark text-white ps-3"
          >
            Category
          </a>
          <a
            href="#People"
            className="list-group-item border-0 py-2 bg-dark text-white ps-3"
          >
            People
          </a>
          <a
            href="#Post"
            className="list-group-item border-0 py-2 bg-dark text-white ps-3"
          >
            Post
          </a>
        </ListGroup>
      </Card>
    </>
  );
};

export default LftBarS;

