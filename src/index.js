import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Weather from "./Weather";

import "./Weather.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <Weather />   
      <footer>
        Coded by Jacinta
        <a
          href="https://github.com/Jacintat30/prodject-weather/tree/master/src"
          target="-blank"
        ></a>
        </footer>      
    </div>
  </StrictMode>
);
