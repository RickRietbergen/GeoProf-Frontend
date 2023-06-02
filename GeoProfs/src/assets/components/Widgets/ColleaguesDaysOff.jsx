import React, { useEffect, useState } from "react";
import "../../../dashboard.css";
import profilePicture from "../../../assets/profile.jpg";
import arrow from "../../../assets/arrow.png";
import useAuth from "../Hooks/useAuth";

const ColleagueDayOffBlock = () => {
  const { isLoggedIn, user, authFetch } = useAuth();
  const [verlofData, setVerlofData] = useState(null);

  const fetchVerlof = () => {
    authFetch("verlof", { Method: "GET" }).then((data) => setVerlofData(data.slice(0, 5)));
  };

  useEffect(() => {
    if (!isLoggedIn) navigate("/login");

    fetchVerlof();
  }, []);
  console.log(verlofData);
  return (
    <div className="colleaguesDaysOffBlock_block">
      {verlofData ? (
        verlofData.map((verlof) => {
          const from = new Date(verlof.from);
          const until = new Date(verlof.until);

          const fromMonth = from.toLocaleString("en-US", { month: "short" });
          const fromDay = from.getDate();
          const fromWeekday = from.toLocaleString("en-US", {
            weekday: "short",
          });

          const untilMonth = until.toLocaleString("en-US", { month: "short" });
          const untilDay = until.getDate();
          const untilWeekday = until.toLocaleString("en-US", {
            weekday: "short",
          });

          return (
            <div className="colleagueDayOffBlock" key={verlof.id}>
              <div className="colleagueDayOffBlock_left">
                <img className="logo_colleague" src={profilePicture} alt="" />
                <div>
                  <p className="colleague_name">{verlof.username}</p>
                  <p className="colleague_function">{verlof.verlofReden}</p>
                </div>
              </div>
              <div className="colleagueDayOffBlock_right">
                <div className="align-center">
                  <div className="beginMonth">{fromMonth.toUpperCase()}</div>
                  <div className="day">{fromDay}</div>
                  <div className="endMonth">{fromWeekday.toUpperCase()}</div>
                </div>
                <img className="arrow" src={arrow} alt="" />
                <div className="align-center">
                  <div className="beginMonth">{untilMonth.toUpperCase()}</div>
                  <div className="day">{untilDay}</div>
                  <div className="endMonth">{untilWeekday.toUpperCase()}</div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default ColleagueDayOffBlock;
