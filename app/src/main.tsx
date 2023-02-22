import React from "react";
import ReactDOM from "react-dom/client";
import { DefaultTheme, ThemeProvider } from "styled-components";
import App from "./App";
import "./index.css";

const theme: DefaultTheme = {
  textColor: "#33394c",
  backgroundColor: "#a8aebc",
  boxColor: "#ffffff",
  primaryColors: {
    blue: "#4e7cff",
    purple: "7033ff",
    orange: "f65164",
  },
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
