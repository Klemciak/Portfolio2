import React from "react";
import "./Contact.scss";
import postbox from "../../Images/postbox.png";
import facebook from "../../Images/facebook.png";
import Navbar from "../../Components/Navbar/Navbar";
import { motion } from "framer-motion";
import {
  animationTextContact,
  animationProps,
} from "../../Components/Animations/Animations.jsx";

const Contact = () => {
  return (
    <motion.div
      className="contact-wrap"
      {...animationProps(animationTextContact)}
    >
      <Navbar />
      <h2 className="contact-title">kontakt</h2>
      <div className="contacts">
        <div className="facebook">
          <a href="https://www.facebook.com/K24C01">facebook.com/K24C01</a>
          <img src={facebook} alt="neon facebook F" />
        </div>
        <div className="email">
          <a href="mailto:klemcio@interia.pl">klemcio@interia.pl</a>
          <img src={postbox} alt="neon postbox" />
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
