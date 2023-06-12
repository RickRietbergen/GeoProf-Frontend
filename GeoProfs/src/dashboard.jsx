import React from "react";
import "./dashboard.css";
import SideNav from "./assets/components/Widgets/sideNav";
import Smallernav from "./assets/components/Widgets/smallerSideNav";
import UserDashboard from "./assets/components/userDashboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import RequestBlock from "./assets/components/Widgets/requestBlock";
import {
  faUsers,
  faClock,
  faEnvelope,
  faCheck,
  faXmark,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";

function Dashboard() {
  return (
    <div className="background">
      <SideNav value="dashboard" className="nav" />
      <Smallernav className="smallNav" />
      {/* <UserDashboard /> */}
      <div className="componentsBlock componentsBlock_manager">
        <div className="manager_block_above">
          <div className="managers_blocks">
            <div className="managers_blocks_title">
              <FontAwesomeIcon icon={faUsers} />
              <p> Employees</p>
            </div>
            <div className="managers_blocks_number">20</div>
          </div>
          <div className="managers_blocks">
            <div className="managers_blocks_title">
              <FontAwesomeIcon icon={faClock} />
              <p> To Request</p>
            </div>
            <div className="managers_blocks_number">20</div>
          </div>
          <div className="managers_blocks">
            <div className="managers_blocks_title">
              <FontAwesomeIcon icon={faEnvelope} />
              <p>Notifications</p>
            </div>
            <div className="managers_blocks_number">20</div>
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
        {/* <div className="manager_block_bottom">
          <div className="titleName">
            Recent Requests
            <button className="dotsMore">
              <FontAwesomeIcon icon={faEllipsis} />
            </button>
          </div>
          <div className="requestBlocks">
            <RequestBlock />
            <RequestBlock />
            <RequestBlock />
            <RequestBlock />
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Dashboard;
