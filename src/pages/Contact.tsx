import { useState, type FormEvent } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import ScrollReveal from '../components/ui/ScrollReveal';
import { usePageTitle } from '../hooks/useScrollReveal';
import './Pages.css';

interface FormData {
  firstName: string; lastName: string; email: string;
  phone: string; company: string; service: string; message: string;
}
interface Errors { [key: string]: string; }

const SERVICES = [
  'Manpower Supply', 'MEP & Technical Services', 'Civil & Maintenance Works',
  'Cleaning & Soft Services', 'Security Services', 'Special Services',
  'Other / General Enquiry',
];

const CONTACT_DETAILS = [
  { Icon: Phone, label: 'Phone', val: '+971 0565566039', href: 'tel:+9710565566039' },
  { Icon: MessageCircle, label: 'WhatsApp', val: 'Message us on WhatsApp', href: 'https://wa.me/9710565566039' },
  { Icon: Mail, label: 'Email', val: 'info@lamiyaalnujoom.com', href: 'mailto:info@lamiyaalnujoom.com' },
  { Icon: MapPin, label: 'Office', val: '401 NGI Building, Port Saeed, Deira, Dubai, UAE', href: '#map' },
  { Icon: Clock, label: 'Hours', val: '24/7 Emergency | Office: Sun–Thu 8am–6pm', href: undefined },
];

