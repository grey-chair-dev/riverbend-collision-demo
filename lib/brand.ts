export const brand = {
  name: 'Riverbend Collision Works',
  nameShort: 'Riverbend Collision',
  nameDisplay: { primary: 'Riverbend', accent: 'Collision' },
  nameMobile: 'RCW',
  tagline: 'Premium Collision Center',
  region: 'Northern Kentucky',
  regionShort: 'NKY',
  city: 'Covington',
  state: 'KY',
  address: {
    street: '820 Madison Avenue',
    city: 'Covington',
    state: 'KY',
    zip: '41011',
    full: '820 Madison Avenue, Covington, KY 41011',
    short: '820 Madison Ave, Covington, KY',
    line1: '820 Madison Avenue',
    line2: 'Covington, KY 41011',
  },
  phone: {
    display: '(859) 555-0147',
    tel: '8595550147',
    sms: '8595550148',
    smsDisplay: '(859) 555-0148',
  },
  founded: 1999,
  yearsInBusiness: 25,
  isDemo: true,
  demoDisclaimer: 'Demo site — not a real business.',
  agency: 'Grey Chair Digital',
  agencyUrl: 'https://greychair.digital',
  siteTitle: 'Riverbend Collision Works | Northern Kentucky Demo Site',
  siteDescription:
    'Demo portfolio site for a fictional Northern Kentucky collision center. AI-powered quotes and photo uploads.',
  github: {
    org: 'grey-chair-dev',
    repo: 'riverbend-collision-demo',
    url: 'https://github.com/grey-chair-dev/riverbend-collision-demo',
  },
} as const;

export const copyrightLine = (year = new Date().getFullYear()) =>
  `© ${year} ${brand.name}. ${brand.demoDisclaimer}`;

export const phoneHref = `tel:${brand.phone.tel}`;
export const smsHref = `sms:${brand.phone.sms}`;
