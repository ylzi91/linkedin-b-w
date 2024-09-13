import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProfile, TAKE_ID_PROFILE } from "../redux/actions";
import { IoPencilOutline } from "react-icons/io5";
import OtherProfile from "./profileComp/OtherProfile";
import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";
import ExpCard from "./profileComp/ExpCard";
import PostCard from "./profileComp/PostCard";
import FormModProfile from "./profileComp/FormModProfile";
import { TbPointFilled } from "react-icons/tb";
import { HiOutlinePencil } from "react-icons/hi";

function DinamicProfile() {
  const dispatch = useDispatch();
  const params = useParams();
  const myprofile = useSelector((s) => s.profile.specificProfile);

  useEffect(() => {
    dispatch(getProfile(params.id, TAKE_ID_PROFILE));
  }, [params]);



  return (
    <>
      {" "}
      <Container className="mt-4 profilePage">
        <Row className="d-flex justify-content-center">
          <Col xs={12} lg={8} className="p-3">
            <Card className="experience-section mb-4 bg-dark text-light rounded-3">
              <Card.Img
                variant="top"
                src="https://placedog.net/636x159"
                className="rounded-top-3"
              />

              <div className="profile-img-box">
                <img src={myprofile.image} className="w-100 rounded rounded-circle profile-img" alt="profile" />
              </div>

              {/* <Card.Body>
                <Card.Title as="h2" className="mb-4 titleHero">
                  <img
                    src={myprofile.image}
                    className="w-100 rounded rounded-circle profile me-3"
                    alt="profile"
                  />
                  <span className="heroTit">
                    {myprofile.name} {myprofile.surname}
                  </span>
                </Card.Title>
                <Card.Text>
                  <p className="pb-2">
                    {myprofile.title} <br />
                    <span className="mt-2 d-block text-white-50">
                      {myprofile.area} <TbPointFilled className="point" />{" "}
                      <nbsp />
                      <a
                        href={`mailto:${myprofile.email}`}
                        className="text-decoration-none info"
                      >
                        Informazioni di contatto
                      </a>
                    </span>
                  </p>
                </Card.Text>
              </Card.Body> */}

              <Card.Body>
                <Card.Title className="mt-5">
                  {/* <img
                    src={myprofile.image}
                    className="w-100 rounded rounded-circle profile me-3"
                    alt="profile"
                  /> */}
                  <div style={{ fontSize: "25px", fontWeight: "bold" }}>
                    {myprofile.name} {myprofile.surname}
                  </div>


                  {/* <EditIcon actionState={setModProfile} state={modProfile} /> */}


                </Card.Title>
                <Card.Text>
                  <p className="pb-2">
                    {myprofile.title} <br />
                    <span className="mt-2 d-block text-white-50">
                      {myprofile.area} <TbPointFilled className="point" /> <nbsp />
                      <a
                        href={`mailto:${myprofile.email}`}
                        className="text-decoration-none info"
                      >
                        Informazioni di contatto
                      </a>
                    </span>
                  </p>
                  {/* <div className="d-flex align-content-center mt-2 text-nowrap flex-wrap gap-2">
                    <Button className="rounded rounded-pill btn_info" size="md">
                      Disponibile per
                    </Button>
                    <Button
                      className="mx-2 rounded rounded-pill btn_info_out"
                      size="md"
                    >
                      Aggiungi sezione del profilo
                    </Button>
                    <Button
                      onClick={() => setModProfile(!modProfile)}
                      className="rounded rounded-pill btn_info_out"
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
                    </Button>{" "}
                  </div>
                  {modProfile && (
                    <FormModProfile close={closeForm} changes={changes} />
                  )} */}
                </Card.Text>
              </Card.Body>




            </Card>{" "}
            <PostCard id={myprofile._id} />
            <ExpCard id={myprofile._id} />
          </Col>
          <Col xs={12} lg={4} className="py-3">
            <Card className="experience-section bg-dark text-light mb-3 w-100 rounded-3 text-wrap">
              <Card.Body>
                <Card.Title className="mb-4">
                  <div className="d-flex flex-row justify-content-between flex-nowrap">
                    <div>
                      <h4>Lingua del profilo</h4>
                      <br /> Italiano
                    </div>
                    <div>
                      <IoPencilOutline />
                    </div>
                  </div>
                </Card.Title>
                <hr />
              </Card.Body>
              <Card.Body>
                <Card.Title className="mb-4">
                  <div className="d-flex flex-row justify-content-between flex-nowrap text-wrap">
                    <div>
                      <h4>Profilo pubblico e URL</h4>
                      <br />{" "}
                      <a className="text-decoration-underline text-white-50">
                        {myprofile.email}
                      </a>
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







}

export default DinamicProfile;
