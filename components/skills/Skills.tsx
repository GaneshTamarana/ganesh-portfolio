"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

type SkillCategory = {
  number: string;
  title: string;
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  {
    number: "01",
    title: "FRONTEND",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "HTML / CSS",
    ],
  },
  {
    number: "02",
    title: "BACKEND",
    skills: [
      "Node.js",
      "NestJS",
      "Express",
      "REST APIs",
      "Socket.IO",
      "WebSockets",
    ],
  },
  {
    number: "03",
    title: "DATABASE & CACHE",
    skills: ["MongoDB", "Mongoose", "Redis", "SQL"],
  },
  {
    number: "04",
    title: "DEVOPS & INFRASTRUCTURE",
    skills: ["Docker", "Git", "GitHub Actions", "Kubernetes", "CI/CD"],
  },
  {
    number: "05",
    title: "AI & INTEGRATIONS",
    skills: [
      "Gemini",
      "Google STT/TTS",
      "AI Services",
      "Cloudinary",
      "Mux",
      "Razorpay",
    ],
  },
  {
    number: "06",
    title: "PREVIOUS EXPERIENCE",
    skills: ["Java", "Spring Boot", "Hibernate", "SQL"],
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });
  const shouldReduceMotion = useReducedMotion();

  const getTransition = (delay = 0, duration = 0.5) => ({
    duration: shouldReduceMotion ? 0.01 : duration,
    delay: shouldReduceMotion ? 0 : delay,
    ease: EASE,
  });

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative w-full overflow-hidden py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto w-full max-w-5xl min-w-0 px-5 sm:px-8 lg:px-12">
        {/* ========================================================
            HEADER: 02 / SKILLS + Headline + Supporting line
        ========================================================= */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={getTransition(0.04, 0.45)}
            className="inline-flex items-center justify-center gap-3"
          >
            <span className="h-px w-6 bg-[#FF7F11]" />
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-[#FF7F11]">
              02 / SKILLS
            </span>
            <span className="h-px w-6 bg-[#FF7F11]" />
          </motion.div>

          <motion.h2
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={getTransition(0.1, 0.5)}
            className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-black dark:text-[#FFFFFC] sm:text-4xl lg:text-5xl"
          >
            What I build with.
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={getTransition(0.16, 0.5)}
            className="mt-4 text-sm sm:text-base leading-relaxed text-black/70 dark:text-[#BEB7A4]"
          >
            A practical stack shaped by product work, experimentation, and continuous learning.
          </motion.p>
        </div>

        {/* ========================================================
            EDITORIAL HORIZONTAL BANDS
        ========================================================= */}
        <div className="mt-12 sm:mt-16 border-t border-black/10 dark:border-[#BEB7A4]/15">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.number}
              initial={shouldReduceMotion ? { opacity: 0, y: 14 } : { opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={getTransition(0.2 + index * 0.06, 0.5)}
              className="border-b border-black/10 dark:border-[#BEB7A4]/15 py-6 sm:py-7 lg:py-8"
            >
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-[280px_1fr] lg:gap-10 lg:items-baseline">
                {/* Category Identity: 01 FRONTEND */}
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-sm sm:text-base font-semibold text-[#FF7F11]">
                    {category.number}
                  </span>
                  <h3 className="text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-black dark:text-[#FFFFFC]">
                    {category.title}
                  </h3>
                </div>

                {/* Technologies List */}
                <div className="flex flex-wrap items-center gap-x-6 sm:gap-x-8 lg:gap-x-10 gap-y-2.5 sm:gap-y-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-base sm:text-lg font-medium text-black/75 dark:text-[#BEB7A4] transition-colors duration-200 hover:text-[#FF7F11] dark:hover:text-[#FFFFFC] cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}