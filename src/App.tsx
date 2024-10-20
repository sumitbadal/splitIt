// import { useState } from "react";
// import "./App.css";

// import { Tab, Tabs, Box } from "@mui/material";
// import Login from "./components/Login/Login";
// import { useDataStateContext } from "./components/context/DataStateContext";
// import Register from "./components/Register/Register";
// import Home from "./components/Home/Home";
// import { BrowserRouter, Routes } from "react-router-dom";

// function App() {
//   const [value, setValue] = useState(0);
//   const { state, dispatch } = useDataStateContext();

//   const handleChange = (event: any, newValue: any) => {
//     setValue(newValue);
//   };

//   return state.loginDetails.email ? (
//     <>
//       <Home />
//     </>
//   ) : (
//     <BrowserRouter>
//       <Routes>
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           variant="fullWidth"
//           aria-label="tabs"
//         >
//           <Tab label="Login" />
//           <Tab label="Regsiter" />
//         </Tabs>
//         <>
//           {value === 0 && (
//             <TabPanel value={value} index={0}>
//               <Login />
//             </TabPanel>
//           )}
//           {value === 1 && (
//             <TabPanel value={value} index={1}>
//               <Register />
//             </TabPanel>
//           )}
//         </>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// function TabPanel(props: any) {
//   const { children, value, index } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`tabpanel-${index}`}
//       aria-labelledby={`tab-${index}`}
//     >
//       {value === index && <Box p={0}>{children}</Box>}
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import "./App.css";
import { Box } from "@mui/material";
import Login from "./components/user/Login/Login";
import Register from "./components/user/Register/Register";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useDataStateContext } from "./components/context/DataStateContext";
import Body from "./components/Body/Body";
import { myRoutes } from "./components/Routes/Routes";

function App() {
  const { state } = useDataStateContext();

  return state.loginDetails.email ? (
    <Home />
  ) : (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />}>
          {myRoutes.map((r) => (
            <Route path={r.path} element={r.element} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
