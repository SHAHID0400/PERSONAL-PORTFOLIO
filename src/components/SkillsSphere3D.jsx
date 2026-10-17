import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, QuadraticBezierLine } from "@react-three/drei";
import * as THREE from "three";
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";
import { useTheme } from "../context/ThemeContext";

const skillsData = [
  { name: "HTML", level: "95%", val: 95, icon: <FaHtml5 className="text-orange-500" />, color: "from-orange-500 to-red-500", bg: "bg-orange-500/10" },
  { name: "CSS", level: "96%", val: 96, icon: <FaCss3Alt className="text-blue-500" />, color: "from-blue-500 to-cyan-500", bg: "bg-blue-500/10" },
  { name: "JAVASCRIPT", level: "91%", val: 91, icon: <FaJs className="text-yellow-400" />, color: "from-yellow-400 to-amber-500", bg: "bg-yellow-500/10" },
  { name: "REACT", level: "92%", val: 92, icon: <FaReact className="text-cyan-400" />, color: "from-cyan-400 to-blue-500", bg: "bg-cyan-500/10" },
  { name: "Express Js", level: "90%", icon: <SiExpress className="text-gray-300" />, val: 90, color: "from-gray-400 to-slate-600", bg: "bg-gray-500/10" },
  { name: "MongoDB", level: "91%", val: 91, icon: <SiMongodb className="text-emerald-500" />, color: "from-emerald-400 to-teal-600", bg: "bg-emerald-500/10" },
  { name: "NODE JS", level: "95%", val: 95, icon: <FaNodeJs className="text-green-500" />, color: "from-green-500 to-emerald-500", bg: "bg-green-500/10" },
  { name: "Tailwind CSS", level: "95%", val: 95, icon: <SiTailwindcss className="text-sky-400" />, color: "from-sky-400 to-cyan-500", bg: "bg-sky-500/10" },
];

const AnimatedShootingCard = ({
  skill,
  index,
  total,
  radius,
  isOpen,
  darkMode,
  themeColor,
  onCompleteSkill,
}) => {
  const [progress, setProgress] = useState(0);
  const timer = useRef(0);
  const hasCompleted = useRef(false);

  const delay = index * 0.7;

  useFrame((state, delta) => {
    if (isOpen) {
      timer.current += delta;
      if (timer.current >= delay) {
        if (progress < 1) {
          const nextProgress = Math.min(progress + delta * 1.5, 1);
          setProgress(nextProgress);
          if (nextProgress === 1 && !hasCompleted.current) {
            hasCompleted.current = true;
            onCompleteSkill();
          }
        }
      }
    }
  });

  const phi = Math.acos(-1 + (2 * index) / total);
  const theta = Math.sqrt(total * Math.PI) * phi;

  const targetX = radius * Math.cos(theta) * Math.sin(phi);
  const targetY = radius * Math.sin(theta) * Math.sin(phi);
  const targetZ = radius * Math.cos(phi);

  const currX = targetX * progress;
  const currY = targetY * progress;
  const currZ = targetZ * progress;

  const midPoint = new THREE.Vector3(currX, currY, currZ)
    .multiplyScalar(0.5)
    .add(new THREE.Vector3(0, 0.6 * progress, 0));

  return (
    <group>
      {progress > 0.02 && (
        <QuadraticBezierLine
          start={[0, 0, 0]}
          end={[currX, currY, currZ]}
          mid={[midPoint.x, midPoint.y, midPoint.z]}
          color={themeColor}
          lineWidth={2.5}
        />
      )}

      {progress > 0.02 && (
        <mesh position={[currX, currY, currZ]}>
          <Html center distanceFactor={10}>
            <div
              style={{
                transform: `scale(${Math.max(0.4, progress)})`,
                opacity: Math.min(1, progress * 1.5),
              }}
              className={`p-3 sm:p-4 rounded-xl border backdrop-blur-xl shadow-2xl flex items-center gap-3 transition-all duration-100 ${
                darkMode
                  ? "bg-gray-950/95 border-gray-700 text-white"
                  : "bg-white border-gray-200 text-gray-800 shadow-xl"
              }`}
            >
              <div className={`p-2 rounded-lg ${skill.bg} text-xl sm:text-2xl`}>
                {skill.icon}
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xs sm:text-sm whitespace-nowrap uppercase tracking-wider">
                  {skill.name}
                </span>
                <span className="text-[10px] font-semibold" style={{ color: themeColor }}>
                  {skill.level}
                </span>
              </div>
            </div>
          </Html>
        </mesh>
      )}
    </group>
  );
};

