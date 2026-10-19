import {
  Code,
  Layers,
  Atom,
  Database,
  Cloud,
  Shield,
  Palette,
  TestTube,
  Bot,
  Settings,
  Smartphone,
  Globe,
  Users,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
} from "lucide-react";
import {
  SiJavascript,
  SiTypescript,
  SiAngular,
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiNodedotjs,
  SiReactivex,
  SiNgrx,
  SiRedux,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiDocker,
  SiVercel,
  SiGithubactions,
  SiAuth0,
  SiJsonwebtokens,
  SiRazorpay,
  SiTailwindcss,
  SiBootstrap,
  SiMui,
  SiShadcnui,
  SiHtml5,
  SiCss,
  SiSass,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import type {
  NavLink,
  SkillCategory,
  SkillLogo,
  Highlight,
  ExperienceItem,
  ProjectItem,
  EducationItem,
  ContactInfo,
} from "@/types/portfolio";

export const profile = {
  firstName: "JINU",
  lastName: "KRISHNAN",
  fullName: "Jinu Krishnan",
  initials: "JK",
  title: "SENIOR FRONTEND DEVELOPER",
  taglines: ["T E A M   L E A D", "A N G U L A R   &   R E A C T", "M E R N  /  M E A N   S T A C K"],
  resumeUrl: "/resume.pdf",
};

export const navLinks: NavLink[] = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const aboutStats: string[] = [
  "🚀 6+ Years Experience",
  "👥 Team Lead & Mentor",
  "💳 US Fintech Platform",
  "🤖 AI-Assisted Development",
  "☁️ Cloud Deployment",
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages & Frameworks",
    icon: Code,
    skills: [
      { name: "JavaScript (ES6+)", icon: "⚡" },
      { name: "TypeScript", icon: "📘" },
      { name: "Angular", icon: "🅰️" },
      { name: "React.js", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "Express.js", icon: "🚀" },
      { name: "Node.js", icon: "🟢" },
    ],
    color: "text-blue-600 dark:text-blue-400",
  },
  {
    title: "Angular Ecosystem",
    icon: Layers,
    skills: [
      { name: "RxJS", icon: "🔀" },
      { name: "NgRx", icon: "🗄️" },
      { name: "Angular Forms", icon: "📝" },
      { name: "Angular Router", icon: "🧭" },
      { name: "Angular Material", icon: "🎛️" },
      { name: "Lazy Loading", icon: "⏳" },
    ],
    color: "text-red-600 dark:text-red-400",
  },
  {
    title: "React Ecosystem",
    icon: Atom,
    skills: [
      { name: "Redux Toolkit", icon: "🔄" },
      { name: "Zustand", icon: "🐻" },
      { name: "React Hooks", icon: "🪝" },
      { name: "Context API", icon: "🌐" },
    ],
    color: "text-cyan-600 dark:text-cyan-400",
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "MongoDB", icon: "🍃" },
      { name: "MySQL", icon: "🐬" },
      { name: "PostgreSQL", icon: "🐘" },
    ],
    color: "text-green-600 dark:text-green-400",
  },
  {
    title: "Dev Tools & Platforms",
    icon: Cloud,
    skills: [
      { name: "Git", icon: "📚" },
      { name: "GitHub", icon: "🐙" },
      { name: "Docker", icon: "🐳" },
      { name: "AWS EC2", icon: "☁️" },
      { name: "Vercel", icon: "▲" },
      { name: "CI/CD Pipelines", icon: "🔁" },
    ],
    color: "text-purple-600 dark:text-purple-400",
  },
  {
    title: "Authentication & Payments",
    icon: Shield,
    skills: [
      { name: "Auth0", icon: "🔐" },
      { name: "JWT", icon: "🎫" },
      { name: "Razorpay", icon: "💳" },
    ],
    color: "text-orange-600 dark:text-orange-400",
  },
  {
    title: "Frontend & UI",
    icon: Palette,
    skills: [
      { name: "Tailwind CSS", icon: "🎨" },
      { name: "Bootstrap", icon: "🅱️" },
      { name: "Material UI", icon: "📱" },
      { name: "Shadcn", icon: "✨" },
      { name: "ReactBits", icon: "🧩" },
      { name: "HTML5", icon: "📄" },
      { name: "CSS3", icon: "🖌️" },
      { name: "SCSS", icon: "💅" },
    ],
    color: "text-pink-600 dark:text-pink-400",
  },
  {
    title: "Testing",
    icon: TestTube,
    skills: [
      { name: "Jasmine", icon: "🧪" },
      { name: "Karma", icon: "✅" },
    ],
    color: "text-emerald-600 dark:text-emerald-400",
  },
  {
    title: "AI-Assisted Development",
    icon: Bot,
    skills: [
      { name: "Claude", icon: "🤖" },
      { name: "ChatGPT", icon: "💬" },
      { name: "Cursor", icon: "🖱️" },
      { name: "Manus", icon: "🦾" },
      { name: "PromptGenie", icon: "🧞" },
    ],
    color: "text-indigo-600 dark:text-indigo-400",
  },
  {
    title: "Methodologies",
    icon: Settings,
    skills: [
      { name: "Agile / Scrum", icon: "🏃‍♂️" },
      { name: "RESTful API Design", icon: "🔗" },
      { name: "GraphQL", icon: "◈" },
      { name: "Code Review", icon: "🔍" },
      { name: "Team Leadership", icon: "👥" },
    ],
    color: "text-amber-600 dark:text-yellow-400",
  },
];

