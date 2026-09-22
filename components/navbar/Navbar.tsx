"use client";

import { useState, useEffect, useRef } from "react";
import { useTheme } from "@/lib/ThemeContext";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

/* ---------------------------------------------------------- */
/* Theme Toggle Button                                         */
/* ---------------------------------------------------------- */
function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="
        relative
        flex
        h-9
        w-[50px]
        items-center
        rounded-full
        border
        border-black/15
        bg-black/[0.05]
        px-1
        transition-colors
        duration-300
        dark:border-[#BEB7A4]/25
        dark:bg-[#000000]/60
        hover:border-black/25
        dark:hover:border-[#BEB7A4]/40
      "
    >
      {/* Track icons */}
      <span
        className="
          pointer-events-none
          absolute
          left-2
          text-[10px]
          transition-opacity
          duration-300
        "
        style={{ opacity: isDark ? 1 : 0 }}
        aria-hidden
      >
        🌙
      </span>

      <span
        className="
          pointer-events-none
          absolute
          right-2
          text-[10px]
          transition-opacity
          duration-300
        "
        style={{ opacity: isDark ? 0 : 1 }}
        aria-hidden
      >
        ☀️
      </span>

      {/* Thumb */}
      <span
        className="
          relative
          z-10
          h-5
          w-5
          rounded-full
          bg-black
          shadow-sm
          transition-all
          duration-300
          dark:bg-[#FFFFFC]
        "
        style={{ transform: isDark ? "translateX(20px)" : "translateX(0)" }}
      />
    </button>
  );
}

/* ---------------------------------------------------------- */
/* Navbar                                                      */
/* ---------------------------------------------------------- */
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isOnHero, setIsOnHero] = useState(true);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Active section scroll spy + Constantly visible on Hero, auto-hide on remaining sections
  useEffect(() => {
    const sectionIds = ["home", "about", "journey", "projects", "contact"];

    const handleScroll = () => {
      const scrollY = window.scrollY;

      // 1. Detect scroll position for glassmorphism
      setIsScrolled(scrollY > 20);

      // 2. Check if user is on Hero section
      const aboutEl = document.getElementById("about");
      const heroThreshold = aboutEl ? aboutEl.offsetTop - 180 : window.innerHeight * 0.75;
      const currentlyOnHero = scrollY < Math.max(heroThreshold, 100);
      setIsOnHero(currentlyOnHero);

      if (currentlyOnHero) {
        // Hero section: header remains constantly visible; cancel any auto-hide timers
        setIsVisible(true);
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
          scrollTimeoutRef.current = null;
        }
      } else {
        // Remaining sections: make header visible while scrolling, then disappear when scrolling stops
        setIsVisible(true);
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
        scrollTimeoutRef.current = setTimeout(() => {
          if (!open) {
            setIsVisible(false);
          }
        }, 1800);
      }

      // 3. Update active section
      const scrollPos = scrollY + 180;
      for (const id of [...sectionIds].reverse()) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(`#${id}`);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [open]);

  // If mobile menu is opened, ensure header stays visible
  useEffect(() => {
    if (open) {
      setIsVisible(true);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    }
  }, [open]);

  // Constantly visible on hero section; on remaining sections, visible while scrolling, hovered, or mobile menu open
  const shouldShow = isOnHero || isVisible || isHovered || open;

  return (
    <header
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        if (!isOnHero) {
          if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
          scrollTimeoutRef.current = setTimeout(() => {
            if (!open) setIsVisible(false);
          }, 1500);
        }
      }}
      className={`fixed left-0 right-0 top-0 z-50 w-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        shouldShow
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "-translate-y-full opacity-0 pointer-events-none"
      } ${
        isScrolled
          ? "bg-[#BEB7A4]/80 dark:bg-[#000000]/80 backdrop-blur-xl border-b border-black/10 dark:border-[#BEB7A4]/15 shadow-sm dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div
        className={`mx-auto flex w-full max-w-7xl min-w-0 items-center justify-between px-4 transition-all duration-300 sm:px-8 lg:px-12 ${
          isScrolled ? "py-3 sm:py-3.5" : "py-4 sm:py-5"
        }`}
      >
        {/* Left: Brand Logo */}
        <a
          href="#home"
          className="flex shrink-0 items-center text-base font-bold tracking-tight text-[#000000] transition-opacity hover:opacity-80 dark:text-[#FFFFFC] sm:text-lg"
          onClick={() => {
            setOpen(false);
            setActiveSection("#home");
          }}
        >
          Ganesh.
        </a>

        {/* Center: Desktop Navigation Pill */}
        <nav
          className="
            hidden
            items-center
            gap-4
            rounded-full
            border
            border-black/15
            bg-[#FFFFFC]/75
            px-5
            py-2
            shadow-sm
            backdrop-blur-xl
            dark:border-[#BEB7A4]/15
            dark:bg-[#000000]/85
            md:flex
            lg:gap-7
            lg:px-7
            lg:py-2.5
          "
        >
          {links.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setActiveSection(link.href)}
                className="
                  group
                  relative
                  flex
                  flex-col
                  items-center
                  py-1
                  text-[11px]
                  font-medium
                  transition-colors
                  lg:text-xs
                "
              >
                <span
                  className={`transition-colors ${
                    isActive
                      ? "font-semibold text-black dark:text-[#FFFFFC]"
                      : "text-black/65 hover:text-black dark:text-[#BEB7A4] dark:hover:text-[#FFFFFC]"
                  }`}
                >
                  {link.label}
                </span>
                {isActive && (
                  <span className="absolute -bottom-1 h-[2px] w-full rounded-full bg-[#FF7F11]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right side: Theme toggle + Let's Talk CTA */}
        <div className="flex shrink-0 items-center gap-2.5 sm:gap-3">
          <ThemeToggle />

          <a
            href="#contact"
            className="
              hidden
              rounded-full
              border
              border-transparent
              bg-[#000000]
              px-4
              py-2
              text-[11px]
              font-medium
              text-[#FFFFFC]
              shadow-xs
              transition-all
              hover:bg-[#FF7F11]
              hover:text-[#000000]
              dark:border-[#BEB7A4]/25
              dark:bg-[#000000]
              dark:text-[#FFFFFC]
              dark:hover:border-[#FF7F11]
              dark:hover:bg-[#FF7F11]
              dark:hover:text-[#000000]
              md:block
              lg:px-6
              lg:py-2.5
              lg:text-xs
            "
          >
            Let&apos;s Talk
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-black/15
              bg-[#FFFFFC]/70
              text-[#000000]
              dark:border-[#BEB7A4]/20
              dark:bg-[#000000]/80
              dark:text-[#FFFFFC]
              md:hidden
            "
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className="text-lg leading-none">{open ? "×" : "☰"}</span>
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {open && (
        <div className="mx-4 mb-3 mt-1 rounded-2xl border border-black/15 bg-[#BEB7A4]/95 p-3 shadow-xl backdrop-blur-xl dark:border-[#BEB7A4]/15 dark:bg-[#000000]/95 sm:mx-6 md:hidden">
          {links.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => {
                  setOpen(false);
                  setActiveSection(link.href);
                }}
                className={`
                  flex
                  items-center
                  justify-between
                  rounded-xl
                  px-4
                  py-2.5
                  text-sm
                  font-medium
                  transition-colors
                  ${
                    isActive
                      ? "bg-black/10 text-black font-semibold dark:bg-white/10 dark:text-[#FFFFFC]"
                      : "text-black/75 hover:bg-black/[0.04] hover:text-black dark:text-[#BEB7A4] dark:hover:bg-white/[0.04] dark:hover:text-[#FFFFFC]"
                  }
                `}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FF7F11]" />
                )}
              </a>
            );
          })}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="
              mt-2
              block
              rounded-xl
              bg-[#000000]
              px-4
              py-2.5
              text-center
              text-sm
              font-medium
              text-[#FFFFFC]
              hover:bg-[#FF7F11]
              hover:text-[#000000]
              dark:bg-[#FF7F11]
              dark:text-[#000000]
            "
          >
            Let&apos;s Talk
          </a>
        </div>
      )}
    </header>
  );
}