import { useNavigate } from "react-router-dom";
import { API_URL } from "../../../constants/links";

const useAuth = () => {
  const navigate = useNavigate();

  const token = window.localStorage.getItem("token");
  const user = window.localStorage.getItem("user");
  const username = window.localStorage.getItem("username");
  const persoonlijk = window.localStorage.getItem("persoonlijk");
  const vakantie = window.localStorage.getItem("vakantie");
  const ziek = window.localStorage.getItem("ziek");
  const id = window.localStorage.getItem("id");
  const role = window.localStorage.getItem("role");
  const afdelingnaam = window.localStorage.getItem("afdelingnaam");

  const authFetch = (url, body, useCustomUrl) => {
    const token = window.localStorage.getItem("token");

    return fetch(useCustomUrl ? url : `${API_URL}${url}`, {
      ...body,
      headers: body?.headers
        ? { Accept: "application/json", ...body.headers, Bearer: token }
        : { Accept: "application/json", Bearer: token },
    }).then((response) => {
      if (response.status === 401) {
        navigate("/logout");
        return new Promise((r) => r(null));
      }

      return response.json();
    });
  };

  return {
    isLoggedIn: user && username && token,
    user: {
      user,
      username,
      persoonlijk,
      vakantie,
      ziek,
      id,
      role,
      afdelingnaam,
    },
    authFetch,
  };
};

export default useAuth;
