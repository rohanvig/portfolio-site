import type { PersonalInfo } from "@/types";

export const PERSONAL_INFO: PersonalInfo = {
  name: "Rohan Kumar",
  title: "Full-Stack Developer",
  tagline: "Building scalable web applications and SaaS platforms",
  email: "rohanvig777@gmail.com",
  phone: "+91-9350262380",
  location: "Haryana, India",
  resumeUrl: "/resume.pdf",
  avatarUrl: "/images/avatar.svg",
  socialLinks: [
    { name: "GitHub", url: "https://github.com/rohanvig", icon: "github" },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/rohankumar2/",
      icon: "linkedin",
    },
    { name: "Email", url: "mailto:rohanvig777@gmail.com", icon: "email" },
  ],
};

export const HERO_ROLES = [
  "Full-Stack Developer",
  "React & Angular Developer",
  "SaaS Platform Builder",
  "Agentic AI Enthusiast",
];

export const HERO_HIGHLIGHTS = {
  experience: "1.7+",
  experienceLabel: "Years Exp.",
  projects: "5",
  projectsLabel: "Projects",
};

export const ABOUT_SUMMARY = `Full-Stack Developer with 1.7+ years of experience building scalable web applications using React.js, Angular, Node.js, Express.js and modern JavaScript technologies. Experienced in responsive UI development, REST API integration, SaaS platforms, and Agile delivery.`;

export const ABOUT_PASSION = `I'm passionate about building reusable UI components, integrating REST APIs, and delivering performant SaaS applications across communication, booking, and e-commerce domains. I enjoy collaborating with cross-functional teams and participating in Agile ceremonies, code reviews, and production deployments.`;

export const ABOUT_GOALS = `I'm currently pursuing an Agentic AI Engineering course and expanding my expertise in LLM-powered applications. My goal is to grow as a full-stack engineer who builds intelligent, scalable products that solve real business problems.`;

export const ACHIEVEMENTS = [
  "Secured Top 10 university ranks in multiple semesters at Kurukshetra University.",
  "Delivered multiple SaaS-based full-stack applications across communication, booking and e-commerce domains.",
];

export const EDUCATION = [
  {
    id: "edu-1",
    title: "Master of Computer Applications (MCA)",
    description: "Kurukshetra University — 78%",
    year: "2025",
  },
  {
    id: "edu-2",
    title: "Bachelor of Computer Applications (BCA)",
    description: "Kurukshetra University — 76%",
    year: "2023",
  },
];

export const CAREER_TIMELINE = [
  {
    id: "tl-1",
    year: "2023",
    title: "BCA Completed",
    subtitle: "Kurukshetra University",
    description: "Graduated with 76% and built a strong foundation in computer applications.",
  },
  {
    id: "tl-2",
    year: "2024",
    title: "Started Professional Career",
    subtitle: "Full-Stack Developer at LDT Technology",
    description: "Began building scalable SaaS web applications with React, Angular, and Node.js.",
  },
  {
    id: "tl-3",
    year: "2025",
    title: "MCA Completed",
    subtitle: "Kurukshetra University",
    description: "Graduated with 78% while continuing full-stack development and exploring Agentic AI.",
  },
];

export const STATS = [
  { label: "Years Experience", value: 1, suffix: ".7+" },
  { label: "SaaS Projects", value: 5 },
  { label: "Certifications", value: 2 },
  { label: "Top University Rank", value: 10, prefix: "Top " },
];
