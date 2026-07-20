import React, { useState } from 'react';
import { Minimize, CheckSquare, Settings, ShieldCheck, MapPin } from 'lucide-react';
import SchemaManager from '../components/SchemaManager';
import ProjectCard from '../components/ui/ProjectCard';
import SectionHeading from '../components/ui/SectionHeading';
import GlassCard from '../components/ui/GlassCard';

// Data modules
import { projects } from '../data/projects';

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
        description="Explore case studies of custom luxury residential builds, multifamily complexes, commercial spaces, and industrial projects."
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
            Explore our structural calculations and clash check clearances across the US. We verify spatial integrity and structural safety before construction begins.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section style={styles.filterSection}>
        <div className="container" style={styles.tabsContainer}>
          {['all', 'residential', 'multifamily', 'commercial', 'industrial', 'healthcare', 'education'].map((cat) => (
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
        <div className="container" style={styles.projectsGrid}>
          {filteredProjects.map((p) => (
            <ProjectCard 
              key={p.id} 
              project={p} 
              onViewDetails={() => setSelectedProject(p)} 
            />
          ))}
        </div>
      </section>

      {/* Case Study Detail Modal Overlay */}
      {selectedProject && (
        <div style={styles.overlay}>
          <div style={styles.overlayBackdrop} onClick={() => setSelectedProject(null)} />
          <div style={styles.modal} className="animate-fade-in glass-panel">
            <button style={styles.closeBtn} onClick={() => setSelectedProject(null)}>
              <Minimize size={20} />
            </button>
            
            <div style={styles.modalHeader}>
              <span style={styles.modalLoc}><MapPin size={14} style={{ color: '#C89A45' }} /> {selectedProject.location}</span>
              <h2 style={styles.modalTitle}>{selectedProject.name}</h2>
              <p style={styles.modalType}><strong>Type:</strong> {selectedProject.industry} | <strong>Area:</strong> {selectedProject.area}</p>
            </div>

            <div style={{ backgroundImage: `url(${selectedProject.image})`, height: '240px', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '12px', marginBottom: '1.5rem' }} />

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
                  {selectedProject.deliverables ? selectedProject.deliverables.map((item, idx) => (
                    <div key={idx} style={styles.delBadge}>
                      <CheckSquare size={12} />
                      <span>{item}</span>
                    </div>
                  )) : (
                    <span>PE-Stamped blueprints and structural calculation packs.</span>
                  )}
                </div>
              </div>

              <div style={styles.modalSection}>
                <h4 style={styles.sectionHeading}>Applied Software & Standards</h4>
                <div style={styles.techGrid}>
                  {selectedProject.technologies ? selectedProject.technologies.map((item, idx) => (
                    <div key={idx} style={styles.techBadge}>
                      {item}
                    </div>
                  )) : (
                    <span>Revit, Navisworks, ETABS, AISC Standards.</span>
                  )}
                </div>
              </div>

              <div style={{ ...styles.modalSection, backgroundColor: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: '8px', padding: '1.25rem' }}>
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
    paddingBottom: '5rem',
    paddingTop: '6rem'
  },
  heroSection: {
    padding: '3rem 0',
  },
  heroContent: {
    maxWidth: '800px',
  },
  tag: {
    fontSize: '0.8rem',
    fontWeight: '700',
    color: '#C89A45',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    display: 'block',
    marginBottom: '0.5rem',
  },
  title: {
    fontSize: '2.5rem',
    color: '#0F2446',
    fontWeight: '800',
    fontFamily: "'Outfit', sans-serif",
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1.1rem',
    color: '#64748b',
    lineHeight: '1.6',
  },
  filterSection: {
    padding: '1rem 0 2rem 0',
  },
  tabsContainer: {
    display: 'flex',
    gap: '0.75rem',
    flexWrap: 'wrap',
  },
  tabBtn: {
    padding: '0.5rem 1.25rem',
    borderRadius: '999px',
    border: '1px solid rgba(15, 36, 70, 0.15)',
    backgroundColor: 'transparent',
    color: '#0F2446',
    fontWeight: '700',
    fontSize: '0.8rem',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
  },
  tabBtnActive: {
    backgroundColor: '#0F2446',
    color: '#ffffff',
    borderColor: '#0F2446',
    boxShadow: '0 4px 12px rgba(15, 36, 70, 0.15)',
  },
  gridSection: {
    padding: '2rem 0',
  },
  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '2rem',
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
    backgroundColor: 'rgba(15, 36, 70, 0.65)',
    backdropFilter: 'blur(8px)',
  },
  modal: {
    position: 'relative',
    borderRadius: '16px',
    width: '100%',
    maxWidth: '700px',
    maxHeight: '90vh',
    overflowY: 'auto',
    boxShadow: '0 25px 50px -12px rgba(15, 36, 70, 0.25)',
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
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
    textTransform: 'uppercase',
    marginBottom: '0.3rem',
  },
  modalTitle: {
    fontSize: '1.8rem',
    color: '#0F2446',
    marginBottom: '0.4rem',
    fontWeight: '800',
    fontFamily: "'Outfit', sans-serif",
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
    borderBottom: '1px solid rgba(15, 36, 70, 0.05)',
    paddingBottom: '1rem',
  },
  sectionHeading: {
    fontSize: '1rem',
    color: '#0F2446',
    marginBottom: '0.5rem',
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
  },
  secIcon: {
    color: '#C89A45',
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
    backgroundColor: 'rgba(15, 36, 70, 0.05)',
    color: '#0F2446',
    padding: '0.3rem 0.6rem',
    borderRadius: '4px',
    fontSize: '0.8rem',
    fontWeight: '600',
    border: '1px solid rgba(15, 36, 70, 0.1)',
  },
  techGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginTop: '0.5rem',
  },
  techBadge: {
    backgroundColor: 'rgba(200, 154, 69, 0.05)',
    color: '#C89A45',
    border: '1px solid rgba(200, 154, 69, 0.2)',
    padding: '0.3rem 0.6rem',
    borderRadius: '4px',
    fontSize: '0.8rem',
    fontWeight: '600',
  },
  returnBtn: {
    width: '100%',
    backgroundColor: '#0F2446',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    padding: '0.8rem',
    fontWeight: '600',
    fontSize: '0.95rem',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(15, 36, 70, 0.15)',
    transition: 'all 0.2s',
  }
};

// Add responsive overrides dynamically
if (typeof document !== 'undefined') {
  const mediaStyles = `
    @media (max-width: 991px) {
      .projectsGrid {
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 1.5rem !important;
      }
    }
    @media (max-width: 600px) {
      .projectsGrid {
        grid-template-columns: 1fr !important;
      }
    }
  `;
  const styleSheet = document.createElement("style");
  styleSheet.innerText = mediaStyles;
  document.head.appendChild(styleSheet);
}
export { styles };
