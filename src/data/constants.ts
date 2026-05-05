export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface SkillCategory {
  title: string;
  color: 'cyan' | 'violet' | 'green' | 'orange' | 'pink';
  skills: Skill[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  highlights: string[];
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface TimelineEntry {
  id: number;
  role: string;
  company: string;
  period: string;
  location: string;
  type: 'work' | 'education' | 'training';
  description: string[];
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

export const SKILLS: SkillCategory[] = [
  {
    title: 'Languages',
    color: 'cyan',
    skills: [
      { name: 'JavaScript', level: 85, icon: 'JS' },
      { name: 'TypeScript', level: 75, icon: 'TS' },
      { name: 'HTML5', level: 95, icon: 'HT' },
      { name: 'CSS3', level: 90, icon: 'CS' },
    ],
  },
  {
    title: 'Frontend',
    color: 'violet',
    skills: [
      { name: 'React', level: 85, icon: 'Re' },
      { name: 'Tailwind CSS', level: 88, icon: 'Tw' },
      { name: 'Redux', level: 70, icon: 'Rx' },
      { name: 'Vite', level: 80, icon: 'Vt' },
    ],
  },
  {
    title: 'Backend',
    color: 'green',
    skills: [
      { name: 'Node.js', level: 82, icon: 'Nd' },
      { name: 'Express.js', level: 80, icon: 'Ex' },
      { name: 'REST APIs', level: 85, icon: 'AP' },
      { name: 'JWT Auth', level: 78, icon: 'JW' },
    ],
  },
  {
    title: 'Database',
    color: 'orange',
    skills: [
      { name: 'MongoDB', level: 80, icon: 'Mg' },
      { name: 'Mongoose', level: 78, icon: 'Mo' },
      { name: 'Firebase', level: 65, icon: 'Fb' },
    ],
  },
  {
    title: 'Tools & DevOps',
    color: 'pink',
    skills: [
      { name: 'Git & GitHub', level: 88, icon: 'Gi' },
      { name: 'Postman', level: 85, icon: 'Pm' },
      { name: 'VS Code', level: 95, icon: 'VS' },
      { name: 'Linux CLI', level: 72, icon: 'Lx' },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Grocery E-Commerce Platform',
    description:
      'A full-featured grocery e-commerce platform with complete user authentication, product management, cart system, and order processing. Built from scratch with a focus on performance and scalability.',
    highlights: [
      'JWT-based authentication & role-based access control',
      '15+ REST API endpoints for products, cart, orders, and users',
      'Admin dashboard with inventory management',
      'Full deployment pipeline on cloud infrastructure',
      'Responsive mobile-first UI with smooth UX flows',
    ],
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB'],
    liveUrl: 'https://rahina.online',
    githubUrl: 'https://github.com/rahinaummer',
    featured: true,
  },
  {
    id: 2,
    title: 'MERN Stack Mini Projects',
    description:
      'A collection of full-stack projects built during intensive MERN training at Brototype, covering real-world patterns: state management, API design, middleware composition, and Git workflows.',
    highlights: [
      'React hooks: useState, useEffect, useContext, custom hooks',
      'Express middleware chains for auth, logging, and error handling',
      'MongoDB aggregation pipelines for analytics',
      'Structured Git branching and PR workflows',
      'Component-driven architecture with reusable patterns',
    ],
    stack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT', 'Tailwind CSS'],
    githubUrl: 'https://github.com/rahinaummer',
    featured: true,
  },
];

export const TIMELINE: TimelineEntry[] = [
  {
    id: 1,
    role: 'Full Stack Developer Trainee',
    company: 'Brototype',
    period: 'Mar 2025 – Present',
    location: 'Kerala, India',
    type: 'training',
    description: [
      'Intensive full-stack MERN training with project-based curriculum',
      'Built production-ready applications with real-world architecture',
      'Mastered React hooks, Express middleware, and MongoDB aggregations',
      'Collaborated on Git-driven workflows with code review practices',
    ],
  },
  {
    id: 2,
    role: 'Radiology Technician',
    company: 'Hamad Medical Corporation',
    period: '2015 – 2024',
    location: 'Doha, Qatar',
    type: 'work',
    description: [
      'Operated advanced diagnostic imaging systems in high-volume trauma center',
      'Coordinated with multidisciplinary teams in critical care environments',
      'Applied technical precision and systematic problem-solving under pressure',
      'Developed strong analytical skills translatable to software engineering',
    ],
  },
  {
    id: 3,
    role: 'Student Services Assistant',
    company: 'College of the North Atlantic – Qatar (CNA-Q)',
    period: '2014',
    location: 'Doha, Qatar',
    type: 'work',
    description: [
      'Provided administrative support in a multicultural academic environment',
      'Managed student records and coordinated departmental communications',
      'Developed organizational and interpersonal skills in a professional setting',
    ],
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'GitHub',
    url: 'https://github.com/rahinaummer',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/rahinaummer',
    icon: 'linkedin',
  },
  {
    label: 'Live Site',
    url: 'https://rahina.online',
    icon: 'globe',
  },
];

export const TYPING_STRINGS = [
  'Full Stack Developer.',
  'MERN Stack Engineer.',
  'Problem Solver.',
  'UI Craftsperson.',
];

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];
