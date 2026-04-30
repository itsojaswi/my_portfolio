import type { Metadata } from "next";
import { Orbitron, Exo_2, JetBrains_Mono } from "next/font/google";
// @ts-ignore: Allow importing global CSS without type declarations
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo2",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ojaswi Khanal — Full Stack Developer",
  description:
    "Full Stack Developer from Kathmandu, Nepal. Specializing in React, Node.js, NestJS, and cloud technologies.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Node.js",
    "Nepal",
    "Ojaswi Khanal",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${orbitron.variable} ${exo2.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased font-body">{children}</body>
    </html>
  );
}
