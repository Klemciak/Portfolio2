import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Hamburger from "./Hamburger/Hamburger";
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
        <Hamburger isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>
    </div>
  );
};

export default Navbar;
