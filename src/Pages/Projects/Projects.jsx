import React from "react";
import "./Project.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faSistrix } from "@fortawesome/free-brands-svg-icons";
import Navbar from "../../Components/Navbar/Navbar";
import { motion } from "framer-motion";
import {
  animationProjects,
  animationProps,
} from "../../Components/Animations/Animations.jsx";
const Projects = () => {
  return (
    <motion.div className="contact-wrap" {...animationProps(animationProjects)}>
      <Navbar />
      <div className="projects-wrap">
        <div className="project">
          <h2 className="project-title">ProNote</h2>
          <div className="project-links">
            <a className="link-code" href="https://github.com/Klemciak/ProNote">
              Kod <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              className="link-site"
              href="https://pronote-klemciak.netlify.app/"
            >
              Zobacz stronę <FontAwesomeIcon icon={faSistrix} />
            </a>
          </div>
        </div>
        <div className="project">
          <h2 className="project-title">aurum-motivatio</h2>
          <div className="project-links">
            <a
              className="link-code"
              href="https://github.com/Klemciak/aurumMotivatio"
            >
              Kod <FontAwesomeIcon icon={faGithub} />
            </a>
            <a className="link-site" href="https://aurum-motivatio.vercel.app/">
              Zobacz stronę <FontAwesomeIcon icon={faSistrix} />
            </a>
          </div>
        </div>
        <div className="project">
          <h2 className="project-title">o niczym</h2>
          <div className="project-links">
            <a
              className="link-code"
              href="https://github.com/Klemciak/o-niczym"
            >
              Kod <FontAwesomeIcon icon={faGithub} />
            </a>
            <a className="link-site" href="https://o-niczym.vercel.app/">
              Zobacz stronę <FontAwesomeIcon icon={faSistrix} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
