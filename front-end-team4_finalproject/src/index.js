import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "../node_modules/react-router-dom/dist/index";
import { CssBaseline } from "../node_modules/@mui/material/index";
import CookiesProvider from "../node_modules/react-cookie/cjs/CookiesProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <BrowserRouter>
        <CssBaseline />
        <App />
      </BrowserRouter>
    </CookiesProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
