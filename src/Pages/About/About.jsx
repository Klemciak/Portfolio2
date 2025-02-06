import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../Components/Navbar/Navbar";
import Slide1 from "./Slides/Slide1.jsx";
import Slide2 from "./Slides/Slide2.jsx";
import Slide3 from "./Slides/Slide3.jsx";
import "./About.scss";
import aboutGuy from "../../Images/aboutGuy.png";
import aboutGuyShadow from "../../Images/aboutGuyShadow.png";
import {
  animationTextAbout,
  animationImgAbout,
  animationProps,
  textAnimationVariants,
} from "../../Components/Animations/Animations.jsx";

const About = () => {
  const slides = [<Slide1 />, <Slide2 />, <Slide3 />];
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    setSlideIndex((index) => (index === slides.length - 1 ? 0 : index + 1));
  };

  const prevSlide = () => {
    setSlideIndex((index) => (index === 0 ? slides.length - 1 : index - 1));
  };

  return (
    <motion.div className="about-wrap" {...animationProps(animationTextAbout)}>
      <Navbar />
      <div className="about">
        <div className="about-img">
          <motion.img
            src={aboutGuy}
            alt=""
            {...animationProps(animationImgAbout)}
          />
          <motion.img
            src={aboutGuyShadow}
            alt=""
            {...animationProps(animationImgAbout)}
          />
        </div>
        <div className="about-text">
          <div className="text">
            <h2>o mnie</h2>
            <motion.div
              key={slideIndex}
              {...animationProps(textAnimationVariants)}
            >
              {slides[slideIndex]}
            </motion.div>
          </div>
          <div className="about-buttons">
            <button onClick={prevSlide}>&lt;</button>
            <button onClick={nextSlide}>&gt;</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
