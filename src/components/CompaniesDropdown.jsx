import { NavDropdown } from 'react-bootstrap';
import '../App.css';

const CompaniesDropdown = () => {

    return (
<> 
<NavDropdown className= "companies-dropdown text-white"
title= {
    <div className="flex-column align-items-center ">
        <svg xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        data-supported-dps="24x24" 
        fill="white" 
        width="24" height="24" 
        focusable="false">
      <path d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z"></path>
    </svg>
    <p className="text-white">
        Per le Aziende
        <span className="custom-arrow">
            ▼
            </span></p>
    </div>
}
id="basic-nav-dropdown"
>
    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    <NavDropdown.Divider />
    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
</NavDropdown>

</>
    )


}


export default CompaniesDropdown