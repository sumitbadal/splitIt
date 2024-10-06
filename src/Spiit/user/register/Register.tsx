import { Input, Panel, Select } from "manish-quick-ui";
import React from "react";
import "./Register.scss";
import "../User/User.scss";
import { isInputValid, signupMap, validateEmail } from "../User/UserUtils";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface RegisterProps {
  fullName: string;
  emailId: string;
  phone: string;
  password: string;
}
const Register = () => {
  const [registerAgr, setRegisterArg] = React.useState<RegisterProps>({
    fullName: "",
    emailId: "",
    phone: "",
    password: "",
  });

  const onInputChange = (e) => {
    if (e) {
      setRegisterArg((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  const formInputs = signupMap.map((x) => {
    if (x.type === "input") {
      return (
        <Input
          label={x.label}
          key={x.name}
          className={`register-${x.name} ${!isInputValid(x.name, registerAgr[x.name]) ? "register-error" : ""}`}
          value={registerAgr[x.name]}
          onchangeHandler={(e) => {
            onInputChange(e);
          }}
          name={x.name}
          placeholder={x.placeholder}
        />
      );
    }
  });

  const createUser = async () => {
    try {
      const response = await fetch("http://localhost:4000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerAgr),
      });

      if (!response.ok) {
        if (response.status === 400) {
          const errorData = await response.json();
          console.log("400 Error:", errorData); // Log or display error
          throw new Error("Bad Request");
        } else {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      }

      toast("Account created successfully: Please login");
    } catch (error) {
      toast("Some issue while signing up");
      console.log("Error occurred:", error.message);
    }
  };

  const isFormValid = () => {
    const isValid = [];
    for (let key in registerAgr) {
      if (key === "emailId") {
        isValid.push(!validateEmail(registerAgr[key]));
      }
      if (registerAgr[key]) {
        isValid.push(false);
      } else {
        isValid.push(true);
      }
    }
    return isValid.some(Boolean);
  };
  return (
    <Panel title={"Register"}>
      <>
        <div className="main-register-container">
          {formInputs}
          <button
            onClick={() => createUser()}
            disabled={isFormValid()}
            className="register-submit"
          >
            Signup
          </button>
        </div>
        <ToastContainer stacked />

        <div className="card">
          <h2>
            <svg className="icon" aria-hidden="true">
              {/* <use xlink:href="#icon-coffee" href="#icon-coffee" /> */}
            </svg>
            Regular
          </h2>
          <label className="input">
            <input className="input__field" type="text" placeholder=" " />
            <span className="input__label">Some Fancy Label</span>
          </label>
          <div className="button-group">
            <button>Send</button>
            <button type="reset">Reset</button>
          </div>
        </div>
      </>
    </Panel>
  );
};

export default Register;
