import React, { useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";

const ParticlesBackground = () => {
  const { currentTheme, darkMode } = useTheme();
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
      radius: 125,
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const colorRgb = currentTheme.primaryRgb;
    const particleCount = Math.min(Math.floor((width * height) / 16000), 75);
    const particles = [];

    class Particle {
      constructor(x, y, isClickSpawn = false) {
        this.x = x !== undefined ? x : Math.random() * width;
        this.y = y !== undefined ? y : Math.random() * height;
        this.size = Math.random() * 1.3 + 0.9;

        const speedMultiplier = isClickSpawn ? 0.6 : 0.35;
        this.speedX = (Math.random() - 0.5) * speedMultiplier;
        this.speedY = (Math.random() - 0.5) * speedMultiplier;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.hypot(dx, dy);

          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            const dirX = dx / distance;
            const dirY = dy / distance;
            this.x -= dirX * force * 1.3;
            this.y -= dirY * force * 1.3;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${colorRgb}, ${darkMode ? 0.65 : 0.55})`;
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const handleMouseDown = (e) => {
      for (let i = 0; i < 4; i++) {
        const offsetAngle = Math.random() * Math.PI * 2;
        const offsetDist = Math.random() * 20;
        particles.push(
          new Particle(
            e.clientX + Math.cos(offsetAngle) * offsetDist,
            e.clientY + Math.sin(offsetAngle) * offsetDist,
            true
          )
        );
      }
      if (particles.length > particleCount + 20) {
        particles.splice(0, 4);
      }
    };

    window.addEventListener("mousedown", handleMouseDown);

    const connect = () => {
      const maxDistance = 110;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * (darkMode ? 0.22 : 0.16);
            ctx.strokeStyle = `rgba(${colorRgb}, ${alpha})`;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }

        if (mouse.x !== null && mouse.y !== null) {
          const dxMouse = particles[i].x - mouse.x;
          const dyMouse = particles[i].y - mouse.y;
          const distMouse = Math.hypot(dxMouse, dyMouse);

          if (distMouse < mouse.radius) {
            const alpha = (1 - distMouse / mouse.radius) * (darkMode ? 0.4 : 0.3);
            ctx.strokeStyle = `rgba(${colorRgb}, ${alpha})`;
            ctx.lineWidth = 0.9;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      connect();

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mousedown", handleMouseDown);
      cancelAnimationFrame(animationFrameId);
    };
  }, [currentTheme, darkMode]);

  return (
    <div
      className="fixed inset-0 pointer-events-none transition-colors duration-700"
      style={{
        zIndex: 0,
        backgroundColor: darkMode ? currentTheme.bgDark : currentTheme.bgLight,
      }}
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};

export default ParticlesBackground;