import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, NavDropdown } from "react-bootstrap";
import { FaRegUserCircle } from "react-icons/fa";
import { getProfile, TAKE_MY_PROFILE } from "../../redux/actions/index";
import { TiArrowSortedDown } from "react-icons/ti";
import { FcSimCardChip } from "react-icons/fc";

const UserDropdown = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile.myProfile);

  useEffect(() => {
    dispatch(getProfile("me", TAKE_MY_PROFILE));
  }, [dispatch]);

  return (
    <NavDropdown
      className=" user-dropdown d-flex flex-column justify-content-center align-items-center"
      title={
        <div className="d-flex flex-column align-items-center text-white">
          {profile.image ? (
            <img
              src={profile.image}
              alt="User Profile"
              className="profile-image rounded-circle mb-1"
              style={{ width: "40px", height: "40px", objectFit: "cover" }}
            />
          ) : (
            <FaRegUserCircle className="profile-icon fs-4 mb-0" />
          )}
          <div className="d-flex align-items-center">
            <p className="text-center m-0 iconNames">
              Tu
              <span className="custom-arrow iconNames  ">
                <TiArrowSortedDown />
              </span>
            </p>
          </div>
        </div>
      }
      id="collapsible-nav-dropdown"
    >
      <NavDropdown.Item>
        <div className="containerUserDropdown d-flex   ">
          {profile.image ? (
            <img
              src={profile.image}
              alt="User Profile"
              className="profile-image rounded-circle mb-1"
              style={{ width: "60px", height: "60px", objectFit: "cover" }}
            />
          ) : (
            <FaRegUserCircle className="profile-icon fs-1 me-3" />
          )}
          <div>
            <h5>{profile.name}</h5>
            <p>{profile.title}</p>
            <Button variant="outline" className="btnProfile">
              Visualizza profilo
            </Button>{" "}
          </div>
        </div>
      </NavDropdown.Item>

      <NavDropdown.Divider className="nav-dropdown-divider" />

      <NavDropdown.Item>
        <h6>Account</h6>
      </NavDropdown.Item>

      <NavDropdown.Item>Prova 1 mese du Premium per 0 EUR</NavDropdown.Item>

      <NavDropdown.Item>Impostazioni e privacy</NavDropdown.Item>

      <NavDropdown.Item>Guida</NavDropdown.Item>

      <NavDropdown.Item>Lingua</NavDropdown.Item>

      <NavDropdown.Divider className="nav-dropdown-divider" />

      <NavDropdown.Item>
        <h6>Gestisci</h6>
      </NavDropdown.Item>

      <NavDropdown.Item>Post e attivitá</NavDropdown.Item>

      <NavDropdown.Item>
        Account per la pubblicazione di offerte
      </NavDropdown.Item>

      <NavDropdown.Divider className="nav-dropdown-divider" />

      <NavDropdown.Item>Esci</NavDropdown.Item>
    </NavDropdown>
  );
};

export default UserDropdown;
