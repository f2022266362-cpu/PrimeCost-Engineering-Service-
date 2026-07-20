import React from 'react';

export default function Badge({ children, variant = 'primary', style = {}, className = "" }) {
  const getBadgeStyle = () => {
    switch (variant) {
      case 'gold':
        return {
          backgroundColor: 'rgba(200, 154, 69, 0.12)',
          color: '#C89A45',
          border: '1px solid rgba(200, 154, 69, 0.35)'
        };
      case 'dark':
        return {
          backgroundColor: 'rgba(15, 36, 70, 0.08)',
          color: '#0F2446',
          border: '1px solid rgba(15, 36, 70, 0.15)'
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
          color: '#1b3b6f',
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
        borderRadius: '999px',
        fontSize: '0.72rem',
        fontWeight: '700',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        fontFamily: "'Outfit', sans-serif",
        ...getBadgeStyle(),
        ...style
      }}
    >
      {children}
    </span>
  );
}
