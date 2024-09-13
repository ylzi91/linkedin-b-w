import { Container, ListGroup, Dropdown } from "react-bootstrap";
import { IoLogoLinkedin } from "react-icons/io";
import React from "react";

const MyFooterDx = () => {
  const access = {
    Link: "https://it.linkedin.com/accessibility?",
  };
  const center = {
    Link: "https://www.linkedin.com/help/linkedin?trk=footer_d_flagship3_feed",
  };
  const opzioni = {
    Link: "https://www.linkedin.com/help/linkedin/answer/a1342443/?lang=it",
  };
  const pubb = {
    Link: "https://business.linkedin.com/marketing-solutions/ads?trk=n_nav_ads_rr_b&src=li-nav&veh=ad%2Fstart",
  };

  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <button
      type="button"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      className="listItem p-0 m-0"
    >
      {children} &#x25bc;
    </button>
  ));

  return (
    <Container className="fsFooter" id="footer-dx">
      <ListGroup
        horizontal
        className="d-flex flex-wrap justify-content-center my-2 "
      >
        <ListGroup.Item className="listItem " key={access}>
          <a href={access.Link} target="_blank" rel="noopener noreferrer">
            Accessibilitá
          </a>
        </ListGroup.Item>

        <ListGroup.Item className="listItem" key={center}>
          <a href={center.Link} target="_blank" rel="noopener noreferrer">
            Centro assistenza
          </a>
        </ListGroup.Item>

        <ListGroup.Item className="listItemDropdown">
          <Dropdown>
            <Dropdown.Toggle as={CustomToggle} id="dropdown-autoclose-true">
              Privacy e condizioni
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                className="dropdownItem"
                href="https://www.linkedin.com/legal/privacy-policy"
              >
                Informativa sulla privacy
              </Dropdown.Item>
              <Dropdown.Item
                className="dropdownItem"
                href="https://www.linkedin.com/legal/user-agreement"
              >
                Contratto di licenza
              </Dropdown.Item>
              <Dropdown.Item
                className="dropdownItem"
                href="https://it.linkedin.com/legal/l/linkedin-pages-terms?"
              >
                Termini e condizioni delle pagine
              </Dropdown.Item>
              <Dropdown.Item
                className="dropdownItem"
                href="https://www.linkedin.com/legal/cookie-policy"
              >
                Informativa sui cookie
              </Dropdown.Item>
              <Dropdown.Item
                className="dropdownItem"
                href="https://www.linkedin.com/legal/copyright-policy"
              >
                Informativa sul copyright
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </ListGroup.Item>

        <ListGroup.Item className="listItem" key={opzioni}>
          <a href={opzioni.Link} target="_blank" rel="noopener noreferrer">
            Opzioni per gli annunci pubblicitari
          </a>
        </ListGroup.Item>

        <ListGroup.Item className="listItem" key={pubb}>
          <a href={pubb.Link} target="_blank" rel="noopener noreferrer">
            Pubblicitá
          </a>
        </ListGroup.Item>

        <ListGroup.Item className="listItem">
          Servizi alle aziende
        </ListGroup.Item>

        <ListGroup.Item className="listItem">
          Scarica l'app LinkedIn
        </ListGroup.Item>

        <ListGroup.Item className="listItem">Altro</ListGroup.Item>
      </ListGroup>

      <p className=" text-center text-white">
        <span className=" fw-semibold ">
          Linked
          <IoLogoLinkedin className="fs-4 pb-1 " />
        </span>{" "}
        LinkedIn Corporation © 2024{" "}
      </p>
    </Container>
  );
};

export default MyFooterDx;
