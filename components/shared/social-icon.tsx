import {
  SiGithub,
  SiLeetcode,
  SiHackerrank,
} from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";
import type { ComponentType } from "react";

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  github: SiGithub,
  linkedin: FaLinkedin,
  email: Mail,
  leetcode: SiLeetcode,
  hackerrank: SiHackerrank,
};

interface SocialIconProps {
  icon: string;
  className?: string;
}

export function SocialIcon({ icon, className }: SocialIconProps) {
  const Icon = iconMap[icon];
  if (!Icon) return null;
  return <Icon className={className} />;
}
