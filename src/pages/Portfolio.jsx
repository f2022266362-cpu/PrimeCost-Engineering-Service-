import React, { useState } from 'react';
import { 
  Building2, MapPin, Minimize, Expand, CheckSquare, 
  Settings, Award, Layers, ArrowRight, ShieldCheck 
} from 'lucide-react';
import SchemaManager from '../components/SchemaManager';

const projects = [
  {
    id: 'houston-plaza',
    name: 'Houston Mixed-Use Plaza',
    location: 'Houston, TX',
    buildingType: 'Multifamily & Commercial Retail',
    area: '75,000 sq. ft.',
    scope: 'Architectural Co-design, Structural Engineering, MEP Design, and 3D BIM Clash Coordination',
    category: 'multifamily',
    challenges: 'High density piping and utility lines entering from the municipal corridor clashed with heavy structural transfer beams on the second level of the retail shell. Standard spatial clearances were less than 18 inches above the dropped ceiling.',
    solution: 'Our BIM modelers combined architectural, structural steel, and MEP systems inside Revit and Navisworks. We rerouted main drainage lines, raised concrete header beam profiles via post-tensioning engineering, and eliminated 47 field collisions prior to general contractor staging.',
    deliverables: ['PE-Stamped Foundation Prints', 'HVAC Duct Coordinate Plans', 'Navisworks Clash Reports', 'Revit Coordinated Model (LOD 300)', 'Fire Protection Sprinkler Layouts'],
    technologies: ['Revit', 'Navisworks Manage', 'ETABS', 'AISC Steel Standards', 'Manual N Calculations'],
    results: 'Zero field modifications required for structural or mechanical systems. Saved developer an estimated $42,500 in framing correction labor and prevented 2 weeks of construction delay.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'woodlands-villa',
    name: 'The Woodlands Luxury Villa',
    location: 'The Woodlands, TX',
    buildingType: 'Custom Luxury Residential',
    area: '6,800 sq. ft.',
    scope: 'Structural Foundation & Framing Engineering, Wind Load Calculations, and Permit Drawings',
    category: 'residential',
    challenges: 'The site geotechnical survey revealed highly expansive clay soil with high plastic index ratings. The architectural design also required 22-foot high ceiling spans and wall-to-wall glass windows on the back patio, presenting shear resistance issues.',
    solution: 'Engineered a reinforced bell pier foundation system anchoring into stable soil layers 15 feet down. Formulated structural timber frames supplemented by structural steel portal frames to resist lateral wind loads up to 125 mph without blocking window spans.',
    deliverables: ['Pier Drilling Layout & Detail prints', 'PE-Stamped Structural Calculations Pack', 'Shear Wall Shear Resistance Schedules', 'Wind Load Tie-down Strapping Specifications'],
    technologies: ['RISA-3D', 'AutoCAD', 'WoodWorks Sizer', 'IBC Section 1609 Compliance'],
    results: 'Obtained fast city building permits within 5 days of submittal. Foundation settlement calculations project less than 0.25 inches of movement over 30 years.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'galveston-depot',
    name: 'Galveston Logistic Distribution Depot',
    location: 'Galveston, TX',
    buildingType: 'Industrial Distribution Hub',
    area: '120,000 sq. ft.',
    scope: 'Industrial Structural Steel Design, Concrete Tilt-up Wall Design, and Foundation Slabs',
    category: 'industrial',
    challenges: 'High wind coastal environment (Hurricane Risk Zone) required heavy concrete tilt-up panel resilience. High forklift wheel loads and heavy metal warehouse racks demanded durable concrete slab joint designs to prevent floor cracking.',
    solution: 'Designed 9-inch thick reinforced tilt-up concrete wall panels with welded connection joints to withstand wind shear. Slab was modeled with macro-synthetic fiber reinforcements and customized expansion dowel joints to support 80,000 lbs warehouse rack columns.',
    deliverables: ['Tilt-up Concrete Panel shop drawings', 'Slab-on-Grade Expansion Joint schedule', 'Wind Shear frame calculations', 'Crane foundation details'],
    technologies: ['SAP2000', 'Revit Structure', 'ACI 360 Slab Standards', 'AISC Wind Code'],
    results: 'Successfully passed local building department storm code reviews. Tilt-up panels were erected in 4 working days with zero alignment errors.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'downtown-office',
    name: 'Downtown Office HQ Fit-out',
    location: 'Houston, TX',
    buildingType: 'Commercial Corporate Office',
    area: '25,000 sq. ft.',
    scope: 'Architectural space planning, Interior lighting design, ComCheck compliance, and MEP updates',
    category: 'commercial',
    challenges: 'Converting an older high-ceiling commercial structure into a corporate office with open workspaces. Had to coordinate fresh air mechanical intake volumes with existing building HVAC units and comply with strict energy limits.',
    solution: 'Reworked space circulation paths for ADA accessibility. Rebalanced electrical load schedules across office panels and integrated high-efficiency LED grids. Generated energy compliance certificates to verify code compliance.',
    deliverables: ['Interior Space Floor Plans', 'ADA Egress site layouts', 'Electrical single-line modifications', 'Title 24 / ComCheck Energy certificates', 'Acoustic partition details'],
    technologies: ['AutoCAD Architecture', 'Trace 700', 'Dialux Lighting Program', 'ComCheck'],
    results: 'Obtained certificate of occupancy within 2 weeks of municipal submittal. Reduced calculated electrical lighting loads by 22% compared to standard base codes.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop'
  }
];

