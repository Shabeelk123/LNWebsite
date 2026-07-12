import { Link } from 'react-router-dom';
import {
  Award, Target, Shield, Zap, Globe, Users
} from 'lucide-react';
import ScrollReveal from '../components/ui/ScrollReveal';
import { usePageTitle } from '../hooks/useScrollReveal';
import './Pages.css';

const MISSION_IMG = 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=700&q=80&auto=format&fit=crop';

const values = [
  { Icon: Award,  title: 'Quality First',       desc: 'ISO-aligned processes ensure every deliverable meets international standards, with no exceptions.' },
  { Icon: Shield, title: 'Integrity Always',     desc: 'Transparent pricing, honest timelines, and direct accountability from enquiry to project closure.' },
  { Icon: Target, title: 'Precision Execution', desc: 'Technical accuracy and attention to detail define every task — from a single repair to a multi-discipline AMC.' },
  { Icon: Users,  title: 'People-Centric',      desc: 'Our people are our product. We invest heavily in training, welfare, and career development for all staff.' },
  { Icon: Zap,    title: 'Agile Response',      desc: '48-hour mobilisation capability and a 24/7 emergency support line ensure we\'re always ready.' },
  { Icon: Globe,  title: 'UAE Specialists',     desc: 'A decade of operating across all seven Emirates gives us unmatched local market knowledge.' },
];

const stats = [
  { num: '15+',  label: 'Years of UAE Experience' },
  { num: '500+', label: 'Deployed Professionals' },
  { num: '200+', label: 'Corporate Clients' },
  { num: '98%',  label: 'Client Retention Rate' },
];

export default function About() {
  usePageTitle('About Us');

  return (
    <main>
      {/* Hero */}
      <section className="page-hero" aria-label="About hero">
        <div className="container">
          <div className="page-hero-inner fade-up">
            <span className="label-caps page-hero-overline">About Us</span>
            <h1>A Trusted Partner for Technical Excellence in the UAE</h1>
            <p>
              Since 2010, Lamiya Al Nujoom Technical Services has been bridging the
              gap between technical complexity and operational simplicity for
              facility managers across the Emirates.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="about-mission section">
        <div className="container">
          <div className="about-mission-grid">
            <ScrollReveal className="about-mission-image fade-in">
              <img
                src={MISSION_IMG}
                alt="Lamiya Al Nujoom technical team reviewing blueprints on a UAE construction site"
                loading="lazy"
              />
            </ScrollReveal>
            <ScrollReveal className="about-mission-content fade-up delay-100">
              <span className="label-caps" style={{ color: 'var(--clr-accent)', display: 'block', marginBottom: '0.875rem' }}>Our Mission</span>
              <h2 className="headline-md">Delivering Operational Certainty for UAE Businesses</h2>
              <p>
                We exist to give facility managers, operations directors, and
                procurement teams one thing: certainty. Certainty that the right
                people will be on site, that work will be done to specification,
                and that your facilities will remain fully operational.
              </p>
              <p>
                Founded in Dubai in 2010, we have grown from a specialist manpower
                provider into a full-service technical services company, serving
                over 200 corporate clients across hospitality, construction,
                healthcare, retail, and government sectors.
              </p>
              <p>
                Our workforce of 500+ professionals is our greatest asset. Every
                technician is screened, trained to UAE standards, and supported by
                experienced supervisors and a dedicated account management team.
              </p>
              <Link to="/contact" className="btn btn-outline-navy" style={{ marginTop: '0.5rem' }}>
                Partner With Us
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="about-team-stats" aria-label="Key statistics">
        <div className="container">
          <div className="about-stats-grid">
            {stats.map(({ num, label }, i) => (
              <ScrollReveal key={label} className={`about-stat fade-up delay-${i * 100}`}>
                <h3>{num}</h3>
                <p>{label}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* Values */}
      <section className="about-values section" aria-labelledby="values-heading">
        <div className="container">
          <ScrollReveal className="section-heading fade-up">
            <span className="label-caps overline">Our Values</span>
            <h2 id="values-heading" className="headline-md">What Drives Every Decision</h2>
            <p className="body-md">Six principles that guide our team's conduct on every project, every day.</p>
          </ScrollReveal>
          <div className="about-values-grid">
            {values.map(({ Icon, title, desc }, i) => (
              <ScrollReveal key={title} className={`value-card fade-up delay-${(i % 3) * 100 + 100}`}>
                <div className="value-card-icon"><Icon size={24} strokeWidth={1.75} /></div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner section" style={{ background: 'var(--clr-bg)' }}>
        <div className="container">
          <ScrollReveal className="cta-banner-inner fade-up">
            <div className="cta-banner-text">
              <h2>Ready to Experience the Difference?</h2>
              <p>Let our team show you what a truly reliable technical services partner looks like.</p>
            </div>
            <div className="cta-banner-actions">
              <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
              <Link to="/services" className="btn btn-outline">Our Services</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
