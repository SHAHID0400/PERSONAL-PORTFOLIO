import React, { useState, useRef, useEffect } from "react";
import postgramImg from "../assets/postgram.png";
import cardoraImg from "../assets/Cardora.png";
import realEstateImg from "../assets/Real-Estate.png";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import {
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const Projects = () => {
  const { currentTheme, darkMode } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);

  const projects = [
    {
      id: 0,
      title: "Cardora – Digital vCard & Business Hub",
      status: "Live",
      category: "Frontend / Business",
      description:
        "A premium digital business card platform featuring customized themes, interactive profile sharing, contact exchange, and embedded Botpress chat assistant integration.",
      image: cardoraImg,
      tags: ["React", "Tailwind CSS", "Framer Motion", "Botpress"],
      githubUrl: "https://github.com/SHAHID0400",
      demoUrl: "https://cardora-project.vercel.app/",
    },
    {
      id: 1,
      title: "Postgram – Social Media Platform",
      status: "Live",
      category: "Full-Stack",
      description:
        "A modern social media web application inspired by Instagram featuring image post creation, secure Appwrite authentication, and real-time community feeds.",
      image: postgramImg,
      tags: ["React", "Appwrite", "Tailwind CSS", "JavaScript"],
      githubUrl: "https://github.com/SHAHID0400",
      demoUrl: "https://post-gram-lac.vercel.app/",
    },
    {
      id: 2,
      title: "AvasaRealty – Real Estate Marketplace",
      status: "Live",
      category: "Full-Stack / AI",
      description:
        "A full-stack property technology marketplace featuring Cloudinary storage, interactive filters, inquiry forms, and an integrated real-time Gemini AI voice & text assistant.",
      image: realEstateImg,
      tags: ["React", "Node.js", "MongoDB", "Cloudinary", "Gemini AI"],
      githubUrl: "https://github.com/SHAHID0400/real-estate-platform",
      demoUrl: "https://real-estate-platform-kappa-one.vercel.app/",
    },
    {
      id: 3,
      title: "E-Commerce Platform",
      status: "In Progress",
      category: "Full-Stack",
      description:
        "A full-stack e-commerce web platform built with the MERN stack featuring product browsing, shopping cart, secure checkout, and an intuitive admin management dashboard.",
      image: project1,
      tags: ["React", "Node.js", "Express.js", "MongoDB"],
      githubUrl: "#",
      demoUrl: "#",
    },
    {
      id: 4,
      title: "Fitness Tracker App",
      status: "In Progress",
      category: "Mobile / Web",
      description:
        "A responsive fitness tracking application that helps users monitor workouts, track daily progress, and visualize performance through interactive charts.",
      image: project2,
      tags: ["React-Native", "Firebase", "Tailwind CSS"],
      githubUrl: "#",
      demoUrl: "#",
    },
    {
      id: 5,
      title: "AI Content Generator",
      status: "In Progress",
      category: "AI",
      description:
        "An AI-powered content generation tool that instantly creates high-quality blogs, social media captions, and marketing copy to improve productivity.",
      image: project3,
      tags: ["React", "Python", "OpenAI API", "MongoDB"],
      githubUrl: "#",
      demoUrl: "#",
    },
    {
      id: 6,
      title: "Executive Analytics Dashboard",
      status: "In Progress",
      category: "Frontend",
      description:
        "A modern analytics dashboard displaying real-time business insights through interactive charts, data filtering tables, and responsive KPI widgets.",
      image: project4,
      tags: ["React", "Tailwind CSS", "Node.js", "Chart.js"],
      githubUrl: "#",
      demoUrl: "#",
    },
  ];

  // Auto-scroll loop for desktop & mobile
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(timer);
  }, [isPaused, projects.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const handleDragEnd = (event, info) => {
    if (info.offset.x > 40) {
      handlePrev();
    } else if (info.offset.x < -40) {
      handleNext();
    }
  };

  return (
    <section
      id="projects"
      className="relative py-24 sm:py-32 transition-colors duration-300 bg-transparent overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Ambient Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[160px] opacity-15 pointer-events-none"
        style={{ backgroundColor: currentTheme.primary }}
      />

      <div className="container max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        {/* Centered Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-3">
            <span className="px-3 py-1 rounded-lg text-xs font-mono font-bold bg-white/10 text-violet-400 border border-white/10">
              03
            </span>
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400">
              FEATURED PROJECTS
            </span>
          </div>
          <h2
            className={`text-3xl sm:text-5xl font-black tracking-tight ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Crafted With{" "}
            <span
              className={`text-transparent bg-clip-text bg-gradient-to-r ${currentTheme.gradientText}`}
            >
              Passion
            </span>
          </h2>
          <p
            className={`mt-3 text-sm sm:text-base mx-auto ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            From digital business cards to real-world full-stack applications, explore my complete development portfolio.
          </p>
        </div>

        {/* 3D Coverflow Viewport */}
        <div 
          ref={containerRef}
          className="relative h-[480px] sm:h-[520px] flex items-center justify-center perspective-[1200px] overflow-hidden"
        >
          <div className="absolute inset-0 flex items-center justify-center cursor-grab active:cursor-grabbing">
            {projects.map((project, index) => {
              const offset = index - currentIndex;
              let isActive = offset === 0;

              return (
                <motion.div
                  key={project.id}
                  onClick={() => setCurrentIndex(index)}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={handleDragEnd}
                  className={`absolute w-[290px] sm:w-[380px] h-[410px] sm:h-[450px] rounded-3xl p-6 flex flex-col justify-between cursor-pointer shadow-2xl border backdrop-blur-xl select-none transition-all ${
                    isActive
                      ? "z-30 border-violet-500/60 shadow-[0_0_70px_rgba(139,92,246,0.4)] bg-[#0c0c16]/95"
                      : "z-10 border-white/10 bg-[#080810]/80 opacity-50 hover:opacity-80"
                  }`}
                  animate={{
                    x: offset * 310,
                    scale: isActive ? 1.05 : 0.8,
                    rotateY: offset * -15,
                    opacity: Math.abs(offset) > 2 ? 0 : isActive ? 1 : 0.5,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 24,
                  }}
                >
                  {/* Card Header Image Preview */}
                  <div className="h-44 sm:h-48 rounded-2xl overflow-hidden relative border border-white/10">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c16] via-transparent to-transparent opacity-80" />
                    
                    <div className="absolute top-2.5 right-2.5">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-violet-300 border border-white/20 shadow-lg">
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="flex-1 flex flex-col justify-between pt-3.5">
                    <div>
                      <h3 className="text-base sm:text-lg font-black text-white mb-1 tracking-tight line-clamp-1">
                        {project.title}
                      </h3>
                      <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Footer Tags & Demo Button */}
                    <div className="flex items-center justify-between pt-3 border-t border-white/10">
                      <div className="flex gap-1 overflow-hidden max-w-[160px]">
                        {project.tags.slice(0, 2).map((t, idx) => (
                          <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-violet-300 border border-white/5 truncate">
                            {t}
                          </span>
                        ))}
                      </div>

                      {isActive ? (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white shadow-lg transition hover:scale-105 active:scale-95"
                          style={{
                            backgroundImage: `linear-gradient(to right, ${currentTheme.primary}, ${currentTheme.secondary || "#8b5cf6"})`,
                          }}
                        >
                          <span>Demo</span>
                          <FaExternalLinkAlt className="text-[10px]" />
                        </a>
                      ) : (
                        <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400">
                          <span className="text-[10px] font-mono">{index + 1}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Clean minimal navigation arrows */}
        <div className="flex justify-center items-center gap-6 mt-4">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-white/15 hover:scale-110 active:scale-95 transition shadow-xl cursor-pointer"
            aria-label="Previous project"
          >
            <FaChevronLeft />
          </button>
          
          <div className="text-xs font-mono text-gray-400 tracking-widest px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10">
            {currentIndex + 1} / {projects.length}
          </div>

          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-white/15 hover:scale-110 active:scale-95 transition shadow-xl cursor-pointer"
            aria-label="Next project"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;