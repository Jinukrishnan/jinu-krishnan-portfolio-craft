import type { LucideIcon } from "lucide-react";

export interface NavLink {
  id: string;
  label: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
  color: string;
}

export interface Highlight {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  location: string;
  responsibilities: string[];
}

export interface ProjectItem {
  title: string;
  techStack: string[];
  description: string[];
  liveUrl: string;
  githubUrl: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  type: string;
}

export interface ContactInfo {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
}
