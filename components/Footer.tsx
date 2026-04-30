"use client";

export default function Footer() {
  return (
    <footer className="relative border-t border-violet-500/10 py-10 px-6 z-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-mono text-xs text-cosmos-white/30 text-center sm:text-left">
          © {new Date().getFullYear()} Ojaswi Khanal.
        </div>
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-cosmos-white/30">
            Built with
          </span>
          <span className="font-mono text-xs text-violet-400">Next.js</span>
          <span className="font-mono text-xs text-cosmos-white/30">+</span>
          <span className="font-mono text-xs text-cyan-400">Tailwind</span>
          <span className="font-mono text-xs text-cosmos-white/30">+</span>
          <span className="font-mono text-xs text-pink-400">Framer Motion</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="font-mono text-xs text-cosmos-white/30">
            Open to work
          </span>
        </div>
      </div>
    </footer>
  );
}
