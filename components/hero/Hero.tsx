"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Transition,
} from "framer-motion";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

  // Scroll-driven fluid text effects
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const scrollTextY = useTransform(scrollYProgress, [0, 1], [0, -35]);
  const scrollTextOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.3]);

  const reveal = (delay = 0, yOffset = 14, duration = 0.48): Partial<Parameters<typeof motion.div>[0]> => ({
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
        bg-[#BEB7A4]
        text-[#000000]
        transition-colors
        duration-500
        ease-in-out
        dark:bg-[#000000]
        dark:text-[#FFFFFC]
      "
    >
      {/* =====================================================
          HERO MAIN CONTENT CONTAINER
      ====================================================== */}
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
          justify-start
          px-5
          pt-20
          pb-6
          sm:px-8
          sm:pt-24
          sm:pb-6
          lg:px-12
          lg:py-0
          lg:pt-16
          lg:justify-center
        "
      >
        {/* Row container aligning text & portrait base on desktop */}
        <div className="relative flex w-full min-w-0 flex-col lg:flex-row lg:items-end lg:justify-between">
          {/* =====================================================
              LEFT CONTENT COLUMN (TEXT, HEADING, BUTTONS)
          ====================================================== */}
          <motion.div
            style={{
              y: shouldReduceMotion ? 0 : scrollTextY,
              opacity: shouldReduceMotion ? 1 : scrollTextOpacity,
            }}
            className="relative z-20 w-full min-w-0 max-w-2xl lg:max-w-[50%]"
          >
            {/* Eyebrow with orange indicator */}
            <motion.div {...reveal(0.0)} className="mb-4 flex items-center gap-2.5 sm:mb-6">
              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.24em]
                  text-black
                  dark:text-[#BEB7A4]
                  sm:text-xs
                  sm:tracking-[0.26em]
                "
              >
                Full Stack Developer
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF7F11] shadow-[0_0_6px_#FF7F11]" />
            </motion.div>

            {/* Heading — Building (#000000), digital (#FFFFFC contrast), experiences. (#000000) */}
            <h1
              className="
                text-[clamp(2.1rem,5.5vw,5.2rem)]
                font-extrabold
                leading-[0.95]
                tracking-[-0.035em]
                break-words
                sm:leading-[0.93]
              "
            >
              <motion.span {...reveal(0.04)} className="block text-[#000000] dark:text-[#FFFFFC]">
                Building
              </motion.span>

              <motion.span
                {...reveal(0.09)}
                className="block text-[#FFFFFC] dark:text-[#BEB7A4]"
              >
                digital
              </motion.span>

              <motion.span
                {...reveal(0.14)}
                className="block text-[#000000] dark:text-[#BEB7A4]"
              >
                experiences.
              </motion.span>
            </h1>

            {/* Description */}
            <motion.p
              {...reveal(0.19)}
              className="
                mt-5
                max-w-[490px]
                text-sm
                leading-relaxed
                text-black/80
                dark:text-[#BEB7A4]
                sm:mt-7
                sm:text-base
                sm:leading-7
              "
            >
              I design and build modern web applications that combine clean
              interfaces, scalable architecture, and meaningful user experiences.
            </motion.p>

            {/* CTA Buttons — Orange accent interaction language */}
            <motion.div
              {...reveal(0.24)}
              className="mt-6 flex flex-wrap items-center gap-3 sm:mt-9 sm:gap-4"
            >
              <Link
                href="#projects"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2.5
                  rounded-full
                  bg-[#000000]
                  px-5
                  py-3
                  text-xs
                  font-semibold
                  text-[#FFFFFC]
                  shadow-md
                  transition-all
                  duration-200
                  hover:scale-[1.02]
                  hover:bg-[#FF7F11]
                  hover:text-[#000000]
                  dark:bg-[#FFFFFC]
                  dark:text-[#000000]
                  dark:hover:bg-[#FF7F11]
                  dark:hover:text-[#000000]
                  sm:px-7
                  sm:py-3.5
                  sm:text-sm
                "
              >
                <span>View My Work</span>
                <span className="text-base font-bold leading-none text-[#FF7F11] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-[#000000] dark:text-[#FF7F11] group-hover:dark:text-[#000000]">→</span>
              </Link>

              <Link
                href="#about"
                className="
                  inline-flex
                  items-center
                  rounded-full
                  border
                  border-[#000000]/20
                  bg-[#FFFFFC]/25
                  px-5
                  py-3
                  text-xs
                  font-medium
                  text-[#000000]
                  transition-all
                  duration-200
                  hover:bg-[#FFFFFC]/60
                  hover:border-[#000000]/40
                  dark:border-[#BEB7A4]/25
                  dark:bg-[#BEB7A4]/[0.04]
                  dark:text-[#BEB7A4]
                  dark:hover:border-[#FF7F11]/50
                  dark:hover:text-[#FFFFFC]
                  sm:px-7
                  sm:py-3.5
                  sm:text-sm
                "
              >
                About Me
              </Link>
            </motion.div>
          </motion.div>

          {/* =====================================================
              DESKTOP HERO VISUAL COMPOSITION (ALIGNED TO BUTTONS)
          ====================================================== */}
          <motion.div
            style={{
              perspective: 1100,
            }}
            initial={
              shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }
            }
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: shouldReduceMotion ? 0.01 : 0.6,
              delay: shouldReduceMotion ? 0 : 0.08,
              ease: EASE,
            }}
            className="
              pointer-events-none
              relative
              hidden
              min-w-0
              w-[46%]
              max-w-[530px]
              shrink-0
              lg:block
              xl:w-[44%]
              xl:max-w-[570px]
              2xl:w-[42%]
              2xl:max-w-[620px]
            "
          >
            {/* Inner aspect-ratio box locked to 1212/1297 */}
            <div
              style={{
                aspectRatio: '1212 / 1297',
              }}
              className="relative w-full overflow-hidden lg:overflow-visible"
            >
              {/* Backlights */}
              <div className="pointer-events-none absolute inset-0">
                {/* Warm subtle ambient backlight for stone light mode */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-[12%]
                    h-[80%]
                    w-[80%]
                    -translate-x-1/2
                    rounded-full
                    bg-[radial-gradient(circle_at_center,rgba(190,183,164,0.40)_0%,rgba(255,127,17,0.04)_50%,transparent_72%)]
                    blur-2xl
                    transition-opacity
                    duration-300
                    opacity-100
                    dark:opacity-0
                  "
                />

                {/* Warm amber backlight behind portrait (dark mode) */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-[10%]
                    h-[85%]
                    w-[85%]
                    -translate-x-1/2
                    rounded-full
                    bg-[radial-gradient(circle_at_center,rgba(255,127,17,0.20)_0%,rgba(255,127,17,0.04)_48%,transparent_72%)]
                    blur-2xl
                    transition-opacity
                    duration-300
                    opacity-0
                    dark:opacity-100
                  "
                />

                {/* Cool blue backlight on hair/shoulder */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    right-[5%]
                    top-[0%]
                    h-[65%]
                    w-[65%]
                    rounded-full
                    bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,transparent_65%)]
                    blur-xl
                    transition-opacity
                    duration-500
                    opacity-0
                    dark:opacity-100
                  "
                />
              </div>

              {/* Thin orbital circle / halo */}
              <div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-[-5%]
                  h-[96%]
                  w-[96%]
                  -translate-x-1/2
                  rounded-full
                  border
                  border-black/[0.04]
                  dark:border-[#BEB7A4]/15
                "
              />

              {/* Dot matrix grid behind Let's Build Together */}
              <div
                className="
                  pointer-events-none
                  absolute
                  right-[0%]
                  top-[14%]
                  grid
                  grid-cols-4
                  gap-2.5
                  opacity-25
                  dark:opacity-30
                "
                aria-hidden="true"
              >
                {Array.from({ length: 24 }).map((_, i) => (
                  <span
                    key={i}
                    className="h-1 w-1 rounded-full bg-black dark:bg-[#BEB7A4]"
                  />
                ))}
              </div>

              {/* Playful "Let's Build Together" accent with independent floating motion */}
              <motion.div
                animate={shouldReduceMotion ? undefined : { y: [-3.5, 3.5, -3.5] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="
                  pointer-events-none
                  absolute
                  right-[3%]
                  top-[30%]
                  z-20
                  -rotate-[6deg]
                  select-none
                "
                aria-hidden="true"
              >
                <span className="block font-sans text-xs font-semibold tracking-wide text-black/40 dark:text-[#BEB7A4] sm:text-sm">
                  Let&apos;s
                </span>
                <span className="block font-sans text-xs font-semibold tracking-wide text-black/40 dark:text-[#BEB7A4] sm:text-sm">
                  Build Together
                </span>
                <svg
                  className="mt-1 h-3 w-20 text-black/25 dark:text-[#FF7F11] sm:w-24"
                  viewBox="0 0 100 12"
                  fill="none"
                >
                  <path
                    d="M2 3 Q 50 12, 98 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.div>

              {/* =================================================
                  IMAGE CROSS-FADE — White hoodie stands out against #BEB7A4 warm stone
              ================================================= */}
              {/* Light Theme Image - Real visual object with subtle face opacity reduction */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  transition-opacity
                  duration-300
                  ease-in-out
                  opacity-100
                  dark:opacity-0
                "
                style={{
                  WebkitMaskImage:
                    'radial-gradient(ellipse 50% 42% at 46% 36%, rgba(0, 0, 0, 0.84) 0%, rgba(0, 0, 0, 0.92) 55%, rgba(0, 0, 0, 1) 100%)',
                  maskImage:
                    'radial-gradient(ellipse 50% 42% at 46% 36%, rgba(0, 0, 0, 0.84) 0%, rgba(0, 0, 0, 0.92) 55%, rgba(0, 0, 0, 1) 100%)',
                }}
              >
                <Image
                  src="/images/profile-light-hero.png"
                  alt="Ganesh T - Full Stack Developer"
                  fill
                  priority
                  sizes="(min-width: 1024px) 45vw, 0vw"
                  className="
                    object-contain
                    object-bottom
                    filter
                    drop-shadow-[0_14px_32px_rgba(0,0,0,0.18)]
                  "
                />
              </div>

              {/* Dark Theme Image */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  transition-opacity
                  duration-300
                  ease-in-out
                  opacity-0
                  dark:opacity-100
                "
              >
                <Image
                  src="/images/profile-dark-hero.png"
                  alt="Ganesh T - Full Stack Developer"
                  fill
                  priority
                  sizes="(min-width: 1024px) 45vw, 0vw"
                  className="object-contain object-bottom"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            MOBILE / TABLET PORTRAIT VIEW
        ====================================================== */}
        <motion.div
          {...reveal(0.16)}
          className="pointer-events-none relative mt-6 w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto lg:hidden"
          style={{
            aspectRatio: "1212 / 1297",
            maxHeight: "420px",
          }}
        >
          {/* Warm subtle ambient backlight for stone light mode (mobile) */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              rounded-full
              bg-[radial-gradient(circle_at_center,rgba(190,183,164,0.35)_0%,rgba(255,127,17,0.04)_50%,transparent_70%)]
              blur-xl
              transition-opacity
              duration-300
              opacity-100
              dark:opacity-0
            "
          />

          {/* Subtle warm halo for mobile (dark mode) */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              rounded-full
              bg-[radial-gradient(circle_at_center,rgba(255,127,17,0.15)_0%,transparent_70%)]
              blur-xl
              transition-opacity
              duration-300
              opacity-0
              dark:opacity-100
            "
          />

          {/* Dot matrix grid behind Let's Build Together (mobile) */}
          <div
            className="
              pointer-events-none
              absolute
              right-1
              top-[12%]
              grid
              grid-cols-4
              gap-2
              opacity-20
              dark:opacity-30
            "
            aria-hidden="true"
          >
            {Array.from({ length: 16 }).map((_, i) => (
              <span
                key={i}
                className="h-1 w-1 rounded-full bg-black dark:bg-[#BEB7A4]"
              />
            ))}
          </div>

          {/* Playful "Let's Build Together" accent for mobile */}
          <div
            className="
              pointer-events-none
              absolute
              right-1
              top-[22%]
              z-20
              -rotate-[6deg]
              select-none
              sm:right-3
              sm:top-[24%]
            "
            aria-hidden="true"
          >
            <span className="block font-sans text-[11px] font-semibold tracking-wide text-black/60 dark:text-[#BEB7A4] sm:text-xs">
              Let&apos;s
            </span>
            <span className="block font-sans text-[11px] font-semibold tracking-wide text-black/60 dark:text-[#BEB7A4] sm:text-xs">
              Build Together
            </span>
            <svg
              className="mt-0.5 h-2.5 w-16 text-[#FF7F11] dark:text-[#FF7F11] sm:h-3 sm:w-20"
              viewBox="0 0 100 12"
              fill="none"
            >
              <path
                d="M2 3 Q 50 12, 98 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* =================================================
              IMAGE CROSS-FADE (MOBILE) — subtle face opacity reduction
          ================================================= */}
          {/* Light Theme Image (Mobile) */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              transition-opacity
              duration-300
              ease-in-out
              opacity-100
              dark:opacity-0
            "
            style={{
              WebkitMaskImage:
                'radial-gradient(ellipse 50% 42% at 46% 36%, rgba(0, 0, 0, 0.84) 0%, rgba(0, 0, 0, 0.92) 55%, rgba(0, 0, 0, 1) 100%)',
              maskImage:
                'radial-gradient(ellipse 50% 42% at 46% 36%, rgba(0, 0, 0, 0.84) 0%, rgba(0, 0, 0, 0.92) 55%, rgba(0, 0, 0, 1) 100%)',
            }}
          >
            <Image
              src="/images/profile-light-hero.png"
              alt="Ganesh T - Full Stack Developer"
              fill
              priority
              sizes="(max-width: 640px) 320px, (max-width: 1024px) 450px, 0vw"
              className="
                object-contain
                object-bottom
                filter
                drop-shadow-[0_12px_24px_rgba(0,0,0,0.16)]
              "
            />
          </div>

          {/* Dark Theme Image (Mobile) */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              transition-opacity
              duration-300
              ease-in-out
              opacity-0
              dark:opacity-100
            "
          >
            <Image
              src="/images/profile-dark-hero.png"
              alt="Ganesh T - Full Stack Developer"
              fill
              priority
              sizes="(max-width: 640px) 320px, (max-width: 1024px) 450px, 0vw"
              className="object-contain object-bottom"
            />
          </div>
        </motion.div>
      </div>

      {/* =====================================================
          BOTTOM BAR
      ====================================================== */}
      <motion.div
        {...reveal(0.26)}
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
          pb-5
          pt-3
          sm:px-8
          sm:pb-6
          sm:pt-4
          lg:px-12
          lg:pb-8
        "
      >
        {/* Left: Next badge + BASED IN INDIA + Green live status dot */}
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
              dark:border-[#BEB7A4]/25
              dark:text-[#FFFFFC]
            "
          >
            N
          </div>

          <div className="h-3 w-px bg-black/20 dark:bg-[#BEB7A4]/20" />

          <span
            className="
              text-[10px]
              font-semibold
              tracking-[0.24em]
              text-black/75
              dark:text-[#BEB7A4]
            "
          >
            BASED IN INDIA
          </span>

          <span className="h-1.5 w-1.5 rounded-full bg-[#FF7F11] shadow-[0_0_8px_#FF7F11]" />
        </div>

        {/* Center: SCROLL mouse indicator */}
        <div className="hidden flex-col items-center gap-1 lg:flex">
          <span
            className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.35em]
              text-black/70
              dark:text-[#BEB7A4]
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
              border-black/35
              pt-1
              dark:border-[#BEB7A4]/35
            "
          >
            <motion.div
              animate={
                shouldReduceMotion
                  ? undefined
                  : { y: [0, 5, 0] }
              }
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-1.5 w-0.5 rounded-full bg-[#FF7F11] dark:bg-[#FF7F11]"
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
            text-black/70
            dark:text-[#BEB7A4]
            sm:gap-6
            sm:text-[11px]
          "
        >
          <a
            href="https://github.com/ganesh-tamaran"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-black dark:hover:text-[#FFFFFC]"
          >
            GH
          </a>
          <a
            href="https://linkedin.com/in/ganesh-tamaran"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-black dark:hover:text-[#FFFFFC]"
          >
            IN
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-black dark:hover:text-[#FFFFFC]"
          >
            X
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-black dark:hover:text-[#FFFFFC]"
          >
            YT
          </a>
        </div>
      </motion.div>
    </section>
  );
}