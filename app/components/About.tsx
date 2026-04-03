"use client";
import React, { useRef, useState, useCallback, useEffect } from "react";

const bioText =
  "Welcome to my portfolio! I'm Praditya Oktanza, a passionate Front-End Developer and a fresh graduate of Informatics Engineering. I love crafting beautiful, responsive, and interactive web experiences that bring ideas to life. My journey in coding started with a deep curiosity about how websites work — and over time, I've honed my skills in HTML, CSS, JavaScript, and modern front-end frameworks. Problem-solving excites me, and I enjoy turning complex designs into smooth, user-friendly interfaces. When I'm not coding, you'll probably find me at the gym, staying active and pushing my limits. I believe discipline and consistency — both in fitness and coding — are key to continuous growth. Currently exploring the latest front-end technologies and best practices to keep improving my craft. Let's connect and create something awesome together! 🚀";

const skills = [
  { label: "HTML & CSS", color: "#f97316" },
  { label: "JavaScript", color: "#facc15" },
  { label: "React.js", color: "#61dafb" },
  { label: "Tailwind CSS", color: "#38bdf8" },
  { label: "Laravel", color: "#fb7185" },
  { label: "MySQL", color: "#4CA9FF" },
  { label: "Git & GitHub", color: "#a78bfa" },
  { label: "Figma", color: "#3BF686" },
];

const infoItems = [
  {
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    label: "Education",
    value: "Informatics Engineering",
  },
  {
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
      </svg>
    ),
    label: "Role",
    value: "Frontend Engineer · Freelance",
  },
  {
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Based in",
    value: "Jambi, Kota Jambi",
  },
  {
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    label: "Focus",
    value: "Web Development & UI/UX",
  },
  {
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "Email",
    value: "praadityaadit95@gmail.com",
  },
  {
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    label: "Phone",
    value: "089604585251",
  },
];

// Split text into individually-hoverable chars
interface RevealTextProps {
  text: string;
}

const RevealText = ({ text }: RevealTextProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLParagraphElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLParagraphElement>) => {
      const container = containerRef.current;
      if (!container) return;
      const spans = container.querySelectorAll("[data-char-index]");
      let closest: number | null = null;
      let closestDist = Infinity;

      spans.forEach((span: Element) => {
        const rect = span.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dist = Math.hypot(e.clientX - cx, e.clientY - cy);
        if (dist < closestDist) {
          closestDist = dist;
          closest = parseInt(span.getAttribute("data-char-index") ?? "0");
        }
      });

      setHoveredIndex(closest);
    },
    [],
  );

  const handleMouseLeave = useCallback(() => {
    setHoveredIndex(null);
  }, []);

  const RADIUS = 80; // px — how far the "light" reaches

  return (
    <p
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="text-sm md:text-base leading-relaxed font-sora select-none cursor-default"
      style={{ lineHeight: "1.9" }}
    >
      {Array.from(text).map((char, i) => {
        let opacity = 0.18;
        if (hoveredIndex !== null) {
          const dist = Math.abs(i - hoveredIndex);
          // map dist 0→0, RADIUS→dim
          const t = Math.max(0, 1 - dist / (RADIUS / 6));
          opacity = 0.18 + 0.82 * t;
        }
        return (
          <span
            key={i}
            data-char-index={i}
            style={{
              color: `rgba(255,255,255,${opacity})`,
              transition: "color 0.25s ease",
              display: char === " " || char === "\n" ? "inline" : "inline",
            }}
          >
            {char}
          </span>
        );
      })}
    </p>
  );
};

