import React from "react";
import {
  FaGithub,
  FaHeart,
  FaLinkedin,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const { currentTheme, darkMode } = useTheme();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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

  const quickLinks = [
    { title: "Home", href: "#home" },
    { title: "About", href: "#about" },
    { title: "Projects", href: "#projects" },
    { title: "Skills", href: "#skills" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative overflow-hidden transition-colors duration-300 bg-transparent pt-12 pb-8">
      {/* 3D Keyframe CSS Animation for Watermark */}
      <style>{`
        @keyframes float3D {
          0%, 100% {
            transform: perspective(1000px) rotateX(0deg) rotateY(-8deg) translateY(0px);
          }
          50% {
            transform: perspective(1000px) rotateX(10deg) rotateY(8deg) translateY(-8px);
          }
        }
        @keyframes pulseGlow {
          0%, 100% {
            opacity: 0.2;
            transform: scale(0.95);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.15);
          }
        }
        .watermark-3d-box {
          animation: float3D 6s ease-in-out infinite;
          transform-style: preserve-3d;
          transition: transform 0.4s ease;
        }
        .watermark-3d-box:hover {
          animation-play-state: paused;
          transform: perspective(1000px) rotateX(16deg) rotateY(-16deg) scale(1.1);
        }
        .watermark-glow-pulse {
          animation: pulseGlow 4s ease-in-out infinite;
        }
      `}</style>

      {/* Dynamic Background Mesh Gradients */}
      <div
        className="absolute top-0 left-1/4 w-80 h-80 rounded-full blur-[120px] pointer-events-none opacity-20 -z-10"
        style={{ background: currentTheme.primary }}
      />
      <div
        className="absolute bottom-10 right-1/4 w-72 h-72 rounded-full blur-[100px] pointer-events-none opacity-15 -z-10"
        style={{ background: currentTheme.secondary || currentTheme.primary }}
      />

      {/* Top Animated Glowing Border */}
      <div className="relative w-full h-[2px] overflow-hidden">
        <div
          className="w-full h-full animate-pulse transition-all duration-700"
          style={{
            background: `linear-gradient(90deg, transparent, ${currentTheme.primary}, transparent)`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-8">
        {/* Main Grid: Mobile Column, Desktop 3-Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center md:items-start pb-8 border-b border-gray-500/10">
          
          {/* Section 1: Developer Info & Live Status */}
          <div className="text-center md:text-left space-y-3">
            <h3
              className={`text-2xl sm:text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r ${currentTheme.gradientText}`}
            >
              MD SHAHID
            </h3>
            <p
              className={`text-xs sm:text-sm font-medium leading-relaxed max-w-sm mx-auto md:mx-0 ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Full Stack Developer & MERN Specialist building responsive, modern
              web applications.
            </p>

            {/* Glowing Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 backdrop-blur-sm shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Available for new projects</span>
            </div>
          </div>

          {/* Section 2: Quick Links & Social Hub */}
          <div className="flex flex-col items-center justify-center space-y-4">
            <p
              className={`text-xs uppercase tracking-widest font-semibold ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Quick Navigation
            </p>

            <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-medium">
              {quickLinks.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className={`transition-colors duration-200 ${
                    darkMode
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-black"
                  }`}
                >
                  {item.title}
                </a>
              ))}
            </div>

            {/* Animated Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className={`group relative w-10 h-10 flex items-center justify-center rounded-xl text-base transition-all duration-300 transform active:scale-95 hover:scale-110 hover:-translate-y-1 ${
                    darkMode
                      ? "bg-gray-800/80 text-gray-300 hover:text-white border border-gray-700/60 hover:border-gray-500 shadow-md"
                      : "bg-white border border-gray-200 text-gray-700 hover:text-black shadow-sm"
                  }`}
                >
                  {item.icon}
                  {/* Tooltip for desktop */}
                  <span className="hidden md:block absolute -top-8 px-2 py-0.5 rounded text-[10px] bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md">
                    {item.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Section 3: Copyright & Back To Top */}
          <div className="flex flex-col items-center md:items-end justify-between space-y-4 text-center md:text-right">
            <div>
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
              <p
                className={`text-xs mt-1 ${
                  darkMode ? "text-gray-500" : "text-gray-400"
                }`}
              >
                All rights reserved.
              </p>
            </div>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 active:scale-95 border ${
                darkMode
                  ? "bg-gray-800/60 border-gray-700 text-gray-300 hover:bg-gray-700 hover:text-white"
                  : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-white hover:text-black shadow-xs"
              }`}
            >
              <span>Back to Top</span>
              <FaArrowUp className="text-[10px]" />
            </button>
          </div>
        </div>

        {/* 3D Animated Watermark: AAROH TECH */}
        <div className="mt-10 flex flex-col items-center justify-center select-none">
          <div className="watermark-3d-box relative cursor-pointer flex flex-col items-center py-2">
            {/* Ambient Watermark Glow */}
            <div
              className="watermark-glow-pulse absolute -inset-6 rounded-full blur-2xl pointer-events-none"
              style={{
                background: `radial-gradient(circle, ${currentTheme.primary}, transparent 70%)`,
              }}
            />

            {/* 3D Embossed Heading */}
            <h4
              className="relative text-2xl sm:text-4xl md:text-5xl font-black tracking-[0.22em] sm:tracking-[0.28em] uppercase text-center transition-all duration-300"
              style={{
                color: darkMode
                  ? "rgba(255, 255, 255, 0.14)"
                  : "rgba(0, 0, 0, 0.08)",
                textShadow: darkMode
                  ? `
                    0 1px 0 rgba(255,255,255,0.1),
                    0 2px 0 #18181b,
                    0 3px 0 #121215,
                    0 4px 0 #09090b,
                    0 5px 0 #000000,
                    0 8px 18px rgba(0,0,0,0.8),
                    0 0 25px ${currentTheme.primary}40
                  `
                  : `
                    0 1px 0 #ffffff,
                    0 2px 0 #e2e8f0,
                    0 3px 0 #cbd5e1,
                    0 4px 6px rgba(0,0,0,0.12),
                    0 0 20px ${currentTheme.primary}25
                  `,
              }}
            >
              AAROH TECH
            </h4>

            {/* Floating Tagline */}
            <p
              className={`text-[9px] sm:text-[10px] md:text-xs tracking-[0.35em] uppercase font-bold mt-1 transition-colors duration-300 ${
                darkMode ? "text-gray-500" : "text-gray-400"
              }`}
            >
              Crafted with Precision
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;