"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const characteristics = [
  {
    number: "01",
    title: "DEVELOPER",
    description: "I build with purpose.",
  },
  {
    number: "02",
    title: "FULL STACK",
    description: "Frontend to backend.",
  },
  {
    number: "03",
    title: "PRODUCT MINDSET",
    description: "Technology serves users.",
  },
  {
    number: "04",
    title: "ALWAYS LEARNING",
    description: "Improving with every build.",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const shouldReduceMotion = useReducedMotion();

  const getTransition = (delay = 0, duration = 0.55) => ({
    duration: shouldReduceMotion ? 0.01 : duration,
    delay: shouldReduceMotion ? 0 : delay,
    ease: EASE,
  });

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full overflow-hidden py-24 sm:py-32 lg:py-36"
    >
      <div className="mx-auto w-full max-w-7xl min-w-0 px-5 sm:px-8 lg:px-12">
        {/* Step 1: 01 / ABOUT appears subtly */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={getTransition(0.04, 0.5)}
          className="mb-12 flex items-center gap-3 sm:mb-16"
        >
          <span className="h-px w-8 bg-[#FF7F11] dark:bg-[#FF7F11]" />

          <span className="text-xs font-medium uppercase tracking-[0.3em] text-black/60 dark:text-[#BEB7A4]">
            <span className="text-[#FF7F11]">01</span> / About
          </span>
        </motion.div>

        {/* Main content grid */}
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Left side */}
          <div>
            <motion.p
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={getTransition(0.1, 0.45)}
              className="text-sm font-medium uppercase tracking-[0.2em] text-black/60 dark:text-[#BEB7A4]"
            >
              Who I am
            </motion.p>

            <div className="mt-5 max-w-sm">
              <h2 className="text-4xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
                {/* Step 2: "More than" slides/fades upward */}
                <span className="block overflow-hidden pb-1">
                  <motion.span
                    className="block text-[#000000] dark:text-[#FFFFFC]"
                    initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 32 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={getTransition(0.18, 0.55)}
                  >
                    More than
                  </motion.span>
                </span>

                {/* Step 3: "just code." in #FFFFFC creates contrast against stone background */}
                <span className="block overflow-hidden pt-1">
                  <motion.span
                    className="block text-[#FFFFFC] dark:text-[#BEB7A4]"
                    initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 32 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={getTransition(0.28, 0.55)}
                  >
                    just code.
                  </motion.span>
                </span>
              </h2>
            </div>
          </div>

          {/* Right side */}
          <div className="max-w-3xl">
            {/* Step 4: Narrative introduction */}
            <motion.p
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={getTransition(0.38, 0.6)}
              className="text-2xl font-medium leading-[1.2] tracking-[-0.03em] text-[#000000] dark:text-[#FFFFFC] sm:text-3xl lg:text-4xl"
            >
              I&apos;m a Full Stack Developer who enjoys turning ideas into
              useful, scalable digital products.
            </motion.p>

            {/* Step 5: Paragraphs appear sequentially */}
            <div className="mt-6 space-y-4 text-base leading-7 text-black/75 dark:text-[#BEB7A4] sm:text-lg sm:leading-8">
              <motion.p
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={getTransition(0.48, 0.55)}
              >
                My work spans frontend interfaces, backend systems, APIs,
                databases, and the infrastructure that brings everything
                together.
              </motion.p>

              <motion.p
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={getTransition(0.58, 0.55)}
              >
                I enjoy understanding how a product works as a whole—not just
                writing individual features. From designing an interface to
                structuring APIs and optimizing application performance, I like
                working across the stack.
              </motion.p>

              <motion.p
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={getTransition(0.68, 0.55)}
              >
                I&apos;m particularly interested in building products that
                balance clean user experiences with solid engineering
                foundations.
              </motion.p>
            </div>
          </div>
        </div>

        {/* Divider & 4 Compact Characteristics */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={getTransition(0.75, 0.6)}
        >
          {/* Divider */}
          <div className="my-12 sm:my-16 h-px bg-black/15 dark:bg-[#BEB7A4]/15" />

          {/* 4 Compact Characteristics: 4 columns on desktop, 2x2 on mobile */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-4 lg:gap-8">
            {characteristics.map((item, index) => (
              <motion.div
                key={item.number}
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={getTransition(0.82 + index * 0.08, 0.5)}
                className="flex flex-col"
              >
                <div className="flex items-baseline gap-2.5">
                  <span className="font-mono text-xs font-semibold text-[#FF7F11]">
                    {item.number}
                  </span>
                  <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black dark:text-[#FFFFFC]">
                    {item.title}
                  </h3>
                </div>

                <p className="mt-2 text-xs leading-relaxed text-black/70 dark:text-[#BEB7A4]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Minimal Bottom Status: Currently building & craft */}
          <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-black/15 dark:border-[#BEB7A4]/15 pt-6">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-black/50 dark:text-[#BEB7A4]/60">
                CURRENTLY
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF7F11] shadow-[0_0_6px_#FF7F11]" />
              <span className="text-xs sm:text-sm font-medium text-black dark:text-[#FFFFFC]">
                Building products &amp; improving my craft.
              </span>
            </div>

            <span className="text-[10px] font-mono tracking-[0.25em] text-black/40 dark:text-[#BEB7A4]/50">
              01 — ABOUT
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}