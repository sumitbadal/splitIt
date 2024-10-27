import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import DataStateProvider from "./components/context/DataStateProvider";
import { ThemeProvider } from "manish-quick-ui";
import { LoadingProvider } from "./components/context/LoadingContext";
// import { ThemeProvider } from "@manish774/smarty-ui";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider>
    <LoadingProvider>
      <DataStateProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </DataStateProvider>
    </LoadingProvider>
  </ThemeProvider>
);

reportWebVitals();
