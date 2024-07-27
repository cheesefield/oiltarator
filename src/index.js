import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import { reportWebVitals } from "./reportWebVitals";
import { inject } from "@vercel/analytics";

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, <App />);
} else {
  createRoot(rootElement).render(<App />);
}

// Initialize Vercel Analytics
inject();

// Report web vitals for speed insights
reportWebVitals(console.log);
