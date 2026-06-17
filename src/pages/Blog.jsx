import React, { useState } from 'react';
import { 
  BookOpen, Search, Filter, Calendar, User, 
  ArrowLeft, Clock, Bookmark, ChevronRight, CheckSquare 
} from 'lucide-react';
import SchemaManager from '../components/SchemaManager';

const articles = [
  // ARCHITECTURAL
  {
    id: 'guide-architectural-design',
    title: 'Complete Guide to Architectural Design Services',
    category: 'Architectural',
    readTime: '6 min read',
    summary: 'An in-depth breakdown of architectural phases from initial conceptual zoning checks to detailed construction documents and construction administration.',
    content: `
<h2>Understanding the Architectural Design Process</h2>
<p>Architectural design services convert your project vision into code-compliant, builder-ready construction sets. For developers and owners alike, understanding the core phases is crucial to managing project schedules and minimizing field change orders.</p>

<h3>1. Schematic Design (SD)</h3>
<p>The process begins with programmatic alignment. We establish the client's space requirements, aesthetic style, budget limitations, and schedule expectations. During SD, we draft initial spatial layouts and 3D volume studies, checking basic zoning rules such as building heights, lot coverage ratios, and setback limits.</p>

<h3>2. Design Development (DD)</h3>
<p>Once the schematic plan is approved, we add structural dimensions and mechanical alignments. Here, window styles, exterior wall assemblies, door positions, and basic interior trims are selected. We refine the 3D model, ensuring that structural loads can be supported without blocking architectural circulation grids.</p>

<h3>3. Construction Documents (CD)</h3>
<p>This is the final permit-ready package. It contains site plan details, dimensional floor plans, structural framing sheets, elevation profiles, electrical schedules, and finish notes. These drawings are signed and stamped by licensed architects or engineers to secure city building licenses.</p>

<h3>Key Architectural Design Deliverables:</h3>
<ul>
  <li>Zoning compliance check sheets</li>
  <li>Detailed site plan layouts</li>
  <li>Floor plans with exact room grids</li>
  <li>Cross-sections and transverse elevation drawings</li>
  <li>Permit submittal packages</li>
</ul>
    `
  },
  {
    id: 'permit-drawing-requirements',
    title: 'Permit Drawing Requirements Explained',
    category: 'Architectural',
    readTime: '5 min read',
    summary: 'What municipal building departments require in permit drawings. Learn about life-safety plans, egress, accessibility, and PE stamp rules.',
    content: `
<h2>Demystifying Building Department Permit Submittals</h2>
<p>Securing a building license requires submitting a drawings package that demonstrates complete compliance with building codes (e.g. the International Building Code, or local municipal amendments). Incomplete submittals result in city rejections and project delays.</p>

<h3>Core Components of a Permit Set</h3>
<p>Building inspectors evaluate drawings across several safety and compliance categories:</p>

<h4>1. Life-Safety Plan</h4>
<p>This is the single most important sheet for commercial or multi-unit residential projects. It details egress pathways, exit travel distances, corridor fire protection ratings, and the positions of exit signage and fire extinguishers.</p>

<h4>2. ADA / Accessibility Compliance</h4>
<p>Every commercial development must meet access rules. Drawings must detail ramp gradients (maximum 1:12 slope), door widths (minimum 32-inch clear opening), bathroom grab bar heights, and handicap parking locations.</p>

<h4>3. Structural Framing & Calculations</h4>
<p>Municipal plans examiners require proof that the structure can handle regional live loads, snow weight, and seismic wind forces. Calculations must match code formulas and be signed by a licensed Professional Engineer (PE).</p>

<h3>Common Permit Set Deliverables:</h3>
<ul>
  <li>Egress calculations and travel path schematics</li>
  <li>Structural load path diagrams and stamps</li>
  <li>Plumbing isometric and sanitary riser sheets</li>
  <li>Energy performance reports (ComCheck/ResCheck)</li>
</ul>
    `
  },
  {
    id: 'residential-vs-commercial-process',
    title: 'Residential vs Commercial Design Process',
    category: 'Architectural',
    readTime: '5 min read',
    summary: 'A side-by-side comparison of the zoning rules, structural framing choices, and MEP parameters that separate home design from commercial buildings.',
    content: `
<h2>How Commercial Projects Differ From Residential Builds</h2>
<p>While both residential and commercial projects follow schematic and construction phases, the engineering codes, materials, and municipal oversight differ significantly.</p>

<h3>1. Construction Material & Framing Methods</h3>
<p>Residential homes primarily rely on lightweight timber framing (wood stud walls and truss systems) governed by the International Residential Code (IRC). Commercial structures utilize structural steel, reinforced concrete, or light-gauge metal framing governed by the International Building Code (IBC).</p>

<h3>2. Mechanical, Electrical & Plumbing (MEP) Complexity</h3>
<p>Residential MEP systems are simple (single-phase electrical panels, small ducted split HVACs, and basic gravity sewers). Commercial spaces demand three-phase electrical power, specialized multi-zone rooftop HVACs (RTUs), grease interceptor traps for food services, and integrated fire alarm/sprinkler infrastructure.</p>

<h3>3. Licensing & Professional Stamp Rules</h3>
<p>For custom residential builds, some jurisdictions permit drawings signed by draftsmen. For commercial, multi-unit multifamily, or industrial structures, building departments strictly mandate drawings signed and stamped by licensed Professional Engineers and Registered Architects.</p>
    `
  },

  // STRUCTURAL
  {
    id: 'foundation-design-basics',
    title: 'Foundation Design Basics',
    category: 'Structural',
    readTime: '6 min read',
    summary: 'Soil bearing pressure, expansive clay soils, slab-on-grade, and deep piers. Learn how structural engineers prevent foundation cracking.',
    content: `
<h2>The Foundation of Structural Engineering</h2>
<p>Every building load—including structural self-weight (dead load) and wind/occupancy pressures (live loads)—must be transferred safely into the soil beneath. Foundation engineering isolates the building from earth settlement and expansive clay movements.</p>

<h3>1. Soil Mechanics & Geotechnical Reports</h3>
<p>Geotechnical engineers drill soil borings to measure bearing capacity, plastic index, and water table heights. High plastic index soils expand when wet and shrink when dry, placing upward bending forces on foundations.</p>

<h3>2. Slab-on-Grade vs. Deep Piers</h3>
<ul>
  <li><strong>Slab-on-Grade:</strong> Suitable for stable soils. A continuous concrete slab with thickened edges (grade beams) transfers building weight.</li>
  <li><strong>Deep Drilled Piers:</strong> Mandatory for expansive clay (common in Houston). Deep shafts are drilled down (15-30 ft) to stable earth, filled with reinforced concrete, and attached to grade beams.</li>
</ul>

<h3>3. Preventative Bending reinforcement</h3>
<p>By placing high-tensile steel rebar grids or post-tensioning steel cables inside the concrete slab, structural engineers ensure the foundation can bridge soil voids without structural cracking.</p>
    `
  },
  {
    id: 'structural-systems-commercial',
    title: 'Structural Systems for Commercial Buildings',
    category: 'Structural',
    readTime: '5 min read',
    summary: 'A review of shear walls, braced frames, moment frames, and horizontal load paths that keep commercial towers standing.',
    content: `
<h2>How Commercial Buildings Stand Against Wind & Gravity</h2>
<p>Commercial structures require open floor plans, large column-free spans, and high resistance to lateral wind or seismic forces. Engineers accomplish this through specialized structural systems:</p>

<h3>1. Gravity Load Pathways</h3>
<p>Gravity loads (roof decks, concrete slabs, equipment, occupants) travel from floor decks to joists, girders, columns, and finally down to the foundation piers. Minimizing column sizes while maximizing span distance requires high-strength concrete and structural steel sections.</p>

<h3>2. Lateral Load Resistance Systems</h3>
<ul>
  <li><strong>Shear Walls:</strong> Solid concrete or masonry walls that absorb wind shear forces, transferring them laterally down to the ground.</li>
  <li><strong>Braced Frames:</strong> Steel column grids braced diagonally with hollow structural steel (HSS) cross-bracing. Highly cost-effective.</li>
  <li><strong>Moment Frames:</strong> Rigid steel frame joints that resist bending without diagonal bracing, allowing wall-to-wall glass windows.</li>
</ul>
    `
  },
  {
    id: 'steel-vs-concrete-structures',
    title: 'Steel vs Concrete Structures',
    category: 'Structural',
    readTime: '6 min read',
    summary: 'Comparing structural steel frame speed and beam span distances against cast-in-place concrete mass, fire rating, and design costs.',
    content: `
<h2>Steel Frame vs Reinforced Concrete: The Structural Decision</h2>
<p>Selecting the primary structural material is one of the most critical pre-construction decisions, impacting budget, schedule, and architectural flexibility.</p>

<h3>1. Structural Steel Construction</h3>
<p>Steel members are pre-fabricated offsite and bolted together on site. This enables rapid construction schedules and long column-free floor spans. However, steel requires secondary fireproofing spray coatings to meet fire resistance codes.</p>

<h3>2. Reinforced Concrete Construction</h3>
<p>Concrete is cast-in-place on site using formwork and rebar grids. Concrete provides native fireproofing, acoustic dampening between floors, and high thermal mass. It is ideal for multi-unit apartment complexes but requires curing time before framing load submittals.</p>

<h3>Comparison Summary Table:</h3>
<table>
  <tr><th>Metric</th><th>Structural Steel</th><th>Reinforced Concrete</th></tr>
  <tr><td>Build Speed</td><td>Fast (weeks)</td><td>Slow (requires curing)</td></tr>
  <tr><td>Span Distance</td><td>Long spans (30-60+ ft)</td><td>Medium spans (20-30 ft)</td></tr>
  <tr><td>Fire Resistance</td><td>Requires secondary spray</td><td>Native fire resistance</td></tr>
</ul>
    `
  },
  {
    id: 'structural-engineering-estimate-cost-houston',
    title: 'How Much Does a Structural Engineering Estimate Cost in Houston?',
    category: 'Structural',
    readTime: '6 min read',
    summary: 'A breakdown of what drives structural engineering estimate pricing in Houston, typical cost ranges by project type, and why fast turnaround can matter as much as price.',
    content: `
<h2>What Affects the Cost of a Structural Engineering Estimate</h2>
<p>If you're a contractor, architect, or developer in Houston, one question comes up before almost every project: how much will the structural engineering estimate cost? The answer depends on a handful of clear factors rather than guesswork.</p>

<h3>1. Project Size & Complexity</h3>
<p>A single-family residential addition requires far less analysis than a multi-story commercial structure. Square footage, number of floors, and load-bearing requirements all factor directly into engineering hours.</p>

<h3>2. Type of Construction</h3>
<p>Steel-frame, concrete, and wood structures each demand different calculations. Steel and reinforced concrete projects generally take longer to estimate because of additional load and connection analysis.</p>

<h3>3. PE Stamp & Code Compliance</h3>
<p>Projects requiring a licensed Professional Engineer (PE) stamp for permitting cost more than informal estimates, since they carry legal and professional liability.</p>

<h3>4. Turnaround Time</h3>
<p>Standard estimates take longer to prepare than rush estimates. Firms offering same-day or under-24-hour scoping bids typically prioritize scheduling to meet bid deadlines.</p>

<h3>Typical Price Ranges by Project Type</h3>
<ul>
  <li><strong>Residential additions & remodels:</strong> Lower end of the pricing scale, since the scope is contained and load paths are simpler.</li>
  <li><strong>Light commercial buildouts:</strong> Mid-range, due to MEP coordination and code review requirements.</li>
  <li><strong>Multi-family & larger commercial new-builds:</strong> Higher end, reflecting structural complexity and drawing volume.</li>
</ul>

<h3>Why Turnaround Time Matters as Much as Price</h3>
<p>In Houston's competitive bidding environment, contractors often lose jobs not because their numbers were wrong, but because they were late. A structural engineering partner that delivers scoping bids within 24 hours helps you respond to RFPs faster and lock in subcontractor pricing sooner.</p>

<h3>How the Estimating Process Works</h3>
<ul>
  <li>Submit your project drawings and specifications through a secure portal or email.</li>
  <li>Certified estimators review the scope using industry-standard software and current material pricing.</li>
  <li>Every estimate goes through a quality check before it's sent back to you.</li>
  <li>You receive PE-stamped documentation when the project requires it for permitting.</li>
</ul>
    `
  },

  // MEP
  {
    id: 'hvac-design-best-practices',
    title: 'HVAC Design Best Practices',
    category: 'MEP',
    readTime: '5 min read',
    summary: 'Energy-efficiency, heat loads (Manual J), duct routing clearances, and fresh air intake codes for commercial structures.',
    content: `
<h2>Engineering Mechanical Airflow for Commercial Occupancies</h2>
<p>Heating, Ventilation, and Air Conditioning (HVAC) design is more than selecting system capacity. It requires balancing indoor temperatures, air circulation volumes, and occupant safety codes.</p>

<h3>1. Volumetric Heat Load Calculations</h3>
<p>We perform thermal calculations matching ASHRAE guidelines. We measure glass solar heat gain, wall insulation values, lighting heat outputs, and occupant density to size mechanical equipment without over-sizing (which causes damp humidity issues).</p>

<h3>2. Fresh Air Intake & Exhaust Systems</h3>
<p>Building codes require introducing fresh outside air to prevent carbon dioxide buildup. In commercial restaurants, exhaust design requires fire-wrapped duct routes and grease filter exhausts to comply with fire prevention standards.</p>
    `
  },
  {
    id: 'electrical-load-calculations',
    title: 'Electrical Load Calculations Explained',
    category: 'MEP',
    readTime: '5 min read',
    summary: 'Volt-Ampere load splits, phase balance, panel schedules, and service disconnect sizing for commercial properties.',
    content: `
<h2>Balancing Electrical Panels to Prevent System Failures</h2>
<p>Commercial building departments require detailed electrical schematics to verify load capacities, conductor sizing, and fire safety systems.</p>

<h3>1. Demand Volt-Ampere Calculations</h3>
<p>We tally general lighting (VA per sq. ft.), receptacle quantities, HVAC motors, and kitchen appliances. We apply code-authorized demand factor percentages to calculate total building service loads.</p>

<h3>2. Three-Phase Balance</h3>
<p>Commercial utility lines distribute electricity across three phases. If one phase supports significantly more electrical load than the others, it causes transformer overheating and system trips. We design panel schedules to distribute load evenly.</p>
    `
  },
  {
    id: 'plumbing-design-fundamentals',
    title: 'Plumbing Design Fundamentals',
    category: 'MEP',
    readTime: '5 min read',
    summary: 'Sanitary stacks, venting routes, grease interceptors, and plumbing isometric drawings for commercial submittals.',
    content: `
<h2>Designing Code-Compliant Sanitary & Water Systems</h2>
<p>Plumbing engineering ensures clean water delivery and sanitary waste removal while preventing dangerous sewer gas backup into spaces.</p>

<h3>1. Sanitary Vent Loops</h3>
<p>Waste piping requires a corresponding system of air vents extending up to the roof. Vent loops maintain atmospheric pressure inside waste lines, allowing water to drain smoothly without pulling trap seals dry.</p>

<h3>2. Grease Traps & Interceptors</h3>
<p>Commercial food services are legally required to pass waste water through a grease trap. Grease cooling allows oil to float to the top and solids to sink, preventing sewer line blockages.</p>
    `
  },

  // BIM
  {
    id: 'what-is-bim',
    title: 'What Is BIM?',
    category: 'BIM',
    readTime: '5 min read',
    summary: 'An introduction to Building Information Modeling, database-driven parameters, and LOD standards.',
    content: `
<h2>Building Information Modeling: Beyond Simple 2D CAD</h2>
<p>Building Information Modeling (BIM) is a digital database-driven process for generating and managing building parameters across its entire lifecycle.</p>

<h3>1. Coordinated 3D Data Geometry</h3>
<p>In BIM, every wall, door, steel beam, or plumbing pipe is a smart object containing parameters (e.g. fire-ratings, material quantities, thermal values). Updating a window size in one elevation view automatically updates floor plans, sections, and schedules.</p>

<h3>2. Levels of Development (LOD)</h3>
<ul>
  <li><strong>LOD 100:</strong> Conceptual massing layout.</li>
  <li><strong>LOD 300:</strong> Precise structural dimensions and shapes ready for permit reviews.</li>
  <li><strong>LOD 400:</strong> Fabrication-ready layouts with structural weld coordinates and connection details.</li>
</ul>
    `
  },
  {
    id: 'clash-detection-explained',
    title: 'Clash Detection Explained',
    category: 'BIM',
    readTime: '5 min read',
    summary: 'How Navisworks scans 3D models to find conflicts between HVAC ducts and steel columns before construction begins.',
    content: `
<h2>Preventing Field Modifications Through 3D Coordination</h2>
<p>Clash detection is the computerized identification of spatial overlaps between design disciplines (architectural, structural framing, MEP routing) in a virtual model.</p>

<h3>1. Hard Clashes vs. Soft Clearance Clashes</h3>
<ul>
  <li><strong>Hard Clash:</strong> Two objects occupy the exact same 3D coordinates (e.g., a steel beam cutting through an HVAC supply duct).</li>
  <li><strong>Soft Clash:</strong> An object violates code clearance boundaries (e.g., a pipe running within 2 inches of a high-voltage electrical line).</li>
</ul>

<h3>2. Cost Benefits</h3>
<p>Resolving a clash inside a Revit model takes a few mouse clicks. Resolving a clash on a construction site requires cutting steel, ordering fresh fittings, and stopping trade crews, costing thousands of dollars.</p>
    `
  },
  {
    id: 'bim-coordination-process',
    title: 'BIM Coordination Process',
    category: 'BIM',
    readTime: '6 min read',
    summary: 'BIM Execution Plans (BEP), shared model coordinates, and review meetings that keep multi-discipline teams aligned.',
    content: `
<h2>The BIM Coordination Workflow</h2>
<p>Successful 3D modeling on large projects requires close collaboration between architects, structural designers, MEP engineers, and general contractors. We follow a strict coordination workflow:</p>

<h3>1. BIM Execution Plan (BEP)</h3>
<p>We draft a project-specific BEP defining modeling standards, coordinate origins (shared coordinates), file exchange schedules, and level of detail criteria.</p>

<h3>2. Coordination Review Meetings</h3>
<p>Discipline models are merged into a federated model in Autodesk Navisworks. We run automated clash scans, log conflicts in a tracking dashboard, and resolve them during weekly review calls.</p>
    `
  },

  // CONSTRUCTION
  {
    id: 'pre-construction-planning-guide',
    title: 'Pre-Construction Planning Guide',
    category: 'Construction',
    readTime: '6 min read',
    summary: 'Feasibility analysis, zoning variance reviews, constructability reviews, and pre-construction scheduling.',
    content: `
<h2>Laying the Groundwork for Construction Success</h2>
<p>The pre-construction phase sets the parameters for your entire project, establishing budget, schedules, and constructability baselines.</p>

<h3>1. Site Feasibility & Zoning Variance</h3>
<p>We check site boundaries, zoning classifications, height limits, utility availability, and environmental rules. If design goals conflict with zoning setbacks, we prepare variance drawings for municipal appeals.</p>

<h3>2. Constructability Reviews</h3>
<p>Our engineers evaluate drawing sets from a builder\'s perspective, checking connection details, material availability, crane access clearances, and staging constraints.</p>
    `
  },
  {
    id: 'value-engineering-strategies',
    title: 'Value Engineering Strategies',
    category: 'Construction',
    readTime: '5 min read',
    summary: 'Optimizing structural members, shortening plumbing runs, and selecting alternative materials without reducing safety.',
    content: `
<h2>Value Engineering: Optimizing Budgets Without Reducing Quality</h2>
<p>Value Engineering (VE) is a systematic method to improve the value of project components by analyzing their function and cost ratio.</p>

<h3>1. Material Alternatives</h3>
<p>For example, if structural steel prices spike, we recalculate framing spans to utilize engineered wood joists (Glulam) or post-tensioned concrete slabs to reduce steel tonnage.</p>

<h3>2. System Optimization</h3>
<p>We shorten plumbing lines by grouping restrooms vertically (back-to-back wet walls), reducing copper and PVC pipe requirements.</p>
    `
  },
  {
    id: 'construction-documentation-best-practices',
    title: 'Construction Documentation Best Practices',
    category: 'Construction',
    readTime: '5 min read',
    summary: 'Detail cross-referencing, dimensioning standards, clear notes, and change-order prevention drawing standards.',
    content: `
<h2>Creating Frictionless Drawings for Construction Crews</h2>
<p>Clear, highly detailed construction documents prevent misunderstandings, delays, and costly change orders on the construction site.</p>

<h3>1. Standard Dimensioning & Grids</h3>
<p>Drawings must utilize standard, grid-referenced dimensions matching builder layouts. Inconsistent wall dimensions force framing crews to guess, leading to layout shifts.</p>

<h3>2. Detailed Cross-References</h3>
<p>Every floor plan view must cross-reference detailed section and elevation callouts. We detail window attachments, concrete-to-steel joints, and structural connection plans clearly.</p>
    `
  }
];

