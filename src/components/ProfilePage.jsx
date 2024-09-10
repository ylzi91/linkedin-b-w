import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";
import ExpCard from "./profileComp/ExpCard";
import { FaRegCircleUser } from "react-icons/fa6";
import { CiCamera } from "react-icons/ci";
import { IoPencilOutline } from "react-icons/io5";
import { getProfile, TAKE_MY_PROFILE } from "../redux/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import OtherProfile from "./profileComp/OtherProfile";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const myprofile = useSelector((s) => s.profile.myProfile);

  useEffect(() => {
    dispatch(getProfile("me", TAKE_MY_PROFILE));
    console.log(myprofile);
  }, [dispatch]);

  return (
    <>
      <Container className="mt-4" fluid>
        <Row>
          <Col xs={12} md={8}>
            <Card className="experience-section mb-4 bg-dark text-light">
              <Card.Img variant="top" src="https://placedog.net/636x159" />
              
              <Card.Body>
                <Card.Title as="h2" className="mb-4">
                
                <img src={myprofile.image} className="w-100 rounded rounded-circle profile me-3" alt="profile" />
               {myprofile.name} {myprofile.surname}
                  <span className="position-absolute end-0">
                    <Badge
                      className="rounded rounded-circle bg-transparent text-dark"
                    >
                      <IoPencilOutline />
                    </Badge>
                  </span>
                </Card.Title>
                <Card.Text>
                  <p>
                    {myprofile.title} <br />
                    <span>
                      {myprofile.area} - <nbsp />
                      <a href={`mailto:${myprofile.email}`} className="text-decoration-none">
                         Informazioni di contatto
                      </a>
                    </span>
                  </p>
                  <Button
                    variant="primary"
                    className="rounded rounded-pill"
                    size="md"
                    active
                  >
                    Disponibile per
                  </Button>
                  <Button
                    variant="outline-primary"
                    className="mx-2 rounded rounded-pill"
                    size="md"
                  >
                    Aggiungi sezione del profilo
                  </Button>
                  <Button
                    variant="outline-primary"
                    className="rounded rounded-pill"
                    size="md"
                  >
                    modifica profilo
                  </Button>
                  <Button
                    variant="outline-secondary"
                    className="ms-2 rounded rounded-pill"
                    size="md"
                  >
                    Altro
                  </Button>
                </Card.Text>
              </Card.Body>
            </Card>{" "}
            <ExpCard />
          </Col>
          <Col xs={12} md={4}>
          <Card className="experience-section bg-dark text-light mb-3 w-100" >
        <Card.Body>
          <Card.Title className="mb-4">
            <div className="d-flex flex-row justify-content-between flex-nowrap">
              <div>
                <h4>Lingua del profilo</h4>
                <br/> <p>Italiano</p>
              </div>
              <div>
                <IoPencilOutline />
              </div>
            </div>
          </Card.Title>
<hr/>
        </Card.Body>
        <Card.Body >
          <Card.Title className="mb-4">
            <div className="d-flex flex-row justify-content-between flex-nowrap text-wrap">
              <div>
                <h4>Profilo pubblico e URL</h4>
                <br/> <a className="text-decoration-underline text-white-50">{myprofile.email}</a>
              </div>
              <div>
                <IoPencilOutline />
              </div>
            </div>
          </Card.Title>

        </Card.Body>
      </Card>
      <OtherProfile />

          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProfilePage;
