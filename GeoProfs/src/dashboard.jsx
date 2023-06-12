import "./dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Status from "./assets/components/Widgets/statusComponent";
import VerlofComponent from "./assets/components/Widgets/request";
import DaysOff from "../src/assets/components/Widgets/daysOff";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import ColleagueDayOff from "../src/assets/components/Widgets/ColleaguesDaysOff.jsx";
import SideNav from "./assets/components/Widgets/sideNav";
import Smallernav from "../src/assets/components/Widgets/smallerSideNav";

function Dashboard() {
  return (
    <div className="background">
      <SideNav value="dashboard" className="nav" />
      <Smallernav className="smallNav" />
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
                <p>Colleagues Days Off </p>
              </div>
              <button
                className="dots"
                onClick={() => (window.location.href = `/daysoff`)}
              >
                <FontAwesomeIcon icon={faEllipsis} />
              </button>
            </div>
            <div>
              <ColleagueDayOff />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
