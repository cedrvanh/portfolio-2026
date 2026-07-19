export interface TimelineEntry {
  role: string;
  org: string;
  meta?: string;
  period: string;
  detail?: string;
}

export const experience: TimelineEntry[] = [
  {
    role: 'Full-stack Developer',
    org: 'Dynamate',
    meta: 'Ghent, Belgium',
    period: 'Aug 2023 — Present',
    detail:
      'Custom web apps in Laravel & Blade, Craft CMS builds, Shopify storefronts, and interactive front-ends in React & Next.js.',
  },
  {
    role: 'Frontend Developer',
    org: 'Dynamate',
    meta: 'Ghent, Belgium',
    period: 'Oct 2020 — Aug 2023',
    detail:
      'Front-end for client sites and Shopify themes, focused on clean, maintainable code and smooth user experiences.',
  },
  {
    role: 'Web Developer',
    org: 'JuvaWebdesign',
    meta: 'Internship · Wielsbeke, Belgium',
    period: 'Apr 2016 — May 2016',
    detail: 'Designed and built client websites in HTML, CSS & JS.',
  },
];

export const education: TimelineEntry[] = [
  {
    role: 'Bachelor, Graphic Design — New Media Development',
    org: 'Arteveldehogeschool',
    meta: 'Ghent, Belgium',
    period: '2016 — 2020',
    detail:
      'Full-stack development, native and mixed-reality apps, database design, CMS development, and UI/UX.',
  },
  {
    role: 'Secondary education, Multimedia',
    org: 'Athena Campus Heule',
    meta: 'Heule, Belgium',
    period: '2012 — 2016',
    detail: 'Graphic design and the basics of web development and UI/UX.',
  },
];
