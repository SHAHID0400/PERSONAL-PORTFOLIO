import React, { useState, useRef, useEffect } from "react";
import { Palette, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme, themeConfigs } from "../context/ThemeContext";

const ThemeSelector = () => {
  const { theme, setTheme, darkMode, currentTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select Palette"
        className={`p-2.5 rounded-xl border transition-all duration-300 cursor-pointer flex items-center justify-center ${
          darkMode
            ? "border-gray-800 text-gray-300 hover:text-white"
            : "border-gray-200 text-gray-700 hover:text-gray-950 shadow-sm"
        }`}
        style={{
          backgroundColor: darkMode ? currentTheme.surfaceDark : "#ffffff",
        }}
      >
        <Palette className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: currentTheme.primary }} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 8 }}
            transition={{ duration: 0.18 }}
            className={`absolute right-0 mt-3 w-60 p-2.5 rounded-2xl border backdrop-blur-2xl shadow-2xl z-50 ${
              darkMode ? "border-gray-800 text-white" : "border-gray-200 text-gray-900 shadow-xl"
            }`}
            style={{
              backgroundColor: darkMode ? `${currentTheme.bgDark}F0` : "#ffffffF0",
            }}
          >
            <div className="px-3 py-2 border-b border-gray-200 dark:border-gray-800/80 mb-1.5 flex items-center justify-between">
              <p className="text-[10px] font-bold tracking-wider uppercase opacity-60">
                Pick Aesthetic Palette
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              {Object.values(themeConfigs).map((thm) => {
                const isSelected = theme === thm.id;
                return (
                  <button
                    key={thm.id}
                    onClick={() => {
                      setTheme(thm.id);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                      isSelected
                        ? darkMode
                          ? "bg-white/10 text-white font-semibold"
                          : "bg-black/5 text-gray-950 font-semibold"
                        : darkMode
                        ? "hover:bg-white/5 text-gray-400 hover:text-gray-200"
                        : "hover:bg-black/5 text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="w-4 h-4 rounded-full shadow-xs ring-2"
                        style={{
                          backgroundColor: thm.primary,
                          borderColor: thm.accent,
                          boxShadow: isSelected ? `0 0 10px ${thm.primary}` : "none",
                        }}
                      />
                      <div className="flex flex-col text-left">
                        <span className="text-xs font-bold leading-tight">{thm.name}</span>
                        <span className="text-[10px] opacity-60 mt-0.5">{thm.tagline}</span>
                      </div>
                    </div>
                    {isSelected && (
                      <Check className="w-4 h-4 flex-shrink-0" style={{ color: thm.primary }} />
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeSelector;