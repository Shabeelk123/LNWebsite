import { Link } from 'react-router-dom';
import {
  Award, Zap, Globe, Shield, CheckCircle,
  Users, Star, ChevronRight, Phone, ArrowRight
} from 'lucide-react';
import screen from '../assets/screen.webp';
import ServiceCard from '../components/ui/ServiceCard';
import ScrollReveal from '../components/ui/ScrollReveal';
import { usePageTitle } from '../hooks/useScrollReveal';
import services from '../data/services';
import home from '../assets/home.jpeg';
import './Home.css';

const trustItems = [
  { Icon: Award, title: 'Quality Assured', sub: 'Strict QA/QC Standards' },
  { Icon: Shield, title: 'SIRA Licensed', sub: 'Security Services' },
  { Icon: Globe, title: 'All Emirates', sub: 'Service Coverage' },
  { Icon: Users, title: '200+ Professionals', sub: 'Deployed Workforce' },
];

const whyItems = [
  {
    Icon: Award,
    title: 'Certified Expertise',
    desc: 'All technicians are fully trained and compliant with UAE safety regulations and international standards.',
  },
  {
    Icon: Zap,
    title: 'Fast Deployment',
    desc: 'Efficient mobilisation of skilled staff for projects of any scale within 48 hours across the Emirates.',
  },
  {
    Icon: CheckCircle,
    title: 'Transparent Pricing',
    desc: 'Competitive, clearly documented rates with no hidden costs — full clarity from quotation to invoice.',
  },
  {
    Icon: Globe,
    title: 'UAE-Wide Coverage',
    desc: 'Seamless service delivery across Dubai, Abu Dhabi, Sharjah, Ajman, and all other Emirates.',
  },
];

