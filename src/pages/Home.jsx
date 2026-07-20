import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, ArrowRight, ShieldCheck, CheckCircle, Star,
  HardHat, Award, FileText, MapPin
} from 'lucide-react';
import SchemaManager from '../components/SchemaManager';
import ScrollReveal from '../components/ScrollReveal';

// UI components
import GlassCard from '../components/ui/GlassCard';
import PrimaryButton from '../components/ui/PrimaryButton';
import SectionHeading from '../components/ui/SectionHeading';
import ProjectCard from '../components/ui/ProjectCard';
import Badge from '../components/ui/Badge';

// Data modules
import { services } from '../data/services';
import { projects } from '../data/projects';
import { testimonials } from '../data/testimonials';
import { faqs } from '../data/faq';
import { partners, certifications } from '../data/partners';

export default function Home({ onOpenConsultation, onOpenProposal }) {
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const sliderRef = useRef(null);

  // Auto-rotating testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  // Targeted mouse parallax effect (Hero Building & Glass Blobs)
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const xOffset = ((clientX / window.innerWidth) - 0.5) * 10; // -5px to 5px
      const yOffset = ((clientY / window.innerHeight) - 0.5) * 10;
      setMouseOffset({ x: xOffset, y: yOffset });
    };
    
    // Disable on mobile/touch screens
    if (window.innerWidth > 768) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Before/After Slider drag handler
  const handleSliderMove = (e) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  };

  const startDrag = (e) => {
    e.preventDefault();
    window.addEventListener('mousemove', handleSliderMove);
    window.addEventListener('touchmove', handleSliderMove);
    window.addEventListener('mouseup', endDrag);
    window.addEventListener('touchend', endDrag);
  };

  const endDrag = () => {
    window.removeEventListener('mousemove', handleSliderMove);
    window.removeEventListener('touchmove', handleSliderMove);
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Filters for projects
  const filteredProjects = activeFilter === 'all' 
    ? projects.slice(0, 4) 
    : projects.filter(p => p.category === activeFilter);

  // Large Featured project & Small list
  const featuredProject = projects[0];
  const smallProjectsList = projects.slice(1, 4);

  return (
    <div style={{ position: 'relative' }}>
      <SchemaManager 
        title="Licensed Structural Engineering Services | PE Stamped Drawings — PRIMECOST" 
        description="Licensed structural engineering firm offering PE-stamped structural drawings, architectural design, and pre-construction engineering solutions. Fast, accurate, code-compliant designs."
        schemaType="FAQ"
        schemaData={{ questions: faqs }}
      />

      {/* Floating Blueprint Glass Blobs */}
      <div 
        className="glass-blob glass-blob-primary" 
        style={{ 
          top: '15%', 
          left: '10%',
          transform: `translate(${mouseOffset.x}px, ${mouseOffset.y}px)` 
        }} 
      />
      <div 
        className="glass-blob glass-blob-gold" 
        style={{ 
          top: '55%', 
          right: '5%',
          transform: `translate(${-mouseOffset.x}px, ${-mouseOffset.y}px)` 
        }} 
      />

      {/* Noise Texture layer */}
      <div className="noise-overlay" />

      {/* 1. HERO SECTION */}
      <section style={styles.hero} className="hero-section">

        {/* Desktop background illustration */}
        <img
          src="/hero-illustration.png"
          alt="PrimeCost Engineering construction illustration"
          className="hero-bg-img hero-bg-desktop"
        />
        {/* Mobile background illustration */}
        <img
          src="/hero-mobile.png"
          alt="PrimeCost Engineering construction illustration"
          className="hero-bg-img hero-bg-mobile-img"
        />

        <div style={styles.heroContainer} className="container">
          <div style={styles.heroGrid} className="hero-responsive-grid">

            {/* LEFT — Text Content */}
            <div style={styles.heroContent}>
              <ScrollReveal variant="fade-up">
                <div style={{ margin: 0, padding: 0 }}>
                  <span className="hero-we-build">WE BUILD</span>
                  <h1 className="hero-stronger">STRONGER</h1>
                </div>
                <span className="hero-tomorrow">tomorrow</span>

                <blockquote className="hero-proverbs-quote">
                  <span className="hero-proverbs-line1">By wisdom a house is built,</span>
                  <span className="hero-proverbs-line2">and through understanding it is established.</span>
                  <cite className="hero-proverbs-cite">&mdash; Proverbs 24:3</cite>
                </blockquote>

                <div className="hero-divider" />

                <p style={styles.heroParagraph}>
                  Licensed Structural Engineering,<br />
                  Design &amp; Construction Solutions &mdash;<br />
                  <strong style={{ color: '#0F2446', fontWeight: '800' }}>Nationwide</strong>
                </p>

                <div style={styles.heroCta}>
                  <PrimaryButton
                    variant="primary"
                    onClick={onOpenProposal}
                    style={{
                      backgroundColor: '#0F2446',
                      color: '#ffffff',
                      borderRadius: '30px',
                      padding: '0.8rem 2.25rem',
                      fontSize: '0.85rem',
                      fontWeight: '750',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      border: 'none',
                      boxShadow: '0 8px 24px rgba(15, 36, 70, 0.2)'
                    }}
                    icon={<ArrowRight size={16} />}
                  >
                    OUR SERVICES
                  </PrimaryButton>
                </div>
              </ScrollReveal>
            </div>

          </div>

          {/* Bottom Glassmorphic Feature Bar */}
          <ScrollReveal variant="scale-in">
            <div className="glass-stats-bar">
              <div className="glass-stat-item">
                <div className="glass-stat-icon-frame"><Building2 size={20} /></div>
                <div className="glass-stat-text-frame">
                  <span className="glass-stat-title">SMART ENGINEERING</span>
                  <span className="glass-stat-desc">Innovative structural designs built to last.</span>
                </div>
              </div>
              <div className="glass-stat-item">
                <div className="glass-stat-icon-frame"><FileText size={20} /></div>
                <div className="glass-stat-text-frame">
                  <span className="glass-stat-title">EXPERT DESIGN</span>
                  <span className="glass-stat-desc">Precision-driven designs tailored to your needs.</span>
                </div>
              </div>
              <div className="glass-stat-item">
                <div className="glass-stat-icon-frame"><ShieldCheck size={20} /></div>
                <div className="glass-stat-text-frame">
                  <span className="glass-stat-title">QUALITY CONSTRUCTION</span>
                  <span className="glass-stat-desc">Built with the highest standards of safety.</span>
                </div>
              </div>
              <div className="glass-stat-item">
                <div className="glass-stat-icon-frame"><HardHat size={20} /></div>
                <div className="glass-stat-text-frame">
                  <span className="glass-stat-title">NATIONWIDE SERVICE</span>
                  <span className="glass-stat-desc">Delivering excellence across the country.</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* 2. TRUSTED BY LOGO TRACK & CERTIFICATION BADGES */}
      <section style={styles.trustSection}>
        <div className="container">
          <h4 style={styles.trustTitle}>Trusted By General Contractors & Architects Nationwide</h4>
          <div style={styles.logoTrack}>
            {partners.map((partner, idx) => (
              <span key={idx} style={styles.logoText}>{partner}</span>
            ))}
          </div>
          
          <div style={styles.certificationsGrid}>
            {certifications.map((cert, idx) => (
              <GlassCard key={idx} hoverLift={false} style={styles.certCard}>
                <Award size={18} style={{ color: '#C89A45' }} />
                <div>
                  <strong style={styles.certName}>{cert.name}</strong>
                  <span style={styles.certDesc}>{cert.desc}</span>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION: Featured + 7 Smaller */}
      <section style={styles.section} id="services">
        <div className="container">
          <SectionHeading 
            tag="WHAT WE DELIVER"
            title="Engineered Outcomes, Not Just Drawings"
            subtitle="We coordinate design, structural calculations, and building feasibility under one roof to guarantee city permit approvals."
          />

          <div style={styles.servicesContainer}>
            {/* 1 Large Featured Service Card */}
            <ScrollReveal variant="fade-up">
              <GlassCard style={styles.featuredServiceCard} className="glass-hover-lift">
                <div style={styles.featuredServiceHeader}>
                  <span style={{ fontSize: '3rem', lineHeight: 1 }}>{services[0].icon}</span>
                  <div>
                    <Badge variant="gold">Featured Speciality</Badge>
                    <h3 style={styles.featuredServiceTitle}>{services[0].title}</h3>
                  </div>
                </div>
                <p style={styles.featuredServiceDesc}>{services[0].outcome}</p>

                {/* Sub-services tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                  {services[0].subServices.slice(0, 8).map((sub, i) => (
                    <span key={i} style={{
                      background: 'rgba(15,36,70,0.07)', color: '#0F2446',
                      fontSize: '0.72rem', fontWeight: 600, padding: '0.25rem 0.65rem',
                      borderRadius: '20px', border: '1px solid rgba(15,36,70,0.12)'
                    }}>{sub}</span>
                  ))}
                </div>
                
                <div style={styles.featuredServiceGrid}>
                  <div>
                    <strong style={styles.featuredMetaLabel}>Timeline:</strong>
                    <p style={styles.featuredMetaVal}>{services[0].timeline}</p>
                  </div>
                  <div>
                    <strong style={styles.featuredMetaLabel}>Starting From:</strong>
                    <p style={styles.featuredMetaVal}>{services[0].startingFrom}</p>
                  </div>
                  <div>
                    <strong style={styles.featuredMetaLabel}>Industries Served:</strong>
                    <p style={styles.featuredMetaVal}>{services[0].industriesServed.join(', ')}</p>
                  </div>
                </div>

                <div style={styles.deliverablesList}>
                  <strong>Core Deliverables:</strong>
                  <ul style={styles.deliverablesGrid}>
                    {services[0].deliverables.map((del, dIdx) => (
                      <li key={dIdx} style={styles.deliverableItem}>
                        <CheckCircle size={14} style={{ color: '#10b981' }} />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link to={`/services/${services[0].id}`} style={styles.serviceLink} className="arrow-slide-hover">
                  <span>Learn More About Structural Specs</span>
                  <ArrowRight size={16} />
                </Link>
              </GlassCard>
            </ScrollReveal>

            {/* All Other Service Cards */}
            <div style={styles.smallServicesGrid}>
              {services.slice(1).map((srv, idx) => (
                <ScrollReveal key={idx} variant="fade-up" style={{ transitionDelay: `${idx * 0.05}s` }}>
                  <GlassCard style={styles.smallServiceCard} className="glass-hover-lift">
                    <div style={styles.smallServiceHeader}>
                      <span style={{ fontSize: '1.75rem', lineHeight: 1 }}>{srv.icon}</span>
                      <h4 style={styles.smallServiceTitle}>{srv.title}</h4>
                    </div>
                    <p style={styles.smallServiceDesc}>{srv.outcome.slice(0, 100)}...</p>

                    {/* Sub-services mini tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem', marginBottom: '0.75rem' }}>
                      {srv.subServices.slice(0, 3).map((sub, i) => (
                        <span key={i} style={{
                          background: 'rgba(200,154,69,0.1)', color: '#9a7230',
                          fontSize: '0.65rem', fontWeight: 600, padding: '0.18rem 0.5rem',
                          borderRadius: '20px', border: '1px solid rgba(200,154,69,0.2)'
                        }}>{sub}</span>
                      ))}
                      {srv.subServices.length > 3 && (
                        <span style={{
                          background: 'rgba(15,36,70,0.06)', color: '#556987',
                          fontSize: '0.65rem', fontWeight: 600, padding: '0.18rem 0.5rem',
                          borderRadius: '20px'
                        }}>+{srv.subServices.length - 3} more</span>
                      )}
                    </div>
                    
                    <div style={styles.smallServiceFooter}>
                      <span style={styles.smallServiceMeta}>From: <strong>{srv.startingFrom}</strong></span>
                      <Link to={`/services/${srv.id}`} className="arrow-slide-hover" style={styles.smallServiceLink}>
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </GlassCard>
                </ScrollReveal>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4. BEFORE/AFTER PROJECT BLUEPRINT SLIDER */}
      <section style={styles.sliderSection}>
        <div className="container">
          <SectionHeading 
            tag="BLUEPRINT TO REALITY"
            title="Interactive Pre-Construction Visualizer"
            subtitle="Drag the slider to see how we transform wireframe blueprints and structural plans into verified building complexes."
          />
          
          <ScrollReveal variant="scale-in">
            <div 
              ref={sliderRef}
              style={styles.sliderContainer}
              onMouseMove={handleSliderMove}
              onTouchMove={handleSliderMove}
            >
              {/* Left Side: Blueprint Image */}
              <div 
                style={{ 
                  backgroundImage: 'url("/before.png")', 
                  ...styles.sliderImage 
                }} 
              />

              {/* Right Side: Render / Real building cutout */}
              <div 
                style={{ 
                  backgroundImage: 'url("/after.png")', 
                  clipPath: `polygon(${sliderPos}% 0, 100% 0, 100% 100%, ${sliderPos}% 100%)`,
                  ...styles.sliderImage 
                }} 
              />
              
              {/* Vertical Drag Handle Line */}
              <div 
                style={{ 
                  left: `${sliderPos}%`, 
                  ...styles.sliderHandle 
                }}
                onMouseDown={startDrag}
                onTouchStart={startDrag}
              >
                <div style={styles.sliderHandleButton}>
                  ◀ ▶
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. PROJECTS GALLERY */}
      <section style={styles.section} id="projects">
        <div className="container">
          <SectionHeading 
            tag="CASE STUDIES"
            title="Our Construction & Engineering Portfolio"
            subtitle="Explore our structural calculations and clash check clearances across commercial, residential, and heavy industrial properties."
          />

          {/* Project Filters */}
          <div style={styles.filtersBox}>
            {['all', 'commercial', 'residential', 'industrial', 'healthcare', 'education'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                style={{
                  ...styles.filterBtn,
                  ...(activeFilter === cat ? styles.filterBtnActive : {})
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured Project Layout */}
          {activeFilter === 'all' && (
            <ScrollReveal variant="fade-up">
              <div style={styles.featuredProjectContainer}>
                <div style={{ ...styles.featuredProjectImg, backgroundImage: `url(${featuredProject.image})` }}>
                  <div style={styles.featuredProjectImgOverlay} />
                  <Badge variant="gold" style={styles.featuredProjectBadge}>Featured Project</Badge>
                </div>
                
                <GlassCard hoverLift={false} style={styles.featuredProjectContent}>
                  <span style={styles.featuredProjLoc}><MapPin size={14} style={{ color: '#C89A45' }} /> {featuredProject.location}</span>
                  <h3 style={styles.featuredProjTitle}>{featuredProject.name}</h3>
                  
                  <div style={styles.featuredProjDetailsGrid}>
                    <div>
                      <strong>Client</strong>
                      <p>{featuredProject.client}</p>
                    </div>
                    <div>
                      <strong>Construction Cost</strong>
                      <p>{featuredProject.constructionCost}</p>
                    </div>
                    <div>
                      <strong>Duration</strong>
                      <p>{featuredProject.duration}</p>
                    </div>
                    <div>
                      <strong>Services Used</strong>
                      <p>{featuredProject.servicesUsed.join(', ')}</p>
                    </div>
                  </div>

                  <p style={styles.featuredProjText}>
                    <strong>Challenge:</strong> {featuredProject.challenges}
                  </p>
                  <p style={styles.featuredProjText}>
                    <strong>Solution:</strong> {featuredProject.solution}
                  </p>

                  <Link to="/portfolio" style={styles.featuredProjBtn}>
                    <PrimaryButton variant="primary" icon={<ArrowRight size={16} />}>
                      Read Case Study Details
                    </PrimaryButton>
                  </Link>
                </GlassCard>
              </div>
            </ScrollReveal>
          )}

          {/* Regular Projects Grid */}
          <div style={styles.projectsGrid}>
            {filteredProjects.map((p, idx) => (
              <ScrollReveal key={p.id} variant="fade-up" style={{ transitionDelay: `${idx * 0.1}s` }}>
                <ProjectCard 
                  project={p} 
                  onViewDetails={() => alert(`Case Study: ${p.name} Details Modal can be opened via the Portfolio page.`)} 
                />
              </ScrollReveal>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Link to="/portfolio">
              <PrimaryButton variant="outline" icon={<ArrowRight size={16} />}>
                View All Case Studies
              </PrimaryButton>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS SLIDER SECTION */}
      <section style={{ ...styles.section, backgroundColor: 'rgba(15, 36, 70, 0.02)' }}>
        <div className="container">
          <SectionHeading 
            tag="REVIEWS"
            title="What Developers & Architects Say"
          />

          <div style={styles.testimonialContainer}>
            <ScrollReveal variant="scale-in">
              <GlassCard hoverLift={false} style={styles.testimonialCard}>
                <div style={styles.starsRow}>
                  {[...Array(testimonials[activeTestimonial].stars)].map((_, i) => (
                    <Star key={i} size={20} fill="#C89A45" color="#C89A45" />
                  ))}
                </div>
                
                <p style={styles.testimonialQuote}>
                  "{testimonials[activeTestimonial].quote}"
                </p>

                <div style={styles.reviewerBox}>
                  <div style={styles.reviewerAvatar}>
                    {testimonials[activeTestimonial].avatar}
                  </div>
                  <div>
                    <h5 style={styles.reviewerName}>{testimonials[activeTestimonial].name}</h5>
                    <span style={styles.reviewerTitle}>
                      {testimonials[activeTestimonial].role}, {testimonials[activeTestimonial].company}
                    </span>
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>

            {/* Slider Dots */}
            <div style={styles.sliderDots}>
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  style={{
                    ...styles.dot,
                    ...(activeTestimonial === idx ? styles.activeDot : {})
                  }}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. FIVE-STEP WORKFLOW TRANSPARENCY PROCESS */}
      <section style={styles.section}>
        <div className="container">
          <SectionHeading 
            tag="WORKFLOW TRANSPARENCY"
            title="Our Process — How We Work"
            subtitle="From structural scoping to stamp certification and municipal submittal reviews."
          />

          <div style={styles.processStepsGrid} className="processStepsGrid">
            {[
              { step: '01', title: 'Consultation & Scoping', desc: 'Our intake team logs your blueprints and schedules a scoping call to map architectural tolerances.' },
              { step: '02', title: 'Design & Calculations', desc: 'Structural and mechanical designers compile beam parameters and load metrics inside Revit.' },
              { step: '03', title: 'Independent QA/QC', desc: 'A senior checking engineer runs clash detection and independent verification reviews.' },
              { step: '04', title: 'State-Specific Stamp', desc: 'A state-licensed Professional Engineer reviews, stamps, and signs structural permit files.' },
              { step: '05', title: 'Permit Compliance Support', desc: 'Our permitting desk handles plan corrections and resubmissions directly with local city inspectors.' }
            ].map((p, idx) => (
              <ScrollReveal key={idx} variant="fade-up" style={{ transitionDelay: `${idx * 0.1}s` }}>
                <GlassCard style={styles.processCard} hoverLift={true}>
                  <span style={styles.processStepNum}>{p.step}</span>
                  <h4 style={styles.processCardTitle}>{p.title}</h4>
                  <p style={styles.processCardDesc}>{p.desc}</p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL CONVERSION BANNER */}
      <section style={styles.ctaBanner} className="glass-panel-dark">
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <h2 style={styles.ctaTitle}>Let's Build Your Vision Together</h2>
          <p style={styles.ctaDesc}>
            Get a comprehensive pre-construction project estimate and stamped structural drawings.
          </p>
          <div style={styles.ctaButtonsRow}>
            <PrimaryButton variant="secondary" onClick={onOpenProposal}>
              REQUEST FREE QUOTE
            </PrimaryButton>
            <PrimaryButton variant="outline" onClick={onOpenConsultation} style={{ borderColor: '#ffffff', color: '#ffffff' }}>
              SCHEDULE CALL
            </PrimaryButton>
          </div>
        </div>
      </section>

    </div>
  );
}

const styles = {
  hero: {
    padding: '11rem 0 6rem 0',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: '#eef3fb',
    overflow: 'hidden',
  },

  heroImageWrapper: {},
  heroImage: {},

  heroContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4rem',
    position: 'relative',
    zIndex: 2,
    width: '100%',
  },

  heroGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '3rem',
    alignItems: 'center',
  },

  heroContent: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    position: 'relative',
    zIndex: 2,
  },

  cranePanel: {
    width: '100%',
    borderRadius: '24px',
    overflow: 'hidden',
    boxShadow: '0 32px 80px rgba(15,36,70,0.18), 0 4px 16px rgba(15,36,70,0.08)',
    lineHeight: 0,
  },

  craneVideo: {
    width: '100%',
    height: 'auto',
    display: 'block',
    objectFit: 'cover',
    animation: 'heroVideoFadeIn 700ms ease forwards',
  },

  heroBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '1.5rem',
    fontSize: '0.8rem',
    fontWeight: '700',
    color: '#0F2446'
  },
  badgeSeparator: {
    color: '#cbd5e1'
  },
  badgeStars: {
    color: '#C89A45',
    letterSpacing: '1px'
  },
  badgeText: {
    color: '#64748b',
    textTransform: 'uppercase'
  },
  heroPreTitle: {
    fontSize: '1rem',
    fontWeight: '700',
    color: '#C89A45',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    marginBottom: '0.5rem'
  },
  heroTagline: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#64748b',
    marginBottom: '1rem'
  },
  heroTitle: {
    fontSize: '4.8rem',
    fontWeight: '850',
    color: '#0F2446',
    lineHeight: '0.95',
    letterSpacing: '-0.03em',
    fontFamily: "'Outfit', sans-serif"
  },
  heroCursive: {
    color: '#C89A45',
    fontSize: '4rem',
    lineHeight: '1',
    marginTop: '-0.5rem',
    marginBottom: '1.5rem',
    display: 'block'
  },
  heroParagraph: {
    fontSize: '1.15rem',
    color: '#475569',
    lineHeight: '1.6',
    marginBottom: '2.5rem',
    maxWidth: '520px',
  },


  heroCta: {
    display: 'flex',
    gap: '1rem'
  },
  heroImageWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  /* unused — video is now the background */
  craneVideoContainer: {},
  craneVideo: {},

  heroBuildingImg: {
    maxWidth: '100%',
    height: 'auto',
    maxHeight: '520px',
    position: 'relative',
    zIndex: 2,
    borderRadius: '24px',
    boxShadow: '0 20px 50px rgba(15, 36, 70, 0.15)',
    border: '1px solid rgba(15, 36, 70, 0.08)'
  },
  buildingGlow: {
    position: 'absolute',
    top: '20%',
    left: '20%',
    right: '20%',
    bottom: '20%',
    backgroundColor: '#bfdbfe',
    filter: 'blur(90px)',
    opacity: 0.5,
    zIndex: 1
  },
  statsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '2rem',
    marginTop: '2rem'
  },
  trustSection: {
    padding: '4rem 0',
    backgroundColor: '#ffffff',
    borderTop: '1px solid #e2e8f0',
    borderBottom: '1px solid #e2e8f0'
  },
  trustTitle: {
    fontSize: '0.85rem',
    textTransform: 'uppercase',
    color: '#64748b',
    fontWeight: '700',
    letterSpacing: '0.1em',
    textAlign: 'center',
    marginBottom: '2rem'
  },
  logoTrack: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: '2rem',
    marginBottom: '2.5rem',
    alignItems: 'center'
  },
  logoText: {
    fontSize: '1.1rem',
    fontWeight: '800',
    color: '#cbd5e1',
    letterSpacing: '0.05em',
    textTransform: 'uppercase'
  },
  certificationsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '1.25rem'
  },
  certCard: {
    padding: '1.25rem',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    borderRadius: '8px'
  },
  certName: {
    fontSize: '0.9rem',
    fontWeight: '700',
    color: '#0F2446',
    display: 'block'
  },
  certDesc: {
    fontSize: '0.72rem',
    color: '#64748b'
  },
  section: {
    padding: '6rem 0'
  },
  servicesContainer: {
    display: 'grid',
    gridTemplateColumns: '1.2fr 1fr',
    gap: '2.5rem',
    alignItems: 'stretch',
    marginTop: '3.5rem'
  },
  featuredServiceCard: {
    padding: '3rem',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'space-between',
    borderColor: 'rgba(200, 154, 69, 0.25)'
  },
  featuredServiceHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
    marginBottom: '1.5rem'
  },
  featuredServiceTitle: {
    fontSize: '1.8rem',
    fontWeight: '800',
    color: '#0F2446',
    fontFamily: "'Outfit', sans-serif"
  },
  featuredServiceDesc: {
    fontSize: '1.05rem',
    color: '#475569',
    lineHeight: '1.7',
    marginBottom: '2rem'
  },
  featuredServiceGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1rem',
    borderTop: '1px solid rgba(15, 36, 70, 0.08)',
    borderBottom: '1px solid rgba(15, 36, 70, 0.08)',
    padding: '1.5rem 0',
    marginBottom: '2rem'
  },
  featuredMetaLabel: {
    fontSize: '0.75rem',
    color: '#64748b',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    display: 'block',
    marginBottom: '0.25rem'
  },
  featuredMetaVal: {
    fontSize: '0.95rem',
    fontWeight: '700',
    color: '#0F2446'
  },
  deliverablesList: {
    marginBottom: '2.5rem'
  },
  deliverablesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '0.75rem',
    listStyle: 'none',
    marginTop: '0.75rem'
  },
  deliverableItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.88rem',
    color: '#475569'
  },
  serviceLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.95rem',
    fontWeight: '750',
    color: '#0F2446'
  },
  smallServicesGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '1.5rem',
    maxHeight: '680px',
    overflowY: 'auto',
    paddingRight: '0.5rem'
  },
  smallServiceCard: {
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    height: '100%'
  },
  smallServiceHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  },
  serviceIconFrame: {
    width: '40px',
    height: '40px',
    borderRadius: '8px',
    backgroundColor: 'rgba(15, 36, 70, 0.05)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  smallServiceTitle: {
    fontSize: '1.15rem',
    fontWeight: '750',
    color: '#0F2446'
  },
  smallServiceDesc: {
    fontSize: '0.88rem',
    color: '#64748b',
    lineHeight: '1.5'
  },
  smallServiceFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTop: '1px solid rgba(15, 36, 70, 0.05)',
    paddingTop: '0.75rem',
    marginTop: '0.5rem'
  },
  smallServiceMeta: {
    fontSize: '0.8rem',
    color: '#64748b'
  },
  smallServiceLink: {
    color: '#0F2446'
  },
  sliderSection: {
    padding: '6rem 0',
    backgroundColor: '#ffffff'
  },
  sliderContainer: {
    position: 'relative',
    width: '100%',
    height: '520px',
    borderRadius: '16px',
    overflow: 'hidden',
    cursor: 'ew-resize',
    boxShadow: '0 20px 50px rgba(15, 36, 70, 0.15)'
  },
  sliderImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    pointerEvents: 'none'
  },
  sliderHandle: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '2px',
    backgroundColor: '#C89A45',
    boxShadow: '0 0 10px rgba(200, 154, 69, 0.8)',
    cursor: 'ew-resize',
    zIndex: 10
  },
  sliderHandleButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#0F2446',
    border: '2px solid #C89A45',
    color: '#C89A45',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.8rem',
    fontWeight: '700',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)'
  },
  filtersBox: {
    display: 'flex',
    justifyContent: 'center',
    gap: '0.75rem',
    flexWrap: 'wrap',
    marginBottom: '3rem'
  },
  filterBtn: {
    padding: '0.5rem 1.25rem',
    borderRadius: '999px',
    border: '1px solid rgba(15, 36, 70, 0.15)',
    backgroundColor: 'transparent',
    color: '#0F2446',
    fontWeight: '700',
    fontSize: '0.8rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)'
  },
  filterBtnActive: {
    backgroundColor: '#0F2446',
    color: '#ffffff',
    borderColor: '#0F2446',
    boxShadow: '0 4px 12px rgba(15, 36, 70, 0.15)'
  },
  featuredProjectContainer: {
    display: 'grid',
    gridTemplateColumns: '1.2fr 1fr',
    gap: '2.5rem',
    alignItems: 'stretch',
    marginBottom: '3rem'
  },
  featuredProjectImg: {
    borderRadius: '16px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%',
    minHeight: '380px',
    position: 'relative',
    overflow: 'hidden'
  },
  featuredProjectImgOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(to right, rgba(15, 36, 70, 0.6) 0%, rgba(15, 36, 70, 0.1) 100%)'
  },
  featuredProjectBadge: {
    position: 'absolute',
    top: '1.5rem',
    left: '1.5rem',
    zIndex: 2
  },
  featuredProjectContent: {
    padding: '2.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '1rem'
  },
  featuredProjLoc: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.35rem',
    fontSize: '0.85rem',
    fontWeight: '600',
    color: '#64748b'
  },
  featuredProjTitle: {
    fontSize: '2rem',
    fontWeight: '850',
    color: '#0F2446',
    fontFamily: "'Outfit', sans-serif",
    lineHeight: '1.15'
  },
  featuredProjDetailsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1rem',
    margin: '0.5rem 0',
    fontSize: '0.88rem',
    borderTop: '1px solid rgba(15, 36, 70, 0.08)',
    borderBottom: '1px solid rgba(15, 36, 70, 0.08)',
    padding: '1.25rem 0'
  },
  featuredProjText: {
    fontSize: '0.92rem',
    color: '#475569',
    lineHeight: '1.6'
  },
  featuredProjBtn: {
    marginTop: '1rem'
  },
  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '2rem'
  },
  testimonialContainer: {
    maxWidth: '800px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  testimonialCard: {
    padding: '3rem 2.5rem',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    alignItems: 'center'
  },
  starsRow: {
    display: 'flex',
    gap: '0.25rem',
    justifyContent: 'center'
  },
  testimonialQuote: {
    fontSize: '1.35rem',
    fontWeight: '500',
    fontStyle: 'italic',
    lineHeight: '1.6',
    color: '#0F2446'
  },
  reviewerBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginTop: '1rem'
  },
  reviewerAvatar: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    backgroundColor: '#0F2446',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '800',
    fontSize: '1.1rem'
  },
  reviewerName: {
    fontSize: '1.05rem',
    fontWeight: '800',
    color: '#0F2446',
    textAlign: 'left'
  },
  reviewerTitle: {
    fontSize: '0.8rem',
    color: '#64748b',
    fontWeight: '500',
    textAlign: 'left',
    display: 'block'
  },
  sliderDots: {
    display: 'flex',
    gap: '0.5rem',
    marginTop: '2rem'
  },
  dot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#cbd5e1',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    transition: 'all 0.3s ease'
  },
  activeDot: {
    width: '24px',
    borderRadius: '4px',
    backgroundColor: '#C89A45'
  },
  processStepsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: '1.5rem',
    marginTop: '3.5rem'
  },
  processCard: {
    padding: '2rem 1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    height: '100%',
    position: 'relative'
  },
  processStepNum: {
    fontSize: '1.8rem',
    fontWeight: '850',
    color: 'rgba(200, 154, 69, 0.2)',
    fontFamily: "'Outfit', sans-serif",
    position: 'absolute',
    top: '1rem',
    right: '1rem'
  },
  processCardTitle: {
    fontSize: '1.1rem',
    fontWeight: '800',
    color: '#0F2446',
    fontFamily: "'Outfit', sans-serif"
  },
  processCardDesc: {
    fontSize: '0.85rem',
    color: '#64748b',
    lineHeight: '1.5'
  },
  ctaBanner: {
    margin: '6rem auto',
    maxWidth: '1140px',
    borderRadius: '24px',
    padding: '5rem 2rem',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(15, 36, 70, 0.95)'
  },
  ctaTitle: {
    fontSize: '2.8rem',
    fontWeight: '850',
    color: '#ffffff',
    fontFamily: "'Outfit', sans-serif",
    marginBottom: '1rem',
    letterSpacing: '-0.02em'
  },
  ctaDesc: {
    fontSize: '1.15rem',
    color: 'rgba(255,255,255,0.7)',
    maxWidth: '600px',
    margin: '0 auto 2.5rem auto',
    lineHeight: '1.6'
  },
  ctaButtonsRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    flexWrap: 'wrap'
  }
};

