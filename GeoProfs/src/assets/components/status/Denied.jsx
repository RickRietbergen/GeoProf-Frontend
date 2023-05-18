import React from "react";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DeniedStatus = () => {
  return (
    <div className="denied">
      <div className="information">
        <FontAwesomeIcon className="deniedIcon" icon={faCircleXmark} />
        <p className="date">17-5-2023</p>
        <p className="reason">(casual)</p>
      </div>
      <button className="deniedButton">Rejected</button>
    </div>
  );
};

export default DeniedStatus;
