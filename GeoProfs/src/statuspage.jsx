import React, { useState } from "react";
import "./statusPage.css";
import "./dashboard.css";

import SideNav from "./assets/components/Widgets/sideNav";
import Smallernav from "../src/assets/components/Widgets/smallerSideNav";
import ConfirmedBlock from "../src/assets/components/Widgets/confirmedPage";
import DeniedBlock from "../src/assets/components/Widgets/deniedPage";
import PendingBlock from "../src/assets/components/Widgets/pendingPage";
import Requestblock from "./assets/components/Widgets/requestBlock";
function Dashboard() {
  const [activeTab, setActiveTab] = useState("pending");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="background">
      <SideNav value="status" className="nav" />
      <Smallernav className="smallNav" />
      <div className="componentsBlock">
        <div className="block">
          <div className="title_block">
            <p>Status</p>
            <div className="tab-container">
              <button
                className={`filterButton ${
                  activeTab === "pending" ? "selectedButton" : ""
                }`}
                onClick={() => handleTabChange("pending")}
              >
                Pending
              </button>
              <button
                className={`filterButton ${
                  activeTab === "confirmed" ? "selectedButton" : ""
                }`}
                onClick={() => handleTabChange("confirmed")}
              >
                Confirmed
              </button>
              <button
                className={`filterButton ${
                  activeTab === "denied" ? "selectedButton" : ""
                }`}
                onClick={() => handleTabChange("denied")}
              >
                Denied
              </button>
              <button
                className={`filterButton ${
                  activeTab === "all" ? "selectedButton" : ""
                }`}
                onClick={() => handleTabChange("all")}
              >
                All
              </button>
            </div>
          </div>
          <div className="block_down">
            {activeTab === "pending" && (
              <>
                <PendingBlock />
                <PendingBlock />
                <PendingBlock />
              </>
            )}
            {activeTab === "confirmed" && (
              <>
                <ConfirmedBlock />
                <ConfirmedBlock />
                <ConfirmedBlock />
              </>
            )}
            {activeTab === "denied" && (
              <>
                <DeniedBlock />
                <DeniedBlock />
                <DeniedBlock />
                <DeniedBlock />
              </>
            )}
            {activeTab === "all" && (
              <>
                <PendingBlock />
                <PendingBlock />
                <PendingBlock />
                <ConfirmedBlock />
                <ConfirmedBlock />
                <ConfirmedBlock />
                <DeniedBlock />
                <DeniedBlock />
                <DeniedBlock />
                <DeniedBlock />
              </>
            )}
          </div>
          {/* <div className="requestBlocks_status">
            <Requestblock />
            <Requestblock />
            <Requestblock />
            <Requestblock />
            <Requestblock />
            <Requestblock />
            <Requestblock />
            <Requestblock />
            <Requestblock />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
