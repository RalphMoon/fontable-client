import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "jotai";
import { QueryClientProvider } from "@tanstack/react-query";
import { Global, ThemeProvider } from "@emotion/react";

import { store } from "./lib/jotai";
import { queryClient } from "./lib/query";
import { global, theme } from "./lib/emotion";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <Global styles={global} />
            <App />
          </ThemeProvider>
        </QueryClientProvider>
      </Provider>
    </Router>
  </React.StrictMode>
);
