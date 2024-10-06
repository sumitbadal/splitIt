export const signupMap = [
  {
    name: "fullName",
    value: "",
    type: "input",
    placeholder: "Enter full name",
    label: "Name",
  },
  {
    name: "emailId",
    value: "",
    type: "input",
    placeholder: "Enter your email",
    label: "Email",
  },
  {
    name: "password",
    value: "",
    type: "input",
    placeholder: "Enter password",
    label: "Password",
  },
  {
    name: "phone",
    value: "",
    type: "input",
    placeholder: "Enter phone",
    label: "Phone",
  },
];

export const loginMap = [
  {
    name: "emailId",
    value: "",
    type: "input",
    placeholder: "Enter phone or email",
    label: "Phone / Email",
  },
  {
    name: "password",
    value: "",
    type: "input",
    placeholder: "Enter phone",
    label: "Password",
  },
];

export const validateEmail = (email: string): boolean => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

export const isInputValid = (key: string, inputValue: string): boolean => {
  if (key === "emailId") {
    return validateEmail(inputValue);
  } else {
    return inputValue ? true : false;
  }
};
