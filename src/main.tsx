import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./Root.tsx";
import MainLayout from "./components/MainLayout.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <MainLayout children={<App />} />
    </BrowserRouter>
  </StrictMode>
);
