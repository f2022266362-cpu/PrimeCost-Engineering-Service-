import React from 'react';
import { MapPin, DollarSign, Calendar, Clock, Tag } from 'lucide-react';
import GlassCard from './GlassCard';

export default function ProjectCard({ project, onViewDetails }) {
  const {
    name,
    location,
    category,
    year,
    area,
    status,
    constructionCost,
    duration,
    industry,
    client,
    servicesUsed,
    image
  } = project;

  return (
    <GlassCard 
      hoverLift={true}
      style={{ overflow: 'hidden', padding: 0, display: 'flex', flexDirection: 'column' }}
      className="project-card-glass"
    >
      {/* Project Image Panel */}
      <div 
        className="image-zoom-container"
        style={{ position: 'relative', height: '240px', width: '100%', overflow: 'hidden' }}
      >
        <div 
          className="image-zoom-img"
          style={{ 
            backgroundImage: `url(${image})`, 
            height: '100%', 
            width: '100%', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center' 
          }} 
        />
        <div 
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            background: 'linear-gradient(to bottom, rgba(15, 36, 70, 0) 50%, rgba(15, 36, 70, 0.8) 100%)',
            zIndex: 1
          }} 
        />
        
        {/* Category Tag on Image */}
        <span 
          style={{ 
            position: 'absolute', 
            top: '1rem', 
            left: '1rem', 
            backgroundColor: '#C89A45', 
            color: '#0F2446', 
            padding: '0.35rem 0.85rem', 
            borderRadius: '999px', 
            fontSize: '0.72rem', 
            fontWeight: '700', 
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            zIndex: 2,
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)'
          }}
        >
          {category}
        </span>

        {/* Location Badge on Image */}
        <span 
          style={{ 
            position: 'absolute', 
            bottom: '1rem', 
            left: '1rem', 
            color: '#ffffff', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.25rem', 
            fontSize: '0.8rem', 
            fontWeight: '600',
            zIndex: 2
          }}
        >
          <MapPin size={14} style={{ color: '#C89A45' }} />
          {location}
        </span>
      </div>

      {/* Project Body details */}
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1, gap: '0.75rem' }}>
        <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: '#0F2446', fontFamily: "'Outfit', sans-serif" }}>
          {name}
        </h3>

        {/* Project Metrics Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem', fontSize: '0.82rem', color: '#475569', margin: '0.5rem 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <Calendar size={12} style={{ color: '#C89A45' }} />
            <span><strong>Completed:</strong> {year}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <Clock size={12} style={{ color: '#C89A45' }} />
            <span><strong>Duration:</strong> {duration}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <DollarSign size={12} style={{ color: '#C89A45' }} />
            <span><strong>Cost:</strong> {constructionCost}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <Tag size={12} style={{ color: '#C89A45' }} />
            <span><strong>Area:</strong> {area}</span>
          </div>
        </div>

        <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: '1.5' }}>
          <strong>Client:</strong> {client} <br />
          <strong>Industry:</strong> {industry}
        </p>

        {/* Services Used list */}
        <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap', marginTop: '0.25rem' }}>
          {servicesUsed.map((srv, idx) => (
            <span 
              key={idx} 
              style={{ 
                fontSize: '0.68rem', 
                backgroundColor: 'rgba(15, 36, 70, 0.05)', 
                color: '#0F2446', 
                padding: '0.2rem 0.5rem', 
                borderRadius: '4px',
                fontWeight: '600'
              }}
            >
              {srv}
            </span>
          ))}
        </div>

        {/* View case study trigger */}
        <button 
          onClick={onViewDetails} 
          style={{ 
            marginTop: 'auto', 
            alignSelf: 'flex-start',
            backgroundColor: 'transparent',
            border: 'none',
            color: '#0F2446',
            fontWeight: '700',
            fontSize: '0.85rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            cursor: 'pointer',
            padding: '0.5rem 0'
          }}
          className="arrow-slide-hover"
        >
          <span>View Case Study</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>
    </GlassCard>
  );
}
