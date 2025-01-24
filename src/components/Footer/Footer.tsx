import React, { useEffect } from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { AccountCircle, Add, Groups, Home, Person3 } from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    // Update the value based on the current pathname
    switch (location.pathname) {
      case "/Home":
        setValue(0);
        break;
      case "/friends":
        setValue(1);
        break;
      case "/add":
        setValue(2);
        break;
      case "/group/create":
        setValue(3);
        break;
      case "/Account":
        setValue(4);
        break;
      default:
        setValue(0);
    }
  }, [location.pathname]);

  return (
    <div style={{ position: "fixed", bottom: "0", width: "100%" }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          icon={<Home />}
          onClick={() => navigate("/Home")}
          label="Home"
        />
        <BottomNavigationAction
          icon={<Person3 />}
          onClick={() => navigate("/friends")}
          label="Friends"
        />
        <BottomNavigationAction
          icon={<Add />}
          onClick={() => navigate("/add")}
          label="Add"
        />
        <BottomNavigationAction
          icon={<Groups />}
          onClick={() => navigate("/group/create")}
          label="Groups"
        />
        <BottomNavigationAction
          icon={<AccountCircle />}
          onClick={() => navigate("/Account")}
          label="Account"
        />
      </BottomNavigation>
    </div>
  );
};

export default Footer;
