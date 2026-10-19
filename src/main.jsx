// Import React and the application mounting API.
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Import global Tailwind and site styles.
import "./index.css";

// Import the main application component.
import App from "./App.jsx";

// Mount the application into the HTML root element.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);