const About = () => {
  return (
    <>
      <div
        id="about"
        className="py-16 md:py-24 flex flex-col"
        suppressHydrationWarning
      >
        {/* Section header */}
        <div className="about-fadeup flex items-center gap-4 mb-12">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[rgba(255,255,255,0.35)]">
              Who I Am
            </span>
            <h2 className="font-sora font-bold text-2xl md:text-4xl text-white leading-tight">
              A little more{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #3BF686, #4CA9FF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                about myself
              </span>
            </h2>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-[rgba(59,246,134,0.3)] to-transparent ml-4 hidden md:block" />
          <div className="flex-1 h-px bg-gradient-to-r from-[rgba(59,246,134,0.3)] to-transparent ml-4 hidden md:block" />
        </div>

        {/* Main content grid */}
        <div className="flex flex-col xl:flex-row gap-10 xl:gap-14">
          {/* ── LEFT: Photo + Info ── */}
          <div className="about-fadeup-1 flex flex-col items-center xl:items-start gap-6 xl:w-[340px] flex-shrink-0">
            {/* Photo */}
            <div className="about-photo z-10">
              <img
                src="/assets/foto_wisuda.jpg"
                alt="Praditya Oktanza"
                className="w-[280px] h-[340px] md:w-[320px] md:h-[390px] object-cover"
              />
              {/* Floating badge */}
              <div
                className="absolute bottom-[-16px] right-[-16px] px-4 py-2 rounded-xl text-xs font-semibold font-sora text-black z-10 flex items-center gap-2"
                style={{
                  background: "linear-gradient(135deg, #3BF686, #4CA9FF)",
                }}
              >
                <span className="w-2 h-2 rounded-full bg-black opacity-60 inline-block" />
                Available for work
              </div>
            </div>

            {/* Info list */}
            <div className="about-fadeup-2 flex flex-col gap-2 w-full mt-6">
              {infoItems.map(({ icon, label, value }) => (
                <div className="info-row" key={label}>
                  <span className="text-[rgba(255,255,255,0.5)]">{icon}</span>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-[rgba(255,255,255,0.3)]">
                      {label}
                    </span>
                    <span className="text-sm text-white font-medium">
                      {value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Bio + Skills + Quote ── */}
          <div className="flex-1 flex flex-col gap-8">
            {/* Reveal bio text */}
            <div className="about-fadeup-2">
              <RevealText text={bioText} />
            </div>

            {/* Quote */}
            <div className="about-fadeup-3 quote-bar pl-5 py-1">
              <p className="text-sm md:text-base italic text-[rgba(255,255,255,0.5)] font-sora">
                "Consistency in small habits builds extraordinary results — in
                code and in life."
              </p>
            </div>

            {/* Skills */}
            <div className="about-fadeup-3 flex flex-col gap-4">
              <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[rgba(255,255,255,0.35)]">
                Tech Stack
              </span>
              <div className="flex flex-wrap gap-2">
                {skills.map(({ label, color }) => (
                  <span
                    key={label}
                    className="skill-tag"
                    style={{
                      color: color,
                      borderColor: `${color}33`,
                      background: `${color}12`,
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full inline-block"
                      style={{ background: color }}
                    />
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* Fun fact strip */}
            <div
              className="about-fadeup-4 rounded-2xl px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div className="text-3xl select-none">🏋️</div>
              <div>
                <div className="text-sm font-semibold text-white font-sora">
                  Beyond the Screen
                </div>
                <div className="text-xs text-[rgba(255,255,255,0.45)] mt-0.5">
                  When I'm not building web apps, I'm at the gym. Discipline &
                  consistency carry over from fitness to code.
                </div>
              </div>
            </div>

            {/* Journey Timeline */}
            <div className="about-fadeup-4 flex flex-col gap-3">
              <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[rgba(255,255,255,0.35)]">
                Education
              </span>
              <div className="flex flex-col gap-0 relative">
                {/* Vertical line */}
                <div
                  className="absolute left-[19px] top-6 bottom-6 w-px"
                  style={{
                    background:
                      "linear-gradient(180deg, #3BF686, #4CA9FF, rgba(76,169,255,0))",
                  }}
                />

                {[
                  {
                    year: "2026",
                    emoji: "🏫",
                    title: "University of Dinamika Bangsa",
                    desc: "Informatics Engineering Student",
                    color: "#3BF686",
                  },
                  {
                    year: "2022",
                    emoji: "🏫",
                    title: "SMK NEGERI 2 Kota Jambi",
                    desc: "Software Engineering.",
                    color: "#4CA9FF",
                  },
                  {
                    year: "2019",
                    emoji: "🏫",
                    title: "SMPN 4 Kota Jambi",
                    desc: "Junior High School",
                    color: "#a78bfa",
                  },
                  {
                    year: "2016",
                    emoji: "🏫",
                    title: "SDIT Sayyidatu Haiba Batam",
                    desc: "Primary School",
                    color: "#f472b6",
                  },
                ].map(({ year, emoji, title, desc, color }, i) => (
                  <div
                    key={i}
                    className="flex gap-4 items-start py-3 group cursor-default"
                  >
                    {/* Dot */}
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-base z-10 transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: `${color}18`,
                        border: `1.5px solid ${color}44`,
                      }}
                    >
                      {emoji}
                    </div>
                    {/* Content */}
                    <div className="flex-1 py-1">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span
                          className="text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full"
                          style={{
                            color,
                            background: `${color}18`,
                            border: `1px solid ${color}33`,
                          }}
                        >
                          {year}
                        </span>
                        <span className="text-sm font-semibold text-white font-sora">
                          {title}
                        </span>
                      </div>
                      <p className="text-xs text-[rgba(255,255,255,0.4)] leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
