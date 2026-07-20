import { Link } from 'react-router-dom';
import type { ServiceItem } from '../../data/services';
import './ServiceCard.css';

interface Props {
  service: ServiceItem;
  index?: number;
}

export default function ServiceCard({ service }: Props) {
  return (
    <Link
      to={`/services/${service.slug}`}
      className="service-card-group"
      aria-label={`Learn more about ${service.title}`}
    >
      {/* Background Image */}
      {service.imageUrl && (
        <img
          src={service.imageUrl}
          alt={service.imageAlt || service.title}
          className="service-card-img"
          loading="lazy"
        />
      )}

      {/* Gradient Overlay */}
      <div className="service-card-overlay" />

      {/* Floating Glass Card */}
      <div className="service-card-glass-panel">
        <h3 className="service-card-title-v2">{service.title}</h3>
        <p className="service-card-desc-v2">{service.summary || service.tagline}</p>
      </div>
    </Link>
  );
}
