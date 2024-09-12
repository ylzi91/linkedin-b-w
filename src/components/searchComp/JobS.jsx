import { Button, Card, ListGroup } from "react-bootstrap";
import { IoMdBriefcase } from "react-icons/io";
import { useSelector } from "react-redux";

const JobS = ({ query }) => {
  const allJobs = useSelector((state) => state.job.querySearch);

  return (
    <>
      <Card bg="dark" className="text-white rounded-3 text-wrap mb-2 mt-3" id="Jobs">
        <Card.Title className="ms-3 py-3">
          Offerte di lavoro che potrebbero interessarti
        </Card.Title>
        <ListGroup className="p-0 m-0 border-0 border-bottom border-secondary pb-0 rounded-0">
          {allJobs
            .filter(
              (job) =>
                job.title.includes(query) ||
                job.company.includes(query) ||
                job.location.includes(query)
            )
            .map((job) => {
              return (
                <ListGroup.Item
                  key={job.id}
                  className="bg-dark pt-2 d-flex pe-0 border-0 pb-0"
                >
                  <div>
                    <img
                      src={job.companyLogo}
                      className="job-logo rounded-circle"
                      alt="company logo"
                    />
                  </div>
                  <div className="text-white flex-column w-100 me-0 ps-3 pb-2 border-0 border-secondary border-bottom">
                    <p className="mb-1 fw-bold">{job.title}</p>
                    <p className="py-1 text-secondary">{job.company}</p>
                    <p className="py-1 text-secondary">{job.location}</p>
                  </div>
                  <Button
                    variant="link"
                    className="text-white ms-auto p-0"
                    aria-label="Apply for job"
                  >
                    <IoMdBriefcase size={20} />
                  </Button>
                </ListGroup.Item>
              );
            })}
        </ListGroup>
        <div className="show-all-jobs">
          <button className="btn btn-link text-decoration-none w-100 py-3 text-secondary fw-semibold">
            Show all jobs <span className="ms-1">&rarr;</span>
          </button>
        </div>
      </Card>
    </>
  );
};

export default JobS;