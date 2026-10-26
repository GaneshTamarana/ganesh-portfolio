export interface FeatureTag {
  label: string;
  icon: string;
}

export interface CaseStudyFeature {
  title: string;
  description: string;
  icon: string;
}

export interface CaseStudyChallenge {
  problem: string;
  solution: string;
}

export interface ProjectData {
  slug: string;
  number: string;
  meta: string;
  type: "professional" | "personal";
  title: string;
  subtitle: string;
  description: string;
  overview: string;
  role: string;
  timeline: string;
  client?: string;
  features: FeatureTag[];
  caseStudyFeatures?: CaseStudyFeature[];
  challenges?: CaseStudyChallenge[];
  impact?: string[];
  architecture?: string;
  stack: string[];
  image: string;
  domain?: string;
  link?: string;
  github?: string;
}

export const projectsList: ProjectData[] = [
  {
    slug: "manyaseema",
    number: "01",
    meta: "CLIENT PROJECT · INDEPENDENT",
    type: "personal",
    title: "Manyaseema (MVO)",
    subtitle: "NGO Web Platform & Sustainable Impact Portal",
    description:
      "Official web platform for Manyaseema Volunteer Organization, empowering tribal communities in the Eastern Ghats with Minor Forest Produce value addition, conservation initiatives, and direct SMTP inquiry routing.",
    overview:
      "Manyaseema Volunteer Organization (MVO) is a community-based, non-profit organization operating across the biodiverse and culturally rich Eastern Ghats of Andhra Pradesh, India. The organization partners closely with indigenous tribal groups and rural farming clusters. This comprehensive digital web portal was designed and engineered to showcase grassroots community empowerment, Minor Forest Produce (MFP/NTFP) value addition, biodiversity conservation initiatives, and facilitate seamless inbound partner inquiries.",
    role: "Full-Stack Developer & UI/UX Designer",
    timeline: "2026 · Production Live",
    client: "Manyaseema Volunteer Organization (MVO)",
    features: [
      { label: "Community & NTFP", icon: "🌿" },
      { label: "SMTP Contact API", icon: "✉️" },
      { label: "Interactive Motion", icon: "✨" },
      { label: "Dynamic SEO & Sitemap", icon: "📈" },
    ],
    caseStudyFeatures: [
      {
        icon: "🌿",
        title: "Minor Forest Produce (MFP) Initiatives",
        description:
          "Comprehensive presentation of tribal livelihood programs including processing, grading, packaging, and marketing value additions for wild honey, tamarind, and turmeric.",
      },
      {
        icon: "✉️",
        title: "Secure SMTP Mail Dispatcher",
        description:
          "Custom API handler powered by Nodemailer routing inbound contact messages, volunteer requests, and CSR partnership proposals directly to the organization's mailbox.",
      },
      {
        icon: "✨",
        title: "Smooth Scroll & Fluid Animations",
        description:
          "Interactive micro-interactions, scroll-driven reveals, and dynamic stat counters engineered with Framer Motion and Lenis smooth scrolling.",
      },
      {
        icon: "📈",
        title: "Automated SEO & Social Discovery",
        description:
          "Dynamic sitemap.xml, robots.txt, OpenGraph tags, and Twitter Card metadata for high search discoverability on environmental and tribal welfare queries.",
      },
    ],
    challenges: [
      {
        problem:
          "Target audience in semi-rural regions with varied network connectivity and mobile device performance.",
        solution:
          "Implemented Next.js 16 image optimization pipelines, font subsetting, lazy loading, and minimal client-side JavaScript to ensure fast page loads under low bandwidth.",
      },
      {
        problem:
          "Providing a simple, dependable contact and partnership pipeline without recurring CMS subscription costs.",
        solution:
          "Built a direct server-side SMTP mailer endpoint using Nodemailer with structured JSON validation and clean HTML notification templates.",
      },
    ],
    impact: [
      "Official live web portal deployed at https://manyaseema.ngo",
      "250+ Tribal villages and forest produce initiatives highlighted",
      "Over 10,000+ Community beneficiaries reached and documented",
      "Automated partner and donation inquiry dispatch system",
    ],
    architecture:
      "Engineered using Next.js 16 App Router and React 19. Tailwind CSS v4 delivers a crisp mobile-first design system with customized typography (Montserrat, Inter, Poppins). The backend leverages Next.js Route Handlers to process contact inquiries through secure SMTP credentials, with @vercel/analytics for real-time web performance monitoring.",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Framer Motion",
      "Nodemailer",
    ],
    image: "/images/projects/manyaseema.png",
    domain: "manyaseema.ngo",
    link: "https://manyaseema.ngo",
  },
  {
    slug: "eduprova",
    number: "02",
    meta: "PROFESSIONAL · DILSHAJ INFOTECH",
    type: "professional",
    title: "EduProva",
    subtitle: "AI-Powered EdTech Platform",
    description:
      "A multi-module platform combining learning, social networking, AI tools, job discovery, and a freelance marketplace.",
    overview:
      "EduProva is an integrated EdTech and career ecosystem engineered to bridge the gap between education and employment. It integrates an intelligent learning management system, interactive AI mentor chat, verified skill pathways, career discovery, and a peer-to-peer freelance talent network within a single unified workspace.",
    role: "Full-Stack Engineer",
    timeline: "2026 · Enterprise Project",
    client: "Dilshaj Infotech",
    features: [
      { label: "Learning Management", icon: "📑" },
      { label: "AI Mentor", icon: "🤖" },
      { label: "Job Portal", icon: "💼" },
      { label: "Freelance Marketplace", icon: "🖋️" },
    ],
    caseStudyFeatures: [
      {
        icon: "🤖",
        title: "Intelligent AI Mentor & Assistant",
        description:
          "Context-aware AI tutor providing personalized learning recommendations, real-time code reviews, and structured concept explanations.",
      },
      {
        icon: "📑",
        title: "Interactive Course Delivery",
        description:
          "Modular lesson progression with interactive coding exercises, multimedia modules, automated quizzes, and verifiable progress certificates.",
      },
      {
        icon: "💼",
        title: "Career & Job Discovery Engine",
        description:
          "Algorithmic job matchmaking connecting skilled graduates directly with vetted hiring partners based on verified skill badges.",
      },
      {
        icon: "⚡",
        title: "Real-Time Collaboration",
        description:
          "Live peer-to-peer discussion channels, collaborative workspaces, and instantaneous notifications built on Socket.IO.",
      },
    ],
    challenges: [
      {
        problem:
          "Managing high concurrent loads and low-latency state synchronization across learning and chat modules.",
        solution:
          "Architected a micro-service backend utilizing NestJS, Redis caching layers, and Socket.IO connection pools for reliable real-time event broadcasting.",
      },
    ],
    impact: [
      "Unified 4 distinct platforms (LMS, AI Chat, Job Board, Marketplace) into one responsive application",
      "Sub-100ms response times for real-time messaging and notification dispatch",
    ],
    architecture:
      "Constructed using Next.js with React and TypeScript on the frontend. The backend services run on NestJS with MongoDB for primary data storage and Redis for session cache and pub/sub message brokering.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "NestJS",
      "MongoDB",
      "Redis",
      "Socket.IO",
      "AI Services",
    ],
    image: "/images/projects/eduprova.png",
  },
  {
    slug: "freelance-marketplace",
    number: "03",
    meta: "PROFESSIONAL · DILSHAJ INFOTECH",
    type: "professional",
    title: "Freelance Marketplace",
    subtitle: "Marketplace & Freelance Product Development",
    description:
      "A standalone marketplace for discovering services, onboarding freelancers, managing orders, contracts, payments, and project workflows.",
    overview:
      "A specialized end-to-end freelance services platform designed for seamless service discovery, milestone-based contract creation, secure escrow transactions, and collaborative project workspaces.",
    role: "Full-Stack Engineer",
    timeline: "2026 · Enterprise Project",
    client: "Dilshaj Infotech",
    features: [
      { label: "Service Discovery", icon: "🛒" },
      { label: "Secure Payments", icon: "💳" },
      { label: "Real-time Chat", icon: "💬" },
      { label: "Project Management", icon: "📊" },
    ],
    caseStudyFeatures: [
      {
        icon: "🛒",
        title: "Dynamic Service Catalog & Search",
        description:
          "Categorized gig listings, tiered pricing models, and search with customizable filter facets.",
      },
      {
        icon: "💳",
        title: "Milestone Escrow & Payments",
        description:
          "Automated milestone tracking and secure financial transactions integrated via Razorpay payment gateways.",
      },
      {
        icon: "💬",
        title: "In-App Messaging & File Sharing",
        description:
          "Instant messaging channels between buyers and sellers with attachment support and typing indicators.",
      },
      {
        icon: "📊",
        title: "Order Lifecycle Management",
        description:
          "Interactive revision workflows, dispute resolution mechanisms, and delivery status monitors.",
      },
    ],
    challenges: [
      {
        problem:
          "Ensuring transaction security and preventing race conditions during order completions and fund releases.",
        solution:
          "Implemented database transaction locks in MongoDB and webhook verification hooks for third-party payment lifecycles.",
      },
    ],
    impact: [
      "Reduced gig onboarding and service listing friction to under 3 minutes",
      "Zero payment discrepancy across milestone release tests",
    ],
    architecture:
      "Next.js App Router frontend with TypeScript, NestJS microservices, Redis caching, MongoDB databases, and Razorpay payment webhooks.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "NestJS",
      "MongoDB",
      "Redis",
      "Socket.IO",
      "Razorpay",
    ],
    image: "/images/projects/freelance.png",
  },
  {
    slug: "ecommerce-store",
    number: "04",
    meta: "FULL-STACK · INDEPENDENT",
    type: "personal",
    title: "E-Commerce Application",
    subtitle: "Java Spring Boot + React",
    description:
      "A full-stack e-commerce application with product management, user authentication, cart, order management, and secure payment integration.",
    overview:
      "A production-ready, full-stack online commerce platform engineered with Java Spring Boot backend services and a reactive React client interface. Built to handle inventory management, role-based authorization, shopping carts, and checkout workflows.",
    role: "Full-Stack Developer",
    timeline: "2024 · Independent Project",
    features: [
      { label: "Product Catalog", icon: "📦" },
      { label: "User Authentication", icon: "👤" },
      { label: "Order Management", icon: "🛒" },
      { label: "Payment Integration", icon: "💳" },
    ],
    caseStudyFeatures: [
      {
        icon: "📦",
        title: "Inventory & Catalog Service",
        description:
          "Hierarchical category filtering, inventory status tracking, and RESTful product endpoints.",
      },
      {
        icon: "👤",
        title: "JWT Security & Role Control",
        description:
          "Spring Security authentication guarding customer and administrator routes.",
      },
      {
        icon: "🛒",
        title: "Cart & Checkout Flow",
        description:
          "Persistent cart storage with optimistic UI updates and real-time total calculation.",
      },
    ],
    challenges: [
      {
        problem:
          "Managing relational database schemas with complex order-to-product mapping without N+1 queries.",
        solution:
          "Utilized Hibernate JPA EntityGraphs, Fetch Joins, and DTO projections for optimized SQL execution.",
      },
    ],
    impact: [
      "Demonstrates enterprise-grade Java Spring Boot patterns and clean REST API contracts",
    ],
    architecture:
      "Java 17 Spring Boot backend with Hibernate JPA, MySQL relational database, and React SPA client.",
    stack: [
      "Java",
      "Spring Boot",
      "Hibernate",
      "MySQL",
      "React",
      "REST APIs",
    ],
    image: "/images/projects/ecommerce.jpg",
  },
  {
    slug: "task-manager",
    number: "05",
    meta: "PERSONAL PROJECT · INDEPENDENT",
    type: "personal",
    title: "Task Manager",
    subtitle: "Full-Stack Productivity Application",
    description:
      "A task management application with authentication, protected routes, team collaboration, and real-time updates.",
    overview:
      "A modern task management application modeled after Jira and Trello, engineered for software teams to organize sprints, assign tasks, update statuses in real-time, and track progress.",
    role: "Full-Stack Developer",
    timeline: "2023 · Independent Project",
    features: [
      { label: "Task Management", icon: "📋" },
      { label: "Team Collaboration", icon: "👥" },
      { label: "Real-time Updates", icon: "⚡" },
      { label: "Progress Tracking", icon: "📈" },
    ],
    caseStudyFeatures: [
      {
        icon: "📋",
        title: "Kanban Board & Sprints",
        description:
          "Drag-and-drop task status transitions with priority indicators and tags.",
      },
      {
        icon: "👥",
        title: "Team Workspaces",
        description:
          "Role-based access allowing team members to comment, assign, and review deliverables.",
      },
      {
        icon: "⚡",
        title: "Real-Time Sync",
        description:
          "Socket.IO websocket channels instantly updating column states across all active browsers.",
      },
    ],
    challenges: [
      {
        problem:
          "Synchronizing collaborative drag-and-drop actions without conflicts or stale state.",
        solution:
          "Employed optimistic client-side updates coupled with server-side sequence validation.",
      },
    ],
    impact: [
      "Smooth collaborative user experience with sub-second websocket state propagation",
    ],
    architecture:
      "React client paired with an Express/Node.js backend, MongoDB database, JWT authentication, and Socket.IO.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Socket.IO"],
    image: "/images/projects/task-manager.png",
  },
];

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projectsList.find((p) => p.slug === slug);
}
