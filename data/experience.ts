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
      "Developed scalable web applications using React.js, Angular, TypeScript, JavaScript, Tailwind CSS and Next.js.",
      "Built reusable UI components and integrated REST APIs with Node.js backend services.",
      "Collaborated with Java Spring Boot backend teams to integrate APIs, debug issues and support enterprise features.",
      "Contributed to SaaS applications including appointment management, hotel booking, communication and multi-tenant e-commerce platforms.",
      "Implemented authentication, role-based access control, responsive dashboards and performance optimizations including lazy loading, caching and code splitting.",
      "Participated in Agile ceremonies, code reviews, debugging and production deployments.",
    ],
    type: "work",
  },
];

export const EXPERIENCE_FILTERS = [
  { id: "all", label: "All" },
  { id: "work", label: "Full-time" },
];
