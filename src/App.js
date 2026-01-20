import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import Home from "./home";
import About from "./about";
import Skill from "./skill";
import Service from "./service";
import Experience from "./exprience";
import Project from "./project";
import Contact from "./contact";
import ScrollToTopButton from './scrollTotopbutton';
import Footer from "./footer";


import "./App.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showCVOptions, setShowCVOptions] = useState(false); 

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <main className="bg-gray-100 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      {}
      <Navbar
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        setShowCVOptions={setShowCVOptions}
      />

      <Home />
      <About />
      <Skill />
      <Service />

      {}
      <Experience
        showCVOptions={showCVOptions}
        setShowCVOptions={setShowCVOptions}
      />

      <Project />
      <Contact />
      <ScrollToTopButton />
      <Footer />
    </main>
  );
}

export default App;
