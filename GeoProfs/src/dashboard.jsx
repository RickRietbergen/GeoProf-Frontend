import "./dashboard.css";
import profilePicture from "../src/assets/profile.jpg";
import logo from "../src/assets/logoGeoProf.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Status from "./assets/components/Widgets/statusComponent";
import VerlofComponent from "./assets/components/Widgets/request";
import DaysOff from "../src/assets/components/Widgets/daysOff";
import arrow from "../src/assets/arrow.png";
import {
  faHouse,
  faSignal,
  faUserXmark,
  faRightFromBracket,
  faCalendarDays,
  faChevronRight,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import useAuth from "./assets/components/Hooks/useAuth";

function Dashboard() {
  const { isLoggedIn, user } = useAuth();

  return (
    <div className="background">
      <div className="sidenav">
        <img className="logo" src={logo} alt="" />
        <div className="lowerBlock">
          <div className="infoBlock">
            {isLoggedIn && (
              <>
                <img className="profilePicture" src={profilePicture} alt="" />
                <p className="name">{user.username}</p>
                <p className="function">functie</p>
              </>
            )}
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
          <div className="colleaguesDaysOffBlock">
            <div className="colleaguesDaysOffBlock_top">
              <div className="title">
                <FontAwesomeIcon icon={faUsers} />
                <p>Colleagues Days Off </p>
              </div>
              <button className="seeAll">
                <p>See all</p>
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
            <div className="line"></div>
            <div className="colleaguesDaysOffBlock_block">
              <div className="colleagueDayOffBlock">
                <div className="colleagueDayOffBlock_left">
                  <img className="logo_colleague" src={profilePicture} alt="" />
                  <div>
                    <p className="colleague_name">Rick Rietbergen</p>
                    <p className="colleague_function">Development</p>
                  </div>
                </div>
                <div className="colleagueDayOffBlock_right">
                  <div>
                    <div className="beginMonth">DEC</div>
                    <div className="day">16</div>
                    <div className="endMonth">TUE</div>
                  </div>
                  <img className="arrow" src={arrow}></img>
                  <div>
                    <div className="beginMonth">DEC</div>
                    <div className="day">30</div>
                    <div className="endMonth">DEC</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
