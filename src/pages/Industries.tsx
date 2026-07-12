import ScrollReveal from '../components/ui/ScrollReveal';
import { usePageTitle } from '../hooks/useScrollReveal';
import educationImg from "../assets/education.png";
import './Pages.css';

const industries = [
  { title: 'Hospitality & Hotels', desc: 'End-to-end facility management, housekeeping, MEP maintenance, and manpower supply for 5-star hotels and hospitality groups across the UAE.', img: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80&auto=format&fit=crop', alt: 'Luxury hotel lobby in Dubai' },
  { title: 'Commercial Real Estate', desc: 'Comprehensive AMC contracts, reactive maintenance, and specialist cleaning for office towers, mixed-use developments, and retail malls.', img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80&auto=format&fit=crop', alt: 'Modern commercial office tower in Dubai' },
  { title: 'Construction & Infrastructure', desc: 'Skilled and semi-skilled labour supply, site cleaning, and post-construction services for major UAE construction and infrastructure projects.', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80&auto=format&fit=crop', alt: 'UAE construction site with cranes and workers' },
  { title: 'Healthcare & Clinics', desc: 'HACCP-compliant housekeeping, sterile environment maintenance, and facility management for hospitals, clinics, and medical centres.', img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80&auto=format&fit=crop', alt: 'Clean modern hospital corridor in the UAE' },
  { title: 'Retail & Shopping Centres', desc: 'High-frequency cleaning programmes, security staffing, MEP maintenance, and concierge services for retail environments and shopping malls.', img: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=600&q=80&auto=format&fit=crop', alt: 'Modern shopping mall interior in Dubai' },
  { title: 'Government & Public Sector', desc: 'Compliant manpower supply, facility management, and technical services for government buildings, public parks, and civic infrastructure.', img: 'https://images.unsplash.com/photo-1498307833015-e7b400441eb8?w=600&q=80&auto=format&fit=crop', alt: 'Government building in the UAE' },
  { title: 'Residential & Compounds', desc: 'Villa, apartment, and compound maintenance — housekeeping, landscaping, pool care, pest control, and on-call repair services.', img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80&auto=format&fit=crop', alt: 'Luxury residential compound in Dubai' },
  { title: 'Education', desc: 'Safe, hygienic school and university environments through scheduled cleaning, security staffing, and facility maintenance programmes.', img: educationImg, alt: 'Modern university campus in the UAE' },
  { title: 'Industrial & Manufacturing', desc: 'Heavy-duty industrial cleaning, skilled trades supply, and preventive maintenance for factories, warehouses, and logistics hubs.', img: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80&auto=format&fit=crop', alt: 'Industrial manufacturing facility in the UAE' },
];

export default function Industries() {
  usePageTitle('Industries We Serve');

  return (
    <main>
      <section className="page-hero" aria-label="Industries hero">
        <div className="container">
          <div className="page-hero-inner fade-up">
            <span className="label-caps page-hero-overline">Industries We Serve</span>
            <h1>Technical Expertise Across Every Sector</h1>
            <p>
              From five-star hotels to heavy industry, our teams adapt to the unique
              standards and compliance requirements of every environment.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--clr-bg)' }} aria-labelledby="industries-heading">
        <div className="container">
          <ScrollReveal className="section-heading fade-up">
            <span className="label-caps overline">Our Sectors</span>
            <h2 id="industries-heading" className="headline-md">Nine Sectors. One Trusted Partner.</h2>
            <p className="body-md">
              We bring sector-specific knowledge and compliant practices to every
              industry we operate in — backed by a team that understands your
              operational environment.
            </p>
          </ScrollReveal>

          <div className="industries-grid">
            {industries.map(({ title, desc, img, alt }, i) => (
              <ScrollReveal key={title} className={`industry-card fade-up delay-${(i % 3) * 100 + 100}`}>
                <div className="industry-card-img">
                  <img src={img} alt={alt} loading="lazy" />
                </div>
                <div className="industry-card-body">
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
