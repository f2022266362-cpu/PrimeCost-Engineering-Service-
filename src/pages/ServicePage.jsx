import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  CheckCircle, HelpCircle, ArrowRight, HardDrive, Users, 
  ChevronRight, Calendar, Info, PlayCircle, Settings
} from 'lucide-react';
import SchemaManager from '../components/SchemaManager';

const servicesData = {
  'architectural-design': {
    name: 'Architectural Design Services',
    description: 'We provide complete architectural solutions including conceptual design, floor plans, permit drawings, renovation plans, construction documents, code compliance reviews, and 3D modeling.',
    whoNeedsIt: [
      { role: 'Developers', context: 'Need fast conceptual designs and permit-ready drawing packages to secure zoning approvals and start site prep.' },
      { role: 'Homeowners', context: 'Planning custom luxury homes, renovations, or expansions requiring compliance with local building codes.' },
      { role: 'General Contractors', context: 'Requesting construction-ready, highly coordinated details to avoid staging errors and client disputes.' },
      { role: 'Real Estate Investors', context: 'Seeking to maximize square footage yields on rehabilitation projects or building conversions.' }
    ],
    process: [
      { step: '1', title: 'Initial Consultation', desc: 'Define spatial parameters, aesthetic style, program needs, and zoning code restrictions.' },
      { step: '2', title: 'Project Analysis', desc: 'Assess topography, site constraints, solar orientation, and local municipal guidelines.' },
      { step: '3', title: 'Design Development', desc: 'Craft conceptual floor plans and elevations, iterating with client feedback.' },
      { step: '4', title: 'Coordination', desc: 'Integrate structural layouts and initial mechanical/electrical openings.' },
      { step: '5', title: 'Documentation', desc: 'Compile permit-ready construction sheets with sections, dimensions, and specifications.' },
      { step: '6', title: 'Final Delivery', desc: 'Prepare and sign off on structural coordination and transmit the finished permit set.' }
    ],
    deliverables: ['Site Plans & Site Analysis', 'Dimensional Floor Plans', 'Building Elevations', 'Transverse & Longitudinal Sections', 'Permit Set Packages', 'Construction Specifications Sheets', '3D Massing Models'],
    software: ['AutoCAD', 'Revit', 'SketchUp', 'Enscape'],
    faqs: [
      { question: 'What is included in architectural design services?', answer: 'Architectural design services typically include concept development, floor plans, elevations, sections, permit drawings, code compliance reviews, and construction documentation.' },
      { question: 'Do you prepare zoning review packages?', answer: 'Yes. We analyze local municipal rules, setbacks, and floor area ratios (FAR) to prepare complete compliance sets for city planning boards.' },
      { question: 'How do you coordinate with structural engineers?', answer: 'Our architectural teams work side-by-side with our structural engineers. Calculations are integrated natively within the model, ensuring zero layout conflicts.' }
    ]
  },
  'structural-engineering': {
    name: 'Structural Engineering Services',
    description: 'Our structural engineers design safe, efficient, and code-compliant structures for residential, commercial, industrial, and multifamily developments.',
    whoNeedsIt: [
      { role: 'Architects', context: 'Require calculations, load schedules, and structural framing coordinates to complement architectural plans.' },
      { role: 'Developers', context: 'Seeking material optimization (value engineering) for concrete, structural steel, or timber framings.' },
      { role: 'Property Managers', context: 'Demanding structural reports, load capacity calculations, and seismic or hurricane resilience checks.' },
      { role: 'General Contractors', context: 'Need foundation shoring plans and structural repair details for field construction challenges.' }
    ],
    process: [
      { step: '1', title: 'Initial Intake', desc: 'Review architectural plans, geotechnical soils reports, and local wind/seismic coefficients.' },
      { step: '2', title: 'Load Calculations', desc: 'Apply gravity, live, snow, seismic, and wind loads to formulate primary framing models.' },
      { step: '3', title: 'Foundation Design', desc: 'Analyze soil bearing capacities to design shallow slabs-on-grade, crawlspaces, or deep pile caps.' },
      { step: '4', title: 'Framing & Truss Design', desc: 'Configure columns, beams, girders, joists, and connections in steel, concrete, wood, or masonry.' },
      { step: '5', title: 'Detail Documentation', desc: 'Draft connection schedules, reinforcement steel parameters, and structural general notes.' },
      { step: '6', title: 'Engineer Stamp/Signoff', desc: 'Transmit calculations and PE-stamped drawing sheets matching jurisdiction demands.' }
    ],
    deliverables: ['Structural Calculations Booklet', 'Geotechnical Foundation Designs', 'Framing Plan Configurations', 'Reinforced Concrete Detail Sheets', 'Structural Steel Connection Details', 'Timber Post & Beam Designs', 'Engineering Assessment Reports'],
    software: ['ETABS', 'SAP2000', 'AutoCAD', 'Revit', 'RISA-3D'],
    faqs: [
      { question: 'What building codes do you follow?', answer: 'We follow the International Building Code (IBC), state-specific guidelines (e.g., Texas Building Codes), and AISC/ACI standards.' },
      { question: 'Can you provide stamped calculations for building departments?', answer: 'Yes. All calculations are stamped by a licensed Professional Engineer (PE) in the state of the project.' },
      { question: 'Do you design foundation repairs?', answer: 'Yes, we provide engineered repair plans for slab settlement, crawlspace structural failures, and framing reinforcement.' }
    ]
  },
  'mep-engineering': {
    name: 'MEP Engineering Services',
    description: 'Comprehensive Mechanical, Electrical, Plumbing, and Fire Protection design solutions coordinated with architectural and structural disciplines.',
    whoNeedsIt: [
      { role: 'Real Estate Investors', context: 'Rehabilitating older commercial or residential properties requiring brand-new, energy-efficient MEP infrastructure.' },
      { role: 'Developers', context: 'Building large-scale projects requiring utility service sizing, transformer connections, and sewer taps.' },
      { role: 'Restaurant & Franchise Owners', context: 'Requiring heavy grease trap designs, specialized hood exhaust schematics, and high power inputs.' },
      { role: 'Contractors', context: 'Requiring clear isometric plumbing schematics, duct layouts, and panel load balances.' }
    ],
    process: [
      { step: '1', title: 'Utility Assessment', desc: 'Establish gas, electricity, water pressure, and municipal sewer baseline availability.' },
      { step: '2', title: 'Load Calculations', desc: 'Calculate heating/cooling loads, electrical panels, and hot water demands.' },
      { step: '3', title: 'Equipment Selection', desc: 'Select energy-efficient HVAC units, grease traps, pumps, and electrical gear.' },
      { step: '4', title: 'Schematic Layouts', desc: 'Draft single-line diagrams, duct paths, panel schedules, and sprinkler layouts.' },
      { step: '5', title: 'Spatial Coordination', desc: 'Ensure MEP utility runs fit above ceiling clearances without structural clashes.' },
      { step: '6', title: 'Permit Packaging', desc: 'Compile integrated mechanical, electrical, plumbing, and fire safety sets.' }
    ],
    deliverables: ['HVAC Equipment & Duct Layouts', 'Electrical Single-Line Diagrams', 'Lighting Plans & Title 24/ComCheck Compliance', 'Power Distribution & Load Balancing', 'Plumbing Isometrics & Sanitary Piping Plans', 'Fire Protection & Sprinkler Layouts', 'Energy Load Calculations (Manual J/S/D/N)'],
    software: ['Revit MEP', 'AutoCAD MEP', 'Trace 700', 'Elite Software', 'Dialux'],
    faqs: [
      { question: 'What is ComCheck or Title 24?', answer: 'These are calculations verifying that the envelope, lighting, and HVAC systems comply with building energy-efficiency codes.' },
      { question: 'Do you coordinate with utility providers?', answer: 'Yes, we prepare single-line diagrams and service demand load summaries required by electrical and water companies to install new meters.' },
      { question: 'Is fire sprinkler design included in MEP?', answer: 'Yes, we design comprehensive fire protection sprinkler layouts, riser schematics, and calculation reports.' }
    ]
  },
  'bim-cad': {
    name: 'BIM & CAD Services',
    description: 'Advanced Building Information Modeling and drafting services that improve coordination, reduce conflicts, and enhance project execution.',
    whoNeedsIt: [
      { role: 'General Contractors', context: 'Need to coordinate trade layouts, perform clash detection, and produce fabrication shop drawings.' },
      { role: 'Subcontractors', context: 'Need to generate precise sheet metal, mechanical, or plumbing pipe routing shop drawings from design models.' },
      { role: 'BIM Managers', context: 'Undergoing large projects requiring additional drafting capacity or clash resolution support.' },
      { role: 'Building Owners', context: 'Requesting a virtual digital twin model for long-term facilities management and maintenance.' }
    ],
    process: [
      { step: '1', title: 'CAD/BIM Setup', desc: 'Establish project coordinate base points, levels, naming standards, and template criteria.' },
      { step: '2', title: '3D Modeling', desc: 'Formulate architectural, structural, and MEP geometries from CAD drawings or scans.' },
      { step: '3', title: 'Clash Detection', desc: 'Combine models in Navisworks to identify spatial conflicts between structural steel and ducts.' },
      { step: '4', title: 'Clash Resolution', desc: 'Adjust geometries and reroute piping or framing to solve conflicts prior to build.' },
      { step: '5', title: 'Shop Drawings', desc: 'Isolate components to produce highly detailed layout fabrication sheets for fabrication shops.' },
      { step: '6', title: 'As-Built Compilation', desc: 'Update models to reflect field modifications, delivering the final digital twin.' }
    ],
    deliverables: ['Autodesk Revit 3D Models', 'Navisworks Federated Models', 'Clash Detection Conflict Reports', 'Mechanical Shop Drawings', 'As-Built Models & Documentation', 'AutoCAD Drafting Detail Collections', 'BIM Execution Plan (BEP)'],
    software: ['Revit', 'Navisworks Manage', 'AutoCAD', 'BIM 360/Construction Cloud', 'BIMcollab'],
    faqs: [
      { question: 'What is clash detection?', answer: 'It is a automated computer analysis that checks if different building components (e.g. steel columns and HVAC ducts) occupy the same 3D coordinate space, flagging conflicts.' },
      { question: 'Can you convert paper drawings to CAD/BIM?', answer: 'Yes, we specialize in converting physical blueprint scans or 2D AutoCAD files into fully coordinated, intelligent 3D Revit models.' },
      { question: 'What BIM levels do you support?', answer: 'We support LOD 100 through LOD 500 (As-Built and Facility Management models).' }
    ]
  },
  'interior-design': {
    name: 'Interior Design Services',
    description: 'Creating functional, aesthetic, and client-focused interior environments for commercial, hospitality, and residential properties.',
    whoNeedsIt: [
      { role: 'Homeowners', context: 'Seeking customized furniture layouts, lighting schemes, and premium material palettes for high-end residential.' },
      { role: 'Office Tenants', context: 'Requiring efficient space layouts, ergonomics, private offices, collaborative spaces, and break room details.' },
      { role: 'Hospitality Operators', context: 'Demanding thematic mood boards and luxury finish schedules to establish strong customer branding.' },
      { role: 'Developers', context: 'Requiring model home design fit-outs, rental office layouts, and common area finish plans.' }
    ],
    process: [
      { step: '1', title: 'Mood Boarding', desc: 'Compile color ranges, texturing samples, and visual references to establish project tone.' },
      { step: '2', title: 'Space Planning', desc: 'Draft horizontal circulation pathways, furniture blocks, and architectural features.' },
      { step: '3', title: 'Material Selection', desc: 'Select flooring, wall textures, millwork finishes, cabinetry, countertops, and tiles.' },
      { step: '4', title: 'Lighting Design', desc: 'Configure recessed ceiling grids, ambient hanging lights, task lights, and switch paths.' },
      { step: '5', title: 'FF&E Scheduling', desc: 'Catalog Furniture, Fixtures, and Equipment with specifications and supplier links.' },
      { step: '6', title: '3D Visualizations', desc: 'Compile interior perspective views showing real lighting, textiles, and materials.' }
    ],
    deliverables: ['Interior Space Floor Plans', 'FF&E Schedules (Furniture/Fixtures)', 'Material & Trim Spec Schedules', 'Reflected Ceiling Lighting Plans', 'Color Mood Boards', '3D Interior Visualizations', 'Custom Millwork Detail Layouts'],
    software: ['Revit', 'AutoCAD', 'SketchUp', 'Enscape', 'Photoshop'],
    faqs: [
      { question: 'What is FF&E?', answer: 'FF&E stands for Furniture, Fixtures, and Equipment. It represents all mobile components in a building that are not attached to the primary structure.' },
      { question: 'Do you help select specific paint colors and materials?', answer: 'Yes. We provide complete material finish schedules specifying brand name, color code, manufacturer, and application details.' },
      { question: 'Is space planning different from architectural design?', answer: 'Yes. Space planning focuses specifically on human circulation, furniture sizing, and interior ergonomics within the building shell.' }
    ]
  },
  'visualization': {
    name: 'Visualization Services',
    description: 'High-quality renderings and walkthroughs that help stakeholders visualize projects before construction begins.',
    whoNeedsIt: [
      { role: 'Real Estate Brokers', context: 'Need photorealistic visuals to pre-sell homes or pre-lease commercial spaces before ground break.' },
      { role: 'Developers', context: 'Need architectural images for public town hall zoning hearings and investment presentations.' },
      { role: 'Architects & Designers', context: 'Need to show clients real lighting conditions, glass reflections, and material options.' },
      { role: 'Marketing Agencies', context: 'Require high-resolution, thematic CGI animations for digital ads and site billboard print.' }
    ],
    process: [
      { step: '1', title: 'Model Review', desc: 'Import 3D models or sketch plans, correcting structural geometries and scales.' },
      { step: '2', title: 'Texturing', desc: 'Apply real-world material parameters, including specular gloss, displacement mapping, and roughness.' },
      { step: '3', title: 'Lighting Setup', desc: 'Configure geographical Sun coordinates, volumetric clouds, interior fixtures, and light bounce.' },
      { step: '4', title: 'Environment Detail', desc: 'Populate the scene with realistic landscaping, vehicles, contextual structures, and human scale.' },
      { step: '5', title: 'Draft Previews', desc: 'Transmit draft rendering angles for client composition and camera selection.' },
      { step: '6', title: 'Final Rendering', desc: 'Produce high-resolution 4K/8K images and 60fps walkthrough video animations.' }
    ],
    deliverables: ['4K Exterior CGI Renderings', '4K Interior CGI Renderings', '3D Architectural Animations', 'Walkthrough MP4 Video Flyovers', 'Social Media Marketing Renderings', 'VR 360-Degree Panoramic Views'],
    software: ['Lumion Pro', 'Enscape', '3ds Max', 'V-Ray', 'Adobe Photoshop', 'Premiere Pro'],
    faqs: [
      { question: 'What files do I need to provide for a rendering?', answer: 'We accept 3D models in Revit (.rvt), SketchUp (.skp), DWG, or PDF elevation/plan sheets.' },
      { question: 'How long does a 3D animation video take to make?', answer: 'Typically, a 60-second animated walkthrough takes 2 to 3 weeks to model, populate, render, and edit.' },
      { question: 'Can you integrate real surrounding photography?', answer: 'Yes. We can composite our 3D renderings onto drone photography of the actual construction site for absolute context.' }
    ]
  }
};

