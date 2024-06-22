import React from "react";
import "./style.css";
import Game from "/src/components/Game";

const App = () => {
  return (
    <div className="App">
      <Game rows={20} columns={10} />
    </div>
  );
};

export default App;
