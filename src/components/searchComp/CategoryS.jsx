import { useEffect, useState } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { IoMdBriefcase } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { getCategory, getSearch } from "../../redux/actions";

const CategoryS = ({ query }) => {
  const allJobs = useSelector((state) => state.job.categorySearch);
  const dispatch = useDispatch();
  const [jobExpand, setJobExpand] = useState(5);
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    dispatch(getCategory(query));
    console.log('category', allJobs)
  }, []);
  
  useEffect(() => {
    dispatch(getCategory(query));
    console.log('category', allJobs)
  }, [query]);

  return (
    <>
      <Card
        bg="dark"
        className="text-white rounded-3 text-wrap mb-2 "
        id="Category"
      >
        <Card.Title className="ms-3 py-3">
          Offerte di lavoro inerenti a {allJobs[0]?.category}
        </Card.Title>
        <ListGroup className="p-0 m-0 border-0 border-bottom border-secondary pb-0 rounded-0">
          {allJobs.slice(0, jobExpand).map((job, i) => {
            return (
              <ListGroup.Item
                key={i}
                className="bg-dark pt-2 d-flex pb-2 border-0 pb-0 justify-content-between mx-4 d-flex align-items-center"
              >
                <div className="text-white flex-column w-100 me-0 ps-1">
                  <p className="fw-bold">{job.title}</p>
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
              Hide jobs{" "}
              <span className="ms-1">&larr;</span>
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
      </Card>
    </>
  );
};

export default CategoryS;
