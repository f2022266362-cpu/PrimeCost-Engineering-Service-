import React, { useState, useEffect } from 'react';
import SchemaManager from '../components/SchemaManager';
import ScrollReveal from '../components/ScrollReveal';
import GlassCard from '../components/ui/GlassCard';
import PrimaryButton from '../components/ui/PrimaryButton';
import Badge from '../components/ui/Badge';
import { Mail, Phone, Award, ShieldCheck, CheckCircle2, Play } from 'lucide-react';

export default function Founder() {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const xOffset = ((clientX / window.innerWidth) - 0.5) * 10;
      const yOffset = ((clientY / window.innerHeight) - 0.5) * 10;
      setMouseOffset({ x: xOffset, y: yOffset });
    };

    if (window.innerWidth > 768) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div style={{ paddingTop: '7rem', minHeight: '100vh', background: '#f8fafc', position: 'relative', overflow: 'hidden' }}>
      <SchemaManager
        title="Meet Frank Moore | CEO & Founder of PRIMECOST"
        description="Learn about Frank Moore, CEO and Founder of PRIMECOST, with 20+ years of experience leading pre-construction and structural engineering."
      />

      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div className="container founder-page-grid" style={styles.container}>
          
          {/* Left: Founder Portrait */}
          <div style={styles.portraitCol}>
            <ScrollReveal variant="fade-right">
              <div style={styles.portraitContainer}>
                {/* Gold Accent Ring */}
                <div
                  style={{
                    ...styles.goldRing,
                    transform: `translate(${mouseOffset.x}px, ${mouseOffset.y}px)`
                  }}
                />
                <img
                  src="/ceo-frank.png"
                  alt="Frank Moore - CEO & Founder of PRIMECOST"
                  style={styles.portraitImg}
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Founder Info */}
          <div style={styles.infoCol}>
            <ScrollReveal variant="fade-left">
              <Badge variant="gold" style={{ marginBottom: '1rem' }}>OUR FOUNDER</Badge>
              <h1 style={styles.name}>Frank Moore</h1>
              <span style={styles.title}>CEO & Founder — 20+ Years Pre-Construction Leadership</span>

              {/* Personal Mission Quote */}
              <GlassCard hoverLift={false} style={styles.quoteCard}>
                <p style={styles.quoteText}>
                  "Our mission is to deliver safe, efficient, and innovative structural solutions that stand the test of time."
                </p>
                <span style={styles.signature} className="font-script">— Frank Moore</span>
              </GlassCard>

              <div style={styles.bioGroup}>
                <p style={styles.bioText}>
                  Frank Moore began his career as an apprentice junior draftsman working double shifts on manual drawing boards. Sleeping on drafting desks and overcoming early challenges, he earned his architectural engineering credentials with dedication and passion.
                </p>
                <p style={styles.bioText}>
                  He founded PRIMECOST to eliminate pre-construction bottlenecks. By integrating architectural styling, structural integrity, and MEP efficiency under one roof, Frank created a pre-construction engineering practice that guarantees rapid scoping responses and precision engineering.
                </p>
              </div>

              {/* Contact / Highlights */}
              <div style={styles.highlightsGrid}>
                <div style={styles.highlightItem}>
                  <Award size={20} style={{ color: '#C89A45', flexShrink: 0 }} />
                  <div>
                    <strong style={styles.hlTitle}>20+ Years Experience</strong>
                    <p style={styles.hlSub}>Structural & Pre-Construction</p>
                  </div>
                </div>

                <div style={styles.highlightItem}>
                  <ShieldCheck size={20} style={{ color: '#C89A45', flexShrink: 0 }} />
                  <div>
                    <strong style={styles.hlTitle}>Licensed Leadership</strong>
                    <p style={styles.hlSub}>50-State Engineering Bids</p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="mailto:Frank.moore@primecost.biz">
                  <PrimaryButton variant="primary" icon={<Mail size={16} />}>
                    Email Frank Moore
                  </PrimaryButton>
                </a>
                <a href="tel:8322346456">
                  <PrimaryButton variant="outline" icon={<Phone size={16} />} style={{ borderColor: '#0F2446', color: '#0F2446' }}>
                    Call Direct
                  </PrimaryButton>
                </a>
              </div>

            </ScrollReveal>
          </div>

        </div>
      </section>
    </div>
  );
}

const styles = {
  heroSection: {
    padding: '4rem 0 6rem 0',
  },
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr 1.5fr',
    gap: '4rem',
    alignItems: 'center',
  },
  portraitCol: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  portraitContainer: {
    position: 'relative',
    width: '340px',
    height: '340px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #0F2446 0%, #1b3b6f 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 20px 40px rgba(15, 36, 70, 0.2)',
  },
  goldRing: {
    position: 'absolute',
    top: '-8px',
    left: '-8px',
    right: '-8px',
    bottom: '-8px',
    borderRadius: '50%',
    border: '3px solid #C89A45',
    boxShadow: '0 0 20px rgba(200, 154, 69, 0.4)',
    pointerEvents: 'none',
    transition: 'transform 0.1s ease-out',
  },
  portraitImg: {
    width: '94%',
    height: '94%',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  infoCol: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
  },
  name: {
    fontSize: '3.2rem',
    fontWeight: '850',
    color: '#0F2446',
    fontFamily: "'Outfit', sans-serif",
    lineHeight: '1.1',
    margin: '0.2rem 0',
  },
  title: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#64748b',
    display: 'block',
    marginBottom: '1.5rem',
  },
  quoteCard: {
    padding: '1.5rem 1.75rem',
    marginBottom: '1.75rem',
    borderLeft: '4px solid #C89A45',
    backgroundColor: 'rgba(200, 154, 69, 0.06)',
    borderRadius: '0 12px 12px 0',
  },
  quoteText: {
    fontSize: '1.1rem',
    fontWeight: '600',
    fontStyle: 'italic',
    color: '#0F2446',
    lineHeight: '1.5',
    margin: 0,
  },
  signature: {
    fontSize: '1rem',
    color: '#C89A45',
    display: 'block',
    marginTop: '0.5rem',
    textAlign: 'right',
  },
  bioGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    marginBottom: '1.75rem',
  },
  bioText: {
    fontSize: '1rem',
    color: '#475569',
    lineHeight: '1.7',
    margin: 0,
  },
  highlightsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1.25rem',
    padding: '1.25rem',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    border: '1px solid #e2e8f0',
  },
  highlightItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  hlTitle: {
    display: 'block',
    fontSize: '0.92rem',
    color: '#0F2446',
  },
  hlSub: {
    fontSize: '0.8rem',
    color: '#64748b',
    margin: 0,
  },
};

if (typeof document !== 'undefined') {
  const s = document.createElement('style');
  s.innerText = `
    @media (max-width: 991px) {
      .founder-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
    }
  `;
  document.head.appendChild(s);
}
