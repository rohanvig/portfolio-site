import type { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    id: "proj-5",
    title: "AfroPay Admin Panel",
    description:
      "Enterprise FinTech platform for managing secure digital wallet operations, settlements, and workflows.",
    longDescription:
      "Developed and enhanced a secure fintech admin portal for managing digital wallet operations, deposits, withdrawals, settlements, user management, and administrative workflows in a microservices architecture.",
    image: "/images/projects/crypto.svg",
    techStack: [
      "Angular",
      "Spring Boot",
      "Java",
      "Microservices",
      "Docker",
      "AWS",
      "MySQL",
    ],
    features: [
      "Maker-Checker approval workflows with role-based access control (RBAC)",
      "Secure digital wallet operations (deposits, withdrawals, settlements)",
      "Responsive Angular modules integrated with Spring Boot REST APIs",
      "Containerized microservices using Docker deployed on AWS",
    ],
    githubUrl: "",
    liveUrl: "",
    status: "completed",
    featured: true,
    category: "fullstack",
  },
  {
    id: "proj-1",
    title: "Krew — Multi-Consultancy SaaS",
    description:
      "A real-time consultancy platform with chat, notifications and video communication for multi-consultancy workflows.",
    longDescription:
      "Krew is a SaaS platform enabling consultancies to manage real-time client communication through chat, notifications, and video features with responsive dashboards.",
    image: "/images/projects/devflow.svg",
    techStack: ["React.js", "Node.js", "Express.js", "WebSocket", "Tailwind CSS"],
    features: [
      "Real-time chat and notifications",
      "Video communication support",
      "Responsive dashboards and reusable UI components",
      "Authentication, REST APIs and caching for improved performance",
    ],
    githubUrl: "https://github.com/rohanvig",
    liveUrl: "",
    status: "completed",
    featured: true,
    category: "saas",
  },
  {
    id: "proj-2",
    title: "Appointment Management System (AMS)",
    description:
      "Appointment scheduling platform with booking, cancellation and rescheduling capabilities.",
    longDescription:
      "Led development of a full-featured appointment management system with optimized backend APIs and responsive interfaces following modern UI/UX practices.",
    image: "/images/projects/taskforge.svg",
    techStack: ["React.js", "Node.js", "Express.js"],
    features: [
      "Appointment booking, cancellation and rescheduling",
      "Backend APIs with optimized queries",
      "Lazy loading and performance optimizations",
      "Responsive interfaces with modern UI/UX",
    ],
    githubUrl: "https://github.com/rohanvig",
    liveUrl: "",
    status: "completed",
    featured: true,
    category: "fullstack",
  },
  {
    id: "proj-3",
    title: "Multi-Tenant E-Commerce Platform",
    description:
      "SaaS platform enabling merchants to launch branded online stores with secure multi-tenant architecture.",
    longDescription:
      "Built a scalable multi-tenant e-commerce SaaS platform with secure authentication, optimized REST APIs, and scalable data models for merchant storefronts.",
    image: "/images/projects/nebula.svg",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    features: [
      "Multi-tenant merchant storefronts",
      "Scalable data models and optimized REST APIs",
      "Secure authentication and API communication",
      "Branded online store management",
    ],
    githubUrl: "https://github.com/rohanvig",
    liveUrl: "",
    status: "completed",
    featured: true,
    category: "saas",
  },
  {
    id: "proj-4",
    title: "JUA — Hotel Booking Platform",
    description:
      "Hotel booking platform with real-time room availability and end-to-end booking workflows.",
    longDescription:
      "Developed booking workflows with real-time room availability, API integrations for bookings and notifications, and responsive React interfaces with Zustand state management.",
    image: "/images/projects/cloudmetrics.svg",
    techStack: ["React.js", "Node.js", "Zustand", "REST APIs"],
    features: [
      "Real-time room availability",
      "Booking, notification and user management APIs",
      "Responsive React interfaces",
      "Zustand state management",
    ],
    githubUrl: "https://github.com/rohanvig",
    liveUrl: "",
    status: "completed",
    featured: true,
    category: "fullstack",
  },
];

export const PROJECT_CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "saas", label: "SaaS" },
  { id: "fullstack", label: "Full Stack" },
];
