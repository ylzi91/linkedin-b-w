import { Navbar, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import LinkedinIcon from "./navComp/LinkedinIcon";
import SearchBar from "./navComp/SearchBar";
import HomeButton from "./navComp/HomeButton";
import ReteButton from "./navComp/ReteButton";
import LavoroButton from "./navComp/LavoroButton";
import MessaggiButton from "./navComp/MessaggiButton";
import NotificheButton from "./navComp/NotificheButton";
import UserDropdown from "./navComp/UserDropdown";
import CompaniesDropdown from "./navComp/CompaniesDropdown";
import SearchButton from "./navComp/SearchButton";
import Dots from "./navComp/Dots";

const CustomNavbar = () => {
  const [showInput, setShowInput] = useState(false);

  const handleIconClick = () => {
    setShowInput(true);
  };

 
  useEffect(() => {
    const handleResize = () => {
    
      if (window.innerWidth >= 992) {
        setShowInput(false); 
      }
    };
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      id="custom-navbar"
      className="d-flex justify-content-around align-items-center"
    >
      <Nav className="d-flex align-items-center justify-content-between w-100">
        <div className="d-flex align-items-center flex-grow-1"> 
          <Navbar.Brand>
            <LinkedinIcon />
          </Navbar.Brand>

          <Nav.Link className="ps-1 d-flex d-lg-none underl w-100">
            <SearchButton showInput={showInput} handleIconClick={handleIconClick} />
          </Nav.Link>
          <Nav.Link className="d-none d-lg-flex ps-1 underl">
            <SearchBar />
          </Nav.Link>
        </div>
        {!showInput && (
          <>
            <div className="d-flex align-items-center justify-content-around flex-grow-1">
              <Nav.Link className="text-light d-flex d-lg-none underl"></Nav.Link>
              <Nav.Link className="underl">
                <HomeButton />
              </Nav.Link>
              <Nav.Link className="underl">
                <ReteButton />
              </Nav.Link>
              <Nav.Link className="underl">
                <LavoroButton />
              </Nav.Link>
              <Nav.Link className="underl">
                <MessaggiButton />
              </Nav.Link>
              <Nav.Link className="underl">
                <NotificheButton />
              </Nav.Link>
              <Nav.Link className="me-2 d-none d-md-flex">
                <UserDropdown />
              </Nav.Link>
              <Nav.Link className="d-flex d-md-none underl">
                <Dots />
              </Nav.Link>
            </div>

            <div className="d-flex align-items-center">
              <Nav.Link className="d-none d-md-flex mx-2 ">
                <CompaniesDropdown />
              </Nav.Link>
              <Nav.Link className="d-none d-md-flex">
                <p className="premium">Prova Premium per 0 EUR</p>
              </Nav.Link>
            </div>
          </>
        )}
      </Nav>
    </div>
  );
};

export default CustomNavbar;