export default function Home() {
  usePageTitle('');   // base title only on home page

  return (
    <main>
      {/* ═══════════════════ HERO ═══════════════════════════════════ */}
      <section className="hero" aria-label="Hero">
        {/* High-Priority HTML Background Image */}
        <img
          src={home}
          alt="Lamiya Al Nujoom Technical Services UAE"
          className="hero-bg-img"
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
        <div className="hero-bg-overlay" />

        <div className="container">
          <div className="hero-grid">
            {/* Left content — animates immediately on load */}
            <div className="hero-content">
              <div className="hero-overline label-caps fade-up">
                <Star size={12} />
                Trusted Technical Partner in UAE
              </div>

              <h1 className="hero-title fade-up delay-100">
                Premier Technical<br />
                Services for the<br />
                <span>Modern UAE</span>
              </h1>

              <p className="hero-desc fade-up delay-200">
                {/* Desktop */}
                <span className="hero-desc-desktop">
                  Lamiya Al Nujoom provides world-class facility management and
                  skilled manpower supply for industrial, commercial, and residential
                  sectors across the United Arab Emirates.
                </span>
                {/* Mobile */}
                <span className="hero-desc-mobile">
                  Professional facility management and skilled manpower solutions
                  across the UAE for industrial, commercial, and residential projects.
                </span>
              </p>

              <div className="hero-actions fade-up delay-300">
                <Link to="/contact" className="btn btn-primary">
                  <Phone size={16} /> Get a Free Quote
                </Link>
                <Link to="/services" className="btn btn-outline">
                  Explore Services <ArrowRight size={16} />
                </Link>
              </div>

              <div className="hero-stats fade-up delay-400">
                {[
                  { num: '5+', label: 'Years Experience' },
                  { num: '50+', label: 'Clients Served' },
                  { num: '7', label: 'Emirates Covered' },
                  { num: '24/7', label: 'Emergency Support' },
                ].map(({ num, label }) => (
                  <div key={label} className="hero-stat">
                    <div className="hero-stat-num">{num}</div>
                    <div className="hero-stat-label">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ TRUST BAR ══════════════════════════════ */}
      <div className="trust-bar" aria-label="Certifications and trust indicators">
        <div className="container">
          <div className="trust-bar-inner">
            {trustItems.map(({ Icon, title, sub }, i) => (
              <div key={title} style={{ display: 'contents' }}>
                <div className="trust-item">
                  <div className="trust-item-icon"><Icon size={18} strokeWidth={1.75} /></div>
                  <div className="trust-item-text">
                    <strong>{title}</strong>
                    <span>{sub}</span>
                  </div>
                </div>
                {i < trustItems.length - 1 && <div className="trust-divider" aria-hidden="true" />}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════ ABOUT SNAPSHOT ═════════════════════════ */}
      <section className="about-snapshot section" aria-labelledby="about-heading">
        <div className="container">
          <div className="about-grid">
            {/* Image */}
            <ScrollReveal className="about-image-wrap fade-in">
              <div className="about-image-main">
                <img
                  src={screen}
                  alt="Lamiya Al Nujoom team of facilities management professionals in Dubai"
                  loading="lazy"
                />
              </div>
              <div className="about-image-accent glass image-accent-desktop">
                <div className="about-image-accent-num">5+</div>
                <div className="about-image-accent-label">Years of UAE Market Excellence</div>
              </div>
            </ScrollReveal>

            {/* Content */}
            <ScrollReveal className="about-content fade-up delay-100">
              <span className="label-caps overline">Who We Are</span>
              <h2 id="about-heading" className="headline-md">
                A Decade of Technical Excellence in the UAE
              </h2>
              <p>
                With over a decade of specialised experience in the UAE market, Lamiya
                Al Nujoom Technical Services has become the trusted partner for
                infrastructure and facilities maintenance. We bridge the gap between
                technical complexity and operational simplicity through our highly
                trained workforce and rigorous quality standards.
              </p>

              <div className="about-features">
                {[
                  { Icon: Award, title: 'Certified Expertise', desc: 'All technicians fully trained and UAE-compliant.' },
                  { Icon: Zap, title: 'Fast Deployment', desc: 'Rapid mobilisation for projects of any scale.' },
                  { Icon: Shield, title: 'Quality Assured', desc: 'Rigorous QA/QC processes and measurable KPIs.' },
                  { Icon: Globe, title: 'UAE-Wide Reach', desc: 'Operations spanning all seven Emirates.' },
                ].map(({ Icon, title, desc }) => (
                  <div key={title} className="about-feature">
                    <div className="about-feature-icon"><Icon size={18} strokeWidth={1.75} /></div>
                    <div>
                      <h4>{title}</h4>
                      <p>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/about" className="btn btn-outline-navy">
                Learn Our Story <ChevronRight size={16} />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════ SERVICES GRID ══════════════════════════ */}
      <section className="services-grid-section section" aria-labelledby="services-heading">
        <div className="container">
          <ScrollReveal className="section-heading fade-up">
            <span className="label-caps overline">What We Offer</span>
            <h2 id="services-heading" className="headline-md">
              Comprehensive Technical Services
            </h2>
            <p className="body-md">
              Six integrated service lines, each backed by certified professionals and
              managed to the highest UAE standards — from a single provider.
            </p>
          </ScrollReveal>

          <div className="services-grid">
            {services.map((service, i) => (
              <ScrollReveal
                key={service.slug}
                className={`fade-up delay-${Math.min(i, 5) * 100}`}
              >
                <ServiceCard service={service} index={i} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="fade-up" style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/services" className="btn btn-outline-navy">
              View All Services <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════ WHY CHOOSE US ══════════════════════════ */}
      <section className="why-section section" aria-labelledby="why-heading">
        <div className="container">
          <div className="why-grid">
            {/* Content */}
            <ScrollReveal className="fade-up">
              <span className="label-caps" style={{ color: 'var(--clr-accent)', display: 'block', marginBottom: '0.875rem' }}>
                Why Choose Us
              </span>
              <h2 id="why-heading" className="headline-md" style={{ color: '#fff', marginBottom: '1.25rem' }}>
                Built on Trust. Driven by Precision.
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: '1.7', marginBottom: '2.5rem', fontSize: '1.0625rem' }}>
                From rapid deployment to rigorous quality management, every aspect
                of our operation is designed to give facility managers and procurement
                teams total confidence.
              </p>

              <div className="why-items">
                {whyItems.map(({ Icon, title, desc }) => (
                  <div key={title} className="why-item">
                    <div className="why-item-icon"><Icon size={20} strokeWidth={1.75} /></div>
                    <div>
                      <h4>{title}</h4>
                      <p>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════ CTA BANNER ══════════════════════════════ */}
      <section className="cta-banner section" aria-label="Call to action">
        <div className="container">
          <ScrollReveal className="cta-banner-inner fade-up">
            <div className="cta-banner-text">
              <h2>Ready to Optimise Your Facility Operations?</h2>
              <p>
                Connect with our experts and get a custom quote for your project
                within 24 hours. Available across all Emirates.
              </p>
            </div>
            <div className="cta-banner-actions">
              <Link to="/contact" className="btn btn-primary">
                <Phone size={16} /> Get a Quote
              </Link>
              <a
                href="https://wa.me/971569326544"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                WhatsApp Us
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
