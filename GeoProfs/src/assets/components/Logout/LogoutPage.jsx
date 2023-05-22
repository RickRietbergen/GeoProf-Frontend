import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LogoutPage = ({ json }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (json) {
      window.localStorage.removeItem("token", json.token);
      window.localStorage.removeItem("user", json.user);
      window.localStorage.removeItem("userName", json.userName);
      window.localStorage.removeItem("Persoonlijk", json.Persoonlijk);
      window.localStorage.removeItem("Vakantie", json.Vakantie);
      window.localStorage.removeItem("Ziek", json.Ziek);
      window.localStorage.removeItem("Id", json.Id);
    }

    navigate("/");
  }, [json, navigate]);
};

export default LogoutPage;
