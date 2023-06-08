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
        const reversedData = data.reverse();
        setVerlofData(reversedData);
      })
      .catch((error) => {
        console.log("Error fetching verlof data:", error);
      });
  };

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
                const fromDate = new Date(verlof.from);
                const fromDay = fromDate.getDate();
                const fromMonth = fromDate.toLocaleString("default", {month: "short",});
                const fromWeekday = fromDate.toLocaleString("en-US", {weekday: "short",});

                const untilDate = new Date(verlof.until);
                const untilDay = untilDate.getDate();
                const untilMonth = untilDate.toLocaleString("default", {month: "short",});
                const untilWeekday = untilDate.toLocaleString("en-US", {weekday: "short",});

                if (verlof.isPending && !verlof.isDenied && !verlof.isApproved && activeTab === "pending") {
                  return (
                    <div className="pendingBlock item" key={verlof.id}>
                      <div className="pending_title">Pending</div>
                      <div className="align_and_center">
                        <div className="dateBlock">
                          <div className="align-center">
                            <div className="beginMonth">{fromMonth}</div>
                            <div className="day">{fromDay}</div>
                            <div className="endMonth">{fromWeekday}</div>
                          </div>
                          <img className="arrow" src={arrow}></img>
                          <div className="align-center">
                            <div className="beginMonth">{untilMonth}</div>
                            <div className="day">{untilDay}</div>
                            <div className="endMonth">{untilWeekday}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                if (!verlof.isPending && verlof.isDenied && !verlof.isApproved && activeTab === "denied") {
                  return (
                    <div className="deniedBlock item" key={verlof.id}>
                      <div className="denied_title">Denied</div>
                      <div className="align_and_center">
                        <div className="dateBlock">
                          <div className="align-center">
                            <div className="beginMonth">{fromMonth}</div>
                            <div className="day">{fromDay}</div>
                            <div className="endMonth">{fromWeekday}</div>
                          </div>
                          <img className="arrow" src={arrow}></img>
                          <div className="align-center">
                            <div className="beginMonth">{untilMonth}</div>
                            <div className="day">{untilDay}</div>
                            <div className="endMonth">{untilWeekday}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                if (!verlof.isPending && !verlof.isDenied && verlof.isApproved && activeTab === "confirmed") {
                  return (
                    <div className="confirmedBlock item" key={verlof.id}>
                      <div className="confirmed_title">Confirmed</div>
                      <div className="align_and_center">
                        <div className="dateBlock">
                          <div className="align-center">
                            <div className="beginMonth">{fromMonth}</div>
                            <div className="day">{fromDay}</div>
                            <div className="endMonth">{fromWeekday}</div>
                          </div>
                          <img className="arrow" src={arrow}></img>
                          <div className="align-center">
                            <div className="beginMonth">{untilMonth}</div>
                            <div className="day">{untilDay}</div>
                            <div className="endMonth">{untilWeekday}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }


                if (activeTab === "all") {
                  if (verlof.isPending){
                    return (
                      <div className="pendingBlock item" key={verlof.id}>
                        <div className="pending_title">Pending</div>
                        <div className="align_and_center">
                          <div className="dateBlock">
                            <div className="align-center">
                              <div className="beginMonth">{fromMonth}</div>
                              <div className="day">{fromDay}</div>
                              <div className="endMonth">{fromWeekday}</div>
                            </div>
                            <img className="arrow" src={arrow}></img>
                            <div className="align-center">
                              <div className="beginMonth">{untilMonth}</div>
                              <div className="day">{untilDay}</div>
                              <div className="endMonth">{untilWeekday}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                  
                  if (verlof.isDenied){
                    return (
                      <div className="deniedBlock item" key={verlof.id}>
                        <div className="denied_title">Denied</div>
                        <div className="align_and_center">
                          <div className="dateBlock">
                            <div className="align-center">
                              <div className="beginMonth">{fromMonth}</div>
                              <div className="day">{fromDay}</div>
                              <div className="endMonth">{fromWeekday}</div>
                            </div>
                            <img className="arrow" src={arrow}></img>
                            <div className="align-center">
                              <div className="beginMonth">{untilMonth}</div>
                              <div className="day">{untilDay}</div>
                              <div className="endMonth">{untilWeekday}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                  
                  if (verlof.isApproved){
                    return (
                      <div className="confirmedBlock item" key={verlof.id}>
                        <div className="confirmed_title">Confirmed</div>
                        <div className="align_and_center">
                          <div className="dateBlock">
                            <div className="align-center">
                              <div className="beginMonth">{fromMonth}</div>
                              <div className="day">{fromDay}</div>
                              <div className="endMonth">{fromWeekday}</div>
                            </div>
                            <img className="arrow" src={arrow}></img>
                            <div className="align-center">
                              <div className="beginMonth">{untilMonth}</div>
                              <div className="day">{untilDay}</div>
                              <div className="endMonth">{untilWeekday}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                }
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
