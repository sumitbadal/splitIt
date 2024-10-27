import { Switch } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ThemeContext } from "manish-quick-ui";
import { useDataStateContext } from "../context/DataStateContext";
import Footer from "../Footer/Footer";
import "./Body.scss";
const Body = () => {
  const label = { inputProps: { "aria-label": "Switch Theme" } };
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const {
    state: {
      loginDetails: { name },
    },
  } = useDataStateContext();

  useEffect(() => {
    toggleTheme("dark");
    if (!name) {
      navigate("/login");
    }
  }, [name]);

  const changeTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    toggleTheme(newTheme);
  };

  return (
    <div className="body-container">
      <header>
        <Switch {...label} defaultChecked onClick={changeTheme} />
      </header>
      <main className="main-content">
        <Outlet />
      </main>
      {name && <Footer />}
    </div>
  );
};

export default Body;
