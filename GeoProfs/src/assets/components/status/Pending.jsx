import React from "react";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PendingStatus = () => {
  return (
    <div className="pending">
      <div className="information">
        <FontAwesomeIcon className="clockIcon" icon={faClock} />
        <p className="date">17-5-2023</p>
        <p className="reason">(sick)</p>
      </div>
      <button className="pendingButton">Pending</button>
    </div>
  );
};

export default PendingStatus;
