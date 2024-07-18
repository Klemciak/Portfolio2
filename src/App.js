import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Menu from "./Pages/Menu/Menu";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";
function App() {
  return (
    <div className="app-container">
      <div className="frame">
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
