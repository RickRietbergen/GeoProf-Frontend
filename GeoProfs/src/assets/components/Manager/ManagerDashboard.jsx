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
import arrow from "../../../assets/arrow.png";
import profilePicture from "../../../assets/profile.jpg";
import useAuth from "../Hooks/useAuth";
import { useSnackbar } from "notistack";
import MessageComponent from "./messages/message";

const ManagerComponent = () => {
  const { isLoggedIn, authFetch } = useAuth();
  const [verlofData, setVerlofData] = useState(null);
  const { enqueueSnackbar } = useSnackbar();
  const [id, setId] = useState("");

  const fetchVerlof = () => {
    authFetch("verlof", { method: "GET" })
      .then((data) => {
        const lastFourItems = data.slice(-4);
        const reversedArray = lastFourItems.reverse();
        setVerlofData(reversedArray);
      })
      .catch((error) => {
        console.log("Error fetching verlof data:", error);
      });
  };

  const fetchDeniedVerlof = (id) => {
    authFetch(`Status/denied/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    }).catch(() => fetchVerlof());
    enqueueSnackbar("Verlof status has successfully been changed to 'Denied'", {
      variant: "success",
    });
  };

  const fetchApprovedVerlof = (id) => {
    authFetch(`Status/approved/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    }).catch(() => fetchVerlof());
    enqueueSnackbar(
      "Verlof status has successfully been changed to 'Approved'",
      {
        variant: "success",
      }
    );
  };

  const handleDenyVerlof = (verlof) => {
    setId(verlof.id);
    fetchDeniedVerlof(verlof.id);
  };

  const handleApproveVerlof = (verlof) => {
    setId(verlof.id);
    fetchApprovedVerlof(verlof.id);
  };
    
  useEffect(() => {
    if (!isLoggedIn) navigate("/login");

    fetchVerlof();
  }, []);

  return (
    <div className="componentsBlock componentsBlock_manager">
      <MessageComponent />

      <div className="manager_block_bottom">
        <div className="titleName">
          Recent Requests
          <button
            className="dotsMore"
            onClick={() => (window.location.href = `/status`)}
          >
            <FontAwesomeIcon icon={faEllipsis} />
          </button>
        </div>
        <div className="requestBlocks">
          {verlofData &&
            verlofData.map((verlof) => {
              const fromDate = new Date(verlof.from);
              const fromDay = fromDate.getDate();
              const fromMonth = fromDate.toLocaleString("default", {
                month: "short",
              });
              const fromWeekday = fromDate.toLocaleString("en-US", {
                weekday: "short",
              });

              const untilDate = new Date(verlof.until);
              const untilDay = untilDate.getDate();
              const untilMonth = untilDate.toLocaleString("default", {
                month: "short",
              });
              const untilWeekday = untilDate.toLocaleString("en-US", {
                weekday: "short",
              });

              if (verlof.isPending && !verlof.isDenied && !verlof.isApproved) {
                return (
                  <div className="requestBlock" key={verlof.id}>
                    <div className="employee_block_top">
                      <div className="img_text">
                        <img
                          className="daysOffPicture"
                          src={profilePicture}
                          alt="Profile"
                        />
                        <div className="daysOffInfo">
                          <p className="bold">{verlof.username}</p>
                          <p className="function_daysOff">
                            {verlof.afdelingsnaam}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="dateBlock">
                      <div className="align-center">
                        <div className="beginMonth">{fromMonth}</div>
                        <div className="day">{fromDay}</div>
                        <div className="endMonth">{fromWeekday}</div>
                      </div>
                      <img className="arrow" src={arrow} alt="Arrow" />
                      <div className="align-center">
                        <div className="beginMonth">{untilMonth}</div>
                        <div className="day">{untilDay}</div>
                        <div className="endMonth">{untilWeekday}</div>
                      </div>
                    </div>
                    <div className="textBlock">
                      <div className="textBlock_top">
                        <p className="reason_block">
                          Reason: {verlof.verlofReden}
                        </p>
                        <p className="reason_block">{verlof.beschrijving}</p>
                      </div>
                      <div className="textBlock_bottom">
                        <div className="acceptDeclineButtons">
                          <div
                            className="accept"
                            onClick={() => handleApproveVerlof(verlof)}
                          >
                            <FontAwesomeIcon icon={faCheck} />
                          </div>
                          <div
                            className="decline"
                            onClick={() => handleDenyVerlof(verlof)}
                          >
                            <FontAwesomeIcon icon={faTimes} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              } else {
                <p>No data available</p>;
              }
            })}
        </div>
      </div>
    </div>
  );
};

export default ManagerComponent;