function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const categories = ['All', 'Architectural', 'Structural', 'MEP', 'BIM', 'Construction'];

  const filteredArticles = articles.filter(art => {
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          art.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || art.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={styles.containerPage}>
      <SchemaManager 
        title="GEO Content Hub & Authority Blog" 
        description="Read comprehensive technical articles on architectural design standards, structural engineering calculations, commercial MEP codes, and 3D BIM clash detection workflows."
      />

      {/* Hero Header */}
      <section style={styles.heroSection}>
        <div className="container" style={styles.heroContent}>
          <span style={styles.tag}>AUTHORITY KNOWLEDGE</span>
          <h1 style={styles.title}>GEO Content Hub</h1>
          <p style={styles.subtitle}>
            Read comprehensive guides on code reviews, framing calculations, MEP load splits, and constructability optimization from our design staff.
          </p>
        </div>
      </section>

      {/* Control Bar: Search & Category Tabs */}
      <section style={styles.controlSection}>
        <div className="container" style={styles.controlsRow}>
          {/* Search Input */}
          <div style={styles.searchBox}>
            <Search size={18} style={styles.searchIcon} />
            <input 
              type="text" 
              placeholder="Search guides, codes, calculations..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={styles.searchInput}
            />
          </div>

          {/* Category Filters */}
          <div style={styles.filtersBox}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  ...styles.catBtn,
                  ...(activeCategory === cat ? styles.catBtnActive : {})
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Listing */}
      <section style={styles.articlesSection}>
        <div className="container">
          {filteredArticles.length > 0 ? (
            <div className="grid-cols-3" style={styles.articlesGrid}>
              {filteredArticles.map((art) => (
                <div key={art.id} style={styles.artCard} className="glass">
                  <div style={styles.artHeader}>
                    <span style={styles.artCat}>{art.category.toUpperCase()}</span>
                    <span style={styles.artTime}><Clock size={12} /> {art.readTime}</span>
                  </div>
                  <h3 style={styles.artCardTitle}>{art.title}</h3>
                  <p style={styles.artSummary}>{art.summary}</p>
                  <button 
                    onClick={() => setSelectedArticle(art)} 
                    style={styles.readMoreBtn}
                  >
                    Read Technical Guide <ChevronRight size={14} />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div style={styles.noResults}>
              <p>No technical guides found matching your query. Please search using alternative pre-construction terms.</p>
            </div>
          )}
        </div>
      </section>

      {/* Full Article Reader Overlay */}
      {selectedArticle && (
        <div style={styles.overlay}>
          <div style={styles.overlayBackdrop} onClick={() => setSelectedArticle(null)} />
          <div style={styles.modal} className="animate-fade-in">
            <button style={styles.closeBtn} onClick={() => setSelectedArticle(null)}>
              <ArrowLeft size={18} /> <span>Back to Content Hub</span>
            </button>

            <div style={styles.modalHeader}>
              <span style={styles.modalCat}>{selectedArticle.category.toUpperCase()} | {selectedArticle.readTime}</span>
              <h1 style={styles.modalTitle}>{selectedArticle.title}</h1>
              <div style={styles.metaRow}>
                <span style={styles.metaItem}><User size={14} /> PRIMECOS Technical Staff</span>
                <span style={styles.metaItem}><Calendar size={14} /> Published 2026</span>
              </div>
            </div>

            {/* Dynamically Inject HTML Content */}
            <div 
              style={styles.articleContent}
              dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
            />

            <div style={styles.ctaBox}>
              <h4 style={styles.ctaHeading}>Need Scaffolded Design Support on This Topic?</h4>
              <p style={styles.ctaText}>
                We calculate structural load schedules, draw permit blueprints, and coordination sets matching these exact industry standards.
              </p>
              <Link to="/about" style={styles.ctaBtnLink} onClick={() => setSelectedArticle(null)}>
                Connect With Engineering Team
              </Link>
            </div>
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
    backgroundColor: '#0f172a',
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
    textTransform: 'uppercase',
  },
  title: {
    fontSize: '2.5rem',
    color: '#ffffff',
    marginBottom: '1rem',
    fontFamily: "'Outfit', sans-serif",
  },
  subtitle: {
    fontSize: '1.05rem',
    color: '#94a3b8',
    lineHeight: '1.5',
  },
  controlSection: {
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #e2e8f0',
    padding: '1.5rem 0',
  },
  controlsRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '2rem',
    flexWrap: 'wrap',
  },
  searchBox: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #cbd5e1',
    borderRadius: '8px',
    padding: '0.5rem 1rem',
    backgroundColor: '#f8fafc',
    flex: 1,
    minWidth: '260px',
    maxWidth: '400px',
  },
  searchIcon: {
    color: '#64748b',
    marginRight: '0.5rem',
  },
  searchInput: {
    border: 'none',
    background: 'none',
    outline: 'none',
    fontSize: '0.9rem',
    color: '#0f172a',
    width: '100%',
  },
  filtersBox: {
    display: 'flex',
    gap: '0.5rem',
    flexWrap: 'wrap',
  },
  catBtn: {
    padding: '0.5rem 1rem',
    border: '1px solid #e2e8f0',
    borderRadius: '6px',
    backgroundColor: '#f8fafc',
    color: '#475569',
    fontWeight: '600',
    fontSize: '0.8rem',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  catBtnActive: {
    backgroundColor: '#1b3b6f',
    borderColor: '#1b3b6f',
    color: '#ffffff',
  },
  articlesSection: {
    padding: '4rem 0',
  },
  articlesGrid: {
    marginTop: '1rem',
  },
  artCard: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '2rem',
    border: '1px solid #e2e8f0',
    display: 'flex',
    flexDirection: 'column',
    transition: 'all 0.2s',
  },
  artHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem',
  },
  artCat: {
    fontSize: '0.75rem',
    fontWeight: '700',
    color: '#c5a880',
    letterSpacing: '1px',
  },
  artTime: {
    fontSize: '0.75rem',
    color: '#64748b',
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
  },
  artCardTitle: {
    fontSize: '1.2rem',
    color: '#0f172a',
    marginBottom: '0.8rem',
    lineHeight: '1.3',
  },
  artSummary: {
    fontSize: '0.88rem',
    color: '#475569',
    lineHeight: '1.5',
    marginBottom: '1.5rem',
    flexGrow: 1,
  },
  readMoreBtn: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#1b3b6f',
    fontWeight: '700',
    fontSize: '0.88rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
    padding: 0,
    alignSelf: 'flex-start',
  },
  noResults: {
    textAlign: 'center',
    padding: '3rem 0',
    color: '#64748b',
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
    justifyContent: 'flex-end', // slide out style from right
  },
  overlayBackdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(15, 23, 42, 0.5)',
    backdropFilter: 'blur(4px)',
  },
  modal: {
    position: 'relative',
    backgroundColor: '#ffffff',
    width: '100%',
    maxWidth: '750px',
    height: '100vh',
    overflowY: 'auto',
    boxShadow: '-10px 0 25px rgba(0,0,0,0.15)',
    padding: '3.5rem 3rem',
    zIndex: 1001,
    display: 'flex',
    flexDirection: 'column',
  },
  closeBtn: {
    alignSelf: 'flex-start',
    backgroundColor: 'transparent',
    border: 'none',
    color: '#1b3b6f',
    fontWeight: '700',
    fontSize: '0.9rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '2rem',
    padding: 0,
  },
  modalHeader: {
    borderBottom: '2px solid #f1f5f9',
    paddingBottom: '1.5rem',
    marginBottom: '2rem',
  },
  modalCat: {
    fontSize: '0.8rem',
    color: '#c5a880',
    fontWeight: '700',
    letterSpacing: '1px',
    display: 'block',
    marginBottom: '0.5rem',
  },
  modalTitle: {
    fontSize: '2.2rem',
    color: '#0f172a',
    lineHeight: '1.2',
    marginBottom: '0.75rem',
  },
  metaRow: {
    display: 'flex',
    gap: '1.5rem',
    fontSize: '0.82rem',
    color: '#64748b',
  },
  metaItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.3rem',
  },
  articleContent: {
    fontSize: '1rem',
    lineHeight: '1.7',
    color: '#334155',
    flexGrow: 1,
  },
  ctaBox: {
    backgroundColor: '#f8fafc',
    border: '1px solid #e2e8f0',
    borderRadius: '12px',
    padding: '2rem',
    marginTop: '3rem',
    textAlign: 'center',
  },
  ctaHeading: {
    fontSize: '1.15rem',
    color: '#0f172a',
    marginBottom: '0.5rem',
  },
  ctaText: {
    fontSize: '0.9rem',
    color: '#475569',
    lineHeight: '1.5',
    marginBottom: '1.25rem',
  },
  ctaBtnLink: {
    display: 'inline-block',
    backgroundColor: '#1b3b6f',
    color: '#ffffff',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    fontWeight: '600',
    fontSize: '0.9rem',
    boxShadow: '0 4px 6px -1px rgba(27, 59, 111, 0.2)',
  }
};

