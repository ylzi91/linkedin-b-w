import { NavDropdown } from "react-bootstrap";
import { TiArrowSortedDown } from "react-icons/ti";
import "../App.css";
import { FaCompass } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi";
import { BsFillFileEarmarkBarGraphFill } from "react-icons/bs";
import { CgClipboard } from "react-icons/cg";
import { ImUserCheck } from "react-icons/im";
import { TbTargetArrow } from "react-icons/tb";
import { BsFillCollectionPlayFill } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";

const CompaniesDropdown = () => {
  return (
    <>
      <NavDropdown
        className=" companies-dropdown d-flex flex-column justify-content-center align-items-center"
        title={
          <div className="d-flex flex-column align-items-center text-white ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-supported-dps="24x24"
              fill="white"
              width="24"
              height="24"
            >
              <path d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z"></path>
            </svg>
            <div className="d-flex align-items-center">
              <p className="text-center m-0 iconNames">
                Per le Aziende
                <span className="custom-arrow iconNames">
                  <TiArrowSortedDown />
                </span>
              </p>
            </div>
          </div>
        }
        id="basic-nav-dropdown"
      >
        <div className=" d-flex flex-column flex-md-row bg-dark text-light px-5 nav-dropdown-divider rounded-start-4 rounded-bottom-4 ov">
          <div className="px-4 my-3 divider dividersm ">
            <div className="">
              <h4 className="fs-5 py-4">Scopri altri prodotti LinkedIn</h4>
              <NavDropdown.Item
                href="#action/3.1"
                className="text-light py-3 hover-drop"
              >
                <span className="pe-2 hover-drop">
                  <FaCompass />
                </span>{" "}
                Trova Lead
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action/3.2"
                className="text-light py-3 hover-drop"
              >
                {" "}
                <span className="pe-2 hover-drop">
                  <HiUserGroup />
                </span>
                Gruppi
              </NavDropdown.Item>
            </div>
            <div>
              <h5 className="text-secondary title pt-4">Talent</h5>
              <NavDropdown.Item
                href="#action/3.3"
                className="text-light py-3 hover-drop"
              >
                <span className="pe-2 hover-drop">
                  <BsFillFileEarmarkBarGraphFill />
                </span>
                Talent Insight
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action/3.4"
                className="text-light py-3 hover-drop"
              >
                <span className="pe-2 hover-drop">
                  <CgClipboard />
                </span>
                Pubblica un' offerta di lavoro
              </NavDropdown.Item>
            </div>
            <div>
              <h5 className="text-secondary title pt-4">Vendite</h5>
              <NavDropdown.Item
                href="#action/3.5"
                className="text-light py-3 hover-drop"
              >
                <span className="pe-2 hover-drop">
                  <ImUserCheck />
                </span>
                Marketplace dei Servizi
              </NavDropdown.Item>
            </div>
            <div>
              <h5 className="text-secondary title pt-4">Marketing</h5>
              <NavDropdown.Item
                href="#action/3.6"
                className="text-light py-3 hover-drop"
              >
                <span className="pe-2 hover-drop">
                  <TbTargetArrow />
                </span>
                Pubblicizza
              </NavDropdown.Item>
            </div>
            <div>
              <h5 className="text-secondary title pt-4">Learning</h5>
              <NavDropdown.Item
                href="#action/3.7"
                className="text-light py-3 hover-drop pb-5"
              >
                <span className="pe-2 hover-drop">
                  <BsFillCollectionPlayFill />
                </span>
                Learning
              </NavDropdown.Item>
            </div>
          </div>
          <div className=" px-4 py-3">
            <h4 className="fs-5 py-4">Scopri altro per il business</h4>
            <div className="py-3 hover-drop">
              <NavDropdown.Item href="#action/3.9" className="text-light ">
                Assumi su Linkedin
              </NavDropdown.Item>
              <p className="text-secondary font ">Trova, attrai e assumi</p>
            </div>
            <div className="py-3 hover-drop">
              <NavDropdown.Item href="#action/4.1" className="text-light ">
                Vendi con Linkedin
              </NavDropdown.Item>
              <p className="text-secondary font ">
                Sblocca nuove opportunità di vendita
              </p>
            </div>
            <div className="py-3 hover-drop">
              <NavDropdown.Item href="#action/4.2" className="text-light ">
                Offerta di lavoro gratuita
              </NavDropdown.Item>
              <p className="text-secondary font ">
                Ottieni rapidamente candidati qualificati
              </p>
            </div>
            <div className="py-3 hover-drop">
              <NavDropdown.Item href="#action/4.3" className="text-light ">
                Fai pubblicità su Linkedin
              </NavDropdown.Item>
              <p className="text-secondary font ">
                Acquisisci clienti e fai crescere la tua azienda
              </p>
            </div>
            <div className="py-3 hover-drop">
              <NavDropdown.Item href="#action/4.4" className="text-light ">
                Impara con Linkedin
              </NavDropdown.Item>
              <p className="text-secondary font ">Assumi su LinkedIn</p>
            </div>
            <div className="py-3 hover-drop">
              <NavDropdown.Item href="#action/4.5" className="text-light ">
                Admin center
              </NavDropdown.Item>
              <p className="text-secondary font ">
                Gestisci i dettagli di fatturazione e account
              </p>
            </div>
            <div className="py-3 hover-drop">
              <NavDropdown.Item href="#action/4.6" className="text-light ">
                Crea una pagina aziendale <FiPlus />
              </NavDropdown.Item>
            </div>
          </div>
        </div>
      </NavDropdown>
    </>
  );
};

export default CompaniesDropdown;
