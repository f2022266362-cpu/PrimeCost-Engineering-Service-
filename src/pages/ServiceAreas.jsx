import React, { useState } from 'react';
import SchemaManager from '../components/SchemaManager';
import ScrollReveal from '../components/ScrollReveal';

const stateData = {
  'Alabama': { code: 'AL', note: 'Alabama Residential Building Code (ARBC)', engineering: 'Wind Zone II — 120 mph design winds. Foundation designs require soil bearing reports per local county requirements.' },
  'Alaska': { code: 'AK', note: 'Alaska Energy Code', engineering: 'Extreme cold climate — frost depth 4–8 ft. Structural designs account for heavy snow loads and permafrost soil conditions.' },
  'Arizona': { code: 'AZ', note: 'Arizona Building Code (IBC + IRC)', engineering: 'High seismic risk in northern AZ. Expansive desert soils — shallow foundations require surcharge loads and moisture barriers.' },
  'Arkansas': { code: 'AR', note: 'Arkansas Fire Protection Code', engineering: 'Tornado corridor — wind uplift requirements applied. Slab-on-grade foundations with expansive clay soil bracing.' },
  'California': { code: 'CA', note: 'California Building Code (CBC) + OSHPD', engineering: 'High seismic zone — Seismic Design Category D and E. All structural designs comply with CBC Chapter 16 and ASCE 7-22 seismic provisions.' },
  'Colorado': { code: 'CO', note: 'IBC / IRC with local amendments', engineering: 'Mountain frost depth 48–60 inches. Designs account for heavy snow loads (PSF up to 75) and expansive soils on Front Range.' },
  'Connecticut': { code: 'CT', note: 'Connecticut State Building Code', engineering: 'High wind zone along coastline. Frost depth 36 inches. Hurricane-resistant framing per ASCE 7-22.' },
  'Delaware': { code: 'DE', note: 'Delaware State Building Code', engineering: 'Coastal high-wind requirements. FEMA flood zone compliance for coastal construction.' },
  'Florida': { code: 'FL', note: 'Florida Building Code (FBC)', engineering: 'Hurricane-impact wind speed 150–200 mph in coastal zones. Structural designs comply with FBC 2023 high-velocity hurricane zone (HVHZ) requirements.' },
  'Georgia': { code: 'GA', note: 'Georgia State Minimum Standard Codes', engineering: 'Moderate seismic risk in northern GA. Wind requirements up to 130 mph along the coast.' },
  'Hawaii': { code: 'HI', note: 'Hawaii State Building Code', engineering: 'Hurricane wind zone — 160 mph design. High seismic and volcanic activity zones require special foundation designs.' },
  'Idaho': { code: 'ID', note: 'Idaho Building Code', engineering: 'Seismic zone — eastern Idaho near fault lines. Frost depth 30–48 inches in northern regions.' },
  'Illinois': { code: 'IL', note: 'Illinois Building Code', engineering: 'Frost depth 42 inches Chicago metro. Expansive clay soils in many suburban counties require pier or caisson foundations.' },
  'Indiana': { code: 'IN', note: 'Indiana Building Code', engineering: 'Frost depth 36 inches. Tornado wind zone — structural tie-down requirements for roofs and wall connections.' },
  'Iowa': { code: 'IA', note: 'Iowa Building Code (IBC)', engineering: 'Frost depth 48 inches. High tornado risk — structural shear walls and hurricane straps required.' },
  'Kansas': { code: 'KS', note: 'Kansas Building Code', engineering: 'Tornado alley — structural designs per FEMA P-361 safe room guidelines. Wind 140+ mph in western regions.' },
  'Kentucky': { code: 'KY', note: 'Kentucky Building Code (KBC)', engineering: 'Seismic zone — New Madrid fault proximity. Frost depth 18–30 inches.' },
  'Louisiana': { code: 'LA', note: 'Louisiana State Uniform Construction Code', engineering: 'Hurricane risk zone — 150 mph coastal wind design. Weak soil conditions — deep pile foundations often required.' },
  'Maine': { code: 'ME', note: 'Maine Uniform Building Code', engineering: 'Frost depth 48–60 inches. Heavy snow load 70–100 PSF in northern Maine. Coastal wind zone.' },
  'Maryland': { code: 'MD', note: 'Maryland Building Performance Standards', engineering: 'Coastal wind zone — Chesapeake Bay and Atlantic. Seismic zone in western MD near Appalachian faults.' },
  'Massachusetts': { code: 'MA', note: 'Massachusetts State Building Code (9th Ed.)', engineering: 'Frost depth 48 inches. Coastal hurricane zone. High wind provisions per ASCE 7-22.' },
  'Michigan': { code: 'MI', note: 'Michigan Building Code (MBC)', engineering: 'Frost depth 42–48 inches. Heavy lake-effect snow loads up to 80 PSF in upper peninsula.' },
  'Minnesota': { code: 'MN', note: 'Minnesota State Building Code', engineering: 'Frost depth 60–72 inches. Heavy snow loads 30–50 PSF. Expansive clay soils in Twin Cities metro area.' },
  'Mississippi': { code: 'MS', note: 'Mississippi State Building Code', engineering: 'Hurricane coastal zone — 140 mph wind design. Expansive clay and weak gulf coastal soils.' },
  'Missouri': { code: 'MO', note: 'Missouri Building Code', engineering: 'High seismic risk (New Madrid fault). Tornado corridor — structural uplift provisions required.' },
  'Montana': { code: 'MT', note: 'Montana Building Code', engineering: 'Frost depth 48–72 inches. High snow loads 40–80 PSF. Seismic zone in Yellowstone region.' },
  'Nebraska': { code: 'NE', note: 'Nebraska Building Code', engineering: 'Tornado zone — structural wind uplift 130+ mph. Frost depth 42 inches. Expansive clay soils.' },
  'Nevada': { code: 'NV', note: 'Nevada State Building Code', engineering: 'High seismic zone near Las Vegas and Reno. Expansive desert soil and high wind in open valley corridors.' },
  'New Hampshire': { code: 'NH', note: 'NH State Building Code', engineering: 'Frost depth 48–60 inches. Heavy snow loads 50–80 PSF. Coastal hurricane wind zone.' },
  'New Jersey': { code: 'NJ', note: 'NJ Uniform Construction Code', engineering: 'Coastal hurricane zone — Sandy-influenced FEMA flood zone compliance required. Frost depth 36 inches.' },
  'New Mexico': { code: 'NM', note: 'New Mexico Construction Industries Code', engineering: 'Seismic zone — Rio Grande rift valley. Expansive soils, wind 90–130 mph in open desert corridors.' },
  'New York': { code: 'NY', note: 'New York State Building Code', engineering: 'Frost depth 48 inches NYC metro, 60 inches upstate. Hurricane exposure along Long Island. Seismic provisions for NYC boroughs.' },
  'North Carolina': { code: 'NC', note: 'North Carolina Building Code', engineering: 'Hurricane coastal zone — 140 mph wind design. Moderate seismic zone in western mountain counties.' },
  'North Dakota': { code: 'ND', note: 'North Dakota Building Code', engineering: 'Frost depth 60–72 inches. Heavy snow loads 30–50 PSF. Tornado wind zone.' },
  'Ohio': { code: 'OH', note: 'Ohio Building Code (OBC)', engineering: 'Frost depth 36–42 inches. Expansive clay soils in Dayton and Columbus regions. Tornado zone.' },
  'Oklahoma': { code: 'OK', note: 'Oklahoma Uniform Building Code', engineering: 'Tornado alley — highest tornado risk in U.S. Structural wind requirements 140–150 mph. Expansive clay soils common statewide.' },
  'Oregon': { code: 'OR', note: 'Oregon Structural Specialty Code (OSSC)', engineering: 'High seismic zone — Cascadia Subduction zone. Coastal tsunami risk. Frost depth 18–30 inches.' },
  'Pennsylvania': { code: 'PA', note: 'Pennsylvania Construction Code', engineering: 'Frost depth 36–42 inches. Moderate seismic zone in western PA. Hurricane exposure in southeastern counties.' },
  'Rhode Island': { code: 'RI', note: 'Rhode Island State Building Code', engineering: 'Coastal hurricane zone. Frost depth 36 inches. High-wind framing provisions throughout.' },
  'South Carolina': { code: 'SC', note: 'South Carolina Building Code', engineering: 'Hurricane risk zone — 140 mph wind design. Coastal FEMA flood zones require elevated foundation designs.' },
  'South Dakota': { code: 'SD', note: 'South Dakota Building Code', engineering: 'Frost depth 60 inches. Heavy snow loads in Black Hills 50+ PSF. Tornado zone.' },
  'Tennessee': { code: 'TN', note: 'Tennessee Building Code', engineering: 'Seismic zone — New Madrid fault impact. Frost depth 18–24 inches. Tornado corridor.' },
  'Texas': { code: 'TX', note: 'Texas Residential Construction Code', engineering: 'Expansive black clay soils (PI > 50) throughout Houston and DFW require deep piers or post-tension slabs. Gulf Coast hurricane zone — 140 mph Galveston Bay wind design.' },
  'Utah': { code: 'UT', note: 'Utah State Building Code', engineering: 'High seismic zone — Wasatch Front fault. Frost depth 24–36 inches. Expansive soils in northern Utah.' },
  'Vermont': { code: 'VT', note: 'Vermont Fire and Building Safety Code', engineering: 'Frost depth 48–60 inches. Heavy snow loads 50–80 PSF. Moderate wind zone.' },
  'Virginia': { code: 'VA', note: 'Virginia Uniform Statewide Building Code', engineering: 'Coastal hurricane zone. Frost depth 18–30 inches. Seismic risk in western Appalachian regions.' },
  'Washington': { code: 'WA', note: 'Washington State Building Code', engineering: 'High seismic zone — Cascadia Subduction zone. Frost depth 12–30 inches. Heavy rain and snow loads in Cascade mountains.' },
  'West Virginia': { code: 'WV', note: 'West Virginia Building Code', engineering: 'Seismic zone near Appalachian fault. Frost depth 24–36 inches. High wind zone on mountain ridges.' },
  'Wisconsin': { code: 'WI', note: 'Wisconsin Commercial Building Code', engineering: 'Frost depth 48–60 inches. Heavy snow loads 30–60 PSF. Tornado zone in southern counties.' },
  'Wyoming': { code: 'WY', note: 'Wyoming Building Code', engineering: 'Frost depth 36–60 inches. High wind zone — 100+ mph in open plains. Heavy snow loads in mountain regions.' }
};

