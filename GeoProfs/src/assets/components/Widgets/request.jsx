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

  const [From, setFromDate] = useState("");
  const [VerlofReden, setVerlofReden] = useState("");
  const [Until, setUntilDate] = useState("");
  const [Beschrijving, setBeschrijving] = useState("");

  const [buttonDisabled, setButtonDisabled] = useState(false);

   const handleFromDateChange = (event) => {
     const From = event.target.value;
     setFromDate(From);
   };
   
   const handleReasonChange = (event) => {
     const VerlofReden = event.target.value;
     setVerlofReden(VerlofReden);
   };

   const handleUntilDateChange = (event) => {
     const Until = event.target.value;
     setUntilDate(Until);
   };

   const handleBeschrijvingChange = (event) => {
     const Beschrijving = event.target.value;
     setBeschrijving(Beschrijving);
   };

  const submitRequest = () => {
    if (!VerlofReden || !Beschrijving) {
      enqueueSnackbar("Please fill in all the required fields.", {
        variant: "error",
      });
      return;
    }
    setButtonDisabled(true);

    const requestData = {
      From,
      VerlofReden,
      Until,
      Beschrijving,
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
            value={From}
            onChange={handleFromDateChange}
          />
        </div>
        <div className=" inputItem ">
          <p className="request_option color">Reason</p>
          <select
            className="middle"
            value={VerlofReden}
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
            value={Until}
            onChange={handleUntilDateChange}
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
        value={Beschrijving}
        onChange={handleBeschrijvingChange}
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
