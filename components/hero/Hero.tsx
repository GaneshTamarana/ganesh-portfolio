"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Transition,
} from "framer-motion";
import HeroTechShowcase from "./HeroTechShowcase";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

  // Scroll-driven fluid parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const scrollTextY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const scrollTextOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.35]);

  const reveal = (
    delay = 0,
    yOffset = 16,
    duration = 0.5
  ): Partial<Parameters<typeof motion.div>[0]> => ({
    initial: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: yOffset },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: shouldReduceMotion ? 0.01 : duration,
      delay: shouldReduceMotion ? 0 : delay,
      ease: EASE,
    } as Transition,
  });

  return (
    <section
      ref={sectionRef}
      id="home"
      className="
        relative
        flex
        min-h-[100svh]
        w-full
        max-w-[100vw]
        flex-col
        justify-between
        overflow-x-clip
        bg-[#F7F4EC]
        text-[#0F0F0F]
        transition-colors
        duration-500
        ease-in-out
        dark:bg-[#070707]
        dark:text-[#FFFFFF]
      "
    >
      {/* ========================================================
          HERO MAIN CONTENT CONTAINER
      ========================================================= */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-7xl
          min-w-0
          flex-1
          flex-col
          justify-center
          px-5
          pt-28
          pb-10
          sm:px-8
          sm:pt-32
          lg:px-12
          lg:pt-20
          lg:pb-4
        "
      >
        <div className="relative flex w-full min-w-0 flex-col items-center lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          {/* ====================================================
              LEFT CONTENT COLUMN (TEXT, HEADING, BUTTONS)
          ===================================================== */}
          <motion.div
            style={{
              y: shouldReduceMotion ? 0 : scrollTextY,
              opacity: shouldReduceMotion ? 1 : scrollTextOpacity,
            }}
            className="relative z-20 w-full min-w-0 max-w-2xl text-left lg:max-w-[53%]"
          >
            {/* Eyebrow with orange indicator dot */}
            <motion.div
              {...reveal(0.0)}
              className="mb-4 flex items-center gap-2 sm:mb-6"
            >
              <span
                className="
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.24em]
                  text-neutral-800
                  dark:text-neutral-300
                  sm:text-xs
                  sm:tracking-[0.26em]
                "
              >
                Full Stack Developer
              </span>
              <span className="h-2 w-2 rounded-full bg-[#FF5500] shadow-[0_0_8px_#FF5500]" />
            </motion.div>

            {/* Main Headline: 3 Lines in desktop view */}
            <h1
              className="
                text-[clamp(2.4rem,4.4vw,4.35rem)]
                font-extrabold
                leading-[1.04]
                tracking-[-0.035em]
              "
            >
              <motion.span
                {...reveal(0.05)}
                className="block whitespace-nowrap text-[#0E0E0E] dark:text-[#FFFFFF]"
              >
                Turning ideas
              </motion.span>

              <motion.span
                {...reveal(0.1)}
                className="block whitespace-nowrap text-[#0E0E0E] dark:text-[#FFFFFF]"
              >
                into
              </motion.span>

              <motion.span
                {...reveal(0.15)}
                className="block whitespace-nowrap text-[#FF5500] dark:text-[#FF5500] drop-shadow-[0_0_24px_rgba(255,85,0,0.3)]"
              >
                real products.
              </motion.span>
            </h1>

            {/* Subtitle / Bio */}
            <motion.p
              {...reveal(0.16)}
              className="
                mt-5
                max-w-[480px]
                text-sm
                leading-relaxed
                text-neutral-600
                dark:text-neutral-400
                sm:mt-7
                sm:text-base
                sm:leading-7
              "
            >
              I build scalable web applications using modern technologies and focus
              on creating solutions that solve real-world problems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              {...reveal(0.22)}
              className="mt-6 flex flex-wrap items-center gap-3 sm:mt-9 sm:gap-4"
            >
              {/* Primary: View My Work */}
              <Link
                href="#projects"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2.5
                  rounded-full
                  bg-[#0E0E0E]
                  px-6
                  py-3.5
                  text-xs
                  font-semibold
                  text-[#FFFFFF]
                  shadow-md
                  transition-all
                  duration-200
                  hover:scale-[1.02]
                  hover:bg-neutral-800
                  dark:bg-[#FFFFFF]
                  dark:text-[#000000]
                  dark:shadow-[0_0_20px_rgba(255,255,255,0.18)]
                  dark:hover:bg-[#F2F2F2]
                  sm:px-7
                  sm:py-3.5
                  sm:text-sm
                "
              >
                <span>View My Work</span>
                <span className="text-base font-bold leading-none text-[#FF5500] transition-transform duration-200 group-hover:translate-x-1 dark:text-[#FF5500]">
                  →
                </span>
              </Link>

              {/* Secondary: Let's Connect */}
              <Link
                href="#contact"
                className="
                  inline-flex
                  items-center
                  rounded-full
                  border
                  border-black/20
                  bg-white/40
                  px-6
                  py-3.5
                  text-xs
                  font-medium
                  text-[#0E0E0E]
                  backdrop-blur-sm
                  transition-all
                  duration-200
                  hover:border-black/40
                  hover:bg-white/80
                  dark:border-white/15
                  dark:bg-white/[0.04]
                  dark:text-neutral-200
                  dark:hover:border-white/30
                  dark:hover:bg-white/[0.08]
                  dark:hover:text-[#FFFFFF]
                  sm:px-7
                  sm:py-3.5
                  sm:text-sm
                "
              >
                Let&apos;s Connect
              </Link>
            </motion.div>
          </motion.div>

          {/* ====================================================
              RIGHT CONTENT COLUMN (3D TECH ECOSYSTEM & SHOWCASE)
          ===================================================== */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: shouldReduceMotion ? 0.01 : 0.6,
              delay: shouldReduceMotion ? 0 : 0.1,
              ease: EASE,
            }}
            className="
              relative
              mt-10
              flex
              w-full
              min-w-0
              items-center
              justify-center
              lg:mt-0
              lg:w-[48%]
              lg:max-w-[620px]
              shrink-0
            "
          >
            <HeroTechShowcase />
          </motion.div>
        </div>
      </div>

      {/* ========================================================
          HERO FOOTER / STATUS BAR
      ========================================================= */}
      <motion.div
        {...reveal(0.3, 8)}
        className="
          relative
          z-20
          mx-auto
          flex
          w-full
          max-w-7xl
          min-w-0
          items-center
          justify-between
          px-5
          pb-6
          pt-4
          sm:px-8
          sm:pb-8
          lg:px-12
        "
      >
        {/* Left: Next badge + BASED IN INDIA + orange indicator dot */}
        <div className="flex items-center gap-3">
          <div
            className="
              flex
              h-7
              w-7
              items-center
              justify-center
              rounded-full
              border
              border-black/20
              text-[10px]
              font-bold
              text-black
              dark:border-white/20
              dark:text-white
            "
          >
            N
          </div>

          <div className="h-3 w-px bg-black/20 dark:bg-white/20" />

          <span
            className="
              text-[10px]
              font-semibold
              tracking-[0.24em]
              text-neutral-800
              dark:text-neutral-300
            "
          >
            BASED IN INDIA
          </span>

          <span className="h-1.5 w-1.5 rounded-full bg-[#FF5500] shadow-[0_0_8px_#FF5500]" />
        </div>

        {/* Center: SCROLL indicator mouse pill */}
        <div className="hidden flex-col items-center gap-1.5 sm:flex">
          <span
            className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.35em]
              text-neutral-700
              dark:text-neutral-400
            "
          >
            SCROLL
          </span>

          <div
            className="
              flex
              h-6
              w-3.5
              justify-center
              rounded-full
              border
              border-black/30
              pt-1
              dark:border-white/30
            "
          >
            <motion.div
              animate={
                shouldReduceMotion
                  ? undefined
                  : { y: [0, 6, 0] }
              }
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-1.5 w-0.5 rounded-full bg-[#FF5500]"
            />
          </div>
        </div>

        {/* Right: Social Links (GH, IN, X, YT) */}
        <div
          className="
            flex
            items-center
            gap-3.5
            text-[10px]
            font-semibold
            tracking-wider
            text-neutral-700
            dark:text-neutral-400
            sm:gap-6
            sm:text-[11px]
          "
        >
          <a
            href="https://github.com/ganesh-tamaran"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-black dark:hover:text-white"
          >
            GH
          </a>
          <a
            href="https://linkedin.com/in/ganesh-tamaran"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-black dark:hover:text-white"
          >
            IN
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-black dark:hover:text-white"
          >
            X
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-black dark:hover:text-white"
          >
            YT
          </a>
        </div>
      </motion.div>
    </section>
  );
}