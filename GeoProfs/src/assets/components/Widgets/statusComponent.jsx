import React from "react";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ConfirmedStatus from "../status/Confirmed";
import DeniedStatus from "../status/Denied";
import PendingStatus from "../status/Pending";

const StatusComponent = () => {
  return (
    <div
      className="statusComponent"
      onClick={() => (window.location.href = `/status`)}
    >
      <DaysOffTop />
      <StatusComponentBottom />
    </div>
  );
};

const DaysOffTop = () => {
  return (
    <div className="daysOffTop">
      <div className="title">
        <p>Status</p>
      </div>
      <button className="dots">
        <FontAwesomeIcon icon={faEllipsis} />
      </button>
    </div>
  );
};

const StatusComponentBottom = () => {
  return (
    <div className="statusComponentBottom">
      <div className="statusComponentBottom">
        <ConfirmedStatus />
        <PendingStatus />
        <DeniedStatus />
      </div>
    </div>
  );
};

export default StatusComponent;
