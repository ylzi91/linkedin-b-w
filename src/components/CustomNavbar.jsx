import { Navbar, Nav } from "react-bootstrap";
import LinkedinIcon from "./LinkedinIcon";
import SearchBar from "./SearchBar";
import HomeButton from "./HomeButton";
import ReteButton from "./ReteButton";
import LavoroButton from "./LavoroButton";
import MessaggiButton from "./MessaggiButton";
import NotificheButton from "./NotificheButton";
import UserDropdown from "./UserDropdown";
import CompaniesDropdown from "./CompaniesDropdown";
import SearchButton from "./SearchButton";
const CustomNavbar = () => {
  return (
    <>
      <div
        id="custom-navbar"
        className="d-flex justify-content-around align-items-center"
      >
       
        <Nav className="d-flex align-items-center justify-content-between w-100">
          <div className="d-flex align-items-center">
        <Navbar.Brand>
          <LinkedinIcon />
        </Navbar.Brand>
          <Nav.Link className="ps-1 d-none d-lg-flex">
            <SearchBar />
          </Nav.Link>
         
          </div>
          <div className="d-flex align-items-center justify-content-around flex-grow-1">
          <Nav.Link className="text-light d-flex d-lg-none">
            <SearchButton/>
          </Nav.Link>
          <Nav.Link >
            <HomeButton />
          </Nav.Link>
          <Nav.Link >
            <ReteButton />
          </Nav.Link>
          <Nav.Link >
            <LavoroButton />
          </Nav.Link>
          <Nav.Link >
            <MessaggiButton />
          </Nav.Link>
          <Nav.Link  >
            <NotificheButton />
          </Nav.Link>
          <Nav.Link className="me-5" >
            <UserDropdown />
          </Nav.Link>
          </div>
          <div className="d-flex align-items-center">
          <Nav.Link > 
            <CompaniesDropdown />
          </Nav.Link>
          <Nav.Link>
            <p className="premium">Prova Premium per 0 EUR</p>
          </Nav.Link>
          </div>
        </Nav>
      </div>
    </>
  );
};

export default CustomNavbar;
