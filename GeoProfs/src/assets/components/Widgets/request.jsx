import React, { useState } from "react";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../../constants/links";

const VerlofComponent = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setSelectedDate(selectedDate);
  };

  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);

  const [startDate, setStartDate] = useState("");
  const [absenceReason, setAbsenceReason] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");

  const [buttonDisabled, setButtonDisabled] = useState(false);

   const handleStartDateChange = (event) => {
     const startDate = event.target.value;
     setStartDate(startDate);
   };
   
   const handleReasonChange = (event) => {
     const absenceReason = event.target.value;
     setAbsenceReason(absenceReason);
   };

   const handleEndDateChange = (event) => {
     const endDate = event.target.value;
     setEndDate(endDate);
   };

   const handleDescriptionChange = (event) => {
     const description = event.target.value;
     setDescription(description);
   };

  const submitRequest = () => {
    if (!absenceReason || !description) {
      enqueueSnackbar("Please fill in all the required fields.", {
        variant: "error",
      });
      return;
    }
    setButtonDisabled(true);

    const requestData = {
      startDate,
      absenceReason,
      endDate,
      description,
    };

    console.log("Verzonden gegevens:", requestData);

    fetch(`${API_URL}Verlof/VerlofAanvraag`, {
      method: "POST",
      body: JSON.stringify(requestData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        setButtonDisabled(false);
        if (!res.ok) {
          res.text().then((text) =>
              enqueueSnackbar("An error occurred while submitting the request.", { variant: "error" }));
          return;
        }

        enqueueSnackbar("request submitted ", { variant: "success" });
        navigate("/dashboard");
      });
  };

  return (
    <div className="verlofComponent">
      <div className="titleBlock">
        <p className="titleBlockRequest">Leave Request</p>
      </div>
      <div className="inputBlock">
        <div className="inputItem">
          <p className="request_option">Start Date</p>
          <input
            type="date"
            min={minDate.toISOString().split("T")[0]}
            value={startDate}
            onChange={handleStartDateChange}
          />
        </div>
        <div className=" inputItem ">
          <p className="request_option color">Reason</p>
          <select
            className="middle"
            value={absenceReason}
            onChange={handleReasonChange}
          >
            <option value="" disabled hidden>
              Select a reason
            </option>
            <option value="sick">Sick</option>
            <option value="personal">Personal</option>
            <option value="vacation">Vacation</option>
          </select>
        </div>
        <div className="inputItem">
          <p className="request_option">End Date</p>
          <input
            type="date"
            min={minDate.toISOString().split("T")[0]}
            value={endDate}
            onChange={handleEndDateChange}
          />
        </div>
      </div>
      <textarea
        className="textfield"
        id="w3review"
        name="w3review"
        rows="4"
        cols="50"
        placeholder="Type your reason for your leave request here"
        value={description}
        onChange={handleDescriptionChange}
      ></textarea>
      <div className="sendBlock">
        <button
          className="sendButton button"
          onClick={submitRequest}
          disabled={buttonDisabled}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default VerlofComponent;
