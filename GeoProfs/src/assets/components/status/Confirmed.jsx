import React from "react";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ConfirmedStatus = () => {
  return (
    <div className="confirmed">
      <div className="information">
        <FontAwesomeIcon className="checkIcon" icon={faCircleCheck} />
        <p className="date">17-5-2023</p>
        <p className="reason">(annual)</p>
      </div>
      <button className="confirmedButton">Confirmed</button>
    </div>
  );
};
export default ConfirmedStatus;
