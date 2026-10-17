import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import ThemeSelector from "./ThemeSelector";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { currentTheme, darkMode, toggleDarkMode } = useTheme();
  const [activesection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navitems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Achievements", link: "#achievements" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navitems.map((item) =>
        document.querySelector(item.link)
      );
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const sectionId = section.getAttribute("id");

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (itemName) => {
    setActiveSection(itemName.toLowerCase());
    setIsMenuOpen(false);
  };

  return (
    <div className="top-6 left-0 right-0 flex justify-center fixed z-50">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`flex items-center justify-between ${
          darkMode
            ? "bg-black/60 border border-gray-800"
            : "bg-white/80 border border-gray-200/80"
        } backdrop-blur-2xl rounded-2xl px-4 lg:px-8 py-3.5 w-[92%] max-w-7xl shadow-2xl`}
      >
        {/* Logo */}
        <motion.a
          href="/"
          whileHover={{ scale: 1.05 }}
          className="flex items-center space-x-2"
        >
          <span
            className={`text-xl font-bold ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            <span style={{ color: currentTheme.primary }}>&lt;/&gt; MD </span>
            SHAHID
          </span>
        </motion.a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-7">
          {navitems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={() => handleNavClick(item.name)}
              className="relative py-1"
            >
              <motion.span
                className={`font-medium transition-colors duration-300 ${
                  activesection === item.name.toLowerCase()
                    ? "font-semibold"
                    : darkMode
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                style={{
                  color:
                    activesection === item.name.toLowerCase()
                      ? currentTheme.primary
                      : undefined,
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.span>

              {activesection === item.name.toLowerCase() && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-6 h-[3px] rounded-full"
                  style={{ backgroundColor: currentTheme.primary }}
                />
              )}
            </a>
          ))}
        </div>

        {/* Controls Right Section */}
        <div className="flex items-center space-x-3">
          {/* Theme Palette Dropdown */}
          <ThemeSelector />

          {/* Dark / Light Mode Toggle */}
          <motion.button
            whileHover={{ scale: 1.08, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleDarkMode}
            className={`p-2.5 rounded-full border-2 transition-all duration-300 cursor-pointer ${
              darkMode
                ? "bg-gray-800/80 border-gray-700 text-yellow-300 hover:border-gray-500"
                : "bg-white border-gray-300 text-gray-800 hover:border-gray-400 shadow-md"
            }`}
            aria-label="switch theme mode"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-gray-800" />
            )}
          </motion.button>

          {/* Hire Me Desktop Button */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`hidden lg:block px-6 py-2 font-semibold rounded-full bg-gradient-to-r ${currentTheme.gradientButton} text-white shadow-md hover:shadow-lg transition-all cursor-pointer`}
          >
            Hire Me
          </motion.a>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-xl border transition-all cursor-pointer ${
                darkMode
                  ? "bg-gray-800 border-gray-700 text-white"
                  : "bg-white border-gray-300 text-gray-900 shadow-xs"
              }`}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`absolute top-full left-0 right-0 mt-3 lg:hidden ${
              darkMode
                ? "bg-gray-900/95 border-gray-700"
                : "bg-white/95 border-gray-200"
            } backdrop-blur-xl rounded-2xl shadow-xl border overflow-hidden`}
          >
            <div className="px-4 py-3 space-y-2">
              {navitems.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  onClick={() => handleNavClick(item.name)}
                  className="block"
                >
                  <div
                    className={`py-2.5 px-4 rounded-xl text-center transition-colors ${
                      activesection === item.name.toLowerCase()
                        ? darkMode
                          ? "bg-gray-800"
                          : "bg-gray-100"
                        : ""
                    }`}
                  >
                    <span
                      className="font-medium"
                      style={{
                        color:
                          activesection === item.name.toLowerCase()
                            ? currentTheme.primary
                            : darkMode
                            ? "#9ca3af"
                            : "#4b5563",
                      }}
                    >
                      {item.name}
                    </span>
                  </div>
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className={`block py-3 px-4 text-center font-semibold rounded-xl bg-gradient-to-r ${currentTheme.gradientButton} text-white shadow-md`}
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </div>
  );
};

export default Navbar;