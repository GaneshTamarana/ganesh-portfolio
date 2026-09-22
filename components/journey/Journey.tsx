"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView, useReducedMotion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

interface JourneyStage {
  id: string;
  step: string;
  navTitle: string;
  title: string;
  subtitle: string;
  narrative: string;
  technologies: string[];
}

const stages: JourneyStage[] = [
  {
    id: "java",
    step: "01",
    navTitle: "JAVA",
    title: "JAVA FOUNDATIONS",
    subtitle: "Programming Fundamentals & Relational Systems",
    narrative:
      "Built my foundation in software engineering through Java, object-oriented programming, relational databases, and backend fundamentals. Learned how systems manage memory, execute logic, and reliably persist data through SQL and JDBC.",
    technologies: ["Java", "SQL", "OOP", "JDBC"],
  },
  {
    id: "spring",
    step: "02",
    navTitle: "SPRING BOOT",
    title: "BACKEND ENGINEERING",
    subtitle: "Enterprise Backend & REST Architecture",
    narrative:
      "Moved deeper into backend development, building robust web applications and an e-commerce platform with Spring Boot, Hibernate/JPA, MySQL, and structured REST APIs. Focused on database modeling, layered architecture, and server-side performance.",
    technologies: ["Spring Boot", "Hibernate / JPA", "MySQL", "REST APIs"],
  },
  {
    id: "web",
    step: "03",
    navTitle: "MODERN WEB",
    title: "MODERN WEB DEVELOPMENT",
    subtitle: "Transition to Component UI & Event-Driven Systems",
    narrative:
      "Expanded from Java into the modern web ecosystem. Mastered JavaScript, React, Node.js, and MongoDB—connecting component-based, interactive user interfaces with flexible, asynchronous API backends.",
    technologies: ["JavaScript", "React", "Node.js", "MongoDB"],
  },
  {
    id: "fullstack",
    step: "04",
    navTitle: "FULL STACK",
    title: "FULL-STACK ARCHITECTURE",
    subtitle: "Production Systems & Scalable Stacks",
    narrative:
      "Started engineering production-oriented applications across frontend, backend, databases, real-time communication, and scalable application architecture using Next.js, TypeScript, NestJS, MongoDB, and Redis.",
    technologies: ["Next.js", "TypeScript", "NestJS", "MongoDB", "Redis", "Socket.IO"],
  },
  {
    id: "eduprova",
    step: "05",
    navTitle: "EDUPROVA",
    title: "EDUPROVA ECOSYSTEM",
    subtitle: "Full Stack Developer → Technical Project Lead",
    narrative:
      "Working across the EduProva ecosystem, building features across frontend, backend, AI integrations, real-time systems, and product workflows while coordinating technical implementation and engineering standards.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "NestJS",
      "MongoDB",
      "Redis",
      "Socket.IO",
      "AI",
    ],
  },
];

