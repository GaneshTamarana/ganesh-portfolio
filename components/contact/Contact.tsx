"use client";

import { useState, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const shouldReduceMotion = useReducedMotion();

  const getTransition = (delay = 0, duration = 0.5) => ({
    duration: shouldReduceMotion ? 0.01 : duration,
    delay: shouldReduceMotion ? 0 : delay,
    ease: EASE,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    // Simulate brief network submission
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full overflow-hidden py-20 sm:py-28 lg:py-32 transition-colors duration-500"
    >
      {/* Subtle Dot Grid in Top-Right Background */}
      <div className="pointer-events-none absolute right-4 top-8 h-64 w-64 opacity-20 [background-image:radial-gradient(#FF7F11_1.2px,transparent_1.2px)] [background-size:16px_16px] dark:opacity-25" />

      {/* Subtle Ambient Glow */}
      <div className="pointer-events-none absolute left-1/4 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF7F11]/[0.04] blur-[140px]" />

      <div className="relative mx-auto w-full max-w-7xl min-w-0 px-5 sm:px-8 lg:px-12">
        {/* ========================================================
            MAIN 2-COLUMN GRID (LEFT: COPY & VALUE PROPS, RIGHT: FORM)
        ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1.15fr] gap-12 lg:gap-16 items-start">
          {/* ==================== LEFT COLUMN ==================== */}
          <div>
            {/* Section Tag: — 06 / CONTACT */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={getTransition(0.04, 0.45)}
              className="flex items-center gap-3"
            >
              <span className="h-0.5 w-7 bg-[#FF7F11]" />
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[#FF7F11]">
                06 / CONTACT
              </span>
            </motion.div>

            {/* Subheading Kicker */}
            <motion.p
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={getTransition(0.08, 0.45)}
              className="mt-6 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-black/50 dark:text-[#BEB7A4]/70"
            >
              HAVE A PROJECT IN MIND?
            </motion.p>

            {/* Main Headline */}
            <motion.h2
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={getTransition(0.12, 0.55)}
              className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.04em] text-black dark:text-[#FFFFFC] leading-[1.05]"
            >
              Let&apos;s build
              <br />
              something
              <br />
              great together.
            </motion.h2>

            {/* Narrative Paragraph */}
            <motion.p
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={getTransition(0.18, 0.5)}
              className="mt-6 text-sm sm:text-base leading-relaxed text-black/75 dark:text-[#BEB7A4] max-w-lg"
            >
              Whether you&apos;re looking to build a product, improve an existing application, or just want to discuss opportunities — I&apos;d love to hear from you.
            </motion.p>

            {/* 3 Value Badges (Open to, Quick Response, Let's Connect) */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0, y: 16 } : { opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={getTransition(0.24, 0.55)}
              className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {/* Badge 1: Open to */}
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#FF7F11]/40 bg-[#FF7F11]/10 text-[#FF7F11]">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <rect x="3" y="4" width="18" height="12" rx="2" />
                    <path strokeLinecap="round" d="M2 20h20" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-black dark:text-[#FFFFFC]">
                    Open to
                  </h4>
                  <p className="mt-0.5 text-[11px] leading-snug text-black/60 dark:text-[#BEB7A4]/75">
                    Full-time opportunities, freelance projects, and collaborations.
                  </p>
                </div>
              </div>

              {/* Badge 2: Quick Response */}
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#FF7F11]/40 bg-[#FF7F11]/10 text-[#FF7F11]">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-black dark:text-[#FFFFFC]">
                    Quick Response
                  </h4>
                  <p className="mt-0.5 text-[11px] leading-snug text-black/60 dark:text-[#BEB7A4]/75">
                    I usually reply within 24 hours.
                  </p>
                </div>
              </div>

              {/* Badge 3: Let's Connect */}
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#FF7F11]/40 bg-[#FF7F11]/10 text-[#FF7F11]">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-black dark:text-[#FFFFFC]">
                    Let&apos;s Connect
                  </h4>
                  <p className="mt-0.5 text-[11px] leading-snug text-black/60 dark:text-[#BEB7A4]/75">
                    Always open to discuss new ideas and opportunities.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Hairline Separator */}
            <div className="my-8 sm:my-10 h-px w-full bg-black/10 dark:bg-white/10" />

            {/* Social Links & Inspirational Quote (Desktop View) */}
            <div className="hidden lg:grid grid-cols-[auto_1fr] items-center gap-8">
              {/* Find Me On */}
              <div>
                <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-black/50 dark:text-white/50 block mb-3">
                  FIND ME ON
                </span>
                <div className="flex items-center gap-2.5">
                  {/* GitHub */}
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub Profile"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-black/15 dark:border-white/15 bg-black/5 dark:bg-white/5 text-black dark:text-white hover:border-[#FF7F11] hover:text-[#FF7F11] transition-colors"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn Profile"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-black/15 dark:border-white/15 bg-black/5 dark:bg-white/5 text-black dark:text-white hover:border-[#FF7F11] hover:text-[#FF7F11] transition-colors"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>

                  {/* Email Direct */}
                  <a
                    href="mailto:ganesh@example.com"
                    aria-label="Send Direct Email"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-black/15 dark:border-white/15 bg-black/5 dark:bg-white/5 text-black dark:text-white hover:border-[#FF7F11] hover:text-[#FF7F11] transition-colors"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Quote Block */}
              <div className="border-l border-black/10 dark:border-white/10 pl-6 flex items-start gap-3">
                <span className="font-serif text-3xl font-bold leading-none text-black/30 dark:text-white/30">
                  &ldquo;
                </span>
                <p className="text-sm italic text-black/75 dark:text-white/80 leading-snug pt-1">
                  Good products start with great conversations.
                </p>
              </div>
            </div>
          </div>

          {/* ==================== RIGHT COLUMN: FORM CARD ==================== */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0, y: 20 } : { opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={getTransition(0.2, 0.6)}
            className="rounded-[2rem] border border-black/15 dark:border-white/10 bg-black/[0.02] dark:bg-[#070707] p-6 sm:p-8 lg:p-9 shadow-2xl"
          >
            {/* Top Label */}
            <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-black/40 dark:text-white/40 block">
              SEND A MESSAGE
            </span>

            {/* Form Title & Subtitle */}
            <h3 className="mt-1.5 text-2xl sm:text-3xl font-bold tracking-tight text-black dark:text-[#FFFFFC]">
              Start a conversation.
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-black/60 dark:text-[#BEB7A4]/75">
              Fill out the form and I&apos;ll get back to you as soon as possible.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Your Name */}
                <div className="relative flex items-center rounded-xl border border-black/15 dark:border-white/10 bg-black/[0.03] dark:bg-[#0d0d0d] px-3.5 py-3 focus-within:border-[#FF7F11] transition-colors">
                  <span className="text-black/40 dark:text-white/40 mr-2.5 shrink-0">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </span>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full bg-transparent text-xs sm:text-sm text-black dark:text-[#FFFFFC] placeholder-black/40 dark:placeholder-white/40 focus:outline-none"
                  />
                </div>

                {/* Your Email */}
                <div className="relative flex items-center rounded-xl border border-black/15 dark:border-white/10 bg-black/[0.03] dark:bg-[#0d0d0d] px-3.5 py-3 focus-within:border-[#FF7F11] transition-colors">
                  <span className="text-black/40 dark:text-white/40 mr-2.5 shrink-0">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                    className="w-full bg-transparent text-xs sm:text-sm text-black dark:text-[#FFFFFC] placeholder-black/40 dark:placeholder-white/40 focus:outline-none"
                  />
                </div>
              </div>

              {/* Row 2: Subject */}
              <div className="relative flex items-center rounded-xl border border-black/15 dark:border-white/10 bg-black/[0.03] dark:bg-[#0d0d0d] px-3.5 py-3 focus-within:border-[#FF7F11] transition-colors">
                <span className="text-black/40 dark:text-white/40 mr-2.5 shrink-0">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </span>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Subject"
                  className="w-full bg-transparent text-xs sm:text-sm text-black dark:text-[#FFFFFC] placeholder-black/40 dark:placeholder-white/40 focus:outline-none"
                />
              </div>

              {/* Row 3: Your Message */}
              <div className="relative rounded-xl border border-black/15 dark:border-white/10 bg-black/[0.03] dark:bg-[#0d0d0d] px-3.5 pt-3 pb-7 focus-within:border-[#FF7F11] transition-colors">
                <div className="flex items-start">
                  <span className="text-black/40 dark:text-white/40 mr-2.5 mt-0.5 shrink-0">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </span>
                  <textarea
                    required
                    rows={4}
                    maxLength={500}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your Message"
                    className="w-full resize-none bg-transparent text-xs sm:text-sm text-black dark:text-[#FFFFFC] placeholder-black/40 dark:placeholder-white/40 focus:outline-none"
                  />
                </div>

                {/* Character Counter 0/500 */}
                <span className="absolute bottom-2 right-3 font-mono text-[10px] text-black/40 dark:text-white/40">
                  {message.length}/500
                </span>
              </div>

              {/* Submit Button: Orange Pill */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative flex w-full items-center justify-center gap-2 rounded-full bg-[#FF7F11] py-3.5 px-6 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-[0_4px_24px_rgba(255,127,17,0.35)] transition-all hover:bg-[#FF7F11]/90 active:scale-[0.99] disabled:opacity-75"
              >
                {/* Paper plane icon */}
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                <span>{isSubmitting ? "Sending..." : submitted ? "Message Sent!" : "Send Message"}</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </form>

            {/* Desktop Info Footer inside card: Email, Location, Availability */}
            <div className="hidden lg:grid grid-cols-3 gap-4 border-t border-black/10 dark:border-white/10 pt-6 mt-6">
              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center text-[#FF7F11]">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span className="font-mono text-[9.5px] uppercase tracking-wider text-black/50 dark:text-white/50 block">
                    EMAIL
                  </span>
                  <a href="mailto:ganesh@example.com" className="text-xs font-medium text-black dark:text-[#FFFFFC] hover:text-[#FF7F11] truncate block">
                    ganesh@example.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center text-[#FF7F11]">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <span className="font-mono text-[9.5px] uppercase tracking-wider text-black/50 dark:text-white/50 block">
                    LOCATION
                  </span>
                  <span className="text-xs font-medium text-black dark:text-[#FFFFFC]">
                    Remote / India
                  </span>
                </div>
              </div>

              {/* Availability */}
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center text-[#FF7F11]">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span className="font-mono text-[9.5px] uppercase tracking-wider text-black/50 dark:text-white/50 block">
                    AVAILABILITY
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-medium text-black dark:text-[#FFFFFC]">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.7)]" />
                    <span>Open to opportunities</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ========================================================
            MOBILE INFO CARDS (Matches Screenshot 2)
        ========================================================= */}
        <div className="lg:hidden mt-8 space-y-3">
          {/* Card 1: Email */}
          <div className="flex items-center gap-3.5 rounded-2xl border border-black/15 dark:border-white/10 bg-black/[0.02] dark:bg-[#070707] p-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center text-[#FF7F11]">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <span className="text-xs font-bold text-black dark:text-[#FFFFFC] block">
                Email
              </span>
              <a href="mailto:ganesh@example.com" className="text-xs text-black/60 dark:text-[#BEB7A4]/75 hover:text-[#FF7F11]">
                ganesh@example.com
              </a>
            </div>
          </div>

          {/* Card 2: Location */}
          <div className="flex items-center gap-3.5 rounded-2xl border border-black/15 dark:border-white/10 bg-black/[0.02] dark:bg-[#070707] p-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center text-[#FF7F11]">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <span className="text-xs font-bold text-black dark:text-[#FFFFFC] block">
                Location
              </span>
              <span className="text-xs text-black/60 dark:text-[#BEB7A4]/75">
                Remote / India
              </span>
            </div>
          </div>

          {/* Card 3: Availability */}
          <div className="flex items-center gap-3.5 rounded-2xl border border-black/15 dark:border-white/10 bg-black/[0.02] dark:bg-[#070707] p-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center text-[#FF7F11]">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <span className="text-xs font-bold text-black dark:text-[#FFFFFC] block">
                Availability
              </span>
              <div className="flex items-center gap-1.5 text-xs text-black/60 dark:text-[#BEB7A4]/75">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.7)]" />
                <span>Open to opportunities</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            MOBILE SOCIALS & QUOTE (Matches Screenshot 2)
        ========================================================= */}
        <div className="lg:hidden mt-8 space-y-6">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/50 dark:text-white/50 block mb-3">
              FIND ME ON
            </span>
            <div className="flex items-center gap-3">
              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-black/15 dark:border-white/15 bg-black/5 dark:bg-white/5 text-black dark:text-white hover:border-[#FF7F11] hover:text-[#FF7F11]"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-black/15 dark:border-white/15 bg-black/5 dark:bg-white/5 text-black dark:text-white hover:border-[#FF7F11] hover:text-[#FF7F11]"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* Direct Mail */}
              <a
                href="mailto:ganesh@example.com"
                aria-label="Send Direct Email"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-black/15 dark:border-white/15 bg-black/5 dark:bg-white/5 text-black dark:text-white hover:border-[#FF7F11] hover:text-[#FF7F11]"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quote Block */}
          <div className="border-l border-black/10 dark:border-white/10 pl-4 flex items-start gap-2.5">
            <span className="font-serif text-2xl font-bold leading-none text-black/30 dark:text-white/30">
              &ldquo;
            </span>
            <p className="text-xs italic text-black/75 dark:text-white/80 leading-snug pt-0.5">
              Good products start with great conversations.
            </p>
          </div>
        </div>

        {/* ========================================================
            BOTTOM FOOTER BAR
        ========================================================= */}
        <div className="mt-14 sm:mt-16 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-black/10 dark:border-white/10 pt-6">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-black/50 dark:text-[#BEB7A4]/70">
              LET&apos;S TURN IDEAS INTO REALITY.
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF7F11] shadow-[0_0_6px_#FF7F11]" />
          </div>

          <a
            href="mailto:ganesh@example.com"
            className="group inline-flex items-center gap-2 font-mono text-xs text-black/60 dark:text-[#BEB7A4] hover:text-[#FF7F11] dark:hover:text-[#FF7F11] transition-colors"
          >
            <span>ganesh@example.com</span>
            <span className="text-[#FF7F11] transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}