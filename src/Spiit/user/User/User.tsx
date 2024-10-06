import React from "react";
import Login from "../Login/Login";
import Register from "../register/Register";
import Home from "../Home/Home";

const User = () => {
  const [currentScreen, setCurrentScreen] = React.useState<
    "Register" | "Login"
  >("Login");
  const [isLoggedIn, setLoggedIn] = React.useState(false);

  return !isLoggedIn ? (
    <div>
      {currentScreen === "Login" ? (
        <Login setLoggedIn={setLoggedIn} />
      ) : (
        <Register />
      )}
      <div className="sm-msg">
        {currentScreen === "Login" && (
          <span className="sm-message">
            Need an account ?
            <span onClick={() => setCurrentScreen("Register")}>Sign up</span>
          </span>
        )}
        {currentScreen === "Register" && (
          <span>
            <span onClick={() => setCurrentScreen("Login")}>Sign up</span>
          </span>
        )}
      </div>
    </div>
  ) : (
    <Home />
  );
};

export default User;
