import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider, teamsTheme } from "@fluentui/react-northstar";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider theme={teamsTheme}>
    <App />
  </Provider>
  // </React.StrictMode>
);
