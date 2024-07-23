import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.scss";
import Nick from "./Nick/Nick";
import menuGuy from "../../Images/menuGuy.png";
import menuGuyShadow from "../../Images/menuGuyShadow.png";

const Menu = () => {
  return (
    <div className="menu-wrap">
      <Nick />
      <div className="menu">
        <ul className="menu-list">
          <li>
            <NavLink to="/about" className="menu-link">
              o mnie
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className="menu-link">
              projekty
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="menu-link">
              kontakt
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="img-container">
        <img src={menuGuy} alt="guy dressed in neon colors" />
        <img src={menuGuyShadow} alt="shadow of a guy dressed in neon colors" />
      </div>
      <div className="citation">
        <p>
          "Lepiej bez celu iść naprzód niż bez celu stać w miejscu,
          <br /> a z pewnością o niebo lepiej, niż bez celu się cofać." -
          <strong> Andrzej Sapkowski</strong>
        </p>
      </div>
    </div>
  );
};

export default Menu;