const Scene = ({ darkMode, themeColor, isOpen, setIsOpen, onSkillComplete, completedCount }) => {
  const deployPercentage = Math.round((completedCount / skillsData.length) * 100);

  return (
    <group>
      <mesh onClick={() => setIsOpen(true)} scale={1.35}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color={themeColor}
          wireframe
          emissive={themeColor}
          emissiveIntensity={0.6}
        />
      </mesh>

      <Html center position={[0, 0, 0]}>
        {!isOpen ? (
          <button
            onClick={() => setIsOpen(true)}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap cursor-pointer transition-all shadow-2xl border animate-bounce ${
              darkMode
                ? "bg-gray-950/90 text-white border-gray-700"
                : "bg-white text-gray-800 border-gray-300"
            }`}
          >
            🚀 Tap Core to Launch Skills
          </button>
        ) : (
          <div
            className={`px-4 py-2 rounded-full text-xs font-bold border backdrop-blur-md shadow-lg flex items-center gap-2 ${
              darkMode
                ? "bg-gray-950/90 text-white border-gray-700"
                : "bg-white/90 text-gray-800 border-gray-300"
            }`}
          >
            <span
              className="w-2.5 h-2.5 rounded-full animate-ping"
              style={{ backgroundColor: themeColor }}
            />
            Deploying: {deployPercentage}%
          </div>
        )}
      </Html>

      {skillsData.map((skill, index) => (
        <AnimatedShootingCard
          key={index}
          skill={skill}
          index={index}
          total={skillsData.length}
          radius={4.2}
          isOpen={isOpen}
          darkMode={darkMode}
          themeColor={themeColor}
          onCompleteSkill={onSkillComplete}
        />
      ))}
    </group>
  );
};

const SkillsSphere3D = () => {
  const { currentTheme, darkMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [completedCount, setCompletedCount] = useState(0);

  const handleSkillComplete = () => {
    setCompletedCount((prev) => Math.min(prev + 1, skillsData.length));
  };

  const isAllComplete = completedCount >= skillsData.length;

  const handleReset = () => {
    setCompletedCount(0);
    setIsOpen(false);
  };

  return (
    <section id="skills" className="py-20 relative bg-transparent overflow-hidden">
      <div className="text-center mb-10 px-4 relative z-10" data-aos="fade-up">
        <h2
          className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 tracking-tight ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Technical{" "}
          <span
            className={`text-transparent bg-clip-text bg-gradient-to-r ${currentTheme.gradientText}`}
          >
            Proficiency
          </span>
        </h2>
        <p
          className={`text-sm sm:text-base max-w-xl mx-auto font-medium ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Technologies & tools I leverage to craft fast, scalable, and intuitive digital experiences.
        </p>

        {isAllComplete && (
          <button
            onClick={handleReset}
            className={`mt-4 px-4 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-pointer ${currentTheme.tagBg}`}
          >
            🔄 Replay Arrow Launch
          </button>
        )}
      </div>

      {!isAllComplete ? (
        <div className="w-full h-[520px] sm:h-[580px] relative z-10">
          <Canvas camera={{ position: [0, 0, 9.5], fov: 50 }}>
            <ambientLight intensity={0.8} />
            <pointLight position={[10, 10, 10]} intensity={1.5} />
            <Scene
              darkMode={darkMode}
              themeColor={currentTheme.primary}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              onSkillComplete={handleSkillComplete}
              completedCount={completedCount}
            />
          </Canvas>
        </div>
      ) : (
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillsData.map((skill, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl border backdrop-blur-xl shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl ${currentTheme.borderGlow} ${
                  darkMode
                    ? "bg-gray-950/80 border-gray-800 text-white"
                    : "bg-white border-gray-100 text-gray-800"
                }`}
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className={`p-3 rounded-xl ${skill.bg} text-3xl flex items-center justify-center`}>
                    {skill.icon}
                  </div>
                  <h3 className="font-bold text-lg tracking-wide uppercase">
                    {skill.name}
                  </h3>
                </div>

                <div className="flex items-center justify-between text-sm font-semibold mb-2">
                  <span className={darkMode ? "text-gray-400" : "text-gray-500"}>
                    Proficiency
                  </span>
                  <span className={`font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                    {skill.level}
                  </span>
                </div>

                <div className={`w-full h-2.5 rounded-full overflow-hidden ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}>
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                    style={{ width: skill.level }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default SkillsSphere3D;