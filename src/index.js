import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { ApolloProvider } from "@apollo/client";
import client from './api/Auth';
import ErrorBoundary from './UtilityFunctions/ErrorBoundary';

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);