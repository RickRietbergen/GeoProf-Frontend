import React from "react";
import arrow from "../../../assets/arrow.png";

const PendingBlock = () => {
  return (
    <div className="pendingBlock item">
      <div className="pending_title">Pending</div>
      <div className="align_and_center">
        <div className="dateBlock">
          <div className="align-center">
            <div className="beginMonth">DEC</div>
            <div className="day">16</div>
            <div className="endMonth">TUE</div>
          </div>
          <img className="arrow" src={arrow}></img>
          <div className="align-center">
            <div className="beginMonth">DEC</div>
            <div className="day">30</div>
            <div className="endMonth">DEC</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingBlock;
