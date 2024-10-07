import React from "react";
import { isInputValid, loginMap } from "../User/UserUtils";
import { Input } from "manish-quick-ui";
import "../User/User.scss";
import "./Login.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface LoginProps {
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login = ({ setLoggedIn }: LoginProps) => {
  const [login, setLogin] = React.useState<{
    emailOrPhone: string;
    password: string;
  }>({ emailOrPhone: "", password: "" });

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e) {
      setLogin((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  const loginIt = async () => {
    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(login),
      });

      if (!response.ok) {
        if (response.status === 400) {
          const errorData = await response.json();
          throw new Error("Bad Request");
        } else {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      }

      // Show success toast notification
      toast.success("Logged in. Hurrah!");
      setLoggedIn(true);
      console.log("Login successful");
    } catch (error: any) {
      if (error.message === "Bad Request") {
        // Show error toast for invalid credentials
        toast.error("Invalid login credentials, please try again.");
      } else {
        toast.error("Some issue while logging in.");
      }
    }
  };

  const formInputs = loginMap.map((x) => {
    if (x.type === "input") {
      return (
        <Input
          label={x.label}
          key={x.name}
          className={`login-${x.name} ${
            !isInputValid(x.name, login[x.name]) ? "login-error" : ""
          }`}
          value={login[x.name]}
          onchangeHandler={onInputChange} // Corrected from onchangeHandler to onChange
          name={x.name}
          placeholder={x.placeholder}
        />
      );
    }
    return null;
  });

  return (
    <div className="login-min-container">
      {formInputs}
      <button className="login-btn" onClick={() => loginIt()}>
        Login
      </button>
      {/* Only one ToastContainer */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Login;
