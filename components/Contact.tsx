"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { useInView } from "react-intersection-observer";

const contacts = [
  {
    icon: Mail,
    label: "email",
    value: "ojaswikhanal7182060@gmail.com",
    href: "mailto:ojaswikhanal7182060@gmail.com",
    accent: "violet",
  },
  {
    icon: MapPin,
    label: "location",
    value: "Kathmandu, Nepal",
    href: "#",
    accent: "pink",
  },
];

const ac: Record<
  string,
  { row: string; icon: string; iconColor: string; val: string }
> = {
  violet: {
    row: "hover:border-violet-500/40 hover:bg-violet-500/[0.05]",
    icon: "border-violet-500/30 bg-violet-500/10",
    iconColor: "text-violet-400",
    val: "text-violet-400",
  },
  cyan: {
    row: "hover:border-cyan-500/40 hover:bg-cyan-500/[0.05]",
    icon: "border-cyan-500/30 bg-cyan-500/10",
    iconColor: "text-cyan-400",
    val: "text-cyan-400",
  },
  pink: {
    row: "hover:border-pink-500/40 hover:bg-pink-500/[0.05]",
    icon: "border-pink-500/30 bg-pink-500/10",
    iconColor: "text-pink-400",
    val: "text-pink-300",
  },
};

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="contact" className="relative py-10 px-6">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[150px] sm:w-[400px] sm:h-[250px] lg:w-[600px] lg:h-[300px] rounded-full pointer-events-none opacity-[0.06] blur-[150px]"
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
          <span className="text-violet-500 text-sm">05.</span>
          <span className="text-white/18 text-sm">~/portfolio/</span>
          <span className="text-cyan-400 text-sm tracking-widest">contact</span>
          <div className="flex-1 h-px bg-gradient-to-r from-violet-500/20 to-transparent" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: big text + CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="flex items-center gap-2 font-mono text-xs text-white/20 mb-4">
              <span className="text-violet-500">›</span>
              <span>init contact_sequence.sh</span>
            </div>

            <h2
              className="font-display font-black leading-[1.05] mb-6"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.2rem)",
                color: "transparent",
                backgroundImage:
                  "linear-gradient(130deg,#fff 0%,#c4b5fd 50%,#06b6d4 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              LET&apos;S BUILD
              <br />
              SOMETHING
              <br />
              EXTRAORDINARY
            </h2>

            <p
              className="font-body text-white/40 text-sm leading-[1.85] mb-8 max-w-sm"
              style={{ fontWeight: 300 }}
            >
              Got a project, an opportunity, or just want to talk code?
              Transmission lines are open — no delays, no black holes.
            </p>

            <a
              href="mailto:ojaswikhanal7182060@gmail.com"
              className="group inline-flex items-center gap-2 px-6 py-3 border border-violet-500/50 text-violet-300/80 font-mono text-xs tracking-widest rounded-sm hover:border-violet-400 hover:text-white hover:bg-violet-500/10 transition-all duration-300"
            >
              <span>./send_transmission</span>
              <span className="group-hover:translate-x-1 transition-transform duration-200 text-violet-500">
                →
              </span>
            </a>
          </motion.div>

          {/* Right: contact rows */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-3"
          >
            <p className="font-mono text-[10px] text-white/20 tracking-[0.15em] mb-2">
              // reach_me_at
            </p>

            {contacts.map((c, i) => {
              const a = ac[c.accent];
              const Tag = c.href === "#" ? "div" : "a";
              return (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.35 + i * 0.1 }}
                >
                  <Tag
                    {...(c.href !== "#" ? { href: c.href } : {})}
                    className={`flex items-center gap-4 border border-white/[0.07] rounded-sm p-5 transition-all duration-300 ${a.row} ${c.href !== "#" ? "cursor-pointer" : "cursor-default"}`}
                    style={{ textDecoration: "none" }}
                  >
                    <div
                      className={`w-8 h-8 border rounded-sm flex items-center justify-center text-sm flex-shrink-0 ${a.icon}`}
                    >
                      <c.icon className={a.iconColor} size={13} />
                    </div>
                    <div>
                      <p className="font-mono text-[10px] text-white/22 tracking-widest mb-1">
                        {c.label}
                      </p>
                      <p
                        className={`font-body text-sm break-all ${a.val}`}
                        style={{ fontWeight: 400 }}
                      >
                        {c.value}
                      </p>
                    </div>
                  </Tag>
                </motion.div>
              );
            })}

            <div className="flex items-center gap-2 font-mono text-[10px] text-white/20 mt-2 tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
              <span>Available for full-time roles &amp; freelance</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
