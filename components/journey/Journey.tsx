"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

interface TimelineStage {
  step: string;
  year: string;
  periodLabel: string;
  isCurrent?: boolean;
  title: string;
  subtitle: string;
  milestone: string;
  milestoneLink?: string;
  narrative: string;
  technologies: string[];
}

const timelineStages: TimelineStage[] = [
  {
    step: "01",
    year: "2024",
    periodLabel: "2024 · Foundations",
    title: "Java Foundations & Core Engineering",
    subtitle: "Programming Fundamentals & Relational Systems",
    milestone: "Computer Science & System Fundamentals",
    narrative:
      "Built a solid engineering foundation through Java, object-oriented programming principles, and relational databases. Focused on understanding memory execution, core data structures, algorithms, and reliable data persistence via SQL and JDBC.",
    technologies: ["Java", "SQL", "OOP", "JDBC", "Data Structures"],
  },
  {
    step: "02",
    year: "2024",
    periodLabel: "2024 · Backend Focus",
    title: "Enterprise Backend Architecture",
    subtitle: "Spring Boot, Hibernate / JPA & REST APIs",
    milestone: "Shipped Full-Stack E-Commerce Platform",
    milestoneLink: "/projects/ecommerce-store",
    narrative:
      "Advanced into enterprise backend systems, architecting layered server-side applications and e-commerce services with Spring Boot, Hibernate/JPA, and MySQL. Emphasized database normalization, API contract design, and authentication patterns.",
    technologies: ["Spring Boot", "Hibernate / JPA", "MySQL", "REST APIs", "Spring Security"],
  },
  {
    step: "03",
    year: "2026",
    periodLabel: "2026 · Web Expansion",
    title: "Modern Web & Real-Time Systems",
    subtitle: "Component Architecture & Event-Driven Systems",
    milestone: "Built Real-Time Task Management System",
    milestoneLink: "/projects/task-manager",
    narrative:
      "Expanded into the modern TypeScript/JavaScript web ecosystem. Mastered React, Node.js, Express, and MongoDB—connecting component-driven interactive user interfaces with asynchronous, real-time WebSocket communication.",
    technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Socket.IO"],
  },
  {
    step: "04",
    year: "2026",
    periodLabel: "2026 · Client Platforms",
    title: "Production Architecture & Client Delivery",
    subtitle: "Next.js 16, App Router & Production Deployments",
    milestone: "Launched Manyaseema NGO Web Platform (Live)",
    milestoneLink: "/projects/manyaseema",
    narrative:
      "Engineered high-performance production web platforms utilizing Next.js 16 App Router, React 19, and Tailwind CSS v4. Delivered complete client applications with custom domains, automated SMTP pipelines, SEO architecture, and mobile-first responsive design.",
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Framer Motion",
      "Nodemailer",
    ],
  },
  {
    step: "05",
    year: "2026",
    periodLabel: "2026 — Present · Dilshaj Infotech",
    isCurrent: true,
    title: "Full Stack Developer & EduProva Ecosystem",
    subtitle: "Full Stack Developer · Dilshaj Infotech",
    milestone: "Scaled Multi-Module EduProva Ecosystem",
    milestoneLink: "/projects/eduprova",
    narrative:
      "Engineering full-stack architecture and feature implementation across the EduProva ecosystem. Developing workflows spanning LMS modules, AI tutor interactions, real-time communication channels, and freelance marketplaces powered by NestJS microservices and Redis.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "NestJS",
      "MongoDB",
      "Redis",
      "Socket.IO",
      "AI Services",
    ],
  },
];

