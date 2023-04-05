import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./redux/store";//"./redux/store" which is where all the Redux state will be stored.
import { Provider } from "react-redux";
//renders the App component in a div with an id of "root".
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
