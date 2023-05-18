import React, { useState } from "react";

const VerlofComponent = () => {
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setSelectedDate(selectedDate);
  };

  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);

  return (
    <div className="verlofComponent">
      <div className="titleBlock">
        <p className="titleBlockNew">New</p>
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
        <div className="center inputItem selectBox">
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
        <button className="sendButton button">Send</button>
      </div>
    </div>
  );
};

export default VerlofComponent;
