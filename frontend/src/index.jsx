import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "rsuite/dist/rsuite.min.css";
import "animate.css";
import { Provider } from "react-redux";
import store from "./store";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
