import React from "react";

const VerlofComponent = () => {
  return (
    <div className="verlofComponent">
      <div className="titleBlock">
        <p className="titleBlockNew">New</p>
        <p className="titleBlockRequest">Leave Request</p>
      </div>
      <div className="inputBlock">
        <div className="inputItem">
          <p>Start Date</p>
          <input type="text" placeholder="17-5-2023" />
        </div>
        <div className="center inputItem">
          <p>Reason</p>
          <input className="middle" type="text" placeholder="reason" />
        </div>
        <div className="inputItem">
          <p>End Date</p>
          <input type="text" placeholder="17-6-2023" />
        </div>
      </div>
      <textarea
        className="textfield"
        id="w3review"
        name="w3review"
        rows="4"
        cols="50"
        placeholder="  Type your reason for your leave request here"
      ></textarea>
      <div className="sendBlock">
        <button className="sendButton button">Send</button>
      </div>
    </div>
  );
};

export default VerlofComponent;
