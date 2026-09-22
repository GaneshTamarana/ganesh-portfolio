const footerLinks = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Journey",
    href: "#journey",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "#",
  },
  {
    label: "LinkedIn",
    href: "#",
  },
  {
    label: "Email",
    href: "mailto:your@email.com",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden px-5 pb-8 pt-24 transition-colors duration-500 sm:px-8 sm:pb-10 sm:pt-32 lg:px-12 lg:pt-40">
      <div className="mx-auto max-w-7xl">
        {/* Main CTA */}
        <div className="border-b border-black/10 pb-20 dark:border-white/10 sm:pb-28 lg:pb-32">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-black/30 dark:text-white/35">
            Have a project in mind?
          </p>

          <h2 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.9] tracking-[-0.06em] text-black dark:text-white sm:text-6xl lg:text-8xl">
            Let&apos;s build
            <br />
            <span className="text-black/25 dark:text-white/25">something.</span>
          </h2>

          <div className="mt-10 flex flex-col gap-5 sm:mt-12 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="
                inline-flex
                w-fit
                items-center
                gap-3
                rounded-full
                bg-black
                px-6
                py-3.5
                text-sm
                font-medium
                text-white
                transition-all
                duration-300
                hover:bg-black/80
                dark:bg-white
                dark:text-black
                dark:hover:bg-zinc-200
              "
            >
              Start a conversation

              <span>↗</span>
            </a>

            <a
              href="mailto:your@email.com"
              className="
                inline-flex
                w-fit
                items-center
                gap-3
                border-b
                border-black/20
                pb-1
                text-sm
                text-black/50
                transition-colors
                duration-300
                hover:border-black
                hover:text-black
                dark:border-white/20
                dark:text-white/50
                dark:hover:border-white
                dark:hover:text-white
              "
            >
              your@email.com
            </a>
          </div>
        </div>

        {/* Footer navigation */}
        <div className="grid gap-12 border-b border-black/10 py-12 dark:border-white/10 sm:py-16 lg:grid-cols-[1fr_auto] lg:gap-20">
          {/* Brand */}
          <div>
            <a
              href="#"
              className="inline-flex items-center gap-3"
              aria-label="Back to top"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-xs font-semibold text-white dark:bg-white dark:text-black">
                GT
              </span>

              <span className="text-sm font-medium text-black dark:text-white">Ganesh T</span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-black/40 dark:text-white/45">
              Full Stack Developer focused on building thoughtful digital
              products, scalable applications, and useful experiences.
            </p>
          </div>

          {/* Navigation */}
          <nav>
            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.25em] text-black/30 dark:text-white/35">
              Navigation
            </p>

            <div className="grid grid-cols-2 gap-x-10 gap-y-4 sm:grid-cols-3 lg:grid-cols-2">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="
                    group
                    flex
                    items-center
                    gap-2
                    text-sm
                    text-black/50
                    transition-colors
                    duration-300
                    hover:text-black
                    dark:text-white/50
                    dark:hover:text-white
                  "
                >
                  <span>{link.label}</span>

                  <span className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                    →
                  </span>
                </a>
              ))}
            </div>
          </nav>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col gap-8 pt-8 sm:gap-6 lg:flex-row lg:items-center lg:justify-between">
          {/* Copyright */}
          <p className="text-[11px] text-black/30 dark:text-white/35">
            © {new Date().getFullYear()} Ganesh T. All rights reserved.
          </p>

          {/* Social links */}
          <div className="flex flex-wrap items-center gap-5">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="
                  text-[11px]
                  text-black/40
                  transition-colors
                  duration-300
                  hover:text-black
                  dark:text-white/40
                  dark:hover:text-white
                "
              >
                {social.label}
              </a>
            ))}
          </div>

          {/* Back to top */}
          <a
            href="#"
            className="
              flex
              w-fit
              items-center
              gap-2
              text-[11px]
              text-black/40
              transition-colors
              duration-300
              hover:text-black
              dark:text-white/40
              dark:hover:text-white
            "
          >
            Back to top

            <span>↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}