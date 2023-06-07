import React from "react";
import { useEffect, useState } from "react";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useAuth from "../Hooks/useAuth";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const StatusComponent = () => {
  const { isLoggedIn, user, authFetch } = useAuth();
  const [verlofData, setVerlofData] = useState(null);

  const fetchVerlof = () => {
    authFetch("verlof", { method: "GET" })
      .then((data) => {
        const lastThreeItems = data.slice(-3);
        setVerlofData(lastThreeItems);
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
    <div className="statusComponent">
      <DaysOffTop />
      <StatusComponentBottom verlofData={verlofData} />
    </div>
  );
};

const DaysOffTop = () => {
  return (
    <div className="daysOffTop">
      <div className="title">
        <p>Status</p>
      </div>
      <button
        className="dots"
        onClick={() => (window.location.href = `/status`)}
      >
        <FontAwesomeIcon icon={faEllipsis} />
      </button>
    </div>
  );
};

const StatusComponentBottom = ({ verlofData }) => {
  return (
    <div className="statusComponentBottom">
      {verlofData &&
        verlofData.map((verlof) => {
          const fromDate = new Date(verlof.from);
          const fromDay = fromDate.getDate();
          const fromMonth = fromDate.toLocaleString("default", { month: "short" });
          const fromWeekday = fromDate.toLocaleString("en-US", {
            weekday: "short",
          });
          
          const untilDate = new Date(verlof.until);
          const untilDay = untilDate.getDate();
          const untilMonth = untilDate.toLocaleString("default", { month: "short" });
          const untilWeekday = untilDate.toLocaleString("en-US", {
            weekday: "short",
          });

          return (
            <div className="statusComponentBottom" key={verlof.id}>
              {verlof.isPending && !verlof.isDenied && !verlof.isApproved && (
                <div className="pending">
                  <div className="information" key={verlof.id}>
                    <FontAwesomeIcon className="clockIcon" icon={faClock} />
                    <p className="date">{fromMonth.toUpperCase()} {fromDay} {fromWeekday}</p>
                    <p className="date">{untilMonth.toUpperCase()} {untilDay} {untilWeekday}</p>
                  </div>
                  <button className="pendingButton">Pending</button>
                </div>
              )}
              {!verlof.isPending && verlof.isDenied && !verlof.isApproved && (
                <div className="denied">
                  <div className="information">
                    <FontAwesomeIcon
                      className="deniedIcon"
                      icon={faCircleXmark}
                    />
                    <p className="date">{fromMonth.toUpperCase()} {fromDay} {fromWeekday}</p>
                    <p className="date">{untilMonth.toUpperCase()} {untilDay} {untilWeekday}</p>
                  </div>
                  <button className="deniedButton">Rejected</button>
                </div>
              )}
              {!verlof.isPending && !verlof.isDenied && verlof.isApproved && (
                <div className="confirmed">
                  <div className="information">
                    <FontAwesomeIcon
                      className="checkIcon"
                      icon={faCircleCheck}
                    />
                    <p className="date">{fromMonth.toUpperCase()} {fromDay} {fromWeekday}</p>
                    <p className="date">{untilMonth.toUpperCase()} {untilDay} {untilWeekday}</p>
                  </div>
                  <button className="confirmedButton">Confirmed</button>
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
};

export default StatusComponent;
