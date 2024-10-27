import {
  Box,
  Grid,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import RefreshIcon from "@mui/icons-material/Refresh";
import { registerService } from "../../Service/RegisterService";
import { useNavigate } from "react-router-dom";
import {
  isAllFieldsValid,
  messages,
  validateEmail,
  validatePassword,
} from "../UserUtils";
import {
  AccountCircle,
  Email,
  Password,
  Phone,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import SmallToast from "../../ui-utils/Toast";
import { loginService } from "../../Service/LoginService";
import { useDataStateContext } from "../../context/DataStateContext";
import { useLoading } from "../../context/LoadingContext";

interface RegisterProps {
  [key: string]: string;
  emailOrPhone: string;
  password: string;
  name: string;
  phone: string;
}

const RegisterForm = () => {
  const { showLoading, hideLoading } = useLoading();
  const [isFormValid, setIsFormValid] = useState(false);
  const [showError, setShowError] = useState("");
  const [open, setOpen] = useState<boolean>(false);
  const {
    dispatch,
    state: {
      loginDetails: { name, email },
    },
  } = useDataStateContext();

  useEffect(() => {
    console.log(email);
    if (name && email) {
      navigate("/home");
    }
  }, [email]);

  const [errors, setErrors] = useState({
    emailOrPhone: "",
    password: "",
    name: "",
    phone: "",
  });
  const [touched, setTouched] = useState({
    emailOrPhone: false,
    password: false,
    name: false,
    phone: false,
  });
  const navigate = useNavigate();
  const initData = {
    emailOrPhone: "",
    password: "",
    name: "",
    phone: "",
  };
  const [showPassword, setShowPassword] = useState(false);

  const [registerDetails, setRegisterDetails] =
    useState<RegisterProps>(initData);

  const handleItems = (e: any) => {
    setShowError("");
    const inputType = e?.target.name;
    setRegisterDetails((prev) => ({
      ...prev,
      [inputType]: e.target.value,
    }));
  };

  const handleBlur = (e: any) => {
    const field = e.target.name;
    setTouched((prev) => ({
      ...prev,
      [field]: true,
    }));
  };

  const allFieldsValid = useMemo(
    () => isAllFieldsValid(registerDetails),
    [registerDetails]
  );

  useEffect(() => {
    const newErrors = { emailOrPhone: "", password: "", name: "", phone: "" };

    if (!registerDetails.name && touched.name) {
      newErrors.name = messages.nameRequired;
    } else if (touched.name && registerDetails.name.length < 3) {
      newErrors.name = messages.nameMinLength;
    }

    if (!registerDetails.emailOrPhone && touched.emailOrPhone) {
      newErrors.emailOrPhone = messages.emailRequired;
    } else if (
      touched.emailOrPhone &&
      validateEmail(registerDetails.emailOrPhone)
    ) {
      newErrors.emailOrPhone = messages.emailMatchCase;
    }

    if (!registerDetails.phone && touched.phone) {
      newErrors.phone = messages.phoneRequired;
    } else if (touched.phone) {
      const phone = registerDetails.phone.trim();
      // Check if it's numeric and exactly 10 digits long
      if (phone.length !== 10 || isNaN(Number(phone))) {
        newErrors.phone = messages.phoneInvalid;
      }
    }
    if (!registerDetails.password && touched.password) {
      newErrors.password = messages.passwordRequired;
    } else if (touched.password && validatePassword(registerDetails.password)) {
      newErrors.password = messages.passwordMatchCase;
    }

    setErrors(newErrors);
    console.log(newErrors);
    setIsFormValid(
      !newErrors.emailOrPhone &&
        !newErrors.password &&
        !newErrors.name &&
        !newErrors.phone &&
        allFieldsValid
    );
  }, [registerDetails, touched]);

  const signup = () => {
    showLoading();
    if (!allFieldsValid) return;
    const { emailOrPhone, password, phone, name } = registerDetails;
    registerService
      .signup({
        emailId: emailOrPhone,
        password,
        phone,
        fullName: name,
      })
      .then((resp) => {
        setOpen(true);
        return loginService.login({
          emailId: registerDetails.emailOrPhone,
          password: registerDetails.password,
        });
      })
      .then((resp) => {
        dispatch({
          type: "loginDetails",
          payload: { name, email: emailOrPhone, phone: phone },
        });
      })
      .catch((e) => {
        if (e.response && e.response.data && e.response.data.message) {
          console.log(e.response.data.message);
          setShowError(e.response.data.message);
        } else {
          console.log("An error occurred:", e.message || e);
        }
      })
      .finally(hideLoading);
  };

  const switchToLogin = () => {
    navigate("/login");
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleCloseToast = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div className="current">
      <div className="container-item-head">
        <h2 className="login-heading">Sign Up</h2>
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
              value={registerDetails?.name}
              onChange={(e) => {
                handleItems(e);
                handleBlur(e);
              }}
              error={!!errors.name && touched.name}
              helperText={touched.name ? errors.name : ""}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
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
              value={registerDetails?.emailOrPhone}
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
              autoComplete="given-phone"
              name="phone"
              required
              fullWidth
              id="phone"
              type="text"
              label="Phone"
              value={registerDetails?.phone}
              onChange={(e) => {
                handleItems(e);
                handleBlur(e);
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Phone />
                  </InputAdornment>
                ),
              }}
              error={!!errors.phone && touched.phone}
              helperText={touched.phone ? errors.phone : ""}
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
              value={registerDetails?.password}
              onChange={(e) => {
                handleItems(e);
                handleBlur(e);
              }}
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
                signup();
              }}
              disabled={!isFormValid} // Disable button if form is not valid
            >
              Sign up
            </button>
          </Grid>
          {showError && (
            <Grid item xs={12} sm={12} className="login-error">
              {showError}
            </Grid>
          )}
          <Grid item xs={12} sm={12} className="signup-login-link-holder">
            Have an account?<Link to={"/login"}> Login</Link>
          </Grid>
        </Grid>
      </Box>
      <SmallToast
        open={open}
        message="Account created successfully. We're logging you in."
        onClose={handleCloseToast}
        autoHideDuration={3000}
      />
    </div>
  );
};

export default RegisterForm;
