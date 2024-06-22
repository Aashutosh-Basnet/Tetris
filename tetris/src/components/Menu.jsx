import React from "react";
import "./Menu.css";

const Menu = (onClick) => {
  return (
    <div className="Menu">
      <button className="Button" onClick={onClick}>
        Start Game
      </button>
    </div>
  );
};

export default Menu;
