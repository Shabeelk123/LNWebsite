import { Link } from 'react-router-dom';
import { ChevronRight, CheckCircle, Phone } from 'lucide-react';
import ServiceCard from '../../components/ui/ServiceCard';
import ScrollReveal from '../../components/ui/ScrollReveal';
import { usePageTitle } from '../../hooks/useScrollReveal';
import services from '../../data/services';
import type { ServiceItem } from '../../data/services';
import './ServiceDetail.css';

const serviceImages: Record<string, string> = {
  'manpower-supply':        'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80&auto=format&fit=crop',
  'mep-technical-services': 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=700&q=80&auto=format&fit=crop',
  'civil-maintenance':      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80&auto=format&fit=crop',
  'cleaning-soft-services': 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=700&q=80&auto=format&fit=crop',
  'security-services':      'https://images.unsplash.com/photo-1558905586-b023f0806005?w=700&q=80&auto=format&fit=crop',
  'special-services':       'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=700&q=80&auto=format&fit=crop',
};

interface Props { service: ServiceItem; }

export default function ServiceDetailTemplate({ service }: Props) {
  usePageTitle(service.title);

  const imgSrc  = serviceImages[service.slug] ?? serviceImages['manpower-supply'];
  const related = services.filter(s => s.slug !== service.slug).slice(0, 3);

  return (
    <main>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="service-hero" aria-label={`${service.title} overview`}>
        <div className="container">
          <div className="service-hero-inner">
            <nav className="service-hero-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span>›</span>
              <Link to="/services">Services</Link>
              <span>›</span>
              <span style={{ color: 'rgba(255,255,255,0.85)' }}>{service.title}</span>
            </nav>
            <span className="label-caps service-hero-label">{service.heroLabel}</span>
            <h1 className="fade-up">{service.tagline}</h1>
            <p className="fade-up delay-100">{service.summary}</p>
          </div>
        </div>
      </section>

      {/* ── Detail body ───────────────────────────────────────────── */}
      <section className="service-body">
        <div className="container">
          <div className="service-body-grid">
            {/* Left — text */}
            <ScrollReveal className="service-body-content fade-up">
              <h2>What's Included</h2>

              <div className="service-bullets">
                {service.bullets.map(b => (
                  <div key={b} className="service-bullet">
                    <CheckCircle size={18} strokeWidth={2} />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              <div className="service-sub-categories">
                {service.subCategories.map(cat => (
                  <div key={cat.label} className="service-sub-category">
                    <h3>{cat.label}</h3>
                    <div className="service-sub-items">
                      {cat.items.map(item => (
                        <span key={item} className="service-sub-badge">
                          <CheckCircle size={12} />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/contact" className="btn btn-outline-navy">
                <Phone size={16} /> {service.ctaText}
              </Link>
            </ScrollReveal>

            {/* Right — image + CTA card */}
            <ScrollReveal className="service-body-visual fade-in delay-200">
              <div className="service-image-wrap">
                <img src={imgSrc} alt={service.imageAlt} loading="lazy" />
              </div>
              <div className="service-cta-card">
                <h3>Ready to Get Started?</h3>
                <p>
                  Our team is available 24/7 to discuss your requirements and
                  provide a tailored quotation within 24 hours.
                </p>
                <Link to="/contact" className="btn btn-primary">
                  <Phone size={16} /> Request a Quote
                </Link>
                <a href="https://wa.me/971588602934" target="_blank" rel="noopener noreferrer"
                   className="btn btn-outline">
                  WhatsApp Us
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Related services ──────────────────────────────────────── */}
      <section className="service-related" aria-labelledby="related-heading">
        <div className="container">
          <ScrollReveal className="section-heading fade-up">
            <span className="label-caps overline">Explore More</span>
            <h2 id="related-heading" className="headline-md">Related Services</h2>
          </ScrollReveal>
          <div className="service-related-grid">
            {related.map((s, i) => (
              <ScrollReveal key={s.slug} className={`fade-up delay-${(i + 1) * 100}`}>
                <ServiceCard service={s} index={0} />
              </ScrollReveal>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/services" className="btn btn-outline-navy">
              All Services <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
