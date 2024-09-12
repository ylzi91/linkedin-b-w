
import { Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

const SearchButton = ( {showInput, handleIconClick}) => {
 
  return (
    <div>
       {!showInput && (
       <FaSearch onClick={
        handleIconClick} />
      )}
      {showInput && (
        <div className="d-flex">
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
