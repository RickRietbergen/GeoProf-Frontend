import React, { useState } from "react";
import "./statusPage.css";
import "./dashboard.css";
import "./daysoffPage.css";
import DaysOffComponent from "../src/assets/components/Widgets/daysOffPage";
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
            <DaysOffComponent />
            <DaysOffComponent />
            <DaysOffComponent />
            <DaysOffComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
