/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { BsThreeDots } from "react-icons/bs";
import { IoPencilOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

const ExpItem = ({
 exp,
 openForm,
}) => {
  const [expanded, setExpanded] = useState(false);
  const myProfile = useSelector((s) => s.profile.myProfile)

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    console.log("ciaooooo");
  }, []);

  return (
    <Row className="experience-item mb-4">
          <Col>
            <div className="justify-content-between d-flex">
              <h3 className="company-name mb-0">{exp.company}</h3>{" "}
              <div>
                <BsThreeDots className= {exp.user === myProfile._id ? 'me-2' : 'me-2 text-white-50' } onClick={() => { if(exp.user === myProfile._id)openForm(exp)}} />
              </div>
            </div>
            <p className="role mb-0">{exp.role}</p>
            <p className="duration text-muted mb-0">{exp.duration}</p>
            <p className="location text-muted mb-2">{exp.location}</p>
            <p className="description mb-1">
              {expanded ? exp.fullDescription : exp.description}
            </p>
            <a
              href="javascript:void(0)"
              className="see-more text-primary"
              onClick={() => toggleDescription()}
            >
              {expanded ? "...see more" : "see less"}
            </a>
          </Col>
        
    </Row>
  );
};

export default ExpItem;
