import React from "react";
import { NavLink } from "react-router-dom";
import "./Hamburger.scss";
const Hamburger = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div className={`hamburger-nav ${isMenuOpen ? "open" : ""}`}>
      <ul className="nav">
        <li>
          <NavLink to="/" onClick={toggleMenu}>
            menu
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={toggleMenu}>
            o mnie
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" onClick={toggleMenu}>
            projekty
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={toggleMenu}>
            kontakt
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Hamburger;
