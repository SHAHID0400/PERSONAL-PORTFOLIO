import { useEffect, useRef, useState } from "react";
import {
  Sparkles,
  Palette,
  Code2,
  Server,
  CheckCircle2,
  Layers,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const workflowSteps = [
  {
    id: "01",
    title: "Discover",
    icon: Sparkles,
    description:
      "Clarify the goal, audience, and constraints before writing a single line of code.",
    tags: ["Research", "Scoping"],
  },
  {
    id: "02",
    title: "Design",
    icon: Palette,
    description:
      "Shape the architecture and a clean, accessible interface system that scales.",
    tags: ["UI/UX", "Architecture"],
  },
  {
    id: "03",
    title: "Build",
    icon: Code2,
    description:
      "Develop modular React front-ends and dependable Node.js APIs with clean code.",
    tags: ["React", "Node.js"],
  },
  {
    id: "04",
    title: "Launch",
    icon: Server,
    description:
      "Test, optimise, deploy, and monitor the product for real-world performance.",
    tags: ["Deploy", "Optimise"],
  },
];

const stack = [
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "Tailwind CSS",
  "REST APIs",
];

const sparks = Array.from({ length: 14 }, (_, i) => ({
  left: `${(i * 37 + 8) % 92}%`,
  top: `${56 + ((i * 17) % 38)}%`,
  size: 3 + (i % 3),
  duration: 7 + (i % 5),
  delay: (i * 0.65) % 6,
}));

const TechStack3D = () => {
  const { currentTheme, darkMode } = useTheme();
  const cardRef = useRef(null);
  const sceneRef = useRef(null);
  const frameRef = useRef(0);
  const reducedMotionRef = useRef(false);
  const [isVisible, setIsVisible] = useState(false);

  // Target / current values are lerped every frame for a springy 3D tilt.
  const targetRef = useRef({ rx: 0, ry: 0, mx: 50, my: 50 });
  const currentRef = useRef({ rx: 0, ry: 0, mx: 50, my: 50 });

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => {
      reducedMotionRef.current = media.matches;
    };

    updatePreference();
    media.addEventListener?.("change", updatePreference);
    return () => media.removeEventListener?.("change", updatePreference);
  }, []);

  useEffect(() => {
    const node = sceneRef.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(
    () => () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    },
    []
  );

  const applyTilt = () => {
    const card = cardRef.current;
    if (!card) return;

    const c = currentRef.current;
    card.style.setProperty("--rx", `${c.rx.toFixed(2)}deg`);
    card.style.setProperty("--ry", `${c.ry.toFixed(2)}deg`);
    card.style.setProperty("--mx", `${c.mx.toFixed(2)}%`);
    card.style.setProperty("--my", `${c.my.toFixed(2)}%`);
  };

  const runTiltLoop = () => {
    const target = targetRef.current;
    const current = currentRef.current;
    const ease = 0.14;

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
      applyTilt();
      frameRef.current = 0;
      return;
    }

    applyTilt();
    frameRef.current = requestAnimationFrame(runTiltLoop);
  };

  const startTiltLoop = () => {
    if (reducedMotionRef.current) return;
    if (!frameRef.current) {
      frameRef.current = requestAnimationFrame(runTiltLoop);
    }
  };

  const handlePointerMove = (event) => {
    if (reducedMotionRef.current) return;

    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = Math.min(Math.max((event.clientX - rect.left) / rect.width, 0), 1);
    const y = Math.min(Math.max((event.clientY - rect.top) / rect.height, 0), 1);

    targetRef.current = {
      rx: (0.5 - y) * 12,
      ry: (x - 0.5) * 16,
      mx: x * 100,
      my: y * 100,
    };

    card.classList.add("is-tilting");
    startTiltLoop();
  };

  const handlePointerDown = (event) => {
    const card = cardRef.current;
    if (!card) return;

    // Stop the idle 3D sway once the user takes control (touch devices).
    card.classList.add("has-interacted");
    handlePointerMove(event);
  };

  const resetTilt = () => {
    const card = cardRef.current;
    if (!card) return;

    targetRef.current = { rx: 0, ry: 0, mx: 50, my: 50 };
    card.classList.remove("is-tilting");
    startTiltLoop();
  };

  return (
    <section
      id="tech-stack"
      aria-labelledby="tech-stack-heading"
      className="techstack-section relative py-20 sm:py-28 bg-transparent overflow-hidden"
      style={{
        "--accent": currentTheme.primary,
        "--accent-rgb": currentTheme.primaryRgb,
      }}
    >
      {/* Ambient 3D decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="techstack-aurora" />
        <div className="techstack-grid" />
        <div className="techstack-ring techstack-ring--lg" />
        <div className="techstack-ring techstack-ring--sm" />
        {sparks.map((spark, index) => (
          <span
            key={index}
            className="techstack-spark"
            style={{
              left: spark.left,
              top: spark.top,
              width: `${spark.size}px`,
              height: `${spark.size}px`,
              "--dur": `${spark.duration}s`,
              "--delay": `${spark.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="container max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        {/* Section heading */}
        <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-4 border shadow-sm"
            style={{
              backgroundColor: darkMode
                ? `${currentTheme.primary}18`
                : `${currentTheme.primary}12`,
              borderColor: `${currentTheme.primary}40`,
              color: currentTheme.primary,
            }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="tracking-wide uppercase text-[11px]">
              My Workflow
            </span>
          </div>

          <h2
            id="tech-stack-heading"
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 ${
              darkMode ? "text-white" : "text-gray-950"
            }`}
          >
            From Idea to{" "}
            <span
              className={`text-transparent bg-clip-text bg-gradient-to-r ${currentTheme.gradientText}`}
            >
              Launch
            </span>
          </h2>
          <p
            className={`text-sm sm:text-base max-w-2xl mx-auto leading-relaxed ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            A focused four-step workflow powered by the modern MERN stack —
            built to move fast without compromising quality.
          </p>
        </div>

        {/* Interactive 3D tilt card */}
        <div
          ref={sceneRef}
          className={`techstack-scene relative ${isVisible ? "is-visible" : ""}`}
        >
          {/* Rotating 3D orbit discs behind the card */}
          <div aria-hidden="true" className="techstack-halo techstack-halo--outer">
            <span className="techstack-halo-dot" />
          </div>
          <div aria-hidden="true" className="techstack-halo techstack-halo--inner">
            <span className="techstack-halo-dot" />
          </div>

          <article
            ref={cardRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={resetTilt}
            onPointerLeave={resetTilt}
            onPointerCancel={resetTilt}
            className={`techstack-tilt relative z-10 rounded-[2rem] border p-6 sm:p-8 lg:p-10 ${
              darkMode
                ? "shadow-[0_30px_120px_rgba(0,0,0,0.55)]"
                : "shadow-[0_30px_90px_rgba(15,23,42,0.10)]"
            }`}
            style={{
              backgroundColor: darkMode
                ? `${currentTheme.surfaceDark}E6`
                : "rgba(255, 255, 255, 0.92)",
              borderColor: darkMode
                ? `${currentTheme.primary}26`
                : "rgba(15, 23, 42, 0.08)",
            }}
          >
            {/* Cursor-following glare + holographic sweep */}
            <div
              aria-hidden="true"
              className="techstack-glare absolute inset-0 rounded-[2rem] pointer-events-none"
            />
            <div
              aria-hidden="true"
              className="techstack-beam absolute inset-0 rounded-[2rem] pointer-events-none"
            />

            {/* HUD corner brackets */}
            <span aria-hidden="true" className="techstack-corner techstack-corner--tl" />
            <span aria-hidden="true" className="techstack-corner techstack-corner--tr" />
            <span aria-hidden="true" className="techstack-corner techstack-corner--bl" />
            <span aria-hidden="true" className="techstack-corner techstack-corner--br" />

            {/* Card header */}
            <div
              className="relative z-10 flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-8"
              style={{ transform: "translateZ(40px)" }}
            >
              <div>
                <p
                  className="text-[11px] font-bold uppercase tracking-[0.2em]"
                  style={{ color: currentTheme.primary }}
                >
                  Development Workflow
                </p>
                <h3
                  className={`mt-2 text-2xl sm:text-3xl font-bold tracking-tight ${
                    darkMode ? "text-white" : "text-gray-950"
                  }`}
                >
                  Four steps. One clean build.
                </h3>
              </div>

              <span
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold border self-start ${currentTheme.tagBg}`}
              >
                <span className="relative flex h-2 w-2">
                  <span
                    className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
                    style={{ backgroundColor: currentTheme.primary }}
                  />
                  <span
                    className="relative inline-flex h-2 w-2 rounded-full"
                    style={{ backgroundColor: currentTheme.primary }}
                  />
                </span>
                Open for projects
              </span>
            </div>

            {/* Workflow steps */}
            <div
              className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
              style={{ transformStyle: "preserve-3d" }}
            >
              {workflowSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.id}
                    className={`techstack-step relative flex h-full flex-col rounded-2xl border p-4 sm:p-5 ${
                      darkMode
                        ? "bg-gray-950/60 border-gray-800"
                        : "bg-gray-50/80 border-gray-200"
                    }`}
                    style={{
                      "--z": `${14 + index * 5}px`,
                      "--i": index,
                    }}
                  >
                    <span aria-hidden="true" className="techstack-step-num">
                      {step.id}
                    </span>
                    <span aria-hidden="true" className="techstack-step-scan" />

                    <div className="relative flex items-center justify-between mb-4">
                      <div
                        className="techstack-float"
                        style={{ animationDelay: `${index * 0.4}s` }}
                      >
                        <div
                          className="techstack-step-icon flex h-11 w-11 items-center justify-center rounded-xl border"
                          style={{
                            backgroundColor: `rgba(var(--accent-rgb), 0.1)`,
                            borderColor: `rgba(var(--accent-rgb), 0.28)`,
                            color: currentTheme.primary,
                          }}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                      </div>
                      <span
                        className="font-mono text-[11px] tracking-[0.2em]"
                        style={{ color: `${currentTheme.primary}99` }}
                      >
                        {step.id}
                      </span>
                    </div>

                    <h4
                      className={`relative z-10 text-base font-bold ${
                        darkMode ? "text-white" : "text-gray-950"
                      }`}
                    >
                      {step.title}
                    </h4>
                    <p
                      className={`relative z-10 mt-2 flex-1 text-xs sm:text-[13px] leading-relaxed ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {step.description}
                    </p>

                    <div className="relative z-10 mt-4 flex flex-wrap gap-1.5">
                      {step.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`rounded-md border px-2 py-0.5 text-[10px] font-semibold ${currentTheme.tagBg}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Stack footer */}
            <div
              className="relative z-10 mt-8 sm:mt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t pt-6"
              style={{
                transform: "translateZ(28px)",
                borderColor: darkMode
                  ? "rgba(75, 85, 99, 0.35)"
                  : "rgba(229, 231, 235, 0.9)",
              }}
            >
              <div className="flex items-center gap-2">
                <Layers
                  className="h-4 w-4"
                  style={{ color: currentTheme.primary }}
                />
                <span
                  className={`text-[11px] font-bold uppercase tracking-wider ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Stack I build with
                </span>
              </div>

              <div className="flex flex-wrap gap-2" style={{ transformStyle: "preserve-3d" }}>
                {stack.map((tech) => (
                  <span
                    key={tech}
                    className={`techstack-chip rounded-full border px-3 py-1 text-[11px] font-semibold ${currentTheme.tagBg}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Accessible status for reduced-motion users */}
            <span className="sr-only">
              <CheckCircle2 aria-hidden="true" /> Interactive workflow card:
              Discover, Design, Build, Launch.
            </span>
          </article>
        </div>
      </div>
    </section>
  );
};

export default TechStack3D;
