/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { Row, Col, Image } from "react-bootstrap";

const ExpItem = ({
  company,
  logo,
  role,
  duration,
  location,
  description,
  fullDescription,
}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    console.log("ciaooooo");
  }, []);

  return (
    <Row className="experience-item mb-4">
      <Col xs={2} md={1}>
        <Image
          src={logo}
          alt={`${company} logo`}
          fluid
          className="company-logo"
        />
      </Col>
      <Col xs={10} md={11}>
        <h3 className="company-name mb-0">{company}</h3>
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
    </Row>
  );
};

export default ExpItem;
