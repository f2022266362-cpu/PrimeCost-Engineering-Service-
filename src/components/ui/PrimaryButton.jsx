import React from 'react';

export default function PrimaryButton({
  children,
  onClick = null,
  type = 'button',
  variant = 'primary', // 'primary', 'secondary', 'outline'
  className = "",
  style = {},
  icon = null
}) {
  let buttonStyle = {
    padding: '0.8rem 2rem',
    borderRadius: '12px',
    fontWeight: '700',
    fontSize: '0.9rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    fontFamily: "'Outfit', sans-serif",
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
    cursor: 'pointer',
    border: 'none',
    boxShadow: '0 4px 12px rgba(15, 36, 70, 0.08)'
  };

  if (variant === 'primary') {
    buttonStyle = {
      ...buttonStyle,
      backgroundColor: '#0F2446',
      color: '#ffffff',
      border: '2px solid transparent'
    };
  } else if (variant === 'secondary') {
    buttonStyle = {
      ...buttonStyle,
      backgroundColor: '#C89A45',
      color: '#0F2446',
      border: '2px solid transparent'
    };
  } else {
    // outline
    buttonStyle = {
      ...buttonStyle,
      backgroundColor: 'transparent',
      color: '#0F2446',
      border: '2px solid #0F2446'
    };
  }

  // Active styles and hover shadows can be managed via CSS classes
  const classes = `btn-shine-effect ${variant === 'primary' ? 'primary-glow-hover' : ''} ${className}`;

  return (
    <button
      type={type}
      onClick={onClick}
      style={{ ...buttonStyle, ...style }}
      className={classes}
    >
      {children}
      {icon && <span className="arrow-slide-hover">{icon}</span>}
    </button>
  );
}
