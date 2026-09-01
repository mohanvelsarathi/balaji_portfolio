// ============================================================
// Balaji S Portfolio — Data Layer
// Single source of truth for all portfolio content
// Sourced strictly from the resume
// ============================================================

export const profile = {
  name: 'Balaji S',
  initials: 'BS',
  headline: 'Java Backend Developer',
  eyebrow: 'JAVA BACKEND',
  location: 'Vellore, Tamil Nadu',
  email: 'balajisrinivasan360@gmail.com',
  phone: '+91 8489864026',
  githubProfile: 'https://github.com/balajisrinivasan360-glitch',
  resumeUrl: '/Balaji-S-Java-Developer-Resume.pdf',
  resumeFilename: 'Balaji-S-Java-Developer-Resume.pdf',
  summary:
    'Java Full Stack Developer fresher with hands-on project experience in Java, Spring Boot, REST APIs, and MySQL. Strong foundation in object-oriented programming, database management, and backend development. Built an Employee Management System using Spring Boot, MySQL, and RESTful APIs. Eager to contribute to a software development team and grow as a Java Backend / Full Stack Developer.',
  heroCopy:
    'Building reliable backend systems with Java and Spring Boot. Experienced in RESTful API design, MySQL database management, and layered backend architecture through hands-on project work.',
} as const;

// ============================================================
// SKILLS — sourced directly from resume
// ============================================================
export interface SkillCategory {
  id: string;
  category: string;
  description: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    id: 'java-core',
    category: 'Java Core',
    description: 'Core Java concepts for building strong backend logic.',
    skills: ['Java', 'OOPS', 'Collections', 'Exception Handling', 'Servlets'],
  },
  {
    id: 'spring',
    category: 'Spring',
    description: 'Spring ecosystem for building robust and secure applications.',
    skills: ['Spring', 'Spring Boot', 'Spring MVC', 'Spring Security'],
  },
  {
    id: 'api-dev',
    category: 'API Development',
    description: 'Design and implement RESTful services and secure APIs.',
    skills: ['REST APIs', 'RESTful Web Services', 'CRUD Operations', 'Authentication', 'Authorization', 'OTP Validation'],
  },
  {
    id: 'database',
    category: 'Database',
    description: 'Work with relational data and ensure persistence with efficiency.',
    skills: ['MySQL', 'SQL', 'JDBC', 'Hibernate'],
  },
  {
    id: 'architecture-tools',
    category: 'Architecture & Tools',
    description: 'Structure, version, build and test with the right tools.',
    skills: ['MVC', 'Layered Architecture', 'Git', 'GitHub', 'Maven', 'Postman'],
  },
];

// ============================================================
// PROJECTS — sourced directly from resume
// ============================================================
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  githubUrl: string;
}

export const projects: Project[] = [
  {
    id: 'ems',
    title: 'Employee Management System',
    description:
      'A Spring Boot–based Employee Management System to manage employee information through RESTful APIs. Designed with a layered backend architecture and MySQL for persistent data storage.',
    technologies: ['Java', 'Spring Boot', 'MySQL', 'REST API'],
    highlights: [
      'RESTful CRUD operations for employee management via Spring MVC',
      'Controller / Service / Repository layered backend architecture',
      'Spring Security authentication and authorization for secure user access',
      'OTP validation with centralized global exception handling',
      'API testing with Postman and database management with MySQL Workbench',
    ],
    githubUrl: 'https://github.com/balajisrinivasan360-glitch/ems',
  },
];

// ============================================================
// EXPERIENCE — sourced directly from resume
// ============================================================
export interface Experience {
  id: string;
  organization: string;
  role: string;
  startDate: string;
  endDate: string;
  location: string;
  responsibilities: string[];
  tools: string[];
}

export const experience: Experience[] = [
  {
    id: 'strydo',
    organization: 'STRYDO Technologies Pvt. Ltd.',
    role: 'UI/UX Designer Intern',
    startDate: 'Jul 2025',
    endDate: 'Aug 2025',
    location: 'Vellore',
    responsibilities: [
      'Applied UI/UX design principles to create intuitive and user-friendly interface designs',
      'Developed wireframes, user flows, prototypes, and mockups',
      'Collaborated with the design team throughout the product design process',
    ],
    tools: ['Figma', 'Adobe Photoshop', 'ChatGPT', 'Gemini'],
  },
];

// ============================================================
// EDUCATION — sourced directly from resume
// ============================================================
export interface Education {
  id: string;
  institution: string;
  qualification: string;
  startYear: number;
  endYear: number;
  score: string;
  scoreLabel: string;
}

export const education: Education[] = [
  {
    id: 'be-cse',
    institution: "Ganadipathy Tulsi's Jain Engineering College",
    qualification: 'B.E. Computer Science and Engineering',
    startYear: 2023,
    endYear: 2026,
    score: '8.0 / 10',
    scoreLabel: 'CGPA',
  },
  {
    id: 'diploma-mech',
    institution: 'Guru Raagavindra Polytechnic College',
    qualification: 'Diploma in Mechanical Engineering',
    startYear: 2015,
    endYear: 2018,
    score: '83%',
    scoreLabel: 'Percentage',
  },
];

// ============================================================
// CERTIFICATIONS — sourced directly from resume
// ============================================================
export interface Certification {
  id: string;
  title: string;
  issuer: string;
  mode: string;
}

export const certifications: Certification[] = [
  {
    id: 'uiux-intern',
    title: 'UI/UX Designing Internship',
    issuer: 'STRYDO Technologies Pvt. Ltd.',
    mode: 'Offline',
  },
  {
    id: 'cloud-da',
    title: 'Cloud Computing and Data Analytics',
    issuer: 'Naan Mudhalvan',
    mode: 'Online',
  },
  {
    id: 'java-fullstack',
    title: 'Java Full Stack Developer',
    issuer: 'JSpiders Institute',
    mode: 'Offline',
  },
];

// ============================================================
// ABOUT — evidence blocks (not proficiency scores)
// ============================================================
export const aboutBlocks = [
  { id: 'java', label: 'Java', description: 'Core & Advanced Java' },
  { id: 'spring-boot', label: 'Spring Boot', description: 'Backend Framework' },
  { id: 'rest-apis', label: 'REST APIs', description: 'API Design & Testing' },
  { id: 'mysql', label: 'MySQL', description: 'Database Management' },
] as const;
