import React from "react";
import Menu from "/src/components/Menu";

const start = () => {
  console.log("Start");
};

const Game = ({ rows, columns }) => {
  return (
    <div className="Game">
      <Menu onclick={start} />
      rows {rows}, columns {columns}
    </div>
  );
};
export default Game;
