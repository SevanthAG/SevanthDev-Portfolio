import type { ResumeData } from '../types';

export const resumeData: ResumeData = {
  name: 'Sevanth A G',
  title: 'Full Stack Developer',
  summary:
    'Full-stack developer and BCA graduate (CGPA 9.08) who builds real-time and AI-powered web applications with React, TypeScript, Node.js, Express, and PostgreSQL/MongoDB.',
  about:
    "I'm a full-stack developer who loves building real-time and AI-powered web applications. My journey started with curiosity about how websites work and has grown into hands-on work across React, TypeScript, Node.js, Express, PostgreSQL, and MongoDB — including WebSocket-based collaboration and LangChain + Gemini integrations. With a BCA CGPA of 9.08, I combine strong fundamentals with practical, project-driven experience.",
  careerObjective:
    'To contribute technical expertise and adaptability to a fast-paced development team, leveraging full-stack and AI skills to build impactful, real-time solutions while growing in backend engineering.',
  learningJourney:
    'Currently advancing through the Web Dev + DevOps bootcamp (100xDevs) while deepening knowledge in backend engineering and AI-driven software development.',
  email: 'mrsevanthag@gmail.com',
  phone: '+91 9964923819',
  location: 'Mangaluru, India',
  socials: {
    github: 'https://github.com/SevanthAG',
    linkedin: 'https://www.linkedin.com/in/sevanth-a-g-57aa472b0/',
    leetcode: 'https://leetcode.com/u/zvCr4RFMjz/',
    email: 'mrsevanthag@gmail.com',
  },
  education: [
    {
      institution: "Alva's Degree College, Moodbidre",
      degree: 'Bachelor of Computer Applications (BCA)',
      year: '2026',
      score: 'CGPA: 9.08',
    },
    {
      institution: 'EBAC – NMPUC Aranthodu, Sullia',
      degree: 'Higher Secondary (Class XII)',
      year: '2023',
      score: '85.67%',
    },
    {
      institution: 'NMPU Aranthodu, Sullia',
      degree: 'Secondary Education (Class X)',
      year: '2021',
      score: '64.96%',
    },
  ],
  skills: [
    {
      title: 'Programming & Scripting',
      icon: 'Code2',
      skills: ['Python', 'JavaScript', 'TypeScript', 'C', 'Java'],
    },
    {
      title: 'Frontend',
      icon: 'Layout',
      skills: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    },
    {
      title: 'Backend',
      icon: 'Server',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'WebSockets'],
    },
    {
      title: 'Database & AI',
      icon: 'Database',
      skills: ['PostgreSQL', 'Prisma', 'MongoDB', 'SQLite', 'LangChain', 'Gemini API', 'SQL'],
    },
    {
      title: 'Testing & Practice',
      icon: 'ClipboardCheck',
      skills: ['Manual Testing', 'Unit Testing', 'Bug Fixing', 'Feature Planning'],
    },
    {
      title: 'Tools & Platforms',
      icon: 'Wrench',
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Linux', 'MS Office'],
    },
    {
      title: 'Core CS',
      icon: 'Cpu',
      skills: ['DBMS', 'Operating Systems', 'Networking', 'OOP', 'DSA', 'Cybersecurity'],
    },
  ],
  experience: [
    {
      title: 'Guidance and Project Support Intern',
      company: 'Grudhra Solutions Pvt Ltd',
      period: 'Sep 2026 – Present',
      responsibilities: [
        'Review the product codebase to identify bugs, and fix selected issues in collaboration with teammates',
        'Perform manual testing and unit testing across multiple testing platforms to verify functionality before release',
        'Define the feature roadmap and project flow for a product in active development, deciding which features to build and what each should include',
        'Guide teammates and coordinate day-to-day work in a collaborative team environment',
      ],
    },
    {
      title: 'Full Stack Web Development Intern',
      company: 'Zephyr Technologies & Solutions Pvt. Ltd.',
      period: 'Jun 2025 (30 Days)',
      responsibilities: [
        'Developed responsive web pages using HTML, CSS, and JavaScript, ensuring cross-device compatibility',
        'Implemented DOM manipulation to enhance user interactivity and dynamic content updates',
        'Assisted in backend integration using Node.js and Express.js, gaining exposure to API development and database connectivity',
        'Built reusable UI components with React.js to streamline frontend development and improve maintainability',
      ],
    },
  ],
  projects: [
    {
      title: 'BlockBoard',
      description: 'Trello-style project management with real-time collaboration',
      longDescription:
        'A Trello-style collaboration app where users join organizations with role-based membership (Admin/Member) and manage boards, sections, and issues. Uses JWT authentication with bcrypt-hashed passwords, real-time sync through a raw WebSocket server where each board is a room, and a TypeScript Turborepo monorepo (React 19 + Vite frontend, Express 5 + Bun backend, shared Prisma package) deployed on Vercel.',
      techStack: ['React.js', 'Express.js', 'WebSockets', 'Prisma', 'PostgreSQL'],
      image: '/projects/blockboard.png',
      github: 'https://github.com/SevanthAG',
      status: 'completed',
    },
    {
      title: 'Interlix AI',
      description: 'Session-Driven AI Interview Preparation Platform',
      longDescription:
        'A full-stack interview preparation platform that analyzes a resume against a target job description and generates a match score, skill gaps, and interview prep content. Adds AI-generated aptitude and technical tests, an AI-refined PDF resume download via Puppeteer, cookie-based JWT authentication, PDF resume parsing, and session history so users can revisit past analyses.',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'LangChain', 'Gemini API'],
      image: '/projects/interlix.png',
      github: 'https://github.com/SevanthAG',
      status: 'completed',
    },
    {
      title: 'Huddle',
      description: 'Room-based real-time chat',
      longDescription:
        'A room-based real-time chat app on a Bun WebSocket server: users create a room, share its server-generated ID, and chat live. Uses a JSON message protocol with room-scoped broadcasting, join/leave notices, error handling, and automatic room cleanup. The frontend is deployed on Vercel, and the room persists in the URL so a page refresh keeps the session.',
      techStack: ['React.js', 'TypeScript', 'Bun', 'WebSockets', 'Tailwind CSS'],
      image: '/projects/huddle.png',
      github: 'https://github.com/SevanthAG',
      status: 'completed',
    },
  ],
  certifications: [
    {
      title: 'Web Dev + DevOps Bootcamp (In Progress)',
      issuer: '100xDevs',
      date: 'In Progress',
    },
    {
      title: 'Google Cybersecurity Professional Certificate',
      issuer: 'Coursera',
      date: 'Jul 2025',
    },
    {
      title: 'Introduction to Cybersecurity',
      issuer: 'Cisco',
      date: 'Aug 2024',
    },
    {
      title: 'The Complete Python Bootcamp: From Zero to Hero',
      issuer: 'Udemy',
      date: 'Feb 2024',
    },
  ],
  leadership: [
    {
      title: 'IT Manager Coordinator',
      organization: 'College IT Fest',
      description:
        'Coordinated technical events, managed event logistics, and facilitated communication across multiple teams to ensure seamless execution.',
    },
    {
      title: 'Core Committee Head',
      organization: 'Techotsav (College Technical Fest)',
      description:
        'Led the planning and execution of flagship technical fest; managed cross-functional teams and oversaw event operations end-to-end.',
    },
    {
      title: 'Farewell Coordinator',
      organization: "Alva's Degree College (2024–2025)",
      description:
        'Organized and executed the college farewell event, ensuring effective team coordination and timely delivery.',
    },
  ],
  achievements: [
    {
      title: 'Runner-Up',
      event: 'Prompt Engineering Competition at NITTE University',
      description:
        'Achieved second place by applying effective prompt design and problem-solving techniques in AI-based tasks.',
    },
    {
      title: 'Hackathon Participant (4+ Events)',
      event: 'Multiple Hackathons',
      description:
        'Participated in multiple hackathons, collaborating in teams to design and develop solutions under strict deadlines.',
    },
    {
      title: 'Intercollege Technical Fest Participant',
      event: 'Various Colleges',
      description:
        'Engaged in various intercollege technical events, enhancing technical exposure and competitive skills.',
    },
  ],
};
