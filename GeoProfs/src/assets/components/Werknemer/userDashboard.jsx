import React from "react";
import VerlofComponent from "./request";
import DaysOff from "./daysOff";
import Status from "../Widgets/statusComponent";
import ColleagueDayOff from "./ColleaguesDaysOff";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

const UserDashboard = () => {
  return (
    <div className="componentsBlock">
      <div className="left">
        <div className="Block">
          <div className="BlockAbove">
            <VerlofComponent />
          </div>
          <div className="BlockDown">
            <div className="Blocks">
              <DaysOff />
              <Status />
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="colleaguesDaysOffBlock">
          <div className="colleaguesDaysOffBlock_top">
            <div className="title">
              <p>Colleagues Days Off </p>
            </div>
            <button
              className="dots"
              onClick={() => (window.location.href = `/daysoff`)}
            >
              <FontAwesomeIcon icon={faEllipsis} />
            </button>
          </div>
          <div>
            <ColleagueDayOff />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
