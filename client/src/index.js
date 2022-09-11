import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  createClient,
  Provider,
  fetchExchange,
  dedupExchange,
  subscriptionExchange,
} from "urql";
import { devtoolsExchange } from "@urql/devtools";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router } from "react-router-dom";
// import { authExchange } from "@urql/exchange-auth";

const client = createClient({
  url: "http://localhost:4000/graphql",

  // exchanges: [authExchange({
  //   const getAuth = async ({ authState }) => {
  //     if (!authState) {
  //       const token = localStorage.getItem('token');
  //       const refreshToken = localStorage.getItem('refreshToken');
  //       if (token && refreshToken) {
  //         return { token, refreshToken };
  //       }
  //       return null;
  //     }

  //     return null;
  //   }
  // })],
  fetchOptions: () => {
    let token = localStorage.getItem("token");
    // JSON.parse(localStorage.getItem("simplayToken")).token;
    // const token = JSON.parse(localStorage.getItem("simplayToken")).token;
    console.log(token.token);
    return {
      headers: {
        authorization: token ? `Bearer ${token.token}` : "",
      },
    };
  },
  exchanges: [devtoolsExchange, dedupExchange, fetchExchange],
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
