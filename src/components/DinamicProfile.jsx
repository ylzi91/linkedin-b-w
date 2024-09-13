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
      <Container className="mt-3 profilePage p-0 px-3" id="profilePage">
        <Row className="d-flex justify-content-center">
          <Col xs={12} lg={9} className="pe-2">
            <Card className="experience-section mb-4 bg-dark text-light rounded-3">
              <Card.Img
                variant="top"
                src="https://placedog.net/636x159"
                className="rounded-top-3"
              />


              <Card.Body className="position-relative">
                <div className="other-profile-img-box">
                  <img src={myprofile.image} className="w-100 rounded rounded-circle profile-img" alt="profile" />
                </div>
                <Card.Title className="mt-5">
                  <div style={{ fontSize: "25px", fontWeight: "bold" }}>
                    {myprofile.name} {myprofile.surname}
                  </div>
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
                </Card.Text>
              </Card.Body>




            </Card>{" "}
            <PostCard id={myprofile._id} />
            <ExpCard id={myprofile._id} />
          </Col>
          <Col xs={12} lg={3} className="ps-2">
            <Card className="experience-section bg-dark text-light mb-3 w-100 rounded-3 text-wrap">
              <Card.Body>
                <Card.Title className="mb-2">
                  <div className="d-flex justify-content-between">
                    <div>
                      <h5>Lingua del profilo</h5>
                      <p style={{ fontSize: "16px", opacity: "0.3" }}> Italiano</p>
                    </div>
                    <div>
                      <IoPencilOutline />
                    </div>
                  </div>


                  <hr />

                  <div className="d-flex justify-content-between align-items-center">
                    <div className="w-100">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <h5 className="m-0">Profilo pubblico e URL</h5>
                        <div className="d-flex align-items-center">
                          <IoPencilOutline />
                        </div>
                      </div>
                      <a>
                        <p style={{ fontSize: "16px", opacity: "0.3" }}> {myprofile.email}</p>
                      </a>
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
