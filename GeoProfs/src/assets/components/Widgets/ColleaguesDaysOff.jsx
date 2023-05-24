import React from "react";
import "../../../dashboard.css";
import profilePicture from "../../../assets/profile.jpg";
import arrow from "../../../assets/arrow.png";

const ColleagueDayOffBlock = () => {
  return (
    <div className="colleagueDayOffBlock">
      <div className="colleagueDayOffBlock_left">
        <img className="logo_colleague" src={profilePicture} alt="" />
        <div>
          <p className="colleague_name">Rick Rietbergen</p>
          <p className="colleague_function">Development</p>
        </div>
      </div>
      <div className="colleagueDayOffBlock_right">
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
  );
};

export default ColleagueDayOffBlock;
