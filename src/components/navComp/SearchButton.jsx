import { Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";


const SearchButton = ({ showInput, handleIconClick }) => {
  return (
    <div className={`search-button-container ${showInput ? "open" : ""}`}>
      <Button
        className={`search-button ${showInput ? "open" : ""}`}
        onClick={handleIconClick}
      >
        <FaSearch />
        {showInput && (
          <input
            type="text"
            placeholder="Cerca..."
            className={`search-input ${showInput ? "open" : ""}`}
          />
        )}
      </Button>
    </div>
  );
};

export default SearchButton;
