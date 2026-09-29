"use client";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-black/10 dark:border-white/10 bg-transparent pt-14 pb-10 sm:pt-20 sm:pb-12">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Large Editorial Brand Wordmark (matching reference design) */}
        <div className="overflow-visible pb-2 sm:pb-4">
          <a
            href="#home"
            className="
              block
              font-serif
              text-[clamp(4.2rem,13vw,11.5rem)]
              font-black
              tracking-[-0.04em]
              leading-[1.02]
              text-black
              transition-opacity
              hover:opacity-85
              dark:text-[#F7F4EC]
              select-none
              pb-1
            "
          >
            ganesh
          </a>
        </div>

        {/* Minimal Bottom Bar */}
        <div className="mt-10 sm:mt-14 pt-6 border-t border-black/10 dark:border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 sm:gap-8">
          {/* Left: Copyright & Status */}
          <div className="flex flex-wrap items-center gap-2.5 text-[11px] sm:text-xs text-neutral-600 dark:text-neutral-400 font-mono">
            <span>© {new Date().getFullYear()} Ganesh Tamarana</span>
            <span>•</span>
            <span>Full Stack Developer</span>
            <span>•</span>
            <span>India</span>
          </div>

          {/* Center: Navigation Links */}
          <nav className="flex flex-wrap items-center gap-5 sm:gap-7 text-xs font-medium text-neutral-600 dark:text-neutral-400">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-black dark:hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: Circular Social Media Icons */}
          <div className="flex items-center gap-3">
            {/* GitHub */}
            <a
              href="https://github.com/ganesh-tamarana"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="
                group
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                border
                border-black/20
                bg-black/[0.03]
                text-neutral-800
                transition-all
                duration-200
                hover:border-black
                hover:bg-black
                hover:text-white
                dark:border-white/20
                dark:bg-white/[0.04]
                dark:text-neutral-200
                dark:hover:border-white
                dark:hover:bg-white
                dark:hover:text-black
              "
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 fill-current transition-transform duration-200 group-hover:scale-110"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/ganesh-tamarana"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="
                group
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                border
                border-black/20
                bg-black/[0.03]
                text-neutral-800
                transition-all
                duration-200
                hover:border-black
                hover:bg-black
                hover:text-white
                dark:border-white/20
                dark:bg-white/[0.04]
                dark:text-neutral-200
                dark:hover:border-white
                dark:hover:bg-white
                dark:hover:text-black
              "
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 fill-current transition-transform duration-200 group-hover:scale-110"
              >
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v7.6H9.2v-7.6H6.46M7.83 6.25c-.91 0-1.64.73-1.64 1.64 0 .9.73 1.64 1.64 1.64.91 0 1.65-.74 1.65-1.64 0-.91-.74-1.64-1.65-1.64" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}