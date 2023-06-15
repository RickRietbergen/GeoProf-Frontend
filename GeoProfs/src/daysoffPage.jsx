import React, { useEffect, useState } from "react";
import "./statusPage.css";
import "./dashboard.css";
import "./daysoffPage.css";
import profilePicture from "./assets/profile.jpg";
import arrow from "../src/assets/arrow.png";
import SideNav from "./assets/components/Widgets/sideNav";
import useAuth from "./assets/components/Hooks/useAuth";
import SmallerSideNav from "./assets/components/Widgets/smallerSideNav";

function DaysOffPage() {
  const [activeTab, setActiveTab] = useState("pending");
  const { isLoggedIn, user, authFetch } = useAuth();
  const [verlofData, setVerlofData] = useState(null);

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

  return (
    <div className="background">
      <SideNav value="daysoff" />
      <SmallerSideNav value="daysoff" />

      <div className="componentsBlock">
        <div className="block">
          <div className="title_block">
            <p>Days Off</p>
          </div>

          <div className="block_down">
            {verlofData &&
              verlofData.map((verlof) => {
                const fromDate = new Date(verlof.from);
                const fromDay = fromDate.getDate();
                const fromMonth = fromDate.toLocaleString("default", {
                  month: "short",
                });
                const fromWeekday = fromDate.toLocaleString("en-US", {
                  weekday: "short",
                });

                const untilDate = new Date(verlof.until);
                const untilDay = untilDate.getDate();
                const untilMonth = untilDate.toLocaleString("default", {
                  month: "short",
                });
                const untilWeekday = untilDate.toLocaleString("en-US", {
                  weekday: "short",
                });

                if (
                  !verlof.isPending &&
                  !verlof.isDenied &&
                  verlof.isApproved
                ) {
                  return (
                    <div className="colleague_block" key={verlof.id}>
                      <div className="colleague_block_top">
                        <div className="img_text">
                          <img
                            className="daysOffPicture"
                            src={profilePicture}
                          ></img>
                          <div>
                            <p className="bold">{verlof.username}</p>
                            <p className="function_daysOff">
                              {verlof.afdelingsnaam}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="colleague_block_bottom">
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
                } else {
                  <p>No data available</p>;
                }
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DaysOffPage;
