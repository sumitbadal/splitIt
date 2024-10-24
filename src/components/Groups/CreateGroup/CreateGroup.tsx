import { Email, Group } from "@mui/icons-material";
import { Box, Button, Grid, InputAdornment, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./CreateGroup.scss";
import { messages } from "../../user/UserUtils";
import GroupServices from "../../Service/GroupServices";
export interface ICreateGroup {
  name: string;
}
const CreateGroup = () => {
  const groupService = GroupServices.getInstance();
  const [groupdetails, setGroupdetails] = React.useState<ICreateGroup>({
    name: "",
  });

  const [errors, setErrors] = useState({ name: "" });
  const [showError, setShowError] = useState("");
  const [touched, setTouched] = useState({
    name: false,
  });

  const handleChange = (e) => {
    const inputType = e?.target.name;
    setGroupdetails((prev) => ({
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

  useEffect(() => {
    // Validate form and check for errors
    const newErrors = { name: "" };

    if (!groupdetails.name && touched.name) {
      newErrors.name = messages.groupNameInvalud;
    }

    setErrors(newErrors);

    // Check if the form is valid
  }, [groupdetails, touched]);

  const createGroup = () => {
    if (groupdetails.name) {
      groupService.createGroup({ name: groupdetails.name });
    }
  };
  return (
    <div className="create-grp-container">
      <Box component="form" noValidate sx={{ mt: 3 }}>
        {/* Box for aligning the button to the right top */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-start",
          }}
        >
          <Button
            variant="contained" // or "outlined", depending on your preference
            size="small" // This makes the button small
            color="primary"
            onClick={() => createGroup()}
          >
            done
          </Button>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <TextField
              variant="standard"
              id="name"
              name="name"
              label="Group name"
              margin="normal"
              onChange={(e) => {
                handleChange(e);
                handleBlur(e);
              }}
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Group />
                  </InputAdornment>
                ),
              }}
              error={!!errors.name && touched.name}
              helperText={touched.name ? errors.name : ""}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default CreateGroup;
