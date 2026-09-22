"use client";

import { useState } from "react";

type Service = {
  number: string;
  title: string;
  description: string;
  capabilities: string[];
};

const services: Service[] = [
  {
    number: "01",
    title: "Full Stack Development",
    description:
      "Building complete web applications from the interface to the backend, database, authentication, and deployment.",
    capabilities: [
      "Frontend architecture",
      "Backend architecture",
      "REST APIs",
      "Authentication",
      "Database integration",
      "Production deployment",
    ],
  },
  {
    number: "02",
    title: "Frontend Development",
    description:
      "Creating responsive and interactive interfaces with a strong focus on usability, performance, and maintainable component architecture.",
    capabilities: [
      "React applications",
      "Next.js applications",
      "Responsive UI",
      "Reusable components",
      "State management",
      "Performance optimization",
    ],
  },
  {
    number: "03",
    title: "Backend & API Engineering",
    description:
      "Designing reliable backend systems, APIs, database structures, and real-time communication for modern applications.",
    capabilities: [
      "Node.js",
      "NestJS",
      "Express",
      "MongoDB",
      "Redis",
      "WebSockets",
    ],
  },
  {
    number: "04",
    title: "AI & Product Integration",
    description:
      "Integrating AI capabilities and external services into products to create useful and intelligent user experiences.",
    capabilities: [
      "AI API integration",
      "Gemini integration",
      "Speech services",
      "Third-party APIs",
      "AI-powered workflows",
      "Product experimentation",
    ],
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section
      id="services"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#050505]
        py-24
        text-white

        sm:py-28

        md:py-32

        lg:py-40
      "
    >
      {/* ==================================================
          BACKGROUND
      ================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-[-15%]
          top-[20%]
          h-[350px]
          w-[350px]
          rounded-full
          bg-blue-600/[0.035]
          blur-[120px]

          sm:h-[450px]
          sm:w-[450px]

          lg:h-[600px]
          lg:w-[600px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[-15%]
          bottom-[5%]
          h-[400px]
          w-[400px]
          rounded-full
          bg-orange-500/[0.035]
          blur-[120px]

          sm:h-[500px]
          sm:w-[500px]

          lg:h-[650px]
          lg:w-[650px]
        "
      />

      {/* ==================================================
          MAIN CONTAINER
      ================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-7xl
          px-6
          lg:px-8
        "
      >
        {/* ==================================================
            HEADER
        ================================================== */}

        <div
          className="
            mb-14

            sm:mb-20

            lg:mb-24
          "
        >
          <div className="mb-5 flex items-center gap-3">
            <span
              className="
                h-px
                w-8
                bg-white/30

                sm:w-10
              "
            />

            <span
              className="
                text-[10px]
                font-medium
                tracking-[0.3em]
                text-white/30

                sm:text-[11px]
              "
            >
              WHAT I DO
            </span>
          </div>

          <div
            className="
              flex
              flex-col
              gap-6

              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >
            <h2
              className="
                max-w-[800px]
                text-[clamp(44px,10vw,80px)]
                font-bold
                leading-[0.9]
                tracking-[-0.065em]
              "
            >
              Turning ideas
              <br />
              <span className="text-white/35">
                into digital products.
              </span>
            </h2>

            <p
              className="
                max-w-[430px]
                text-sm
                leading-7
                text-white/35

                sm:text-[15px]
                sm:leading-8

                lg:pb-2
              "
            >
              From frontend interfaces to backend
              architecture and AI integrations, I work
              across the stack to build products that are
              practical, scalable, and easy to use.
            </p>
          </div>
        </div>

        {/* ==================================================
            SERVICES LIST
        ================================================== */}

        <div
          className="
            overflow-hidden
            rounded-2xl
            border
            border-white/[0.08]
          "
        >
          {services.map((service, index) => {
            const isActive = activeService === index;

            return (
              <div
                key={service.number}
                className="
                  border-b
                  border-white/[0.08]
                  last:border-b-0
                "
              >
                {/* ==================================================
                    SERVICE HEADER
                ================================================== */}

                <button
                  type="button"
                  onClick={() => setActiveService(index)}
                  className={`
                    group
                    relative
                    flex
                    w-full
                    items-center
                    gap-4
                    px-5
                    py-6
                    text-left
                    transition-all
                    duration-500

                    sm:px-7
                    sm:py-7

                    md:gap-8

                    lg:px-10
                    lg:py-8

                    ${
                      isActive
                        ? "bg-white/[0.025]"
                        : "hover:bg-white/[0.015]"
                    }
                  `}
                >
                  {/* Active indicator */}

                  <span
                    className={`
                      absolute
                      left-0
                      top-0
                      h-full
                      w-[2px]
                      transition-all
                      duration-500

                      ${
                        isActive
                          ? "bg-white"
                          : "bg-transparent"
                      }
                    `}
                  />

                  {/* Number */}

                  <span
                    className={`
                      shrink-0
                      text-[10px]
                      tracking-[0.2em]
                      transition-colors
                      duration-300

                      sm:text-[11px]

                      ${
                        isActive
                          ? "text-white/60"
                          : "text-white/20"
                      }
                    `}
                  >
                    {service.number}
                  </span>

                  {/* Title */}

                  <span
                    className={`
                      flex-1
                      text-xl
                      font-medium
                      tracking-[-0.04em]
                      transition-all
                      duration-300

                      sm:text-2xl

                      md:text-3xl

                      lg:text-[34px]

                      ${
                        isActive
                          ? "text-white"
                          : "text-white/45 group-hover:text-white/75"
                      }
                    `}
                  >
                    {service.title}
                  </span>

                  {/* Arrow */}

                  <span
                    className={`
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      transition-all
                      duration-500

                      sm:h-9
                      sm:w-9

                      ${
                        isActive
                          ? "rotate-0 border-white/20 bg-white text-black"
                          : "border-white/[0.08] text-white/25 group-hover:border-white/20 group-hover:text-white/60"
                      }
                    `}
                  >
                    {isActive ? "−" : "↗"}
                  </span>
                </button>

                {/* ==================================================
                    EXPANDED CONTENT
                ================================================== */}

                <div
                  className={`
                    grid
                    transition-[grid-template-rows]
                    duration-500
                    ease-out

                    ${
                      isActive
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    }
                  `}
                >
                  <div className="overflow-hidden">
                    <div
                      className="
                        grid
                        grid-cols-1
                        gap-8
                        px-5
                        pb-7
                        pl-[calc(20px+26px)]
                        pt-0

                        sm:px-7
                        sm:pb-8
                        sm:pl-[calc(28px+28px)]

                        md:grid-cols-[1fr_1fr]
                        md:gap-12

                        lg:px-10
                        lg:pb-10
                        lg:pl-[calc(40px+42px)]
                      "
                    >
                      {/* Description */}

                      <div>
                        <span
                          className="
                            text-[9px]
                            uppercase
                            tracking-[0.25em]
                            text-white/20
                          "
                        >
                          Overview
                        </span>

                        <p
                          className="
                            mt-4
                            max-w-[580px]
                            text-sm
                            leading-7
                            text-white/35

                            sm:text-[15px]
                            sm:leading-8
                          "
                        >
                          {service.description}
                        </p>
                      </div>

                      {/* Capabilities */}

                      <div>
                        <span
                          className="
                            text-[9px]
                            uppercase
                            tracking-[0.25em]
                            text-white/20
                          "
                        >
                          Capabilities
                        </span>

                        <div
                          className="
                            mt-4
                            grid
                            grid-cols-1
                            gap-2

                            sm:grid-cols-2
                          "
                        >
                          {service.capabilities.map(
                            (capability, capabilityIndex) => (
                              <div
                                key={capability}
                                className="
                                  flex
                                  items-center
                                  gap-3
                                  border-b
                                  border-white/[0.06]
                                  py-2.5
                                "
                              >
                                <span
                                  className="
                                    text-[8px]
                                    tracking-[0.15em]
                                    text-white/15
                                  "
                                >
                                  {String(
                                    capabilityIndex + 1,
                                  ).padStart(2, "0")}
                                </span>

                                <span
                                  className="
                                    text-[11px]
                                    text-white/40

                                    sm:text-xs
                                  "
                                >
                                  {capability}
                                </span>
                              </div>
                            ),
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ==================================================
            SMALL CTA
        ================================================== */}

        <div
          className="
            mt-12
            flex
            flex-col
            gap-6

            sm:flex-row
            sm:items-center
            sm:justify-between

            lg:mt-14
          "
        >
          <div>
            <span
              className="
                text-[9px]
                tracking-[0.25em]
                text-white/20
              "
            >
              05 — SERVICES
            </span>
          </div>

          <a
            href="#contact"
            className="
              group
              inline-flex
              w-fit
              items-center
              gap-3
              text-xs
              font-medium
              text-white/50
              transition-colors
              duration-300
              hover:text-white
            "
          >
            <span>Have a project in mind?</span>

            <span
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}