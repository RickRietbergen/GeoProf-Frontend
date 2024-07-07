import React from "react";
import "./dashboard.css";
import "./responsiveness.css";
import SideNav from "./assets/components/Widgets/sideNav";
import Smallernav from "./assets/components/Widgets/smallerSideNav";
import AdminDashboard from "../src/assets/components/Admin/AdminDashboard";
import ManagerDashboard from "../src/assets/components/Manager/ManagerDashboard";
import UserDashboard from "../src/assets/components/Werknemer/userDashboard";
import useAuth from "./assets/components/Hooks/useAuth";

function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="background">
      <SideNav value="dashboard" className="nav " />
      <Smallernav value="dashboard" className="smallNav" />

      {user.role == 1 && <UserDashboard />}

      {user.role == 2 && <ManagerDashboard />}

      {user.role == 4 && <AdminDashboard />}
    </div>
  );
}

export default Dashboard;
