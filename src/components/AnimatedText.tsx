import React, { useEffect, useRef } from 'react';

interface AnimatedTextProps {
  text?: string;
  className?: string;
  delay?: number;
  highlight?: boolean;
  highlightWords?: string[];
  children?: React.ReactNode;
  as?: React.ElementType;
}

/**
 * Lightweight reveal-on-scroll wrapper.
 * Renders text as a single node (no per-word spans) for much cheaper DOM.
 * If `highlightWords` are provided, only those substrings are wrapped in a gradient span.
 */
const AnimatedText: React.FC<AnimatedTextProps> = ({
  text = '',
  className = '',
  delay = 0,
  highlight = false,
  highlightWords = [],
  children,
  as: Component = 'div',
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          io.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const renderText = () => {
    if (!text) return null;
    if (!highlight || highlightWords.length === 0) return text;
    // Split by highlight terms while preserving them.
    const escaped = highlightWords
      .filter(Boolean)
      .map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    if (escaped.length === 0) return text;
    const re = new RegExp(`(${escaped.join('|')})`, 'gi');
    const parts = text.split(re);
    return parts.map((p, i) =>
      re.test(p) ? (
        <span key={i} className="text-gradient font-semibold">
          {p}
        </span>
      ) : (
        <React.Fragment key={i}>{p}</React.Fragment>
      )
    );
  };

  return (
    <Component className={`${className} font-sans`} ref={ref as never}>
      <div className="reveal" style={{ transitionDelay: `${delay}ms` }}>
        {renderText()}
        {children}
      </div>
    </Component>
  );
};

export default AnimatedText;
