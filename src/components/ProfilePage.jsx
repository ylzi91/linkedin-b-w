import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";
import ExpCard from "./profileComp/ExpCard";
import { FaRegCircleUser } from "react-icons/fa6";
import { CiCamera } from "react-icons/ci";
import { IoPencilOutline } from "react-icons/io5";

const ProfilePage = () => {
  return (
    <>
    <Container fluid>
        <Row><Col xs={12} md={8}><Card className="experience-section mb-4">
        <Card.Img variant="top" src="https://placedog.net/636x159" />
        <Badge
          className="rounded rounded-circle position-absolute top-50 start-50 user"
          bg="secondary"
        >
          <FaRegCircleUser />
        </Badge>
        <Card.Body>
          <Card.Title as="h2" className="mb-4">
            Mario Rossi
            <span className="position-absolute end-0">
              <Badge
                className="rounded rounded-circle bg-white text-dark"
                bg="secondary"
              >
                <IoPencilOutline />
              </Badge>
            </span>
          </Card.Title>
          <Card.Text>
            <p>
              Sviluppatore front-end <br />
              <span>
                Brindisi, Puglia, Italia -{" "}
                <a href="mailto:" className="text-decoration-none">
                  Informazioni di contatto
                </a>
              </span>
            </p>
            <Button variant="primary" size="md" active>
              Disponibile per
            </Button>
            <Button variant="outline-primary" className="mx-2" size="md">
              Aggiungi sezione del profilo
            </Button>
            <Button variant="outline-primary" size="md">
              modifica profilo
            </Button>
            <Button variant="outline-secondary" className="ms-2" size="md">
              Altro
            </Button>
          </Card.Text>
        </Card.Body>
      </Card>  <ExpCard /></Col>
      <Col xs={12} md={4} > Ciaooo</Col></Row>
    </Container>
      
    
    </>
  );
};

export default ProfilePage;
