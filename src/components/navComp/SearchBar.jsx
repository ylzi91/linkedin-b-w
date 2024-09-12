import { InputGroup, Form } from "react-bootstrap";
import { IoMdSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  return (
    <InputGroup id="search" className="me-5">
      <InputGroup.Text>
        <IoMdSearch className="fs-5" />
      </InputGroup.Text>
      <Form.Control
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.keyCode === "13") {
            navigate(`search/:${e.target.value}`);
          }
        }}
        placeholder="Cerca"
        aria-label="Search"
      />
    </InputGroup>
  );
};

export default SearchBar;
