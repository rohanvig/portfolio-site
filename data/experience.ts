import type { ExperienceItem } from "@/types";

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "exp-1",
    company: "LDT Technology",
    role: "Full-Stack Developer",
    period: "Sep 2024 – Present",
    location: "India",
    description:
      "Building scalable web applications and SaaS platforms using React.js, Angular, TypeScript, JavaScript, Tailwind CSS and Next.js.",
    techStack: [
      "React.js",
      "Angular",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Next.js",
      "Tailwind CSS",
      "Spring Boot",
    ],
    achievements: [
      "Developed and enhanced a secure fintech admin portal for managing digital wallet operations, deposits, withdrawals, settlements, user management, and administrative workflows.",
      "Built responsive Angular modules and integrated them with Spring Boot REST APIs following a microservices architecture.",
      "Implemented Maker-Checker approval workflows with role-based access control (RBAC) for financial operations and administrative actions.",
      "Collaborated across multiple microservices to develop, debug, and integrate enterprise business workflows with backend and QA teams.",
      "Containerized services using Docker and participated in application deployment and environment management on AWS.",
      "Optimized API integrations, resolved production issues, and contributed to Agile development, code reviews, and release cycles.",
      "Developed scalable web applications using React.js, Angular, TypeScript, JavaScript, Tailwind CSS and Next.js.",
      "Built reusable UI components and integrated REST APIs with Node.js backend services.",
      "Contributed to SaaS applications including appointment management, hotel booking, communication and multi-tenant e-commerce platforms.",
      "Implemented authentication, role-based access control, responsive dashboards and performance optimizations including lazy loading, caching and code splitting.",
    ],
    type: "work",
  },
];

export const EXPERIENCE_FILTERS = [
  { id: "all", label: "All" },
  { id: "work", label: "Full-time" },
];
