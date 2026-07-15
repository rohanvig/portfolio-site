export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  email: string;
  phone: string;
  location: string;
  resumeUrl: string;
  avatarUrl: string;
  socialLinks: SocialLink[];
}

export interface AboutItem {
  id: string;
  title: string;
  description: string;
  year?: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  skills: Skill[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  techStack: string[];
  achievements: string[];
  type: "work" | "internship" | "freelance";
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  techStack: string[];
  features: string[];
  githubUrl: string;
  liveUrl: string;
  status: "completed" | "in-progress" | "archived";
  featured: boolean;
  category: string;
}

export interface Certification {
  id: string;
  title: string;
  organization: string;
  date: string;
  credentialId: string;
  credentialUrl: string;
  logo: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface GitHubStat {
  label: string;
  value: number;
  suffix?: string;
}

export interface PinnedRepo {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  url: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
}

export interface StatItem {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
}
