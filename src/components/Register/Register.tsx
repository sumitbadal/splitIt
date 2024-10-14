import { Box } from "@mui/material";
import { useRef } from "react";
import "./items.scss";

import RegisterForm from "./ResgisterForm";

const Login = () => {
  const scrollRef = useRef(null);

  return (
    <>
      <Box component="form" noValidate sx={{ mt: 0 }} ref={scrollRef}>
        <div className={"item-container"}>
          <RegisterForm />
        </div>
      </Box>
    </>
  );
};

export default Login;
