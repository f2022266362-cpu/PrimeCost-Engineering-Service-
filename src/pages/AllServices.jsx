import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Search } from 'lucide-react';
import SchemaManager from '../components/SchemaManager';
import ScrollReveal from '../components/ScrollReveal';

const allServicesData = [
  {
    id: 'structural-engineering',
    icon: '🏗️',
    title: 'Structural Engineering',
    color: '#0F2446',
    subServices: [
      'Structural Design', 'Structural Analysis', 'Structural Calculations',
      'Building Design', 'Steel Structure Design', 'Reinforced Concrete (RC) Design',
      'Foundation Design', 'Retaining Wall Design', 'Seismic (Earthquake Resistant) Design',
      'Wind Load Analysis', 'Roof Truss Design', 'Industrial Structure Design',
      'Warehouse Design', 'High-Rise Building Design', 'Residential Structural Design',
      'Commercial Building Design', 'Structural Shop Drawings', 'Structural Peer Review',
      'Structural Inspection', 'Structural Certification'
    ]
  },
  {
    id: 'civil-engineering',
    icon: '🛣️',
    title: 'Civil Engineering',
    color: '#1a5276',
    subServices: [
      'Site Development', 'Grading & Drainage Design', 'Road & Highway Design',
      'Parking Lot Design', 'Stormwater Management', 'Utility Design',
      'Water Supply Design', 'Sewer System Design', 'Pavement Design', 'Earthwork Design'
    ]
  },
  {
    id: 'construction-services',
    icon: '🔨',
    title: 'Construction Services',
    color: '#784212',
    subServices: [
      'Design-Build Services', 'General Contracting', 'Construction Management',
      'Project Supervision', 'Site Inspection', 'Construction Documentation',
      'Cost Estimation', 'Quantity Surveying', 'Value Engineering',
      'Construction Scheduling', 'Quality Control (QC)', 'Quality Assurance (QA)'
    ]
  },
  {
    id: 'architectural-design',
    icon: '📐',
    title: 'Architectural Services',
    color: '#6c3483',
    subServices: [
      'Architectural Design', 'Floor Plans', '3D Exterior Design',
      '3D Interior Design', 'BIM Modeling', 'Space Planning',
      'Renovation Design', 'Permit Drawings'
    ]
  },
  {
    id: 'mep-engineering',
    icon: '⚡',
    title: 'MEP Engineering',
    color: '#1a6b1a',
    subServices: [
      'Mechanical Design (HVAC)', 'Electrical Design', 'Plumbing Design',
      'Fire Protection Design', 'Lighting Design', 'Power Distribution', 'Low Voltage Systems'
    ]
  },
  {
    id: 'geotechnical-engineering',
    icon: '🌍',
    title: 'Geotechnical Engineering',
    color: '#7b6a12',
    subServices: [
      'Soil Investigation', 'Geotechnical Report', 'Foundation Recommendations',
      'Ground Improvement', 'Slope Stability Analysis'
    ]
  },
  {
    id: 'surveying',
    icon: '📏',
    title: 'Surveying',
    color: '#0e6655',
    subServices: [
      'Land Survey', 'Topographic Survey', 'Boundary Survey',
      'Construction Layout', 'Drone Survey'
    ]
  },
  {
    id: 'inspection-assessment',
    icon: '🔍',
    title: 'Inspection & Assessment',
    color: '#922b21',
    subServices: [
      'Building Condition Assessment', 'Structural Health Monitoring', 'Crack Investigation',
      'Load Testing', 'Forensic Engineering', 'Safety Inspection'
    ]
  },
  {
    id: 'permits-compliance',
    icon: '📄',
    title: 'Permits & Compliance',
    color: '#1b4f72',
    subServices: [
      'Building Permit Assistance', 'Code Compliance Review', 'Permit Drawings',
      'Engineering Stamps', 'Municipality Approvals'
    ]
  },
  {
    id: 'bim-cad',
    icon: '💻',
    title: 'BIM & Digital Engineering',
    color: '#17202a',
    subServices: [
      'BIM Coordination', 'Clash Detection', 'Revit Modeling',
      'AutoCAD Drafting', 'Shop Drawings', 'As-Built Drawings', 'Digital Twin Services'
    ]
  },
  {
    id: 'project-management',
    icon: '📋',
    title: 'Project Management',
    color: '#154360',
    subServices: [
      'Project Planning', 'Risk Management', 'Budget Control',
      'Procurement Support', 'Contract Administration', 'Progress Monitoring'
    ]
  },
  {
    id: 'specialty-engineering',
    icon: '🌉',
    title: 'Specialty Engineering',
    color: '#4a235a',
    subServices: [
      'Bridge Engineering', 'Industrial Plant Structures', 'Telecom Tower Design',
      'Solar Structure Design', 'Modular Building Design', 'Pre-Engineered Buildings (PEB)',
      'Temporary Structures', 'Marine Structures'
    ]
  },
  {
    id: 'sustainability',
    icon: '🌿',
    title: 'Sustainability & Green Building',
    color: '#1e8449',
    subServices: [
      'Green Building Consulting', 'LEED Consulting', 'Energy Efficiency Analysis',
      'Sustainable Design', 'Carbon Reduction Strategies'
    ]
  },
  {
    id: 'consultation',
    icon: '🤝',
    title: 'Engineering Consultation',
    color: '#6e2f0c',
    subServices: [
      'Engineering Consultancy', 'Feasibility Studies', 'Technical Reports',
      'Expert Witness Services', "Owner's Engineer Services"
    ]
  },
  {
    id: 'cost-estimation',
    icon: '💰',
    title: 'Cost Estimation & QS',
    color: '#117a65',
    subServices: [
      'Cost Estimation', 'Quantity Surveying', 'Value Engineering',
      'Feasibility Studies', 'Bid Proposals Support'
    ]
  }
];

