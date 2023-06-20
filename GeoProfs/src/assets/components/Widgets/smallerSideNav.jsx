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

const SmallerSideNav = ({ value }) => {
  return (
    <div className="smallerSidenav">
      <div className="lowerBlock">
        <div className="infoBlock">
          <img className="profilePicture" src={profilePicture} alt="" />
        </div>
        <div className="categoryBlock">
          <FontAwesomeIcon
            icon={faHouse}
            className={`nav_icons ${value === "dashboard" ? "active" : ""}`}
            onClick={() => (window.location.href = "/dashboard")}
          />
          <FontAwesomeIcon
            icon={faSignal}
            className={`nav_icons ${value === "status" ? "active" : ""}`}
            onClick={() => (window.location.href = "/status")}
          />
          <FontAwesomeIcon
            icon={faUserXmark}
            className={`nav_icons ${value === "daysoff" ? "active" : ""}`}
            onClick={() => (window.location.href = "/daysoff")}
          />
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
