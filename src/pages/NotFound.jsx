import React from 'react';
import { Link } from 'react-router-dom';
import SchemaManager from '../components/SchemaManager';

// Real 404 page (previously every unknown URL showed the homepage,
// which Google treats as duplicate "soft 404" content).
export default function NotFound() {
  return (
    <div style={{ paddingTop: '9rem', paddingBottom: '6rem', textAlign: 'center', minHeight: '70vh' }}>
      <SchemaManager
        title="Page Not Found"
        description="The page you are looking for does not exist."
        noindex
      />
      <div className="container">
        <h1 style={{ fontSize: '2.4rem', color: '#0f172a', marginBottom: '1rem' }}>Page not found</h1>
        <p style={{ color: '#475569', marginBottom: '2rem' }}>
          This page may have moved. Try one of these instead:
        </p>
        <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/">Home</Link>
          <Link to="/services">All Services</Link>
          <Link to="/services/structural-engineering">Structural Engineering</Link>
          <Link to="/blog">Blog</Link>
        </div>
      </div>
    </div>
  );
}
