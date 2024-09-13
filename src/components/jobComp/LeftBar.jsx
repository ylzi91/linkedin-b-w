import {
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  ListGroup,
  Row,
} from "react-bootstrap";
import { IoMdSearch } from "react-icons/io";

function LeftBar({ setJobQuery }) {
  return (
    <Card bg="dark" text="white">
      <Card.Header className="border-0 fs-5">
        Cerca il tuo nuovo lavoro!
      </Card.Header>
      <Card.Body>
        <InputGroup id="search" className="me-5 w-100 mb-2">
          <InputGroup.Text>
            <IoMdSearch className="fs-5" />
          </InputGroup.Text>
          <Form.Control
            onChange={(e) => setJobQuery(e.target.value)}
            placeholder="Cerca"
            aria-label="Search"
            // onKeyDown={(e) => {
            //   if (e.key === "Enter" || e.keyCode === "13") {
            //     setJobQuery(e.target.value);
            //   }
            // }}
          />
        </InputGroup>
        <ListGroup variant="flush" className="fs-6">
          <a
            href="#Jobs"
            className="list-group-item border-0 py-2 bg-dark text-white ps-3"
          >
            Jobs
          </a>
          <a
            href="#Category"
            className="list-group-item border-0 py-2 bg-dark text-white ps-3"
          >
            Category
          </a>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default LeftBar;