export default function Portfolio() {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div style={styles.containerPage}>
      <SchemaManager 
        title="Project Portfolio & Case Studies" 
        description="Explore case studies of custom luxury residential builds, multifamily complexes, commercial spaces, and industrial pre-construction projects."
      />
      {selectedProject && (
        <SchemaManager 
          title={`${selectedProject.name} Case Study`}
          description={selectedProject.scope}
          schemaType="Project"
          schemaData={selectedProject}
        />
      )}

      {/* Header section */}
      <section style={styles.heroSection}>
        <div className="container" style={styles.heroContent}>
          <span style={styles.tag}>CASE STUDIES</span>
          <h1 style={styles.title}>Our Pre-Construction Portfolio</h1>
          <p style={styles.subtitle}>
            Explore our engineering and design projects across the US. We verify spatial integrity and structural safety before construction begins.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section style={styles.filterSection}>
        <div className="container" style={styles.tabsContainer}>
          {['all', 'residential', 'multifamily', 'commercial', 'industrial'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                ...styles.tabBtn,
                ...(filter === cat ? styles.tabBtnActive : {})
              }}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>
      </section>

      {/* Project Grid */}
      <section style={styles.gridSection}>
        <div className="container grid-cols-2" style={{ gap: '2.5rem' }}>
          {filteredProjects.map((p) => (
            <div key={p.id} style={styles.projectCard} className="glass">
              <div style={{ ...styles.cardImage, backgroundImage: `url(${p.image})` }}>
                <div style={styles.imageOverlay} />
                <span style={styles.cardLocation}><MapPin size={12} /> {p.location}</span>
              </div>
              <div style={styles.cardBody}>
                <span style={styles.cardType}>{p.buildingType}</span>
                <h3 style={styles.cardTitle}>{p.name}</h3>
                <p style={styles.cardScope}><strong>Scope:</strong> {p.scope}</p>
                <div style={styles.cardStats}>
                  <span><strong>Area:</strong> {p.area}</span>
                </div>
                <button 
                  onClick={() => setSelectedProject(p)} 
                  style={styles.detailsBtn}
                >
                  Read Detailed Case Study <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Study Detail Modal Overlay */}
      {selectedProject && (
        <div style={styles.overlay}>
          <div style={styles.overlayBackdrop} onClick={() => setSelectedProject(null)} />
          <div style={styles.modal} className="animate-fade-in">
            <button style={styles.closeBtn} onClick={() => setSelectedProject(null)}>
              <Minimize size={20} />
            </button>
            
            <div style={styles.modalHeader}>
              <span style={styles.modalLoc}><MapPin size={14} /> {selectedProject.location}</span>
              <h2 style={styles.modalTitle}>{selectedProject.name}</h2>
              <p style={styles.modalType}><strong>Type:</strong> {selectedProject.buildingType} | <strong>Area:</strong> {selectedProject.area}</p>
            </div>

            <div style={styles.modalImage} style={{ backgroundImage: `url(${selectedProject.image})`, height: '240px', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '12px', marginBottom: '1.5rem' }} />

            <div style={styles.modalContent}>
              <div style={styles.modalSection}>
                <h4 style={styles.sectionHeading}>Project Scope</h4>
                <p style={styles.modalParagraph}>{selectedProject.scope}</p>
              </div>

              <div style={styles.modalSection}>
                <h4 style={styles.sectionHeading}><ShieldCheck size={16} style={styles.secIcon} /> Project Challenges</h4>
                <p style={styles.modalParagraph}>{selectedProject.challenges}</p>
              </div>

              <div style={styles.modalSection}>
                <h4 style={styles.sectionHeading}><Settings size={16} style={styles.secIcon} /> Engineering Solution</h4>
                <p style={styles.modalParagraph}>{selectedProject.solution}</p>
              </div>

              <div style={styles.modalSection}>
                <h4 style={styles.sectionHeading}>Outputs & Deliverables Provided</h4>
                <div style={styles.delGrid}>
                  {selectedProject.deliverables.map((item, idx) => (
                    <div key={idx} style={styles.delBadge}>
                      <CheckSquare size={12} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={styles.modalSection}>
                <h4 style={styles.sectionHeading}>Applied Software & Standard Codes</h4>
                <div style={styles.techGrid}>
                  {selectedProject.technologies.map((item, idx) => (
                    <div key={idx} style={styles.techBadge}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ ...styles.modalSection, backgroundColor: '#f0fdf4', border: '1px solid #dcfce7', borderRadius: '8px', padding: '1.25rem' }}>
                <h4 style={{ ...styles.sectionHeading, color: '#166534' }}>Verifiable Outcome & Results</h4>
                <p style={{ ...styles.modalParagraph, color: '#14532d', fontWeight: '500', marginBottom: 0 }}>{selectedProject.results}</p>
              </div>
            </div>

            <button style={styles.returnBtn} onClick={() => setSelectedProject(null)}>
              Return to Portfolio Gallery
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  containerPage: {
    backgroundColor: '#f8fafc',
    paddingBottom: '5rem',
  },
  heroSection: {
    backgroundColor: '#1b3b6f',
    color: '#ffffff',
    padding: '5rem 0',
  },
  heroContent: {
    maxWidth: '800px',
  },
  tag: {
    fontSize: '0.8rem',
    fontWeight: '700',
    color: '#c5a880',
    letterSpacing: '1.5px',
    display: 'block',
    marginBottom: '0.5rem',
  },
  title: {
    fontSize: '2.5rem',
    color: '#ffffff',
    marginBottom: '1rem',
    fontFamily: "'Outfit', sans-serif",
  },
  subtitle: {
    fontSize: '1.05rem',
    color: '#cbd5e1',
    lineHeight: '1.5',
  },
  filterSection: {
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #e2e8f0',
    padding: '1rem 0',
  },
  tabsContainer: {
    display: 'flex',
    gap: '0.75rem',
    flexWrap: 'wrap',
  },
  tabBtn: {
    padding: '0.5rem 1.25rem',
    border: '1px solid #cbd5e1',
    borderRadius: '6px',
    backgroundColor: '#f8fafc',
    color: '#475569',
    fontWeight: '600',
    fontSize: '0.8rem',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  tabBtnActive: {
    backgroundColor: '#1b3b6f',
    borderColor: '#1b3b6f',
    color: '#ffffff',
  },
  gridSection: {
    padding: '4rem 0',
  },
  projectCard: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    overflow: 'hidden',
    border: '1px solid #e2e8f0',
    display: 'flex',
    flexDirection: 'column',
    transition: 'all 0.3s',
  },
  cardImage: {
    height: '240px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(15, 23, 42, 0.15)',
  },
  cardLocation: {
    position: 'absolute',
    bottom: '1rem',
    left: '1rem',
    backgroundColor: 'rgba(15, 23, 42, 0.75)',
    color: '#ffffff',
    padding: '0.3rem 0.6rem',
    borderRadius: '4px',
    fontSize: '0.75rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.3rem',
  },
  cardBody: {
    padding: '1.75rem',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  cardType: {
    fontSize: '0.8rem',
    color: '#c5a880',
    fontWeight: '700',
    textTransform: 'uppercase',
    marginBottom: '0.3rem',
  },
  cardTitle: {
    fontSize: '1.35rem',
    color: '#0f172a',
    marginBottom: '0.8rem',
  },
  cardScope: {
    fontSize: '0.88rem',
    color: '#475569',
    marginBottom: '1rem',
    lineHeight: '1.5',
    flexGrow: 1,
  },
  cardStats: {
    borderTop: '1px solid #f1f5f9',
    paddingTop: '0.8rem',
    marginBottom: '1.25rem',
    fontSize: '0.85rem',
    color: '#64748b',
  },
  detailsBtn: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#1b3b6f',
    fontWeight: '700',
    fontSize: '0.9rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
    padding: 0,
    alignSelf: 'flex-start',
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
  },
  overlayBackdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(15, 23, 42, 0.65)',
    backdropFilter: 'blur(8px)',
  },
  modal: {
    position: 'relative',
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    width: '100%',
    maxWidth: '700px',
    maxHeight: '90vh',
    overflowY: 'auto',
    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
    padding: '2.5rem',
    zIndex: 1001,
  },
  closeBtn: {
    position: 'absolute',
    top: '1.25rem',
    right: '1.25rem',
    background: 'none',
    border: 'none',
    color: '#64748b',
    cursor: 'pointer',
    padding: '0.25rem',
  },
  modalHeader: {
    marginBottom: '1rem',
  },
  modalLoc: {
    fontSize: '0.8rem',
    color: '#c5a880',
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
    textTransform: 'uppercase',
    marginBottom: '0.3rem',
  },
  modalTitle: {
    fontSize: '1.8rem',
    color: '#0f172a',
    marginBottom: '0.4rem',
  },
  modalType: {
    fontSize: '0.88rem',
    color: '#64748b',
  },
  modalContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    marginBottom: '2rem',
  },
  modalSection: {
    borderBottom: '1px solid #f1f5f9',
    paddingBottom: '1rem',
  },
  sectionHeading: {
    fontSize: '1rem',
    color: '#1b3b6f',
    marginBottom: '0.5rem',
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
  },
  secIcon: {
    color: '#c5a880',
  },
  modalParagraph: {
    fontSize: '0.9rem',
    lineHeight: '1.6',
    color: '#475569',
  },
  delGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginTop: '0.5rem',
  },
  delBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.3rem',
    backgroundColor: '#f1f5f9',
    color: '#334155',
    padding: '0.3rem 0.6rem',
    borderRadius: '4px',
    fontSize: '0.8rem',
    fontWeight: '500',
    border: '1px solid #cbd5e1',
  },
  techGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginTop: '0.5rem',
  },
  techBadge: {
    backgroundColor: 'rgba(27, 59, 111, 0.05)',
    color: '#1b3b6f',
    border: '1px solid rgba(27, 59, 111, 0.2)',
    padding: '0.3rem 0.6rem',
    borderRadius: '4px',
    fontSize: '0.8rem',
    fontWeight: '600',
  },
  returnBtn: {
    width: '100%',
    backgroundColor: '#1b3b6f',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    padding: '0.8rem',
    fontWeight: '600',
    fontSize: '0.95rem',
    cursor: 'pointer',
    boxShadow: '0 4px 6px -1px rgba(27, 59, 111, 0.2)',
    transition: 'all 0.2s',
  }
};

// Add responsive behavior dynamically
if (typeof document !== 'undefined') {
  const portMedia = `
    .project-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 25px -5px rgba(0,0,0,0.08);
      border-color: #cbd5e1 !important;
    }
  `;
  const styleSheet = document.createElement("style");
  styleSheet.innerText = portMedia;
  document.head.appendChild(styleSheet);
}
export { styles };
