import React from "react";
import ReactDOM from "react-dom/client";
import "./output.css"; // Import Tailwind styles
import App from "./App"; // Import the main component

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);