import React from "react";
import cerebro from "./assets/cerebro.jpeg";
import "./App.css";

function App() {
  return (
    <div className="app-background-container">
     { <img
        src={cerebro}
        alt="foto cerebro fondo"
        className="app-background-image"
      />}
    </div>
  );
}

export default App;
