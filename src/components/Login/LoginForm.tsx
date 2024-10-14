import { Box, Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import RefreshIcon from "@mui/icons-material/Refresh";
import { loginService } from "../Service/LoginService";

interface LoginProps {
  emailOrPhone: string;
  password: string;
}

interface LoggedInProps {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}
const LoginForm = (props: LoggedInProps) => {
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
      loginDetails.emailOrPhone !== "" && loginDetails.password !== ""
    );
  }, [loginDetails]);

  const letsLogin = () => {
    loginService.login({
      emailId: loginDetails.emailOrPhone,
      password: loginDetails.password,
    });
  };
  return (
    <div>
      <div className="container-item-head">
        <span className="left-item">Login</span>
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
                letsLogin();
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

export default LoginForm;
