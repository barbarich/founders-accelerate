import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import { initAttribution } from "./lib/attribution";
import { initWebVitals } from "./lib/webVitals";
import "./index.css";

initAttribution();
initWebVitals();

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>,
);
