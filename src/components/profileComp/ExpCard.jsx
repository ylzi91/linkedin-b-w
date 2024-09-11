import { Button, Card, Modal } from "react-bootstrap";
import ExpItem from "./ExpItem";
import { useEffect, useState } from "react";
import { IoMdAdd, IoMdClose } from "react-icons/io";
import { IoPencilOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { getExperiences, TAKE_EXP, TAKE_MY_PROFILE } from "../../redux/actions";
import FormExp from "./FormExp";

const ExpCard = ({ id }) => {
  const [add, setAdd] = useState(false);
  const [exp, setExp] = useState({})
  const dispatch = useDispatch();
  const experiences = useSelector((s) => s.experience.allExperiences);

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
    setExp({...exp})
    setAdd(true)
  }


  useEffect(() => {
    console.log(experiences);
  }, []);

  return (
    <>
      {add ? (
          <Modal show><Modal.Header className="bg-dark text-light justify-content-end"><IoMdClose onClick={(e)=>{e.preventDefault(); close()}} /> </Modal.Header><FormExp id={id} close={close} expid={exp} add={add}/></Modal>
      ) : (
        <Card className="experience-section mb-4 bg-dark text-light">
          <Card.Body>
            <Card.Title className="mb-4">
              <div className="d-flex flex-row justify-content-between flex-nowrap">
                <p>Experience</p>
                <div onClick={() => {setAdd(true)
                  setExp({})}
                }>
                  <IoMdAdd />
                  <IoPencilOutline />
                </div>
              </div>
            </Card.Title>

                {experiences.map((exp, idx) => {
                  return (
                    <ExpItem
                      key={exp._id}
                      exp={exp}
                      openForm={openForm}
                    />
                  );
                })}
          </Card.Body>
          <div className="show-all-experiences">
            <button className="btn btn-link text-decoration-none w-100 py-3 text-secondary fw-semibold">
              Show all {experiences.length} experiences{" "}
              <span className="ms-1">&rarr;</span>
            </button>
          </div>
        </Card>
      )}
    </>
  );
};

export default ExpCard;
