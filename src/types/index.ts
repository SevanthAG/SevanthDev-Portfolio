export interface SkillCategory {
  title: string;
  skills: string[];
  icon: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export interface Project {
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  image: string;
  github?: string;
  live?: string;
  status: 'completed' | 'in-progress';
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  link?: string;
}

export interface Leadership {
  title: string;
  organization: string;
  description: string;
}

export interface Achievement {
  title: string;
  event: string;
  description: string;
}

export interface Education {
  institution: string;
  degree: string;
  year: string;
  score: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  leetcode: string;
  email: string;
}

export interface ResumeData {
  name: string;
  title: string;
  summary: string;
  about: string;
  careerObjective: string;
  learningJourney: string;
  email: string;
  phone: string;
  location: string;
  socials: SocialLinks;
  education: Education[];
  skills: SkillCategory[];
  experience: Experience[];
  projects: Project[];
  certifications: Certification[];
  leadership: Leadership[];
  achievements: Achievement[];
}
