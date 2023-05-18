import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LogoutPage = ({ json }) => {
  const navigate = useNavigate();

  
  useEffect(() => {
    if (json) {
        window.localStorage.setItem("token", json.token);
        window.localStorage.setItem("user", json.user);
        window.localStorage.setItem("userName", json.userName);
        window.localStorage.setItem("Persoonlijk", json.Persoonlijk);
        window.localStorage.setItem("Vakantie", json.Vakantie);
        window.localStorage.setItem("Ziek", json.Ziek);
        window.localStorage.setItem("Id", json.Id);
    }

      navigate("/");
  }, [json, navigate]);
};

export default LogoutPage;
