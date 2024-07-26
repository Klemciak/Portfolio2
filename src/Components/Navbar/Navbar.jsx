import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.scss";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="navbar">
      <div className="navbar-back">
        <Link to="/">←</Link>
      </div>
      <div className="navbar-hamburger">
        <label htmlFor="check">
          <input type="checkbox" id="check" onClick={toggleMenu} />
          <span></span>
          <span></span>
          <span></span>
        </label>
        <div className={`hamburger-nav ${isMenuOpen ? "open" : ""}`}>
          <ul className="nav">
            <li>
              <NavLink to="/">menu</NavLink>
            </li>
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
      </div>
    </div>
  );
};

export default Navbar;
