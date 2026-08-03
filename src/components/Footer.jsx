import React from "react";
import { FaGithub, FaHeart, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative transition-colors duration-300 bg-transparent">
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent dark:via-teal-400/60" />

      <div className="container mx-auto px-4 sm:px-6 py-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Left Side: Logo & Tagline */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold tracking-tight mb-1 text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-500">
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
            {[
              { icon: <FaGithub />, link: "#" },
              { icon: <FaLinkedin />, link: "#" },
              { icon: <FaTwitter />, link: "#" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 flex items-center justify-center rounded-full text-sm transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg ${
                  darkMode
                    ? "bg-gray-800/80 text-gray-300 hover:bg-gradient-to-r hover:from-amber-400 hover:to-amber-600 hover:text-white hover:shadow-amber-500/20"
                    : "bg-white border border-gray-200 text-emerald-700 hover:bg-gradient-to-r hover:from-amber-400 hover:to-amber-600 hover:text-white hover:border-transparent hover:shadow-amber-500/20 shadow-xs"
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
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">
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