"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView, useReducedMotion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

type FilterType = "all" | "professional" | "personal";

interface FeatureTag {
  label: string;
  icon: string;
}

interface ProjectData {
  number: string;
  meta: string;
  type: "professional" | "personal";
  title: string;
  subtitle: string;
  description: string;
  features: FeatureTag[];
  stack: string[];
  image: string;
  domain: string;
  link: string;
}

const projectsList: ProjectData[] = [
  {
    number: "01",
    meta: "PROFESSIONAL · DILSHAJ INFOTECH",
    type: "professional",
    title: "EduProva",
    subtitle: "AI-Powered EdTech Platform",
    description:
      "A multi-module platform combining learning, social networking, AI tools, job discovery, and a freelance marketplace.",
    features: [
      { label: "Learning Management", icon: "📑" },
      { label: "AI Mentor", icon: "🤖" },
      { label: "Job Portal", icon: "💼" },
      { label: "Freelance Marketplace", icon: "🖋️" },
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "NestJS",
      "MongoDB",
      "Redis",
      "Socket.IO",
      "AI Services",
    ],
    image: "/images/projects/eduprova.png",
    domain: "eduprova.app",
    link: "#",
  },
  {
    number: "02",
    meta: "PROFESSIONAL · DILSHAJ INFOTECH",
    type: "professional",
    title: "Freelance Marketplace",
    subtitle: "Marketplace & Freelance Product Development",
    description:
      "A standalone marketplace for discovering services, onboarding freelancers, managing orders, contracts, payments, and project workflows.",
    features: [
      { label: "Service Discovery", icon: "🛒" },
      { label: "Secure Payments", icon: "💳" },
      { label: "Real-time Chat", icon: "💬" },
      { label: "Project Management", icon: "📊" },
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "NestJS",
      "MongoDB",
      "Redis",
      "Socket.IO",
      "Razorpay",
    ],
    image: "/images/projects/freelance.png",
    domain: "freelance-marketplace.app",
    link: "#",
  },
  {
    number: "03",
    meta: "FULL-STACK · INDEPENDENT",
    type: "personal",
    title: "E-Commerce Application",
    subtitle: "Java Spring Boot + React",
    description:
      "A full-stack e-commerce application with product management, user authentication, cart, order management, and secure payment integration.",
    features: [
      { label: "Product Catalog", icon: "📦" },
      { label: "User Authentication", icon: "👤" },
      { label: "Order Management", icon: "🛒" },
      { label: "Payment Integration", icon: "💳" },
    ],
    stack: [
      "Java",
      "Spring Boot",
      "Hibernate",
      "MySQL",
      "React",
      "REST APIs",
    ],
    image: "/images/projects/ecommerce.jpg",
    domain: "ecommerce-store.app",
    link: "#",
  },
  {
    number: "04",
    meta: "PERSONAL PROJECT · INDEPENDENT",
    type: "personal",
    title: "Task Manager",
    subtitle: "Full-Stack Productivity Application",
    description:
      "A task management application with authentication, protected routes, team collaboration, and real-time updates.",
    features: [
      { label: "Task Management", icon: "📋" },
      { label: "Team Collaboration", icon: "👥" },
      { label: "Real-time Updates", icon: "⚡" },
      { label: "Progress Tracking", icon: "📈" },
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Socket.IO"],
    image: "/images/projects/task-manager.png",
    domain: "task-manager.app",
    link: "#",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState<FilterType>("all");
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.06 });
  const shouldReduceMotion = useReducedMotion();

  const filteredProjects = projectsList.filter((p) => {
    if (filter === "all") return true;
    return p.type === filter;
  });

  const getTransition = (delay = 0, duration = 0.5) => ({
    duration: shouldReduceMotion ? 0.01 : duration,
    delay: shouldReduceMotion ? 0 : delay,
    ease: EASE,
  });

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative w-full overflow-hidden py-16 sm:py-24 lg:py-32"
    >
      <div className="mx-auto w-full max-w-6xl min-w-0 px-4 sm:px-6 lg:px-10">
        {/* ========================================================
            HEADER: 03 / PROJECTS + Title + Description
        ========================================================= */}
        <div className="mb-8 sm:mb-10">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={getTransition(0.04, 0.45)}
            className="flex items-center gap-2 mb-2"
          >
            <span className="font-mono text-xs font-semibold text-[#FF7F11]">03</span>
            <span className="text-black/30 dark:text-white/30 text-xs">/</span>
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-black/60 dark:text-[#BEB7A4]">
              PROJECTS
            </span>
          </motion.div>

          <motion.h2
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={getTransition(0.1, 0.5)}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black dark:text-[#FFFFFC] leading-none"
          >
            Things I&apos;ve
            <br />
            built.
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={getTransition(0.16, 0.5)}
            className="mt-3 text-xs sm:text-sm leading-relaxed text-black/70 dark:text-[#BEB7A4] max-w-xl"
          >
            A selection of professional products and full-stack applications I&apos;ve worked on across different stages of my development journey.
          </motion.p>
        </div>

        {/* ========================================================
            FILTER PILLS (Matches Mobile Screenshot: All (4), etc.)
        ========================================================= */}
        <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap mb-6 sm:mb-8">
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={`rounded-full px-3.5 sm:px-4 py-1.5 text-xs font-medium transition-all duration-300 ${
              filter === "all"
                ? "border border-[#FF7F11] text-[#FF7F11] bg-[#FF7F11]/10 shadow-[0_0_10px_rgba(255,127,17,0.15)]"
                : "border border-black/15 dark:border-white/10 text-black/60 dark:text-white/60 hover:border-black/30 dark:hover:border-white/30 hover:text-black dark:hover:text-white"
            }`}
          >
            All (4)
          </button>

          <button
            type="button"
            onClick={() => setFilter("professional")}
            className={`rounded-full px-3.5 sm:px-4 py-1.5 text-xs font-medium transition-all duration-300 ${
              filter === "professional"
                ? "border border-[#FF7F11] text-[#FF7F11] bg-[#FF7F11]/10 shadow-[0_0_10px_rgba(255,127,17,0.15)]"
                : "border border-black/15 dark:border-white/10 text-black/60 dark:text-white/60 hover:border-black/30 dark:hover:border-white/30 hover:text-black dark:hover:text-white"
            }`}
          >
            Professional (2)
          </button>

          <button
            type="button"
            onClick={() => setFilter("personal")}
            className={`rounded-full px-3.5 sm:px-4 py-1.5 text-xs font-medium transition-all duration-300 ${
              filter === "personal"
                ? "border border-[#FF7F11] text-[#FF7F11] bg-[#FF7F11]/10 shadow-[0_0_10px_rgba(255,127,17,0.15)]"
                : "border border-black/15 dark:border-white/10 text-black/60 dark:text-white/60 hover:border-black/30 dark:hover:border-white/30 hover:text-black dark:hover:text-white"
            }`}
          >
            Personal (2)
          </button>
        </div>

        {/* ========================================================
            PROJECTS CARDS: EXACT MATCH TO MOBILE SCREENSHOT
        ========================================================= */}
        <div className="space-y-5 sm:space-y-7">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.number}
                layout
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
                transition={getTransition(index * 0.07, 0.5)}
                className="group relative rounded-2xl sm:rounded-3xl border border-black/15 dark:border-white/10 bg-black/[0.02] dark:bg-[#070707] p-4.5 sm:p-6 lg:p-7 transition-all duration-300 hover:border-[#FF7F11]/50 dark:hover:border-[#FF7F11]/50 dark:hover:bg-[#090909]"
              >
                {/* 1. Top Bar: 01   PROFESSIONAL · DILSHAJ INFOTECH */}
                <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
                  <span className="font-mono text-sm sm:text-base font-bold text-[#FF7F11]">
                    {project.number}
                  </span>
                  <span className="font-mono text-[9.5px] sm:text-[10.5px] uppercase tracking-[0.16em] text-black/50 dark:text-[#BEB7A4]/70 truncate">
                    {project.meta}
                  </span>
                </div>

                {/* 2. Middle Row: Left Details & Right Mockup */}
                <div className="grid grid-cols-[1fr_135px] sm:grid-cols-[1fr_200px] md:grid-cols-[1fr_280px] lg:grid-cols-[1fr_360px] gap-3 sm:gap-6 items-start">
                  {/* Left Column: Title, Subtitle, Description, Features, Tech Stack */}
                  <div className="min-w-0">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-black dark:text-[#FFFFFC] leading-tight">
                      {project.title}
                    </h3>

                    <p className="mt-1 text-xs sm:text-sm font-semibold text-[#FF7F11] leading-tight">
                      {project.subtitle}
                    </p>

                    <p className="mt-2 text-[11.5px] sm:text-xs lg:text-[13px] leading-relaxed text-black/75 dark:text-[#BEB7A4] line-clamp-3 sm:line-clamp-none">
                      {project.description}
                    </p>

                    {/* Features (2x2 grid with icons) */}
                    <div className="mt-3 sm:mt-4 grid grid-cols-2 gap-x-2 gap-y-1.5 sm:gap-x-4 sm:gap-y-2">
                      {project.features.map((feat) => (
                        <div
                          key={feat.label}
                          className="flex items-center gap-1.5 text-[10.5px] sm:text-[11.5px] text-black/80 dark:text-[#BEB7A4] truncate"
                        >
                          <span className="text-xs shrink-0 text-[#FF7F11]">
                            {feat.icon}
                          </span>
                          <span className="truncate">{feat.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Row */}
                    <div className="mt-3.5 sm:mt-4">
                      <span className="block font-mono text-[9px] sm:text-[9.5px] uppercase tracking-[0.18em] text-black/40 dark:text-white/40 mb-1.5">
                        TECH STACK
                      </span>
                      <div className="flex flex-wrap gap-1 sm:gap-1.5">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.04] px-2 py-0.5 text-[9.5px] sm:text-[10.5px] text-black/80 dark:text-white/80"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Browser Mockup Preview */}
                  <div className="w-full shrink-0 self-center">
                    <div className="overflow-hidden rounded-lg sm:rounded-xl border border-black/15 dark:border-white/15 bg-black dark:bg-[#000000] shadow-sm">
                      {/* Browser Chrome Bar */}
                      <div className="flex h-5 sm:h-6 items-center justify-between border-b border-black/15 dark:border-white/10 bg-black/[0.04] dark:bg-[#111111] px-2">
                        <div className="flex items-center gap-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-red-500/80" />
                          <span className="h-1.5 w-1.5 rounded-full bg-yellow-500/80" />
                          <span className="h-1.5 w-1.5 rounded-full bg-green-500/80" />
                        </div>
                        <span className="font-mono text-[7.5px] sm:text-[9px] text-black/50 dark:text-white/50 truncate max-w-[70%]">
                          {project.domain}
                        </span>
                        <div className="w-2" />
                      </div>

                      {/* Preview Image */}
                      <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden bg-black/5 dark:bg-[#000000]">
                        <Image
                          src={project.image}
                          alt={`${project.title} preview`}
                          fill
                          sizes="(max-width: 640px) 135px, (max-width: 1024px) 280px, 360px"
                          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Bottom Action Row: VIEW PROJECT (Left) ─────── ( → ) (Right) */}
                <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 flex items-center justify-between border-t border-black/10 dark:border-white/10">
                  <a
                    href={project.link}
                    className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#FF7F11] hover:underline"
                  >
                    VIEW PROJECT
                  </a>

                  <a
                    href={project.link}
                    aria-label={`View ${project.title}`}
                    className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border border-black/15 dark:border-white/15 bg-black/5 dark:bg-white/5 text-[#FF7F11] transition-all duration-300 group-hover:border-[#FF7F11]/50 group-hover:bg-[#FF7F11]/10 group-hover:translate-x-0.5"
                  >
                    <svg
                      className="h-3 w-3 sm:h-3.5 sm:w-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}