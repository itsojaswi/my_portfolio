import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-orbitron)", "monospace"],
        body: ["var(--font-exo2)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      colors: {
        cosmos: {
          black: "#03000A",
          deep: "#070314",
          void: "#0D0521",
          nebula: "#1A0A3C",
          purple: "#6B21A8",
          violet: "#7C3AED",
          indigo: "#4338CA",
          cyan: "#06B6D4",
          aurora: "#22D3EE",
          stardust: "#E879F9",
          nova: "#F472B6",
          white: "#F0E6FF",
          star: "#FFF8E7",
        },
      },
      animation: {
        "star-twinkle": "twinkle 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        orbit: "orbit 20s linear infinite",
        "nebula-pulse": "nebulaPulse 8s ease-in-out infinite",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
        "shooting-star": "shootingStar 3s linear infinite",
        "text-glow": "textGlow 2s ease-in-out infinite",
        "gradient-shift": "gradientShift 6s ease infinite",
        "spin-slow": "spin 15s linear infinite",
        meteor: "meteor 5s linear infinite",
      },
      keyframes: {
        twinkle: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.3", transform: "scale(0.8)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(120px) rotate(0deg)" },
          "100%": {
            transform: "rotate(360deg) translateX(120px) rotate(-360deg)",
          },
        },
        nebulaPulse: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.05)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(124, 58, 237, 0.5)" },
          "50%": {
            boxShadow:
              "0 0 40px rgba(124, 58, 237, 0.9), 0 0 80px rgba(6, 182, 212, 0.3)",
          },
        },
        textGlow: {
          "0%, 100%": { textShadow: "0 0 10px rgba(124, 58, 237, 0.8)" },
          "50%": {
            textShadow:
              "0 0 30px rgba(124, 58, 237, 1), 0 0 60px rgba(6, 182, 212, 0.5)",
          },
        },
        gradientShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        shootingStar: {
          "0%": {
            transform: "translateX(-100px) translateY(-100px)",
            opacity: "1",
          },
          "100%": {
            transform: "translateX(400px) translateY(400px)",
            opacity: "0",
          },
        },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
      },
      backgroundImage: {
        "galaxy-gradient":
          "radial-gradient(ellipse at center, #1A0A3C 0%, #070314 50%, #03000A 100%)",
        "nebula-gradient":
          "radial-gradient(ellipse, rgba(124, 58, 237, 0.3) 0%, transparent 70%)",
        "aurora-gradient":
          "linear-gradient(135deg, rgba(124, 58, 237, 0.2), rgba(6, 182, 212, 0.2), rgba(232, 121, 249, 0.2))",
      },
      boxShadow: {
        "neon-purple":
          "0 0 20px rgba(124, 58, 237, 0.6), 0 0 40px rgba(124, 58, 237, 0.3)",
        "neon-cyan":
          "0 0 20px rgba(6, 182, 212, 0.6), 0 0 40px rgba(6, 182, 212, 0.3)",
        "neon-pink":
          "0 0 20px rgba(244, 114, 182, 0.6), 0 0 40px rgba(244, 114, 182, 0.3)",
        cosmic:
          "inset 0 1px 0 rgba(255,255,255,0.05), 0 0 40px rgba(124, 58, 237, 0.2)",
      },
    },
  },
  plugins: [],
};
export default config;
