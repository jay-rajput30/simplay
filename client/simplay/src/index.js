import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createClient, Provider } from "urql";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router } from "react-router-dom";
const client = createClient({
  url: "http://localhost:4000/graphql",
  fetchOptions: () => {
    const token = JSON.parse(localStorage.getItem("simplayToken")).token;

    return {
      headers: { authorization: token ? `Bearer ${token}` : "" },
    };
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider value={client}>
      <Router>
        <GlobalStyles />
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
