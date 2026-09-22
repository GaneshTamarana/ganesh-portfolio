"use client";

import { useEffect, useRef } from "react";

export default function ScrollBackground() {
    const sceneRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let animationFrame = 0;

        const updateScene = () => {
            if (!sceneRef.current) return;

            const scrollY = window.scrollY;

            const rotation = scrollY * 0.035;
            const translateY = scrollY * 0.08;

            sceneRef.current.style.transform = `
        translate3d(0, ${translateY}px, 0)
        rotate(${rotation}deg)
      `;

            animationFrame = requestAnimationFrame(updateScene);
        };

        animationFrame = requestAnimationFrame(updateScene);

        return () => {
            cancelAnimationFrame(animationFrame);
        };
    }, []);

    return (
        <div
            className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
            aria-hidden="true"
        >
            {/* Main geometric object */}
            <div
                ref={sceneRef}
                className="
          absolute
          left-1/2
          top-[15%]
          h-[420px]
          w-[420px]
          -translate-x-1/2
          rounded-full
          border
          border-black/[0.06]
          transition-transform
          duration-100
          dark:border-[#BEB7A4]/[0.08]
          sm:h-[600px]
          sm:w-[600px]
          lg:h-[850px]
          lg:w-[850px]
        "
            >
                {/* Inner ring */}
                <div className="absolute inset-[12%] rounded-full border border-black/[0.045] dark:border-[#BEB7A4]/[0.06]" />

                {/* Second ring */}
                <div className="absolute inset-[25%] rounded-full border border-black/[0.04] dark:border-[#BEB7A4]/[0.05]" />

                {/* Horizontal technical lines */}
                <div className="absolute left-0 right-0 top-1/2 h-px bg-black/[0.035] dark:bg-[#BEB7A4]/[0.06]" />

                <div className="absolute left-0 right-0 top-[35%] h-px bg-black/[0.025] dark:bg-[#BEB7A4]/[0.04]" />

                <div className="absolute left-0 right-0 top-[65%] h-px bg-black/[0.025] dark:bg-[#BEB7A4]/[0.04]" />

                {/* Vertical technical line */}
                <div className="absolute bottom-0 left-1/2 top-0 w-px bg-black/[0.035] dark:bg-[#BEB7A4]/[0.06]" />

                {/* Small markers */}
                <div className="absolute left-[18%] top-[18%] h-2 w-2 rounded-full bg-black/10 dark:bg-[#FF7F11]/40" />

                <div className="absolute right-[20%] top-[38%] h-1.5 w-1.5 rounded-full bg-black/10 dark:bg-[#BEB7A4]/20" />

                <div className="absolute bottom-[22%] left-[32%] h-1.5 w-1.5 rounded-full bg-black/10 dark:bg-[#BEB7A4]/20" />

                <div className="absolute bottom-[15%] right-[25%] h-2 w-2 rounded-full bg-black/10 dark:bg-[#FF7F11]/40" />
            </div>

            {/* Soft ambient light: subtle warm orange & beige */}
            <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#FF7F11]/[0.08] blur-[130px] dark:bg-[#FF7F11]/[0.05]" />

            <div className="absolute -left-40 bottom-20 h-96 w-96 rounded-full bg-[#FFFFFC]/40 blur-[130px] dark:bg-[#BEB7A4]/[0.03]" />

            {/* Fine grid */}
            <div
                className="
          absolute
          inset-0
          opacity-[0.025]
          [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
          [background-size:80px_80px]
          dark:opacity-[0.03]
          dark:[background-image:linear-gradient(to_right,#BEB7A4_1px,transparent_1px),linear-gradient(to_bottom,#BEB7A4_1px,transparent_1px)]
        "
            />
        </div>
    );
}