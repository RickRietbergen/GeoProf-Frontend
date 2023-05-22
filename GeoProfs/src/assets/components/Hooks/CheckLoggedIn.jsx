import React from "react";
import App from "../../../App";
import Dashboard from "../../../dashboard";
import useAuth from "./useAuth";

const CheckLoggedIn = () => {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return [
      {
        path: "/Dashboard",
        element: <Dashboard />,
      },
    ];
  } else {
    return [
      {
        path: "/",
        element: <App />,
      },
    ];
  }
};

export default CheckLoggedIn;