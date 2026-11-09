import React, { ReactNode, useEffect, useRef, useState } from 'react';

interface FadeInSectionProps {
  children: ReactNode;
  className?: string;
}

export const FadeInSection = ({ children, className = '' }: FadeInSectionProps) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = domRef.current;
    if (!currentRef) return;
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '-20px', threshold: 0.05 });
    
    observer.observe(currentRef);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`fade-in-section ${isVisible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
};