/** Two rows for the scrolling skills marquee above the footer */
export const skillLogoRows: SkillLogo[][] = [
  [
    { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
    { name: "Angular", icon: SiAngular, color: "#dd0031" },
    { name: "React", icon: SiReact, color: "#61dafb" },
    { name: "Next.js", icon: SiNextdotjs, color: "#a1a1aa" },
    { name: "Node.js", icon: SiNodedotjs, color: "#5fa04e" },
    { name: "Express.js", icon: SiExpress, color: "#a1a1aa" },
    { name: "RxJS", icon: SiReactivex, color: "#b7178c" },
    { name: "NgRx", icon: SiNgrx, color: "#ba2bd2" },
    { name: "Redux Toolkit", icon: SiRedux, color: "#764abc" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8" },
    { name: "Material UI", icon: SiMui, color: "#007fff" },
    { name: "Shadcn", icon: SiShadcnui, color: "#a1a1aa" },
    { name: "Bootstrap", icon: SiBootstrap, color: "#7952b3" },
    { name: "HTML5", icon: SiHtml5, color: "#e34f26" },
    { name: "CSS3", icon: SiCss, color: "#1572b6" },
    { name: "SCSS", icon: SiSass, color: "#cc6699" },
  ],
  [
    { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
    { name: "MySQL", icon: SiMysql, color: "#4479a1" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169e1" },
    { name: "Git", icon: SiGit, color: "#f05032" },
    { name: "GitHub", icon: SiGithub, color: "#a1a1aa" },
    { name: "Docker", icon: SiDocker, color: "#2496ed" },
    { name: "AWS EC2", icon: FaAws, color: "#ff9900" },
    { name: "Vercel", icon: SiVercel, color: "#a1a1aa" },
    { name: "CI/CD", icon: SiGithubactions, color: "#2088ff" },
    { name: "Auth0", icon: SiAuth0, color: "#eb5424" },
    { name: "JWT", icon: SiJsonwebtokens, color: "#d63aff" },
    { name: "Razorpay", icon: SiRazorpay, color: "#3395ff" },
  ],
];

export const skillHighlights: Highlight[] = [
  { icon: Globe, title: "Full Stack", description: "MERN & MEAN stack expertise" },
  { icon: Users, title: "Team Leadership", description: "Sprint planning, code review & mentoring" },
  { icon: Smartphone, title: "Responsive Design", description: "Mobile-first, scalable frontends" },
];

export const experiences: ExperienceItem[] = [
  {
    company: "ZILMONEY",
    position: "SENIOR FRONTEND DEVELOPER CUM TEAM LEAD",
    duration: "DECEMBER 2025 – Present",
    location: "Full-time",
    responsibilities: [
      "Handpicked by leadership to lead the complete frontend rebuild of ZilMoney Version 2, a large-scale US fintech application, expanding the product suite to include credit card, virtual card, international payments, and business tools.",
      "Own frontend architecture and implementation in Angular, using RxJS, NgRx, and TypeScript to build high-performance, scalable modules for a live US-facing financial product.",
      "Led all frontend integration efforts — connecting Angular modules to backend microservices and third-party financial APIs — ensuring secure, seamless data flow across payment and banking features.",
      "Conduct structured code reviews for a team of frontend engineers, enforcing coding standards, Angular best practices, and financial-grade security requirements, resulting in significantly fewer production issues.",
      "Serve as Team Lead: planning sprints, assigning tasks, unblocking teammates, reviewing PRs, and mentoring junior developers to maintain velocity and code quality.",
      "Collaborate daily with backend engineers, QA, product managers, and UI/UX designers in an Agile/Scrum environment to ship features on schedule.",
      "Integrate AI-assisted development tools (Claude, ChatGPT, Cursor, Manus, PromptGenie) into daily workflow, accelerating feature development, debugging, and documentation.",
    ],
  },
  {
    company: "SYNNEFO SOLUTIONS",
    position: "MERN STACK DEVELOPER",
    duration: "APRIL 2023 – DECEMBER 2025",
    location: "Full-time",
    responsibilities: [
      "Built and deployed 10+ web applications using the MERN stack for clients across e-learning, SaaS, and CRM domains, delivering scalable, production-ready solutions.",
      "Integrated RESTful and GraphQL APIs, Razorpay payment gateway, JWT authentication, and Auth0 for secure, multi-role platforms used by hundreds of end users.",
      "Architected and developed dynamic, responsive frontends in React.js with Redux Toolkit and Tailwind CSS for multi-role portals (tenant, instructor, admin).",
      "Designed and optimized MongoDB schemas for high-read applications, improving query performance and data integrity.",
      "Deployed applications on AWS EC2 and Vercel, handling CI/CD pipelines, performance tuning, and production debugging.",
      "Mentored and onboarded 3+ junior developers and interns, running code review sessions and knowledge-sharing workshops to raise overall team output.",
      "Collaborated in Agile sprints with cross-functional teams across planning, development, QA, and deployment phases.",
    ],
  },
  {
    company: "SFO TECHNOLOGIES",
    position: "FRONTEND DEVELOPER",
    duration: "APRIL 2021 – FEBRUARY 2023",
    location: "Full-time",
    responsibilities: [
      "Designed and developed scalable web applications using JavaScript and React.js for the frontend, and Django for backend APIs.",
      "Built and consumed RESTful APIs, ensuring seamless integration between frontend and backend layers with a focus on performance and security.",
      "Collaborated with UI/UX designers and product managers to deliver user-centric, responsive interfaces for client projects.",
      "Wrote clean, reusable, and maintainable code; identified and resolved frontend bottlenecks and cross-browser compatibility issues.",
      "Maintained awareness of evolving JavaScript ecosystem trends (React, ES6+) and applied modern development practices.",
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    title: "ZilMoney Version 2 — US Fintech Platform (Live)",
    techStack: ["Angular", "RxJS", "NgRx", "TypeScript", "RESTful APIs", "Financial Integrations", "Agile"],
    description: [
      "Led frontend development of ZilMoney V2 from the ground up — a complete rebuild of a US-based fintech platform serving American businesses",
      "Delivered multi-product modules: credit card management, virtual card issuance, international payment processing, and business financial tools",
      "Drove all frontend-to-backend integration work, connecting Angular components with financial services APIs for secure, real-time data exchange",
      "Established frontend code review standards and practices, ensuring financial-grade code quality and regulatory compliance across the team",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Learning Management System (LMS)",
    techStack: ["MERN", "Auth0", "Razorpay", "Redux Toolkit", "Tailwind CSS"],
    description: [
      "Built a multi-role platform for tenants and instructors with secure Auth0 authentication and role-based access control",
      "Integrated Razorpay for online course payments, supporting end-to-end enrollment and payment workflows",
      "Designed responsive dashboards in React and Tailwind CSS for both instructor and student portals",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Customer Relationship Management (CRM)",
    techStack: ["MERN", "Redux Toolkit", "JWT", "Chart.js", "Tailwind CSS"],
    description: [
      "Developed a full-featured lead tracking system with automated status updates, pipeline views, and team analytics",
      "Implemented JWT-based authentication with real-time role-based access control for sales team workflows",
      "Visualized KPIs and sales performance metrics using Chart.js, giving sales managers actionable insights in a clean dashboard UI",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export const education: EducationItem[] = [
  {
    degree: "Diploma in Computer Engineering",
    institution: "MADIN POLYTECHNIC COLLEGE",
    location: "Malappuram",
    duration: "06/2014 - 03/2017",
    type: "Diploma",
  },
  {
    degree: "Vocational Higher Secondary Education (Computer Science)",
    institution: "SHMGVHSS Edavanna",
    location: "Malappuram",
    duration: "06/2012 - 03/2014",
    type: "Higher Secondary",
  },
];

export const learningTraits: string[] = ["Self-Learner", "Tech Enthusiast", "Problem Solver"];

export const contactInfo: ContactInfo[] = [
  {
    icon: Mail,
    label: "Email",
    value: "jinukrishnan.p@gmail.com",
    href: "mailto:jinukrishnan.p@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9567473317",
    href: "tel:+919567473317",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Malappuram, Kerala, India",
    href: "#",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "jinu krishnan",
    href: "https://www.linkedin.com/in/jinu-krishnan-1452b0134/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "jinukrishnan.p",
    href: "https://github.com/Jinukrishnan",
  },
];

export const emailConfig = {
  serviceId: "service_1ldzbdk",
  templateId: "template_c9ijnin",
  publicKey: "oM2V-yXRXjJDTmfAT",
};
