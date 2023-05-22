import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faSignal,
  faUserXmark,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import profilePicture from "../../../assets/profile.jpg";
import logo from "../../../assets/logoGeoProf.png";
import useAuth from "../Hooks/useAuth";

const Sidebar = () => {
  const { isLoggedIn, user } = useAuth();

  return (
    <div className="sidenav">
      <img className="logo" src={logo} alt="" />
      <div className="lowerBlock">
        <div className="infoBlock">
          {isLoggedIn && (
            <>
              <img className="profilePicture" src={profilePicture} alt="" />
              <p className="name">{user.username}</p>
              <p className="function">functie</p>
            </>
          )}
        </div>
        <div className="categoryBlock">
          <a className="active">
            <FontAwesomeIcon className="home" icon={faHouse} />
            <p>Home</p>
          </a>
          <a className="nav_icons">
            <FontAwesomeIcon icon={faSignal} />
            Status
          </a>
          <a className="nav_icons">
            <FontAwesomeIcon icon={faUserXmark} />
            Days off
          </a>
        </div>
        <div>
          <a className="logOut nav_icons" href="/logout">
            <FontAwesomeIcon icon={faRightFromBracket} />
            Log out
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
