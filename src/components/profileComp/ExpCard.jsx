import { Button, Card, Modal } from "react-bootstrap";
import ExpItem from "./ExpItem";
import { useEffect, useState } from "react";
import { IoMdAdd, IoMdClose } from "react-icons/io";
import { IoPencilOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { getExperiences, TAKE_EXP, TAKE_MY_PROFILE } from "../../redux/actions";
import FormExp from "./FormExp";
import { HiOutlinePencil } from "react-icons/hi";

const ExpCard = ({ id }) => {
  const [add, setAdd] = useState(false);
  const [exp, setExp] = useState({});
  const [expExpand, setExpExpand] = useState(5);
  const [expand, setExpand] = useState(false);
  const dispatch = useDispatch();
  const experiences = useSelector((s) => s.experience.allExperiences);
  const myProfile = useSelector((s) => s.profile.myProfile);

  useEffect(() => {
    if (id) dispatch(getExperiences(id, TAKE_EXP));
  }, [id]);
  useEffect(() => {
    if (id) dispatch(getExperiences(id, TAKE_EXP));
  }, [add]);

  const close = () => {
    setAdd(false);
  };

  const openForm = (exp) => {
    setExp({ ...exp });
    setAdd(true);
  };

  useEffect(() => {
    console.log(experiences);
  }, []);

  return (
    <>
      {add ? (
        <FormExp id={id} close={close} expid={exp} add={add} />
      ) : (
        <Card className="rounded-3 experience-section mb-4 bg-dark text-light">
          <Card.Body>
            <Card.Title className="mb-4">
              <div className="d-flex flex-row justify-content-between flex-nowrap">
                <p>Experience</p>
                {id === myProfile._id && (
                  <div
                    className="me-2 clickable"
                    onClick={() => {
                      setAdd(true);
                      setExp({});
                    }}
                  >
                    <span className="me-2">
                      <IoMdAdd />
                    </span>{" "}
                    <nbsp />
                    <HiOutlinePencil />{" "}
                  </div>
                )}
              </div>
            </Card.Title>

            {experiences.slice(0, expExpand).map((exp, idx) => {
              return <ExpItem key={exp._id} exp={exp} openForm={openForm} />;
            })}
          </Card.Body>
          {expand ? (<div className="show-all-experiences">
            <button className="btn btn-link text-decoration-none w-100 py-3 text-secondary fw-semibold" onClick={()=>{
              setExpand(false)
              setExpExpand(5)
            }}>
              Show all {experiences.length} experiences{" "}
              <span className="ms-1">&rarr;</span>
            </button>
          </div>) : (<div className="show-all-experiences">
            <button className="btn btn-link text-decoration-none w-100 py-3 text-secondary fw-semibold" onClick={()=>{
              setExpand(true)
              setExpExpand(experiences.length)
            }}>
              Show all {experiences.length} experiences{" "}
              <span className="ms-1">&rarr;</span>
            </button>
          </div>)}
        </Card>
      )}
    </>
  );
};

export default ExpCard;
