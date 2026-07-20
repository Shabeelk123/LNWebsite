export interface ServiceItem {
  slug: string;
  title: string;
  icon: string;          // Lucide icon name
  tagline: string;
  summary: string;
  heroLabel: string;
  imageUrl?: string;
  bullets: string[];
  subCategories: { label: string; items: string[] }[];
  ctaText: string;
  imageAlt: string;
}

import security from "../assets/security.png"
import cleaning from "../assets/cleaning.png"

const services: ServiceItem[] = [
  {
    slug: 'manpower-supply',
    title: 'Manpower Supply',
    icon: 'Users',
    tagline: 'Right People. Right Skills. Right Now.',
    heroLabel: 'MANPOWER & STAFFING',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUfZ7dHaapHCRpb_PvrgsLQXZqOIti3EzMmzEaHMlp5_RxPgFmcT878VcXzdtE2qzvDeAbLgqsctmymy7BW3aQLlfw3Rw_3ZlequdUs3kQ_dwYwU1WbnndIUVfTuuSkTMRRenmyUa2p3BLYK6zUkjsdlH_jR2Y1aeyWPodY3420MFFtDWkO0PETdnnvvmsm1TBLjf2nHEHXn9zILhzcmbRUNFwgNI13omTvTCNXlhhq6glgRHgiOHUAnXL-ARUOKtqA4EqsfjYqnSW',
    summary:
      'Vetted, highly-skilled technical workforce ready for immediate deployment across the UAE.',
    bullets: [
      'Rigorous pre-deployment screening and skills assessment',
      'Full compliance with UAE labour and residency regulations',
      'Replacement guarantee within 48 hours if required',
      'Dedicated account manager for workforce coordination',
      'Scalable headcount from 5 to 200+ personnel',
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
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXLJCs42e24ESpQZQQsN46tm6DJ5YhtxOHQt-957yxOH99EjXvZRchqiFQMpP8RVMK-P759sPkTw5xSsPFwuDdRoaG1DHevNGNpd3qHzpoSuUyah0ACXhfqGAGwN7fyZzgKiQM_GtQqfh-9gk1_qaDXwMbMFZJBg_bShBrQnvcbFIyAyaC-mKttqlvWzLusLgYuCTZUwlZ8O45Tb2LD2g0L3j8ix0Ke5ShsExklI83vxJuchoCdjoYSbG6k3mKG7YYtvt3bIWq0sa9',
    summary:
      'Precision engineering and maintenance for complex climate control and electrical systems.',
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
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJ2wn1cocaf-VT0JHvQnvmnpZSh9YUdpk9aw45OsOR9uVILLLmQyot5gENyk-qgcmXwuJSIc1WkDDE-2rxBxJbn0H2zRJmCoEvUwwSpoZXcluqIVOwzgx2itELmziQFCRiWmi2NkGpvwXhYrhHOWPTzqF1J0F0s2mpH0gjTGplgmwx-2s25hDP-yLAV9kZQgRc2V0wuHqfCQW1xjgQwxNiO4PoIPieF7F7rPRwAZ9h9Vvw6nVKBFAVkyAYLOj7ZlSa1qnBh9Tm29px',
    summary:
      "Expert structural works and infrastructure support for the UAE's most iconic developments.",
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
    imageUrl: cleaning,
    summary:
      'Premium cleaning and soft facility management for luxury hospitality and corporate spaces.',
    bullets: [
      'Structured cleaning programmes with measurable KPIs',
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
    imageUrl: security,
    summary: 'Professional security solutions and personnel for commercial and residential assets.',
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
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuxdHuUfpSSNDSiEQ0hglMrAEW4VJM1Dd3Ekg4rGGvU8kjl6osRVYi4lYMDnF4asVmAF_yUt-6t257Lg4rlOhGqy0cY2J-6ZuhN8qWBtDyOkRzs5hMZMd4hrdIZmDlER2qZcPFSQrzoMuf68w5MBA0ea7ax26ir_hqaYIsewhI1P4mfO7sUHkLtSVA34jzfnE6v0U5XxOER4XIN6TdeoZ1FmPLnCJdy4TOJbB5f-z6Bp_GwAj4ZW3H82X6SAx71pwrgt8GsZho2gV9',
    summary:
      'Bespoke maintenance, heavy deep-cleaning, and specialized project solutions for commercial and hospitality assets.',
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
