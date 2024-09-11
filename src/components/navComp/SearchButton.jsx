import React, { useState } from "react";
import { Dropdown, FormControl } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

const SearchButton = () => {
 const [isSearchActive, setIsSearchActive] = useState (false);
 const [searchQuery, setSearchQuery] = useState ("");

const handleSearchClick = () => {
  setIsSearchActive(!isSearchActive);

};

const handleInputChange = (e) => {
  setSearchQuery(e.target.value);
};
return (
  <div align="end">
    <Dropdown.Toggle variant="link" onClick={handleSearchClick}>
      {isSearchActive ? (
        <FormControl
        type="text"
        placeholder="cerca..."
        value={searchQuery}
        onChange={handleInputChange}
        className="bg-dark text-white"
        autoFocus
        />
      ) : (
        <>
        <FaSearch className="text-white"/>
        <p className="text-white iconNames d-none d-lg-flex">Cerca</p>
        </>

      
      )}
    </Dropdown.Toggle>
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