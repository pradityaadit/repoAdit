/** @format */
"use client";

import React, { useState, useEffect } from "react";

const roles = [
  "Software Engineer",
  "Frontend Developer",
  "Freelancer",
  "Informatics Student",
];

const stats = [
  { value: "10+", label: "Projects Done" },
  { value: "2+", label: "Years Coding" },
  { value: "5+", label: "Happy Clients" },
];

const Main = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  // Typing animation
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout> | undefined;

    if (typing) {
      if (charIndex < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayed((prev) => prev + currentRole[charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayed((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        }, 40);
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, typing, roleIndex]);

  return (
    <>
      <div
        id="main"
        suppressHydrationWarning
        className="relative min-h-[calc(100vh-90px)] flex flex-col justify-center py-16 md:py-24 overflow-hidden"
      >
        {/* Background glow blobs */}
        <div
          className="absolute top-0 left-[-10%] w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none"
          style={{
            background: "radial-gradient(circle, #3BF686 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 right-[-5%] w-[400px] h-[400px] rounded-full opacity-8 pointer-events-none"
          style={{
            background: "radial-gradient(circle, #4CA9FF 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          {/* ── LEFT COLUMN ── */}
          <div className="flex-1 flex flex-col gap-6 text-center lg:text-left">
            {/* Status badge */}
            <div className="hero-fadeup flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-[rgba(59,246,134,0.3)] bg-[rgba(59,246,134,0.07)] text-[#3BF686]">
                <span className="status-dot w-2 h-2 rounded-full bg-[#3BF686] inline-block" />
                Open for Opportunities
              </div>
            </div>

            {/* Name */}
            <div className="hero-fadeup-1">
              <h1 className="font-sora font-bold text-[2.2rem] sm:text-[2.8rem] md:text-[3.5rem] leading-tight text-white">
                Hi, I'm{" "}
                <span className="gradient-text-anim">Praditya Oktanza</span>
              </h1>
            </div>

            {/* Typing role */}
            <div className="hero-fadeup-2 flex items-center justify-center lg:justify-start gap-2 text-lg md:text-xl font-sora text-[rgba(255,255,255,0.6)]">
              <span className="text-[rgba(255,255,255,0.35)]">{"<"}</span>
              <span className="text-[rgba(255,255,255,0.85)] min-w-[220px]">
                {displayed}
                <span className="cursor-blink" />
              </span>
              <span className="text-[rgba(255,255,255,0.35)]">{"/>"}</span>
            </div>

            {/* Description */}
            <p className="hero-fadeup-3 text-sm md:text-base text-[rgba(255,255,255,0.5)] leading-relaxed max-w-[500px] mx-auto lg:mx-0">
              Building sleek computer applications and underlying systems that
              run devices & control networks. Currently studying at university
              while taking on freelance projects.
            </p>

            {/* CTA Buttons */}
            <div className="hero-fadeup-4 flex flex-wrap gap-3 justify-center lg:justify-start">
              <a
                href="#project"
                className="cta-btn relative inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-black font-sora"
                style={{
                  background: "linear-gradient(135deg, #3BF686, #4CA9FF)",
                }}
              >
                View Projects
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#contact"
                className="cta-btn inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white font-sora border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.05)]"
              >
                Contact Me
              </a>
            </div>

            {/* Divider */}
            <div className="hero-fadeup-5 flex items-center gap-4 justify-center lg:justify-start">
              <div className="h-px flex-1 max-w-[60px] bg-[rgba(255,255,255,0.1)]" />
              <span className="text-xs text-[rgba(255,255,255,0.3)] tracking-widest uppercase">
                Connect
              </span>
              <div className="h-px flex-1 max-w-[60px] bg-[rgba(255,255,255,0.1)]" />
            </div>

            {/* Social + Life goal */}
            <div className="hero-fadeup-5 flex flex-col sm:flex-row items-center lg:items-start gap-5 justify-center lg:justify-start">
              {/* Social icons */}
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/prdty.aditt/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn"
                  title="Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn"
                  title="Twitter / X"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/pradityaadit"
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn"
                  title="GitHub"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/praditya-adit-7a4527290/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn"
                  title="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>

              {/* Life goal mini pill */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.07)] text-xs text-[rgba(255,255,255,0.45)] max-w-[240px] text-left">
                <span className="text-base">🌏</span>
                <span>
                  Sharing knowledge to grow Indonesia's tech ecosystem
                </span>
              </div>
            </div>

            {/* Stats */}
            <div className="hero-fadeup-5 grid grid-cols-3 gap-4 mt-2 max-w-[360px] mx-auto lg:mx-0">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center lg:items-start"
                >
                  <span
                    className="font-sora font-bold text-xl"
                    style={{
                      background: "linear-gradient(135deg, #3BF686, #4CA9FF)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {value}
                  </span>
                  <span className="text-[10px] text-[rgba(255,255,255,0.4)] uppercase tracking-wider">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="flex-shrink-0 flex flex-col items-center gap-6">
            {/* Profile photo with orbit ring */}
            <div className="relative float-img">
              {/* Orbit ring */}
              <div className="orbit-ring">
                <div className="orbit-dot" />
              </div>

              {/* Glow ring */}
              <div
                className="absolute inset-[-4px] rounded-full z-0"
                style={{
                  background: "linear-gradient(135deg, #3BF686, #4CA9FF)",
                  padding: "3px",
                }}
              >
                <div className="w-full h-full rounded-full bg-[#1a1a1a]" />
              </div>

              {/* Photo */}
              <div className="relative z-10 w-[180px] h-[180px] md:w-[240px] md:h-[240px] rounded-full overflow-hidden border-4 border-[#1a1a1a]">
                <img
                  src="/assets/profil.jpg"
                  alt="Praditya Oktanza"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Info cards */}
            <div className="flex flex-col gap-3 w-full max-w-[280px]">
              {/* Freelance card */}
              <div className="card-glass rounded-2xl px-4 py-3 flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(59,246,134,0.2), rgba(76,169,255,0.2))",
                    border: "1px solid rgba(59,246,134,0.25)",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#3BF686"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
                  </svg>
                </div>
                <div>
                  <div className="text-white text-sm font-semibold font-sora">
                    Freelance
                  </div>
                  <div className="text-[rgba(255,255,255,0.4)] text-[11px]">
                    Frontend Engineer · Open
                  </div>
                </div>
              </div>

              {/* Student card */}
              <div className="card-glass rounded-2xl px-4 py-3 flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(76,169,255,0.2), rgba(167,139,250,0.2))",
                    border: "1px solid rgba(76,169,255,0.25)",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#4CA9FF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <div>
                  <div className="text-white text-sm font-semibold font-sora">
                    Informatics Student
                  </div>
                  <div className="text-[rgba(255,255,255,0.4)] text-[11px]">
                    CS · Algorithms · Systems
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
