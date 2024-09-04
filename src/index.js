import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Get the root element from the DOM
const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  // If the root element has child nodes, it means that the HTML has been
  // pre-rendered on the server and we need to hydrate it
  ReactDOM.hydrateRoot(rootElement, <App />);
} else {
  // If the root element is empty, we render the application normally
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
