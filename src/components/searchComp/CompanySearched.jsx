import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCompany } from "../../redux/actions";
import CompanyItem from "./CompanyItem";

const CompanySearched = ({ query }) => {
  const dispatch = useDispatch();
  const company = useSelector((s) => s.job.companySearch);
  const [compExpand, setCompExpand] = useState(5);
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    dispatch(getCompany(query));
  }, [dispatch, query]);

  return (
    <>
      <Card className="rounded-3 experience-section mb-2 bg-dark text-light">
        {company.length === 0 ? (
          <div  className="d-flex align-items-center px-3 text-secondary" style={{height: "70px"}}>
            <p> Nessuna azienda trovata. </p>
          </div>
        ) : (
          <>
            <Card.Body className="pb-0 border-bottom border-secondary">
              <Card.Title className="mb-4">Company</Card.Title>
              {company.slice(0, compExpand).map((c, id) => {
                return <CompanyItem key={id} data={c} />;
              })}
            </Card.Body>
            {expand ? (
              <div className="show-all-experiences">
                <button
                  className="btn btn-link text-decoration-none w-100 py-3 text-secondary fw-semibold"
                  onClick={() => {
                    setExpand(false);
                    setCompExpand(5);
                  }}
                >
                  Hide company
                  <span className="ms-1">&larr;</span>
                </button>
              </div>
            ) : (
              <div className="show-all-experiences">
                <button
                  className="btn btn-link text-decoration-none w-100 py-3 text-secondary fw-semibold"
                  onClick={() => {
                    setExpand(true);
                    setCompExpand(company.length);
                  }}
                >
                  Show all {company.length} company
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

export default CompanySearched;
