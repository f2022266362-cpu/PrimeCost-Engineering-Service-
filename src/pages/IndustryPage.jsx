import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Building2, CheckSquare, ShieldAlert, FileCheck, Wrench, 
  ArrowRight, HardDrive, LayoutGrid, Layers
} from 'lucide-react';
import SchemaManager from '../components/SchemaManager';

const industriesData = {
  'residential': {
    name: 'Residential Projects',
    subtitle: 'Custom Homes, Luxury Estates, Extensions & Renovations',
    description: 'We engineer and design structurally sound, beautiful residential homes that strictly comply with local zoning laws and structural standards. From wood-frame luxury builds to concrete retaining foundations, we serve homeowners, custom builders, and residential developers.',
    features: [
      { name: 'Custom Homes', desc: 'Complete architectural layouts, framing models, and foundation engineering optimized for architectural expression.' },
      { name: 'Luxury Estates', desc: 'High-end engineering plans supporting long-span steel support girders, tall ceilings, and scenic cantilevered patios.' },
      { name: 'Full Renovations', desc: 'Load-bearing wall removal planning, crawlspace conversions, and timber framing reinforcement calculations.' },
      { name: 'Structural Additions', desc: 'Designing foundation underpinnings and seismic attachments to extend living areas safely.' }
    ],
    challenges: [
      { title: 'Expansive Soils & Settlement', desc: 'Houston and regional clay soils settle unevenly. We resolve this by designing ribbed slab-on-grade foundations and bell pier underpinnings.' },
      { title: 'Wind & Hurricane Compliance', desc: 'Residential coastal zones demand wind-resistant tie-down configurations, hurricane strapping, and shear wall layouts.' }
    ],
    deliverables: ['PE-Stamped Structural Framing Plans', 'Foundation Plan & Pier Placement Coordinates', 'Wind Load Tie-down Strapping Specifications', 'Zoning setback Site Plan Sheets', 'Architectural Cross-sections & Window Schedules'],
    accent: '#1b3b6f'
  },
  'multifamily': {
    name: 'Multifamily Projects',
    subtitle: 'Apartments, Condominiums & Mixed-Use Retail Developments',
    description: 'Providing pre-construction coordination and design support for large-scale multi-unit housing. We balance architectural space yields with structural safety and MEP fire code safety, helping commercial developers build with high efficiency.',
    features: [
      { name: 'Apartment complexes', desc: 'LOD 300 Revit modeling coordinating structural floor trusses with mechanical supply ducts across multiple stories.' },
      { name: 'Condominiums', desc: 'Acoustically insulated wall specifications, parking garage concrete columns, and post-tensioned slab designs.' },
      { name: 'Mixed-Use Developments', desc: 'Integrating ground-floor commercial restaurant shells (requiring grease traps) with upper-level timber or light-gauge framing.' }
    ],
    challenges: [
      { title: 'Discipline Clash Risks', desc: 'Multifamily properties run thousands of plumbing runs and HVAC trunks through framing members. We mitigate this using Navisworks clash reports.' },
      { title: 'Sound Transmission (STC) & Fire Walls', desc: 'Maintaining partition wall acoustic dampening and 2-hour fire assemblies in accordance with occupancy codes.' }
    ],
    deliverables: ['3D Coordinated Revit Federated Models', 'Post-Tensioned (PT) Concrete Slab Details', 'Plumbing Riser diagrams & Fire Separation Layouts', 'Acoustic Sound Control Wall Schedules', 'Zoning Variance Exhibits'],
    accent: '#0f172a'
  },
  'commercial': {
    name: 'Commercial Projects',
    subtitle: 'Office Complexes, Retail Centers, Restaurants & Warehouses',
    description: 'Engineering and design layouts that optimize open retail space, meet accessibility codes, and handle high utility requirements. We coordinate closely with franchise designers and retail developers to deliver fast building approvals.',
    features: [
      { name: 'Retail Centers', desc: 'Modular store shell layouts, load-bearing exterior glass windows, and unified customer parking configurations.' },
      { name: 'Restaurants & Grills', desc: 'High-power exhaust hoods, utility gas inputs, specialized MEP panel schedules, and sanitary grease traps.' },
      { name: 'Office Buildings', desc: 'Flexible open space planning, curtain wall detailing, multi-zone HVAC configurations, and elevators.' },
      { name: 'Commercial Warehouses', desc: 'Tilt-up concrete wall panel designs, heavy dock leveling plans, and utility power configurations.' }
    ],
    challenges: [
      { title: 'High Mechanical Utility Intake', desc: 'Restaurants demand extreme power load splits. We balance commercial panels and size grease trap capacity to prevent city code rejections.' },
      { title: 'Accessibility Compliance', desc: 'Strict adherence to ADA guidelines for ramps, customer restrooms, egress widths, and parking spaces.' }
    ],
    deliverables: ['ADA Accessibility Site Plans', 'Commercial MEP Panel Schedule Diagrams', 'Grease Trap Sizing calculations', 'Structural Tilt-up Wall Panel Prints', 'Title 24 & ComCheck compliance sheets'],
    accent: '#c5a880'
  },
  'industrial': {
    name: 'Industrial Projects',
    subtitle: 'Manufacturing Plants, Distribution Hubs & Processing Facilities',
    description: 'Focusing on large-span steel designs, machine foundations, distribution loading docks, and heavy environmental utility loops. We prioritize structural durability and mechanical safety for facility managers and industrial developers.',
    features: [
      { name: 'Manufacturing Facilities', desc: 'Heavy overhead gantry crane support frames, vibration-isolated concrete machine slabs, and toxic gas ventilation.' },
      { name: 'Distribution Centers', desc: 'High-clearance steel framing, column spacing grids, distribution dock layouts, and heavy fire hydrants.' },
      { name: 'Processing Plants', desc: 'Heavy chemical drainage plumbing routes, high pressure gas layouts, and structural metal support stairs.' }
    ],
    challenges: [
      { title: 'Dynamic Vibration loads', desc: 'Heavy stamping machines vibrate foundations, causing surrounding cracks. We design thick, isolated concrete slabs with neoprene joints.' },
      { title: 'Hazardous Fire Zoning', desc: 'Industrial chemical processing requires custom safety zones, emergency exhaust paths, and spark-proof electrical setups.' }
    ],
    deliverables: ['Vibration-Isolated Machine Slabs', 'Structural Steel Framing (AISC) Calculations', 'Heavy Utility Piping Diagrams', 'Overhead Crane Runway structural plans', 'Hazardous Materials Containment Plan'],
    accent: '#334155'
  }
};

