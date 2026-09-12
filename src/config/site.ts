export interface NavItem {
  label: string;
  href: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  positioning: string;
  description: string;
  capabilities: string[];
  ctaText: string;
  badge: string;
  accentColor: 'teal' | 'cyan' | 'indigo';
  theme: {
    badgeBg: string;
    badgeText: string;
    borderHover: string;
    glowColor: string;
    gradient: string;
  };
}

export interface StakeholderSolution {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  capabilities: string[];
  iconName: 'GraduationCap' | 'HeartHandshake' | 'Briefcase' | 'Building2';
}

export interface WhyPrinciple {
  number: string;
  title: string;
  description: string;
  iconName: 'UserCheck' | 'Cpu' | 'SlidersHorizontal' | 'Network' | 'TrendingUp' | 'Target';
}

export interface RoadmapStage {
  phase: string;
  title: string;
  timeframe: string;
  description: string;
  milestones: string[];
  status: 'active' | 'upcoming' | 'planned';
}

export interface SocialLink {
  name: string;
  url: string; // If empty string, will NOT be rendered to ensure no fabricated accounts
  iconName: 'Linkedin' | 'Github' | 'Twitter';
}

export const siteConfig = {
  name: 'Veyora Labs',
  brandName: 'Veyora',
  brandSuffix: 'Labs',
  tagline: 'Building the Future of Education Through Technology.',
  contactEmail: 'support@veyoralabs.net',
  domain: 'https://veyoralabs.net',

  navItems: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Vision', href: '#vision' },
    { label: 'Contact', href: '#contact' },
  ] as NavItem[],

  hero: {
    eyebrow: 'EDUCATION × TECHNOLOGY',
    headlinePrefix: 'Building the technology behind a',
    headlineHighlight: 'smarter education ecosystem.',
    supportingText:
      'Veyora Labs builds modern education technology solutions that connect personalized learning, AI-powered experiences, and intelligent institution management.',
    primaryCta: 'Explore Our Products',
    secondaryCta: 'About Veyora Labs',
  },

  products: [
    {
      id: 'zeleon-learn',
      name: 'Zeleon Learn',
      category: 'Personalized Online Tuition Platform',
      positioning: 'Personalized learning. Individual attention. Better outcomes.',
      description:
        'Zeleon Learn is a personalized online tuition platform designed for students from Grades 1 to 10. It connects learners with personalized paid online tutoring experiences designed around their individual academic needs, learning pace, and goals. The platform makes online tuition more personal, structured, and effective by focusing on individual student requirements rather than a one-size-fits-all approach.',
      capabilities: [
        'Personalized online tuition',
        'One-to-one paid tutoring',
        'Grades 1–10',
        'Individual learning support',
        'Customized learning paths',
        'Concept-focused learning',
        'Academic performance improvement',
        'Flexible online learning',
      ],
      ctaText: 'Explore Zeleon Learn',
      badge: 'Product 01',
      accentColor: 'teal',
      theme: {
        badgeBg: 'bg-emerald-500/10 border-emerald-500/30',
        badgeText: 'text-emerald-400',
        borderHover: 'hover:border-emerald-500/50',
        glowColor: 'rgba(45, 212, 191, 0.15)',
        gradient: 'from-emerald-500 to-teal-400',
      },
    },
    {
      id: 'mybuddy-learn',
      name: 'MyBuddy Learn',
      category: 'AI-Powered Learning Platform',
      positioning: 'Understand better. Learn smarter. Grow faster.',
      description:
        'MyBuddy Learn is an AI-powered learning application designed to help students understand concepts more clearly, efficiently, and interactively. The platform uses intelligent technology to provide students with personalized learning assistance, explanations, recommendations, and adaptive learning experiences.',
      capabilities: [
        'AI-powered learning assistance',
        'Intelligent explanations',
        'Concept clarification',
        'Personalized learning support',
        'Adaptive learning experiences',
        'Smart recommendations',
        'Interactive learning',
        'Improved learning efficiency',
      ],
      ctaText: 'Explore MyBuddy Learn',
      badge: 'Product 02',
      accentColor: 'cyan',
      theme: {
        badgeBg: 'bg-brand-cyan/10 border-brand-cyan/30',
        badgeText: 'text-brand-cyan',
        borderHover: 'hover:border-brand-cyan/50',
        glowColor: 'rgba(56, 189, 248, 0.15)',
        gradient: 'from-brand-cyan to-sky-400',
      },
    },
    {
      id: 'nuvexa',
      name: 'Nuvexa',
      category: 'Education ERP & Institution Management Platform',
      positioning: 'One connected platform for modern educational institutions.',
      description:
        'Nuvexa is a comprehensive education ERP solution designed to digitally connect and streamline the academic, administrative, communication, and operational functions of schools and educational institutions. It brings essential institutional workflows together in one connected ecosystem, helping institutions manage daily operations while improving communication between administrators, teachers, students, and parents.',
      capabilities: [
        'Digital diary',
        'Student attendance',
        'Homework management',
        'Online classes',
        'Automated reminders',
        'Parent communication',
        'Examination management',
        'Fee management',
        'Transport management',
        'Events and announcements',
        'AI-powered features',
        'Institution-branded mobile/web apps',
      ],
      ctaText: 'Explore Nuvexa',
      badge: 'Product 03',
      accentColor: 'indigo',
      theme: {
        badgeBg: 'bg-brand-indigo/10 border-brand-indigo/30',
        badgeText: 'text-brand-indigo',
        borderHover: 'hover:border-brand-indigo/50',
        glowColor: 'rgba(129, 140, 248, 0.15)',
        gradient: 'from-brand-indigo to-violet-400',
      },
    },
  ] as ProductItem[],

  solutions: {
    eyebrow: 'EDUCATION ECOSYSTEM',
    heading: 'One ecosystem. Multiple solutions.',
    subheading:
      'Veyora Labs builds dedicated technologies engineered to serve every key participant in modern education.',
    stakeholders: [
      {
        id: 'students',
        title: 'Students',
        subtitle: 'Personalized Academic Journey',
        description:
          'Personalized learning, tutoring, AI-powered assistance, and better learning experiences.',
        capabilities: [
          'Personalized online tutoring tailored to pace',
          'Intelligent AI concept explanations on-demand',
          'Engaging interactive learning interfaces',
          'Concept mastery and performance improvement',
        ],
        iconName: 'GraduationCap',
      },
      {
        id: 'parents',
        title: 'Parents',
        subtitle: 'Complete Clarity & Engagement',
        description:
          'Better visibility, communication, reminders, and engagement with their child’s education.',
        capabilities: [
          'Transparent digital diary and homework updates',
          'Real-time attendance and milestone tracking',
          'Instant institutional announcements & alerts',
          'Direct, structured communication with educators',
        ],
        iconName: 'HeartHandshake',
      },
      {
        id: 'educators',
        title: 'Educators',
        subtitle: 'Empowered Teaching Workflows',
        description:
          'Digital tools that support teaching, student interaction, assignments, and learning workflows.',
        capabilities: [
          'Streamlined homework and exam management',
          'Actionable student comprehension insights',
          'Seamless digital classroom and diary tools',
          'Reduced administrative burdens via automation',
        ],
        iconName: 'Briefcase',
      },
      {
        id: 'institutions',
        title: 'Schools & Institutions',
        subtitle: 'Unified Operational Command',
        description:
          'Connected ERP, administration, communication, academic management, and institutional applications.',
        capabilities: [
          'End-to-end administration & fee management',
          'Transport tracking & automated scheduling',
          'Custom institution-branded mobile & web apps',
          'Unified multi-department digital infrastructure',
        ],
        iconName: 'Building2',
      },
    ] as StakeholderSolution[],
  },

  whyVeyora: {
    eyebrow: 'WHY VEYORA LABS',
    heading: 'Engineered for impact. Built for modern education.',
    subheading:
      'Our architecture is rooted in foundational engineering and pedagogical principles that ensure every product drives measurable value.',
    principles: [
      {
        number: '01',
        title: 'Student First',
        description: 'Technology designed around real learner needs, pacing, and cognitive comprehension.',
        iconName: 'UserCheck',
      },
      {
        number: '02',
        title: 'Intelligent by Design',
        description: 'Using AI and automation where they create meaningful educational value, clarity, and efficiency.',
        iconName: 'Cpu',
      },
      {
        number: '03',
        title: 'Personalized Experiences',
        description: 'Moving beyond one-size-fits-all education with adaptive paths and customized instruction.',
        iconName: 'SlidersHorizontal',
      },
      {
        number: '04',
        title: 'Connected Ecosystem',
        description: 'Connecting students, parents, educators, and institutions in one cohesive, seamless loop.',
        iconName: 'Network',
      },
      {
        number: '05',
        title: 'Built for Scale',
        description: 'Creating technology platforms capable of reliably growing with modern education systems.',
        iconName: 'TrendingUp',
      },
      {
        number: '06',
        title: 'Technology With Purpose',
        description: 'Innovation should solve real educational friction, not simply add technological complexity.',
        iconName: 'Target',
      },
    ] as WhyPrinciple[],
  },

  about: {
    eyebrow: 'ABOUT VEYORA LABS',
    heading: 'Technology should make education more personal, intelligent, and connected.',
    paragraphs: [
      'At Veyora Labs, we are redefining the future of education through innovation, technology, and personalized learning experiences.',
      'We are an education technology company focused on building modern digital solutions that empower students, educators, parents, schools, and educational institutions.',
      'We believe education should be more personalized, accessible, intelligent, connected, and efficient. Our products are designed to address different challenges across the education ecosystem—from individualized tutoring and AI-powered learning to complete institutional management.',
      'Through our growing portfolio of technology products, Veyora Labs brings together human expertise, intelligent technology, and thoughtful product design to create meaningful educational experiences.',
      'Our vision is to build a connected education ecosystem where technology supports better learning, better communication, and better outcomes.',
    ],
  },

  vision: {
    eyebrow: 'OUR VISION',
    heading: 'Building the future of education, one innovation at a time.',
    narrative:
      'Over the coming years, Veyora Labs aims to expand its education technology ecosystem through advanced AI-powered learning, deeper personalization, intelligent analytics, automated workflows, and global multi-platform accessibility.',
    expansionPillars: [
      'Advanced AI-powered learning & explanation models',
      'Deeper individualized learning personalization',
      'Intelligent education and performance analytics',
      'Automated institutional workflows and scheduling',
      'AI-assisted teaching and administrative tooling',
      'Mobile-first education experiences and access',
      'Curated gamification and interactive motivation systems',
      'Emerging immersive technologies (such as AR/VR) where appropriate',
      'Expansion into new education segments and curricula',
      'Institutional partnerships with forward-looking schools and educators',
      'Global education technology ecosystem scaling',
    ],
    roadmap: [
      {
        phase: 'NOW',
        title: 'Core Product Foundations',
        timeframe: 'Current Execution',
        description: 'Building, refining, and expanding our core education technology platforms.',
        milestones: [
          'Zeleon Learn: Online 1-on-1 tutoring platform for Grades 1–10',
          'MyBuddy Learn: Intelligent AI learning assistance & concept clarification',
          'Nuvexa: Connected ERP, digital diary, and attendance operations',
        ],
        status: 'active',
      },
      {
        phase: 'NEXT',
        title: 'Intelligent Integration',
        timeframe: 'Near-Term Horizon',
        description: 'Deeper AI integration, adaptive personalization, and unified cross-product data sync.',
        milestones: [
          'Adaptive knowledge graphing and personalized difficulty calibration',
          'Integrated parent-educator communication channels and automated summaries',
          'Expanded institutional modules for hybrid classroom workflows',
        ],
        status: 'upcoming',
      },
      {
        phase: 'FUTURE',
        title: 'Connected Ecosystem',
        timeframe: 'Long-Term Horizon',
        description:
          'Universal education ecosystem, predictive learning analytics, and next-generation learning technology.',
        milestones: [
          'Unified cross-institution data analytics and early intervention insights',
          'Next-generation immersive and collaborative learning technologies',
          'Global footprint connecting diverse curricula and multilingual learning',
        ],
        status: 'planned',
      },
    ] as RoadmapStage[],
  },

  contact: {
    eyebrow: 'GET IN TOUCH',
    heading: 'Connect With Veyora Labs',
    subheading: 'Collaborate with us or explore our education technology products.',
    description:
      'Whether you are an institution leader looking to modernize operations, an educator exploring digital tools, a parent seeking personalized tutoring, or a technology partner, we welcome direct conversation.',
    directEmailLabel: 'Official Correspondence',
  },

  // Per strict requirement: Only render social links that have non-empty URLs (no invented accounts)
  socialLinks: [
    { name: 'LinkedIn', url: '', iconName: 'Linkedin' },
    { name: 'Github', url: '', iconName: 'Github' },
    { name: 'X', url: '', iconName: 'Twitter' },
  ] as SocialLink[],

  footer: {
    description:
      'Veyora Labs develops modern education technology solutions connecting personalized learning, AI assistance, and intelligent institution management.',
    tagline: 'Building the future of education through technology.',
    copyright: '© 2026 Veyora Labs. All rights reserved.',
    disclaimer: 'Static Informational Platform • Privacy-First • No Tracking Cookies',
  },
};
