import React from "react";
import "./dashboard.css";
import SideNav from "./assets/components/Widgets/sideNav";
import Smallernav from "./assets/components/Widgets/smallerSideNav";
import ManagerDashboard from "../src/assets/components/Manager/ManagerDashboard";
import UserDashboard from "../src/assets/components/userDashboard";
function Dashboard() {
  return (
    <div className="background">
      <SideNav value="dashboard" className="nav" />
      <Smallernav className="smallNav" />
      <UserDashboard />
      {/* <ManagerDashboard /> */}
    </div>
  );
}

export default Dashboard;
