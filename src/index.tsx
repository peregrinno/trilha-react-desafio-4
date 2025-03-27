import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/Login";

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Nunito', sans-serif;
    box-sizing: border-box;
  }

  body {
    font-family: 'Nunito', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #81259D;
  }

  input, button, textarea, h1, h2, h3, h4, h5, h6 {
    font-family: 'Nunito', sans-serif;
  }
`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
