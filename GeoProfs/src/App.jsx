import { useState } from "react";
import "./App.css";
import background from "../src/assets/background.jpg";
import picture from "../src/assets/smallerPicture.jpg";
import logo from "../src/assets/logo.png";

function App() {
  return (
    <div className="login-background">
      <img className="background-image" src={background} alt="" />
      <div className="loginBlock">
        <img className="smallPicture" src={picture}></img>
        <div className="text-block-left">
          <div className="text-block">
            <img className="logo" src={logo}></img>
            <p className="middle_text">
              Welkom bij GeoProfs verlofssite! Hier vraag je eenvoudig en snel
              verlof aan. Bij GeoProfs vinden we het belangrijk dat onze
              medewerkers een gezonde balans tussen werk en privé hebben.
            </p>
            <div className="input">
              <input placeholder="Username" type="text" />
              <input placeholder="Password" type="text" />
            </div>
            <button className="button">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
