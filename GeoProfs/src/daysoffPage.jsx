import React, { useState } from "react";
import "./statusPage.css";
import "./dashboard.css";
import "./daysoffPage.css";
import profilePicture from "./assets/profile.jpg";
import arrow from "../src/assets/arrow.png";

import SideNav from "./assets/components/Widgets/sideNav";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("pending");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="background">
      <SideNav value="daysoff" />
      <div className="componentsBlock">
        <div className="block">
          <div className="title_block">
            <p>Days Off</p>
          </div>
          <div className="block_down">
            <div className="colleague_block">
              <div className="colleague_block_top">
                <div className="img_text">
                  <img className="daysOffPicture" src={profilePicture}></img>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
