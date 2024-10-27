import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";

import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { loginService } from "../../Service/LoginService";
import { useDataStateContext } from "../../context/DataStateContext";
import {
  Visibility,
  VisibilityOff,
  Email,
  Password,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { isAllFieldsValid, messages, validateEmail } from "../UserUtils";
import { useLoading } from "../../context/LoadingContext";

interface LoginProps {
  [key: string]: string;
  emailOrPhone: string;
  password: string;
}

interface LoggedInProps {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginForm = (props: LoggedInProps) => {
  const { showLoading, hideLoading } = useLoading();
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();
  const [errors, setErrors] = useState({ emailOrPhone: "", password: "" });
  const [showError, setShowError] = useState("");
  const [isLoading, setLoading] = useState<boolean>(false);
  const [touched, setTouched] = useState({
    emailOrPhone: false,
    password: false,
  });
  const initData = {
    emailOrPhone: "",
    password: "",
  };
  const [loginDetails, setLoginDetails] = useState<LoginProps>(initData);
  const {
    dispatch,
    state: {
      loginDetails: { name, email },
    },
  } = useDataStateContext();
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    console.log(email);
    if (name && email) {
      navigate("/home");
    }
  }, [email]);
  const handleItems = (e: any) => {
    const inputType = e?.target.name;
    setLoginDetails((prev) => ({
      ...prev,
      [inputType]: e.target.value,
    }));
  };

  const handleBlur = (e: any) => {
    setShowError("");
    const field = e.target.name;
    setTouched((prev) => ({
      ...prev,
      [field]: true,
    }));
  };

  const allFieldsValid = useMemo(
    () => isAllFieldsValid(loginDetails),
    [loginDetails]
  );

  useEffect(() => {
    // Validate form and check for errors
    const newErrors = { emailOrPhone: "", password: "" };

    if (!loginDetails.emailOrPhone && touched.emailOrPhone) {
      newErrors.emailOrPhone = messages.emailRequired;
    } else if (
      touched.emailOrPhone &&
      validateEmail(loginDetails.emailOrPhone)
    ) {
      newErrors.emailOrPhone = messages.emailMatchCase;
    }

    if (!loginDetails.password && touched.password) {
      newErrors.password = messages.passwordRequired;
    }

    setErrors(newErrors);

    // Check if the form is valid
    setIsFormValid(
      !newErrors.emailOrPhone && !newErrors.password && allFieldsValid
    );
  }, [loginDetails, touched]);

  const letsLogin = async () => {
    showLoading();
    if (!allFieldsValid) return;
    if (!isFormValid) return; // Don't submit if the form is invalid

    try {
      setLoading(true);
      const resp = await loginService.login({
        emailId: loginDetails.emailOrPhone,
        password: loginDetails.password,
      });

      const {
        data: {
          details: { fullName, emailId, phone },
        },
      } = resp;

      dispatch({
        type: "loginDetails",
        payload: { name: fullName, email: emailId, phone: phone },
      });
    } catch (e) {
      if (e?.response?.data?.message) {
        setShowError(e.response.data.message);
      } else {
        console.log("An error occurred:", e.message || e);
      }
    } finally {
      hideLoading();
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="current">
      <div className="container-item-head">
        <h2 className="login-heading">Login</h2>
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
              onChange={(e) => {
                handleItems(e);
                handleBlur(e);
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
              error={!!errors.emailOrPhone && touched.emailOrPhone}
              helperText={touched.emailOrPhone ? errors.emailOrPhone : ""}
            />
          </Grid>

          <Grid item xs={12} sm={12}>
            <TextField
              autoComplete="given-name"
              name="password"
              required
              fullWidth
              id="password"
              type={showPassword ? "text" : "password"}
              label="Password"
              value={loginDetails?.password}
              onChange={(e) => {
                handleItems(e);
                handleBlur(e);
              }}
              onBlur={handleBlur}
              error={!!errors.password && touched.password}
              helperText={touched.password ? errors.password : ""}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Password />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
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
          {showError && (
            <Grid item xs={12} sm={12} className="login-error">
              {showError}
            </Grid>
          )}
          <Grid item xs={12} sm={12} className="signup-login-link-holder">
            Don't have an account? <Link to={"/register"}> Sign Up</Link>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default LoginForm;