// Insert responsive media queries for layout grids dynamically
if (typeof document !== 'undefined') {
  const mediaStyles = `
    @media (max-width: 991px) {
      .project-card-glass {
        grid-column: span 3 !important;
      }
      .servicesGrid, .statsContainer, .projectsGrid, .processStepsGrid {
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 1.5rem !important;
      }
      .heroGrid, .servicesContainer, .featuredProjectContainer {
        grid-template-columns: 1fr !important;
        gap: 2.5rem !important;
      }
      .heroContent {
        text-align: center !important;
        align-items: center !important;
      }
      .heroParagraph {
        margin-left: auto !important;
        margin-right: auto !important;
      }
      .heroCta {
        justify-content: center !important;
      }
      .statsContainer {
        margin-top: 3rem !important;
      }
    }
    
    @media (max-width: 768px) {
      .statsContainer, .projectsGrid, .certificationsGrid {
        grid-template-columns: 1fr !important;
      }
      .heroTitle {
        font-size: 3.5rem !important;
      }
      .heroCursive {
        font-size: 3rem !important;
      }
      .ctaTitle {
        font-size: 2rem !important;
      }
      .sliderContainer {
        height: 320px !important;
      }
    }
  `;
  const styleSheet = document.createElement("style");
  styleSheet.innerText = mediaStyles;
  document.head.appendChild(styleSheet);
}
export { styles };
