import React, { useState, useEffect } from "react";
import FuturisticBackground from "./components/FuturisticBackground";
import Home from "./sections/Home";
import Navbar from "./components/NavBar";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import "./app.css";

const App = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1020);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1020);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="app-container">
      <div className="scrollBar"></div>
      <FuturisticBackground />
      {/* Show Navbar only on large screens */}
      {!isSmallScreen && <Navbar />}
      
      <div className="content">
        {/* Show Home only on small screens inside content */}
        {isSmallScreen && <Home />}
        <About />
        <Skills />
        <Projects />
        <Experience />
      </div>
    </div>
  );
};

export default App;
