import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faSignal,
  faUserXmark,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import profilePicture from "../../../assets/profile.jpg";
import "../../../responsiveness.css";
import "../../../smalnav.css";

const SmallerSideNav = () => {
  return (
    <div className="smallerSidenav">
      <div className="lowerBlock">
        <div className="infoBlock">
          <img className="profilePicture" src={profilePicture} alt="" />
        </div>
        <div className="categoryBlock">
          <a className="active">
            <FontAwesomeIcon
              className="home"
              icon={faHouse}
              onClick={() => (window.location.href = "/dashboard")}
            />
          </a>
          <a className="nav_icons">
            <FontAwesomeIcon
              icon={faSignal}
              onClick={() => (window.location.href = "/status")}
            />
          </a>
          <a className="nav_icons">
            <FontAwesomeIcon
              icon={faUserXmark}
              onClick={() => (window.location.href = "/daysoff")}
            />
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
