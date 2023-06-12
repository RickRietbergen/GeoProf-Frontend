import React from "react";
import "./dashboard.css";
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
