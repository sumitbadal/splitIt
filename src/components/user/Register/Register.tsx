import { Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import "../user.scss";

import RegisterForm from "./ResgisterForm";

const Register = () => {
  const scrollRef = useRef(null);

  return (
    <>
      <Box component="form" noValidate sx={{ mt: 0 }} ref={scrollRef}>
        <div className={"container"}>
          <RegisterForm />
        </div>
      </Box>
    </>
  );
};

export default Register;
