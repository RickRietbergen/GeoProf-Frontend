import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import {
  faUsers,
  faClock,
  faEnvelope,
  faCheck,
  faXmark,
  faEllipsis,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import arrow from "../../../../../src/assets/arrow.png";
import profilePicture from "../../../../../src/assets/profile.jpg";
import useAuth from "../../Hooks/useAuth";

const MessageComponent = () => {
  const { isLoggedIn, user, authFetch } = useAuth();
  const [managerData, setManagerData] = useState(null);

  const fetchManagerDashboard = () => {
    authFetch("Manager/dashboard", { method: "GET" })
      .then((data) => {
        const allManagerDashboardData = data;
        setManagerData(allManagerDashboardData);
      })
      .catch((error) => {
        console.log("Error fetching manager dashboard data:", error);
      });
  };

  useEffect(() => {
    fetchManagerDashboard();
  }, []);

  return (
    <div className="manager_block_above">
      <div className="managers_blocks">
        <div className="managers_blocks_title">
          <FontAwesomeIcon icon={faUsers} />
          <p> Employees</p>
        </div>
        <div className="managers_blocks_number">
          {managerData && managerData.users}
        </div>
      </div>
      <div className="managers_blocks">
        <div className="managers_blocks_title">
          <FontAwesomeIcon icon={faClock} />
          <p> To Request</p>
        </div>
        <div className="managers_blocks_number">
          {managerData && managerData.verlofs}
        </div>
      </div>
      <div className="managers_blocks">
        <div className="managers_blocks_title">
          <FontAwesomeIcon icon={faEnvelope} />
          <p>Notifications</p>
        </div>
        <div className="managers_blocks_number">
          {managerData && managerData.employeeIsSick}
        </div>
      </div>
    </div>
  );
};

export default MessageComponent;
