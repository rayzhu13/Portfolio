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
      title: 'Gather',
      description: 'A web app that helps people decide where to eat, solo or in groups. It merges everyone’s preferences into one Google Places search, then uses Claude to rank the results with distance scoring and explain its top picks. Designed, built, and deployed solo.',
      tags: ['JavaScript', 'Claude API', 'Google Places API', 'Vercel Serverless'],
      link: 'https://gather-app.ca',
    },
    {
      title: 'Hoopdle',
      description: 'A weekly NBA guessing game for basketball fans, with five puzzle types across lineup and grid modes. Answers stay server-side behind Supabase Row Level Security and API-route validation, and Vercel Cron publishes pre-written puzzles on schedule. Designed, built, and deployed solo.',
      tags: ['Next.js', 'TypeScript', 'Supabase', 'Postgres', 'Vercel Cron'],
      link: 'https://hoopdle.ca',
    },
    {
      title: 'ServeBot',
      description: 'A Discord bot for UW SERVE, the 600+ member volleyball club I run, that turns casual chat assignments into tracked tasks with scheduled reminders. Claude pulls out the assignee, task, and exact due date from plain-English messages, and async Python stores them in Postgres. Live in production; designed, built, and deployed solo.',
      tags: ['Python', 'discord.py', 'FastAPI', 'PostgreSQL', 'Claude API'],
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
