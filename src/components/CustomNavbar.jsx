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
const CustomNavbar = () => {
  return (
    <>
      <div
        id="custom-navbar"
        className="d-flex justify-content-around align-items-center"
      >
       
        <Nav className="d-flex align-items-center justify-content-around w-100">
        <Navbar.Brand>
          <LinkedinIcon />
        </Navbar.Brand>
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
