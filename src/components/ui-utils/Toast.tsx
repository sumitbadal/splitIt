import React from "react";
import { Snackbar, Alert, AlertColor } from "@mui/material";

interface SmallToastProps {
  open: boolean;
  onClose: (event?: React.SyntheticEvent | Event, reason?: string) => void;
  message: string;
  severity?: AlertColor; // 'error' | 'warning' | 'info' | 'success'
  autoHideDuration?: number; // Duration in milliseconds, default to 3000
}

const SmallToast: React.FC<SmallToastProps> = ({
  open,
  onClose,
  message,
  severity = "success",
  autoHideDuration = 3000,
}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      sx={{
        "& .MuiSnackbarContent-root": {
          minWidth: "150px",
          padding: "6px 12px",
          fontSize: "0.75rem",
        },
      }}
    >
      <Alert onClose={onClose} severity={severity} sx={{ fontSize: "0.75rem" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SmallToast;
