import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { projectsList, getProjectBySlug } from "@/data/projects";
import Footer from "@/components/footer/Footer";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projectsList.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Case Study | Ganesh Tamaran`,
    description: project.description,
    openGraph: {
      title: `${project.title} — ${project.subtitle}`,
      description: project.description,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: `${project.title} preview`,
        },
      ],
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Find index for next/previous navigation
  const currentIndex = projectsList.findIndex((p) => p.slug === slug);
  const prevProject =
    currentIndex > 0 ? projectsList[currentIndex - 1] : projectsList[projectsList.length - 1];
  const nextProject =
    currentIndex < projectsList.length - 1 ? projectsList[currentIndex + 1] : projectsList[0];

  const isLive = Boolean(project.link?.startsWith("http"));

  return (
    <div className="min-h-screen bg-[#F7F4EC] text-[#0E0E0E] dark:bg-[#070707] dark:text-[#FFFFFF] transition-colors duration-300">
      {/* Top Floating Header */}
      <header className="sticky top-0 z-40 w-full border-b border-black/10 dark:border-white/10 bg-[#F7F4EC]/85 dark:bg-[#070707]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-black/70 dark:text-[#BEB7A4] hover:text-[#FF7F11] dark:hover:text-[#FF7F11] transition-colors"
          >
            <span className="inline-block transition-transform duration-200 group-hover:-translate-x-1">
              ←
            </span>
            <span>Back to Projects</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold text-[#FF7F11]">
              {project.number}
            </span>
            <span className="text-black/30 dark:text-white/30 text-xs">/</span>
            <span className="font-mono text-[11px] uppercase tracking-wider text-black/50 dark:text-white/50 truncate max-w-[140px] sm:max-w-none">
              {project.title}
            </span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
        <div className="space-y-6">
          {/* Metadata pill */}
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="rounded-full border border-[#FF7F11]/40 bg-[#FF7F11]/10 px-3 py-1 font-mono text-[10.5px] font-semibold uppercase tracking-wider text-[#FF7F11]">
              {project.meta}
            </span>
            {isLive && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[10.5px] font-semibold text-emerald-600 dark:text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Live in Production
              </span>
            )}
          </div>

          {/* Title & Subtitle */}
          <div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-black dark:text-[#FFFFFC]">
              {project.title}
            </h1>
            <p className="mt-2 text-base sm:text-xl font-medium text-[#FF7F11]">
              {project.subtitle}
            </p>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {isLive && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#0E0E0E] dark:bg-[#FFFFFC] px-5 py-2.5 text-xs font-semibold text-white dark:text-[#0E0E0E] shadow-sm hover:opacity-90 transition-all hover:translate-y-[-1px]"
              >
                <span>Visit Live Website</span>
                <svg
                  className="h-3.5 w-3.5 -rotate-45"
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
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-black/15 dark:border-white/15 bg-black/5 dark:bg-white/5 px-5 py-2.5 text-xs font-semibold text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
              >
                <span>GitHub Repository</span>
                <span className="text-xs">↗</span>
              </a>
            )}

            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full border border-black/15 dark:border-white/15 px-4 py-2.5 text-xs font-semibold text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white hover:border-black/30 dark:hover:border-white/30 transition-colors"
            >
              <span>Discuss Similar Project</span>
            </Link>
          </div>

          {/* Quick Specifications Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-black/10 dark:border-white/10">
            <div>
              <span className="block font-mono text-[10px] uppercase tracking-wider text-black/50 dark:text-white/40">
                ROLE
              </span>
              <span className="mt-1 block text-xs sm:text-sm font-semibold text-black dark:text-[#FFFFFC]">
                {project.role}
              </span>
            </div>

            <div>
              <span className="block font-mono text-[10px] uppercase tracking-wider text-black/50 dark:text-white/40">
                TIMELINE
              </span>
              <span className="mt-1 block text-xs sm:text-sm font-semibold text-black dark:text-[#FFFFFC]">
                {project.timeline}
              </span>
            </div>

            <div>
              <span className="block font-mono text-[10px] uppercase tracking-wider text-black/50 dark:text-white/40">
                CLIENT / CONTEXT
              </span>
              <span className="mt-1 block text-xs sm:text-sm font-semibold text-black dark:text-[#FFFFFC]">
                {project.client || "Independent"}
              </span>
            </div>

            <div>
              <span className="block font-mono text-[10px] uppercase tracking-wider text-black/50 dark:text-white/40">
                {project.domain ? "DEPLOYMENT" : "CATEGORY"}
              </span>
              <span className="mt-1 block text-xs sm:text-sm font-semibold text-black dark:text-[#FFFFFC]">
                {project.domain
                  ? project.domain
                  : project.type === "professional"
                  ? "Internal Enterprise"
                  : "Full-Stack Project"}
              </span>
            </div>
          </div>
        </div>

        {/* Featured Mockup / Visual */}
        <div className="mt-10 overflow-hidden rounded-2xl sm:rounded-3xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-black/60 shadow-xl">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={project.image}
              alt={`${project.title} detailed preview`}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* Deep Dive Case Study Content */}
        <div className="mt-14 space-y-14">
          {/* 1. Project Overview */}
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-semibold text-[#FF7F11]">01</span>
              <span className="text-black/30 dark:text-white/30 text-xs">/</span>
              <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-black/60 dark:text-[#BEB7A4]">
                Project Overview & Mission
              </h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-black/80 dark:text-[#BEB7A4] max-w-3xl">
              {project.overview}
            </p>
          </section>

          {/* 2. Key Features */}
          {project.caseStudyFeatures && (
            <section className="space-y-6">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-semibold text-[#FF7F11]">02</span>
                <span className="text-black/30 dark:text-white/30 text-xs">/</span>
                <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-black/60 dark:text-[#BEB7A4]">
                  Key Features & Capabilities
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {project.caseStudyFeatures.map((feat) => (
                  <div
                    key={feat.title}
                    className="rounded-2xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] p-5 sm:p-6 transition-colors hover:border-[#FF7F11]/40"
                  >
                    <div className="flex items-center gap-3 mb-2.5">
                      <span className="text-xl">{feat.icon}</span>
                      <h3 className="text-sm sm:text-base font-bold text-black dark:text-[#FFFFFC]">
                        {feat.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm leading-relaxed text-black/70 dark:text-[#BEB7A4]">
                      {feat.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 3. System Architecture & Tech Stack */}
          <section className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-semibold text-[#FF7F11]">03</span>
              <span className="text-black/30 dark:text-white/30 text-xs">/</span>
              <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-black/60 dark:text-[#BEB7A4]">
                Architecture & Engineering Stack
              </h2>
            </div>

            {project.architecture && (
              <p className="text-sm sm:text-base leading-relaxed text-black/80 dark:text-[#BEB7A4] max-w-3xl">
                {project.architecture}
              </p>
            )}

            <div className="pt-2">
              <span className="block font-mono text-[10px] uppercase tracking-wider text-black/50 dark:text-white/40 mb-3">
                TECHNOLOGIES UTILIZED
              </span>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-black/10 dark:border-white/15 bg-black/[0.04] dark:bg-white/[0.05] px-3.5 py-1 text-xs font-medium text-black/85 dark:text-white/85"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* 4. Challenges & Engineering Solutions */}
          {project.challenges && project.challenges.length > 0 && (
            <section className="space-y-6">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-semibold text-[#FF7F11]">04</span>
                <span className="text-black/30 dark:text-white/30 text-xs">/</span>
                <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-black/60 dark:text-[#BEB7A4]">
                  Technical Challenges & Solutions
                </h2>
              </div>

              <div className="space-y-4">
                {project.challenges.map((c, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] p-5 sm:p-6"
                  >
                    <div className="mb-2">
                      <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-[#FF7F11]">
                        CHALLENGE
                      </span>
                      <p className="text-xs sm:text-sm font-semibold text-black dark:text-[#FFFFFC] mt-0.5">
                        {c.problem}
                      </p>
                    </div>
                    <div className="mt-3 pt-3 border-t border-black/10 dark:border-white/10">
                      <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                        ENGINEERING SOLUTION
                      </span>
                      <p className="text-xs sm:text-sm text-black/75 dark:text-[#BEB7A4] mt-0.5 leading-relaxed">
                        {c.solution}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 5. Key Impact & Milestones */}
          {project.impact && project.impact.length > 0 && (
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-semibold text-[#FF7F11]">05</span>
                <span className="text-black/30 dark:text-white/30 text-xs">/</span>
                <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-black/60 dark:text-[#BEB7A4]">
                  Impact & Key Results
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.impact.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 rounded-xl border border-black/10 dark:border-white/10 bg-black/[0.015] dark:bg-white/[0.015] p-3.5"
                  >
                    <span className="text-[#FF7F11] font-bold text-sm shrink-0">✓</span>
                    <span className="text-xs sm:text-sm text-black/80 dark:text-[#BEB7A4] leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Project Navigation Footer: Prev & Next */}
          <nav className="pt-10 border-t border-black/15 dark:border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <Link
              href={`/projects/${prevProject.slug}`}
              className="group flex flex-col p-4 rounded-xl border border-black/10 dark:border-white/10 hover:border-[#FF7F11]/50 transition-colors"
            >
              <span className="font-mono text-[10px] uppercase tracking-wider text-black/50 dark:text-white/40">
                ← PREVIOUS PROJECT
              </span>
              <span className="mt-1 text-sm sm:text-base font-bold text-black dark:text-white group-hover:text-[#FF7F11] transition-colors">
                {prevProject.title}
              </span>
            </Link>

            <Link
              href={`/projects/${nextProject.slug}`}
              className="group flex flex-col sm:text-right p-4 rounded-xl border border-black/10 dark:border-white/10 hover:border-[#FF7F11]/50 transition-colors"
            >
              <span className="font-mono text-[10px] uppercase tracking-wider text-black/50 dark:text-white/40">
                NEXT PROJECT →
              </span>
              <span className="mt-1 text-sm sm:text-base font-bold text-black dark:text-white group-hover:text-[#FF7F11] transition-colors">
                {nextProject.title}
              </span>
            </Link>
          </nav>
        </div>
      </main>

      <Footer />
    </div>
  );
}
