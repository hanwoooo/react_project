import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// 여긴 단지 실행을 위한 js
import App from "./App";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
