import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.jpg";
import javascript from "../assets/javascript.png";
import react from "../assets/react.jpg";
import express from "../assets/express.png";
import MongoDB from "../assets/MongoDB.png";
import nodejs from "../assets/nodejs.png";
import tailwind from "../assets/tailwind.png";

const Skills = ({ darkMode }) => {
  const skills = [
    {
      name: "HTML",
      icon: html,
      level: 95,
      progressBar: "from-orange-500 via-amber-500 to-red-500",
      lineColor: "from-orange-500 to-red-500",
    },
    {
      name: "CSS",
      icon: css,
      level: 96,
      progressBar: "from-blue-600 via-blue-500 to-cyan-400",
      lineColor: "from-blue-600 to-cyan-400",
    },
    {
      name: "JAVASCRIPT",
      icon: javascript,
      level: 91,
      progressBar: "from-yellow-400 via-amber-400 to-yellow-500",
      lineColor: "from-yellow-400 to-amber-500",
    },
    {
      name: "REACT",
      icon: react,
      level: 92,
      progressBar: "from-cyan-400 via-sky-400 to-blue-500",
      lineColor: "from-cyan-400 to-blue-500",
    },
    {
      name: "Express Js",
      icon: express,
      level: 90,
      progressBar: "from-slate-300 via-gray-400 to-zinc-500",
      lineColor: "from-slate-300 to-gray-500",
    },
    {
      name: "MongoDB",
      icon: MongoDB,
      level: 91,
      progressBar: "from-emerald-500 via-green-500 to-lime-400", 
      lineColor: "from-emerald-500 to-lime-400",
    },
    {
      name: "NODE JS",
      icon: nodejs,
      level: 95,
      progressBar: "from-green-500 via-teal-500 to-cyan-400", 
      lineColor: "from-green-500 to-cyan-400",
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
      level: 95,
      progressBar: "from-sky-400 via-teal-400 to-cyan-500",
      lineColor: "from-sky-400 to-cyan-500",
    },
  ];

  return (
    <section
      id="skills"
      className={`py-20 sm:py-28 relative overflow-hidden transition-colors duration-300 bg-transparent`}
    >
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[500px] h-[280px] sm:h-[500px] rounded-full blur-3xl pointer-events-none opacity-25 ${
          darkMode ? "bg-teal-500/20" : "bg-emerald-300/30"
        }`}
      />

      <div className="container max-w-7xl px-6 sm:px-10 lg:px-12 py-10 mx-auto relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2
            className={`sm:text-4xl text-3xl font-bold title-font mb-4 tracking-tight ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-500">
              Skills
            </span>
          </h2>
          <p
            className={`text-sm sm:text-base max-w-xl mx-auto ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Technologies and tools I use to craft fast, scalable, and modern web applications.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="flex flex-wrap -m-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-4 lg:w-1/4 md:w-1/2 w-full"
              data-aos="fade-up"
              data-aos-delay={`${200 + index * 100}`}
            >
              <div
                className={`h-full p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-2 group cursor-pointer ${
                  darkMode
                    ? "bg-gray-900/60 border-gray-800 hover:border-teal-500/40 hover:shadow-[0_0_25px_rgba(20,184,166,0.15)] backdrop-blur-md"
                    : "bg-white/80 border-gray-100 hover:border-emerald-500/40 hover:shadow-[0_10px_25px_rgba(0,0,0,0.06)] backdrop-blur-md"
                }`}
              >
                {/* Header Icon + Title */}
                <div className="flex items-center mb-6">
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl p-3 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                      darkMode
                        ? "bg-gray-800/80 border border-gray-700"
                        : "bg-emerald-50/80 border border-emerald-100"
                    }`}
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3
                    className={`text-xl font-bold ml-4 ${
                      darkMode ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {skill.name}
                  </h3>
                </div>

                {/* Proficiency % */}
                <div className="mb-2 flex justify-between items-center text-sm">
                  <span
                    className={`font-medium ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    Proficiency
                  </span>
                  <span className={`font-bold text-transparent bg-clip-text bg-gradient-to-r ${skill.lineColor}`}>
                    {skill.level}%
                  </span>
                </div>
                {/* Progress Bar */}
                <div
                  className={`w-full rounded-full h-2.5 overflow-hidden ${
                    darkMode ? "bg-gray-800" : "bg-gray-100"
                  }`}
                >
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${skill.progressBar} transition-all duration-1000 ease-out`}
                    style={{
                      width: `${skill.level}%`,
                    }}
                  />
                </div>
                <div
                  className={`mt-6 pt-4 border-t ${
                    darkMode ? "border-gray-800" : "border-gray-100"
                  }`}
                >
                  <div
                    className={`h-1 rounded-full opacity-90 group-hover:w-full transition-all duration-500 w-1/3 bg-gradient-to-r ${skill.lineColor}`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;