export default function Journey() {
  const [activeIndex, setActiveIndex] = useState(3); // Defaults to Full Stack (or 4 for EduProva)
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.12 });
  const shouldReduceMotion = useReducedMotion();

  const activeStage = stages[activeIndex];

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
      <div className="mx-auto w-full max-w-5xl min-w-0 px-5 sm:px-8 lg:px-12">
        {/* ========================================================
            HEADER: 03 / JOURNEY + Dual Column Headline
        ========================================================= */}
        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:items-end lg:gap-12">
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
              How I got here.
            </motion.h2>
          </div>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={getTransition(0.16, 0.5)}
            className="text-base sm:text-lg leading-relaxed text-black/75 dark:text-[#BEB7A4]"
          >
            From backend foundations in Java to building, architecting, and leading modern full-stack products.
          </motion.p>
        </div>

        {/* ========================================================
            CAREER EVOLUTION INTERFACE (Stages 01 — 05)
        ========================================================= */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0, y: 16 } : { opacity: 0, y: 22 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={getTransition(0.24, 0.55)}
          className="mt-12 sm:mt-16 rounded-xl border border-black/15 dark:border-[#BEB7A4]/20 bg-black/[0.015] dark:bg-[#FFFFFC]/[0.015] p-6 sm:p-8 lg:p-10"
        >
          {/* Timeline Navigation Tabs */}
          <div className="relative border-b border-black/10 dark:border-[#BEB7A4]/15 pb-4">
            <div className="flex items-center justify-between gap-2 overflow-x-auto no-scrollbar sm:grid sm:grid-cols-5 sm:gap-4">
              {stages.map((stage, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <button
                    key={stage.id}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className="group relative flex shrink-0 flex-col items-start px-2 py-2 text-left transition-colors sm:px-0"
                  >
                    <span
                      className={`font-mono text-[11px] font-semibold transition-colors duration-200 ${
                        isActive
                          ? "text-[#FF7F11]"
                          : "text-black/40 dark:text-[#BEB7A4]/50 group-hover:text-black dark:group-hover:text-[#FFFFFC]"
                      }`}
                    >
                      {stage.step}
                    </span>
                    <span
                      className={`mt-1 text-xs sm:text-sm font-bold tracking-wider transition-colors duration-200 ${
                        isActive
                          ? "text-black dark:text-[#FFFFFC]"
                          : "text-black/50 dark:text-[#BEB7A4]/60 group-hover:text-black dark:group-hover:text-[#FFFFFC]"
                      }`}
                    >
                      {stage.navTitle}
                    </span>

                    {/* Active Accent Dot & Bar */}
                    {isActive && (
                      <motion.div
                        layoutId="activeJourneyIndicator"
                        className="absolute -bottom-[17px] left-0 right-0 flex items-center justify-center sm:justify-start"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-[#FF7F11] shadow-[0_0_8px_#FF7F11]" />
                      </motion.div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Stage Details Content */}
          <div className="pt-8 sm:pt-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage.id}
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: EASE }}
                className="space-y-6"
              >
                <div>
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF7F11]">
                    Stage {activeStage.step}
                  </span>
                  <h3 className="mt-1 text-2xl font-semibold tracking-tight text-black dark:text-[#FFFFFC] sm:text-3xl">
                    {activeStage.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm font-medium uppercase tracking-wider text-black/50 dark:text-[#BEB7A4]/70">
                    {activeStage.subtitle}
                  </p>
                </div>

                <p className="max-w-3xl text-base sm:text-lg leading-relaxed text-black/80 dark:text-[#BEB7A4]">
                  {activeStage.narrative}
                </p>

                {/* Technologies List */}
                <div className="border-t border-black/10 dark:border-[#BEB7A4]/15 pt-5">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2 sm:gap-2.5">
                      {activeStage.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-black/15 bg-black/[0.04] px-3.5 py-1 text-xs font-medium text-black/85 transition-colors hover:border-[#FF7F11] dark:border-[#BEB7A4]/20 dark:bg-[#FFFFFC]/[0.04] dark:text-[#BEB7A4] dark:hover:border-[#FF7F11] dark:hover:text-[#FFFFFC]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <span className="font-mono text-xs tracking-widest text-black/40 dark:text-[#BEB7A4]/50">
                      {activeStage.step} / 05
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* ========================================================
            VISUAL CLIMAX: EDUPROVA SPOTLIGHT CARD
        ========================================================= */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0, y: 16 } : { opacity: 0, y: 22 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={getTransition(0.35, 0.55)}
          className="mt-12 sm:mt-16 rounded-xl border border-black/15 dark:border-[#BEB7A4]/25 bg-gradient-to-br from-black/[0.03] to-transparent dark:from-[#FFFFFC]/[0.03] dark:to-transparent p-7 sm:p-9 lg:p-11 relative overflow-hidden"
        >
          {/* Subtle Ambient Glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#FF7F11]/10 blur-3xl" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF7F11]">
                  2025 — Present · Dilshaj Infotech
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF7F11] shadow-[0_0_8px_#FF7F11]" />
              </div>

              <h3 className="mt-3 text-3xl font-bold tracking-tight text-black dark:text-[#FFFFFC] sm:text-4xl">
                EDUPROVA
              </h3>

              <p className="mt-2 text-sm sm:text-base font-semibold uppercase tracking-wider text-black/75 dark:text-[#BEB7A4]">
                Full Stack Developer → Technical Project Lead
              </p>

              <p className="mt-4 text-base sm:text-lg leading-relaxed text-black/80 dark:text-[#BEB7A4]">
                Building across frontend, backend, architecture, AI integrations, and real-time systems. Leading product feature execution, establishing architectural patterns, and coordinating technical workflows.
              </p>

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "React",
                  "TypeScript",
                  "NestJS",
                  "MongoDB",
                  "Redis",
                  "Socket.IO",
                  "AI Services",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-black/15 bg-black/[0.05] px-3.5 py-1 text-xs font-medium text-black/85 dark:border-[#BEB7A4]/20 dark:bg-[#FFFFFC]/[0.05] dark:text-[#FFFFFC]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:text-right shrink-0 pt-2">
              <span className="inline-block rounded border border-[#FF7F11]/40 bg-[#FF7F11]/10 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.18em] text-[#FF7F11]">
                Professional Climax
              </span>
            </div>
          </div>
        </motion.div>

        {/* ========================================================
            FINAL STATUS: NOW — BUILDING & LEADING
        ========================================================= */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={getTransition(0.45, 0.5)}
          className="mt-12 sm:mt-16 border-t border-black/15 dark:border-[#BEB7A4]/20 pt-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#FF7F11]">
                NOW
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF7F11] shadow-[0_0_8px_#FF7F11]" />
              <p className="text-sm sm:text-base font-medium text-black dark:text-[#FFFFFC]">
                Building products. Improving architecture. Growing as an engineer.
              </p>
            </div>

            <span className="font-mono text-xs tracking-widest text-black/40 dark:text-[#BEB7A4]/50">
              06 / NOW
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}