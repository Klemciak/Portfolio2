import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.scss";
import Nick from "./Nick/Nick";

const Menu = () => {
  return (
    <div className="menu-wrap">
      <Nick />
      <div className="menu">
        <ul className="menu-list">
          <li>
            <NavLink to="/about">o mnie</NavLink>
          </li>
          <li>
            <NavLink to="/projects">projekty</NavLink>
          </li>
          <li>
            <NavLink to="/contact">kontakt</NavLink>
          </li>
        </ul>
      </div>
      <div className="img-container">
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
      <div className="citation">
        <p>
          "Lepiej bez celu iść naprzód niż bez celu stać w miejscu, a z
          pewnością o niebo lepiej, niż bez celu się cofać." - Andrzej Sapkowski
        </p>
      </div>
    </div>
  );
};

export default Menu;
