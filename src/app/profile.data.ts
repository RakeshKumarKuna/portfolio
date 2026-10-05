// Keep public profile copy here. Add accomplishments only when they can be verified.
export const profile = {
  name: 'Rakesh Kumar Kuna',
  role: 'Software Developer',
  email: 'kunarakeshkumar@gmail.com',
  github: 'https://github.com/RakeshKumarKuna',
  linkedIn: 'https://www.linkedin.com/in/rakesh-kumar-kuna-4b1a6a1b2/',
  company: 'Infor',
  project: 'Infor ION',
  since: 'April 2025',
} as const;

export const capabilities = [
  {
    id: 'backend',
    number: '01',
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
    number: '02',
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
  {
    id: 'ai',
    number: '03',
    title: 'A smarter way to build.',
    label: 'AI & agentic development',
    description:
      'Using Kiro and Claude Code in development, while exploring machine learning and agentic applications.',
    skills: ['Kiro', 'Claude Code', 'AI-assisted coding', 'Prompt engineering'],
    note: 'Exploring next: Python, ML, RAG & AI agents.',
    diagramLabel: 'AI / AGENTIC WORKFLOWS',
    diagramTitle: 'Curiosity meets capability.',
    diagramDescription:
      'AI-assisted development today. Exploring intelligent applications next.',
  },
] as const;
