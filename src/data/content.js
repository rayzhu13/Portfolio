export const content = {
  name: 'Ray Zhu',
  title: 'Software Engineer',

  social: {
    github: 'https://github.com/your-username',
    linkedin: 'https://linkedin.com/in/your-username',
    email: 'ray.zhu130@gmail.com',
    resumeUrl: '/resume.pdf',
  },

  about: {
    heading: 'About',
    paragraphs: [
      "I'm Ray, a Mathematics student at the University of Waterloo with an interest in software engineering, data, and building things that people actually find useful. Outside of work, I'm passionate about volleyball and try to play as often as I can.",
    ],
    skills: [
      'JavaScript',
      'TypeScript',
      'React',
      'Node.js',
      'Python',
      'SQL',
    ],
  },

  projects: [
    {
      title: 'Project One',
      description: 'A short description of this project — what it does and the problem it solves.',
      tags: ['React', 'Node.js'],
      link: '#',
    },
    {
      title: 'Project Two',
      description: 'A short description of this project — what it does and the problem it solves.',
      tags: ['Python', 'Machine Learning'],
      link: '#',
    },
    {
      title: 'Project Three',
      description: 'A short description of this project — what it does and the problem it solves.',
      tags: ['TypeScript', 'Next.js'],
      link: '#',
    },
  ],

  experience: [
    {
      role: 'AI Deployment Engineer',
      company: 'Magical',
      dates: 'May 2026 — Present',
      bullets: [
        'Built and deployed AI-powered automation workflows for real-world customer use cases at Magical, an AI company based in San Francisco.',
        'Worked with AI agents, browser automation, APIs, webhooks, queues, and event-driven workflows to turn customer processes into reliable automated systems.',
        'Handled data extraction, document and PDF processing, structured output mapping, and submission of data into external systems.',
        'Debugged and improved existing automations, tested agent behavior, investigated regressions, and made workflows more reliable in production.',
      ],
    },
  ],
}

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]
