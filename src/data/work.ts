export interface Project {
  title: string;
  tagline: string;
  stack: string[];
  year: string;
  status?: 'building';
  href?: string;
}

export const projects: Project[] = [
  {
    title: 'Tracklog',
    tagline: 'A social music journal',
    stack: ['Next.js', 'TypeScript', 'Postgres + pgvector', 'Drizzle', 'Vercel AI SDK'],
    year: '2026',
    status: 'building',
  },
  {
    title: 'This site',
    tagline: 'Hand-rolled in Astro',
    stack: ['Astro', 'TypeScript', 'SCSS'],
    year: '2026',
    href: 'https://github.com/cedrvanh',
  },
];
