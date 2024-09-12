import { InputGroup, Form } from "react-bootstrap";
import { IoMdSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const query = e.target.value.trim(); 
      if (query) {
        navigate(`/search/${query}`); 
      }
    }
  };

  return (
    <InputGroup id="search" className="me-5">
      <InputGroup.Text>
        <IoMdSearch className="fs-5" />
      </InputGroup.Text>
      <Form.Control
        onKeyDown={handleKeyDown}
        placeholder="Cerca"
        aria-label="Search"
      />
    </InputGroup>
  );
};

export default SearchBar;
