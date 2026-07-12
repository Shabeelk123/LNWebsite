// ─── Design Tokens — Lamiya Al Nujoom Technical Services ───────────────────
// Source: Stitch project 14725506067630853503
// DO NOT hardcode colors / fonts / spacing outside this file.

export const colors = {
  // Core brand
  primary: '#001026',           // Deep Navy
  primaryContainer: '#0b2545',  // Navy (header/hero backgrounds)
  onPrimary: '#ffffff',
  onPrimaryContainer: '#778db2',
  inversePrimary: '#b1c7f0',

  // Accent / CTA
  secondary: '#00658c',         // Steel Blue
  secondaryContainer: '#29bcfe',// Electric Cyan (CTA buttons)
  onSecondary: '#ffffff',
  onSecondaryContainer: '#004966',

  // Tertiary (deep navy gradient anchor)
  tertiary: '#000f27',
  tertiaryContainer: '#00244d',
  onTertiary: '#ffffff',
  onTertiaryContainer: '#618cd2',

  // Surfaces
  background: '#fcf9f8',        // Off-white "Steel Snow"
  surface: '#fcf9f8',
  surfaceDim: '#dcd9d9',
  surfaceBright: '#fcf9f8',
  surfaceContainerLowest: '#ffffff',
  surfaceContainerLow: '#f6f3f2',
  surfaceContainer: '#f0eded',
  surfaceContainerHigh: '#eae7e7',
  surfaceContainerHighest: '#e5e2e1',
  onSurface: '#1c1b1b',         // Charcoal headlines
  onSurfaceVariant: '#44474e',
  inverseSurface: '#313030',
  inverseOnSurface: '#f3f0ef',

  // Semantic
  outline: '#74777f',
  outlineVariant: '#c4c6cf',
  surfaceTint: '#495f82',

  // Error
  error: '#ba1a1a',
  errorContainer: '#ffdad6',
  onError: '#ffffff',
  onErrorContainer: '#93000a',

  // Custom brand shortcuts
  accent: '#12b4f5',            // Electric Blue / Cyan (override)
  navyGradientStart: '#001026',
  navyGradientEnd: '#0b2545',
  cardBorder: '#e2e8f0',
  navBorder: '#e2e8f0',
};

export const typography = {
  displayLg: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '48px',
    fontWeight: '700',
    lineHeight: '1.1',
    letterSpacing: '-0.02em',
  },
  displayLgMobile: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '32px',
    fontWeight: '700',
    lineHeight: '1.2',
    letterSpacing: '-0.01em',
  },
  headlineMd: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '32px',
    fontWeight: '700',
    lineHeight: '1.2',
  },
  headlineSm: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '24px',
    fontWeight: '600',
    lineHeight: '1.3',
  },
  bodyLg: {
    fontFamily: 'Inter, sans-serif',
    fontSize: '18px',
    fontWeight: '400',
    lineHeight: '1.6',
  },
  bodyMd: {
    fontFamily: 'Inter, sans-serif',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '1.5',
  },
  labelCaps: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '12px',
    fontWeight: '700',
    lineHeight: '1.0',
    letterSpacing: '0.1em',
    textTransform: 'uppercase' as const,
  },
  button: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '14px',
    fontWeight: '600',
    lineHeight: '1.0',
    letterSpacing: '0.02em',
  },
};

export const spacing = {
  containerMax: '1280px',
  gutter: '24px',
  marginMobile: '16px',
  sectionGapDesktop: '120px',
  sectionGapMobile: '64px',
};

export const borderRadius = {
  sm: '0.125rem',
  DEFAULT: '0.25rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  full: '9999px',
};

export const shadows = {
  card: '0 1px 3px rgba(11,37,69,0.06), 0 1px 2px rgba(11,37,69,0.04)',
  cardHover: '0 10px 30px rgba(11, 37, 69, 0.08)',
  nav: '0 1px 0 #e2e8f0',
  button: '0 2px 8px rgba(18, 180, 245, 0.35)',
};

export const gradients = {
  brandLinear: 'linear-gradient(135deg, #001026 0%, #0b2545 60%, #1b4f91 100%)',
  heroOverlay: 'linear-gradient(135deg, rgba(0,16,38,0.92) 0%, rgba(11,37,69,0.80) 100%)',
  accentGlow: 'linear-gradient(90deg, #12b4f5 0%, #29bcfe 100%)',
};

export default { colors, typography, spacing, borderRadius, shadows, gradients };
