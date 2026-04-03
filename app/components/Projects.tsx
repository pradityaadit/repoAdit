"use client";
import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import ProjectBackground from "../../public/assets/img/project1.png";
import ProjectBackground2 from "../../public/assets/img/project2.png";
import ProjectBackground3 from "../../public/assets/img/project3.png";
import ProjectBackground4 from "../../public/assets/img/project4.png";

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  backgroundImg: StaticImageData;
  projectUrl: string;
  color: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Caffe Shop",
    subtitle: "Landing Page",
    description:
      "A stylish coffee shop landing page featuring a warm, inviting design with smooth scroll sections, a menu showcase, and responsive layout. Built with core web technologies to deliver a clean and elegant browsing experience.",
    tech: ["HTML", "CSS", "JavaScript"],
    backgroundImg: ProjectBackground,
    projectUrl: "https://caffe-style-sheet.vercel.app/",
    color: "#f97316",
  },
  {
    id: 2,
    title: "Luminique",
    subtitle: "Clothes Store",
    description:
      "An e-commerce clothing store with a modern minimalist aesthetic. Features product galleries, shopping cart interactions, and responsive grid layouts that adapt seamlessly across all devices.",
    tech: ["HTML", "CSS", "JavaScript"],
    backgroundImg: ProjectBackground2,
    projectUrl: "https://luminique.vercel.app/",
    color: "#a78bfa",
  },
  {
    id: 3,
    title: "AromaHeaven",
    subtitle: "Coffee Shop App",
    description:
      "A modern coffee shop application built with React. Features component-based architecture, dynamic menu rendering, smooth animations, and a fully responsive design powered by Tailwind CSS.",
    tech: ["React JS", "Tailwind"],
    backgroundImg: ProjectBackground3,
    projectUrl: "https://aromaheaven-coffeshop.vercel.app/",
    color: "#3BF686",
  },
  {
    id: 4,
    title: "Company Profile",
    subtitle: "Corporate Website",
    description:
      "A professional company profile website showcasing corporate identity, services, and team information. Built with modern React patterns and styled with Tailwind CSS for a polished, enterprise-grade presentation.",
    tech: ["React JS", "Tailwind"],
    backgroundImg: ProjectBackground4,
    projectUrl: "https://company-profile-sigma-pied.vercel.app/",
    color: "#4CA9FF",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const closeModal = useCallback(() => setSelectedProject(null), []);

  return (
    <div id="projects" className="py-16 md:py-24 flex flex-col">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-12"
      >
        <div className="flex flex-col gap-1">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[rgba(255,255,255,0.35)]">
            Portfolio
          </span>
          <h2 className="font-sora font-bold text-2xl md:text-4xl text-white leading-tight">
            Recent{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #3BF686, #4CA9FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Projects
            </span>
          </h2>
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-[rgba(59,246,134,0.3)] to-transparent ml-4 hidden md:block" />
      </motion.div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={cardVariants}
            className="project-card group relative rounded-2xl overflow-hidden cursor-pointer"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
            onClick={() => setSelectedProject(project)}
          >
            {/* Image */}
            <div className="relative w-full aspect-[16/10] overflow-hidden">
              <Image
                src={project.backgroundImg}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Gradient overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.85) 100%)`,
                }}
              />
              {/* Hover overlay */}
              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500"
                style={{
                  background: `linear-gradient(135deg, ${project.color}30, rgba(0,0,0,0.7))`,
                  backdropFilter: "blur(2px)",
                }}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 rounded-xl text-sm font-bold font-sora text-white flex items-center gap-2"
                  style={{
                    background: "rgba(255,255,255,0.15)",
                    border: "1px solid rgba(255,255,255,0.3)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  View Details
                </motion.div>
              </div>
            </div>

            {/* Card info */}
            <div className="p-5">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h3 className="text-lg font-bold text-white font-sora">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[rgba(255,255,255,0.4)]">
                    {project.subtitle}
                  </p>
                </div>
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `${project.color}15`,
                    border: `1px solid ${project.color}30`,
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={project.color}
                    strokeWidth="2"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-semibold px-2.5 py-1 rounded-full"
                    style={{
                      color: project.color,
                      background: `${project.color}12`,
                      border: `1px solid ${project.color}25`,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Project Detail Modal ── */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-8"
            style={{
              background: "rgba(0,0,0,0.75)",
              backdropFilter: "blur(8px)",
            }}
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl rounded-3xl flex flex-col md:flex-row overflow-hidden"
              style={{
                background: "rgba(30,30,40,0.95)",
                border: `1px solid ${selectedProject.color}30`,
                boxShadow: `0 25px 80px rgba(0,0,0,0.5), 0 0 60px ${selectedProject.color}10`,
              }}
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              {/* LEFT: Image */}
              <div className="relative w-full md:w-[45%] aspect-[16/10] md:aspect-auto overflow-hidden flex-shrink-0">
                <Image
                  src={selectedProject.backgroundImg}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg, ${selectedProject.color}20, rgba(30,30,40,0.4))`,
                  }}
                />
                {/* Title overlay on image */}
                <div className="absolute bottom-4 left-4 right-4">
                  <span
                    className="text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1 rounded-full inline-block mb-2"
                    style={{
                      color: selectedProject.color,
                      background: `${selectedProject.color}20`,
                      border: `1px solid ${selectedProject.color}40`,
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    {selectedProject.subtitle}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white font-sora">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* RIGHT: Content */}
              <div className="flex-1 p-6 md:p-8 flex flex-col justify-between gap-5">
                {/* Description */}
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-[rgba(255,255,255,0.35)] mb-2">
                    About This Project
                  </h4>
                  <p className="text-sm text-[rgba(255,255,255,0.65)] leading-relaxed font-sora">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Tech stack */}
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-[rgba(255,255,255,0.35)] mb-2">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-2"
                        style={{
                          color: selectedProject.color,
                          background: `${selectedProject.color}12`,
                          border: `1px solid ${selectedProject.color}30`,
                        }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ background: selectedProject.color }}
                        />
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action button */}
                <a
                  href={selectedProject.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-xl text-sm font-bold font-sora text-black transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${selectedProject.color}, ${selectedProject.color}cc)`,
                    boxShadow: `0 8px 30px ${selectedProject.color}30`,
                  }}
                >
                  Visit Live Project
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
