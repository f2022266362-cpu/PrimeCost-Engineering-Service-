import React from 'react';

export default function GlassCard({ 
  children, 
  className = "", 
  style = {}, 
  hoverLift = true, 
  onClick = null,
  dark = false
}) {
  const baseClass = dark ? 'glass-panel-dark' : 'glass-panel';
  const liftClass = hoverLift ? 'glass-hover-lift' : '';
  
  return (
    <div
      onClick={onClick}
      className={`${baseClass} ${liftClass} ${className}`}
      style={{
        ...style,
        cursor: onClick ? 'pointer' : 'default'
      }}
    >
      {children}
    </div>
  );
}
