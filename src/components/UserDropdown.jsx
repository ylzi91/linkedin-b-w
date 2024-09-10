import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavDropdown } from "react-bootstrap";
import { FaRegUserCircle } from "react-icons/fa";
import { getProfile, TAKE_MY_PROFILE } from "../redux/actions/index"; 
import "../App.css"; 

const UserDropdown = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile.myProfile); 

  useEffect(() => {
  
    dispatch(getProfile("me", TAKE_MY_PROFILE));
  }, [dispatch]);

  return (
    <NavDropdown
      className="user-dropdown"
      title={
        <div>
          {profile.imageUrl ? (
            <img
              src={profile.imageUrl}
              alt="User Profile"
              className="profile-image"
            />
          ) : (
            <FaRegUserCircle className="profile-icon fs-3" />
          )}
          <div className="d-flex align-items-center mt-2">
            <p className="text-center">
              Tu
              <span className="custom-arrow">▼</span>
            </p>
          </div>
        </div>
      }
      id="collapsible-nav-dropdown"
    >
      <NavDropdown.Item>
        <img src="" alt="User Avatar" />
      </NavDropdown.Item>
      <NavDropdown.Item>Another action</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
    </NavDropdown>
  );
};

export default UserDropdown;
