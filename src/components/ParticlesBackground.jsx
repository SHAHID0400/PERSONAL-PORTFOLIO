import React from "react";

const ParticlesBackground = ({ darkMode }) => {
  return (
    <div
      className={`fixed inset-0 pointer-events-none -z-10 transition-colors duration-500 ${
        darkMode ? "bg-[#0b0f17]" : "bg-[#f8fafc]"
      }`}
    >
      {/* Subtle modern soft glow for depth */}
      <div
        className={`absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] blur-[120px] rounded-full pointer-events-none opacity-40 transition-opacity duration-500 ${
          darkMode
            ? "bg-emerald-500/10"
            : "bg-emerald-400/15"
        }`}
      />
    </div>
  );
};

export default ParticlesBackground;