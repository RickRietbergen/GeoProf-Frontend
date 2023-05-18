import React from "react";
import { faChevronRight, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ConfirmedStatus from "../status/Confirmed";
import DeniedStatus from "../status/Denied";
import PendingStatus from "../status/Pending";

const StatusComponent = () => {
  return (
    <div className="statusComponent">
      <DaysOffTop />
      <div className="line"></div>
      <StatusComponentBottom />
    </div>
  );
};

const DaysOffTop = () => {
  return (
    <div className="daysOffTop">
      <div className="title">
        <FontAwesomeIcon icon={faSpinner} />
        <p>Status</p>
      </div>
      <button className="seeAll">
        <p>See all</p>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

const StatusComponentBottom = () => {
  return (
    <div className="statusComponentBottom">
      <ConfirmedStatus />
      <PendingStatus />
      <DeniedStatus />
    </div>
  );
};

export default StatusComponent;
