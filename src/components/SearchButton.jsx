import { FaSearch } from "react-icons/fa";

const SearchButton = () => {
  return (
    <div>
      <FaSearch />
      <p className="text-white iconNames d-none d-lg-flex">Rete</p>
    </div>
  );
};

export default SearchButton;
