import { Card } from "react-bootstrap";
import { HiOutlinePencil } from "react-icons/hi";
import { IoMdAdd } from "react-icons/io";
import ExpItem from "../profileComp/ExpItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCompany, getSearch } from "../../redux/actions";
import CompanyItem from "./CompanyItem";

const CompanySearched = ({ query }) => {
  const dispatch = useDispatch();
  const company = useSelector((s) => s.job.companySearch);
  const [compExpand, setCompExpand] = useState(5);
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    dispatch(getCompany(query));
    console.log(company);
  }, []);

  useEffect(() => {
    dispatch(getCompany(query));
  }, [query]);

  return (
    <>
      <Card className="rounded-3 experience-section mb-2 bg-dark text-light">
        <Card.Body className="pb-0">
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
              HIide company
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
      </Card>
    </>
  );
};

export default CompanySearched;
