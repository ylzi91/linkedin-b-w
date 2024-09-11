import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

const SearchButton = () => {
  const [showInput, setShowInput] = useState(false);
  const handleIconClick = () => {
    setShowInput(true);
  
  };
  return (
    <div>
       {!showInput && (
       <FaSearch onClick={
        handleIconClick} />
      )}
      {showInput && (
        <div>
          <Button className="bg-dark text-white border-0">
          <FaSearch />
         <input
           type="text"
            placeholder="Cerca..."
            className="bg-dark text-white"
          />
          </Button>
        </div>
       
          
        )}
      
    </div>
  );
};
 


export default SearchButton;
