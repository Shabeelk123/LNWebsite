export interface ServiceItem {
  slug: string;
  title: string;
  icon: string;          // Lucide icon name
  tagline: string;
  summary: string;
  heroLabel: string;
  bullets: string[];
  subCategories: { label: string; items: string[] }[];
  ctaText: string;
  imageAlt: string;
}

const services: ServiceItem[] = [
  {
    slug: 'manpower-supply',
    title: 'Manpower Supply',
    icon: 'Users',
    tagline: 'Right People. Right Skills. Right Now.',
    heroLabel: 'MANPOWER & STAFFING',
    summary:
      'We supply fully vetted, UAE-compliant skilled, semi-skilled, and general labour to construction, industrial, and facility operations across the Emirates — mobilised fast, managed professionally.',
    bullets: [
      'Rigorous pre-deployment screening and skills assessment',
      'Full compliance with UAE labour and residency regulations',
      'Replacement guarantee within 48 hours if required',
      'Dedicated account manager for workforce coordination',
      'Scalable headcount from 5 to 500+ personnel',
      'Available for short-term, project-based, and long-term contracts',
    ],
    subCategories: [
      {
        label: 'Skilled Labour',
        items: ['Electricians', 'Plumbers', 'Welders', 'Fabricators', 'HVAC Technicians'],
      },
      {
        label: 'Semi-Skilled Labour',
        items: ['Technicians', 'Helpers', 'Assistants', 'Site Workers'],
      },
      {
        label: 'General Labour',
        items: ['Cleaners', 'Loaders', 'Helpers', 'Support Staff'],
      },
    ],
    ctaText: 'Request Workforce',
    imageAlt: 'Skilled construction workers in PPE on a UAE industrial site',
  },
  {
    slug: 'mep-technical-services',
    title: 'MEP & Technical Services',
    icon: 'Wrench',
    tagline: 'Engineering Excellence. Uninterrupted Operations.',
    heroLabel: 'MEP & TECHNICAL',
    summary:
      'Our certified MEP teams handle mechanical, electrical, and plumbing installations and maintenance for high-rise towers, villas, and commercial complexes — ensuring zero-downtime operations and full DEWA/DM compliance.',
    bullets: [
      'Complete MEP design, installation, and commissioning',
      'Preventive and corrective HVAC maintenance (split, ducted, VRF systems)',
      'Carpentry, false ceiling, and partition works to finish standard',
      'Painting, masonry, and tiling by trade-certified craftsmen',
      'Generator and UPS servicing, load-bank testing, and emergency support',
      'DEWA, DCD, and Dubai Municipality approved contractors',
    ],
    subCategories: [
      {
        label: 'Mechanical & Electrical',
        items: ['MEP Design & Installation', 'HVAC Services', 'Generator & UPS Maintenance', 'Fire Alarm & Suppression'],
      },
      {
        label: 'Interior Finishing',
        items: ['Carpentry & False Ceiling', 'Painting & Masonry', 'Tiling & Flooring', 'Partition Works'],
      },
    ],
    ctaText: 'Get a Technical Quote',
    imageAlt: 'HVAC technician servicing AC unit in Dubai commercial building',
  },
  {
    slug: 'civil-maintenance',
    title: 'Civil & Maintenance Works',
    icon: 'HardHat',
    tagline: 'Protecting Structures. Preserving Value.',
    heroLabel: 'CIVIL & MAINTENANCE',
    summary:
      'From facade restoration to rope-access cleaning and administrative support, our civil and maintenance division keeps your property assets in peak condition while your team focuses on core business.',
    bullets: [
      'High-rise facade cleaning using IRATA-trained rope-access technicians',
      'Water-fed pole and cradle system facade maintenance',
      'Full administrative and office boy services for corporate facilities',
      'Facility supervision and operational reporting',
      'Structural integrity inspections and minor remediation',
      'Scheduled preventive maintenance programmes with full documentation',
    ],
    subCategories: [
      {
        label: 'Facade & Exterior',
        items: ['Facade Cleaning', 'Rope Access Cleaning', 'Window & Cladding Care', 'Waterproofing'],
      },
      {
        label: 'Facility Support',
        items: ['Office Boys & Admin Support', 'Facility Supervision', 'Handyman Services', 'Grounds Maintenance'],
      },
    ],
    ctaText: 'Schedule Maintenance',
    imageAlt: 'Rope-access technician cleaning the facade of a Dubai skyscraper',
  },
  {
    slug: 'cleaning-soft-services',
    title: 'Cleaning & Soft Services',
    icon: 'Sparkles',
    tagline: 'Spotless Environments. Professional Standards.',
    heroLabel: 'CLEANING & SOFT SERVICES',
    summary:
      'We deliver comprehensive cleaning programmes for offices, residences, and industrial sites across the UAE — from routine housekeeping to specialist deep-cleans, all executed with eco-certified products and trained operatives.',
    bullets: [
      'ISO-aligned cleaning programmes with measurable KPIs',
      'Dedicated cleaning supervisors per site for quality assurance',
      'Eco-friendly and COSHH-compliant chemical usage',
      '24/7 reactive cleaning for emergencies and spills',
      'Full HACCP compliance for food-safe environments',
      'Move-in and move-out deep-clean guaranteed turnover',
    ],
    subCategories: [
      {
        label: 'Residential',
        items: ['Villa & Apartment Cleaning', 'Move-In / Move-Out Clean', 'Water Tank & Pool Cleaning', 'Pest Control'],
      },
      {
        label: 'Commercial',
        items: ['Housekeeping Services', 'Office Cleaning', 'Post-Construction Cleaning', 'Carpet & Upholstery Care'],
      },
    ],
    ctaText: 'Request Cleaning Services',
    imageAlt: 'Professional cleaning team sanitising a modern Dubai office space',
  },
  {
    slug: 'security-services',
    title: 'Security Services',
    icon: 'ShieldCheck',
    tagline: 'Vigilant. Reliable. SIRA Certified.',
    heroLabel: 'SECURITY SERVICES',
    summary:
      'Our SIRA-certified security personnel and integrated surveillance solutions protect commercial properties, residential compounds, and construction sites with round-the-clock vigilance and professional incident management.',
    bullets: [
      'SIRA-licensed security guards with continuous training',
      'CCTV monitoring and remote video surveillance management',
      'Vehicle patrol routes with GPS tracking and reporting',
      'Lifeguard and pool safety services for hospitality properties',
      'Concierge and front-desk management for corporate buildings',
      'Emergency response protocols and escalation procedures',
    ],
    subCategories: [
      {
        label: 'Physical Security',
        items: ['Security Guards', 'Vehicle Patrol', 'Access Control', 'Emergency Response'],
      },
      {
        label: 'Hospitality Security',
        items: ['CCTV Monitoring', 'Lifeguard Services', 'Concierge / Front Desk', 'Event Security'],
      },
    ],
    ctaText: 'Enquire About Security',
    imageAlt: 'Professional security guard monitoring a commercial facility in Dubai',
  },
  {
    slug: 'special-services',
    title: 'Special Services',
    icon: 'Star',
    tagline: 'Beyond the Routine. Built for the Critical.',
    heroLabel: 'SPECIAL & PROJECT SERVICES',
    summary:
      'When standard contracts don\'t fit the scope, our Special Services division delivers bespoke workforce and technical solutions — from post-construction cleans to event-scale mobilisations — executed on your timeline, to your specification.',
    bullets: [
      'Industrial and commercial deep-cleaning using advanced machinery',
      'Post-construction site clearance and handover-ready cleaning',
      'Event-based manpower for exhibitions, launches, and corporate events',
      'Short-term project workforce at scale — mobilised in 48 hours',
      'Specialist technical tasks not covered under standard AMC contracts',
      'Dedicated project manager assigned for each special engagement',
    ],
    subCategories: [
      {
        label: 'Specialist Cleaning',
        items: ['Deep Cleaning', 'Post-Construction Cleaning', 'Industrial Steam Cleaning', 'Sanitisation & Disinfection'],
      },
      {
        label: 'Project Workforce',
        items: ['Event-Based Manpower', 'Short-Term Project Staffing', 'Temporary Technical Teams', 'Exhibition Support'],
      },
    ],
    ctaText: 'Discuss Your Project',
    imageAlt: 'Specialist team performing post-construction cleaning in a new Dubai development',
  },
];

export default services;