export default function IndustryPage() {
  const { industryId } = useParams();
  const industry = industriesData[industryId] || industriesData['residential'];

  return (
    <div style={styles.containerPage}>
      <SchemaManager 
        title={industry.name} 
        description={industry.description}
        schemaType="Service"
        schemaData={{
          name: industry.name,
          description: industry.description
        }}
      />

      {/* Hero Banner */}
      <section style={{ ...styles.banner, borderBottom: `6px solid ${industry.accent}` }}>
        <div style={styles.bannerOverlay} />
        <div className="container" style={styles.bannerContent}>
          <span style={styles.bannerTag}>SECTOR SPECIALIZATION</span>
          <h1 style={styles.bannerTitle}>{industry.name}</h1>
          <p style={styles.bannerDesc}>{industry.subtitle}</p>
        </div>
      </section>

      {/* Grid Content */}
      <div className="container" style={styles.layoutGrid}>
        {/* Left Columns */}
        <div style={styles.contentCol}>
          
          {/* Overview */}
          <div style={styles.sectionCard} className="glass">
            <h2 style={styles.sectionTitle}>Sector Scope & Approach</h2>
            <p style={styles.paragraph}>{industry.description}</p>
            <p style={styles.paragraph}>
              With over 26 years of construction engineering history, we design files that help minimize staging delays. We provide fully coordinated sets that permit speedier licensing by local city departments.
            </p>
          </div>

          {/* Sub-Specialities */}
          <div style={styles.sectionCard} className="glass">
            <h2 style={styles.sectionTitle}>Projects We Cover</h2>
            <div style={styles.featureList}>
              {industry.features.map((feat, idx) => (
                <div key={idx} style={styles.featureItem}>
                  <h4 style={styles.featureName}>
                    <Layers size={16} style={{ color: industry.accent, marginRight: '0.5rem' }} />
                    {feat.name}
                  </h4>
                  <p style={styles.featureDesc}>{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sector Specific Challenges */}
          <div style={styles.sectionCard} className="glass">
            <h2 style={styles.sectionTitle}>Sector-Specific Engineering Challenges</h2>
            <p style={{ ...styles.paragraph, marginBottom: '1.5rem' }}>
              Every industry presents specific structural failures or code obstacles. We prevent them at the design stage:
            </p>
            <div style={styles.challengeList}>
              {industry.challenges.map((chal, idx) => (
                <div key={idx} style={styles.challengeItem}>
                  <div style={styles.challengeHeader}>
                    <ShieldAlert size={18} style={styles.alertIcon} />
                    <h4 style={styles.challengeTitle}>{chal.title}</h4>
                  </div>
                  <p style={styles.challengeDesc}>{chal.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sector Deliverables */}
          <div style={styles.sectionCard} className="glass">
            <h2 style={styles.sectionTitle}>Sector Specific pre-construction Outputs</h2>
            <div style={styles.deliverableGrid}>
              {industry.deliverables.map((del, idx) => (
                <div key={idx} style={styles.delItem}>
                  <FileCheck size={16} style={{ color: '#10b981' }} />
                  <span style={styles.delText}>{del}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div style={styles.sidebar}>
          <div style={styles.sidebarCard} className="glass">
            <h3 style={styles.sidebarTitle}>Sectors Covered</h3>
            <div style={styles.sidebarList}>
              {Object.keys(industriesData).map((key) => {
                const isActive = industryId === key;
                return (
                  <Link 
                    key={key} 
                    to={`/industries/${key}`}
                    style={{
                      ...styles.sidebarLink,
                      ...(isActive ? { backgroundColor: industry.accent, color: '#ffffff' } : {})
                    }}
                  >
                    <span>{industriesData[key].name}</span>
                    <ArrowRight size={14} />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Consultation CTA */}
          <div style={{ ...styles.sidebarCard, backgroundColor: '#0f172a', color: '#ffffff' }}>
            <h3 style={{ ...styles.sidebarTitle, color: '#ffffff' }}>Need Scoping Support?</h3>
            <p style={{ fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '1.5rem', lineHeight: '1.5' }}>
              Book an engineering scoping review session to analyze sets and align parameters with budget and code standards.
            </p>
            <Link 
              to="/about"
              style={{ ...styles.sidebarCta, backgroundColor: industry.accent, color: '#ffffff' }}
            >
              Contact HQ Staff
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  containerPage: {
    backgroundColor: '#f8fafc',
    paddingBottom: '5rem',
  },
  banner: {
    position: 'relative',
    background: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop") no-repeat center/cover',
    padding: '5rem 0',
    color: '#ffffff',
    marginBottom: '3rem',
  },
  bannerOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(15, 23, 42, 0.8)',
  },
  bannerContent: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '850px',
  },
  bannerTag: {
    fontSize: '0.78rem',
    fontWeight: '700',
    color: '#c5a880',
    letterSpacing: '1.5px',
    display: 'block',
    marginBottom: '0.5rem',
  },
  bannerTitle: {
    fontSize: '2.5rem',
    color: '#ffffff',
    marginBottom: '0.75rem',
    fontFamily: "'Outfit', sans-serif",
  },
  bannerDesc: {
    fontSize: '1rem',
    color: '#e2e8f0',
    lineHeight: '1.5',
  },
  layoutGrid: {
    display: 'flex',
    gap: '2.5rem',
  },
  contentCol: {
    flex: '3',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  sidebar: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    minWidth: '280px',
  },
  sectionCard: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    padding: '2.5rem',
    border: '1px solid #e2e8f0',
  },
  sectionTitle: {
    fontSize: '1.5rem',
    color: '#0f172a',
    marginBottom: '1.5rem',
    fontFamily: "'Outfit', sans-serif",
    borderBottom: '2px solid #f1f5f9',
    paddingBottom: '0.75rem',
  },
  paragraph: {
    fontSize: '0.95rem',
    lineHeight: '1.6',
    color: '#475569',
    marginBottom: '1rem',
  },
  featureList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  featureItem: {
    borderLeft: '4px solid #e2e8f0',
    paddingLeft: '1.25rem',
  },
  featureName: {
    fontSize: '1.1rem',
    color: '#0f172a',
    marginBottom: '0.4rem',
    display: 'flex',
    alignItems: 'center',
  },
  featureDesc: {
    fontSize: '0.9rem',
    color: '#64748b',
    lineHeight: '1.5',
  },
  challengeList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
  },
  challengeItem: {
    backgroundColor: '#fffbeb',
    border: '1px solid #fef3c7',
    borderRadius: '8px',
    padding: '1.25rem',
  },
  challengeHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '0.5rem',
  },
  alertIcon: {
    color: '#d97706',
  },
  challengeTitle: {
    fontSize: '1rem',
    color: '#78350f',
  },
  challengeDesc: {
    fontSize: '0.88rem',
    color: '#92400e',
    lineHeight: '1.5',
  },
  deliverableGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1rem',
  },
  delItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  delText: {
    fontSize: '0.88rem',
    color: '#475569',
  },
  sidebarCard: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    padding: '1.75rem',
    border: '1px solid #e2e8f0',
  },
  sidebarTitle: {
    fontSize: '1.15rem',
    color: '#0f172a',
    fontFamily: "'Outfit', sans-serif",
    marginBottom: '1.25rem',
    paddingBottom: '0.5rem',
    borderBottom: '2px solid #1b3b6f',
    alignSelf: 'flex-start',
  },
  sidebarList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.6rem',
  },
  sidebarLink: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.65rem 1rem',
    borderRadius: '8px',
    fontSize: '0.88rem',
    fontWeight: '600',
    color: '#475569',
    backgroundColor: '#f8fafc',
    transition: 'all 0.2s',
  },
  sidebarCta: {
    display: 'block',
    width: '100%',
    textAlign: 'center',
    padding: '0.75rem',
    borderRadius: '8px',
    fontWeight: '700',
    fontSize: '0.88rem',
  }
};
export { styles };
