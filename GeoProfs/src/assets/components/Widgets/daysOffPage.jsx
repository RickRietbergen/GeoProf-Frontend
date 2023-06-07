import React from "react";
import arrow from "../../arrow.png";
import colleaguePicture from "../../profile.jpg";
const ColleagueBlock = ({ profilePicture }) => {
  return (
    <div className="colleague_block">
      <div className="colleague_block_top">
        <div className="img_text">
          <img className="daysOffPicture" src={colleaguePicture}></img>
          <div>
            <p className="bold">Tijn Klabbers</p>
            <p className="function_daysOff">CEO</p>
          </div>
        </div>
      </div>
      <div className="colleague_block_bottom">
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

export default ColleagueBlock;
