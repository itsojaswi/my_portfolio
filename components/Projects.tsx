"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    num: "01",
    title: "Fitness Tracker & Recipe App",
    subtitle: "MERN Stack Application",
    tag: "Personal",
    accent: "violet",
    highlights: [
      "JWT auth with full CRUD operations",
      "Role-based access control (RBAC)",
      "React frontend + Node.js/Express backend",
      "MongoDB for flexible data storage",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "RBAC"],
  },
  {
    num: "02",
    title: "Multi-tenant SaaS Platform",
    subtitle: "Enterprise Application",
    tag: "Professional",
    accent: "cyan",
    highlights: [
      "Multi-tenancy architecture with NestJS",
      "PostgreSQL with complex schema design",
      "JWT auth and RBAC middleware",
      "RESTful API development & maintenance",
    ],
    tech: ["NestJS", "React", "PostgreSQL", "TypeORM", "JWT"],
  },
  {
    num: "03",
    title: "Cloud Infrastructure Setup",
    subtitle: "DevOps & Cloud",
    tag: "Professional",
    accent: "pink",
    highlights: [
      "AWS EC2, S3, RDS configuration",
      "Docker containerization for apps",
      "GitHub Actions CI/CD pipelines",
      "System monitoring and maintenance",
    ],
    tech: ["AWS", "Docker", "GitHub Actions", "CI/CD", "VPC"],
  },
];

const ac: Record<
  string,
  {
    border: string;
    hover: string;
    num: string;
    tag: string;
    sub: string;
    dot: string;
  }
> = {
  violet: {
    border: "border-white/[0.07]",
    hover: "hover:border-violet-500/40 hover:bg-violet-500/[0.04]",
    num: "text-violet-500/25",
    tag: "border-violet-500/35 text-violet-400 bg-violet-500/8",
    sub: "text-violet-400",
    dot: "bg-violet-500",
  },
  cyan: {
    border: "border-white/[0.07]",
    hover: "hover:border-cyan-500/40 hover:bg-cyan-500/[0.04]",
    num: "text-cyan-500/20",
    tag: "border-cyan-500/35 text-cyan-400 bg-cyan-500/8",
    sub: "text-cyan-400",
    dot: "bg-cyan-500",
  },
  pink: {
    border: "border-white/[0.07]",
    hover: "hover:border-pink-500/40 hover:bg-pink-500/[0.04]",
    num: "text-pink-500/20",
    tag: "border-pink-500/35 text-pink-300 bg-pink-500/8",
    sub: "text-pink-300",
    dot: "bg-pink-400",
  },
};

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="projects" className="relative py-10 px-6">
      <div
        className="absolute bottom-0 left-0 w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] lg:w-[400px] lg:h-[400px] rounded-full pointer-events-none opacity-[0.04] blur-[120px]"
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
          <span className="text-violet-500 text-sm">04.</span>
          <span className="text-white/18 text-sm">~/portfolio/</span>
          <span className="text-cyan-400 text-sm tracking-widest">
            projects
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-violet-500/20 to-transparent" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-3">
          {projects.map((p, i) => {
            const a = ac[p.accent];
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className={`border rounded-sm bg-white/[0.015] p-6 transition-all duration-300 ${a.border} ${a.hover}`}
              >
                {/* Top row: index number + tag */}
                <div className="flex items-start justify-between mb-5">
                  <span
                    className={`font-display font-black text-3xl leading-none ${a.num}`}
                  >
                    {p.num}
                  </span>
                  <span
                    className={`font-mono text-[10px] px-2.5 py-1 border tracking-widest ${a.tag}`}
                  >
                    {p.tag}
                  </span>
                </div>

                <div className="h-px bg-white/[0.06] mb-4" />

                {/* Title + subtitle */}
                <h3 className="font-display font-bold text-sm text-white/88 tracking-wider leading-snug mb-1.5">
                  {p.title}
                </h3>
                <p
                  className={`font-mono text-[10px] tracking-widest mb-5 ${a.sub}`}
                >
                  {p.subtitle}
                </p>

                {/* Highlights */}
                <p className="font-mono text-[10px] text-white/20 tracking-[0.15em] mb-3">
                  // highlights
                </p>
                <ul className="space-y-2 mb-5">
                  {p.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <span
                        className={`mt-[6px] w-1 h-1 rounded-full flex-shrink-0 ${a.dot}`}
                      />
                      <span
                        className="font-body text-xs text-white/45 leading-relaxed"
                        style={{ fontWeight: 300 }}
                      >
                        {h}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] px-2 py-1 border border-white/[0.08] text-white/30 rounded-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
