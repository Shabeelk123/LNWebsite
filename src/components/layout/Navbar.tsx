import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  Users, Wrench, HardHat, Sparkles, ShieldCheck, Star,
  ChevronDown, Phone
} from 'lucide-react';
import logo from '../../assets/logo.png';
import './Navbar.css';

const serviceLinks = [
  { to: '/services/manpower-supply', label: 'Manpower Supply', Icon: Users },
  { to: '/services/mep-technical-services', label: 'MEP & Technical', Icon: Wrench },
  { to: '/services/civil-maintenance', label: 'Civil Maintenance', Icon: HardHat },
  { to: '/services/cleaning-soft-services', label: 'Cleaning & Soft', Icon: Sparkles },
  { to: '/services/security-services', label: 'Security Services', Icon: ShieldCheck },
  { to: '/services/special-services', label: 'Special Services', Icon: Star },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { pathname } = useLocation();

  // Close mobile menu (and collapse services) on route change
  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  // Also collapse services when menu closes
  useEffect(() => {
    if (!menuOpen) setServicesOpen(false);
  }, [menuOpen]);
  // Scroll-aware background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isServicesActive = pathname.startsWith('/services');

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="container">
        <nav className="navbar-inner" aria-label="Main navigation">
          {/* Logo */}
          <Link to="/" className="navbar-logo" aria-label="Lamiya Al Nujoom — Home">
            <img src={logo} alt="Lamiya Al Nujoom" className="navbar-logo-img" />
            <div className="logo-text">
              <span className="logo-text-main">Lamiya Al Nujoom</span>
              <span className="logo-text-sub">Technical Services</span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="navbar-links">
            <NavLink to="/" end className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
              About
            </NavLink>

            {/* Services dropdown */}
            <div className={`nav-dropdown`}>
              <NavLink
                to="/services"
                className={`nav-link${isServicesActive ? ' active' : ''}`}
                style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
              >
                Services <ChevronDown size={14} />
              </NavLink>
              <div className="nav-dropdown-menu" role="menu">
                {serviceLinks.map(({ to, label, Icon }) => (
                  <NavLink
                    key={to}
                    to={to}
                    className={({ isActive }) => `nav-dropdown-item${isActive ? ' active' : ''}`}
                    role="menuitem"
                  >
                    <Icon size={14} />
                    {label}
                  </NavLink>
                ))}
              </div>
            </div>

            <NavLink to="/industries" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
              Industries
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
              Contact
            </NavLink>
          </div>

          {/* Desktop CTA */}
          <div className="navbar-cta">
            <Link to="/contact" className="btn btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.8125rem' }}>
              <Phone size={14} />
              Get a Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`navbar-toggle${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </nav>

        {/* Mobile menu */}
        <div className={`navbar-mobile${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
          <NavLink to="/" end className={({ isActive }) => `mobile-nav-link${isActive ? ' active' : ''}`}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => `mobile-nav-link${isActive ? ' active' : ''}`}>About</NavLink>

          {/* Services — collapsible */}
          <button
            className={`mobile-nav-link mobile-services-toggle${isServicesActive ? ' active' : ''}`}
            onClick={() => setServicesOpen(v => !v)}
            aria-expanded={servicesOpen}
          >
            Services
            <ChevronDown
              size={15}
              style={{ marginLeft: 'auto', transition: 'transform 0.25s', transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
            />
          </button>

          {servicesOpen && (
            <div className="mobile-services-section" role="list">
              <div className="mobile-services-grid">
                {serviceLinks.map(({ to, label }) => (
                  <NavLink
                    key={to}
                    to={to}
                    className={({ isActive }) => `mobile-service-link${isActive ? ' active' : ''}`}
                    role="listitem"
                  >
                    {label}
                  </NavLink>
                ))}
              </div>
            </div>
          )}

          <NavLink to="/industries" className={({ isActive }) => `mobile-nav-link${isActive ? ' active' : ''}`}>Industries</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `mobile-nav-link${isActive ? ' active' : ''}`}>Contact</NavLink>
          <Link to="/contact" className="btn btn-primary" style={{ marginTop: '0.75rem', justifyContent: 'center' }}>
            <Phone size={14} /> Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
