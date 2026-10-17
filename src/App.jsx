import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticlesBackground from "./components/ParticlesBackground";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import Aos from "aos";
import "aos/dist/aos.css";
import { motion, useScroll } from "framer-motion";

const PortfolioContent = () => {
  const { currentTheme, darkMode } = useTheme();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      offset: 50,
      disable: "mobile",
    });
  }, []);

  useEffect(() => {
    Aos.refresh();
  }, [darkMode, currentTheme]);

  return (
    <div
      className="w-full overflow-x-hidden relative min-h-screen transition-colors duration-500"
      style={{
        backgroundColor: darkMode ? currentTheme.bgDark : currentTheme.bgLight,
        color: darkMode ? "#FFFFFF" : "#111827",
      }}
    >
      {/* Dynamic Animated Particles Background */}
      <ParticlesBackground />

      {/* Top Dynamic Scroll Indicator */}
      <motion.div
        className={`fixed top-0 left-0 right-0 h-1 z-[100] origin-left bg-gradient-to-r ${currentTheme.gradientButton}`}
        style={{
          scaleX: scrollYProgress,
          boxShadow: `0 0 10px ${currentTheme.primary}`,
        }}
      />

      {/* Main Website Sections */}
      <main className="relative z-10 bg-transparent">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Achievements />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
};

export default App;