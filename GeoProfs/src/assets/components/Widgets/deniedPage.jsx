import React from "react";
import arrow from "../../../assets/arrow.png";

const DeniedBlock = () => {
  return (
    <div className="deniedBlock item">
      <div className="denied_title">Denied</div>
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

export default DeniedBlock;
