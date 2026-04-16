export interface EventSpeaker {
  name: string;
  role: string;
  photo: string;
}

export interface EventScheduleItem {
  time: string;
  title: string;
  description: string;
}

export interface EventPartner {
  name: string;
  logo: string;
}

export interface EventData {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  time: string;
  location: string;
  venue: string;
  description: string;
  summary: string;
  isFree: boolean;
  price: string;
  priceLabel: string;
  ticketLink: string;
  image: string;
  poster: string;
  gallery: string[];
  speakers: EventSpeaker[];
  schedule: EventScheduleItem[];
  partners: EventPartner[];
  tags: string[];
}

export const events: EventData[] = [
  {
    slug: 'selection-2026',
    title: 'The Selection 2026',
    subtitle: 'Digital Honors Gala & Creative Awards',
    date: '2026-11-15',
    time: '18:00',
    location: 'Museum of Modern Art, Addis Ababa',
    venue: 'Museum of Modern Art',
    description: 'A premier evening celebrating design excellence across Ethiopia. The Selection 2026 brings together industry leaders, jurors, creative directors and digital storytellers for a night of awards, installations, and networking in a cinematic editorial format.',
    summary: 'A visionary gala that surfaces the most ambitious digital work and craft in Ethiopia, with live ceremonies, curated showcases, and strategic conversations for design leaders.',
    isFree: true,
    price: '0',
    priceLabel: 'Free Admission with RSVP',
    ticketLink: '/events/selection-2026#register',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012',
    poster: 'https://images.unsplash.com/photo-1515165562835-c14a17ae9ccf?q=80&w=1920',
    gallery: [
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1120',
      'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1120',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1120',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1120'
    ],
    speakers: [
      {
        name: 'Liya Alem',
        role: 'Creative Director, YET',
        photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800'
      },
      {
        name: 'Mekdes Tadesse',
        role: 'Awards Curator',
        photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800'
      },
      {
        name: 'Solomon Bekele',
        role: 'UI/UX Lead',
        photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800'
      }
    ],
    schedule: [
      {
        time: '18:00',
        title: 'Arrival & Opening Reception',
        description: 'Guest check-in, welcome drinks, and ambient art projections in the museum lobby.'
      },
      {
        time: '18:45',
        title: 'Keynote + Awards Launch',
        description: 'Opening remarks and the first award announcement on the main stage.'
      },
      {
        time: '20:00',
        title: 'Live Installations & Networking',
        description: 'Interactive showcases and curated conversation nooks with speakers.'
      },
      {
        time: '21:30',
        title: 'Closing Toast',
        description: 'Final recognition and invitation for the next year’s portfolio of work.'
      }
    ],
    partners: [
      { name: 'Helm Creative', logo: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=200' },
      { name: 'Addis Studio', logo: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=200' },
      { name: 'Design Hub', logo: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=200' }
    ],
    tags: ['Gala', 'Awards', 'Design']
  },
  {
    slug: 'minimalism-workshop',
    title: 'Minimalism in Motion',
    subtitle: 'Workshop on Editorial Animation & Product Systems',
    date: '2026-08-20',
    time: '14:00',
    location: 'Helm Studio HQ',
    venue: 'Helm Studio HQ',
    description: 'A hands-on workshop built for makers who want to turn clean editorial systems into moving digital experiences. Learn how to prototype layouts, animate interactions, and craft minimal event storytelling for web and gallery installations.',
    summary: 'A focused design workshop blending editorial systems, motion, and real-world digital product thinking for teams and individuals ready to ship better experiences.',
    isFree: false,
    price: '1200',
    priceLabel: 'ETB 1,200 per ticket',
    ticketLink: '/events/minimalism-workshop#register',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070',
    poster: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1920',
    gallery: [
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1120',
      'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?q=80&w=1120',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1120',
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1120'
    ],
    speakers: [
      {
        name: 'Samuel Girma',
        role: 'Motion Design Lead',
        photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800'
      },
      {
        name: 'Hanna Kassa',
        role: 'UX Researcher',
        photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800'
      },
      {
        name: 'Martha Yohannes',
        role: 'Product Systems Designer',
        photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800'
      }
    ],
    schedule: [
      {
        time: '14:00',
        title: 'Studio Welcome & Context',
        description: 'Intro to editorial systems and the workshop agenda.'
      },
      {
        time: '14:30',
        title: 'Hands-on Layout Lab',
        description: 'Designing minimal pages with responsive structure and clear hierarchy.'
      },
      {
        time: '15:45',
        title: 'Motion Prototyping',
        description: 'Animations that support meaning, not noise.'
      },
      {
        time: '17:00',
        title: 'Group Review & Takeaways',
        description: 'Feedback session and practical next steps for your project.'
      }
    ],
    partners: [
      { name: 'Helm Creative', logo: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=200' },
      { name: 'Cache Labs', logo: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=200' },
      { name: 'Scene Studio', logo: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=200' }
    ],
    tags: ['Workshop', 'Motion', 'Systems']
  }
];
