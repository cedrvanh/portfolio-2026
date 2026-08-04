export interface Project {
  title: string;
  tagline: string;
  stack: string[];
  status?: 'building';
  href?: string;
  /** Set when this was built as part of paid work for an employer, not a personal project. */
  employer?: string;
}

export const projects: Project[] = [
  {
    title: 'Tracklog',
    tagline: 'A social music journal',
    stack: ['Next.js', 'TypeScript', 'Postgres', 'pgvector', 'Drizzle', 'Vercel AI SDK'],
    href: 'https://tracklog-eight.vercel.app',
  },
  {
    title: 'This portfolio',
    tagline: 'Redesign of my previous portfolio',
    stack: ['Astro', 'TypeScript', 'SCSS'],
    href: 'https://github.com/cedrvanh',
  },
  {
    title: 'Mobietec',
    tagline: 'Multi-site platform for commercial vehicle accessories',
    stack: ['Laravel', 'SCSS', 'React Components'],
    href: 'https://www.mobietec.com/en',
    employer: 'Dynamate',
  },
  {
    title: 'Team Belgium (BOIC)',
    tagline: 'Headless website and webshop',
    stack: ['Next.js', 'GraphQL', 'Laravel', 'Shopify', 'Liquid'],
    href: 'https://www.teambelgium.be/en',
    employer: 'Dynamate',
  },
  {
    title: 'KAA Gent App',
    tagline: 'A mobile app for the KAA Gent',
    stack: ['React Native', 'Expo', 'Firebase'],
    href: 'https://apps.apple.com/be/app/kaa-gent/id1351397613',
    employer: 'Dynamate',
  }
];
