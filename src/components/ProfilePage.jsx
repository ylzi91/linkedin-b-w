import { Badge, Button, Card } from "react-bootstrap";
import ExpCard from "./profileComp/ExpCard";
import { FaRegCircleUser } from "react-icons/fa6";

const ProfilePage = () => {
  return (
    <>
      <Card className="experience-section mb-4">
        <Card.Img variant="top" src="https://placedog.net/636x159" />
        <Badge className="rounded rounded-circle position-absolute top-50 start-50 user" bg="secondary"><FaRegCircleUser /></Badge>
        <Card.Body>
          <Card.Title as="h2" className="mb-4">
            Mario Rossi
          </Card.Title>
          <Card.Text>
            <p>
              Sviluppatore front-end <br />
              <span>
                Brindisi, Puglia, Italia -{" "}
                <a href="mailto:" className="text-decoration-none">Informazioni di contatto</a>
              </span>
            </p>
            <Button variant="primary" size="md" active>
        Disponibile per 
      </Button><Button variant="outline-primary" className="mx-2" size="md" >
        Aggiungi sezione del profilo 
      </Button><Button variant="outline-primary" size="md" >
        modifica profilo
      </Button>
      <Button variant="outline-secondary" className="ms-2" size="md">
        Altro
      </Button>
          </Card.Text>
        </Card.Body>
      </Card>
      <ExpCard />
    </>
  );
};

export default ProfilePage;
