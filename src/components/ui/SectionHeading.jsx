import React from 'react';

export default function SectionHeading({
  tag = "",
  title,
  subtitle = "",
  align = "center", // "left", "center"
  style = {}
}) {
  const isCenter = align === 'center';
  
  return (
    <div 
      style={{ 
        maxWidth: '750px', 
        marginLeft: isCenter ? 'auto' : '0', 
        marginRight: isCenter ? 'auto' : '0', 
        textAlign: align,
        marginBottom: '3rem',
        ...style 
      }}
    >
      {tag && (
        <span 
          style={{ 
            fontSize: '0.82rem', 
            fontWeight: '700', 
            color: '#C89A45', 
            letterSpacing: '0.15em', 
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '0.5rem'
          }}
        >
          {tag}
        </span>
      )}
      <h2 
        style={{ 
          fontSize: '2.5rem', 
          fontWeight: '800', 
          color: '#0F2446', 
          fontFamily: "'Outfit', sans-serif",
          lineHeight: '1.2',
          letterSpacing: '-0.02em'
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p 
          style={{ 
            fontSize: '1.05rem', 
            color: '#64748b', 
            marginTop: '0.75rem',
            lineHeight: '1.6'
          }}
        >
          {subtitle}
        </p>
      )}
      <div 
        style={{ 
          width: '50px', 
          height: '2px', 
          backgroundColor: '#C89A45', 
          marginTop: '1.25rem',
          marginLeft: isCenter ? 'auto' : '0',
          marginRight: isCenter ? 'auto' : '0'
        }} 
      />
    </div>
  );
}
