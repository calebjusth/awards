export interface WebsiteAward {
  slug: string;
  title: string;
  developer: string;
  category: string;
  year: string;
  client: string;
  description: string;
  heroImage: string;
  gallery: string[];
  techStack: string[];
  scores: {
    jury: {
      creativity: number;
      content: number;
      usability: number;
      interactivity: number;
    };
    community: {
      creativity: number;
      content: number;
      usability: number;
      interactivity: number;
    };
  };
  recentVoters: Array<{
    name: string;
    avatar: string;
  }>;
}

export const websites: WebsiteAward[] = [
  {
    slug: 'the-noir-archive',
    title: 'The Noir Archive',
    developer: 'Helm Creatives',
    category: 'Immersive Design',
    year: '2026',
    client: 'The Noir Studio',
    description: 'An editorial-driven digital archive exploring the history, aesthetics, and cultural impact of noir through interactive narratives and cinematic design. Every element is carefully crafted to evoke the essence of classic noir while maintaining modern web standards.',
    heroImage: 'https://assets.awwwards.com/awards/submissions/2026/04/69de9e8ebe852289840693.jpg',
    gallery: [
      'https://picsum.photos/seed/noir1/800/800',
      'https://picsum.photos/seed/noir2/800/800',
      'https://picsum.photos/seed/noir3/800/800',
      'https://picsum.photos/seed/noir4/800/800',
    ],
    techStack: ['Astro', 'React', 'TailwindCSS', 'TypeScript', 'Framer Motion'],
    scores: {
      jury: {
        creativity: 9.8,
        content: 9.5,
        usability: 9.2,
        interactivity: 9.6,
      },
      community: {
        creativity: 9.3,
        content: 8.9,
        usability: 8.7,
        interactivity: 9.1,
      },
    },
    recentVoters: [
      { name: 'Alex Chen', avatar: 'https://i.pravatar.cc/40?img=1' },
      { name: 'Maria Garcia', avatar: 'https://i.pravatar.cc/40?img=2' },
      { name: 'James Wilson', avatar: 'https://i.pravatar.cc/40?img=3' },
      { name: 'Sophie Laurent', avatar: 'https://i.pravatar.cc/40?img=4' },
      { name: 'Yuki Tanaka', avatar: 'https://i.pravatar.cc/40?img=5' },
    ],
  },
  {
    slug: 'oasis-ui-toolkit',
    title: 'Oasis UI Toolkit',
    developer: 'Nova Digital',
    category: 'Design System',
    year: '2026',
    client: 'Digital Oasis',
    description: 'A comprehensive design system and component library built for modern digital products. Features over 200 meticulously crafted components with accessibility as a core principle.',
    heroImage: 'https://picsum.photos/seed/oasis/1600/900',
    gallery: [
      'https://picsum.photos/seed/oasis1/800/800',
      'https://picsum.photos/seed/oasis2/800/800',
      'https://picsum.photos/seed/oasis3/800/800',
      'https://picsum.photos/seed/oasis4/800/800',
    ],
    techStack: ['Vue.js', 'Vite', 'Storybook', 'TypeScript', 'SCSS'],
    scores: {
      jury: {
        creativity: 8.9,
        content: 9.4,
        usability: 9.7,
        interactivity: 8.8,
      },
      community: {
        creativity: 8.6,
        content: 9.1,
        usability: 9.5,
        interactivity: 8.4,
      },
    },
    recentVoters: [
      { name: 'Jordan Kim', avatar: 'https://i.pravatar.cc/40?img=6' },
      { name: 'Alex Rivera', avatar: 'https://i.pravatar.cc/40?img=7' },
      { name: 'Taylor Morgan', avatar: 'https://i.pravatar.cc/40?img=8' },
    ],
  },
];
