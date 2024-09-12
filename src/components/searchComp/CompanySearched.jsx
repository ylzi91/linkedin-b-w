import { Card } from "react-bootstrap";
import { HiOutlinePencil } from "react-icons/hi";
import { IoMdAdd } from "react-icons/io";
import ExpItem from "../profileComp/ExpItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCompany, getSearch } from "../../redux/actions";
import CompanyItem from "./CompanyItem";

const CompanySearched = ({ query }) => {
  const dispatch = useDispatch();
  const company = useSelector((s) => s.job.companySearch);

  useEffect(() => {
    dispatch(getCompany("Robots"));
    console.log(company);
  }, []);

  return (
    <>
      <Card className="rounded-3 experience-section mb-4 bg-dark text-light">
        <Card.Body className="pb-0">
          <Card.Title className="mb-4">Company</Card.Title>
          {company.map((c)=>{
            return <CompanyItem data={c} />
          })}
        </Card.Body>
        <div className="show-all-experiences">
          <button className="btn btn-link text-decoration-none w-100 py-3 text-secondary fw-semibold">
            Show allexperiences
            <span className="ms-1">&rarr;</span>
          </button>
        </div>
      </Card>
    </>
  );
};

export default CompanySearched;
