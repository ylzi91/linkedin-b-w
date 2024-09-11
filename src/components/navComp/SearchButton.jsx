import React, { useState } from "react";
import { Dropdown, FormControl } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

const SearchButton = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <Dropdown align="end">
      <Dropdown.Toggle variant="link" id="search-dropdown">
        <FaSearch className="text-white" />
        <p className="text-white iconNames d-none d-lg-flex">Cerca</p>
      </Dropdown.Toggle>

      <Dropdown.Menu className=" bg-dark" style={{ width: "300px" }}>
        <FormControl
          type="text"
          placeholder="Cerca..."
          value={searchQuery}
          onChange={handleInputChange}
          className="bg-dark text-white "
        />
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default SearchButton;
