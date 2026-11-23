import React from 'react';

export default function Badge({ children, variant = 'primary', style = {}, className = "" }) {
  const getBadgeStyle = () => {
    switch (variant) {
      case 'gold':
        return {
          backgroundColor: 'transparent',
          color: '#B13A0B',
          border: '1px solid rgba(255, 90, 31, 0.5)'
        };
      case 'dark':
        return {
          backgroundColor: 'rgba(11, 27, 43, 0.08)',
          color: '#0B1B2B',
          border: '1px solid rgba(11, 27, 43, 0.15)'
        };
      case 'success':
        return {
          backgroundColor: 'rgba(16, 185, 129, 0.12)',
          color: '#10b981',
          border: '1px solid rgba(16, 185, 129, 0.3)'
        };
      case 'primary':
      default:
        return {
          backgroundColor: 'rgba(27, 59, 111, 0.08)',
          color: '#1E3A55',
          border: '1px solid rgba(27, 59, 111, 0.15)'
        };
    }
  };

  return (
    <span
      className={`ui-badge ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.25rem 0.75rem',
        borderRadius: '0',
        fontSize: '0.72rem',
        fontWeight: '700',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        fontFamily: 'var(--font-mono)',
        ...getBadgeStyle(),
        ...style
      }}
    >
      {children}
    </span>
  );
}
