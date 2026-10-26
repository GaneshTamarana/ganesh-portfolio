"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useInView, useReducedMotion } from "framer-motion";
import { projectsList } from "@/data/projects";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

type FilterType = "all" | "professional" | "personal";

export default function Projects() {
  const [filter, setFilter] = useState<FilterType>("all");
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.06 });
  const shouldReduceMotion = useReducedMotion();

  const allCount = projectsList.length;
  const professionalCount = projectsList.filter((p) => p.type === "professional").length;
  const personalCount = projectsList.filter((p) => p.type === "personal").length;

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
      <div className="mx-auto w-full max-w-7xl min-w-0 px-4 sm:px-6 lg:px-8">
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
            built
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={getTransition(0.16, 0.5)}
            className="mt-3 text-xs sm:text-sm leading-relaxed text-black/70 dark:text-[#BEB7A4] max-w-xl"
          >
            A selection of professional products and full-stack applications I&apos;ve worked on. Click any project to explore its full technical case study and architecture.
          </motion.p>
        </div>

        {/* ========================================================
            FILTER PILLS
        ========================================================= */}
        <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap mb-6 sm:mb-8">
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={`rounded-full px-3.5 sm:px-4 py-1.5 text-xs font-medium transition-all duration-300 ${filter === "all"
              ? "border border-[#FF7F11] text-[#FF7F11] bg-[#FF7F11]/10 shadow-[0_0_10px_rgba(255,127,17,0.15)]"
              : "border border-black/15 dark:border-white/10 text-black/60 dark:text-white/60 hover:border-black/30 dark:hover:border-white/30 hover:text-black dark:hover:text-white"
              }`}
          >
            All ({allCount})
          </button>

          <button
            type="button"
            onClick={() => setFilter("professional")}
            className={`rounded-full px-3.5 sm:px-4 py-1.5 text-xs font-medium transition-all duration-300 ${filter === "professional"
              ? "border border-[#FF7F11] text-[#FF7F11] bg-[#FF7F11]/10 shadow-[0_0_10px_rgba(255,127,17,0.15)]"
              : "border border-black/15 dark:border-white/10 text-black/60 dark:text-white/60 hover:border-black/30 dark:hover:border-white/30 hover:text-black dark:hover:text-white"
              }`}
          >
            Professional ({professionalCount})
          </button>

          <button
            type="button"
            onClick={() => setFilter("personal")}
            className={`rounded-full px-3.5 sm:px-4 py-1.5 text-xs font-medium transition-all duration-300 ${filter === "personal"
              ? "border border-[#FF7F11] text-[#FF7F11] bg-[#FF7F11]/10 shadow-[0_0_10px_rgba(255,127,17,0.15)]"
              : "border border-black/15 dark:border-white/10 text-black/60 dark:text-white/60 hover:border-black/30 dark:hover:border-white/30 hover:text-black dark:hover:text-white"
              }`}
          >
            Personal ({personalCount})
          </button>
        </div>

        {/* ========================================================
            PROJECTS CARDS: 3-COLUMN GRID (50/50 Image & Data Split)
        ========================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isLive = Boolean(project.link?.startsWith("http"));
              const projectDetailUrl = `/projects/${project.slug}`;

              return (
                <motion.article
                  key={project.number}
                  layout
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
                  transition={getTransition(index * 0.05, 0.45)}
                  className="group flex flex-col rounded-2xl border border-black/15 dark:border-white/10 bg-black/[0.02] dark:bg-[#070707] overflow-hidden transition-all duration-300 hover:border-[#FF7F11]/50 dark:hover:border-[#FF7F11]/50 dark:hover:bg-[#090909] hover:-translate-y-1 shadow-xs hover:shadow-lg"
                >
                  {/* UPPER HALF: PROJECT IMAGE (~50% visual weight) */}
                  <Link
                    href={projectDetailUrl}
                    aria-label={`View ${project.title} case study`}
                    className="relative aspect-[16/10] w-full overflow-hidden bg-black/5 dark:bg-white/[0.03] block cursor-pointer border-b border-black/10 dark:border-white/10"
                  >
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading={index < 3 ? "eager" : "lazy"}
                      className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    />

                    {/* Floating badges on top of image */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                      <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-md bg-black/75 text-white backdrop-blur-md border border-white/10">
                        {project.number}
                      </span>
                      {isLive && (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-black/80 px-2.5 py-0.5 text-[9.5px] font-semibold text-emerald-400 backdrop-blur-md">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Live Site
                        </span>
                      )}
                    </div>
                  </Link>

                  {/* LOWER HALF: DATA & SPECIFIC SKILLS */}
                  <div className="flex flex-col flex-1 p-4.5 sm:p-5">
                    {/* Category / Meta */}
                    <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-black/50 dark:text-[#BEB7A4]/70 mb-1.5 truncate">
                      {project.meta}
                    </span>

                    {/* Title & Subtitle */}
                    <Link href={projectDetailUrl} className="group/title block">
                      <h3 className="text-lg sm:text-xl font-bold tracking-tight text-black dark:text-[#FFFFFC] leading-snug group-hover/title:text-[#FF7F11] transition-colors">
                        {project.title}
                      </h3>
                    </Link>

                    <p className="mt-0.5 text-xs font-semibold text-[#FF7F11] leading-tight truncate">
                      {project.subtitle}
                    </p>

                    {/* Description */}
                    <p className="mt-2 text-xs leading-relaxed text-black/70 dark:text-[#BEB7A4] line-clamp-2">
                      {project.description}
                    </p>

                    {/* Specific Skills / Tech Stack Section */}
                    <div className="mt-3.5 pt-3 border-t border-black/10 dark:border-white/10">
                      <span className="block font-mono text-[8.5px] uppercase tracking-[0.16em] text-black/40 dark:text-white/40 mb-1.5">
                        CORE SKILLS & TECH
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {project.stack.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.04] px-1.5 py-0.5 text-[9.5px] font-medium text-black/80 dark:text-white/80"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.stack.length > 4 && (
                          <span className="text-[9.5px] text-black/40 dark:text-white/40 self-center pl-0.5">
                            +{project.stack.length - 4}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Bottom Action Row */}
                    <div className="mt-auto pt-4 flex items-center justify-between border-t border-black/10 dark:border-white/10">
                      <Link
                        href={projectDetailUrl}
                        className="inline-flex items-center gap-1 font-mono text-[11px] font-bold uppercase tracking-wider text-[#FF7F11] hover:underline"
                      >
                        CASE STUDY →
                      </Link>

                      <div className="flex items-center gap-2.5">
                        {isLive && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 font-mono text-[10.5px] font-medium text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors"
                          >
                            <span>Live</span>
                            <span className="text-[9px]">↗</span>
                          </a>
                        )}

                        <Link
                          href={projectDetailUrl}
                          aria-label={`Explore ${project.title} case study`}
                          className="flex h-6 w-6 items-center justify-center rounded-full border border-black/15 dark:border-white/15 bg-black/5 dark:bg-white/5 text-[#FF7F11] transition-all duration-300 group-hover:border-[#FF7F11]/50 group-hover:bg-[#FF7F11]/10 group-hover:translate-x-0.5"
                        >
                          <svg
                            className="h-2.5 w-2.5"
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
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}