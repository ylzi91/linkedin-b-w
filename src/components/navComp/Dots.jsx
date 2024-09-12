import React, { useState, useEffect, useRef } from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import CompaniesDropdown from "./CompaniesDropdown";
import UserDropdown from "./UserDropdown";


const Dots = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="dots-container" style={{ position: "relative" }}>
      <div
        onClick={toggleMenu}
        className="dots-icon"
        role="button"
        aria-label="Toggle dropdown content"
      >
        <HiOutlineDotsHorizontal size={24} className="text-light" />
      </div>

      {showMenu && (
        <div
          ref={menuRef}
          className="custom-dropdown-menu bg-dark"
          style={{
            position: "absolute",
            top: "35px",
            right: "0",
            borderRadius: "8px",
            zIndex: 1000,
            padding: "10px 30px",
          }}
        >
          <div className="d-flex align-items-center">
            <div className="dropdown-item px-2">
              <UserDropdown />
            </div>
            <div className="dropdown-item px-2">
              <CompaniesDropdown />
            </div>
            <div className="dropdown-item px-2">
              <p className="premium">Prova Premium per 0 EUR</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dots;
