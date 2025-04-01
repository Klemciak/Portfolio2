import React from "react";
import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Menu from "./Pages/Menu/Menu";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";
import Laser from "./Components/Laser/Laser.jsx";
import Preloader from "./Components/Preloader/Preloader.jsx";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div id="app-container" className="app-container">
      <Preloader />
      <Laser />
      <div className="frame">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
