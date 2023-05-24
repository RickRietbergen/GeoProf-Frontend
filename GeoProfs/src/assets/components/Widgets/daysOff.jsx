import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faEllipsis } from "@fortawesome/free-solid-svg-icons";
const DaysOffComponent = () => {
  return (
    <div className="daysOffComponent">
      <div className="daysOffTop">
        <div className="title">
          <p>Days Off</p>
        </div>
        <button className="dots">
          <FontAwesomeIcon icon={faEllipsis} />
        </button>
      </div>
      <div className="daysOffBottom">
        <div
          role="progressbar"
          aria-valuenow={20}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
        <p className="maximum">OUT OF 20</p>
      </div>
    </div>
  );
};

export default DaysOffComponent;
