import React from "react";
import Typewriter from "typewriter-effect";
import instagram from "../assets/insta.jpg";
import linkden from "../assets/linkden.png";
import facebook from "../assets/facebook.jpg";
import github from "../assets/github.png";
import CV from "../assets/CV.pdf";
import hero from "../assets/hero1.png";
import { DownloadIcon, Mail } from "lucide-react";
import SplineCube from "./SplineCube";
import { useTheme } from "../context/ThemeContext";

const Hero = () => {
  const { currentTheme, darkMode } = useTheme();

  const socialIcons = [
    {
      icon: instagram,
      alt: "Instagram",
      link: "https://www.instagram.com/mdshahid0400?srtk=MTIwM3VoMTV2dDh2ag==",
    },
    {
      icon: linkden,
      alt: "LinkedIn",
      link: "https://www.linkedin.com/in/md-shahid-7a823541b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
    {
      icon: github,
      alt: "GitHub",
      link: "https://github.com/SHAHID0400",
    },
    {
      icon: facebook,
      alt: "Facebook",
      link: "#",
    },
  ];

  return (
    <div className="relative overflow-hidden min-h-screen flex flex-col transition-colors duration-300 bg-transparent">
      <section
        id="home"
        data-aos-delay="250"
        className="body-font z-10 pt-28 sm:pt-24 lg:pt-28"
      >
        <div className="container mx-auto max-w-7xl flex px-6 sm:px-10 lg:px-12 py-4 sm:py-8 lg:py-12 flex-col lg:flex-row items-center justify-between">
          {/* LEFT SECTION */}
          <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left mb-8 lg:mb-0">
            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start gap-4 mb-3 w-full">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
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
              className={`title-font text-3xl sm:text-4xl lg:text-5xl mb-3 font-bold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Hi, I'm{" "}
              <span
                className={`text-transparent bg-clip-text bg-gradient-to-r ${currentTheme.gradientText}`}
              >
                MD SHAHID
              </span>
            </h1>

            {/* Typewriter Box */}
            <div
              className="w-full max-w-xs sm:max-w-md mb-2 flex justify-center lg:justify-start"
              data-aos="fade-up"
              data-aos-delay="550"
            >
              <div
                className={`relative inline-flex items-center px-4 py-2 rounded-xl border overflow-hidden w-full sm:w-auto backdrop-blur-md ${
                  darkMode
                    ? "bg-gray-900/70 border-gray-800 text-white"
                    : "bg-white/90 border-gray-200 text-gray-800 shadow-md"
                }`}
              >
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${currentTheme.gradientButton} rounded-l-xl`}
                />

                <span
                  className="font-bold text-lg sm:text-xl mr-2 pl-2"
                  style={{ color: currentTheme.primary }}
                >
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
            <div
              className="w-full my-2 flex justify-center lg:justify-start lg:pl-20"
              data-aos="zoom-in"
              data-aos-delay="580"
            >
              <SplineCube darkMode={darkMode} />
            </div>

            {/* Description */}
            <p
              className={`mb-5 sm:mb-6 leading-relaxed max-w-md sm:max-w-lg mt-2 text-sm sm:text-base ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
              data-aos="fade-up"
              data-aos-delay="600"
            >
              I'm a passionate Full Stack Developer who loves turning ideas into
              powerful digital products. I specialize in the MERN Stack,
              creating fast, responsive, and scalable web applications with clean
              code and intuitive user interfaces.
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
                    className={`w-full sm:w-auto inline-flex items-center justify-center text-white bg-gradient-to-r ${currentTheme.gradientButton} border-0 py-2.5 px-6 sm:px-7 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 transform hover:scale-105 shadow-md cursor-pointer`}
                  >
                    <DownloadIcon className="w-4 h-4 mr-2" />
                    Download CV
                  </button>
                </a>
                <a href="#contact" className="w-full sm:w-auto">
                  <button
                    style={{ borderColor: currentTheme.primary }}
                    className={`w-full sm:w-auto inline-flex items-center justify-center border-2 py-2.5 px-6 sm:px-7 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer ${
                      darkMode
                        ? "text-white hover:bg-white/10"
                        : "text-gray-800 hover:bg-gray-100"
                    }`}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Me
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div
            className="lg:w-1/2 w-full max-w-md lg:max-w-lg mt-6 lg:mt-0 flex justify-center"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div className="relative w-full flex justify-center items-center">
              <div
                className="absolute inset-0 rounded-3xl blur-2xl opacity-50 animate-pulse transition-all duration-700"
                style={{
                  background: `radial-gradient(circle, ${currentTheme.primary} 0%, transparent 70%)`,
                }}
              />

              <div
                className={`relative w-full overflow-hidden rounded-3xl p-1 transition-all duration-500 hover:scale-[1.02] ${
                  darkMode
                    ? "bg-gradient-to-b from-gray-800/80 via-gray-900/60 to-gray-800/80 shadow-2xl"
                    : "bg-gradient-to-b from-white via-gray-100 to-white shadow-xl"
                }`}
              >
                <img
                  src={hero}
                  alt="MD SHAHID"
                  className="w-full h-auto object-cover rounded-[22px] transform transition-transform duration-700 ease-in-out hover:scale-105 hover:-rotate-1"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;