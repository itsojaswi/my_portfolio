"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  twinkleSpeed: number;
  twinkleOffset: number;
  color: string;
}

interface Meteor {
  x: number;
  y: number;
  length: number;
  speed: number;
  opacity: number;
  active: boolean;
  angle: number;
}

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const colors = ["#ffffff", "#E0D8FF", "#C4B5FD", "#67E8F9", "#F9A8D4"];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Generate stars
    const stars: Star[] = Array.from({ length: 300 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.8 + 0.2,
      opacity: Math.random() * 0.7 + 0.3,
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      twinkleOffset: Math.random() * Math.PI * 2,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    // Nebula clusters
    const nebulae = [
      { x: 0.2, y: 0.3, radius: 300, color: "rgba(124, 58, 237, 0.06)" },
      { x: 0.7, y: 0.2, radius: 250, color: "rgba(6, 182, 212, 0.05)" },
      { x: 0.5, y: 0.7, radius: 350, color: "rgba(232, 121, 249, 0.04)" },
      { x: 0.85, y: 0.75, radius: 200, color: "rgba(124, 58, 237, 0.07)" },
    ];

    // Meteors
    const meteors: Meteor[] = Array.from({ length: 5 }, () => ({
      x: Math.random() * canvas.width * 2,
      y: -50,
      length: Math.random() * 100 + 50,
      speed: Math.random() * 6 + 4,
      opacity: 0,
      active: false,
      angle: 215 * (Math.PI / 180),
    }));

    let meteorTimer = 0;
    const spawnMeteor = () => {
      const m = meteors.find((m) => !m.active);
      if (m) {
        m.x = Math.random() * canvas.width + canvas.height;
        m.y = Math.random() * -canvas.height * 0.5;
        m.length = Math.random() * 120 + 60;
        m.speed = Math.random() * 8 + 5;
        m.opacity = 1;
        m.active = true;
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.01;

      // Draw nebulae
      nebulae.forEach((n) => {
        const gradient = ctx.createRadialGradient(
          n.x * canvas.width,
          n.y * canvas.height,
          0,
          n.x * canvas.width,
          n.y * canvas.height,
          n.radius
        );
        gradient.addColorStop(0, n.color);
        gradient.addColorStop(1, "transparent");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      // Draw stars with twinkling
      stars.forEach((star) => {
        const twinkle =
          Math.sin(time * star.twinkleSpeed * 60 + star.twinkleOffset) * 0.4 + 0.6;
        ctx.save();
        ctx.globalAlpha = star.opacity * twinkle;
        ctx.fillStyle = star.color;
        ctx.shadowBlur = star.radius > 1.2 ? 6 : 0;
        ctx.shadowColor = star.color;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Meteor logic
      meteorTimer++;
      if (meteorTimer > 80) {
        meteorTimer = 0;
        if (Math.random() > 0.4) spawnMeteor();
      }

      meteors.forEach((m) => {
        if (!m.active) return;

        ctx.save();
        ctx.globalAlpha = m.opacity;
        const dx = Math.cos(m.angle) * m.length;
        const dy = Math.sin(m.angle) * m.length;
        const gradient = ctx.createLinearGradient(m.x, m.y, m.x - dx, m.y - dy);
        gradient.addColorStop(0, "rgba(255,255,255,0.9)");
        gradient.addColorStop(0.4, "rgba(167,139,250,0.5)");
        gradient.addColorStop(1, "transparent");
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(m.x - dx, m.y - dy);
        ctx.stroke();

        // Glow dot
        ctx.fillStyle = "rgba(255,255,255,0.9)";
        ctx.shadowBlur = 8;
        ctx.shadowColor = "#a78bfa";
        ctx.beginPath();
        ctx.arc(m.x, m.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        m.x += Math.cos(m.angle) * m.speed;
        m.y += Math.sin(m.angle) * m.speed;
        m.opacity -= 0.012;

        if (m.opacity <= 0 || m.y > canvas.height + 100) {
          m.active = false;
        }
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: "linear-gradient(to bottom, #03000A 0%, #070314 40%, #0D0521 100%)" }}
    />
  );
}
