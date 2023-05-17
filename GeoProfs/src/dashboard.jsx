import "./dashboard.css";
import profilePicture from "../src/assets/profile.jpg";
import logo from "../src/assets/logoGeoProf.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faSignal,
  faUserXmark,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
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
              Days of
            </a>
          </div>
          <div>
            <a className="logOut nav_icons" href="">
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
              <div className="verlofComponent">
                <div className="titleBlock">
                  <p className="titleBlockNew">New</p>
                  <p className="titleBlockRequest"> Leave Request</p>
                </div>
                <div className="inputBlock">
                  <div className="inputItem">
                    <p>Start Date</p>
                    <input type="text" />
                  </div>
                  <div className="center inputItem">
                    <p>Reason</p>
                    <input className="middle" type="text" />
                  </div>
                  <div className="inputItem">
                    <p>End Date</p>
                    <input type="text" />
                  </div>
                </div>
                <div className="textFieldBlock">
                  <input className="textfield" type="text" />
                </div>
                <div className="sendBlock">
                  <button className="sendButton">Send</button>
                </div>
              </div>
            </div>
            <div className="BlockDown">
              <div className="Blocks">
                <div className="daysOffComponent"></div>
                <div className="statusComponent"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}

export default Dashboard;
