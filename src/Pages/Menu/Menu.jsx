import React from "react";
import { Form, NavLink } from "react-router-dom";
import "./Menu.scss";
import Nick from "./Nick/Nick";
import menuGuy from "../../Images/menuGuy.png";
import menuGuyShadow from "../../Images/menuGuyShadow.png";
import { motion } from "framer-motion";
import {
  animationTextMenu,
  animationImgMenu,
  animationProps,
} from "../../Components/Animations/Animations.jsx";

const Menu = () => {
  return (
    <motion.div className="menu-wrap" {...animationProps(animationTextMenu)}>
      <div>
        <Nick />
      </div>
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
      <motion.div
        className="img-container"
        {...animationProps(animationImgMenu, 1)}
      >
        <img src={menuGuy} alt="guy dressed in neon colors" />
        <img src={menuGuyShadow} alt="shadow of a guy dressed in neon colors" />
      </motion.div>
      <div className="citation">
        <p>
          "Lepiej bez celu iść naprzód niż bez celu stać w miejscu,
          <br /> a z pewnością o niebo lepiej, niż bez celu się cofać." -
          <strong> Andrzej Sapkowski</strong>
        </p>
      </div>
    </motion.div>
  );
};

export default Menu;
