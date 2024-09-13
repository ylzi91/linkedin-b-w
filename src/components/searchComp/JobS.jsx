import { useEffect, useState } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { IoMdBriefcase } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { getSearch } from "../../redux/actions";

const JobS = ({ query, setCategoryQuery }) => {
  const allJobs = useSelector((state) => state.job.querySearch);
  const dispatch = useDispatch();
  const [jobExpand, setJobExpand] = useState(5);
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    dispatch(getSearch(query));
    setCategoryQuery(allJobs[0]?.category);
  }, [allJobs]);

  return (
    <>
      <Card
        bg="dark"
        className="text-white rounded-3 text-wrap mb-2 "
        id="Jobs"
      >
        {allJobs.length === 0 ? (
          <div
            className="d-flex align-items-center px-3 text-secondary"
            style={{ height: "70px" }}
          >
            <p> Nessuna azienda trovata. </p>
          </div>
        ) : (
          <>
            <Card.Title className="ms-3 py-3">
              Offerte di lavoro che potrebbero interessarti
            </Card.Title>
            <ListGroup className="p-0 m-0 border-0 border-bottom border-secondary pb-0 rounded-0">
              {allJobs.slice(0, jobExpand).map((job, i) => {
                return (
                  <ListGroup.Item
                    key={i}
                    className="bg-dark pt-2 d-flex pb-2 border-0 border-secondary border-bottom pb-0 justify-content-between mx-4 align-content-center"
                  >
                    <div className="text-white flex-column w-100 me-0 ps-1">
                      <p className="mb-1 fw-bold">{job.title}</p>
                      <p className="py-1 text-secondary">{job.company}</p>
                      <p className="py-1 text-secondary">{job.location}</p>
                    </div>
                    <Button
                      variant="link"
                      className="text-white p-0"
                      aria-label="Apply for job"
                    >
                      <IoMdBriefcase size={20} />
                    </Button>
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
            {expand ? (
              <div className="show-all-jobs">
                <button
                  className="btn btn-link text-decoration-none w-100 py-3 text-secondary fw-semibold"
                  onClick={() => {
                    setExpand(false);
                    setJobExpand(5);
                  }}
                >
                  Hide jobs <span className="ms-1">&larr;</span>
                </button>
              </div>
            ) : (
              <div className="show-all-jobs">
                <button
                  className="btn btn-link text-decoration-none w-100 py-3 text-secondary fw-semibold"
                  onClick={() => {
                    setExpand(true);
                    setJobExpand(allJobs.length);
                  }}
                >
                  Show all {allJobs.length} jobs{" "}
                  <span className="ms-1">&rarr;</span>
                </button>
              </div>
            )}
          </>
        )}
      </Card>
    </>
  );
};

export default JobS;
