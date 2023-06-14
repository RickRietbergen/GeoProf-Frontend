import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import useAuth from "../Hooks/useAuth";

const DaysOffComponent = () => {
  const { authFetch } = useAuth();
  const [takenDays, setTakenDays] = useState(null);

  useEffect(() => {
    authFetch("verlof/daysTaken", { method: "GET" })
      .then((data) => {
        setTakenDays(data);
        document.documentElement.style.setProperty("--value", data.daysTaken);
        document.documentElement.style.setProperty(
          "--max-value",
          data.totalDaysAvailable
        );
      })
      .catch((error) => {
        console.log("Error fetching verlof", error);
      });
  }, []);

  console.log(takenDays);

  return (
    <div className="daysOffComponent">
      {takenDays ? (
        <>
          <div className="daysOffTop">
            <div className="title">
              <p>Days Off</p>
            </div>
            <button
              className="dots"
              onClick={() => (window.location.href = `/daysoff`)}
            >
              <FontAwesomeIcon icon={faEllipsis} />
            </button>
          </div>
          <div className="daysOffBottom">
            <div
              role="progressbar"
              aria-value={20}
              aria-valuemin={0}
              aria-max-value={100}
            ></div>
            <p className="maximum">OUT OF {takenDays.totalDaysAvailable}</p>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default DaysOffComponent;
