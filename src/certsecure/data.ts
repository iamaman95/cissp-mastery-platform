// CERTsecure platform catalog + seed reviews.
// The CISSP course is LIVE and links into the existing CISSP Mastery app
// (its route is `/cissp`). Everything else is a "coming soon" placeholder.

export interface Course {
  id: string;
  name: string;
  status: 'live' | 'coming_soon';
  tag: string;
  description: string;
  modules?: number;
  hours?: number;
  questions?: number;
  difficulty?: string;
  instructor?: string;
  launch?: string;
  route?: string; // internal route for live courses
  accent: 'cyan' | 'purple' | 'green' | 'blue' | 'red';
  icon: string; // lucide icon name
}

export const liveCourse: Course = {
  id: 'cissp',
  name: 'CISSP Mastery',
  status: 'live',
  tag: '(ISC)² · 2024 Outline',
  description:
    'Master all 8 CISSP domains topic-by-topic with a learn → quiz → remediate loop, five full-length simulation exams weighted to the real domain percentages, and cross-exam analytics that pinpoint your weak areas.',
  modules: 66,
  hours: 50,
  questions: 1320,
  difficulty: 'Advanced',
  instructor: 'Aman Pandey',
  route: '/cissp',
  accent: 'cyan',
  icon: 'ShieldCheck',
};

export const comingSoon: Course[] = [
  {
    id: 'aws-sec',
    name: 'AWS Security Specialty',
    status: 'coming_soon',
    tag: 'AWS · SCS-C02',
    description: 'Cloud security at scale — identity, detection, data protection, and incident response on AWS.',
    launch: 'Q1 2027',
    accent: 'blue',
    icon: 'Cloud',
  },
  {
    id: 'cism',
    name: 'CISM',
    status: 'coming_soon',
    tag: 'ISACA',
    description: 'Information security governance, risk management, and program leadership for security managers.',
    launch: 'Q2 2027',
    accent: 'purple',
    icon: 'Building2',
  },
  {
    id: 'pmp',
    name: 'PMP',
    status: 'coming_soon',
    tag: 'PMI',
    description: 'Project management mastery — predictive, agile, and hybrid delivery for certified project leaders.',
    launch: 'Q2 2027',
    accent: 'green',
    icon: 'GanttChartSquare',
  },
  {
    id: 'cloud-arch',
    name: 'Cloud Security Architect',
    status: 'coming_soon',
    tag: 'Multi-Cloud',
    description: 'Design zero-trust, defense-in-depth architectures across AWS, Azure, and GCP.',
    launch: 'Q3 2027',
    accent: 'cyan',
    icon: 'Network',
  },
  {
    id: 'red-team',
    name: 'Red Team Operations',
    status: 'coming_soon',
    tag: 'Offensive Security',
    description: 'Adversary emulation, evasion, and full-scope engagement tradecraft for offensive operators.',
    launch: 'Q4 2027',
    accent: 'red',
    icon: 'Crosshair',
  },
];

export interface Review {
  id: string;
  name: string;
  role: string;
  certification: string;
  rating: number;
  testimonial: string;
  avatar: string;
}

export const seedReviews: Review[] = [
  {
    id: 'r1',
    name: 'Priya Nair',
    role: 'Security Architect',
    certification: 'CISSP',
    rating: 5,
    testimonial:
      'The scenario-based questions felt exactly like the real exam. The analytics flagged crypto as my weak spot and I fixed it before test day. Passed first attempt.',
    avatar: 'PN',
  },
  {
    id: 'r2',
    name: 'Marcus Chen',
    role: 'SOC Manager',
    certification: 'CISSP',
    rating: 5,
    testimonial:
      'The learn → quiz → remediate loop is addictive. Every missed question came with a real rationale, not just an answer key. Best prep platform I have used.',
    avatar: 'MC',
  },
  {
    id: 'r3',
    name: 'Sofia Alvarez',
    role: 'GRC Lead',
    certification: 'CISSP',
    rating: 4,
    testimonial:
      'Five weighted simulation exams gave me realistic pacing practice. The cross-exam report showed my score trend climbing week over week. Highly recommend.',
    avatar: 'SA',
  },
  {
    id: 'r4',
    name: 'David Okonkwo',
    role: 'Cybersecurity Consultant',
    certification: 'CISSP',
    rating: 5,
    testimonial:
      'The MOST/BEST/FIRST qualifier drills retrained how I read questions. That alone was worth it. CERTsecure feels like a mission control for certification prep.',
    avatar: 'DO',
  },
];
