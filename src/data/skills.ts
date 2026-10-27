/**
 * Inventory metadata for the skills section.
 *
 * `short` is a factual, one-line description of what the technology is.
 * `usage` is only filled in where the portfolio content already supports it
 * (resume entries, projects, certifications or this site itself) — there are
 * deliberately no proficiency numbers or invented claims here.
 */
export interface SkillMeta {
  short: string;
  usage?: string;
}

export const skillMeta: Record<string, SkillMeta> = {
  Python: {
    short: 'General-purpose language for scripting and automation',
    usage: 'Studied through the Complete Python Bootcamp certification',
  },
  JavaScript: {
    short: 'The language that powers interactivity on the web',
    usage: 'Responsive pages built during my Full Stack internship',
  },
  TypeScript: {
    short: 'JavaScript with static types for safer refactors',
    usage: 'This portfolio and BlockBoard are written in TypeScript',
  },
  C: { short: 'Low-level language for systems and memory fundamentals' },
  Java: { short: 'Object-oriented language for cross-platform programs' },
  'React.js': {
    short: 'Component-based library for building user interfaces',
    usage: 'Used to build BlockBoard, Interlix AI and this portfolio',
  },
  HTML5: {
    short: 'Semantic structure for modern web documents',
    usage: 'Responsive pages built during my Full Stack internship',
  },
  CSS3: {
    short: 'Styling and layout for responsive interfaces',
    usage: 'Responsive pages built during my Full Stack internship',
  },
  'Tailwind CSS': {
    short: 'Utility-first CSS framework for fast, consistent UI',
    usage: 'Styles this portfolio and Huddle',
  },
  'Framer Motion': {
    short: 'Animation library for React interfaces',
    usage: "Powers this portfolio's scroll and hover motion",
  },
  Vite: {
    short: 'Fast frontend build tool and dev server',
    usage: 'Build tool for this portfolio and BlockBoard',
  },
  'Node.js': {
    short: 'JavaScript runtime for server-side applications',
    usage: 'Backend integration in my internship and Interlix AI',
  },
  'Express.js': {
    short: 'Minimal Node.js framework for APIs and routing',
    usage: 'Backend for Interlix AI and BlockBoard',
  },
  'REST APIs': {
    short: 'HTTP interfaces that connect clients to services',
    usage: 'REST write path in BlockBoard and internship API work',
  },
  WebSockets: {
    short: 'Full-duplex channels for real-time updates',
    usage: 'Real-time sync in BlockBoard and Huddle',
  },
  PostgreSQL: {
    short: 'Relational database for structured data',
    usage: 'Database for BlockBoard via Prisma',
  },
  Prisma: {
    short: 'Type-safe ORM for Node.js and TypeScript',
    usage: 'Data layer for BlockBoard',
  },
  MongoDB: {
    short: 'Document database for flexible JSON-like data',
    usage: 'Data layer for Interlix AI',
  },
  SQLite: { short: 'Lightweight file-based relational database' },
  LangChain: {
    short: 'Framework for building LLM-powered applications',
    usage: 'Resume analysis in Interlix AI',
  },
  'Gemini API': {
    short: 'Google model API for AI-powered features',
    usage: 'AI generation in Interlix AI',
  },
  SQL: { short: 'Query language for relational databases' },
  'Manual Testing': {
    short: 'Verifying features by hand across platforms',
    usage: 'Current project support and QA intern work',
  },
  'Unit Testing': {
    short: 'Automated checks for isolated code units',
    usage: 'Current project support and QA intern work',
  },
  'Bug Fixing': {
    short: 'Reproducing, diagnosing and resolving defects',
    usage: 'Current project support and QA intern work',
  },
  'Feature Planning': {
    short: 'Defining roadmaps and scoping product features',
    usage: 'Current project support and QA intern work',
  },
  Git: {
    short: 'Distributed version control for tracking changes',
    usage: 'Version control across my projects and this portfolio',
  },
  GitHub: {
    short: 'Hosting and collaboration for Git repositories',
    usage: 'Project code and collaboration live on GitHub',
  },
  'VS Code': { short: 'Editor used for day-to-day development' },
  Postman: { short: 'Client for testing and documenting HTTP APIs' },
  Linux: { short: 'Unix-like operating system and shell environment' },
  'MS Office': {
    short: 'Office suite for documents, spreadsheets and presentations',
  },
  DBMS: { short: 'Storing, modelling and querying structured data' },
  'Operating Systems': { short: 'Processes, memory and scheduling fundamentals' },
  Networking: { short: 'Protocols, addressing and how data moves between hosts' },
  OOP: { short: 'Object-oriented design principles and patterns' },
  DSA: { short: 'Data structures and algorithms' },
  Cybersecurity: {
    short: 'Threats, hardening and secure engineering practices',
    usage: 'Google Cybersecurity and Cisco certificates',
  },
};

/** Skills marked as in-progress in the resume data, e.g. "Docker (Learning)". */
const learningPattern = /\((basics|learning)\)/i;

export function getSkillMeta(skill: string): SkillMeta & { learning: boolean } {
  const meta = skillMeta[skill] ?? { short: 'Technology used in my work' };
  return { ...meta, learning: learningPattern.test(skill) };
}

/**
 * Small deterministic accent block used for skill slots and technology chips,
 * so the same technology always gets the same colour across the site.
 */
const techBlockColors = ['bg-accent', 'bg-accent-2', 'bg-gold', 'bg-block-dirt'];

export function techBlockColor(tech: string): string {
  let hash = 0;
  for (let i = 0; i < tech.length; i++) {
    hash = (hash * 31 + tech.charCodeAt(i)) % 9973;
  }
  return techBlockColors[hash % techBlockColors.length];
}
