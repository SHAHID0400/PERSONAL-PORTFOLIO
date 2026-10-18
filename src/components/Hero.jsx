import { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";
import instagram from "../assets/insta.jpg";
import linkden from "../assets/linkden.png";
import facebook from "../assets/facebook.jpg";
import github from "../assets/github.png";
import CV from "../assets/CV.pdf";
import hero from "../assets/hero1.png";
import reactLogo from "../assets/react.jpg";
import nodeLogo from "../assets/nodejs.png";
import mongoLogo from "../assets/MongoDB.png";
import tailwindLogo from "../assets/tailwind.png";
import { DownloadIcon, Mail } from "lucide-react";
import SplineCube from "./SplineCube";
import { useTheme } from "../context/ThemeContext";

const techBadges = [
  { name: "React", icon: reactLogo, position: "left-0 top-10 sm:-left-6 sm:top-16", z: "78px", delay: "0s" },
  { name: "Node.js", icon: nodeLogo, position: "right-0 top-[26%] sm:-right-5", z: "64px", delay: "0.9s" },
  { name: "MongoDB", icon: mongoLogo, position: "left-0 bottom-[26%] sm:-left-6", z: "84px", delay: "1.7s" },
  { name: "Tailwind", icon: tailwindLogo, position: "right-0 bottom-12 sm:-right-4", z: "70px", delay: "2.4s" },
];

const Hero = () => {
  const { currentTheme, darkMode } = useTheme();
  const portraitRef = useRef(null);
  const portraitFrameRef = useRef(0);
  const reducedMotionRef = useRef(false);
  const portraitTargetRef = useRef({ rx: 0, ry: 0, mx: 50, my: 50 });
  const portraitCurrentRef = useRef({ rx: 0, ry: 0, mx: 50, my: 50 });

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => {
      reducedMotionRef.current = media.matches;
    };

    updatePreference();
    media.addEventListener?.("change", updatePreference);
    return () => media.removeEventListener?.("change", updatePreference);
  }, []);

  useEffect(
    () => () => {
      if (portraitFrameRef.current) {
        cancelAnimationFrame(portraitFrameRef.current);
      }
    },
    []
  );

  const applyPortraitTilt = () => {
    const node = portraitRef.current;
    if (!node) return;

    const current = portraitCurrentRef.current;
    node.style.setProperty("--hx", `${current.rx.toFixed(2)}deg`);
    node.style.setProperty("--hy", `${current.ry.toFixed(2)}deg`);
    node.style.setProperty("--hmx", `${current.mx.toFixed(2)}%`);
    node.style.setProperty("--hmy", `${current.my.toFixed(2)}%`);
  };

  const runPortraitLoop = () => {
    const target = portraitTargetRef.current;
    const current = portraitCurrentRef.current;
    const ease = 0.12;

    current.rx += (target.rx - current.rx) * ease;
    current.ry += (target.ry - current.ry) * ease;
    current.mx += (target.mx - current.mx) * ease;
    current.my += (target.my - current.my) * ease;

    const settled =
      Math.abs(target.rx - current.rx) < 0.01 &&
      Math.abs(target.ry - current.ry) < 0.01 &&
      Math.abs(target.mx - current.mx) < 0.05 &&
      Math.abs(target.my - current.my) < 0.05;

    if (settled) {
      current.rx = target.rx;
      current.ry = target.ry;
      current.mx = target.mx;
      current.my = target.my;
      applyPortraitTilt();
      portraitFrameRef.current = 0;
      return;
    }

    applyPortraitTilt();
    portraitFrameRef.current = requestAnimationFrame(runPortraitLoop);
  };

  const startPortraitLoop = () => {
    if (reducedMotionRef.current) return;
    if (!portraitFrameRef.current) {
      portraitFrameRef.current = requestAnimationFrame(runPortraitLoop);
    }
  };

  const handlePortraitPointerMove = (event) => {
    if (reducedMotionRef.current) return;

    const node = portraitRef.current;
    if (!node) return;

    const rect = node.getBoundingClientRect();
    const x = Math.min(Math.max((event.clientX - rect.left) / rect.width, 0), 1);
    const y = Math.min(Math.max((event.clientY - rect.top) / rect.height, 0), 1);

    portraitTargetRef.current = {
      rx: (0.5 - y) * 9,
      ry: (x - 0.5) * 13,
      mx: x * 100,
      my: y * 100,
    };

    node.classList.add("is-tilting");
    startPortraitLoop();
  };

  const handlePortraitPointerDown = (event) => {
    const node = portraitRef.current;
    if (!node) return;

    node.classList.add("has-interacted");
    handlePortraitPointerMove(event);
  };

  const resetPortraitTilt = () => {
    const node = portraitRef.current;
    if (!node) return;

    portraitTargetRef.current = { rx: 0, ry: 0, mx: 50, my: 50 };
    node.classList.remove("is-tilting");
    startPortraitLoop();
  };

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
            <div
              className="hero-portrait-scene relative w-full"
              style={{
                "--accent": currentTheme.primary,
                "--accent-rgb": currentTheme.primaryRgb,
              }}
            >
              <div
                ref={portraitRef}
                onPointerDown={handlePortraitPointerDown}
                onPointerMove={handlePortraitPointerMove}
                onPointerUp={resetPortraitTilt}
                onPointerLeave={resetPortraitTilt}
                onPointerCancel={resetPortraitTilt}
                className="hero-portrait-tilt relative w-full"
              >
                {/* Ambient aura */}
                <div
                  aria-hidden="true"
                  className="hero-portrait-aura"
                  style={{
                    background: `radial-gradient(circle, ${currentTheme.primary}66 0%, transparent 68%)`,
                  }}
                />

                {/* Layered orbit frames */}
                <div
                  aria-hidden="true"
                  className="hero-portrait-ring hero-portrait-ring--outer"
                  style={{ borderColor: `${currentTheme.primary}3D` }}
                >
                  <span
                    className="hero-portrait-ring-dot"
                    style={{ backgroundColor: currentTheme.primary }}
                  />
                </div>
                <div
                  aria-hidden="true"
                  className="hero-portrait-ring hero-portrait-ring--inner"
                  style={{ borderColor: `${currentTheme.primary}26` }}
                />

                {/* Floating tech badges */}
                {techBadges.map((badge) => (
                  <span
                    key={badge.name}
                    aria-hidden="true"
                    className={`hero-float-chip ${badge.position} ${
                      darkMode
                        ? "bg-gray-900/75 border-gray-700/70 text-gray-100"
                        : "bg-white/85 border-gray-200 text-gray-800"
                    }`}
                    style={{ "--cz": badge.z, animationDelay: badge.delay }}
                  >
                    <img
                      src={badge.icon}
                      alt=""
                      className="h-4 w-4 rounded object-contain sm:h-5 sm:w-5"
                      loading="lazy"
                    />
                    <span className="hidden sm:inline">{badge.name}</span>
                  </span>
                ))}

                {/* Portrait card */}
                <div
                  className={`hero-portrait-card relative overflow-hidden rounded-[2rem] border p-1.5 ${
                    darkMode
                      ? "bg-gray-900/70 shadow-[0_30px_90px_rgba(0,0,0,0.55)]"
                      : "bg-white/80 shadow-[0_30px_80px_rgba(15,23,42,0.16)]"
                  }`}
                  style={{
                    borderColor: darkMode
                      ? `${currentTheme.primary}30`
                      : "rgba(15, 23, 42, 0.08)",
                  }}
                >
                  <img
                    src={hero}
                    alt="MD SHAHID"
                    width={1122}
                    height={1402}
                    loading="eager"
                    fetchPriority="high"
                    className="hero-portrait-img relative z-10 aspect-[4/5] w-full rounded-[1.65rem] object-cover"
                  />

                  <div aria-hidden="true" className="hero-portrait-glare" />
                  <div aria-hidden="true" className="hero-portrait-sheen" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;