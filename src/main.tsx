import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Diagnostic logging - rebuild trigger v1
console.log("[main.tsx] Script loaded");

const rootElement = document.getElementById("root");
console.log("[main.tsx] Root element:", rootElement);

if (rootElement) {
  console.log("[main.tsx] Creating React root...");
  const root = createRoot(rootElement);
  console.log("[main.tsx] Rendering App...");
  root.render(<App />);
  console.log("[main.tsx] App rendered successfully");
} else {
  console.error("[main.tsx] ERROR: Root element not found!");
}
