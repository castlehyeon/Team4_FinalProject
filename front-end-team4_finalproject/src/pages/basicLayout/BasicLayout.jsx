import React, { Fragment } from "react";
import {
  Outlet,
  useNavigate,
} from "../../../node_modules/react-router-dom/dist/index";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { blue } from "@mui/material/colors";

const BasicLayout = () => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}>
        <header style={{ background: "lightgray", padding: 8, fontSize: 16 }}>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <div>Header</div>
        </header>
        <main style={{ flexGrow: 1, background: blue["100"] }}>
          <Outlet></Outlet>
        </main>
        <footer>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "lightgray",
              padding: 8,
              fontSize: 16,
            }}>
            <div>copy right</div>
          </div>
        </footer>
      </div>
    </Fragment>
  );
};

export default BasicLayout;
