import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { AuthProvider } from "src/context/AuthContext";
import { ThemeProvider } from "@/app/providers/ThemeProvider";
import { QueryProvider } from "@/app/providers/QueryProvider";
import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <QueryProvider>
          <App />
        </QueryProvider>
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);