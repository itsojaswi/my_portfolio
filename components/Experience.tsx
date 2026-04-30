"use client";

import { motion } from "framer-motion";
import { Cloud, Zap } from "lucide-react";
import { useInView } from "react-intersection-observer";

const experiences = [
  {
    role: "Software Engineer",
    company: "Genese Solution",
    location: "Lalitpur, Nepal",
    duration: "1 Year",
    type: "Full-time",
    accent: "violet",
    icon: <Zap size={13} />,
    highlights: [
      "Multi-tenant SaaS using Node.js, NestJS, React.js, and PostgreSQL",
      "Built and maintained REST APIs with robust error handling",
      "Auth via JWT and role-based access control (RBAC)",
      "Database design and query optimization for performance",
      "Reusable React.js UI components and design system contributions",
      "Shipped new features in a fast-paced collaborative environment",
    ],
    tech: ["Node.js", "NestJS", "React.js", "PostgreSQL", "JWT", "TypeORM"],
  },
  {
    role: "DevOps Intern",
    company: "cloudLaya",
    location: "Lalitpur, Nepal",
    duration: "4 Months",
    type: "Internship",
    accent: "cyan",
    icon: <Cloud size={13} />,
    highlights: [
      "Deployed applications in cloud environments on AWS infrastructure",
      "CI/CD pipelines with GitHub Actions for automated deployments",
      "AWS services: EC2, S3, and RDS for scalable cloud solutions",
      "Docker containerization and environment management",
      "Monitored and maintained production systems for reliability",
    ],
    tech: ["AWS EC2", "AWS S3", "AWS RDS", "Docker", "GitHub Actions", "CI/CD"],
  },
];

const v = (a: string, violet: string, cyan: string) =>
  a === "violet" ? violet : cyan;

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="experience" className="relative py-10 px-6">
      <div
        className="absolute top-0 right-0 w-[200px] h-[200px] sm:w-64 sm:h-64 lg:w-96 lg:h-96 rounded-full pointer-events-none opacity-[0.06] blur-[150px]"
        style={{
          background: "radial-gradient(circle,#7c3aed,transparent 70%)",
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
          <span className="text-violet-500 text-sm">02.</span>
          <span className="text-white/18 text-sm">~/portfolio/</span>
          <span className="text-cyan-400 text-sm tracking-widest">
            experience
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-violet-500/20 to-transparent" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-5 top-6 bottom-6 w-px bg-gradient-to-b from-violet-500/50 via-cyan-500/30 to-transparent" />

          <div className="flex flex-col">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className={`relative pl-14 ${i < experiences.length - 1 ? "pb-10" : ""}`}
              >
                {/* Dot */}
                <div
                  className={`absolute left-0 top-4 w-10 h-10 rounded-sm flex items-center justify-center text-base border transition-all duration-300 ${v(
                    exp.accent,
                    "border-violet-500/50 bg-violet-500/8 text-violet-400",
                    "border-cyan-500/50 bg-cyan-500/8 text-cyan-400",
                  )}`}
                >
                  {exp.icon}
                </div>

                {/* Card */}
                <div
                  className={`border border-white/[0.07] rounded-sm bg-white/[0.015] p-6 transition-all duration-300 ${v(
                    exp.accent,
                    "hover:border-violet-500/25 hover:bg-violet-500/[0.03]",
                    "hover:border-cyan-500/25 hover:bg-cyan-500/[0.03]",
                  )}`}
                >
                  {/* Top row */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                    <div>
                      <h3 className="font-display font-bold text-base text-white/90 tracking-wider mb-2">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 font-mono text-sm">
                        <span
                          className={v(
                            exp.accent,
                            "text-violet-400",
                            "text-cyan-400",
                          )}
                        >
                          {exp.company}
                        </span>
                        <span className="text-white/18">/</span>
                        <span className="text-white/35 text-xs">
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span
                        className={`font-mono text-xs px-2.5 py-1 border rounded-sm ${v(
                          exp.accent,
                          "border-violet-500/35 text-violet-400 bg-violet-500/8",
                          "border-cyan-500/35 text-cyan-400 bg-cyan-500/8",
                        )}`}
                      >
                        {exp.duration}
                      </span>
                      <span className="font-mono text-[10px] text-white/22 tracking-widest">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-white/[0.06] mb-4" />

                  {/* Highlights */}
                  <p className="font-mono text-[10px] text-white/20 tracking-[0.15em] mb-3">
                    // highlights
                  </p>
                  <ul className="space-y-2 mb-5">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span
                          className={`mt-[7px] w-1 h-1 rounded-full flex-shrink-0 ${v(
                            exp.accent,
                            "bg-violet-500",
                            "bg-cyan-500",
                          )}`}
                        />
                        <span
                          className="font-body text-xs text-white/48 leading-relaxed"
                          style={{ fontWeight: 300 }}
                        >
                          {h}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[11px] px-2.5 py-1 border border-white/[0.08] text-white/30 rounded-sm hover:border-violet-500/40 hover:text-violet-300/70 transition-all duration-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
