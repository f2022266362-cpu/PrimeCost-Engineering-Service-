import React, { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({ children, className = "", style = {} }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (domRef.current) {
            observer.unobserve(domRef.current);
          }
        }
      });
    }, { threshold: 0, rootMargin: '0px 0px -40px 0px' });

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`${className} scroll-reveal ${isVisible ? 'is-visible' : ''}`}
      style={style}
    >
      {children}
    </div>
  );
}
