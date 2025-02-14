import React from "react";
import Listx from "../ui-utils/List/Listx";
import { useDataStateContext } from "../context/DataStateContext";
import Cookies from "js-cookie";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Account = () => {
  const navigate = useNavigate();
  const {
    dispatch,
    state: {
      loginDetails: { name, email },
    },
  } = useDataStateContext();
  return (
    <div className="pad5">
      <h3>Hi {name}</h3>
      <p>{email}</p>
      <Button
        variant={"outlined"}
        fullWidth
        onClick={() => {
          Cookies.remove("token");
          dispatch({
            type: "loginDetails",
            payload: { name: "", email: "", phone: "" },
          });
          navigate("/login");
        }}
      >
        Logout
      </Button>
    </div>
  );
};

export default Account;
