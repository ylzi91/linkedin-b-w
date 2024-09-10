import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, NavDropdown } from "react-bootstrap";
import { FaRegUserCircle } from "react-icons/fa";
import { getProfile, TAKE_MY_PROFILE } from "../redux/actions/index";
import { TiArrowSortedDown } from "react-icons/ti";
import "../App.css";
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
        <div className="d-flex flex-column align-items-center text-white py-2">
          {profile.image ? (
            <img
              src={profile.image}
              alt="User Profile"
              className="profile-image rounded-circle"
              style={{ width: "30px", height: "30px", objectFit: "cover" }}
            />
          ) : (
            <FaRegUserCircle className="profile-icon fs-4 mb-0" />
          )}
          <div className="d-flex align-items-center ">
            <p className="text-center iconNames d-none d-lg-flex">
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
      <NavDropdown.Item >
        <div className="p-2">
          <div className="containerUserDropdown d-flex">
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
            </div>
          </div>
          <div className="text-center">
            <Button
              variant="outline"
              className="rounded rounded-pill mt-2 btnProfile py-0"
            >
              Visualizza profilo
            </Button>{" "}
          </div>
        </div>
      </NavDropdown.Item>

      <NavDropdown.Divider className="nav-dropdown-divider" />

      <div className="px-3">
        <NavDropdown.Item>
          <h5>Account</h5>
        </NavDropdown.Item>

        <NavDropdown.Item className="text-secondary try"> <FcSimCardChip />Prova 1 mese di Premium per 0 EUR</NavDropdown.Item>

        <NavDropdown.Item className="text-secondary ul">Impostazioni e privacy</NavDropdown.Item>

        <NavDropdown.Item className="text-secondary ul">Guida</NavDropdown.Item>

        <NavDropdown.Item className="pb-1 text-secondary ul">Lingua</NavDropdown.Item>

        <NavDropdown.Divider className="nav-dropdown-divider" />
      </div>
      <div className="px-3">
        <NavDropdown.Item>
          <h5 className="pt-1">Gestisci</h5>
        </NavDropdown.Item>

        <NavDropdown.Item className="text-secondary ul">Post e attivitá</NavDropdown.Item>

        <NavDropdown.Item className="pb-1 text-secondary ul">
          Account per la pubblicazione di offerte
        </NavDropdown.Item>

        <NavDropdown.Divider className="nav-dropdown-divider" />
      </div>
      <div className="px-3">
        <NavDropdown.Item className="pb-4 text-secondary ul">Esci</NavDropdown.Item>
      </div>
    </NavDropdown>
  );
};

export default UserDropdown;
