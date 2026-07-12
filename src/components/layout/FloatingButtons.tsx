import { MessageCircle, Phone } from 'lucide-react';
import './FloatingButtons.css';

export default function FloatingButtons() {
  return (
    <div className="floating-btns" aria-label="Quick contact buttons">
      {/* WhatsApp */}
      <a
        href="https://wa.me/971569326544?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20technical%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn floating-wa"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={22} />
        <span className="floating-label">WhatsApp</span>
      </a>

      {/* Call */}
      <a
        href="tel:+971569326544"
        className="floating-btn floating-call"
        aria-label="Call us now"
      >
        <Phone size={22} />
        <span className="floating-label">Call Now</span>
      </a>
    </div>
  );
}
