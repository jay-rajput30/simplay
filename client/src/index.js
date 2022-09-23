import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router } from "react-router-dom";
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { getToken } from "./auth";
const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
  credentials: 'same-origin'
});
// const authLink = setContext((_, { headers }) => {
//   const token = getToken();
//   console.log("inside index", { token });
//   return {
//     headers: {
//       ...headers,
//       Authorization: token ? `${token.token}`  : "",
//     },
//   };
// });

const client = new ApolloClient({
  link: httpLink,
  // uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router>
        <GlobalStyles />
        <App />
      </Router>
    </ApolloProvider>
  </React.StrictMode>
);
