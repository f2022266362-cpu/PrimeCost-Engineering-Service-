import React, { useState, useEffect, useRef } from 'react';
import GlassCard from './GlassCard';

export default function StatCard({ value, label, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  // Parse numeric target from value (e.g. "1,500" -> 1500, "26+" -> 26, "98%" -> 98)
  const targetNumber = parseInt(value.replace(/[^0-9]/g, ''), 10) || 0;
  // Get text suffix/prefix (like "+", "%", or "< ")
  const isPercent = value.includes('%');
  const isPlus = value.includes('+');
  const isLessThan = value.includes('<');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 800; // milliseconds
          const stepTime = Math.max(Math.floor(duration / targetNumber), 15);
          
          const timer = setInterval(() => {
            start += Math.ceil(targetNumber / (duration / stepTime));
            if (start >= targetNumber) {
              setCount(targetNumber);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, stepTime);
          
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = elementRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [targetNumber, hasAnimated]);

  const formattedCount = count.toLocaleString();

  return (
    <div ref={elementRef}>
      <GlassCard 
        style={{ 
          padding: '2rem', 
          textAlign: 'center', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '0.5rem', 
          justifyContent: 'center',
          alignItems: 'center' 
        }}
      >
        <h3 style={{ fontSize: '3rem', fontWeight: '800', color: '#0F2446', fontFamily: "'Outfit', sans-serif" }}>
          {isLessThan && '< '}
          {formattedCount}
          {isPercent && '%'}
          {isPlus && '+'}
          {suffix}
        </h3>
        <p style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          {label}
        </p>
      </GlassCard>
    </div>
  );
}
