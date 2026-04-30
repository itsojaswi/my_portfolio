// components/About.tsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stats = [
  { value: "1+", label: "yrs_experience", color: "text-violet-400" },
  { value: "10+", label: "tech_skills", color: "text-cyan-400" },
  { value: "3+", label: "certifications", color: "text-pink-400" },
  { value: "∞", label: "learning_rate", color: "text-amber-400" },
];

const profileData = [
  { key: "name", value: "Ojaswi Khanal" },
  { key: "role", value: "Full Stack Developer" },
  { key: "location", value: "Kathmandu, Nepal 🌏" },
  { key: "status", value: "OPEN_TO_WORK" },
  { key: "education", value: "BSc(Hons.) IT · Herald" },
  { key: "focus", value: "Web · Cloud · APIs" },
];

const skills = [
  "React.js",
  "Node.js",
  "NestJS",
  "PostgreSQL",
  "AWS",
  "Docker",
  "TypeScript",
  "REST APIs",
];

function Typewriter({
  text,
  delay = 0,
  speed = 22,
}: {
  text: string;
  delay?: number;
  speed?: number;
}) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  useEffect(() => {
    if (!started) return;
    let i = 0;
    setDisplayed("");
    const id = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [started, text, speed]);
  return (
    <span>
      {displayed}
      {displayed.length < text.length && (
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.6, repeat: Infinity }}
          className="inline-block w-[2px] h-[1em] bg-current align-middle ml-px"
        />
      )}
    </span>
  );
}

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="about" className="relative py-10 px-6 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(124,58,237,1) 1px,transparent 1px),linear-gradient(90deg,rgba(124,58,237,1) 1px,transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div
        className="absolute top-0 right-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[500px] lg:h-[500px] rounded-full pointer-events-none opacity-10 blur-[120px]"
        style={{
          background: "radial-gradient(circle,#7c3aed,transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] lg:w-[400px] lg:h-[400px] rounded-full pointer-events-none opacity-[0.07] blur-[100px]"
        style={{
          background: "radial-gradient(circle,#06b6d4,transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-16 font-mono"
        >
          <span className="text-violet-500 text-sm">01.</span>
          <span className="text-white/20 text-sm">~/portfolio/</span>
          <span className="text-cyan-400 text-sm font-semibold tracking-widest">
            about_me
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-violet-500/20 to-transparent" />
          <span className="text-white/15 text-xs hidden sm:block">
            ESC to skip
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* LEFT: JSON card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="border border-white/[0.08] rounded-sm bg-white/[0.015] overflow-hidden">
              <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/[0.07] bg-white/[0.02]">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                <span className="ml-2 font-mono text-[11px] text-white/22 tracking-widest">
                  profile.json
                </span>
              </div>
              <div className="p-5 font-mono text-[13px] leading-[1.9]">
                <div className="text-white/28 mb-1">{"{"}</div>
                {profileData.map((item, i) => (
                  <motion.div
                    key={item.key}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                    className="flex gap-2 pl-4"
                  >
                    <span className="text-violet-400/70">
                      &quot;{item.key}&quot;
                    </span>
                    <span className="text-white/20">:</span>
                    <span
                      className={
                        item.key === "status"
                          ? "text-amber-400"
                          : "text-cyan-300/80"
                      }
                    >
                      {inView && (
                        <Typewriter
                          text={`"${item.value}"`}
                          delay={350 + i * 90}
                          speed={22}
                        />
                      )}
                    </span>
                    {i < profileData.length - 1 && (
                      <span className="text-white/20">,</span>
                    )}
                  </motion.div>
                ))}
                <div className="text-white/28 mt-1">{"}"}</div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="mt-5"
            >
              <div className="font-mono text-[11px] text-white/22 tracking-widest mb-3">
                // tech_stack
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 1 + i * 0.06 }}
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className="font-mono text-xs px-3 py-1.5 rounded-sm border cursor-default transition-all duration-200"
                    style={{
                      borderColor:
                        hoveredSkill === skill
                          ? "rgba(124,58,237,0.7)"
                          : "rgba(255,255,255,0.09)",
                      color:
                        hoveredSkill === skill
                          ? "#c4b5fd"
                          : "rgba(255,255,255,0.35)",
                      background:
                        hoveredSkill === skill
                          ? "rgba(124,58,237,0.1)"
                          : "transparent",
                      transform:
                        hoveredSkill === skill ? "translateY(-2px)" : "none",
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT: bio + stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <div className="border-l-2 border-violet-500/30 pl-6">
              <div className="font-mono text-[11px] text-violet-500/55 tracking-widest mb-4">
                /* about */
              </div>
              <p
                className="font-body text-white/58 text-base leading-[1.85]"
                style={{ fontWeight: 300 }}
              >
                I&apos;m a{" "}
                <span className="text-cyan-300 font-medium">
                  Full Stack Developer
                </span>{" "}
                who builds production-grade web apps — from pixel-perfect UIs to
                scalable REST APIs and cloud infrastructure.
              </p>
              <p
                className="font-body text-white/42 text-base leading-[1.85] mt-4"
                style={{ fontWeight: 300 }}
              >
                1 year at{" "}
                <span className="text-violet-300">Genese Solution</span>{" "}
                building multi-tenant SaaS with NestJS + PostgreSQL. 4 months at{" "}
                <span className="text-violet-300">cloudLaya</span> shipping
                CI/CD pipelines, Docker, and AWS infrastructure.
              </p>
            </div>

            <div>
              <div className="font-mono text-[11px] text-white/20 tracking-widest mb-4">
                $ cat stats.log
              </div>
              <div className="grid grid-cols-2 gap-3">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.45, delay: 0.5 + i * 0.1 }}
                    className="group border border-white/[0.07] rounded-sm px-5 py-4 hover:border-violet-500/30 hover:bg-violet-500/[0.04] transition-all duration-300"
                  >
                    <div
                      className={`font-display text-3xl font-black mb-1 ${stat.color}`}
                    >
                      {stat.value}
                    </div>
                    <div className="font-mono text-[11px] text-white/22 tracking-wide">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1.1 }}
              className="flex items-center gap-3 font-mono text-xs text-white/22 border-t border-white/[0.07] pt-5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
              <span>
                Currently available for full-time roles &amp; freelance projects
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
