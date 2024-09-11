import React, { useState } from "react";
import { Button, FormControl } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

const SearchButton = () => {
 const [isSearchActive, setIsSearchActive] = useState (false);
 const [searchQuery, setSearchQuery] = useState ("");

const handleToggle = () => {
  setIsSearchActive(!isSearchActive);

};

const handleInputChange = (e) => {
  setSearchQuery(e.target.value);
};
return (
  <div align="end">
    {isSearchActive ? (
      <div className="d-flex align-items-center">
        <FormControl
          type="text"
          placeholder="Cerca..."
          value={searchQuery}
          onChange={handleInputChange}
          className="bg-dark text-white"
        />
        <Button
          variant="link"
          onClick={handleToggle}
          className="text-white ms-2"
        >
          <FaSearch />
        </Button>
      </div>
    ) : (
      <div className="d-flex align-items-center">
        <Button
          variant="link"
          onClick={handleToggle}
          className="d-md-none text-white bg-dark" 
        >
          <FaSearch />
        </Button>
      </div>
    )}
  </div>
  );
};

export default SearchButton

// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import Toggle from 'react-bootstrap-toggle';
 
// class Form extends Component {
//   constructor() {
//     super();
//     this.state = { toggleActive: false };
//     this.onToggle = this.onToggle.bind(this);
//   }
 
//   onToggle() {
//     this.setState({ toggleActive: !this.state.toggleActive });
//   }
 
//   render() {
//     return (
//       <form>
//         <SomeInput something={someProp} />
//         .....
//         <Toggle
//           onClick={this.onToggle}
//           on={<h2>ON</h2>}
//           off={<h2>OFF</h2>}
//           size="xs"
//           offstyle="danger"
//           active={this.state.toggleActive}
//         />
//       </form>
//     )
//   }
 
// }