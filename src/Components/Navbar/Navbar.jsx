import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Hamburger from "./Hamburger/Hamburger";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const checkboxRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

    if (checkboxRef.current) {
      checkboxRef.current.checked = !isMenuOpen;
    }
  };

  return (
    <div className="navbar">
      <div className="navbar-back">
        <Link to="/">←</Link>
      </div>
      <div className="navbar-hamburger">
        <label htmlFor="check">
          <input
            type="checkbox"
            id="check"
            ref={checkboxRef}
            onClick={toggleMenu}
          />
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
