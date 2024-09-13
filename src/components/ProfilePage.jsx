import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  Modal,
  Row,
} from "react-bootstrap";
import ExpCard from "./profileComp/ExpCard";
import { IoPencilOutline } from "react-icons/io5";
import { getProfile, TAKE_MY_PROFILE } from "../redux/actions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import OtherProfile from "./profileComp/OtherProfile";
import FormModProfile from "./profileComp/FormModProfile";
import PostCard from "./profileComp/PostCard";
import { HiOutlinePencil } from "react-icons/hi";
import { TbPointFilled } from "react-icons/tb";
import EditIcon from "./profileComp/icons/EditIcon";
import SpinnerDots from "./spinners/SpinnerDots"; 

const ProfilePage = () => {
  const dispatch = useDispatch();
  const myprofile = useSelector((s) => s.profile.myProfile);
  const [modProfile, setModProfile] = useState(false);
  const [change, setChange] = useState(true);
  const [loading, setLoading] = useState(true);  // Stato di caricamento

  const closeForm = () => {
    setModProfile(false);
  };

  const changes = () => {
    setChange(false);
  };

  useEffect(() => {
    setLoading(true);  // Inizia a caricare
    dispatch(getProfile("me", TAKE_MY_PROFILE))
      .finally(() => setLoading(false));  
    setChange(true);
  }, [change]);

  if (loading) {  
    return <SpinnerDots />;
  }

  return (
    <>
      <Container fluid id="profilePage" className="mt-3 profilePage p-0 px-3">
        <Row className="d-flex justify-content-center">
          <Col xs={12} lg={9} className="pe-2">
            <Card className="experience-section mb-4 bg-dark text-light rounded-3">
              <Card.Img variant="top" src="https://placedog.net/636x159" className="rounded-top-3" />
              <div className="profile-img-box">
                <img src={myprofile.image} className="w-100 rounded rounded-circle profile-img" alt="profile" />
              </div>
              <Card.Body>
                <Card.Title className="mt-5">
                  <div style={{ fontSize: "25px", fontWeight: "bold" }}>
                    {myprofile.name} {myprofile.surname}
                  </div>
                  <EditIcon actionState={setModProfile} state={modProfile} />
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
                  <div className="d-flex align-content-center mt-2 text-nowrap flex-wrap gap-2">
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
                  )}
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

                  <div className="d-flex justify-content-between">
                    <div>
                      <h5>Profilo pubblico e URL</h5>
                      <a>
                        <p style={{ fontSize: "16px", opacity: "0.3" }}> {myprofile.email}</p>
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
};

export default ProfilePage;

