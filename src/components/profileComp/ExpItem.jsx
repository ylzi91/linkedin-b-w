/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { Row, Col, Image } from "react-bootstrap";
import { getExperiences, TAKE_EXP } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { IoMdAdd } from "react-icons/io";
import FormExp from "./FormExp";
import { IoPencilOutline } from "react-icons/io5";

const ExpItem = ({
  company,
  logo,
  role,
  duration,
  userid,
  id,
  description,
  closeli,
  fullDescription,
  location,
}) => {
  const [expanded, setExpanded] = useState(false);

  const [add, setAdd] = useState(false);

  const close = ()=> {setAdd(false)}

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    console.log("ciaooooo");
  }, []);

  return (
    <Row className="experience-item mb-4">
      {add ? (
        <FormExp id={userid} expid={id} close={close} />
      ) : (
        <>
          <Col xs={2} md={1}>
            {logo && (
              <Image
                src={logo}
                alt={`${company} logo`}
                fluid
                className="company-logo"
              />
            )}
          </Col>
          <Col>
            <div className="justify-content-around d-flex">
              <h3 className="company-name mb-0">{company}</h3>{" "}
              <div>
                <IoPencilOutline onClick={() => {setAdd(true)
                   closeli()}} />
              </div>
            </div>
            <p className="role mb-0">{role}</p>
            <p className="duration text-muted mb-0">{duration}</p>
            <p className="location text-muted mb-2">{location}</p>
            <p className="description mb-1">
              {expanded ? fullDescription : description}
            </p>
            <a
              href="javascript:void(0)"
              className="see-more text-primary"
              onClick={() => toggleDescription()}
            >
              {expanded ? "See less" : "...see more"}
            </a>
          </Col>
        </>
      )}
    </Row>
  );
};

export default ExpItem;
