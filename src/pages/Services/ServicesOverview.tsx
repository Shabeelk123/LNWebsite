import ServiceCard from '../../components/ui/ServiceCard';
import ScrollReveal from '../../components/ui/ScrollReveal';
import { usePageTitle } from '../../hooks/useScrollReveal';
import services from '../../data/services';
import '../Pages.css';

export default function ServicesOverview() {
  usePageTitle('Our Services');

  return (
    <main>
      <section className="page-hero" aria-label="Services hero">
        <div className="container">
          <div className="page-hero-inner fade-up">
            <span className="label-caps page-hero-overline">Our Services</span>
            <h1>Comprehensive Technical Services for the UAE</h1>
            <p>
              Six fully integrated service lines, each backed by certified
              professionals and managed to the highest international standards —
              delivered by a single trusted partner across all Emirates.
            </p>
          </div>
        </div>
      </section>

      <section className="services-overview section" aria-labelledby="services-heading">
        <div className="container">
          <ScrollReveal className="section-heading fade-up">
            <span className="label-caps overline">Six Service Lines</span>
            <h2 id="services-heading" className="headline-md">Everything Your Facility Needs</h2>
            <p className="body-md">
              From manpower to MEP, civil maintenance to security — we deliver every
              discipline under one contract, with one point of accountability.
            </p>
          </ScrollReveal>
          <div className="services-overview-grid">
            {services.map((service, i) => (
              <ScrollReveal key={service.slug} className={`fade-up delay-${(i % 3) * 100 + 100}`}>
                <ServiceCard service={service} index={0} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
