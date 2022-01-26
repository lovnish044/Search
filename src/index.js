import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { StateContextProvider } from "./contexts/StateContextProvider";
import "./index.css";

ReactDOM.render(
  <StateContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StateContextProvider>,
  document.getElementById("root")
);
