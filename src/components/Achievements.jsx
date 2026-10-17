import React from "react";
import {
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Achievements = () => {
  const { currentTheme, darkMode } = useTheme();

  const educationList = [
    {
      id: 1,
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Indira Gandhi National Open University (IGNOU)",
      location: "New Delhi, India",
      duration: "Pursuing",
      status: "In Progress",
      type: "Degree",
      description:
        "Focusing on core Computer Science subjects including Software Engineering, Database Management Systems (DBMS), Data Structures, Algorithms, and Web Technologies.",
      highlights: [
        "Specializing in Software Development",
        "Deep diving into Core CS Fundamentals",
        "Hands-on project development",
      ],
    },
    {
      id: 2,
      degree: "Diploma in Computer Applications (DCAP)",
      institution: "IICS (Indian Institute of Computer Science)",
      location: "Pitampura, New Delhi",
      duration: "Completed",
      status: "Certified",
      type: "Diploma",
      description:
        "Comprehensive diploma covering fundamental computer concepts, programming logic, web design basics, office automation, and practical application skills.",
      highlights: [
        "Practical Hands-on Application Development",
        "Web Design & Office Automation Concepts",
        "Graduated with Distinction/Certification",
      ],
    },
  ];

  return (
    <section
      id="achievements"
      className={`relative py-20 sm:py-28 transition-colors duration-300 bg-transparent ${
        darkMode ? "text-white" : "text-gray-900"
      }`}
    >
      <div className="container max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 tracking-tight">
            Education &{" "}
            <span
              className={`text-transparent bg-clip-text bg-gradient-to-r ${currentTheme.gradientText}`}
            >
              Qualifications
            </span>
          </h2>
          <p
            className={`max-w-xl mx-auto text-sm sm:text-base ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            My academic journey, certifications, and technical foundation
          </p>
        </div>

        {/* Timeline / Cards Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {educationList.map((item, index) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={`${index * 150}`}
              className={`group relative rounded-3xl p-6 sm:p-8 border transition-all duration-300 hover:-translate-y-2 backdrop-blur-md flex flex-col justify-between ${currentTheme.borderGlow} ${
                darkMode
                  ? "bg-gray-900/60 border-gray-800"
                  : "bg-white/80 border-gray-200/80 shadow-md"
              }`}
            >
              <div>
                {/* Header Badge & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-tr ${currentTheme.gradientButton} text-white shadow-md transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    {item.type === "Degree" ? (
                      <GraduationCap className="w-6 h-6" />
                    ) : (
                      <Award className="w-6 h-6" />
                    )}
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold border ${currentTheme.tagBg}`}
                  >
                    {item.status}
                  </span>
                </div>

                {/* Title & Institution */}
                <h3 className="text-xl sm:text-2xl font-bold mb-2 transition-colors duration-300 group-hover:text-emerald-400">
                  {item.degree}
                </h3>

                <h4
                  className="text-base font-semibold mb-4"
                  style={{ color: currentTheme.primary }}
                >
                  {item.institution}
                </h4>

                {/* Info Pills */}
                <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-1.5">
                    <MapPin
                      className="w-4 h-4"
                      style={{ color: currentTheme.primary }}
                    />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-amber-500" />
                    <span>{item.duration}</span>
                  </div>
                </div>

                <p
                  className={`text-sm leading-relaxed mb-6 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {item.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="pt-4 border-t border-gray-800/50">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                  Key Learnings & Focus
                </p>
                <ul className="space-y-2">
                  {item.highlights.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-xs sm:text-sm"
                    >
                      <CheckCircle2
                        className="w-4 h-4 flex-shrink-0"
                        style={{ color: currentTheme.primary }}
                      />
                      <span
                        className={darkMode ? "text-gray-300" : "text-gray-700"}
                      >
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Stats */}
        <div
          data-aos="zoom-in"
          className={`mt-16 rounded-3xl p-6 sm:p-8 border backdrop-blur-md flex flex-wrap justify-around items-center gap-6 text-center ${
            darkMode
              ? "bg-gray-900/40 border-gray-800"
              : "bg-white/80 border-gray-200 shadow-lg"
          }`}
        >
          <div>
            <p
              className={`text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${currentTheme.gradientText}`}
            >
              100%
            </p>
            <p
              className={`text-xs sm:text-sm mt-1 ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Practical Skill Focus
            </p>
          </div>
          <div className="w-px h-12 bg-gray-800 hidden sm:block" />
          <div>
            <p
              className={`text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${currentTheme.gradientText}`}
            >
              DCAP
            </p>
            <p
              className={`text-xs sm:text-sm mt-1 ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Certified Specialist
            </p>
          </div>
          <div className="w-px h-12 bg-gray-800 hidden sm:block" />
          <div>
            <p
              className={`text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${currentTheme.gradientText}`}
            >
              BCA
            </p>
            <p
              className={`text-xs sm:text-sm mt-1 ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              IGNOU Pursuing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;