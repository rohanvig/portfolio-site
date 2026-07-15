import type { SkillCategory } from "@/types";

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "languages",
    name: "Languages",
    icon: "code",
    skills: [
      { name: "JavaScript", level: 90, icon: "javascript" },
      { name: "TypeScript", level: 85, icon: "typescript" },
      { name: "Java", level: 75, icon: "java" },
      { name: "SQL", level: 80, icon: "sql" },
      { name: "HTML5", level: 90, icon: "html" },
      { name: "CSS3", level: 88, icon: "css" },
    ],
  },
  {
    id: "frontend",
    name: "Frontend",
    icon: "layout",
    skills: [
      { name: "React.js", level: 90, icon: "react" },
      { name: "Angular", level: 85, icon: "angular" },
      { name: "Next.js", level: 82, icon: "nextjs" },
      { name: "Redux", level: 80, icon: "redux" },
      { name: "Zustand", level: 85, icon: "zustand" },
      { name: "Tailwind CSS", level: 88, icon: "tailwind" },
      { name: "Bootstrap", level: 80, icon: "bootstrap" },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    icon: "server",
    skills: [
      { name: "Node.js", level: 88, icon: "nodejs" },
      { name: "Express.js", level: 88, icon: "express" },
      { name: "Spring Boot", level: 70, icon: "spring" },
      { name: "REST APIs", level: 90, icon: "api" },
      { name: "WebSocket", level: 82, icon: "websocket" },
    ],
  },
  {
    id: "databases",
    name: "Databases",
    icon: "database",
    skills: [
      { name: "MongoDB", level: 85, icon: "mongodb" },
      { name: "MySQL", level: 82, icon: "mysql" },
    ],
  },
  {
    id: "tools",
    name: "Tools",
    icon: "wrench",
    skills: [
      { name: "Git", level: 88, icon: "git" },
      { name: "GitHub", level: 88, icon: "github" },
      { name: "Docker", level: 75, icon: "docker" },
      { name: "Redis", level: 78, icon: "redis" },
      { name: "Maven", level: 72, icon: "maven" },
      { name: "Postman", level: 85, icon: "postman" },
      { name: "VS Code", level: 90, icon: "vscode" },
    ],
  },
  {
    id: "concepts",
    name: "Concepts",
    icon: "terminal",
    skills: [
      { name: "Authentication", level: 85, icon: "auth" },
      { name: "JWT", level: 85, icon: "jwt" },
      { name: "RBAC", level: 82, icon: "rbac" },
      { name: "Microservices", level: 75, icon: "microservices" },
      { name: "API Integration", level: 90, icon: "api" },
      { name: "Performance Optimization", level: 85, icon: "performance" },
      { name: "Agile", level: 88, icon: "agile" },
    ],
  },
];
