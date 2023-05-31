import React from "react";
import { useEffect, useState } from "react";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ConfirmedStatus from "../status/Confirmed";
import DeniedStatus from "../status/Denied";
import PendingStatus from "../status/Pending";
import useAuth from "../Hooks/useAuth";

const StatusComponent = () => {
  const { isLoggedIn, authFetch } = useAuth();
  const [verlofData, setVerlofData] = useState(null);

  const fetchVerlof = () => {
    authFetch("GetVerlof", { Method: "GET" })
    .then((r) => r.json())
    .then((data) => setVerlofData(data));
  }
  console.log(verlofData);

  useEffect(() => {
    if (!isLoggedIn) navigate("/login");

    fetchVerlof();
  }, []);
  
  return (
    <div className="statusComponent">
      <DaysOffTop />
      <StatusComponentBottom />
    </div>
  );
};

const DaysOffTop = () => {
  return (
    <div className="daysOffTop">
      <div className="title">
        <p>Status</p>
      </div>
      <button className="dots">
        <FontAwesomeIcon icon={faEllipsis} />
      </button>
    </div>
  );
};

const StatusComponentBottom = () => {
  return (
    <div className="statusComponentBottom">
      <div className="statusComponentBottom">
        <ConfirmedStatus />
        <PendingStatus />
        <DeniedStatus />
      </div>
    </div>
  );
};

export default StatusComponent;
