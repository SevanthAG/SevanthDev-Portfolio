import type { ResumeData } from '../types';

export const resumeData: ResumeData = {
  name: 'Sevanth A G',
  title: 'Full Stack Developer',
  summary:
    'BCA undergraduate (Class of 2026) with a strong academic record and hands-on experience in full-stack development and AI-driven applications.',
  about:
    "I'm a passionate developer who loves building things that live on the internet. My journey into software development started with curiosity about how websites work, and has evolved into a deep passion for creating scalable, performant, and user-friendly applications. With a CGPA of 9.06, I combine academic excellence with practical, hands-on experience in modern web technologies.",
  careerObjective:
    'To contribute technical expertise and adaptability to a fast-paced development team, leveraging my skills in full-stack development, AI integration, and cybersecurity to build impactful solutions.',
  learningJourney:
    'Currently deepening my knowledge in system design, advanced backend architectures, and exploring the intersection of AI and web applications.',
  email: 'mrsevanthag@gmail.com',
  phone: '+91 9964923819',
  location: 'Mangaluru, India',
  socials: {
    github: 'https://github.com/SevanthRao',
    linkedin: 'https://www.linkedin.com/in/sevanth-a-g-57aa472b0/',
    leetcode: 'https://leetcode.com/u/zvCr4RFMjz/',
    email: 'mrsevanthag@gmail.com',
  },
  education: [
    {
      institution: "Alva's Degree College, Moodbidre",
      degree: 'Bachelor of Computer Applications (BCA)',
      year: '2026',
      score: 'CGPA: 9.06',
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
      skills: ['Python', 'JavaScript', 'TypeScript', 'C', 'GoLang (Basics)', 'Java'],
    },
    {
      title: 'Frontend',
      icon: 'Layout',
      skills: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      title: 'Backend',
      icon: 'Server',
      skills: ['Node.js', 'Express.js', 'Django (Basics)', 'REST APIs'],
    },
    {
      title: 'Database',
      icon: 'Database',
      skills: ['MongoDB', 'DBMS', 'SQL'],
    },
    {
      title: 'Tools & Platforms',
      icon: 'Wrench',
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Docker (Learning)'],
    },
    {
      title: 'Core CS & Operating Systems',
      icon: 'Cpu',
      skills: ['Linux (Ubuntu)', 'Operating Systems', 'Networking', 'Cybersecurity'],
    },
  ],
  experience: [
    {
      title: 'Full Stack Web Development Intern',
      company: 'Zephyr Technologies & Solutions Pvt. Ltd.',
      period: 'Jul 2025 (30 Days)',
      responsibilities: [
        'Developed responsive web pages using HTML, CSS, and JavaScript, ensuring cross-device compatibility',
        'Implemented DOM manipulation to enhance user interactivity and dynamic content updates',
        'Assisted in backend integration using Node.js and Express.js, gaining exposure to API development and database connectivity',
      ],
    },
  ],
  projects: [
    {
      title: 'Interlix - AI',
      description:
        'Session-Driven AI Interview Preparation Platform',
      longDescription:
        'A centralized AI-powered platform integrating resume analysis, aptitude tests, and technical evaluation. Implements a session-driven architecture to ensure data consistency and personalized outputs. Generates match scores, skill gaps, and interview preparation content dynamically.',
      techStack: [
        'React.js',
        'Node.js',
        'Express.js',
        'MongoDB',
        'LangChain',
        'Gemini AI',
      ],
      image: '/projects/interlix.png',
      github: 'https://github.com/SevanthRao',
      status: 'completed',
    },
  ],
  certifications: [
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
      organization: 'Alva\'s Degree College (2024–2025)',
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
