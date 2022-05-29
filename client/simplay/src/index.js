import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createClient, Provider } from "urql";
import GlobalStyles from "./GlobalStyles";
const client = createClient({
  url: "http:://localhost:4000/graphql",
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider value={client}>
      <GlobalStyles />
      <App />
    </Provider>
  </React.StrictMode>
);
