import React from 'react';
import GlassCard from './GlassCard';

export default function TimelineItem({ year, title, desc, index }) {
  const isEven = index % 2 === 0;
  
  return (
    <div 
      style={{
        display: 'flex',
        width: '100%',
        margin: '1.5rem 0',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      className="timeline-item-container"
    >
      {/* Central Connector Circle */}
      <div 
        style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          backgroundColor: '#0F2446',
          border: '4px solid #C89A45',
          boxShadow: '0 0 10px rgba(200, 154, 69, 0.4)',
          zIndex: 5
        }}
      />

      {/* Left Column Content */}
      <div style={{ width: '45%', paddingRight: '2rem', textAlign: 'right' }}>
        {isEven ? (
          <GlassCard style={{ padding: '1.5rem', textAlign: 'right' }}>
            <span style={{ fontSize: '1.25rem', fontWeight: '800', color: '#C89A45', display: 'block', marginBottom: '0.25rem' }}>{year}</span>
            <h4 style={{ fontSize: '1.15rem', color: '#0F2446', fontWeight: '700', marginBottom: '0.5rem' }}>{title}</h4>
            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>{desc}</p>
          </GlassCard>
        ) : (
          <div style={{ opacity: 0.1, pointerEvents: 'none' }} />
        )}
      </div>

      {/* Spacing for Line */}
      <div style={{ width: '10%' }} />

      {/* Right Column Content */}
      <div style={{ width: '45%', paddingLeft: '2rem', textAlign: 'left' }}>
        {!isEven ? (
          <GlassCard style={{ padding: '1.5rem', textAlign: 'left' }}>
            <span style={{ fontSize: '1.25rem', fontWeight: '800', color: '#C89A45', display: 'block', marginBottom: '0.25rem' }}>{year}</span>
            <h4 style={{ fontSize: '1.15rem', color: '#0F2446', fontWeight: '700', marginBottom: '0.5rem' }}>{title}</h4>
            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>{desc}</p>
          </GlassCard>
        ) : (
          <div style={{ opacity: 0.1, pointerEvents: 'none' }} />
        )}
      </div>
    </div>
  );
}