const premiumServices = [
  'Structural Engineering', 'Architectural Design', 'Civil Engineering',
  'MEP Engineering', 'BIM & Revit Services', 'Construction Management',
  'Quantity Surveying', 'Project Cost Estimation', 'Structural Inspection',
  'Permit & Approval Services', 'Renovation & Retrofit Design',
  'Earthquake Resistant Design', 'Steel Structure Design',
  'Foundation Engineering', 'Design-Build Solutions'
];

export default function AllServices() {
  const [search, setSearch] = useState('');

  const filtered = allServicesData.filter(cat =>
    cat.title.toLowerCase().includes(search.toLowerCase()) ||
    cat.subServices.some(s => s.toLowerCase().includes(search.toLowerCase()))
  );

  const totalServices = allServicesData.reduce((acc, c) => acc + c.subServices.length, 0);

  return (
    <div style={{ background: '#f4f7fb', minHeight: '100vh' }}>
      <SchemaManager
        title="All Engineering & Construction Services | PRIMECOST"
        description="Explore PRIMECOST's full range of structural engineering, civil engineering, architectural design, MEP, BIM, and construction services."
      />

      {/* Hero Banner */}
      <div className="services-hero-banner" style={{
        background: 'linear-gradient(135deg, #0F2446 0%, #1a3a6e 60%, #0F2446 100%)',
        padding: '9rem 1.5rem 5rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(200,154,69,0.15) 0%, transparent 60%), radial-gradient(circle at 80% 50%, rgba(200,154,69,0.1) 0%, transparent 60%)',
          pointerEvents: 'none'
        }} />
        <ScrollReveal variant="fade-up">
          <span style={{
            display: 'inline-block', background: 'rgba(200,154,69,0.2)',
            color: '#C89A45', fontSize: '0.75rem', fontWeight: 700,
            letterSpacing: '0.2em', textTransform: 'uppercase',
            padding: '0.4rem 1.2rem', borderRadius: '20px',
            border: '1px solid rgba(200,154,69,0.3)', marginBottom: '1.5rem'
          }}>
            {allServicesData.length} Categories · {totalServices}+ Services
          </span>
          <h1 style={{
            color: '#ffffff', fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 850, margin: '0 0 1rem', lineHeight: 1.15
          }}>
            Our Complete<br />
            <span style={{ color: '#C89A45' }}>Service Portfolio</span>
          </h1>
          <p style={{
            color: 'rgba(255,255,255,0.75)', fontSize: '1.05rem',
            maxWidth: '560px', margin: '0 auto 2.5rem'
          }}>
            From structural engineering to sustainability consulting — everything your project needs under one roof.
          </p>

          {/* Search Bar */}
          <div style={{
            maxWidth: '480px', margin: '0 auto',
            position: 'relative', display: 'flex', alignItems: 'center'
          }}>
            <Search size={18} style={{
              position: 'absolute', left: '1rem',
              color: 'rgba(255,255,255,0.5)', pointerEvents: 'none'
            }} />
            <input
              type="text"
              placeholder="Search services..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{
                width: '100%', padding: '0.9rem 1rem 0.9rem 2.8rem',
                borderRadius: '50px', border: '1.5px solid rgba(255,255,255,0.2)',
                background: 'rgba(255,255,255,0.1)', color: '#fff',
                fontSize: '0.95rem', backdropFilter: 'blur(10px)',
                outline: 'none', boxSizing: 'border-box'
              }}
            />
          </div>
        </ScrollReveal>
      </div>

      {/* Premium Services Strip */}
      <div style={{
        background: '#fff', borderBottom: '1px solid #e8eef5',
        padding: '2rem 1.5rem', textAlign: 'center'
      }}>
        <p style={{
          fontSize: '0.72rem', fontWeight: 700, color: '#C89A45',
          letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem'
        }}>⭐ Recommended Premium Services</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center', maxWidth: '900px', margin: '0 auto' }}>
          {premiumServices.map((s, i) => (
            <span key={i} style={{
              background: 'linear-gradient(135deg, #0F2446, #1a3a6e)',
              color: '#fff', fontSize: '0.78rem', fontWeight: 600,
              padding: '0.35rem 0.9rem', borderRadius: '20px',
              letterSpacing: '0.02em'
            }}>{s}</span>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '4rem 1.5rem' }} className="all-services-container">
        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem', color: '#556987' }}>
            <p style={{ fontSize: '1.1rem' }}>No services found for "<strong>{search}</strong>"</p>
          </div>
        ) : (
          <div className="all-services-cards-grid">
            {filtered.map((cat, idx) => (
              <ScrollReveal key={cat.id} variant="fade-up" style={{ transitionDelay: `${(idx % 6) * 0.06}s` }}>
                <div style={{
                  background: '#fff',
                  borderRadius: '20px',
                  padding: '1.75rem',
                  border: '1px solid #e8eef5',
                  boxShadow: '0 4px 24px rgba(15,36,70,0.06)',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                  height: '100%',
                  display: 'flex', flexDirection: 'column'
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 12px 40px rgba(15,36,70,0.12)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 24px rgba(15,36,70,0.06)';
                  }}
                >
                  {/* Card Header */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                    <div style={{
                      width: '52px', height: '52px', borderRadius: '14px',
                      background: cat.color + '12',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1.6rem', flexShrink: 0,
                      border: `1.5px solid ${cat.color}22`
                    }}>
                      {cat.icon}
                    </div>
                    <div>
                      <h2 style={{
                        fontSize: '1.05rem', fontWeight: 750,
                        color: '#0F2446', margin: 0, lineHeight: 1.3
                      }}>{cat.title}</h2>
                      <span style={{
                        fontSize: '0.72rem', color: '#8a9bb5', fontWeight: 500
                      }}>{cat.subServices.length} services</span>
                    </div>
                  </div>

                  {/* Sub-services list */}
                  <div style={{ flex: 1 }}>
                    <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                      {cat.subServices.map((sub, i) => (
                        <li key={i} style={{
                          display: 'flex', alignItems: 'center', gap: '0.5rem',
                          fontSize: '0.85rem', color: '#334155'
                        }}>
                          <CheckCircle size={13} style={{ color: cat.color, flexShrink: 0 }} />
                          {sub}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <Link
                    to={`/services/${cat.id}`}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '0.5rem',
                      marginTop: '1.5rem', paddingTop: '1.25rem',
                      borderTop: '1px solid #e8eef5',
                      fontSize: '0.82rem', fontWeight: 700,
                      color: cat.color, textDecoration: 'none',
                      transition: 'gap 0.2s ease'
                    }}
                    onMouseEnter={e => e.currentTarget.style.gap = '0.8rem'}
                    onMouseLeave={e => e.currentTarget.style.gap = '0.5rem'}
                  >
                    View Full Service Details <ArrowRight size={15} />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <ScrollReveal variant="fade-up">
          <div style={{
            marginTop: '5rem', textAlign: 'center',
            background: 'linear-gradient(135deg, #0F2446, #1a3a6e)',
            borderRadius: '24px', padding: '3.5rem 2rem',
            position: 'relative', overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: 'radial-gradient(circle at 80% 50%, rgba(200,154,69,0.15) 0%, transparent 60%)',
              pointerEvents: 'none'
            }} />
            <h2 style={{ color: '#fff', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, marginBottom: '1rem' }}>
              Need a Custom Engineering Solution?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '480px', margin: '0 auto 2rem', fontSize: '1rem' }}>
              Our team of licensed PEs is ready to assist with any project — big or small.
            </p>
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0 })}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                background: '#C89A45', color: '#fff', padding: '0.9rem 2.25rem',
                borderRadius: '50px', fontWeight: 700, fontSize: '0.9rem',
                textDecoration: 'none', letterSpacing: '0.04em',
                boxShadow: '0 8px 24px rgba(200,154,69,0.35)'
              }}
            >
              Get a Free Quote <ArrowRight size={16} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
