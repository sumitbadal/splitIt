import { Switch } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ThemeContext } from "manish-quick-ui";
import { useDataStateContext } from "../context/DataStateContext";
import Footer from "../Footer/Footer";
import "./Body.scss";
import { loginService } from "../Service/LoginService";
import Cookies from "js-cookie";

const Body = () => {
  const label = { inputProps: { "aria-label": "Switch Theme" } };
  const { theme, toggleTheme } = useContext(ThemeContext);
  const token = Cookies.get("token");

  const navigate = useNavigate();
  const {
    dispatch,
    state: {
      loginDetails: { name },
    },
  } = useDataStateContext();

  useEffect(() => {
    toggleTheme("light");
    if (name) return;

    const getUserDetails = async () => {
      const userdetail = (await loginService.getUser()) as any;

      dispatch({
        type: "loginDetails",
        payload: {
          name: "userdetail.name",
          email: "userdetail.name",
          phone: "userdetail.phone",
        },
      });
    };
    if (token) {
      getUserDetails();
    } else {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    if (!token) {
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
