import type { BlogPost } from "@/types";

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-1",
    title: "Building Performant React Applications in 2025",
    excerpt:
      "A comprehensive guide to optimizing React apps with Server Components, streaming, and modern caching strategies.",
    date: "June 15, 2025",
    readTime: "8 min read",
    tags: ["React", "Performance", "Next.js"],
    slug: "performant-react-2025",
  },
  {
    id: "blog-2",
    title: "The Art of Component API Design",
    excerpt:
      "Lessons learned from building a design system used by thousands of developers worldwide.",
    date: "May 2, 2025",
    readTime: "6 min read",
    tags: ["Design Systems", "React", "TypeScript"],
    slug: "component-api-design",
  },
  {
    id: "blog-3",
    title: "From Monolith to Microservices: A Practical Guide",
    excerpt:
      "Our journey migrating a legacy monolith to a scalable microservices architecture without downtime.",
    date: "March 20, 2025",
    readTime: "12 min read",
    tags: ["Architecture", "DevOps", "Node.js"],
    slug: "monolith-to-microservices",
  },
];