const allStates = Object.keys(stateData).sort();

const codeHighlights = [
  {
    region: 'California',
    icon: '🌊',
    title: 'Seismic Engineering (CA)',
    desc: 'All CA projects comply with CBC Chapter 16 + ASCE 7-22. Special moment frames and shear walls designed for SDC D/E zones.',
    badge: 'Seismic Zone'
  },
  {
    region: 'Florida',
    icon: '🌀',
    title: 'Hurricane Wind Zone (FL)',
    desc: 'Structures designed per FBC 2023 and HVHZ requirements. Impact-rated framing, roof uplift straps, and 150–200 mph wind design speeds.',
    badge: 'Hurricane Zone'
  },
  {
    region: 'Texas',
    icon: '🏗️',
    title: 'Expansive Soils (TX)',
    desc: 'Houston black clay soils (PI > 50) require post-tensioned slabs or deep drilled piers to 15 ft. We provide soil-specific PE-stamped designs.',
    badge: 'Expansive Soils'
  },
  {
    region: 'New York',
    icon: '❄️',
    title: 'Frost Depth (Northeast)',
    desc: 'NY, MA, MN, and ND require frost footings at 42–72 inches. All foundations designed below local frost depth per state code.',
    badge: 'Frost Depth'
  }
];

export default function ServiceAreas() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedState, setSelectedState] = useState(null);

  const filteredStates = allStates.filter(s =>
    s.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <SchemaManager
        title="Service Areas — 49 States PE Engineering Network | PRIMECOST"
        description="PRIMECOST provides PE-stamped structural engineering and design services across 49 U.S. states. View state-specific building codes, seismic zones, and wind requirements."
        schemaType="Service"
        schemaData={{ name: 'Nationwide Structural Engineering Services', description: 'PE-stamped structural engineering across 49 states.' }}
      />

      {/* Hero Banner */}
      <section style={{ background: 'linear-gradient(135deg, #0c1f3d 0%, #1b3b6f 60%, #1e4a8a 100%)', padding: '5rem 0 3rem', color: '#fff', textAlign: 'center' }}>
        <div className="container">
          <span style={{ fontSize: '0.8rem', fontWeight: '700', color: '#c5a880', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Licensed Coverage</span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontFamily: "'Outfit', sans-serif", fontWeight: '800', marginTop: '0.5rem', marginBottom: '1rem' }}>
            Engineering Services Across 49 States
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#cbd5e1', maxWidth: '620px', margin: '0 auto 1.5rem' }}>
            PRIMECOST operates a coordinated network of licensed Professional Engineers (PE) serving clients in 49 U.S. states — with state-specific code compliance for each jurisdiction.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
            {['49 States Licensed', 'PE Stamped Drawings', 'State-Specific Codes', 'Fast Turnaround'].map((badge, i) => (
              <span key={i} style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(197,168,128,0.4)', borderRadius: '999px', padding: '0.4rem 1.2rem', fontSize: '0.85rem', fontWeight: '600', color: '#f1c27d' }}>
                ✓ {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Code Highlights */}
      <section style={{ padding: '4rem 0', backgroundColor: '#f8fafc' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: '700', color: '#c5a880', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Engineering by Region</span>
            <h2 style={{ fontSize: '2rem', color: '#1b3b6f', marginTop: '0.5rem', fontFamily: "'Outfit', sans-serif" }}>State-Specific Engineering Expertise</h2>
          </div>
          <ScrollReveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.5rem' }}>
              {codeHighlights.map((item, idx) => (
                <div key={idx} style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '2rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.04)', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #1b3b6f, #c5a880)' }} />
                  <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{item.icon}</div>
                  <span style={{ fontSize: '0.7rem', fontWeight: '700', color: '#c5a880', textTransform: 'uppercase', letterSpacing: '0.1em', backgroundColor: '#fafaf9', padding: '0.15rem 0.5rem', borderRadius: '4px', border: '1px solid #f0ece3', display: 'inline-block', marginBottom: '0.75rem' }}>{item.badge}</span>
                  <h3 style={{ fontSize: '1.1rem', color: '#1b3b6f', fontWeight: '700', marginBottom: '0.5rem' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: '1.65' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* State Search & Directory */}
      <section style={{ padding: '4rem 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: '700', color: '#c5a880', letterSpacing: '0.15em', textTransform: 'uppercase' }}>State Directory</span>
            <h2 style={{ fontSize: '2rem', color: '#1b3b6f', marginTop: '0.5rem', fontFamily: "'Outfit', sans-serif" }}>Find Engineering Requirements by State</h2>
            <p style={{ color: '#64748b', marginTop: '0.5rem' }}>Search for your state to see its building code framework and local engineering requirements.</p>
          </div>

          {/* Search Input */}
          <div style={{ maxWidth: '480px', margin: '0 auto 2.5rem' }}>
            <input
              type="text"
              placeholder="Search state (e.g. California, Texas, Florida...)"
              value={searchTerm}
              onChange={e => { setSearchTerm(e.target.value); setSelectedState(null); }}
              style={{
                width: '100%',
                padding: '0.85rem 1.25rem',
                fontSize: '0.95rem',
                border: '2px solid #e2e8f0',
                borderRadius: '8px',
                outline: 'none',
                fontFamily: "'Inter', sans-serif",
                transition: 'border-color 0.2s',
                boxSizing: 'border-box'
              }}
              onFocus={e => e.target.style.borderColor = '#1b3b6f'}
              onBlur={e => e.target.style.borderColor = '#e2e8f0'}
            />
          </div>

          {/* State Grid */}
          <ScrollReveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(185px, 1fr))', gap: '0.75rem', marginBottom: '2.5rem' }}>
              {filteredStates.map((state) => (
                <button
                  key={state}
                  onClick={() => setSelectedState(selectedState === state ? null : state)}
                  style={{
                    background: selectedState === state ? 'linear-gradient(135deg, #1b3b6f, #2a5298)' : '#f8fafc',
                    color: selectedState === state ? '#fff' : '#334155',
                    border: selectedState === state ? '2px solid #1b3b6f' : '2px solid #e2e8f0',
                    borderRadius: '8px',
                    padding: '0.75rem 1rem',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    textAlign: 'left',
                    transition: 'all 0.18s ease',
                    fontFamily: "'Inter', sans-serif",
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <span>{state}</span>
                  <span style={{ fontSize: '0.75rem', opacity: 0.7 }}>{stateData[state].code}</span>
                </button>
              ))}
              {filteredStates.length === 0 && (
                <p style={{ gridColumn: '1/-1', textAlign: 'center', color: '#94a3b8', padding: '2rem 0' }}>No states found for "{searchTerm}"</p>
              )}
            </div>
          </ScrollReveal>

          {/* State Detail Panel */}
          {selectedState && stateData[selectedState] && (
            <div style={{
              backgroundColor: '#0c1f3d',
              color: '#fff',
              borderRadius: '16px',
              padding: '2.5rem',
              boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
              animation: 'fadeIn 0.3s ease',
              marginTop: '1rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: '260px' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#c5a880', textTransform: 'uppercase', letterSpacing: '0.1em' }}>PE Engineering — {stateData[selectedState].code}</span>
                  <h3 style={{ fontSize: '1.6rem', fontFamily: "'Outfit', sans-serif", fontWeight: '800', margin: '0.4rem 0 0.75rem' }}>{selectedState}</h3>
                  <div style={{ backgroundColor: 'rgba(197,168,128,0.1)', border: '1px solid rgba(197,168,128,0.25)', borderRadius: '8px', padding: '0.6rem 1rem', display: 'inline-block', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '0.83rem', color: '#c5a880', fontWeight: '600' }}>📋 {stateData[selectedState].note}</span>
                  </div>
                  <p style={{ fontSize: '0.95rem', color: '#cbd5e1', lineHeight: '1.75' }}>{stateData[selectedState].engineering}</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', minWidth: '220px' }}>
                  <div style={{ backgroundColor: 'rgba(255,255,255,0.07)', borderRadius: '10px', padding: '1.25rem', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <p style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.25rem', fontWeight: '600', textTransform: 'uppercase' }}>Licensing Status</p>
                    <p style={{ color: '#4ade80', fontWeight: '700', fontSize: '1rem' }}>✓ Active PE Network</p>
                  </div>
                  <a href="mailto:info@primecost.biz" style={{
                    backgroundColor: '#c5a880',
                    color: '#0c1f3d',
                    padding: '0.85rem 1.5rem',
                    borderRadius: '8px',
                    fontWeight: '700',
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                    textAlign: 'center',
                    display: 'block'
                  }}>
                    Start {selectedState} Project →
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Strip */}
      <section style={{ background: 'linear-gradient(135deg, #c5a880, #d4b896)', padding: '3.5rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.9rem', color: '#0c1f3d', fontFamily: "'Outfit', sans-serif", fontWeight: '800', marginBottom: '0.75rem' }}>
            Ready to Start Your Engineering Project?
          </h2>
          <p style={{ color: '#2d3748', fontSize: '1rem', marginBottom: '1.75rem' }}>
            Our licensed engineers are available in your state — get a free consultation today.
          </p>
          <a href="mailto:info@primecost.biz" style={{
            backgroundColor: '#0c1f3d',
            color: '#fff',
            padding: '1rem 2.5rem',
            borderRadius: '8px',
            fontWeight: '700',
            fontSize: '1rem',
            textDecoration: 'none',
            display: 'inline-block'
          }}>
            Request Engineering Consultation
          </a>
        </div>
      </section>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: none; } }
      `}</style>
    </div>
  );
}
