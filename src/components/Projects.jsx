import React from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = ({ darkMode }) => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform built with the MERN stack featuring user authentication, product browsing, shopping cart, secure checkout, order management, and an intuitive admin dashboard for managing products and customers.",
      image: project1,
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      id: 2,
      title: "Fitness Tracker App",
      description:
        "A responsive fitness tracking application that helps users monitor workouts, track daily progress, set fitness goals, and visualize performance through interactive charts and personalized analytics.",
      image: project2,
      tags: ["React-Native", "Firebase"],
    },
    {
      id: 3,
      title: "Content Generator",
      description:
        "An AI-powered content generation tool that creates high-quality blogs, social media captions, product descriptions, and marketing copy instantly, helping users save time and improve productivity.",
      image: project3,
      tags: ["Python", "OpenAI", "MongoDB"],
    },
    {
      id: 4,
      title: "Dashboard",
      description:
        "A modern analytics dashboard that displays real-time business insights through interactive charts, tables, and KPI cards. It includes user management, data visualization, filtering, and responsive design for seamless monitoring.",
      image: project4,
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      id: 5,
      title: "Task Management",
      description:
        "A modern task management application designed to help teams and individuals organize projects, assign tasks, set priorities, track deadlines, and monitor progress through an intuitive dashboard with real-time productivity insights.",
      image: project5,
      tags: ["Laravel", "Vue.js", "MongoDB"],
    },
    {
      id: 6,
      title: "Authentication System",
      description:
        "A secure authentication system built with the MERN stack that enables users to register, log in, and manage their accounts safely. It includes JWT-based authentication, password encryption, protected routes, role-based access control, email verification, and password reset functionality.",
      image: project6,
      tags: ["React", "Node.js", "MongoDB", "Express.js"],
    },
  ];

  return (
    <section
      id="projects"
      className={`relative py-20 sm:py-24 transition-colors duration-300 ${
        darkMode
          ? "bg-black"
          : "bg-gradient-to-b from-white via-emerald-50/20 to-white"
      }`}
    >
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none opacity-25 ${
          darkMode ? "bg-teal-500/20" : "bg-emerald-300/30"
        }`}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2
            className={`text-3xl sm:text-4xl font-bold mb-3 tracking-tight ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-500">
              Projects
            </span>
          </h2>
          <p
            className={`max-w-xl mx-auto text-sm sm:text-base ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            A showcase of my recent work and digital products
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group rounded-2xl border transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col overflow-hidden ${
                darkMode
                  ? "bg-gray-900/70 border-gray-800 hover:border-teal-500/40 hover:shadow-[0_0_25px_rgba(20,184,166,0.15)] backdrop-blur-md"
                  : "bg-white/90 border-gray-100 hover:border-emerald-500/40 hover:shadow-[0_10px_25px_rgba(0,0,0,0.06)] backdrop-blur-md"
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Project Image */}
              <div className="h-44 sm:h-48 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                        className={`px-2.5 py-1 text-xs rounded-full font-medium border ${
                          darkMode
                            ? "bg-teal-500/10 border-teal-500/20 text-teal-300"
                            : "bg-emerald-50 border-emerald-100 text-emerald-700"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {/* Code Link */}
                    <a
                      href="#"
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
                      href="#"
                      className="flex flex-1 items-center justify-center gap-2 px-3.5 py-2.5 text-xs sm:text-sm font-semibold rounded-xl text-white bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:scale-[1.02] transition-all duration-300"
                    >
                      <FaExternalLinkAlt className="text-xs" />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="flex justify-center" data-aos="zoom-in">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center font-semibold gap-2.5 px-8 py-3.5 text-sm sm:text-base rounded-full shadow-md transition-all duration-300 hover:scale-105 cursor-pointer ${
              darkMode
                ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:shadow-[0_0_25px_rgba(20,184,166,0.3)]"
                : "bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-white hover:shadow-[0_0_25px_rgba(245,158,11,0.4)]"
            }`}
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