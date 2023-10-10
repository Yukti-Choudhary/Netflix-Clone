import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyles } from "./global-styles";
import { Provider } from "react-redux";
import appStore from "./utils/redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={appStore}>
      <GlobalStyles />
      <App />
    </Provider>
  </React.StrictMode>
);
