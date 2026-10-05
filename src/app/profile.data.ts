// Keep public profile copy here. Add accomplishments only when they can be verified.
export const profile = {
  name: 'Rakesh Kumar Kuna',
  role: 'Software Engineer',
  email: 'kunarakeshkumar@gmail.com',
  github: 'https://github.com/RakeshKumarKuna',
  linkedIn: 'https://www.linkedin.com/in/rakesh-kumar-kuna-4b1a6a1b2/',
  company: 'Infor',
  project: 'Infor ION',
  since: 'April 2025',
} as const;

export const capabilities = [
  {
    id: 'ai',
    number: '01',
    title: 'Intelligence, engineered.',
    label: 'AI & ML engineering',
    description:
      'Building intelligent applications with Python, machine learning, and LLMs. Connecting models, retrieval, and AI agents to real product experiences.',
    skills: [
      'Python',
      'Machine learning',
      'LLMs',
      'RAG',
      'AI agents',
      'Prompt engineering',
    ],
    note: 'Agentic coding with Kiro & Claude Code.',
    diagramLabel: 'AI / ML ENGINEERING',
    diagramTitle: 'Intelligence, built into the stack.',
    diagramDescription:
      'Machine learning, LLM applications, and AI agents connected to full-stack software.',
  },
  {
    id: 'backend',
    number: '02',
    title: 'Behind the interface.',
    label: 'Backend engineering',
    description:
      'Java at the core. APIs, application logic, and data layers that bring a product together.',
    skills: [
      'Java',
      'Spring Boot',
      'REST APIs',
      'Hibernate / JPA',
      'SQL',
      'MySQL',
      'PostgreSQL',
    ],
    note: 'From a request to a reliable response.',
    diagramLabel: 'JAVA / SPRING BOOT',
    diagramTitle: 'Built on a solid foundation.',
    diagramDescription: 'Application logic, REST APIs, and connected data.',
  },
  {
    id: 'frontend',
    number: '03',
    title: 'Made for people.',
    label: 'Frontend development',
    description:
      'Turning application logic into clear, responsive experiences with Angular and TypeScript.',
    skills: [
      'Angular',
      'TypeScript',
      'JavaScript',
      'HTML & CSS',
      'Responsive UI',
      'React',
    ],
    note: 'The details make the experience.',
    diagramLabel: 'ANGULAR / TYPESCRIPT',
    diagramTitle: 'Complexity, made intuitive.',
    diagramDescription:
      'Thoughtful interfaces, reusable components, and responsive layouts.',
  },
] as const;
