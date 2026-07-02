import React from "react";
import ReactDOM from "react-dom/client";

import "@/index.css";

import { QueryProvider } from "./providers/QueryProvider";
import { ThemeProvider } from "./providers/ThemeProvider";
import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ThemeProvider>
            <QueryProvider>
                <App />
            </QueryProvider>
        </ThemeProvider>
    </React.StrictMode>
);