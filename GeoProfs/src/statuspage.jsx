import React, { useEffect, useState } from "react";
import "./statusPage.css";
import "./dashboard.css";
import SideNav from "./assets/components/Widgets/sideNav";
import Smallernav from "../src/assets/components/Widgets/smallerSideNav";
import ConfirmedBlock from "../src/assets/components/Widgets/confirmedPage";
import DeniedBlock from "../src/assets/components/Widgets/deniedPage";
import PendingBlock from "../src/assets/components/Widgets/pendingPage";
import useAuth from "./assets/components/Hooks/useAuth";
import arrow from "../src/assets/arrow.png";

function Dashboard() {
  const { isLoggedIn, user, authFetch } = useAuth();
  const [verlofData, setVerlofData] = useState(null);
  const [activeTab, setActiveTab] = useState("pending");

  const fetchVerlof = () => {
    authFetch("verlof", { method: "GET" })
      .then((data) => {
        setVerlofData(data);
      })
      .catch((error) => {
        console.log("Error fetching verlof data:", error);
      });
  };

  console.log(verlofData);

  useEffect(() => {
    if (!isLoggedIn) navigate("/login");

    fetchVerlof();
  }, []);

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
            {verlofData &&
              verlofData.map((verlof) => {
                return (
                  <div className="pendingBlock item" key={verlof.id}>
                    {activeTab === "pending" && (
                      <div>
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
                    )}
                  </div>
                );
              })
            }
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
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
