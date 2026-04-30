"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Glitch text hook
function useGlitch(text: string, active: boolean) {
  const chars = "█▓▒░01アイウエオカキクケコ";
  const [displayed, setDisplayed] = useState(text);

  useEffect(() => {
    if (!active) {
      setDisplayed(text);
      return;
    }
    let frame = 0;
    const total = 18;
    const id = setInterval(() => {
      frame++;
      setDisplayed(
        text
          .split("")
          .map((ch, i) => {
            if (ch === " ") return " ";
            const reveal = Math.floor(
              (frame / total) * text.replace(/ /g, "").length,
            );
            const solidIndex = text.slice(0, i).replace(/ /g, "").length;
            if (solidIndex < reveal) return ch;
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join(""),
      );
      if (frame >= total) clearInterval(id);
    }, 50);
    return () => clearInterval(id);
  }, [text, active]);

  return displayed;
}

const bootLines = [
  {
    delay: 0,
    text: "Initializing kernel v3.14.ok...",
    color: "text-violet-400",
  },
  { delay: 300, text: "Loading neural interface...", color: "text-cyan-400" },
  { delay: 600, text: "Mounting: /code /cloud /ui", color: "text-white/40" },
  {
    delay: 900,
    text: "Stack: React · NestJS · PostgreSQL · AWS",
    color: "text-green-400",
  },
  {
    delay: 1500,
    text: "Location: Kathmandu, Nepal",
    color: "text-white/40",
  },
  {
    delay: 1800,
    text: "Status: OPEN TO OPPORTUNITIES",
    color: "text-amber-400",
  },
  {
    delay: 2100,
    text: "Identity resolved. Booting...",
    color: "text-violet-300",
  },
];

const codeFragments = [
  { text: "const dev = new Ojaswi();", x: "13%", y: "14%", delay: 2.5 },
  { text: "await deploy({ cloud: 'AWS' })", x: "60%", y: "9%", delay: 3.0 },
  { text: "git push origin main", x: "72%", y: "76%", delay: 3.5 },
  { text: "docker build -t portfolio .", x: "%", y: "70%", delay: 2.8 },
  { text: "SELECT * FROM skills;", x: "75%", y: "30%", delay: 3.2 },
  { text: "npm run universe", x: "8%", y: "44%", delay: 4.0 },
];

export default function Hero() {
  const [bootDone, setBootDone] = useState(false);
  const [showName, setShowName] = useState(false);
  const [glitchActive, setGlitchActive] = useState(false);
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [scanLine, setScanLine] = useState(0);
  const scanRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const firstName = useGlitch("OJASWI", glitchActive);
  const lastName = useGlitch("KHANAL", glitchActive);

  useEffect(() => {
    bootLines.forEach((line, i) => {
      setTimeout(() => setVisibleLines((p) => [...p, i]), line.delay);
    });
    setTimeout(() => {
      setBootDone(true);
      setTimeout(() => {
        setShowName(true);
        setGlitchActive(true);
      }, 300);
    }, 2600);
  }, []);

  useEffect(() => {
    scanRef.current = setInterval(() => setScanLine((p) => (p + 1) % 100), 30);
    return () => {
      if (scanRef.current) clearInterval(scanRef.current);
    };
  }, []);

  const triggerGlitch = () => {
    setGlitchActive(false);
    setTimeout(() => setGlitchActive(true), 30);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* CRT scanlines */}
      <div
        className="pointer-events-none fixed inset-0 z-20 opacity-[0.025]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 4px)",
        }}
      />

      {/* Moving scan beam */}
      <div
        className="pointer-events-none fixed left-0 right-0 h-[2px] z-20 opacity-15"
        style={{
          top: `${scanLine}%`,
          background:
            "linear-gradient(to right, transparent, rgba(124,58,237,0.8), rgba(6,182,212,0.6), transparent)",
          transition: "top 30ms linear",
        }}
      />

      {/* Nebula core */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-25 pointer-events-none animate-nebula-pulse"
        style={{
          background:
            "radial-gradient(circle, rgba(124,58,237,0.35) 0%, rgba(6,182,212,0.12) 45%, transparent 70%)",
        }}
      />

      {/* Floating code fragments */}
      <AnimatePresence>
        {bootDone &&
          codeFragments.map((frag) => (
            <motion.div
              key={frag.text}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [0, -10, 0] }}
              transition={{
                opacity: { delay: frag.delay, duration: 0.5 },
                y: {
                  delay: frag.delay,
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="absolute hidden lg:block font-mono text-[11px] text-white/30 select-none pointer-events-none"
              style={{ left: frag.x, top: frag.y }}
            >
              {frag.text}
            </motion.div>
          ))}
      </AnimatePresence>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6">
        {/* BOOT TERMINAL */}
        <AnimatePresence>
          {!bootDone && (
            <motion.div
              key="terminal"
              exit={{ opacity: 0, scale: 0.96, filter: "blur(4px)" }}
              transition={{ duration: 0.4 }}
              className="font-mono text-sm space-y-1.5 max-w-xl mx-auto"
            >
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-2 text-white/25 text-xs tracking-widest">
                  ojaswi@portfolio — boot
                </span>
              </div>
              {bootLines.map((line, i) => (
                <AnimatePresence key={i}>
                  {visibleLines.includes(i) && (
                    <motion.div
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={`flex items-start gap-2 ${line.color}`}
                    >
                      <span className="text-violet-500 flex-shrink-0">›</span>
                      <span>{line.text}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              ))}
              <div className="flex items-center gap-2 text-white/30 mt-2">
                <span className="text-violet-500">›</span>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-2 h-4 bg-violet-400"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* MAIN HERO */}
        <AnimatePresence>
          {showName && (
            <motion.div
              key="hero"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              {/* Coords bar */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex items-center justify-center gap-5 font-mono text-[11px] text-white/25 mb-10 tracking-widest flex-wrap"
              >
                <span>27.7172°N · 85.3240°E</span>
                <span className="w-px h-3 bg-white/15" />
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  ONLINE
                </span>
                <span className="w-px h-3 bg-white/15" />
                <span>FULL STACK · KATHMANDU</span>
              </motion.div>

              {/* GIANT NAME with glitch */}
              <div
                className="cursor-crosshair select-none mb-4"
                // onMouseEnter={triggerGlitch}
                onClick={triggerGlitch}
              >
                <motion.div
                  initial={{ clipPath: "inset(0 100% 0 0)" }}
                  animate={{ clipPath: "inset(0 0% 0 0)" }}
                  transition={{
                    duration: 0.65,
                    delay: 0.1,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                >
                  <h1
                    className="font-display font-black leading-[0.82] tracking-tight"
                    style={{
                      fontSize: "clamp(4rem, 14vw, 11rem)",
                      color: "transparent",
                      backgroundImage:
                        "linear-gradient(130deg, #ffffff 0%, #c4b5fd 45%, #7c3aed 100%)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      WebkitTextStroke: "1px rgba(255,255,255,0.06)",
                    }}
                  >
                    {firstName}
                  </h1>
                </motion.div>

                <motion.div
                  initial={{ clipPath: "inset(0 0 0 100%)" }}
                  animate={{ clipPath: "inset(0 0 0 0%)" }}
                  transition={{
                    duration: 0.65,
                    delay: 0.28,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  style={{
                    marginLeft: "clamp(0.5rem, 3vw, 3rem)",
                    marginTop: "-0.05em",
                  }}
                >
                  <h1
                    className="font-display font-black leading-[0.82] tracking-tight"
                    style={{
                      fontSize: "clamp(3.5rem, 13vw, 10rem)",
                      color: "transparent",
                      backgroundImage:
                        "linear-gradient(130deg, #06b6d4 0%, #7c3aed 55%, #e879f9 100%)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      WebkitTextStroke: "1px rgba(255,255,255,0.04)",
                    }}
                  >
                    {lastName}
                  </h1>
                </motion.div>
              </div>

              {/* <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                className="font-mono text-[10px] text-white/18 tracking-[0.3em] mb-10"
              >
                [ HOVER · GLITCH ]
              </motion.p> */}

              {/* Tag row */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-wrap items-center justify-center gap-2 mb-10"
              >
                {[
                  { label: "Full Stack Dev", accent: true },
                  {
                    label: "React · Node.js · NestJS · PostgreSQL",
                    accent: false,
                  },
                  { label: "AWS · Docker · CI/CD", accent: false },
                ].map(({ label, accent }) => (
                  <span
                    key={label}
                    className="font-mono text-xs px-3.5 py-1.5 rounded-sm border tracking-wide"
                    style={{
                      borderColor: accent
                        ? "rgba(124,58,237,0.7)"
                        : "rgba(255,255,255,0.1)",
                      color: accent ? "#c4b5fd" : "rgba(255,255,255,0.35)",
                      background: accent
                        ? "rgba(124,58,237,0.12)"
                        : "transparent",
                    }}
                  >
                    {label}
                  </span>
                ))}
              </motion.div>

              {/* One liner */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="font-body text-white/45 text-base sm:text-lg max-w-md mx-auto leading-relaxed mb-12"
                style={{ fontWeight: 300, letterSpacing: "0.01em" }}
              >
                I turn ideas into full-stack products — building everything from
                rich frontend experiences to real-time, scalable backends.
              </motion.p>

              {/* CTA buttons */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <a
                  href="#experience"
                  className="group flex items-center gap-2 px-7 py-3 font-mono text-sm border border-violet-500/50 text-violet-200/80 hover:border-violet-400 hover:text-violet-100 hover:bg-violet-500/8 transition-all duration-300 rounded-sm tracking-widest"
                >
                  <span className="text-violet-500 group-hover:mr-0.5 transition-all">
                    ./
                  </span>
                  explore
                  <span className="text-violet-400 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                    →
                  </span>
                </a>
                <a
                  href="mailto:ojaswikhanal7182060@gmail.com"
                  className="group flex items-center gap-2 px-7 py-3 font-mono text-sm text-cyan-400/60 hover:text-cyan-300 transition-colors duration-300 tracking-widest"
                >
                  <span className="text-xs opacity-50 group-hover:opacity-100 transition-opacity">
                    ▶
                  </span>
                  send_transmission
                </a>
              </motion.div>

              {/* Scroll chevron */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
              >
                <motion.div
                  animate={{ y: [0, 7, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-5 h-5 border-b-2 border-r-2 border-violet-500/40 rotate-45"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
