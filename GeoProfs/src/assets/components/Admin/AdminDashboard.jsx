import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import { useSnackbar } from "notistack";
import CreateIssueComponent from "./CreateIssueComponent";

const AdminComponent = () => {
  const { isLoggedIn, authFetch } = useAuth();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (!isLoggedIn) navigate("/login");
  }, []);

  return (
    <div className="componentsBlock">
      <div className="left">
        <div className="Block">
          <div className="BlockAbove">
            <CreateIssueComponent />
          </div>
          <div className="BlockDown">
            <div className="Blocks"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminComponent;
