import { Box, Grid } from "@mui/material";
import LoginForm from "./LoginForm";
import { useRef, useState } from "react";
import "../user.scss";

const Login = () => {
  const scrollRef = useRef(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Box component="form" noValidate sx={{ mt: 0 }} ref={scrollRef}>
        <div className={"container"}>
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        </div>
      </Box>
    </>
  );
};

export default Login;