export default function Contact() {
  usePageTitle('Contact Us');

  const [formData, setFormData] = useState<FormData>({
    firstName: '', lastName: '', email: '', phone: '', company: '', service: '', message: '',
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);

  const validate = (): boolean => {
    const e: Errors = {};
    if (!formData.firstName.trim()) e.firstName = 'First name is required.';
    if (!formData.lastName.trim()) e.lastName = 'Last name is required.';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      e.email = 'A valid email address is required.';
    if (!formData.service) e.service = 'Please select a service.';
    if (!formData.message.trim() || formData.message.length < 10)
      e.message = 'Please provide a message of at least 10 characters.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => { const c = { ...prev }; delete c[name]; return c; });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setSendError(null);
    try {
      const res = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Something went wrong.');
      setSubmitted(true);
      setFormData({ firstName: '', lastName: '', email: '', phone: '', company: '', service: '', message: '' });
    } catch (err: unknown) {
      setSendError(err instanceof Error ? err.message : 'Failed to send. Please try again or contact us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main>
      {/* Hero */}
      <section className="page-hero" aria-label="Contact hero">
        <div className="container">
          <div className="page-hero-inner fade-up">
            <span className="label-caps page-hero-overline">Contact Us</span>
            <h1>Let's Discuss Your Requirements</h1>
            <p>
              Reach out to our team and receive a tailored quotation within 24 hours.
              We're available 24/7 for emergency technical support.
            </p>
          </div>
        </div>
      </section>

      {/* Contact body */}
      <section className="contact-layout section" aria-labelledby="contact-heading">
        <div className="container">
          <div className="contact-grid">
            {/* Info panel */}
            <ScrollReveal className="contact-info fade-up">
              <h2 id="contact-heading">Get in Touch</h2>
              <p>
                Whether you need a long-term facility management partner or urgent
                technical support, our team is ready to help. Fill in the form or
                use any of the contact methods below.
              </p>

              <div className="contact-details">
                {CONTACT_DETAILS.map(({ Icon, label, val, href }) => (
                  <div key={label} className="contact-detail">
                    <div className="contact-detail-icon"><Icon size={18} strokeWidth={1.75} /></div>
                    <div>
                      <h4>{label}</h4>
                      {href
                        ? <p><a href={href} style={{ color: 'var(--clr-secondary)', textDecoration: 'none' }}>{val}</a></p>
                        : <p>{val}</p>
                      }
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                <a href="tel:+9710565566039" className="btn btn-primary" style={{ justifyContent: 'center' }}>
                  <Phone size={16} /> Call Us Now
                </a>
                <a
                  href="https://wa.me/9710565566039" target="_blank" rel="noopener noreferrer"
                  className="btn" style={{ background: '#25d366', color: '#fff', justifyContent: 'center', border: 'none' }}
                >
                  <MessageCircle size={16} /> WhatsApp
                </a>
              </div>
            </ScrollReveal>

            {/* Form */}
            <ScrollReveal className="contact-form-card fade-up delay-200">
              <h2>Request a Quote</h2>
              <p>Complete the form below and we'll get back to you within 24 hours.</p>

              {submitted && (
                <div className="form-success" role="alert">
                  ✓ Thank you! Your enquiry has been received. Our team will contact you within 24 hours.
                </div>
              )}

              {sendError && (
                <div className="form-error-banner" role="alert">
                  ⚠ {sendError}
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
                <div className="form-grid">
                  <div className={`form-field${errors.firstName ? ' error' : ''}`}>
                    <label htmlFor="cf-firstName">First Name *</label>
                    <input id="cf-firstName" name="firstName" type="text" placeholder="Ahmed"
                      value={formData.firstName} onChange={handleChange} autoComplete="given-name" />
                    {errors.firstName && <span className="form-error-msg">{errors.firstName}</span>}
                  </div>

                  <div className={`form-field${errors.lastName ? ' error' : ''}`}>
                    <label htmlFor="cf-lastName">Last Name *</label>
                    <input id="cf-lastName" name="lastName" type="text" placeholder="Al Rashidi"
                      value={formData.lastName} onChange={handleChange} autoComplete="family-name" />
                    {errors.lastName && <span className="form-error-msg">{errors.lastName}</span>}
                  </div>

                  <div className={`form-field${errors.email ? ' error' : ''}`}>
                    <label htmlFor="cf-email">Email Address *</label>
                    <input id="cf-email" name="email" type="email" placeholder="ahmed@company.com"
                      value={formData.email} onChange={handleChange} autoComplete="email" />
                    {errors.email && <span className="form-error-msg">{errors.email}</span>}
                  </div>

                  <div className="form-field">
                    <label htmlFor="cf-phone">Phone Number</label>
                    <input id="cf-phone" name="phone" type="tel" placeholder="+971 56 9326544"
                      value={formData.phone} onChange={handleChange} autoComplete="tel" />
                  </div>

                  <div className="form-field">
                    <label htmlFor="cf-company">Company Name</label>
                    <input id="cf-company" name="company" type="text" placeholder="Your Company LLC"
                      value={formData.company} onChange={handleChange} autoComplete="organization" />
                  </div>

                  <div className={`form-field${errors.service ? ' error' : ''}`}>
                    <label htmlFor="cf-service">Service Required *</label>
                    <select id="cf-service" name="service" value={formData.service} onChange={handleChange}>
                      <option value="">Select a service...</option>
                      {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    {errors.service && <span className="form-error-msg">{errors.service}</span>}
                  </div>

                  <div className={`form-field full${errors.message ? ' error' : ''}`}>
                    <label htmlFor="cf-message">Message *</label>
                    <textarea id="cf-message" name="message"
                      placeholder="Please describe your requirements, project scope, and preferred timeline..."
                      value={formData.message} onChange={handleChange} />
                    {errors.message && <span className="form-error-msg">{errors.message}</span>}
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center', padding: '0.875rem 1.75rem', fontSize: '1rem' }}
                  disabled={submitting}
                  aria-busy={submitting}
                >
                  {submitting ? 'Sending…' : 'Send Enquiry'}
                </button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Map */}
      <section id="map" className="map-embed" aria-label="Office location map">
        <div className="container">
          <ScrollReveal className="section-heading fade-up">
            <span className="label-caps overline">Find Us</span>
            <h2 className="headline-md">Our Office</h2>
            <p className="body-md">401 NGI Building, Port Saeed, Deira, Dubai, UAE</p>
          </ScrollReveal>
          <div className="map-wrap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.6!2d55.3307!3d25.2667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d7a0d7b1c9b%3A0x1e2f3a4b5c6d7e8f!2sPort%20Saeed%2C%20Deira%2C%20Dubai!5e0!3m2!1sen!2sae!4v1234567890"
              title="Lamiya Al Nujoom office location — Port Saeed, Deira, Dubai"
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
