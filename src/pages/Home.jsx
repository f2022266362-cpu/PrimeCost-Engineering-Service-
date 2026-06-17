import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  DraftingCompass, Building2, Cpu, Wrench, Palette, Eye, 
  ArrowRight, ShieldCheck, HelpCircle, Users, CheckCircle, ChevronDown, ChevronUp, Star
} from 'lucide-react';
import SchemaManager from '../components/SchemaManager';
import ScrollReveal from '../components/ScrollReveal';

export default function Home({ onOpenConsultation, onOpenProposal }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const services = [
    {
      id: 'architectural-design',
      title: 'Architectural Design Services',
      icon: <DraftingCompass size={32} style={styles.serviceIcon} />,
      outcome: 'Translate spatial concepts into permit-ready construction documentation. We deliver architectural drawings for commercial permits and custom residential permit sets optimized for code compliance.',
      deliverables: ['Site Plans', 'Floor Plans', 'Elevations', 'Building Sections', 'Permit Sets', 'Construction Documents', '3D Models']
    },
    {
      id: 'structural-engineering',
      title: 'Structural Engineering Services',
      icon: <Building2 size={32} style={styles.serviceIcon} />,
      outcome: 'Design robust foundation and framing systems that guarantee safety. Get a fast turnaround structural engineering estimate cost Houston or nationwide, featuring digital PE stamp drawings.',
      deliverables: ['Structural Calculations', 'Foundation Design', 'Framing Plans', 'Concrete Design', 'Steel Design', 'Wood Design', 'Structural Reports']
    },
    {
      id: 'mep-engineering',
      title: 'MEP Engineering Services',
      icon: <Wrench size={32} style={styles.serviceIcon} />,
      outcome: 'Create energy-efficient mechanical, electrical, and plumbing layouts. Our MEP design services Houston, Texas and nationwide ensure absolute coordination and fast municipal approvals.',
      deliverables: ['HVAC Design', 'Electrical Layouts', 'Lighting Plans', 'Power Distribution', 'Plumbing Systems', 'Fire Protection Plans', 'Load Calculations']
    },
    {
      id: 'bim-cad',
      title: 'BIM & CAD Services',
      icon: <Cpu size={32} style={styles.serviceIcon} />,
      outcome: 'Mitigate coordination risks before excavation. We construct intelligent virtual BIM modeling for contractors that highlights structural clashes, preventing expensive site rework.',
      deliverables: ['Revit Models', 'BIM Coordination', 'Clash Detection Reports', 'Shop Drawings', 'As-Built Drawings', 'AutoCAD Drafting']
    },
    {
      id: 'interior-design',
      title: 'Interior Design Services',
      icon: <Palette size={32} style={styles.serviceIcon} />,
      outcome: 'Craft functional, visually engaging, and ergonomically balanced interior environments. We coordinate material palettes and lighting design for high occupant comfort and branding.',
      deliverables: ['Space Planning', 'Furniture Layouts', 'Material Selection', 'Lighting Design', 'Mood Boards', '3D Visualizations']
    },
    {
      id: 'visualization',
      title: 'Visualization Services',
      icon: <Eye size={32} style={styles.serviceIcon} />,
      outcome: 'Secure fast stakeholder buy-in and marketing pre-sales. We generate photorealistic exterior/interior renderings and walkthrough animations that represent real lighting and textures.',
      deliverables: ['Exterior Renderings', 'Interior Renderings', '3D Animations', 'Walkthrough Videos', 'Marketing Visuals']
    }
  ];

  const industries = [
    {
      id: 'residential',
      title: 'Residential Projects',
      desc: 'Custom Luxury Homes, Full Renovations, Structural Additions',
      bg: 'linear-gradient(135deg, #1b3b6f 0%, #1e3a8a 100%)'
    },
    {
      id: 'multifamily',
      title: 'Multifamily Projects',
      desc: 'Apartment Complexes, Condominiums, Mixed-Use Retail Developments',
      bg: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'
    },
    {
      id: 'commercial',
      title: 'Commercial Projects',
      desc: 'Office Buildings, Restaurants, Retail Strip Centers, Franchise Fits',
      bg: 'linear-gradient(135deg, #c5a880 0%, #a98d63 100%)'
    },
    {
      id: 'industrial',
      title: 'Industrial Projects',
      desc: 'Manufacturing Plants, Logistic Distribution Hubs, Cold Storage Facilities',
      bg: 'linear-gradient(135deg, #334155 0%, #475569 100%)'
    }
  ];

  const faqs = [
    {
      question: 'What is included in architectural design services?',
      answer: 'Architectural design services typically include concept development, floor plans, elevations, sections, permit drawings, code compliance reviews, and construction documentation.'
    },
    {
      question: 'Do you provide permit-ready drawing sets?',
      answer: 'Yes. We prepare complete permit-ready construction documents that comply with local building requirements and state PE stamp rules.'
    },
    {
      question: 'Can BIM help reduce construction costs?',
      answer: 'BIM improves coordination between disciplines, identifies clashes early, and reduces costly field changes during construction. It saves up to 5-10% of total construction costs.'
    }
  ];

  const trustMetrics = [
    { value: '26', label: 'Years of Experience' },
    { value: '1,500+', label: 'Projects Completed' },
    { value: '< 2 Hrs', label: 'Response Guarantee' },
    { value: '100%', label: 'PE Certified & Stamped' }
  ];

  return (
    <div>
      <SchemaManager 
        title="Structural Engineering & Estimating Services in Houston | PRIMECOST" 
        description="PRIMECOST provides fast turnaround structural engineering estimates, PE stamped drawings, MEP design, and construction estimating services in Houston, Sugar Land, Katy, Pearland, and across the United States."
        schemaType="FAQ"
        schemaData={{ questions: faqs }}
      />

      {/* Hero Section */}
      <section style={styles.hero} className="glass-dark">
        <div style={styles.heroOverlay} />
        <div className="container" style={styles.heroContainer}>
          <div style={styles.heroContent}>
            <span style={styles.heroTagline}>NATIONWIDE PRE-CONSTRUCTION EXCELLENCE | BASED IN HOUSTON, TX</span>
            <h1 style={styles.heroTitle}>
              Structural Engineering, MEP Design & Construction Estimating Services
            </h1>
            <p style={styles.heroSubtitle}>
              PRIMECOST provides fast turnaround structural engineering bids, PE stamped drawings, MEP design, and coordinated BIM modeling for contractors, developers, and owners across the United States. From Houston, Sugar Land, and Katy to nationwide projects, we deliver permit-ready sets that prevent carrying cost delays.
            </p>
            <div style={styles.heroCta}>
              <button onClick={onOpenProposal} className="btn btn-secondary">Request a Proposal</button>
              <button onClick={onOpenConsultation} className="btn btn-outline-white">Schedule Consultation</button>
              <Link to="/portfolio" className="btn btn-primary" style={{ backgroundColor: 'rgba(27, 59, 111, 0.85)' }}>
                View Portfolio <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Ticker Section */}
      <section style={styles.tickerSection}>
        <div className="container">
          <h4 style={styles.tickerTitle}>Trusted By Industry Leaders</h4>
          <div style={styles.tickerTrack}>
            <div style={styles.tickerSlide}>
              <span>DEVELOPERS</span>
              <span>•</span>
              <span>GENERAL CONTRACTORS</span>
              <span>•</span>
              <span>ARCHITECTS</span>
              <span>•</span>
              <span>REAL ESTATE INVESTORS</span>
              <span>•</span>
              <span>PROPERTY MANAGERS</span>
              <span>•</span>
              <span>ENGINEERING FIRMS</span>
              {/* Duplicate for infinite loop visual */}
              <span>•</span>
              <span>DEVELOPERS</span>
              <span>•</span>
              <span>GENERAL CONTRACTORS</span>
              <span>•</span>
              <span>ARCHITECTS</span>
              <span>•</span>
              <span>REAL ESTATE INVESTORS</span>
              <span>•</span>
              <span>PROPERTY MANAGERS</span>
              <span>•</span>
              <span>ENGINEERING FIRMS</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section style={styles.section} id="services">
        <div className="container">
          <div style={styles.sectionHeader}>
            <span style={styles.sectionTag}>WHAT WE DELIVER</span>
            <h2 style={styles.sectionTitle}>Engineered Outcomes, Not Just Drawings</h2>
            <p style={styles.sectionSubtitle}>
              We align design and engineering with build feasibility to keep projects on schedule and on budget.
            </p>
          </div>

          <ScrollReveal>
            <div className="grid-cols-3" style={styles.servicesGrid}>
              {services.map((service, index) => (
                <div key={index} style={styles.serviceCard} className="glass">
                  <div style={styles.serviceHeader}>
                    {service.icon}
                    <h3 style={styles.serviceCardTitle}>{service.title}</h3>
                  </div>
                  <p style={styles.serviceOutcome}>{service.outcome}</p>
                  <div style={styles.deliverablesBox}>
                    <span style={styles.deliverablesHeading}>Key Deliverables:</span>
                    <ul style={styles.deliverablesList}>
                      {service.deliverables.map((item, dIdx) => (
                        <li key={dIdx} style={styles.deliverableItem}>
                          <CheckCircle size={12} style={styles.checkIcon} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link to={`/services/${service.id}`} style={styles.learnMoreLink}>
                    <span>Explore Service Details</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section style={styles.trustSection}>
        <div className="container" style={styles.trustGrid}>
          {trustMetrics.map((metric, idx) => (
            <div key={idx} style={styles.metricCard}>
              <h3 style={styles.metricValue}>{metric.value}</h3>
              <p style={styles.metricLabel}>{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section style={{ ...styles.section, backgroundColor: '#f1f5f9' }} id="industries">
        <div className="container">
          <div style={styles.sectionHeader}>
            <span style={styles.sectionTag}>SECTORS WE SERVE</span>
            <h2 style={styles.sectionTitle}>Tailored Across Heavy & Light Industries</h2>
            <p style={styles.sectionSubtitle}>
              Different structures demand distinct code, clearance, load, and aesthetic parameters. We cover them all.
            </p>
          </div>

          <ScrollReveal>
            <div className="grid-cols-4" style={{ gap: '1.5rem' }}>
              {industries.map((ind, idx) => (
                <Link to={`/industries/${ind.id}`} key={idx} style={{ ...styles.industryCard, background: ind.bg }}>
                  <div style={styles.industryOverlay} />
                  <div style={styles.industryContent}>
                    <h3 style={styles.industryTitle}>{ind.title}</h3>
                    <p style={styles.industryDesc}>{ind.desc}</p>
                    <span style={styles.industryLinkBtn}>
                      View Custom Services <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CEO Spotlight Section */}
      <section style={{ ...styles.section, backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container ceo-spotlight-container-class" style={styles.ceoSpotlightContainer}>
          <div style={styles.ceoSpotlightContent}>
            <ScrollReveal style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <span style={styles.sectionTag}>OUR FOUNDER</span>
              <h2 style={styles.sectionTitle}>Meet CEO Frank Moore</h2>
              <p style={styles.ceoSpotlightText}>
                Born and raised in Dallas, Texas, Frank Moore (35) overcame major struggles to establish PRIMECOST. As a young apprentice draftsman, he worked double shifts during the day and studied architectural engineering at night, often sleeping on draft tables to build his vision.
              </p>
              <p style={styles.ceoSpotlightText}>
                Today, Frank leads a certified team of pre-construction engineers and draftsmen dedicated to removing bottlenecks from the permit and construction drawing process. Under his guidance, PRIMECOST delivers permit-ready sets and structural calculations faster than any firm in the region.
              </p>
              <Link to="/about" className="btn btn-outline" style={{ marginTop: '1rem', alignSelf: 'flex-start' }}>
                Read Frank's Full Dallas Story <ArrowRight size={14} />
              </Link>
            </ScrollReveal>
          </div>
          <div style={styles.ceoSpotlightImageWrapper}>
            <ScrollReveal>
              <img src="/ceo-frank.jpg" alt="Frank Moore - PRIMECOS CEO" style={styles.ceoSpotlightImg} />
              <div style={styles.ceoSpotlightLabel}>
                <strong style={{ fontWeight: '700', fontSize: '1rem' }}>Frank Moore</strong>
                <span style={{ fontSize: '0.78rem', color: '#c5a880' }}>CEO & Founder, Age 35</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={styles.section}>
        <div className="container">
          <div style={styles.sectionHeader}>
            <span style={styles.sectionTag}>CLIENT SUCCESS STORIES</span>
            <h2 style={styles.sectionTitle}>What Developers & Architects Say</h2>
          </div>

          <ScrollReveal>
            <div style={styles.reviewRow}>
              <div style={styles.reviewCard} className="glass">
                <div style={styles.stars}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#c5a880" color="#c5a880" />)}
                </div>
                <p style={styles.reviewBody}>
                  "PRIMECOS delivered permit-ready drawings for our 45-unit residential multifamily complex in Houston. The coordination between structural calculations and HVAC layout saved us at least $35k in framing modification costs during build."
                </p>
                <div style={styles.reviewer}>
                  <strong>Marcus Vance</strong>
                  <span>Lead Developer, Vance Group LLC</span>
                </div>
              </div>

              <div style={styles.reviewCard} className="glass">
                <div style={styles.stars}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#c5a880" color="#c5a880" />)}
                </div>
                <p style={styles.reviewBody}>
                  "The Revit BIM model provided was flawless. Their clash detection caught two significant conflicts between the steel structure and primary drainage pipes. Their engineers updated structural parameters on the same day."
                </p>
                <div style={styles.reviewer}>
                  <strong>Elena Rostova</strong>
                  <span>Managing Partner, Rostova Architects</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Accordion FAQ Section */}
      <section style={{ ...styles.section, backgroundColor: '#ffffff', borderTop: '1px solid #e2e8f0' }}>
        <div className="container" style={styles.faqContainer}>
          <div style={styles.faqHeader}>
            <span style={styles.sectionTag}>PRE-CONSTRUCTION FAQ</span>
            <h2 style={styles.sectionTitle}>Frequently Asked Questions</h2>
            <p style={styles.sectionSubtitle}>
              Everything you need to know about engineering stamps, structural scopes, and architectural permits.
            </p>
          </div>

          <div style={styles.faqList}>
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={index} style={styles.faqItem}>
                  <button style={styles.faqQuestionBtn} onClick={() => toggleFaq(index)}>
                    <span>{faq.question}</span>
                    {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                  {isOpen && (
                    <div style={styles.faqAnswer}>
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={styles.ctaBanner}>
        <div className="container" style={styles.ctaBannerContent}>
          <h2 style={styles.ctaBannerTitle}>Ready to Scrutinize Your Design Details?</h2>
          <p style={styles.ctaBannerText}>
            Consult directly with licensed pre-construction specialists to map out permit routes, budget alignments, and structural sizing.
          </p>
          <div style={styles.ctaBannerButtons}>
            <button onClick={onOpenProposal} className="btn btn-secondary">Request Scoping proposal</button>
            <button onClick={onOpenConsultation} className="btn btn-primary" style={{ border: '2px solid #ffffff' }}>
              Schedule Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

const styles = {
  hero: {
    position: 'relative',
    background: 'url("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1600&auto=format&fit=crop") no-repeat center/cover',
    color: '#ffffff',
    padding: '8rem 0 7rem 0',
    overflow: 'hidden',
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(15, 23, 42, 0.8)',
    zIndex: 1,
  },
  heroContainer: {
    position: 'relative',
    zIndex: 2,
  },
  heroContent: {
    maxWidth: '850px',
  },
  heroTagline: {
    display: 'inline-block',
    fontSize: '0.82rem',
    fontWeight: '700',
    color: '#c5a880',
    letterSpacing: '2px',
    marginBottom: '1rem',
    textTransform: 'uppercase',
  },
  heroTitle: {
    fontSize: '3.2rem',
    color: '#ffffff',
    lineHeight: '1.15',
    marginBottom: '1.5rem',
    fontFamily: "'Outfit', sans-serif",
    fontWeight: '800',
  },
  heroSubtitle: {
    fontSize: '1.15rem',
    color: '#cbd5e1',
    lineHeight: '1.6',
    marginBottom: '2.5rem',
  },
  heroCta: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  tickerSection: {
    backgroundColor: '#0f172a',
    color: '#94a3b8',
    padding: '1.5rem 0',
    borderBottom: '1px solid #1e293b',
    overflow: 'hidden',
  },
  tickerTitle: {
    fontSize: '0.8rem',
    textTransform: 'uppercase',
    color: '#c5a880',
    letterSpacing: '1px',
    marginBottom: '0.8rem',
    textAlign: 'center',
    fontWeight: '700',
  },
  tickerTrack: {
    width: '100%',
    overflow: 'hidden',
    position: 'relative',
  },
  tickerSlide: {
    display: 'flex',
    gap: '3rem',
    whiteSpace: 'nowrap',
    animation: 'ticker 25s linear infinite',
    fontSize: '0.9rem',
    fontWeight: '600',
    color: '#cbd5e1',
  },
  section: {
    padding: '6rem 0',
    backgroundColor: '#f8fafc',
  },
  sectionHeader: {
    textAlign: 'center',
    maxWidth: '700px',
    margin: '0 auto 4rem auto',
  },
  sectionTag: {
    fontSize: '0.85rem',
    fontWeight: '700',
    color: '#c5a880',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    display: 'block',
    marginBottom: '0.5rem',
  },
  sectionTitle: {
    fontSize: '2.25rem',
    color: '#0f172a',
    marginBottom: '1rem',
  },
  sectionSubtitle: {
    fontSize: '1.05rem',
    color: '#64748b',
  },
  servicesGrid: {
    marginTop: '2rem',
  },
  serviceCard: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    transition: 'all 0.3s ease',
  },
  serviceHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1.25rem',
  },
  serviceIcon: {
    color: '#1b3b6f',
    backgroundColor: 'rgba(27, 59, 111, 0.06)',
    padding: '0.4rem',
    borderRadius: '8px',
  },
  serviceCardTitle: {
    fontSize: '1.2rem',
    color: '#0f172a',
    lineHeight: '1.3',
  },
  serviceOutcome: {
    fontSize: '0.9rem',
    color: '#475569',
    lineHeight: '1.6',
    marginBottom: '1.5rem',
    flexGrow: 1,
  },
  deliverablesBox: {
    borderTop: '1px solid #e2e8f0',
    paddingTop: '1rem',
    marginBottom: '1.5rem',
  },
  deliverablesHeading: {
    fontSize: '0.82rem',
    fontWeight: '700',
    color: '#1b3b6f',
    textTransform: 'uppercase',
    display: 'block',
    marginBottom: '0.6rem',
  },
  deliverablesList: {
    listStyle: 'none',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '0.4rem',
  },
  deliverableItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
    fontSize: '0.78rem',
    color: '#64748b',
  },
  checkIcon: {
    color: '#10b981',
    flexShrink: 0,
  },
  learnMoreLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.4rem',
    fontSize: '0.88rem',
    fontWeight: '700',
    color: '#1b3b6f',
  },
  trustSection: {
    backgroundColor: '#1b3b6f',
    color: '#ffffff',
    padding: '4rem 0',
  },
  trustGrid: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: '2.5rem',
    textAlign: 'center',
  },
  metricCard: {
    flex: 1,
    minWidth: '200px',
  },
  metricValue: {
    fontSize: '3rem',
    color: '#c5a880',
    fontWeight: '800',
    fontFamily: "'Outfit', sans-serif",
  },
  metricLabel: {
    fontSize: '0.95rem',
    color: '#cbd5e1',
    fontWeight: '600',
    marginTop: '0.25rem',
  },
  industryCard: {
    position: 'relative',
    height: '280px',
    borderRadius: '16px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'flex-end',
    padding: '2rem',
    color: '#ffffff',
    boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)',
    transition: 'all 0.3s ease',
  },
  industryOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(15, 23, 42, 0.45)',
    transition: 'background-color 0.3s',
  },
  industryContent: {
    position: 'relative',
    zIndex: 2,
    width: '100%',
  },
  industryTitle: {
    fontSize: '1.4rem',
    color: '#ffffff',
    marginBottom: '0.4rem',
  },
  industryDesc: {
    fontSize: '0.82rem',
    color: '#e2e8f0',
    marginBottom: '1.25rem',
    lineHeight: '1.4',
  },
  industryLinkBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.4rem',
    fontSize: '0.82rem',
    fontWeight: '700',
    color: '#c5a880',
  },
  reviewRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '2.5rem',
  },
  reviewCard: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    padding: '2.5rem',
    border: '1px solid #e2e8f0',
    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.03)',
  },
  stars: {
    display: 'flex',
    gap: '0.2rem',
    marginBottom: '1.25rem',
  },
  reviewBody: {
    fontSize: '0.95rem',
    lineHeight: '1.6',
    color: '#475569',
    fontStyle: 'italic',
    marginBottom: '1.5rem',
  },
  reviewer: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '0.88rem',
  },
  faqContainer: {
    maxWidth: '800px',
  },
  faqHeader: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  faqList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.8rem',
  },
  faqItem: {
    border: '1px solid #cbd5e1',
    borderRadius: '8px',
    backgroundColor: '#f8fafc',
    overflow: 'hidden',
  },
  faqQuestionBtn: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.25rem 1.5rem',
    background: 'none',
    border: 'none',
    textAlign: 'left',
    fontSize: '1rem',
    fontWeight: '600',
    color: '#0f172a',
    cursor: 'pointer',
  },
  faqAnswer: {
    padding: '0 1.5rem 1.25rem 1.5rem',
    fontSize: '0.9rem',
    color: '#475569',
    lineHeight: '1.6',
    borderTop: '1px solid #cbd5e1',
    backgroundColor: '#ffffff',
  },
  ctaBanner: {
    backgroundColor: '#0f172a',
    color: '#ffffff',
    padding: '5rem 0',
    textAlign: 'center',
    borderTop: '1px solid #1e293b',
  },
  ctaBannerContent: {
    maxWidth: '800px',
  },
  ctaBannerTitle: {
    fontSize: '2.5rem',
    color: '#ffffff',
    marginBottom: '1rem',
    fontFamily: "'Outfit', sans-serif",
  },
  ctaBannerText: {
    fontSize: '1.1rem',
    color: '#94a3b8',
    marginBottom: '2rem',
    lineHeight: '1.6',
  },
  ctaBannerButtons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  ceoSpotlightContainer: {
    display: 'flex',
    gap: '4rem',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  ceoSpotlightContent: {
    flex: '1.5',
    minWidth: '320px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  ceoSpotlightText: {
    fontSize: '0.98rem',
    lineHeight: '1.6',
    color: '#475569',
  },
  ceoSpotlightImageWrapper: {
    flex: '1',
    minWidth: '280px',
    position: 'relative',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 20px 25px -5px rgba(15, 23, 42, 0.1)',
  },
  ceoSpotlightImg: {
    width: '100%',
    height: 'auto',
    maxHeight: '380px',
    objectFit: 'cover',
    display: 'block',
  },
  ceoSpotlightLabel: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    background: 'linear-gradient(to top, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.2) 100%)',
    padding: '1.25rem 1.5rem',
    color: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
  }
};

// Add interactive CSS behaviors dynamically
if (typeof document !== 'undefined') {
  const homeMedia = `
    .service-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 25px -5px rgba(27, 59, 111, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
      border-color: #cbd5e1 !important;
    }
    .industry-card:hover {
      transform: scale(1.03);
    }
    .industry-card:hover div:first-child {
      background-color: rgba(15, 23, 42, 0.65) !important;
    }
    @media (max-width: 768px) {
      h1 { font-size: 2.2rem !important; }
      h2 { font-size: 1.8rem !important; }
      .review-row { grid-template-columns: 1fr !important; gap: 1.5rem; }
      .ceo-spotlight-container-class {
        flex-direction: column-reverse !important;
        gap: 2.5rem !important;
      }
    }
  `;
  const styleSheet = document.createElement("style");
  styleSheet.innerText = homeMedia;
  document.head.appendChild(styleSheet);
}
export { styles };
