import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code2, 
  Server, 
  Database, 
  Sparkles,
  Layers,
  CheckCircle2,
  TrendingUp
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

import html from "../assets/html.png";
import css from "../assets/css.jpg";
import javascript from "../assets/javascript.png";
import react from "../assets/react.jpg";
import express from "../assets/express.png";
import MongoDB from "../assets/MongoDB.png";
import nodejs from "../assets/nodejs.png";
import tailwind from "../assets/tailwind.png";

const Skills = () => {
  const { currentTheme, darkMode } = useTheme();
  const [activeTab, setActiveTab] = useState("all");

  const categories = [
    { id: "all", label: "All Skills", icon: <Layers className="w-4 h-4" /> },
    { id: "frontend", label: "Frontend", icon: <Code2 className="w-4 h-4" /> },
    { id: "backend", label: "Backend", icon: <Server className="w-4 h-4" /> },
    { id: "database", label: "Database", icon: <Database className="w-4 h-4" /> },
  ];

  const allSkills = [
    {
      name: "React.js",
      category: "frontend",
      categoryLabel: "Frontend",
      icon: react,
      level: 94,
      experience: "Senior Proficiency",
      tags: ["Hooks", "Custom Context", "SPAs", "Virtual DOM"],
    },
    {
      name: "Node.js",
      category: "backend",
      categoryLabel: "Backend",
      icon: nodejs,
      level: 92,
      experience: "Advanced",
      tags: ["Event Loop", "Streams", "REST APIs", "Async Arch"],
    },
    {
      name: "Express.js",
      category: "backend",
      categoryLabel: "Backend",
      icon: express,
      level: 90,
      experience: "Advanced",
      tags: ["Routing", "Custom Middlewares", "JWT Auth"],
    },
    {
      name: "MongoDB",
      category: "database",
      categoryLabel: "Database",
      icon: MongoDB,
      level: 91,
      experience: "Advanced",
      tags: ["Schema Design", "Mongoose", "Aggregation Pipeline"],
    },
    {
      name: "JavaScript (ES6+)",
      category: "frontend",
      categoryLabel: "Frontend",
      icon: javascript,
      level: 92,
      experience: "Core Language",
      tags: ["Closures", "Promises", "Event Bubbling", "Clean Code"],
    },
    {
      name: "Tailwind CSS",
      category: "frontend",
      categoryLabel: "Frontend",
      icon: tailwind,
      level: 95,
      experience: "Expert Utility",
      tags: ["Tokens", "Responsive Layouts", "Custom Themes"],
    },
    {
      name: "HTML5",
      category: "frontend",
      categoryLabel: "Frontend",
      icon: html,
      level: 95,
      experience: "Semantic Foundation",
      tags: ["SEO Optimization", "Accessibility (a11y)", "Microdata"],
    },
    {
      name: "CSS3",
      category: "frontend",
      categoryLabel: "Frontend",
      icon: css,
      level: 94,
      experience: "Modern Styling",
      tags: ["Flexbox", "CSS Grid", "Animations", "Variables"],
    },
  ];

  const displayedSkills = activeTab === "all"
    ? allSkills
    : allSkills.filter((s) => s.category === activeTab);

  // Staggered container animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  // Card item individual animation
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
    exit: { opacity: 0, scale: 0.94, transition: { duration: 0.18 } },
  };

  return (
    <section
      id="skills"
      className="py-20 sm:py-28 relative transition-colors duration-500 bg-transparent"
    >
      <div className="container max-w-7xl px-6 sm:px-10 lg:px-12 mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-14" data-aos="fade-up">
          <div 
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-4 border shadow-sm backdrop-blur-md"
            style={{
              backgroundColor: darkMode ? `${currentTheme.primary}18` : `${currentTheme.primary}12`,
              borderColor: `${currentTheme.primary}40`,
              color: currentTheme.primary,
            }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="tracking-wide uppercase text-[11px]">Technical Arsenal</span>
          </div>

          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 ${
              darkMode ? "text-white" : "text-gray-950"
            }`}
          >
            Core{" "}
            <span
              className={`text-transparent bg-clip-text bg-gradient-to-r ${currentTheme.gradientText}`}
            >
              Competencies
            </span>
          </h2>
          <p
            className={`text-sm sm:text-base max-w-2xl mx-auto leading-relaxed ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Meticulously engineered full-stack skills focused on performance, modular architecture, and modern industry standards.
          </p>

          {/* Filter Pills Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-9">
            {categories.map((cat) => {
              const isActive = activeTab === cat.id;
              const count = cat.id === "all" 
                ? allSkills.length 
                : allSkills.filter(s => s.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer border ${
                    isActive
                      ? "shadow-lg scale-105"
                      : darkMode
                      ? "bg-gray-900/50 border-gray-800 text-gray-400 hover:text-white hover:bg-gray-800/60"
                      : "bg-white/90 border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-50 shadow-xs"
                  }`}
                  style={{
                    backgroundColor: isActive ? currentTheme.primary : undefined,
                    borderColor: isActive ? currentTheme.primary : undefined,
                    color: isActive ? "#ffffff" : undefined,
                  }}
                >
                  {cat.icon}
                  <span>{cat.label}</span>
                  <span
                    className={`ml-1 text-[11px] px-2 py-0.5 rounded-full font-bold ${
                      isActive
                        ? "bg-black/25 text-white"
                        : darkMode
                        ? "bg-gray-800 text-gray-400"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Staggered Dynamic Grid */}
        <motion.div
          key={activeTab}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {displayedSkills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={cardVariants}
                layout
                className={`group relative rounded-2xl p-5 border transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col justify-between overflow-hidden ${
                  darkMode
                    ? "bg-gray-950/70 border-gray-800/80 shadow-[0_8px_30px_rgb(0,0,0,0.4)]"
                    : "bg-white/90 border-gray-200/90 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl"
                }`}
                style={{
                  backdropFilter: "blur(12px)",
                }}
              >
                {/* Subtle Hover Gradient Glow Behind Card */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${currentTheme.primary}18 0%, transparent 70%)`,
                  }}
                />

                <div className="relative z-10">
                  {/* Top Bar: Icon + Title + Percentage Pill */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-12 h-12 rounded-xl p-2.5 flex items-center justify-center border transition-transform duration-300 group-hover:scale-110 shadow-xs ${
                          darkMode
                            ? "bg-gray-900/90 border-gray-800"
                            : "bg-gray-50/90 border-gray-200"
                        }`}
                      >
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-full h-full object-contain filter group-hover:drop-shadow-md"
                        />
                      </div>
                      <div>
                        <h4
                          className={`text-base font-bold tracking-tight transition-colors duration-200 ${
                            darkMode ? "text-white" : "text-gray-950"
                          }`}
                        >
                          {skill.name}
                        </h4>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <span
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: currentTheme.primary }}
                          />
                          <span
                            className={`text-[11px] font-medium ${
                              darkMode ? "text-gray-400" : "text-gray-500"
                            }`}
                          >
                            {skill.experience}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div
                      className="flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs font-mono font-bold border"
                      style={{
                        color: currentTheme.primary,
                        backgroundColor: `${currentTheme.primary}12`,
                        borderColor: `${currentTheme.primary}30`,
                      }}
                    >
                      <TrendingUp className="w-3 h-3" />
                      <span>{skill.level}%</span>
                    </div>
                  </div>

                  {/* Tech Tag Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {skill.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className={`text-[10px] font-medium px-2 py-0.5 rounded-lg border transition-all duration-200 ${
                          darkMode
                            ? "bg-gray-900/70 border-gray-800 text-gray-300 group-hover:border-gray-700"
                            : "bg-gray-100/80 border-gray-200/90 text-gray-700 group-hover:border-gray-300"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Progress Bar with Smooth Fill */}
                <div className="relative z-10 pt-2 border-t border-gray-100 dark:border-gray-900">
                  <div className="flex items-center justify-between text-[11px] font-semibold mb-1.5">
                    <span className={darkMode ? "text-gray-400" : "text-gray-500"}>
                      Mastery
                    </span>
                    <span style={{ color: currentTheme.primary }}>
                      {skill.level >= 95 ? "Expert" : "Advanced"}
                    </span>
                  </div>

                  <div
                    className={`w-full rounded-full h-1.5 overflow-hidden ${
                      darkMode ? "bg-gray-800" : "bg-gray-200/80"
                    }`}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
                      className="h-full rounded-full"
                      style={{
                        backgroundColor: currentTheme.primary,
                        boxShadow: `0 0 8px ${currentTheme.primary}60`,
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Feature Pill Summary */}
        <div
          data-aos="zoom-in"
          className={`mt-14 p-6 rounded-2xl border backdrop-blur-md flex flex-wrap items-center justify-around gap-6 text-center ${
            darkMode
              ? "bg-gray-950/40 border-gray-800/80"
              : "bg-white/80 border-gray-200 shadow-sm"
          }`}
        >
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5" style={{ color: currentTheme.primary }} />
            <span className={`text-xs sm:text-sm font-semibold ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
              Production-Grade React & MERN
            </span>
          </div>

          <div className="hidden sm:block w-px h-6 bg-gray-300 dark:bg-gray-800" />

          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5" style={{ color: currentTheme.primary }} />
            <span className={`text-xs sm:text-sm font-semibold ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
              RESTful APIs & Microservice Logic
            </span>
          </div>

          <div className="hidden sm:block w-px h-6 bg-gray-300 dark:bg-gray-800" />

          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5" style={{ color: currentTheme.primary }} />
            <span className={`text-xs sm:text-sm font-semibold ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
              Scalable Database Schema Architecture
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;