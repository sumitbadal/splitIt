import { Box, Grid } from "@mui/material";
import LoginForm from "./LoginForm";
import { useRef, useState } from "react";
import "./items.scss";
import { loginService } from "../Service/LoginService";
const Login = () => {
  const scrollRef = useRef(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { login } = loginService;

  return (
    <>
      <Box component="form" noValidate sx={{ mt: 0 }} ref={scrollRef}>
        <div className={"item-container"}>
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        </div>
      </Box>
    </>
  );
};

export default Login;
