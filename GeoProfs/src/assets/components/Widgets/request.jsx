import React, { useState } from "react";
import { API_URL } from "../../../constants/links";

const VerlofComponent = () => {
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

  const submitRequest = () => {
    setButtonDisabled(true);

    fetch(`${API_URL}VerlofAanvraag`, {
      method: "POST",
      body: JSON.stringify({
        startDate,
        absenceReason,
        endDate,
        description,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((res) => {
      setButtonDisabled(false);
      if (!res.ok) {
        res.text().then((text) => enqueueSnackbar(text, { variant: "error" }));
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
            value={selectedDate}
            onChange={handleDateChange}
          />
        </div>
        <div className=" inputItem ">
          <p className="request_option color">Reason</p>
          <select className="middle" defaultValue="">
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
            value={selectedDate}
            onChange={handleDateChange}
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
