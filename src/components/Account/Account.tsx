import React from "react";
import Listx from "../ui-utils/List/Listx";
import { useDataStateContext } from "../context/DataStateContext";
import { Button } from "@mui/material";
import { Phone } from "@mui/icons-material";

const Account = () => {
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
          dispatch({
            type: "loginDetails",
            payload: { name: "", email: "", phone: "" },
          });
        }}
      >
        Logout
      </Button>
    </div>
  );
};

export default Account;
