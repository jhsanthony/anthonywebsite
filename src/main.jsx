import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ColorSchemeProvider } from "./contexts/ColorSchemeContext";
import App from "./App";
import "./index.css";
import Snowflake from "./components/Snowflake";

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <ColorSchemeProvider>
      <App />
    </ColorSchemeProvider>
  </StrictMode>
);
