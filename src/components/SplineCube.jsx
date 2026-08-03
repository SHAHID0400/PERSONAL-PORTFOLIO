import React from "react";

const SplineCube = ({ darkMode }) => {
  return (
    <div className="w-full h-[120px] sm:h-[150px] flex items-center justify-center relative my-0">
      <div
        className={`absolute w-36 h-36 rounded-full blur-3xl pointer-events-none transition-colors duration-300 ${
          darkMode ? "bg-teal-500/20" : "bg-emerald-400/25"
        }`}
      />

      {/* CSS 3D Cube Container */}
      <div className="relative w-24 h-24 sm:w-28 sm:h-28 [transform-style:preserve-3d] animate-[spin3d_12s_infinite_linear]">
        {/* Front Face: Next.js */}
        <div
          className={`absolute inset-0 border-2 border-emerald-500/80 rounded-xl flex items-center justify-center font-bold text-xs sm:text-sm shadow-lg backdrop-blur-md [transform:translateZ(48px)] sm:[transform:translateZ(56px)] transition-all ${
            darkMode
              ? "bg-gray-900/90 text-teal-300 shadow-[0_0_20px_rgba(20,184,166,0.25)]"
              : "bg-white/90 text-emerald-700 shadow-md"
          }`}
        >
          Next.js
        </div>

        {/* Back Face: MERN */}
        <div
          className={`absolute inset-0 border-2 border-teal-500/80 rounded-xl flex items-center justify-center font-bold text-xs sm:text-sm shadow-lg backdrop-blur-md [transform:rotateY(180deg)_translateZ(48px)] sm:[transform:rotateY(180deg)_translateZ(56px)] transition-all ${
            darkMode
              ? "bg-gray-900/90 text-white"
              : "bg-emerald-50/95 text-gray-900"
          }`}
        >
          MERN
        </div>

        {/* Right Face: Full Stack */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 border-2 border-amber-300 rounded-xl flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-md backdrop-blur-md [transform:rotateY(90deg)_translateZ(48px)] sm:[transform:rotateY(90deg)_translateZ(56px)]">
          Full Stack
        </div>

        {/* Left Face: UI/UX */}
        <div
          className={`absolute inset-0 border-2 border-emerald-500/80 rounded-xl flex items-center justify-center font-bold text-xs sm:text-sm shadow-lg backdrop-blur-md [transform:rotateY(-90deg)_translateZ(48px)] sm:[transform:rotateY(-90deg)_translateZ(56px)] transition-all ${
            darkMode
              ? "bg-gray-900/90 text-teal-300"
              : "bg-white/95 text-emerald-700"
          }`}
        >
          UI/UX
        </div>

        {/* Top Face: React */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-600 border-2 border-teal-400 rounded-xl flex items-center justify-center text-white font-bold text-xs sm:text-sm backdrop-blur-md [transform:rotateX(90deg)_translateZ(48px)] sm:[transform:rotateX(90deg)_translateZ(56px)]">
          React
        </div>

        {/* Bottom Face: Developer */}
        <div
          className={`absolute inset-0 border-2 border-teal-500/80 rounded-xl flex items-center justify-center font-bold text-xs sm:text-sm backdrop-blur-md [transform:rotateX(-90deg)_translateZ(48px)] sm:[transform:rotateX(-90deg)_translateZ(56px)] transition-all ${
            darkMode
              ? "bg-gray-900/90 text-teal-300"
              : "bg-emerald-100/80 text-emerald-800"
          }`}
        >
          Developer
        </div>
      </div>

      <style>{`
        @keyframes spin3d {
          0% { transform: rotateX(0deg) rotateY(0deg); }
          50% { transform: rotateX(180deg) rotateY(180deg); }
          100% { transform: rotateX(360deg) rotateY(360deg); }
        }
      `}</style>
    </div>
  );
};

export default SplineCube;
