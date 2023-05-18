import "./dashboard.css";
import profilePicture from "../src/assets/profile.jpg";
import logo from "../src/assets/logoGeoProf.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Status from "./assets/components/Widgets/statusComponent";
import {
  faHouse,
  faSignal,
  faUserXmark,
  faRightFromBracket,
  faCalendarDays,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import VerlofComponent from "./assets/components/Widgets/request";
import DaysOff from "../src/assets/components/Widgets/daysOff";
import LogoutPage from "./assets/components/Logout/LogoutPage";

function Dashboard() {
  return (
    <div className="background">
      <div className="sidenav">
        <img className="logo" src={logo} alt="" />
        <div className="lowerBlock">
          <div className="infoBlock">
            <img className="profilePicture" src={profilePicture} alt="" />
            <p className="name">Bart Janssen</p>
            <p className="function">functie</p>
          </div>
          <div className="categoryBlock">
            <a className="active">
              <FontAwesomeIcon className="home" icon={faHouse} />
              <p>Home</p>
            </a>
            <a className="nav_icons">
              <FontAwesomeIcon icon={faSignal} />
              Status
            </a>
            <a className="nav_icons">
              <FontAwesomeIcon icon={faUserXmark} />
              Days off
            </a>
          </div>
          <div>
            <a className="logOut nav_icons" href="/logout">
              <FontAwesomeIcon icon={faRightFromBracket} />
              Log out
            </a>
          </div>
        </div>
      </div>
      <div className="componentsBlock">
        <div className="left">
          <div className="Block">
            <div className="BlockAbove">
              <VerlofComponent />
            </div>
            <div className="BlockDown">
              <div className="Blocks">
                <DaysOff />
                <Status />
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="colleaguesDaysOffBlock"></div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
