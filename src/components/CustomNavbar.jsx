import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import LinkedinIcon from "./navComp/LinkedinIcon";
import SearchBar from "./navComp/SearchBar";
import HomeButton from "./navComp/HomeButton";
import ReteButton from "./ReteButton";
import LavoroButton from "./navComp/LavoroButton";
import MessaggiButton from "./navComp/MessaggiButton";
import NotificheButton from "./NotificheButton";
import CompaniesDropdown from "./navComp/CompaniesDropdown";
import UserDropdown from "./navComp/UserDropdown";
const CustomNavbar = () => {
  return (
    <>
      <div
        id="custom-navbar"
        className="d-flex justify-content-center align-items-center container-fluid flex-nowrap"
      >
        <Navbar.Brand>
          <LinkedinIcon />
        </Navbar.Brand>
        <Nav className="d-flex align-items-center">
          <Nav.Link className="ps-1">
            <SearchBar />
          </Nav.Link>
          <Nav.Link className="ps-1">
            <HomeButton />
          </Nav.Link>
          <Nav.Link>
            <ReteButton />
          </Nav.Link>
          <Nav.Link>
            <LavoroButton />
          </Nav.Link>
          <Nav.Link>
            <MessaggiButton />
          </Nav.Link>
          <Nav.Link>
            <NotificheButton />
          </Nav.Link>
          <Nav.Link>
            <UserDropdown />
          </Nav.Link>
          <Nav.Link > 
            <CompaniesDropdown />
          </Nav.Link>
          <Nav.Link>
            <p className="premium">Prova Premium per 0 EUR</p>
          </Nav.Link>
        </Nav>
      </div>
    </>
  );
};

export default CustomNavbar;
