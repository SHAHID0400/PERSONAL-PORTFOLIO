import React, { useState, useEffect } from "react";
import postgramImg from "../assets/postgram.png";
import cardoraImg from "../assets/Cardora.png";
import realEstateImg from "../assets/Real-Estate.png";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const Projects = () => {
  const { currentTheme, darkMode } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  const projects = [
    {
      id: 0,
      title: "AvasaRealty – Real Estate Marketplace",
      status: "Live",
      isLive: true,
      description:
        "A full-stack property technology marketplace featuring Cloudinary media storage, interactive property filters, EmailJS advisory forms, and an integrated real-time Gemini AI voice & text assistant.",
      image: realEstateImg,
      tags: ["React", "Node.js", "Express.js", "MongoDB", "Cloudinary", "Gemini AI"],
      githubUrl: "https://github.com/SHAHID0400/real-estate-platform",
      demoUrl: "https://real-estate-platform-kappa-one.vercel.app/",
    },
    {
      id: 1,
      title: "Cardora – Digital vCard & Profile Hub",
      status: "Live",
      isLive: true,
      description:
        "A sleek interactive digital business card application engineered with fluid Framer Motion animations, theme customization, responsive contact integration, and dynamic social profile sharing.",
      image: cardoraImg,
      tags: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      githubUrl: "https://github.com/SHAHID0400",
      demoUrl: "https://cardora-project.vercel.app/",
    },
    {
      id: 2,
      title: "Postgram – Social Media Platform",
      status: "Live",
      isLive: true,
      description:
        "A full-stack interactive social media platform where users can create profiles, upload and share image posts, and explore real-time community feeds with secure authentication and responsive UI.",
      image: postgramImg,
      tags: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      githubUrl: "https://github.com/SHAHID0400",
      demoUrl: "https://post-gram-lac.vercel.app/",
    },
    {
      id: 3,
      title: "E-Commerce Platform",
      status: "In Progress",
      isLive: false,
      description:
        "A full-stack e-commerce platform built with the MERN stack featuring user authentication, product browsing, shopping cart, secure checkout, order management, and an intuitive admin dashboard.",
      image: project1,
      tags: ["React", "Node.js", "MongoDB", "Express.js"],
      githubUrl: "#",
      demoUrl: "#",
    },
    {
      id: 4,
      title: "Fitness Tracker App",
      status: "In Progress",
      isLive: false,
      description:
        "A responsive fitness tracking application that helps users monitor workouts, track daily progress, set fitness goals, and visualize performance through interactive charts and personalized analytics.",
      image: project2,
      tags: ["React-Native", "Firebase", "Tailwind CSS"],
      githubUrl: "#",
      demoUrl: "#",
    },
    {
      id: 5,
      title: "AI Content Generator",
      status: "In Progress",
      isLive: false,
      description:
        "An AI-powered content generation tool that creates high-quality blogs, social media captions, product descriptions, and marketing copy instantly, helping users save time and improve productivity.",
      image: project3,
      tags: ["React", "Python", "OpenAI API", "MongoDB"],
      githubUrl: "#",
      demoUrl: "#",
    },
    {
      id: 6,
      title: "Executive Analytics Dashboard",
      status: "In Progress",
      isLive: false,
      description:
        "A modern analytics dashboard that displays real-time business insights through interactive charts, tables, and KPI cards with data visualization, filtering, and responsive design.",
      image: project4,
      tags: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
      githubUrl: "#",
      demoUrl: "#",
    },
  ];

  useEffect(() => {
    const updateCardsPerPage = () => {
      if (window.innerWidth < 768) {
        setCardsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(3);
      }
    };

    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  const maxIndex = Math.max(0, projects.length - cardsPerPage);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex >= maxIndex ? 0 : prevIndex + 1
      );
    }, 2500);

    return () => clearInterval(timer);
  }, [maxIndex, isPaused]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? maxIndex : prevIndex - 1
    );
  };

  return (
    <section
      id="projects"
      className="relative py-20 sm:py-28 transition-colors duration-300 bg-transparent"
    >
      <div className="container max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
          <h2
            className={`text-3xl sm:text-4xl font-bold mb-3 tracking-tight ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            My{" "}
            <span
              className={`text-transparent bg-clip-text bg-gradient-to-r ${currentTheme.gradientText}`}
            >
              Projects
            </span>
          </h2>
          <p
            className={`max-w-xl mx-auto text-sm sm:text-base ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            A showcase of my recent work, ongoing builds, and digital products
          </p>
        </div>

        {/* SLIDER MAIN WRAPPER */}
        <div
          className="relative group px-2 sm:px-4 mb-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className={`absolute left-0 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border shadow-xl transition-all duration-300 cursor-pointer backdrop-blur-md hover:scale-110 ${
              darkMode
                ? "bg-gray-900/90 border-gray-700 text-white"
                : "bg-white/90 border-gray-200 text-gray-800"
            }`}
          >
            <FaChevronLeft className="text-sm sm:text-base" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className={`absolute right-0 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border shadow-xl transition-all duration-300 cursor-pointer backdrop-blur-md hover:scale-110 ${
              darkMode
                ? "bg-gray-900/90 border-gray-700 text-white"
                : "bg-white/90 border-gray-200 text-gray-800"
            }`}
          >
            <FaChevronRight className="text-sm sm:text-base" />
          </button>

          {/* Cards Track */}
          <div className="overflow-hidden rounded-2xl py-2">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / cardsPerPage)
                }%)`,
              }}
            >
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="flex-shrink-0 px-3 w-full md:w-1/2 lg:w-1/3"
                >
                  <div
                    className={`group rounded-2xl border transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col overflow-hidden h-full ${currentTheme.borderGlow} ${
                      darkMode
                        ? "bg-gray-900/60 border-gray-800 backdrop-blur-md"
                        : "bg-white/80 border-gray-100 backdrop-blur-md shadow-md"
                    }`}
                  >
                    {/* Project Image & Status Badge */}
                    <div className="h-48 sm:h-52 overflow-hidden relative">
                      <a
                        href={project.demoUrl !== "#" ? project.demoUrl : undefined}
                        target={project.demoUrl !== "#" ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        className="block w-full h-full"
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </a>

                      {/* Status Badge */}
                      <div className="absolute top-3 right-3 z-10 pointer-events-none">
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md shadow-lg border ${currentTheme.tagBg}`}
                        >
                          <span className="relative flex h-2 w-2">
                            <span
                              className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                              style={{ backgroundColor: currentTheme.primary }}
                            />
                            <span
                              className="relative inline-flex rounded-full h-2 w-2"
                              style={{ backgroundColor: currentTheme.primary }}
                            />
                          </span>
                          {project.status}
                        </span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3
                          className={`text-xl font-bold mb-2 ${
                            darkMode ? "text-white" : "text-gray-800"
                          }`}
                        >
                          {project.title}
                        </h3>
                        <p
                          className={`text-xs sm:text-sm mb-4 leading-relaxed line-clamp-3 ${
                            darkMode ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          {project.description}
                        </p>
                      </div>

                      <div>
                        {/* Tech Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-5">
                          {project.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className={`px-2.5 py-1 text-xs rounded-full font-medium border ${currentTheme.tagBg}`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3">
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex flex-1 items-center justify-center gap-2 px-3.5 py-2.5 text-xs sm:text-sm font-semibold rounded-xl border transition-all duration-300 ${
                              darkMode
                                ? "bg-gray-800/80 border-gray-700 text-gray-200 hover:bg-gray-700 hover:text-white"
                                : "bg-gray-100 border-gray-200 text-gray-700 hover:bg-gray-200"
                            }`}
                          >
                            <FaGithub className="text-sm" />
                            <span>Code</span>
                          </a>
                          <a
                            href={project.demoUrl}
                            target={project.demoUrl !== "#" ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            className={`flex flex-1 items-center justify-center gap-2 px-3.5 py-2.5 text-xs sm:text-sm font-semibold rounded-xl text-white bg-gradient-to-r ${currentTheme.gradientButton} hover:scale-[1.02] transition-all duration-300 shadow-md`}
                          >
                            <FaExternalLinkAlt className="text-xs" />
                            <span>Demo</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center items-center gap-2 mb-10">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className="h-2.5 rounded-full transition-all duration-300 cursor-pointer"
              style={{
                width: currentIndex === idx ? "2rem" : "0.625rem",
                backgroundColor:
                  currentIndex === idx ? currentTheme.primary : "#4b5563",
              }}
            />
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="flex justify-center" data-aos="zoom-in">
          <a
            href="https://github.com/SHAHID0400"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center font-semibold gap-2.5 px-8 py-3.5 text-sm sm:text-base rounded-full shadow-md transition-all duration-300 hover:scale-105 cursor-pointer bg-gradient-to-r ${currentTheme.gradientButton} text-white`}
          >
            <FaGithub className="text-lg" />
            <span>View All Projects</span>
            <FaExternalLinkAlt className="text-xs" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;