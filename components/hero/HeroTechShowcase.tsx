"use client";

import { motion, useReducedMotion } from "framer-motion";

interface TechCardProps {
  name: string;
  icon: React.ReactNode;
  positionClass: string;
  floatDelay?: number;
  floatDuration?: number;
}

export default function HeroTechShowcase() {
  const shouldReduceMotion = useReducedMotion();

  // Floating animation generator
  const getFloatingAnim = (delay = 0, duration = 4.2) => {
    if (shouldReduceMotion) return {};
    return {
      animate: {
        y: [-4, 4, -4],
        transition: {
          duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        },
      },
    };
  };

  return (
    <div className="relative w-full max-w-[560px] mx-auto aspect-[1/1] sm:aspect-[1.05/1] lg:max-w-[620px] select-none">
      {/* ========================================================
          BACKGROUND GLOW & RADIANCE (Orange/Amber Core Light)
      ========================================================= */}
      {/* Light mode warm amber glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[75%]
          w-[75%]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[radial-gradient(circle_at_center,rgba(255,127,17,0.18)_0%,rgba(255,85,0,0.06)_45%,transparent_70%)]
          blur-2xl
          transition-opacity
          duration-500
          opacity-100
          dark:opacity-0
        "
      />

      {/* Dark mode intense radiant orange core glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[80%]
          w-[80%]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[radial-gradient(circle_at_center,rgba(255,85,0,0.30)_0%,rgba(255,120,0,0.12)_40%,transparent_72%)]
          blur-3xl
          transition-opacity
          duration-500
          opacity-0
          dark:opacity-100
        "
      />

      {/* ========================================================
          DOT MATRIX GRID ACCENT (Upper Right)
      ========================================================= */}
      <div
        className="
          pointer-events-none
          absolute
          right-[6%]
          top-[6%]
          grid
          grid-cols-4
          gap-2.5
          opacity-30
          dark:opacity-35
          sm:right-[8%]
          sm:top-[8%]
        "
        aria-hidden="true"
      >
        {Array.from({ length: 24 }).map((_, i) => (
          <span
            key={i}
            className="h-1 w-1 rounded-full bg-black/70 dark:bg-white"
          />
        ))}
      </div>

      {/* ========================================================
          SVG CIRCUIT TRACES & ORBITS
      ========================================================= */}
      <svg
        viewBox="0 0 500 500"
        className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
        aria-hidden="true"
      >
        <defs>
          {/* Subtle Orange Glow Filter for circuits in dark mode */}
          <filter id="circuit-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Radial Gradient for Circuit Pulses */}
          <linearGradient id="circuit-wire-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF7F11" stopOpacity="0.25" />
            <stop offset="50%" stopColor="#FF5500" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FF7F11" stopOpacity="0.25" />
          </linearGradient>
        </defs>

        {/* Outer Orbit Ellipse */}
        <ellipse
          cx="250"
          cy="255"
          rx="170"
          ry="92"
          fill="none"
          className="stroke-[#FF5500]/20 dark:stroke-[#FF5500]/30 stroke-[1.2]"
          strokeDasharray="4 4"
        />

        {/* Inner Orbit Ellipse */}
        <ellipse
          cx="250"
          cy="255"
          rx="115"
          ry="62"
          fill="none"
          className="stroke-[#FF5500]/25 dark:stroke-[#FF5500]/40 stroke-[1.2]"
        />

        {/* Circuit Traces Connecting Nodes */}
        {/* Next.js (Top) -> Center */}
        <path
          d="M 250 120 L 250 200"
          fill="none"
          className="stroke-[#FF5500]/50 dark:stroke-[#FF5500]/80 stroke-[1.5]"
          filter="url(#circuit-glow)"
        />

        {/* React (Left-Top) -> Center */}
        <path
          d="M 140 185 L 185 185 L 215 225"
          fill="none"
          className="stroke-[#FF5500]/50 dark:stroke-[#FF5500]/80 stroke-[1.5]"
          filter="url(#circuit-glow)"
        />

        {/* TypeScript (Right-Top) -> Center */}
        <path
          d="M 360 185 L 315 185 L 285 225"
          fill="none"
          className="stroke-[#FF5500]/50 dark:stroke-[#FF5500]/80 stroke-[1.5]"
          filter="url(#circuit-glow)"
        />

        {/* Center -> Node.js (Left-Bottom) */}
        <path
          d="M 215 285 L 175 325 L 140 325"
          fill="none"
          className="stroke-[#FF5500]/50 dark:stroke-[#FF5500]/80 stroke-[1.5]"
          filter="url(#circuit-glow)"
        />

        {/* Center -> MongoDB (Bottom) */}
        <path
          d="M 250 310 L 250 375"
          fill="none"
          className="stroke-[#FF5500]/50 dark:stroke-[#FF5500]/80 stroke-[1.5]"
          filter="url(#circuit-glow)"
        />

        {/* Center -> MySQL (Right-Bottom) */}
        <path
          d="M 285 285 L 325 325 L 360 325"
          fill="none"
          className="stroke-[#FF5500]/50 dark:stroke-[#FF5500]/80 stroke-[1.5]"
          filter="url(#circuit-glow)"
        />

        {/* Glowing Orange Junction Nodes on circuits */}
        <circle cx="250" cy="195" r="3.5" className="fill-[#FF5500]" />
        <circle cx="250" cy="195" r="7" className="fill-[#FF5500]/25" />

        <circle cx="185" cy="185" r="3" className="fill-[#FF5500]" />
        <circle cx="315" cy="185" r="3" className="fill-[#FF5500]" />

        <circle cx="175" cy="325" r="3" className="fill-[#FF5500]" />
        <circle cx="325" cy="325" r="3" className="fill-[#FF5500]" />

        <circle cx="250" cy="320" r="3.5" className="fill-[#FF5500]" />
        <circle cx="250" cy="320" r="7" className="fill-[#FF5500]/25" />

        {/* Satellite orbit nodes */}
        <circle cx="420" cy="255" r="3.5" className="fill-[#FF5500]" />
        <circle cx="420" cy="255" r="8" className="fill-[#FF5500]/20" />

        <circle cx="80" cy="255" r="3.5" className="fill-[#FF5500]" />
        <circle cx="80" cy="255" r="8" className="fill-[#FF5500]/20" />

        <circle cx="165" cy="295" r="3" className="fill-[#FF5500]" />
        <circle cx="335" cy="295" r="3" className="fill-[#FF5500]" />
      </svg>

      {/* ========================================================
          CENTER: 3D ISOMETRIC GLOWING PEDESTAL & ENERGY CORE
      ========================================================= */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  scale: [1, 1.04, 1],
                  rotateZ: [0, 1, 0, -1, 0],
                }
          }
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center"
        >
          {/* Isometric Platform SVG */}
          <svg
            viewBox="0 0 160 160"
            className="w-full h-full overflow-visible drop-shadow-[0_15px_30px_rgba(255,85,0,0.35)]"
          >
            <defs>
              {/* Core radiant glow */}
              <radialGradient id="iso-core-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFF2D6" />
                <stop offset="35%" stopColor="#FF7F11" />
                <stop offset="70%" stopColor="#FF4500" />
                <stop offset="100%" stopColor="#D83200" stopOpacity="0" />
              </radialGradient>

              {/* Glass Top Gradient (Light Mode) */}
              <linearGradient id="iso-glass-top-light" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#FFF3E6" stopOpacity="0.75" />
              </linearGradient>

              {/* Glass Top Gradient (Dark Mode) */}
              <linearGradient id="iso-glass-top-dark" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2A2A2A" stopOpacity="0.85" />
                <stop offset="50%" stopColor="#1E1E1E" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#121212" stopOpacity="0.9" />
              </linearGradient>

              {/* Glass Side Left Gradient */}
              <linearGradient id="iso-side-left" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF6B00" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#2A1608" stopOpacity="0.9" />
              </linearGradient>

              {/* Glass Side Right Gradient */}
              <linearGradient id="iso-side-right" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF8C2A" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#3E1E05" stopOpacity="0.9" />
              </linearGradient>

              {/* Core Cube Glow */}
              <linearGradient id="core-cube-top" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF3D6" />
                <stop offset="100%" stopColor="#FFA133" />
              </linearGradient>
            </defs>

            {/* BASE PLATFORM - TIER 1 */}
            {/* Top Face */}
            <polygon
              points="80,105 130,77 80,49 30,77"
              className="fill-black/[0.04] dark:fill-white/[0.03] stroke-black/10 dark:stroke-white/10 stroke-[1]"
            />
            {/* Left Side */}
            <polygon
              points="30,77 80,105 80,118 30,90"
              className="fill-black/[0.08] dark:fill-[#0d0d0d] stroke-black/15 dark:stroke-white/10 stroke-[0.8]"
            />
            {/* Right Side */}
            <polygon
              points="80,105 130,77 130,90 80,118"
              className="fill-black/[0.12] dark:fill-[#080808] stroke-black/15 dark:stroke-white/10 stroke-[0.8]"
            />

            {/* GLOWING AMBER ENERGY SPHERE / CORE IN THE MIDDLE */}
            <circle
              cx="80"
              cy="77"
              r="28"
              fill="url(#iso-core-glow)"
              className="animate-pulse"
              style={{ animationDuration: "3s" }}
            />

            {/* INNER GLOWING ENERGY CUBE */}
            {/* Cube Top Face */}
            <polygon
              points="80,62 98,52 80,42 62,52"
              fill="url(#core-cube-top)"
              className="drop-shadow-[0_0_8px_#FF8C2A]"
            />
            {/* Cube Left Face */}
            <polygon
              points="62,52 80,62 80,78 62,68"
              fill="#FF6400"
            />
            {/* Cube Right Face */}
            <polygon
              points="80,62 98,52 98,68 80,78"
              fill="#FF8C2A"
            />

            {/* TOP GLASS SLAB - TIER 2 (Elevated Glass Platform) */}
            {/* Left Side of glass slab */}
            <polygon
              points="40,68 80,91 80,98 40,75"
              fill="url(#iso-side-left)"
              className="stroke-orange-400/40 stroke-[0.5]"
            />
            {/* Right Side of glass slab */}
            <polygon
              points="80,91 120,68 120,75 80,98"
              fill="url(#iso-side-right)"
              className="stroke-orange-400/40 stroke-[0.5]"
            />
            {/* Top Face of Glass Platform */}
            <polygon
              points="80,91 120,68 80,45 40,68"
              className="fill-white/80 dark:fill-[#1a1a1a]/80 stroke-orange-400/50 dark:stroke-orange-400/60 stroke-[1]"
            />

            {/* Crystal Highlight Lines */}
            <line x1="80" y1="45" x2="80" y2="91" className="stroke-white/70 dark:stroke-white/30 stroke-[0.75]" />
            <line x1="40" y1="68" x2="120" y2="68" className="stroke-white/40 dark:stroke-white/20 stroke-[0.75]" />
          </svg>
        </motion.div>
      </div>

      {/* ========================================================
          THE 6 TECHNOLOGY CARDS (Ecosystem Orbit)
      ========================================================= */}

      {/* 1. NEXT.JS (Top Center) */}
      <TechCard
        name="Next.js"
        positionClass="top-[3%] left-[50%] -translate-x-1/2"
        floatDelay={0.1}
        floatDuration={4.4}
        icon={
          <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-black dark:bg-white text-white dark:text-black shadow-inner">
            <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6" fill="none">
              <circle cx="12" cy="12" r="11" className="fill-black dark:fill-white" />
              <path
                d="M16.5 17.2L8.6 6.8H7V17.2H8.6V9.4L15.6 18.2C15.9 17.9 16.2 17.5 16.5 17.2Z"
                className="fill-white dark:fill-black"
              />
              <rect x="14.8" y="6.8" width="1.6" height="6.6" className="fill-white dark:fill-black" opacity="0.6" />
            </svg>
          </div>
        }
      />

      {/* 2. REACT (Upper Left) */}
      <TechCard
        name="React"
        positionClass="top-[20%] left-[4%] sm:left-[6%]"
        floatDelay={0.5}
        floatDuration={4.8}
        icon={
          <motion.div
            animate={shouldReduceMotion ? undefined : { rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex items-center justify-center"
          >
            <svg viewBox="-11.5 -10.23 23 20.46" className="h-8 w-8 sm:h-9 sm:w-9 text-[#00D8FF]">
              <circle cx="0" cy="0" r="2.1" fill="currentColor" />
              <g stroke="currentColor" strokeWidth="1.1" fill="none">
                <ellipse rx="11" ry="4.2" />
                <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                <ellipse rx="11" ry="4.2" transform="rotate(120)" />
              </g>
            </svg>
          </motion.div>
        }
      />

      {/* 3. TYPESCRIPT (Upper Right) */}
      <TechCard
        name="TypeScript"
        positionClass="top-[20%] right-[4%] sm:right-[6%]"
        floatDelay={0.3}
        floatDuration={4.6}
        icon={
          <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-[#3178C6] text-white font-bold text-xs sm:text-sm tracking-tight shadow-sm">
            TS
          </div>
        }
      />

      {/* 4. NODE.JS (Lower Left) */}
      <TechCard
        name="Node.js"
        positionClass="bottom-[18%] left-[6%] sm:left-[8%]"
        floatDelay={0.7}
        floatDuration={5.0}
        icon={
          <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-[#539E43]/15 border border-[#539E43]/40 text-[#539E43]">
            <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6 fill-current">
              <path d="M12 2L3.5 7v10L12 22l8.5-5V7L12 2zm6.5 13.8L12 19.6l-6.5-3.8V8.2L12 4.4l6.5 3.8v7.6z" />
              <text x="12" y="15" textAnchor="middle" fontSize="7.5" fontWeight="bold" fill="currentColor">
                JS
              </text>
            </svg>
          </div>
        }
      />

      {/* 5. MONGODB (Bottom Center) */}
      <TechCard
        name="MongoDB"
        positionClass="bottom-[3%] left-[50%] -translate-x-1/2"
        floatDelay={0.2}
        floatDuration={4.5}
        icon={
          <svg viewBox="0 0 24 24" className="h-8 w-8 sm:h-9 sm:w-9">
            <path
              d="M12 1.5C11.5 3 7.5 8.5 7.5 13.5C7.5 18 10 21 12 22.5C14 21 16.5 18 16.5 13.5C16.5 8.5 12.5 3 12 1.5Z"
              fill="#13AA52"
            />
            <path
              d="M12 1.5C11.8 2.5 12 22.5 12 22.5C14 21 16.5 18 16.5 13.5C16.5 8.5 12.5 3 12 1.5Z"
              fill="#116149"
            />
            <path
              d="M12 2.5V22C11.9 22 11.8 19 11.8 14C11.8 9 12 2.5 12 2.5Z"
              fill="#FFFFFF"
              opacity="0.3"
            />
          </svg>
        }
      />

      {/* 6. MYSQL (Lower Right) */}
      <TechCard
        name="MySQL"
        positionClass="bottom-[18%] right-[8%] sm:right-[12%]"
        floatDelay={0.6}
        floatDuration={4.9}
        icon={
          <svg viewBox="0 0 48 48" className="h-8 w-8 sm:h-9 sm:w-9 fill-none">
            <path
              d="M38 14C34 9 27 7 20 9C14 11 9 16 7 22C5 28 7 34 11 37C13 39 17 38 18 36C19 34 18 32 17 30C15 27 15 23 18 20C21 17 26 16 30 18C33 19 35 22 36 25C37 28 35 31 33 33C31 35 30 38 32 40C34 42 38 41 40 38C43 33 43 25 40 19C39.5 17 39 15.5 38 14Z"
              fill="#00758F"
            />
            <path
              d="M20 9C23 6 28 5 32 7C30 9 27 12 24 15C22 13 21 11 20 9Z"
              fill="#F29111"
            />
            <circle cx="13" cy="20" r="1.5" fill="#FFFFFF" />
          </svg>
        }
      />

      {/* ========================================================
          HANDWRITTEN FLOURISH: "Modern Technology, Better Solutions"
      ========================================================= */}
      <div
        className="
          pointer-events-none
          absolute
          right-[-4%]
          bottom-[20%]
          hidden
          translate-x-3
          rotate-[-3deg]
          select-none
          md:block
          lg:right-[-8%]
          lg:bottom-[23%]
        "
      >
        <span
          className="
            block
            font-serif
            italic
            text-[11px]
            font-semibold
            tracking-wide
            text-neutral-700
            dark:text-neutral-300
            leading-tight
            sm:text-xs
          "
        >
          Modern
        </span>
        <span
          className="
            block
            font-serif
            italic
            text-[11px]
            font-semibold
            tracking-wide
            text-neutral-700
            dark:text-neutral-300
            leading-tight
            sm:text-xs
          "
        >
          Technology,
        </span>
        <span
          className="
            block
            font-serif
            italic
            text-[11px]
            font-semibold
            tracking-wide
            text-neutral-700
            dark:text-neutral-300
            leading-tight
            sm:text-xs
          "
        >
          Better Solutions
        </span>

        {/* Dynamic Orange Brush Swoosh Underline */}
        <svg
          viewBox="0 0 110 16"
          className="mt-1 h-3 w-24 text-[#FF5500] sm:w-28"
          fill="none"
        >
          <path
            d="M 2 6 Q 55 18, 106 4"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M 12 11 Q 65 19, 96 8"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.6"
          />
        </svg>
      </div>
    </div>
  );
}

function TechCard({
  name,
  icon,
  positionClass,
  floatDelay = 0,
  floatDuration = 4.5,
}: TechCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      animate={
        shouldReduceMotion
          ? undefined
          : {
              y: [-3.5, 3.5, -3.5],
            }
      }
      transition={{
        duration: floatDuration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: floatDelay,
      }}
      whileHover={shouldReduceMotion ? undefined : { scale: 1.08, y: -4 }}
      className={`
        absolute
        z-20
        ${positionClass}
        flex
        h-20
        w-20
        flex-col
        items-center
        justify-center
        gap-1.5
        rounded-2xl
        border
        border-black/[0.08]
        bg-white/95
        p-2
        shadow-[0_12px_28px_rgba(0,0,0,0.06),0_2px_6px_rgba(0,0,0,0.04)]
        backdrop-blur-md
        transition-all
        duration-300
        hover:border-[#FF5500]/50
        hover:shadow-[0_16px_36px_rgba(255,85,0,0.22)]
        dark:border-white/[0.12]
        dark:bg-[#121212]/90
        dark:shadow-[0_16px_36px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.08)]
        dark:hover:border-[#FF5500]/60
        dark:hover:shadow-[0_16px_40px_rgba(255,85,0,0.28)]
        sm:h-24
        sm:w-24
        sm:gap-2
        sm:rounded-3xl
        lg:h-28
        lg:w-28
      `}
    >
      <div className="flex items-center justify-center">{icon}</div>
      <span
        className="
          text-[10px]
          font-semibold
          tracking-tight
          text-neutral-800
          dark:text-neutral-200
          sm:text-[11px]
        "
      >
        {name}
      </span>
    </motion.div>
  );
}
