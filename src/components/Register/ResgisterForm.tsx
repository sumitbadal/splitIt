import { Box, Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import RefreshIcon from "@mui/icons-material/Refresh";

interface LoginProps {
  emailOrPhone: string;
  password: string;
}
const RegisterForm = () => {
  const [isFormValid, setIsFormValid] = useState(false);

  const initData = {
    emailOrPhone: "",
    password: "",
  };

  const [loginDetails, setLoginDetails] = useState<LoginProps>(initData);

  const handleItems = (e: any) => {
    const inputType = e?.target.name;
    setLoginDetails((prev) => ({
      ...prev,
      [inputType]: e.target.value,
    }));
  };

  useEffect(() => {
    setIsFormValid(
      loginDetails.emailOrPhone !== "" &&
        loginDetails.emailOrPhone.length !== 10 &&
        loginDetails.password !== "" &&
        loginDetails.password.length > 5
    );
  }, [loginDetails]);

  return (
    <div>
      <div className="container-item-head">
        <span className="left-item">Register</span>
        <button
          className="right-item"
          onClick={(e) => {
            e.preventDefault();
            setLoginDetails(initData);
          }}
        >
          <RefreshIcon />
        </button>
      </div>
      <Box component="form" noValidate sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <TextField
              autoComplete="given-name"
              name="name"
              required
              fullWidth
              id="name"
              label="Name"
              type="text"
              value={loginDetails?.emailOrPhone}
              onChange={handleItems}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              autoComplete="given-email"
              name="emailOrPhone"
              required
              fullWidth
              id="email"
              label="Email"
              type="email"
              value={loginDetails?.emailOrPhone}
              onChange={handleItems}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              autoComplete="given-phone"
              name="phone"
              required
              fullWidth
              id="phone"
              type="text"
              label="Phone"
              value={loginDetails?.password}
              onChange={handleItems}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              autoComplete="given-name"
              name="password"
              required
              fullWidth
              id="price"
              type="password"
              label="Password"
              value={loginDetails?.password}
              onChange={handleItems}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <button
              className={"add-item-btn"}
              onClick={(e) => {
                e.preventDefault();
              }}
              disabled={!isFormValid} // Disable button if form is not valid
            >
              Login
            </button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default RegisterForm;
