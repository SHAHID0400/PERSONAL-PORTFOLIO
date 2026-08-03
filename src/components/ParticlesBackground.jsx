import React, { useEffect, useRef } from "react";

const ParticlesBackground = ({ darkMode }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = {
      x: null,
      y: null,
      radius: 170,
    };

    const updateCoords = (clientX, clientY) => {
      mouse.x = clientX;
      mouse.y = clientY;
    };

    const handleMouseMove = (event) => {
      updateCoords(event.clientX, event.clientY);
    };

    const handleTouchMove = (event) => {
      if (event.touches.length > 0) {
        updateCoords(event.touches[0].clientX, event.touches[0].clientY);
      }
    };

    const handleLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    // 💥 CLICK / TAP SLOW BURST EFFECT
    const handleAddParticles = (clientX, clientY) => {
      const burstCount = 4;
      for (let i = 0; i < burstCount; i++) {
        particles.push({
          x: clientX,
          y: clientY,
          vx: (Math.random() - 0.5) * 0.8, // Slow Speed for Burst
          vy: (Math.random() - 0.5) * 0.8,
          radius: Math.random() * 2 + 1,
        });
      }
      if (particles.length > 110) {
        particles.splice(0, burstCount);
      }
    };

    const handleClick = (e) => {
      handleAddParticles(e.clientX, e.clientY);
    };

    const handleTouchStart = (e) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        updateCoords(touch.clientX, touch.clientY);
        handleAddParticles(touch.clientX, touch.clientY);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleLeave);
    window.addEventListener("click", handleClick);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleLeave);
    window.addEventListener("resize", handleResize);

    // Initial Setup: Velocity 0.4 rakh di hai (super slow and smooth)
    const particleCount = Math.floor((width * height) / 14000);
    const particles = [];

    const particleColor = darkMode ? "rgba(16, 185, 129, " : "rgba(13, 148, 136, ";
    const lineColor = darkMode ? "rgba(16, 185, 129, " : "rgba(13, 148, 136, ";

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4, 
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        // Draw Dot
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${particleColor}0.8)`;
        ctx.fill();

        // Mouse / Touch Line Connection
        if (mouse.x !== null && mouse.y !== null) {
          const dxMouse = p1.x - mouse.x;
          const dyMouse = p1.y - mouse.y;
          const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

          if (distMouse < mouse.radius) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `${lineColor}${0.65 * (1 - distMouse / mouse.radius)})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        }

        // Particle to Particle Webbing
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `${lineColor}${0.3 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleLeave);
      window.removeEventListener("click", handleClick);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleLeave);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [darkMode]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};

export default ParticlesBackground;