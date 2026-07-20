import { useEffect, useRef, type JSX, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  threshold?: number;
  tag?: keyof JSX.IntrinsicElements;
}

/**
 * <ScrollReveal> — wraps children in a div that gains `.is-visible`
 * when scrolled into view. Works with the .fade-up / .fade-in CSS classes.
 */
export default function ScrollReveal({
  children,
  className = '',
  style,
  threshold = 0.05,
  tag: Tag = 'div',
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If element is in or near viewport on mount, reveal immediately
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight + 100) {
      el.classList.add('is-visible');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin: '0px 0px 100px 0px' }
    );

    observer.observe(el);

    // Safety fallback: reveal after 500ms to guarantee no element stays hidden (opacity: 0)
    const fallbackTimer = setTimeout(() => {
      if (el && !el.classList.contains('is-visible')) {
        el.classList.add('is-visible');
      }
    }, 500);

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, [threshold]);

  return (
    // @ts-expect-error dynamic tag
    <Tag ref={ref} className={className} style={{ height: '100%', ...style }}>
      {children}
    </Tag>
  );
}
