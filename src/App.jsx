import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Achievements from "./components/Achievements";
import ParticlesBackground from "./components/ParticlesBackground";
import Aos from "aos";
import { motion, useScroll } from "framer-motion";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      offset: 50,
      disable: "mobile",
    });
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    Aos.refresh();
  }, [darkMode]);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div
      className={`w-full overflow-x-hidden relative min-h-screen ${
        darkMode ? "bg-black text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <ParticlesBackground darkMode={darkMode} />

      {/* Top Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 z-[100] origin-left bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-500 shadow-[0_0_10px_rgba(20,184,166,0.6)]"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="relative z-10 bg-transparent">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Achievements darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Contact darkMode={darkMode} />
        <Footer darkMode={darkMode} />
      </div>
    </div>
  );
};

export default App;