import { Input, Panel } from "manish-quick-ui";
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
        const errorMessage = await response.text(); // Get the response body as text
        throw new Error(errorMessage);
      }

      toast.success("Account created successfully! Please log in.");
    } catch (error) {
      if (error.message === "Bad Request") {
        toast.error("Invalid input data, please try again.");
      } else {
        toast.error(error.message);
      }
    }
  };

  const isFormValid = () => {
    const isValid = [];
    for (let key in registerAgr) {
      if (key === "emailId") {
        isValid.push(!validateEmail(registerAgr[key]));
      }
      isValid.push(!registerAgr[key]);
    }
    return isValid.some(Boolean);
  };

  const formInputs = signupMap.map((x) => {
    if (x.type === "input") {
      return (
        <Input
          label={x.label}
          key={x.name}
          className={`register-${x.name} ${!isInputValid(x.name, registerAgr[x.name]) ? "register-error" : ""}`}
          value={registerAgr[x.name]}
          onchangeHandler={(e) => onInputChange(e)}
          name={x.name}
          placeholder={x.placeholder}
        />
      );
    }
  });

  return (
    <>
      <div className="main-register-container">
        {formInputs}
        <button
          onClick={createUser}
          disabled={isFormValid()}
          className="register-submit"
        >
          Signup
        </button>
      </div>
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
    </>
  );
};

export default Register;
