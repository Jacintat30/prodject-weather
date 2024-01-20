import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Houston" />

        <footer>
          This project was coded by{" "}
            Jacinta T
            <a
          href="https://github.com/Jacintat30/prodject-weather/tree/master/src"
          target="-blank"
        ></a>
           < open-sourced on GitHub></open-sourced>
          and{" "}
         <a>
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}