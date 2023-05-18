import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
const DaysOffComponent = () => {
  return (
    <div className="daysOffComponent">
      <div className="daysOffTop">
        <div className="title">
          <FontAwesomeIcon icon={faCalendarDays} />
          <p>Days Off</p>
        </div>
        <button className="seeAll">
          <p>See all</p>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      <div className="line"></div>
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
