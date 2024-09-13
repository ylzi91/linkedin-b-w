import { Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SearchButton = ({ showInput, handleIconClick }) => {
  const navigate = useNavigate();
  return (
    <div className={`search-button-container ${showInput ? "open" : ""}`}>
      <Button
        className={`search-button ${showInput ? "open" : ""}`}
        onClick={handleIconClick}
      >
        <FaSearch />
        {showInput && (
          <input
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.keyCode === "13") {
                e.preventDefault();
                navigate(`/search/${e.target.value}`);
              }
            }}
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
