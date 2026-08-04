export interface Skill {
  name: string;
  core?: boolean;
}

export interface SkillGroup {
  label: string;
  items: Skill[];
}

export const skills: SkillGroup[] = [
  {
    label: 'Development',
    items: [
      { name: 'TypeScript', core: true },
      { name: 'JavaScript', core: true },
      { name: 'PHP', core: true },
      { name: 'Laravel', core: true },
      { name: 'Next.js', core: true },
      { name: 'React', core: true },
      { name: 'Accessibility' },
      { name: 'RESTful APIs' },
      { name: 'React Native & Expo' },
      { name: 'HTML' },
      { name: 'SCSS' },
      { name: 'Tailwind' },
    ],
  },
  {
    label: 'E-commerce & CMS',
    items: [
      { name: 'Shopify', core: true },
      { name: 'Liquid', core: true },
      { name: 'Craft CMS' },
      { name: 'Twig' },
    ],
  },
  {
    label: 'Tools & workflow',
    items: [
      { name: 'Git', core: true },
      { name: 'Cursor', core: true },
      { name: 'Claude', core: true },
      { name: 'DDEV' },
      { name: 'Vercel' },
      { name: 'Figma' },
      { name: 'Vite' },
      { name: 'ESLint' },
      { name: 'Prettier' },
    ],
  },
];