export default function ServicePage() {
  const { serviceId } = useParams();
  const service = servicesData[serviceId] || servicesData['architectural-design'];

  const [activeFaq, setActiveFaq] = useState(null);

  return (
    <div style={styles.containerPage}>
      <SchemaManager 
        title={service.name} 
        description={service.description}
        schemaType="Service"
        schemaData={{
          name: service.name,
          description: service.description
        }}
      />
      
      {/* FAQ Schema for local page FAQs */}
      <SchemaManager 
        title={service.name}
        description={service.description}
        schemaType="FAQ"
        schemaData={{ questions: service.faqs }}
      />

      {/* Hero Banner */}
      <section style={styles.banner}>
        <div style={styles.bannerOverlay} />
        <div className="container" style={styles.bannerContent}>
          <span style={styles.bannerTag}>SERVICE DETAIL PAGE</span>
          <h1 style={styles.bannerTitle}>{service.name}</h1>
          <p style={styles.bannerDesc}>{service.description}</p>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="container" style={styles.layoutGrid}>
        {/* Left Side: Detail Sections */}
        <div style={styles.contentCol}>
          
          {/* Overview */}
          <div style={styles.sectionCard} className="glass">
            <h2 style={styles.sectionTitle}>Service Overview & Business Outcomes</h2>
            <p style={styles.paragraph}>{service.description}</p>
            <p style={styles.paragraph}>
              Our focus on pre-construction coordination ensures that designs are not just aesthetically complete but completely aligned with structural requirements, local building codes, and construction budgets. We eliminate field issues before contractors break ground.
            </p>
          </div>

          {/* Who Needs It */}
          <div style={styles.sectionCard} className="glass">
            <h2 style={styles.sectionTitle}>Who Needs {service.name}?</h2>
            <div style={styles.whoList}>
              {service.whoNeedsIt.map((user, idx) => (
                <div key={idx} style={styles.whoItem}>
                  <div style={styles.whoIconBox}>
                    <Users size={18} style={styles.whoIcon} />
                  </div>
                  <div>
                    <h4 style={styles.whoRole}>{user.role}</h4>
                    <p style={styles.whoContext}>{user.context}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process Timeline */}
          <div style={styles.sectionCard} className="glass">
            <h2 style={styles.sectionTitle}>Our Execution Process</h2>
            <p style={{ ...styles.paragraph, marginBottom: '2rem' }}>
              We maintain a strict 6-stage development timeline to check building codes, structure alignment, and model accuracy.
            </p>
            <div style={styles.timeline}>
              {service.process.map((p, idx) => (
                <div key={idx} style={styles.timelineItem}>
                  <div style={styles.timelineNum}>{p.step}</div>
                  <div style={styles.timelineContent}>
                    <h4 style={styles.timelineTitle}>{p.title}</h4>
                    <p style={styles.timelineDesc}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables List */}
          <div style={styles.sectionCard} className="glass">
            <h2 style={styles.sectionTitle}>Complete Listing of Deliverables</h2>
            <p style={{ ...styles.paragraph, marginBottom: '1.5rem' }}>
              We compile and deliver standardized engineering files, drawings, calculations, and data sheets:
            </p>
            <div style={styles.deliverableGrid}>
              {service.deliverables.map((item, idx) => (
                <div key={idx} style={styles.deliverableItem}>
                  <CheckCircle size={16} style={styles.checkIcon} />
                  <span style={styles.deliverableText}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Software Used */}
          <div style={styles.sectionCard} className="glass">
            <h2 style={styles.sectionTitle}>Industrial Software Applied</h2>
            <p style={{ ...styles.paragraph, marginBottom: '1.5rem' }}>
              Our engineering stamps and designs are drafted in industry-standard programs to enable easy contractor file sharing:
            </p>
            <div style={styles.softwareGrid}>
              {service.software.map((sw, idx) => (
                <div key={idx} style={styles.softwareBadge}>
                  <Settings size={14} style={styles.swIcon} />
                  <span>{sw}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FAQs Accordion */}
          <div style={styles.sectionCard} className="glass">
            <h2 style={styles.sectionTitle}>Service Specific Q&A</h2>
            <div style={styles.faqList}>
              {service.faqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div key={idx} style={styles.faqItem}>
                    <button style={styles.faqQuestionBtn} onClick={() => setActiveFaq(isOpen ? null : idx)}>
                      <span>{faq.question}</span>
                      <ChevronRight size={16} style={{
                        transform: isOpen ? 'rotate(90deg)' : 'rotate(0)',
                        transition: 'transform 0.2s',
                        color: '#1b3b6f'
                      }} />
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
        </div>

        {/* Right Side: Services Sidebar Menu */}
        <div style={styles.sidebar}>
          <div style={styles.sidebarCard} className="glass">
            <h3 style={styles.sidebarTitle}>Our Solutions</h3>
            <div style={styles.sidebarList}>
              {Object.keys(servicesData).map((key) => {
                const isActive = serviceId === key;
                return (
                  <Link 
                    key={key} 
                    to={`/services/${key}`}
                    style={{
                      ...styles.sidebarLink,
                      ...(isActive ? styles.sidebarLinkActive : {})
                    }}
                  >
                    <span>{servicesData[key].name.replace(' Services', '')}</span>
                    <ArrowRight size={14} />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Contact Box */}
          <div style={{ ...styles.sidebarCard, backgroundColor: '#0f172a', color: '#ffffff' }}>
            <h3 style={{ ...styles.sidebarTitle, color: '#ffffff' }}>Need a PE Stamp?</h3>
            <p style={{ fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '1.5rem', lineHeight: '1.5' }}>
              We compile permit-ready drawing packs and structural calculations signed by licensed Professional Engineers.
            </p>
            <a 
              href="mailto:Frank.moore@primecost.biz"
              style={styles.sidebarCta}
            >
              Get In Touch
            </a>
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
    background: 'url("https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop") no-repeat center/cover',
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
    backgroundColor: 'rgba(27, 59, 111, 0.85)',
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
  whoList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
  },
  whoItem: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'flex-start',
  },
  whoIconBox: {
    backgroundColor: 'rgba(27, 59, 111, 0.05)',
    color: '#1b3b6f',
    padding: '0.5rem',
    borderRadius: '8px',
    flexShrink: 0,
  },
  whoRole: {
    fontSize: '1.05rem',
    color: '#0f172a',
    marginBottom: '0.2rem',
  },
  whoContext: {
    fontSize: '0.88rem',
    color: '#64748b',
    lineHeight: '1.5',
  },
  timeline: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    position: 'relative',
    paddingLeft: '1rem',
  },
  timelineItem: {
    display: 'flex',
    gap: '1.5rem',
    position: 'relative',
  },
  timelineNum: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    backgroundColor: '#1b3b6f',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '700',
    fontSize: '0.9rem',
    flexShrink: 0,
    zIndex: 2,
  },
  timelineContent: {
    paddingTop: '0.2rem',
  },
  timelineTitle: {
    fontSize: '1.05rem',
    color: '#0f172a',
    marginBottom: '0.25rem',
  },
  timelineDesc: {
    fontSize: '0.88rem',
    color: '#64748b',
    lineHeight: '1.5',
  },
  deliverableGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1rem',
  },
  deliverableItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',
  },
  checkIcon: {
    color: '#10b981',
    flexShrink: 0,
  },
  deliverableText: {
    fontSize: '0.9rem',
    color: '#475569',
  },
  softwareGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.75rem',
  },
  softwareBadge: {
    backgroundColor: '#f1f5f9',
    color: '#334155',
    border: '1px solid #cbd5e1',
    borderRadius: '6px',
    padding: '0.4rem 0.8rem',
    fontSize: '0.85rem',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
  },
  swIcon: {
    color: '#c5a880',
  },
  faqList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  faqItem: {
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
  },
  faqQuestionBtn: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 1.25rem',
    background: 'none',
    border: 'none',
    textAlign: 'left',
    fontSize: '0.95rem',
    fontWeight: '600',
    color: '#0f172a',
    cursor: 'pointer',
  },
  faqAnswer: {
    padding: '0 1.25rem 1rem 1.25rem',
    fontSize: '0.88rem',
    color: '#64748b',
    lineHeight: '1.5',
    borderTop: '1px solid #f1f5f9',
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
  sidebarLinkActive: {
    backgroundColor: '#1b3b6f',
    color: '#ffffff',
  },
  sidebarCta: {
    display: 'block',
    width: '100%',
    textAlign: 'center',
    backgroundColor: '#c5a880',
    color: '#0f172a',
    padding: '0.75rem',
    borderRadius: '8px',
    fontWeight: '700',
    fontSize: '0.88rem',
  }
};

// Add responsive stylesheet behavior dynamically
if (typeof document !== 'undefined') {
  const serviceMedia = `
    @media (max-width: 1024px) {
      .containerPage > div.container {
        flex-direction: column !important;
      }
      .containerPage > div.container > div:first-child {
        order: 2;
      }
      .containerPage > div.container > div:last-child {
        order: 1;
        margin-bottom: 2rem;
      }
    }
    @media (max-width: 600px) {
      .deliverableGrid-custom {
        grid-template-columns: 1fr !important;
      }
    }
    .sidebarLink-custom:hover {
      background-color: #cbd5e1;
      color: #1b3b6f;
    }
  `;
  const styleSheet = document.createElement("style");
  styleSheet.innerText = serviceMedia;
  document.head.appendChild(styleSheet);
}
export { styles };
