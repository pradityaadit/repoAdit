"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHtml5,
  FaReact,
  FaCss3Alt,
  FaJs,
  FaLaravel,
  FaGithub,
  FaUsers,
  FaComments,
  FaBolt,
  FaHandshake,
} from "react-icons/fa";
import { SiTailwindcss, SiMicrobit } from "react-icons/si";
import { HiUserGroup } from "react-icons/hi";
import { MdOutlineZoomOutMap } from "react-icons/md";

const hardSkills = [
  {
    icon: <FaHtml5 />,
    label: "HTML",
    color: "#f97316",
    desc: "Semantic markup & accessibility",
  },
  {
    icon: <FaCss3Alt />,
    label: "CSS",
    color: "#38bdf8",
    desc: "Responsive layouts & animations",
  },
  {
    icon: <FaJs />,
    label: "JavaScript",
    color: "#facc15",
    desc: "ES6+, DOM, async programming",
  },
  {
    icon: <FaReact />,
    label: "React.js",
    color: "#61dafb",
    desc: "Component-based architecture",
  },
  {
    icon: <FaLaravel />,
    label: "Laravel",
    color: "#fb7185",
    desc: "MVC framework & REST APIs",
  },
  {
    icon: <SiTailwindcss />,
    label: "Tailwind CSS",
    color: "#38bdf8",
    desc: "Utility-first CSS framework",
  },
  {
    icon: <SiMicrobit />,
    label: "MS Office",
    color: "#ea580c",
    desc: "Word, Excel, PowerPoint",
  },
  {
    icon: <FaGithub />,
    label: "Git & GitHub",
    color: "#a78bfa",
    desc: "Version control & collaboration",
  },
  {
    icon: <MdOutlineZoomOutMap />,
    label: "Zoom & Discord",
    color: "#818cf8",
    desc: "Remote collaboration tools",
  },
];

const softSkills = [
  {
    icon: <FaUsers />,
    label: "Teamwork",
    color: "#3BF686",
    desc: "Mampu bekerja secara individu maupun dalam tim",
  },
  {
    icon: <FaComments />,
    label: "Communication",
    color: "#4CA9FF",
    desc: "Memiliki kemampuan komunikasi yang baik",
  },
  {
    icon: <FaBolt />,
    label: "Flexible & High Work Ethic",
    color: "#facc15",
    desc: "Siap bekerja secara fleksibel dan etos kerja tinggi",
  },
  {
    icon: <FaHandshake />,
    label: "Problem Solving",
    color: "#a78bfa",
    desc: "Mampu menyelesaikan masalah secara kreatif",
  },
];

const tabs = [
  { key: "hard", label: "Hard Skills", count: hardSkills.length },
  { key: "soft", label: "Soft Skills", count: softSkills.length },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.07,
      duration: 0.45,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const Skill = () => {
  const [activeTab, setActiveTab] = useState("hard");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  const currentSkills = activeTab === "hard" ? hardSkills : softSkills;

  return (
    <div id="skills" className="py-16 md:py-24 flex flex-col">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-10"
      >
        <div className="flex flex-col gap-1">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[rgba(255,255,255,0.35)]">
            What I Can Do
          </span>
          <h2 className="font-sora font-bold text-2xl md:text-4xl text-white leading-tight">
            My{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #3BF686, #4CA9FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Skills
            </span>
          </h2>
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-[rgba(59,246,134,0.3)] to-transparent ml-4 hidden md:block" />
      </motion.div>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="flex gap-2 mb-8"
      >
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className="relative px-5 py-2.5 rounded-xl text-sm font-semibold font-sora transition-all duration-300 flex items-center gap-2"
            style={{
              background:
                activeTab === tab.key
                  ? "linear-gradient(135deg, rgba(59,246,134,0.15), rgba(76,169,255,0.15))"
                  : "rgba(255,255,255,0.04)",
              border:
                activeTab === tab.key
                  ? "1px solid rgba(59,246,134,0.4)"
                  : "1px solid rgba(255,255,255,0.08)",
              color: activeTab === tab.key ? "#fff" : "rgba(255,255,255,0.5)",
            }}
          >
            {tab.label}
            <span
              className="text-[10px] px-1.5 py-0.5 rounded-full font-bold"
              style={{
                background:
                  activeTab === tab.key
                    ? "rgba(59,246,134,0.25)"
                    : "rgba(255,255,255,0.1)",
                color:
                  activeTab === tab.key ? "#3BF686" : "rgba(255,255,255,0.4)",
              }}
            >
              {tab.count}
            </span>
          </button>
        ))}
      </motion.div>

      {/* Skills grid */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: activeTab === "hard" ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: activeTab === "hard" ? 20 : -20 }}
            transition={{ duration: 0.3 }}
            className={`grid gap-4 ${
              activeTab === "hard"
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                : "grid-cols-1 sm:grid-cols-2"
            }`}
          >
            {currentSkills.map((skill, i) => (
              <motion.div
                key={skill.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
                className="skill-card group relative overflow-hidden rounded-2xl cursor-default"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: `1px solid ${
                    hoveredCard === i
                      ? `${skill.color}55`
                      : "rgba(255,255,255,0.07)"
                  }`,
                  transition: "all 0.35s ease",
                }}
              >
                {/* Glow effect */}
                {hoveredCard === i && (
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, ${skill.color}12, transparent 60%)`,
                    }}
                  />
                )}

                <div className="relative z-10 p-5 flex items-start gap-4">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-xl transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: `${skill.color}15`,
                      border: `1px solid ${skill.color}30`,
                      color: skill.color,
                      boxShadow:
                        hoveredCard === i
                          ? `0 0 20px ${skill.color}25`
                          : "none",
                    }}
                  >
                    {skill.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-white font-sora mb-0.5 truncate">
                      {skill.label}
                    </h3>
                    <p className="text-xs text-[rgba(255,255,255,0.4)] leading-relaxed">
                      {skill.desc}
                    </p>
                  </div>

                  {/* Animated bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] overflow-hidden">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: hoveredCard === i ? 1 : 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      style={{
                        originX: 0,
                        background: `linear-gradient(90deg, ${skill.color}, transparent)`,
                        height: "100%",
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Skill;
