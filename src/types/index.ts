export interface SiteConfig extends HeaderProps {
  title: string;
  description: string;
  lang: string;
  author: string;
  socialLinks: { text: string; href: string }[];
  socialImage: string;
  canonicalURL?: string;
}

export interface SiteContent {
  hero: HeroProps;
  education: EducationProps[];
  experience: ExperienceProps[];
  involvement: InvolvementProps[];
  skills: SkillsProps;
  projects: ProjectProps[];
  presentations: PresentationProps[];
  about: AboutProps;
}

export interface HeroProps {
  name: string;
  specialty: string;
  summary: string;
  email: string;
}

export interface EducationProps {
  institution: string;
  degree: string;
  track?: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  honors?: string;
}

export interface ExperienceProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  summary: string | string[];
}

export interface InvolvementProps {
  organization: string;
  role: string;
  startDate: string;
  endDate: string;
  summary: string[];
}

export interface SkillsProps {
  languages: string[];
  software: string[];
  libraries: string[];
}

export interface ProjectProps {
  name: string;
  summary: string;
  image: string;
  linkPreview?: string;
  linkSource?: string;
  timeline?: string;
}

export interface PresentationProps {
  title: string;
  authors: string;
  event: string;
  date: string;
  location: string;
}

export interface AboutProps {
  description: string;
  image: string;
}

export interface HeaderProps {
  siteLogo: string;
  navLinks: { text: string; href: string }[];
}
