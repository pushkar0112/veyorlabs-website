export interface NavItem {
  label: string;
  href: string;
}

export interface ExploringCard {
  id: string;
  title: string;
  description: string;
  badge: string;
  iconName: 'BookOpen' | 'Lightbulb' | 'Compass';
}

export interface FocusArea {
  title: string;
  description: string;
  iconName: 'Sparkles' | 'Users' | 'Sliders' | 'Cpu' | 'GraduationCap' | 'TrendingUp';
}

export interface SocialLink {
  name: string;
  url: string; // If empty string, will NOT be rendered to ensure no fabricated accounts
  iconName: 'Linkedin' | 'Github' | 'Twitter';
}

export const siteConfig = {
  name: 'VeyoraLabs',
  tagline: 'Building the Future of Education.',
  contactEmail: 'support@veyoralabs.net',
  domain: 'https://veyoralabs.net',
  statusBadge: 'Early-Stage Exploration',

  navItems: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Vision', href: '#vision' },
    { label: 'Contact', href: '#contact' },
  ] as NavItem[],

  hero: {
    badge: 'Education × Technology',
    heading: 'Building better ways to learn, grow, and prepare for tomorrow.',
    supportingText: 'VeyoraLabs is exploring technology-driven ideas that can make learning more engaging, accessible, and meaningful for the next generation.',
    additionalText: '',
    primaryCta: 'Explore VeyoraLabs',
    secondaryCta: "What's Coming",
  },

  educationFocus: {
    heading: "Where We're Exploring",
    subheading: 'We are exploring the intersection of education, technology, and human potential.',
    areas: [
      {
        title: 'Learning Experiences',
        description: 'Investigating dynamic, engaging environments that spark natural curiosity and deeper comprehension.',
        iconName: 'Sparkles',
      },
      {
        title: 'Accessibility',
        description: 'Evaluating paths to make high-quality educational materials open, inclusive, and friction-free for all learners.',
        iconName: 'Users',
      },
      {
        title: 'Personalized Learning',
        description: 'Researching adaptable approaches tailored to individual pacing, strengths, and unique learner trajectories.',
        iconName: 'Sliders',
      },
      {
        title: 'Educational Technology',
        description: 'Probing modern technical foundations to build intuitive, reliable, and scalable educational tools.',
        iconName: 'Cpu',
      },
      {
        title: 'Student Development',
        description: 'Cultivating holistic growth, self-guided mastery, and critical thinking across developmental stages.',
        iconName: 'GraduationCap',
      },
      {
        title: 'Future-Ready Skills',
        description: 'Orienting methodologies toward the problem-solving and collaboration skills demanded in a rapidly evolving world.',
        iconName: 'TrendingUp',
      },
    ] as FocusArea[],
  },

  whatWeAreExploring: [
    {
      id: 'learning',
      title: 'Learning',
      description: 'Exploring better ways to make learning engaging, accessible, and effective.',
      badge: 'Core Exploration',
      iconName: 'BookOpen',
    },
    {
      id: 'innovation',
      title: 'Innovation',
      description: 'Exploring new ideas at the intersection of technology and education.',
      badge: 'Research & Ideas',
      iconName: 'Lightbulb',
    },
    {
      id: 'future',
      title: 'Future',
      description: 'Building toward technologies that can support the learners of tomorrow.',
      badge: 'Next-Gen Vision',
      iconName: 'Compass',
    },
  ] as ExploringCard[],

  about: {
    heading: 'About VeyoraLabs',
    badge: 'Our Mission',
    paragraphs: [
      'VeyoraLabs is an early-stage technology startup focused on exploring innovative solutions for education.',
      'Our goal is to use technology and thoughtful product design to explore new possibilities in the way people learn, develop skills, and prepare for the future.',
      "We're currently working on our ideas and initiatives. More information will be announced soon.",
    ],
  },

  comingSoon: {
    heading: "We're researching, designing, and building the ideas that will shape VeyoraLabs.",
    badge: "What's Next",
    description: 'More about our upcoming initiatives will be shared soon.',
    ctaText: "Discover What's Next",
  },

  contact: {
    heading: "Let's Build What's Next.",
    badge: 'Get in touch',
    subheading: '',
    description: "We're open to conversations with students, educators, technologists, and people who believe technology can make education better.",
  },

  // Per strict requirement: Only render social icons if actual valid URLs are configured.
  // Leave empty strings to prevent displaying unverified/fabricated accounts.
  socialLinks: [
    { name: 'LinkedIn', url: '', iconName: 'Linkedin' },
    { name: 'GitHub', url: '', iconName: 'Github' },
    { name: 'X', url: '', iconName: 'Twitter' },
  ] as SocialLink[],

  footer: {
    copyright: '© 2026 VeyoraLabs. All rights reserved.',
    tagline: 'Building the Future of Education.',
    notice: 'More information coming soon.',
  },
};
