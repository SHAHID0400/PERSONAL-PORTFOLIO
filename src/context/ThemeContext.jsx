import React, { createContext, useContext, useState, useEffect } from "react";

export const themeConfigs = {
  violet: {
    id: "violet",
    name: "Obsidian Violet",
    tagline: "Futuristic & Bold",
    primary: "#8B5CF6",
    primaryRgb: "139, 92, 246",
    accent: "#C4B5FD",
    bgDark: "#080810",
    surfaceDark: "#151526",
    bgLight: "#F8FAFC",
    gradientText: "from-[#8B5CF6] via-[#A855F7] to-[#C4B5FD]",
    gradientButton: "from-[#8B5CF6] via-[#7C3AED] to-[#6D28D9]",
    borderGlow: "hover:border-[#8B5CF6]/50 hover:shadow-[0_0_25px_rgba(139,92,246,0.25)]",
    tagBg: "bg-[#8B5CF6]/10 border-[#8B5CF6]/30 text-[#8B5CF6] dark:text-[#C4B5FD]",
    dotBg: "bg-[#8B5CF6]",
  },
  gold: {
    id: "gold",
    name: "Champagne Gold",
    tagline: "Luxury & Elegance",
    primary: "#D6BD83",
    primaryRgb: "214, 189, 131",
    accent: "#F0DDAA",
    bgDark: "#101113",
    surfaceDark: "#1B1D20",
    bgLight: "#F5F5F5",
    gradientText: "from-[#D6BD83] via-[#E2CE9C] to-[#F0DDAA]",
    gradientButton: "from-[#D6BD83] via-[#C9AE6F] to-[#B89B54]",
    borderGlow: "hover:border-[#D6BD83]/50 hover:shadow-[0_0_25px_rgba(214,189,131,0.25)]",
    tagBg: "bg-[#D6BD83]/10 border-[#D6BD83]/30 text-[#B89B54] dark:text-[#F0DDAA]",
    dotBg: "bg-[#D6BD83]",
  },
  cyan: {
    id: "cyan",
    name: "Arctic Cyan",
    tagline: "Clean & Cyber Tech",
    primary: "#22D3EE",
    primaryRgb: "34, 211, 238",
    accent: "#60A5FA",
    bgDark: "#07111F",
    surfaceDark: "#102238",
    bgLight: "#F0F9FF",
    gradientText: "from-[#22D3EE] via-[#38BDF8] to-[#60A5FA]",
    gradientButton: "from-[#22D3EE] via-[#06B6D4] to-[#0284C7]",
    borderGlow: "hover:border-[#22D3EE]/50 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]",
    tagBg: "bg-[#22D3EE]/10 border-[#22D3EE]/30 text-[#0284C7] dark:text-[#22D3EE]",
    dotBg: "bg-[#22D3EE]",
  },
  lime: {
    id: "lime",
    name: "Acid Lime",
    tagline: "Energetic Matrix",
    primary: "#A3E635",
    primaryRgb: "163, 230, 53",
    accent: "#4ADE80",
    bgDark: "#07130F",
    surfaceDark: "#10251D",
    bgLight: "#F0FDF4",
    gradientText: "from-[#A3E635] via-[#84CC16] to-[#4ADE80]",
    gradientButton: "from-[#84CC16] via-[#65A30D] to-[#4ADE80]",
    borderGlow: "hover:border-[#A3E635]/50 hover:shadow-[0_0_25px_rgba(163,230,53,0.25)]",
    tagBg: "bg-[#A3E635]/15 border-[#A3E635]/30 text-[#4D7C0F] dark:text-[#A3E635]",
    dotBg: "bg-[#A3E635]",
  },
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("portfolio_theme") || "violet"
  );

  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("portfolio_dark_mode");
    return saved !== null ? JSON.parse(saved) : false; // Default Light
  });

  useEffect(() => {
    localStorage.setItem("portfolio_theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("portfolio_dark_mode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const currentTheme = themeConfigs[theme] || themeConfigs.violet;

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        currentTheme,
        darkMode,
        toggleDarkMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);