export default function Journey() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.08 });
  const shouldReduceMotion = useReducedMotion();

  const getTransition = (delay = 0, duration = 0.5) => ({
    duration: shouldReduceMotion ? 0.01 : duration,
    delay: shouldReduceMotion ? 0 : delay,
    ease: EASE,
  });

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="relative w-full overflow-hidden py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto w-full max-w-5xl min-w-0 px-4 sm:px-6 lg:px-8">
        {/* ========================================================
            HEADER: 03 / JOURNEY + Dual Column Headline
        ========================================================= */}
        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:items-end lg:gap-12 mb-12 sm:mb-16">
          <div>
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={getTransition(0.04, 0.45)}
              className="flex items-center gap-3"
            >
              <span className="h-px w-8 bg-[#FF7F11]" />
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-[#FF7F11]">
                03 / JOURNEY
              </span>
            </motion.div>

            <motion.h2
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={getTransition(0.1, 0.5)}
              className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-black dark:text-[#FFFFFC] sm:text-4xl lg:text-5xl"
            >
              How I got here
            </motion.h2>
          </div>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={getTransition(0.16, 0.5)}
            className="text-sm sm:text-base lg:text-lg leading-relaxed text-black/75 dark:text-[#BEB7A4]"
          >
            A chronological timeline of my evolution from computer science and Java fundamentals to architecting and leading modern full-stack products.
          </motion.p>
        </div>

        {/* ========================================================
            VERTICAL CONNECTED TIMELINE TRACK
        ========================================================= */}
        <div className="relative pl-6 sm:pl-10 lg:pl-12">
          {/* Glowing Vertical Spine Line */}
          <div className="absolute left-[11px] sm:left-[17px] top-4 bottom-8 w-[2px] bg-gradient-to-b from-[#FF7F11] via-[#FF7F11]/40 to-black/10 dark:to-white/10" />

          {/* Timeline Nodes */}
          <div className="space-y-8 sm:space-y-10">
            {timelineStages.map((stage, index) => (
              <motion.div
                key={stage.step}
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={getTransition(0.2 + index * 0.08, 0.55)}
                className="relative group"
              >
                {/* Milestone Node on Spine Line */}
                <div
                  className={`absolute -left-[19px] sm:-left-[29px] top-4 sm:top-5 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border transition-all duration-300 ${stage.isCurrent
                    ? "border-[#FF7F11] bg-[#FF7F11] text-white shadow-[0_0_14px_rgba(255,127,17,0.7)]"
                    : "border-black/20 dark:border-white/20 bg-[#F7F4EC] dark:bg-[#070707] text-[#FF7F11] group-hover:border-[#FF7F11] group-hover:shadow-[0_0_8px_rgba(255,127,17,0.4)]"
                    }`}
                >
                  {stage.isCurrent ? (
                    <span className="h-2 w-2 rounded-full bg-white animate-ping" />
                  ) : (
                    <span className="font-mono text-[10px] sm:text-[11px] font-bold">
                      {stage.step}
                    </span>
                  )}
                </div>

                {/* Milestone Card */}
                <div
                  className={`rounded-2xl border transition-all duration-300 p-5 sm:p-7 ${stage.isCurrent
                    ? "border-[#FF7F11]/40 bg-gradient-to-br from-[#FF7F11]/[0.05] to-transparent dark:from-[#FF7F11]/[0.07] dark:to-transparent shadow-sm dark:shadow-[0_0_25px_rgba(255,127,17,0.06)]"
                    : "border-black/15 dark:border-white/10 bg-black/[0.015] dark:bg-white/[0.02] hover:border-[#FF7F11]/40 hover:bg-black/[0.025] dark:hover:bg-white/[0.035]"
                    }`}
                >
                  {/* Top Row: Year Pill + Milestone Deliverable Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2.5 mb-3">
                    <div className="flex items-center gap-2">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 font-mono text-[10px] sm:text-[10.5px] font-semibold uppercase tracking-wider ${stage.isCurrent
                          ? "bg-[#FF7F11]/15 text-[#FF7F11] border border-[#FF7F11]/30"
                          : "bg-black/5 dark:bg-white/5 text-black/70 dark:text-[#BEB7A4] border border-black/10 dark:border-white/10"
                          }`}
                      >
                        {stage.isCurrent && (
                          <span className="h-1.5 w-1.5 rounded-full bg-[#FF7F11] animate-pulse" />
                        )}
                        {stage.periodLabel}
                      </span>
                    </div>

                    {/* Milestone Project Tag */}
                    {stage.milestoneLink ? (
                      <a
                        href={stage.milestoneLink}
                        className="group/link inline-flex items-center gap-1 font-mono text-[10px] sm:text-[10.5px] font-semibold text-[#FF7F11] hover:underline"
                      >
                        <span>{stage.milestone}</span>
                        <span className="text-[9px] transition-transform duration-200 group-hover/link:translate-x-0.5">
                          →
                        </span>
                      </a>
                    ) : (
                      <span className="font-mono text-[10px] sm:text-[10.5px] font-medium text-black/50 dark:text-[#BEB7A4]/60">
                        {stage.milestone}
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-black dark:text-[#FFFFFC]">
                    {stage.title}
                  </h3>

                  <p className="mt-1 text-xs sm:text-sm font-semibold text-[#FF7F11] leading-tight">
                    {stage.subtitle}
                  </p>

                  {/* Narrative Body */}
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-black/75 dark:text-[#BEB7A4]">
                    {stage.narrative}
                  </p>

                  {/* Core Skills for this Phase */}
                  <div className="mt-4 pt-3.5 border-t border-black/10 dark:border-white/10">
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                      <span className="font-mono text-[9px] uppercase tracking-wider text-black/40 dark:text-white/40 mr-1 shrink-0">
                        SKILLS:
                      </span>
                      {stage.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.04] px-2 py-0.5 text-[10px] font-medium text-black/80 dark:text-[#FFFFFC]/90"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ========================================================
            BOTTOM STATUS: NOW — BUILDING & LEADING
        ========================================================= */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={getTransition(0.65, 0.5)}
          className="mt-14 sm:mt-18 border-t border-black/15 dark:border-white/10 pt-7"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#FF7F11]">
                NOW
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF7F11] shadow-[0_0_8px_#FF7F11]" />
              <p className="text-xs sm:text-sm font-medium text-black dark:text-[#FFFFFC]">
                Building products. Improving architecture. Growing as an engineer.
              </p>
            </div>

            <span className="font-mono text-xs tracking-widest text-black/40 dark:text-[#BEB7A4]/50">
              03 — CAREER TIMELINE
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}