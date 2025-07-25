import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./i18n.js";
import { Toaster } from "sonner";
createRoot(document.getElementById("root")).render(
  <>
    <App />
    <Toaster position="top-right" richColors />
  </>
);
