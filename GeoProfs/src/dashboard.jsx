import "./dashboard.css";

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
import ColleagueDayOff from "./assets/components/Widgets/ColleaguesDaysOff";
import SideNav from "./assets/components/Widgets/sideNav";
import { faChevronRight, faUsers } from "@fortawesome/free-solid-svg-icons";

function Dashboard() {
  const { isLoggedIn, user } = useAuth();

  return (
    <div className="background">
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
              <ColleagueDayOff />
              <ColleagueDayOff />
              <ColleagueDayOff />
              <ColleagueDayOff />
              <ColleagueDayOff />
              <ColleagueDayOff />
              <ColleagueDayOff />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
