import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile, TAKE_MY_PROFILE } from "../../redux/actions";
import { Card, ListGroup } from "react-bootstrap";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { BsBookmarkFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Sxbar = () => {
  const [spider, setSpider] = useState(false)
  const dispatch = useDispatch();
  const myProfile = useSelector((state) => state.profile.myProfile);
  useEffect(() => {
    dispatch(getProfile("me", TAKE_MY_PROFILE));
  }, []);

  return (
    <>
      <Card data-bs-theme='dark'>
        <Card.Img
          variant="top"
          src="https://pbs.twimg.com/media/DgZOQPkX0AA_YT1.jpg"
        />
        <div className=" card-box">
          <img
            src={myProfile.image}
            className="rounded-circle border border-white"
            // style={{ transform: "translateY(-40px)" }}
            alt="foto profilo"
          />

        </div>
        <Card.Body className=" d-flex flex-column align-items-center justify-content-center p-0">
          <Link to='/myprofile' className=" list-group-item card-Title text-center fs-6 fw-bolder">
            {myProfile.name} {myProfile.surname}
          </Link>
          <Card.Text className=" text-center opacity-75" style={{ fontSize: '0.6em' }}>{myProfile.title}</Card.Text>
          <Card.Text className=" text-center opacity-75" style={{ fontSize: '0.6em' }}>{myProfile.title}</Card.Text>
        </Card.Body>
        <ListGroup onClick={() => { setSpider(!spider) }} className="list-group-flush">
          <ListGroup.Item action style={{ fontSize: "0.7em" }}>
            Espandi la tua rete
            {spider && <img className=" w-75 mx-auto" src='http://www.amazingcomics.it/spiderman/gif_spiderman_sd_3.gif' />}
          </ListGroup.Item>
          <ListGroup.Item
            className=" d-flex align-items-center"
            action
            style={{ fontSize: "0.7em" }}
          >
            <MdOutlineWorkspacePremium
              className=" rounded-circle me-2"
              style={{ fontSize: "1.5em", backgroundColor: "gold" }}
            />{" "}
            Visualizza le funzionalità premium
          </ListGroup.Item>
          <ListGroup.Item
            className=" d-flex align-items-center"
            action
            style={{ fontSize: "0.7em" }}
          >
            <BsBookmarkFill
              className=" rounded-circle me-2"
              style={{ fontSize: "1.5em", color: 'gray' }}
            />{" "}
            Elementi Salvati
          </ListGroup.Item>

        </ListGroup>
      </Card>
    </>
  );
};
