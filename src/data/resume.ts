export interface ResumeEntry {
  role: string;
  org: string;
  meta?: string;
  period: string;
  detail?: string;
}

export const experience: ResumeEntry[] = [
  {
    role: 'Full-stack Developer',
    org: 'Dynamate',
    meta: 'Ghent, Belgium',
    period: 'Aug 2023 — Present',
    detail:
      'Building custom web applications with Laravel and Shopify, and modern frontends with Next.js. Focused on clean architecture, performance, database design (MySQL) and delivering directly for clients.',
  },
  {
    role: 'Frontend Developer',
    org: 'Dynamate',
    meta: 'Ghent, Belgium',
    period: 'Oct 2020 — Aug 2023',
    detail:
      'Front-end for websites, e-commerce or web apps, focused on clean, maintainable code and smooth user experiences. Worked in collaboration with teams of developers & designers. Worked with Shopify storefront themes, Craft CMS, and custom Laravel projects.',
  },
  {
    role: 'Web Developer',
    org: 'JuvaWebdesign',
    meta: 'Internship · Wielsbeke, Belgium',
    period: 'Apr 2016 — May 2016',
    detail: 'Designed and built websites in HTML, CSS & JS. Communicated with clients to understand their needs and goals.',
  },
];

export const education: ResumeEntry[] = [
  {
    role: 'Bachelor, Graphic & Digital Media, New Media Development',
    org: 'Arteveldehogeschool',
    meta: 'Ghent, Belgium',
    period: '2016 — 2020',
    detail:
      'Educated in full stack development, mobile app development, database design, CMS development, and UI/UX.',
  },
  {
    role: 'Secondary education, Multimedia',
    org: 'Athena Campus Heule',
    meta: 'Heule, Belgium',
    period: '2012 — 2016',
    detail: 'Graphic design and the basics of web development',
  },
];
