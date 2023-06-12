import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import arrow from "../../../assets/arrow.png";
import profilePicture from "../../../assets/profile.jpg";

const RequestBlock = () => {
  return (
    <div className="requestBlock">
      <div className="employee_block_top">
        <div className="img_text">
          <img className="daysOffPicture" src={profilePicture} alt="Profile" />
          <div>
            <p className="bold">Tijn Klabbers</p>
            <p className="function_daysOff">CEO</p>
          </div>
        </div>
      </div>
      <div className="dateBlock">
        <div className="align-center">
          <div className="beginMonth">DEC</div>
          <div className="day">16</div>
          <div className="endMonth">TUE</div>
        </div>
        <img className="arrow" src={arrow} alt="Arrow" />
        <div className="align-center">
          <div className="beginMonth">DEC</div>
          <div className="day">30</div>
          <div className="endMonth">DEC</div>
        </div>
      </div>
      <div className="textBlock">
        <div className="textBlock_top">
          <p className="reason_block">
            hier moet de reden komen te staan van iemand
          </p>
        </div>
        <div className="textBlock_bottom">
          <div className="submission_date">
            <FontAwesomeIcon icon={faClock} />
            <p>
              date of request <span>15 aug</span>
            </p>
          </div>
          <div className="acceptDeclineButtons">
            <div className="accept">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="decline">
              <FontAwesomeIcon icon={faTimes} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestBlock;
