import { useEffect, useState } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { IoMdBriefcase } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { getSearch } from "../../redux/actions";

const JobS = ({ query }) => {
  const allJobs = useSelector((state) => state.job.querySearch);
  const dispatch = useDispatch();
  const [jobExpand, setJobExpand] = useState(5);
  const [expand, setExpand] = useState(false);

  // Effettua la ricerca dei lavori al caricamento iniziale del componente
  useEffect(() => {
    dispatch(getSearch(query));
  }, [dispatch, query]);

  // Funzione per controllare se ci sono risultati
  const filteredJobs = allJobs;

  return (
    <>
      <Card bg="dark" className="text-white rounded-3 text-wrap mb-2" id="Jobs">

        {/* Controlla se ci sono lavori */}
        {filteredJobs.length === 0 ? (
          <div  className="d-flex align-items-center px-3 text-secondary" style={{height: "70px"}}>
          <p> Nessuna annuncio trovato. </p>
        </div>
        ) : (
          <>
            <ListGroup className="p-0 m-0 border-0 border-bottom border-secondary pb-0 rounded-0">
              {/* Mostra i lavori filtrati in base a jobExpand */}
              {filteredJobs.slice(0, jobExpand).map((job, i) => {
                return (
                  <ListGroup.Item
                    key={i}
                    className="bg-dark px-2 py-3 d-flex align-items-center pb-2 border-0 pb-0 justify-content-between mx-4 align-content-center"
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

            {/* Bottone per espandere o nascondere i lavori */}
            {expand ? (
              <div className="show-all-jobs">
                <button
                  className="btn btn-link text-decoration-none w-100 py-3 text-secondary fw-semibold"
                  onClick={() => {
                    setExpand(false);
                    setJobExpand(5); // Riduci la lista a 5 lavori
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
                    setJobExpand(filteredJobs.length); // Espandi la lista per mostrare tutti i lavori
                  }}
                >
                  Show all {filteredJobs.length} jobs <span className="ms-1">&rarr;</span>
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
