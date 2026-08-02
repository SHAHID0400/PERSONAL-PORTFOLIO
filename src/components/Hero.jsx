import React from "react";
import Typewriter from "typewriter-effect";
import instagram from "../assets/insta.jpg";
import linkden from "../assets/linkden.png";
import facebook from "../assets/facebook.jpg";
import github from "../assets/github.png";
import CV from "../assets/CV.pdf";
import hero from "../assets/hero.png";
import { DownloadIcon, Mail } from "lucide-react";
import SplineCube from "./SplineCube";

const Hero = ({ darkMode }) => {
  const socialIcons = [
    { icon: instagram, alt: "Instagram" },
    { icon: linkden, alt: "Linkden" },
    { icon: facebook, alt: "Facebook" },
    { icon: github, alt: "GitHub" },
  ];

  const darkTheme = {
    textPrimary: "text-white",
    textSecondary: "text-gray-300",
    buttonSecondary:
      "text-white border-2 border-emerald-500 hover:bg-emerald-600/20 hover:border-emerald-400",
    decorativeCircle: "bg-teal-500 opacity-10",
    typewriterBox:
      "bg-gray-900/70 border-emerald-500/30 text-teal-300 shadow-[0_0_20px_rgba(20,184,166,0.15)] backdrop-blur-md",
  };

  const lightTheme = {
    textPrimary: "text-gray-900",
    textSecondary: "text-gray-600",
    buttonSecondary:
      "text-gray-800 border-2 border-emerald-500 hover:bg-emerald-500 hover:text-white shadow-xs",
    decorativeCircle: "bg-teal-400 opacity-15",
    typewriterBox:
      "bg-white/90 border-emerald-500/30 text-emerald-700 shadow-[0_10px_25px_rgba(0,0,0,0.05)] backdrop-blur-md",
  };

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <div
      className={`relative overflow-hidden min-h-screen flex flex-col transition-colors duration-300 ${
        darkMode
          ? "bg-black"
          : "bg-gradient-to-b from-emerald-50/30 via-white to-gray-50"
      }`}
    >
      <section id="home" data-aos-delay="250" className="body-font z-10 pt-16 sm:pt-20 lg:pt-24">
        
        <div className="container mx-auto max-w-7xl flex px-6 sm:px-10 lg:px-12 py-6 sm:py-8 lg:py-12 flex-col lg:flex-row items-center justify-between">
          
          {/* LEFT SECTION */}
          <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left mb-8 lg:mb-0">

            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start gap-4 mb-3 w-full">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href="#"
                  target="_blank"
                  data-aos-delay={`${400 + index * 100}`}
                  className="transform hover:scale-110 transition-transform duration-300 mt-1"
                >
                  <img
                    src={social.icon}
                    alt={social.alt}
                    className={`w-8 h-8 rounded-2xl sm:w-9 sm:h-9 object-contain ${
                      darkMode ? "" : "filter brightness-95 contrast-110"
                    }`}
                  />
                </a>
              ))}
            </div>

            {/* Main Title */}
            <h1
              className={`title-font text-3xl sm:text-4xl lg:text-5xl mb-3 font-bold ${theme.textPrimary}`}
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-500">
                MD SHAHID
              </span>
            </h1>

            {/* DYNAMIC THEMED TYPEWRITER BOX */}
            <div
              className="w-full max-w-xs sm:max-w-md mb-2 flex justify-center lg:justify-start"
              data-aos="fade-up"
              data-aos-delay="550"
            >
              <div
                className={`relative inline-flex items-center px-4 py-2 rounded-xl border overflow-hidden w-full sm:w-auto ${theme.typewriterBox}`}
              >
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-emerald-400 to-amber-400 rounded-l-xl" />

                <span className="text-emerald-500 font-bold text-lg sm:text-xl mr-2 pl-2">
                  &gt;
                </span>

                <div className="text-base sm:text-lg font-bold">
                  <Typewriter
                    options={{
                      strings: [
                        "Full Stack Developer",
                        "MERN Expert",
                        "Next.js Developer",
                        "UI/UX Enthusiast",
                        "Open Source Contributor",
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 40,
                      delay: 70,
                    }}
                  />
                </div>
              </div>
            </div>

            {/* 3D Cube Section */}
            <div className="w-full my-2 flex justify-center lg:justify-start lg:pl-20" data-aos="zoom-in" data-aos-delay="580">
              <SplineCube darkMode={darkMode} />
            </div>

            {/* Description */}
            <p
              className={`mb-5 sm:mb-6 leading-relaxed max-w-md sm:max-w-lg mt-2 text-sm sm:text-base ${theme.textSecondary}`}
              data-aos="fade-up"
              data-aos-delay="600"
            >
              I'm a passionate Full Stack Developer who loves turning ideas into
              powerful digital products. I specialize in the MERN Stack,
              creating fast, responsive, and scalable web applications with
              clean code, intuitive user interfaces, and a strong focus on
              performance, usability, and continuous innovation.
            </p>

            {/* Buttons */}
            <div className="w-full">
              <div
                className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <a href={CV} download className="w-full sm:w-auto">
                  <button
                    className="w-full sm:w-auto inline-flex items-center justify-center text-white bg-gradient-to-r
                    from-amber-400 via-amber-500 to-amber-600 border-0 py-2.5 px-6 sm:px-7 hover:shadow-[0_0_25px_rgba(245,158,11,0.5)]
                    rounded-full text-sm sm:text-base font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer"
                  >
                    <DownloadIcon className="w-4 h-4 mr-2" />
                    Download CV
                  </button>
                </a>
                <a href="#contact" className="w-full sm:w-auto">
                  <button
                    className={`w-full sm:w-auto inline-flex items-center ${theme.buttonSecondary} justify-center
                    py-2.5 px-6 sm:px-7 hover:shadow-[0_0_25px_rgba(16,185,129,0.3)]
                    rounded-full text-sm sm:text-base font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer`}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Me
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* 🟢 RIGHT SECTION / HERO IMAGE (FIXED LIGHT THEME BLENDING) */}
          <div
            className="lg:w-1/2 w-full max-w-md lg:max-w-lg mt-6 lg:mt-0 flex justify-center"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div className="relative w-full">
              
              {/* Glassmorphic Container Card Frame */}
              <div
                className={`relative overflow-hidden rounded-3xl p-2 sm:p-3 transition-all duration-300 border ${
                  darkMode
                    ? "bg-gray-950/80 border-emerald-500/30 shadow-[0_0_35px_rgba(16,185,129,0.15)]"
                    : "bg-slate-900/95 border-emerald-500/40 shadow-[0_20px_40px_rgba(0,0,0,0.15)] ring-4 ring-emerald-500/10"
                }`}
              >
                <img
                  src={hero}
                  alt="MD SHAHID"
                  className="w-full h-auto object-cover rounded-2xl transform hover:scale-[1.02] transition-transform duration-500"
                />
              </div>

            </div>
          </div>

          <div
            className={`absolute -top-20 -left-20 w-40 h-40 sm:w-64 sm:h-64 ${theme.decorativeCircle} rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000 hidden sm:block`}
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;