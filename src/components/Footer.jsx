import React from "react";
import { FaGithub, FaHeart, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const { currentTheme, darkMode } = useTheme();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaGithub />,
      link: "https://github.com/SHAHID0400",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/md-shahid-7a823541b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      label: "LinkedIn",
    },
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/mdshahid0400?srtk=MTIwM3VoMTV2dDh2ag==",
      label: "Instagram",
    },
  ];

  return (
    <footer className="relative transition-colors duration-300 bg-transparent">
      <div
        className="w-full h-[2px] transition-all duration-500"
        style={{
          background: `linear-gradient(90deg, transparent, ${currentTheme.primary}, transparent)`,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 py-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left Side: Logo & Tagline */}
          <div className="text-center md:text-left">
            <h3
              className={`text-2xl font-bold tracking-tight mb-1 text-transparent bg-clip-text bg-gradient-to-r ${currentTheme.gradientText}`}
            >
              MD SHAHID
            </h3>
            <p
              className={`text-xs sm:text-sm font-medium ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Full Stack Developer & MERN Specialist
            </p>
          </div>

          {/* Middle: Social Icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className={`w-10 h-10 flex items-center justify-center rounded-full text-sm transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg ${
                  darkMode
                    ? "bg-gray-800/80 text-gray-300 hover:text-white"
                    : "bg-white border border-gray-200 text-gray-700 hover:text-black shadow-xs"
                }`}
              >
                {item.icon}
              </a>
            ))}
          </div>

          {/* Right Side: Copyright */}
          <div className="text-center md:text-right">
            <p
              className={`text-xs sm:text-sm flex items-center justify-center md:justify-end gap-1.5 font-medium ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <span>© {currentYear} Made with</span>
              <FaHeart className="text-red-500 animate-pulse text-xs" />
              <span>by</span>
              <span
                className={`font-semibold text-transparent bg-clip-text bg-gradient-to-r ${currentTheme.gradientText}`}
              >
                MD SHAHID
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;