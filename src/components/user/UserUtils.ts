export const validateEmail = (emailOrPhone: string) =>
  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(emailOrPhone);

export const validatePassword = (password) =>
  !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/.test(password);

export enum messages {
  passwordRequired = "Password is required",
  passwordMatchCase = "Password must be at least 6 characters long, contain a number and a special character",
  emailRequired = "Email is required",
  emailMatchCase = "Please enter a valid email address",
  nameRequired = "Name is required",
  nameMinLength = "Min 3 characters required",
  phoneRequired = "Phone number is required",
  phoneInvalid = "Invalid phone number",
  groupNameInvalud = "Please provide group name",
}

export const isAllFieldsValid = (obj: Record<string, string>): boolean => {
  return Object.keys(obj).every((key) => !!obj[key]);
};
