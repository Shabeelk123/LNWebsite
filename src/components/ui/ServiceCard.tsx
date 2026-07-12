import { Link } from 'react-router-dom';
import { ArrowRight, Users, Wrench, HardHat, Sparkles, ShieldCheck, Star } from 'lucide-react';
import type { ServiceItem } from '../../data/services';
import './ServiceCard.css';

const iconMap: Record<string, React.ElementType> = {
  Users, Wrench, HardHat, Sparkles, ShieldCheck, Star,
};

interface Props {
  service: ServiceItem;
  index?: number;
}

export default function ServiceCard({ service }: Props) {
  const Icon = iconMap[service.icon] ?? Users;

  return (
    <Link
      to={`/services/${service.slug}`}
      className="service-card"
      aria-label={`Learn more about ${service.title}`}
    >
      <div className="service-card-icon">
        <Icon size={26} strokeWidth={1.75} />
      </div>
      <h3 className="service-card-title">{service.title}</h3>
      <p className="service-card-desc">{service.tagline}</p>
      <div className="service-card-cta">
        Explore Service <ArrowRight size={14} />
      </div>
    </Link>
  );
}
