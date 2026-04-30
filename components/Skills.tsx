"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  Database,
  GraduationCap,
  Medal,
  Palette,
  Settings,
  Trophy,
} from "lucide-react";
import { useInView } from "react-intersection-observer";

const skillCategories = [
  {
    category: "Frontend",
    icon: Palette,
    accent: "violet",
    skills: [
      "React.js",
      "JavaScript",
      "HTML & CSS",
      "Redux / Zustand",
      "Tanstack Query",
    ],
  },
  {
    category: "Backend",
    icon: Settings,
    accent: "cyan",
    skills: ["Node.js", "NestJS", "Express.js", "REST APIs", "JWT / RBAC"],
  },
  {
    category: "Database",
    icon: Database,
    accent: "pink",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "TypeORM", "Sequelize"],
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    accent: "green",
    skills: ["AWS EC2/S3/RDS", "Docker", "GitHub Actions", "CI/CD", "VPC"],
  },
];

const softSkills = [
  "Problem Solving",
  "Teamwork",
  "Communication",
  "Adaptability",
  "Time Management",
  "Willingness to Learn",
];

const certs = [
  {
    name: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    year: "2023",
    icon: Trophy,
  },
  {
    name: "Foundational C# with Microsoft",
    issuer: "freeCodeCamp",
    year: "",
    icon: Medal,
  },
  {
    name: "Web Application Development",
    issuer: "Herald College Kathmandu",
    year: "",
    icon: GraduationCap,
  },
];

const accentMap: Record<
  string,
  { dot: string; icon: string; hover: string; iconColor: string }
> = {
  violet: {
    dot: "bg-violet-500",
    icon: "border-violet-500/30 bg-violet-500/10",
    hover: "hover:border-violet-500/30 hover:bg-violet-500/[0.04]",
    iconColor: "text-violet-400",
  },
  cyan: {
    dot: "bg-cyan-500",
    icon: "border-cyan-500/25 bg-cyan-500/10",
    hover: "hover:border-cyan-500/25 hover:bg-cyan-500/[0.03]",
    iconColor: "text-cyan-400",
  },
  pink: {
    dot: "bg-pink-400",
    icon: "border-pink-500/25 bg-pink-500/10",
    hover: "hover:border-pink-500/25 hover:bg-pink-500/[0.03]",
    iconColor: "text-pink-400",
  },
  green: {
    dot: "bg-emerald-500",
    icon: "border-emerald-500/25 bg-emerald-500/10",
    hover: "hover:border-emerald-500/25 hover:bg-emerald-500/[0.03]",
    iconColor: "text-emerald-400",
  },
};

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="skills" className="relative py-10 px-6">
      <div
        className="absolute top-0 left-0 w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] lg:w-[400px] lg:h-[400px] rounded-full pointer-events-none opacity-[0.05] blur-[120px]"
        style={{
          background: "radial-gradient(circle,#7c3aed,transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[120px] h-[120px] sm:w-[200px] sm:h-[200px] lg:w-[300px] lg:h-[300px] rounded-full pointer-events-none opacity-[0.04] blur-[100px]"
        style={{
          background: "radial-gradient(circle,#06b6d4,transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-14 font-mono"
        >
          <span className="text-violet-500 text-sm">03.</span>
          <span className="text-white/18 text-sm">~/portfolio/</span>
          <span className="text-cyan-400 text-sm tracking-widest">
            tech_arsenal
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-violet-500/20 to-transparent" />
        </motion.div>

        {/* Skill grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {skillCategories.map((cat, i) => {
            const a = accentMap[cat.accent];
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`border border-white/[0.07] rounded-sm bg-white/[0.015] p-5 transition-all duration-300 ${a.hover}`}
              >
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/[0.06]">
                  <div
                    className={`w-7 h-7 rounded-sm border flex items-center justify-center flex-shrink-0 ${a.icon} ${a.iconColor}`}
                  >
                    <cat.icon size={13} />
                  </div>
                  <span className="font-mono text-[11px] text-white/50 tracking-widest">
                    {cat.category}
                  </span>
                </div>
                <div className="space-y-2">
                  {cat.skills.map((skill, j) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -8 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: 0.2 + i * 0.08 + j * 0.04,
                      }}
                      className="flex items-center gap-2"
                    >
                      <span
                        className={`w-1 h-1 rounded-full flex-shrink-0 ${a.dot}`}
                      />
                      <span className="font-mono text-[11px] text-white/55">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="h-px bg-white/[0.05] mb-8" />

        {/* Soft skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-8"
        >
          <p className="font-mono text-[10px] text-white/20 tracking-[0.15em] mb-4">
            // soft_skills
          </p>
          <div className="flex flex-wrap gap-2">
            {softSkills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
                className="font-mono text-xs px-3.5 py-1.5 border border-white/[0.08] text-white/35 rounded-sm cursor-default hover:border-violet-500/40 hover:text-violet-300/70 hover:bg-violet-500/[0.06] transition-all duration-200"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <div className="h-px bg-white/[0.05] mb-8" />

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="font-mono text-[10px] text-white/20 tracking-[0.15em] mb-4">
            // certifications
          </p>
          <div className="grid sm:grid-cols-3 gap-3">
            {certs.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.7 + i * 0.1 }}
                className="border border-white/[0.07] rounded-sm p-4 flex gap-3 items-start hover:border-violet-500/30 hover:bg-violet-500/[0.04] transition-all duration-300"
              >
                <cert.icon
                  size={13}
                  className="text-violet-400 flex-shrink-0 mt-0.5"
                />
                <div>
                  <p
                    className="font-body text-xs text-white/65 leading-relaxed mb-1.5"
                    style={{ fontWeight: 300 }}
                  >
                    {cert.name}
                  </p>
                  <p className="font-mono text-[10px] text-violet-400 tracking-wide">
                    {cert.issuer}
                  </p>
                  {cert.year && (
                    <p className="font-mono text-[10px] text-white/22 mt-1">
                      {cert.year}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
