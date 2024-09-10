import { NavDropdown, Dropdown, Nav } from 'react-bootstrap';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import UserDropdown from './UserDropdown';
import CompaniesDropdown from './CompaniesDropdown';

const Dots = () => {
  return (
    <NavDropdown
      className="dots-dropdown"
      title={
        <div className="text-light">
          <HiOutlineDotsHorizontal />
        </div>
      }
      id="basic-nav-dropdown"
    >
      <div className="d-flex flex-md-row bg-dark text-light px-5 nav-dropdown-divider align-items-center rounded-start-4 rounded-bottom-4 ov">
        <NavDropdown.Item className="px-2" href="#action/3.1">
          <Dropdown>
            <Dropdown.Toggle variant="link" id="user-dropdown">
              <UserDropdown />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#user-action-1">User Action 1</Dropdown.Item>
              <Dropdown.Item href="#user-action-2">User Action 2</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </NavDropdown.Item>
        <NavDropdown.Item className="px-2" href="#action/3.2">
          <CompaniesDropdown />
        </NavDropdown.Item>
        <NavDropdown.Item className="px-2" href="#action/3.3">
          <Nav.Link className="premium">Prova Premium per 0 EUR</Nav.Link>
        </NavDropdown.Item>
      </div>
    </NavDropdown>
  );
};

export default Dots;
