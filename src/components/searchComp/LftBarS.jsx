import { Card, ListGroup } from "react-bootstrap";

const LftBarS = () => {
  return (
    <>
      <Card bg='dark' text="white">
        <Card.Header className="border-0 fs-5">Su questa pagina</Card.Header>
        <ListGroup variant="flush" className="fs-6">
          <ListGroup.Item className="border-0 py-2 bg-dark text-white">Jobs</ListGroup.Item>
          <ListGroup.Item className="border-0 py-2 bg-dark text-white">Company</ListGroup.Item>
          <ListGroup.Item className="border-0 py-2 bg-dark text-white">People</ListGroup.Item>
          <ListGroup.Item className="border-0 py-2 bg-dark text-white">Post</ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
};

export default LftBarS;
