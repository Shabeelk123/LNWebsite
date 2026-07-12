import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Globe, Share2, AtSign } from 'lucide-react';
import './Footer.css';

const serviceLinks = [
  { to: '/services/manpower-supply', label: 'Manpower Supply' },
  { to: '/services/mep-technical-services', label: 'MEP & Technical' },
  { to: '/services/civil-maintenance', label: 'Civil Maintenance' },
  { to: '/services/cleaning-soft-services', label: 'Cleaning & Soft Services' },
  { to: '/services/security-services', label: 'Security Services' },
  { to: '/services/special-services', label: 'Special Services' },
];

const companyLinks = [
  { to: '/about', label: 'About Us' },
  { to: '/industries', label: 'Industries' },
  { to: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand column */}
          <div className="footer-brand">
            <Link to="/" className="logo-wrap" aria-label="Home">
              <div className="logo-icon-ft">LN</div>
              <div>
                <div className="brand-name">Lamiya Al Nujoom</div>
                <div className="brand-sub">Technical Services L.L.C.</div>
              </div>
            </Link>
            <p className="footer-tagline">
              Premier technical services provider in Dubai, UAE. Specialising in
              manpower supply and full-spectrum MEP maintenance since 2010.
            </p>
            <div className="footer-contact-items">
              <div className="footer-contact-item">
                <Phone size={14} />
                <span>+971 56 932 6544</span>
              </div>
              <div className="footer-contact-item">
                <Mail size={14} />
                <span>info@lamiyaalnujoom.ae</span>
              </div>
              <div className="footer-contact-item">
                <MapPin size={14} />
                <span>401 NGI Building, Port Saeed, Deira, Dubai, UAE</span>
              </div>
            </div>
            <div className="footer-socials">
              <a href="#" className="footer-social-btn" aria-label="Facebook"><Globe size={15} /></a>
              <a href="#" className="footer-social-btn" aria-label="Instagram"><AtSign size={15} /></a>
              <a href="#" className="footer-social-btn" aria-label="Twitter"><Share2 size={15} /></a>
            </div>
          </div>

          {/* Services column */}
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              {serviceLinks.map(({ to, label }) => (
                <li key={to}><Link to={to}>{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              {companyLinks.map(({ to, label }) => (
                <li key={to}><Link to={to}>{label}</Link></li>
              ))}
              <li><a href="#">Careers</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact column */}
          <div className="footer-col">
            <h4>Get in Touch</h4>
            <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.65)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
              Ready to discuss your requirements? Our team is available 24/7 for
              emergency technical support and project enquiries.
            </p>
            <Link to="/contact" className="btn btn-primary" style={{ justifyContent: 'center', width: '100%' }}>
              <Phone size={14} /> Request a Quote
            </Link>
            <a
              href="https://wa.me/971569326544"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ justifyContent: 'center', width: '100%', marginTop: '0.5rem' }}
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p>© 2026 Lamiya Al Nujoom Technical Services L.L.C. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
