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
const SmallerSideNav = () => {
  return (
    <div className="smallerSidenav">
      <img className="smallerLogo" src={logo} alt="" />
      <div className="lowerBlock">
        <div className="infoBlock">
          <img className="profilePicture" src={profilePicture} alt="" />
        </div>
        <div className="categoryBlock">
          <a className="active">
            <FontAwesomeIcon className="home" icon={faHouse} />
          </a>
          <a className="nav_icons">
            <FontAwesomeIcon icon={faSignal} />
          </a>
          <a className="nav_icons">
            <FontAwesomeIcon icon={faUserXmark} />
          </a>
        </div>
        <div>
          <a className="logOut nav_icons" href="/logout">
            <FontAwesomeIcon icon={faRightFromBracket} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SmallerSideNav;
