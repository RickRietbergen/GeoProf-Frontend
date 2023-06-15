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
import "../../../../src/responsiveness.css";
import "../../../responsiveness.css";

const Navbar = ({ value }) => {
  const { isLoggedIn, user } = useAuth();

  return (
    <div className="sidenav">
      <img
        className="logo"
        src={logo}
        alt="logo"
        onClick={() => (window.location.href = `/dashboard`)}
      />
      <div className="lowerBlock">
        <div className="infoBlock">
          {isLoggedIn && (
            <>
              <img className="profilePicture" src={profilePicture} alt="" />
              <p className="name">{user.username}</p>
              <p className="function">{user.afdelingnaam}</p>
            </>
          )}
        </div>
        <div className="categoryBlock">
          <a
            className={`nav_icons ${value === "dashboard" ? "active" : ""}`}
            onClick={() => (window.location.href = "/dashboard")}
          >
            <FontAwesomeIcon icon={faHouse} />
            <p>Home</p>
          </a>
          <a
            className={`nav_icons ${value === "status" ? "active" : ""}`}
            onClick={() => (window.location.href = "/status")}
          >
            <FontAwesomeIcon icon={faSignal} />
            Status
          </a>
          <a
            className={`nav_icons ${value === "daysoff" ? "active" : ""}`}
            onClick={() => (window.location.href = "/daysoff")}
          >
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

export default Navbar;