// Add styles dynamically for article body formatting
if (typeof document !== 'undefined') {
  const articleStyles = `
    .art-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 25px -5px rgba(0,0,0,0.06);
      border-color: #cbd5e1 !important;
    }
    .article-content-body h2 {
      font-size: 1.6rem;
      color: #0f172a;
      margin-top: 2rem;
      margin-bottom: 1rem;
      font-family: 'Outfit', sans-serif;
    }
    .article-content-body h3 {
      font-size: 1.25rem;
      color: #1b3b6f;
      margin-top: 1.5rem;
      margin-bottom: 0.8rem;
      font-family: 'Outfit', sans-serif;
    }
    .article-content-body h4 {
      font-size: 1.05rem;
      color: #0f172a;
      margin-top: 1rem;
      margin-bottom: 0.5rem;
    }
    .article-content-body p {
      margin-bottom: 1.25rem;
    }
    .article-content-body ul {
      margin-bottom: 1.5rem;
      padding-left: 1.5rem;
    }
    .article-content-body li {
      margin-bottom: 0.5rem;
    }
    .article-content-body table {
      width: 100%;
      border-collapse: collapse;
      margin: 1.5rem 0;
    }
    .article-content-body th, .article-content-body td {
      border: 1px solid #cbd5e1;
      padding: 0.75rem;
      text-align: left;
    }
    .article-content-body th {
      background-color: #f1f5f9;
      font-weight: bold;
    }
  `;
  const styleSheet = document.createElement("style");
  styleSheet.innerText = articleStyles;
  document.head.appendChild(styleSheet);
}
// Add wrapper class to article render
const OrigBlog = Blog;
Blog = function BlogWithClass(props) {
  const element = OrigBlog(props);
  // Apply formatting class to modal reader container
  if (element && element.props && element.props.children) {
    const children = React.Children.toArray(element.props.children);
    const modalReaderIdx = children.findIndex(c => c && c.props && c.props.style === styles.overlay);
    if (modalReaderIdx !== -1) {
      const modal = children[modalReaderIdx];
      const modalContentIdx = modal.props.children.findIndex(c => c && c.props && c.props.className === 'animate-fade-in');
      if (modalContentIdx !== -1) {
        const modalContainer = modal.props.children[modalContentIdx];
        const contentIdx = modalContainer.props.children.findIndex(c => c && c.props && c.props.dangerouslySetInnerHTML);
        if (contentIdx !== -1) {
          modalContainer.props.children[contentIdx].props.className = 'article-content-body';
        }
      }
    }
  }
  return element;
};

export { styles };
export default Blog;
