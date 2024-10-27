import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import React from "react";
import {
  AccountBox,
  AccountCircle,
  Add,
  Groups,
  Home,
  Person3,
  VerifiedUser,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);
  return (
    <div>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          icon={<Home />}
          onClick={() => {
            navigate("Home");
          }}
          label={"home"}
        />
        <BottomNavigationAction
          icon={<Person3 />}
          onClick={() => {
            navigate("friends");
          }}
          label={"Friends"}
        />
        <BottomNavigationAction
          icon={<Add />}
          onClick={() => {
            navigate("Home");
          }}
          label={"Add"}
        />
        <BottomNavigationAction
          icon={<Groups />}
          onClick={() => {
            navigate("/group/create");
          }}
          label={"Groups"}
        />
        <BottomNavigationAction
          onClick={() => {
            navigate("/Account");
          }}
          icon={<AccountCircle />}
          label={"Account"}
        />
      </BottomNavigation>
    </div>
  );
};

export default Footer;
