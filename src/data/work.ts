export interface Project {
  title: string;
  detail: string;
  year: string;
  href?: string;
}

export const projects: Project[] = [
  {
    title: 'Tracklog',
    detail: 'social music journal with an AI recommender',
    year: '2026',
    href: '#building',
  },
  {
    title: 'This site',
    detail: 'hand-rolled in Astro, no framework on the client',
    year: '2026',
    href: 'https://github.com/cedrvanh',
  },
];
