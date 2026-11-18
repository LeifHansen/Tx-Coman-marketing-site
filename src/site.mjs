/* Single source of truth for brand, contact details and navigation. */
export const SITE = {
  name: 'Beverage Co-Packing Texas',
  domain: 'https://beveragecopackingtx.com',
  email: 'hello@beveragecopackingtx.com',
  phone: '+12064681650',
  phoneDisplay: '(206) 468-1650',
  themeColor: '#0D2722',
  ogImage: 'https://beveragecopackingtx.com/assets/og-image.png',
  logoPng: 'https://beveragecopackingtx.com/assets/logo-512.png',
  updated: '2026-11-18'
};

export const abs = (path) => SITE.domain + path;

/* Services: order drives nav, footer and the homepage capability index. */
export const SERVICES = [
  { slug: 'hemp-beverage-co-packing', label: 'Hemp THC Beverage Co-Packing', short: 'Hemp THC beverages', blurb: 'Seltzers, RTD alcohol alternatives and bottled infused drinks.', art: 'thc' },
  { slug: 'cbd-beverage-manufacturing', label: 'CBD Beverage Manufacturing', short: 'CBD beverages', blurb: 'Sparkling CBD drinks, still tonics and bottled RTDs.', art: 'cbd' },
  { slug: 'canned-beverage-co-packing', label: 'Canned Beverage Co-Packing', short: 'Canned beverages', blurb: 'Slim, standard and tall cans, still or sparkling.', art: 'cans' },
  { slug: 'bottled-beverage-co-packing', label: 'Bottled Beverage Co-Packing', short: 'Bottled beverages', blurb: 'Glass, PET, shots and 750 mL shareable bottles.', art: 'bottles' },
  { slug: 'hemp-gummy-co-packing', label: 'Hemp Gummy Manufacturing', short: 'Hemp gummies', blurb: 'THC and CBD gummies in pectin or gelatin, pouches or jars.', art: 'gummies' },
  { slug: 'beverage-formulation', label: 'Beverage Formulation & Development', short: 'Formulation & development', blurb: 'Concept briefs, bench formulas and scale-up to the line.', art: 'formulation' },
  { slug: 'functional-co-packing', label: 'Functional Beverage Co-Packing', short: 'Functional beverages', blurb: 'Botanical and functional RTDs in cans and bottles.', art: 'functional' }
];

export const RESOURCES = [
  { slug: 'choosing-a-beverage-copacker', label: 'How to Choose a Beverage Co-Packer in Texas', short: 'Choosing a co-packer', blurb: 'Line fit, ownership, cost scope and the questions that matter.' },
  { slug: 'cans-vs-bottles', label: 'Cans vs. Bottles for Hemp THC and CBD Beverages', short: 'Cans vs. bottles', blurb: 'Compare formats from a manufacturing and distribution view.' },
  { slug: 'launching-hemp-beverage', label: 'Planning Your First Hemp Beverage Production Run', short: 'First production run', blurb: 'Build a brief that saves time with every facility.' }
];

export const serviceUrl = (slug) => `/${slug}.html`;
export const resourceUrl = (slug) => `/resources/${slug}.html`;

/* Form option lists (values are what lands in the inbox / CRM). */
export const FORM = {
  products: [
    { value: 'Hemp THC beverage', label: 'Hemp THC beverage' },
    { value: 'CBD beverage', label: 'CBD beverage' },
    { value: 'Functional beverage', label: 'Functional beverage' },
    { value: 'Hemp THC/CBD gummies', label: 'THC / CBD gummies' },
    { value: 'Formulation / product development', label: 'Formulation only' },
    { value: 'Other / unsure', label: 'Other / not sure' }
  ],
  packaging: [
    { value: 'Aluminum cans', label: 'Aluminum cans' },
    { value: 'Glass bottles', label: 'Glass bottles' },
    { value: 'PET bottles', label: 'PET bottles' },
    { value: '750 mL bottles', label: '750 mL bottles' },
    { value: 'Gummy pouches or jars', label: 'Pouches / jars' },
    { value: 'Undecided', label: 'Not decided' }
  ],
  volume: ['Under 5,000 units', '5,000–24,999 units', '25,000–99,999 units', '100,000+ units', 'Need guidance'],
  stage: ['Idea / early concept', 'Developing formula', 'Production-ready formula', 'Existing brand scaling'],
  timeline: ['Within 3 months', '3–6 months', '6–12 months', '12+ months / exploring']
};
