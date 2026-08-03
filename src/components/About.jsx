import React from "react";
import about from "../assets/about.png";

const About = ({ darkMode }) => {
  const skills = [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "JavaScript",
    "REST APIs",
  ];

  return (
    <section
      id="about"
      className={`lg:py-20 px-4 sm:px-6 relative transition-colors duration-300 bg-transparent ${
        darkMode ? "text-white" : "text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        
        {/* Left Section: Image with Glow */}
        <figure
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex justify-center relative order-2 lg:order-1"
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 flex items-center justify-center">
            <img
              src={about}
              alt="about image"
              className="relative z-10 w-full h-full object-contain transition-transform duration-500 hover:scale-105"
            />
            
            <div
              className={`absolute w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] rounded-full blur-3xl -z-0 opacity-40 animate-pulse ${
                darkMode
                  ? "bg-gradient-to-r from-teal-500/30 via-orange-500/20 to-amber-500/30"
                  : "bg-gradient-to-r from-emerald-300/40 via-amber-200/50 to-orange-300/40"
              }`}
            />
          </div>
        </figure>

        {/* Right Section: Content */}
        <article
          data-aos="fade-left"
          data-aos-delay="300"
          className="text-center lg:text-left relative order-1 lg:order-2"
        >
          {/* Title */}
          <header className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            <span
              className={`text-transparent bg-clip-text ${
                darkMode
                  ? "bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-400"
                  : "bg-gradient-to-r from-emerald-500 via-teal-600 to-amber-500"
              }`}
            >
              About Me
            </span>
          </header>

          {/* Floating Glass Card */}
          <div
            className={`rounded-2xl p-5 sm:p-6 mb-6 transition-all duration-300 ${
              darkMode
                ? "bg-gray-900/60 border border-gray-800 shadow-xl backdrop-blur-md"
                : "bg-white/80 border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.05)] backdrop-blur-md"
            }`}
          >
            {/* Terminal Top Bar */}
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200/50 dark:border-gray-800">
              <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
              <span
                className={`text-xs ml-2 font-mono ${
                  darkMode ? "text-gray-400" : "text-gray-400"
                }`}
              >
                aboutMe.json
              </span>
            </div>

            <p
              className={`text-sm sm:text-base leading-relaxed ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              I'm{" "}
              <span className="text-emerald-500 font-semibold dark:text-emerald-400">
                MD Shahid
              </span>
              , a passionate Full Stack Developer based in New Delhi, India. I
              specialize in the MERN Stack, creating fast, scalable, and
              responsive web applications with clean code and intuitive UI.
            </p>

            {/* Tech Skill Pills */}
            <div className="mt-5 pt-3 flex flex-wrap justify-center lg:justify-start gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className={`text-xs sm:text-sm font-medium px-3.5 py-1.5 rounded-full border transition-all duration-300 hover:scale-105 ${
                    darkMode
                      ? "border-teal-500/30 bg-teal-500/10 text-teal-300"
                      : "border-emerald-200 bg-emerald-50/80 text-emerald-700 shadow-xs"
                  }`}
                >
                  <span className="text-emerald-500 mr-1">✦</span>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div
              className={`p-3.5 rounded-xl text-center border transition-all ${
                darkMode
                  ? "bg-gray-900/40 border-gray-800"
                  : "bg-white/80 border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)]"
              }`}
            >
              <div className="text-lg sm:text-2xl font-bold text-emerald-500 dark:text-emerald-400">
                BCA
              </div>
              <div
                className={`text-xs mt-0.5 ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                IGNOU Student
              </div>
            </div>

            <div
              className={`p-3.5 rounded-xl text-center border transition-all ${
                darkMode
                  ? "bg-gray-900/40 border-gray-800"
                  : "bg-white/80 border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)]"
              }`}
            >
              <div className="text-lg sm:text-2xl font-bold text-amber-500 dark:text-amber-400">
                5+
              </div>
              <div
                className={`text-xs mt-0.5 ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Projects Built
              </div>
            </div>

            <div
              className={`p-3.5 rounded-xl text-center border transition-all ${
                darkMode
                  ? "bg-gray-900/40 border-gray-800"
                  : "bg-white/80 border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)]"
              }`}
            >
              <div className="text-lg sm:text-2xl font-bold text-emerald-500 dark:text-emerald-400">
                100%
              </div>
              <div
                className={`text-xs mt-0.5 ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Dedication
              </div>
            </div>
          </div>

          {/* Button */}
          <button
            className={`w-full sm:w-auto inline-flex items-center justify-center font-semibold text-sm sm:text-base px-7 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 cursor-pointer ${
              darkMode
                ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-600 hover:to-teal-700"
                : "bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-white hover:opacity-90"
            }`}
          >
            Learn More
          </button>
        </article>
      </div>
    </section>
  );
};

export default About;