import React from "react";
import "./App.css";
import Game from "/src/components/Game.jsx";

function App() {
  return (
    <div className="Apps">
      <Game rows={20} columns={10} />
    </div>
  );
}

export default App;
