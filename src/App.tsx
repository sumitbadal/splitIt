import { useState } from "react";
import "./App.css";

import { Tab, Tabs, Box } from "@mui/material";
import Login from "./components/Login/Login";
import { useDataStateContext } from "./components/context/DataStateContext";
import Register from "./components/Register/Register";

function App() {
  const [value, setValue] = useState(0);
  const { state } = useDataStateContext();

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        aria-label="tabs"
      >
        <Tab label="Login" />
        <Tab label="Regsiter" />
      </Tabs>
      <>
        {value === 0 && (
          <TabPanel value={value} index={0}>
            <Login />
          </TabPanel>
        )}
        {value === 1 && (
          <TabPanel value={value} index={1}>
            <Register />
          </TabPanel>
        )}
      </>
    </>
  );
}

function TabPanel(props: any) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {value === index && <Box p={0}>{children}</Box>}
    </div>
  );
}

export default App;
