export const content = {
  name: 'Ray Zhu',
  title: 'Software Engineer',

  social: {
    github: 'https://github.com/your-username',
    linkedin: 'https://linkedin.com/in/your-username',
    email: 'your.email@example.com',
    resumeUrl: '/resume.pdf',
  },

  about: {
    heading: 'About',
    paragraphs: [
      "Replace this with your own bio — a couple of sentences on who you are, what kind of engineering you enjoy, and what you're working on right now.",
      'Add a second paragraph if you want to mention your background, interests outside of work, or what you\'re looking for next.',
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
      role: 'Software Engineer',
      company: 'Company Name',
      dates: '2024 — Present',
      bullets: [
        'Add a bullet point describing an accomplishment or responsibility.',
        'Add another bullet point here.',
      ],
    },
    {
      role: 'Software Engineer Intern',
      company: 'Company Name',
      dates: 'Summer 2023',
      bullets: [
        'Add a bullet point describing an accomplishment or responsibility.',
        'Add another bullet point here.',
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
