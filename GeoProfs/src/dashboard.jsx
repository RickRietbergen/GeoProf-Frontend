import React from "react";
import "./dashboard.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Status from "./assets/components/Widgets/statusComponent";
// import VerlofComponent from "./assets/components/Widgets/request";
// import DaysOff from "../src/assets/components/Widgets/daysOff";
// import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
// import ColleagueDayOff from "../src/assets/components/Widgets/ColleaguesDaysOff.jsx";
import SideNav from "./assets/components/Widgets/sideNav";
import Smallernav from "./assets/components/Widgets/smallerSideNav";
import ManagerDashboard from "../src/assets/components/Manager/ManagerDashboard";
import UserDashboard from "../src/assets/components/userDashboard";
import useAuth from "./assets/components/Hooks/useAuth";

function Dashboard() {
  const { isLoggedIn, user, authFetch } = useAuth();

  return (
    <div className="background">
      <SideNav value="dashboard" className="nav" />
      <Smallernav className="smallNav" />

      {user.role == 1 &&
        <UserDashboard />
      }

      {user.role == 2 || user.role == 4 &&
        <ManagerDashboard />
      }
    </div>
  );
}

export default Dashboard;
