import React from "react";
import { useState } from "react";
import "./App.css";
import background from "../src/assets/background.jpg";
import picture from "../src/assets/smallerPicture.jpg";
import logo from "../src/assets/logo.png";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { API_URL } from "./constants/links";

function App() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const [usernameError, setUsernameError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleLogin = () => {
    fetch(`${API_URL}auth/login`, {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        return new Promise((resolve) => {
          if (response.ok) {
            response.json().then((json) =>
              resolve({
                status: response.status,
                ok: response.ok,
                json,
              })
            );
          } else {
            resolve({
              status: response.status,
              ok: response.ok,
              json: response,
            });
          }
        });
      })
      .then(({ status, json, ok }) => {
        if (!ok) {
          closeSnackbar();
          setButtonDisabled(false);
          json
            .text()
            .then((text) => enqueueSnackbar(text, { variant: "error" }));
        }

        console.log(json);
        window.localStorage.setItem("token", json.token);
        window.localStorage.setItem("user", json.user);
        window.localStorage.setItem("userName", json.userName);
        window.localStorage.setItem("Persoonlijk", json.Persoonlijk);
        window.localStorage.setItem("Vakantie", json.Vakantie);
        window.localStorage.setItem("Ziek", json.Ziek);
        window.localStorage.setItem("Id", json.Id);

        if (ok) {
          closeSnackbar();
          enqueueSnackbar("Successfully logged in", { variant: "success" });
          setButtonDisabled(true);
          navigate("/dashboard");
        }
      });
  };

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
              <input
                placeholder="Username"
                error={usernameError}
                type="text"
                onChange={(e) => {
                  setUsername(e.target.value);
                  setUsernameError(null);
                }}
              />
              <input
                placeholder="Password"
                error={passwordError}
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                  setPasswordError(null);
                }}
              />
            </div>
            <button
              className="button-login"
              disabled={buttonDisabled}
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
