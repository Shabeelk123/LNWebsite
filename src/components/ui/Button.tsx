import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

interface ButtonProps {
  to?: string;
  href?: string;
  variant?: 'primary' | 'outline' | 'outline-navy';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  ariaLabel?: string;
}

const sizeMap = {
  sm: { padding: '0.5rem 1.25rem', fontSize: '0.8125rem' },
  md: { padding: '0.75rem 1.75rem', fontSize: '0.875rem' },
  lg: { padding: '1rem 2.5rem', fontSize: '1rem' },
};

export default function Button({
  to, href, variant = 'primary', size = 'md',
  children, onClick, type = 'button', disabled,
  className = '', style, ariaLabel,
}: ButtonProps) {
  const cls = `btn btn-${variant} ${className}`.trim();
  const sz = sizeMap[size];
  const combinedStyle = { ...sz, ...style };

  if (to) {
    return (
      <Link to={to} className={cls} style={combinedStyle} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={cls} style={combinedStyle} aria-label={ariaLabel}
         target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={cls} style={combinedStyle}
            onClick={onClick} disabled={disabled} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
