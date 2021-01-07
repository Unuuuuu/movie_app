import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyle from "./style/global";
import { ThemeProvider } from "styled-components";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider
      theme={{
        palette: {
          gray: "#f8f9fa",
          red: "#ffa8a8",
          teal: "#63e6be",
        },
      }}
    >
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
