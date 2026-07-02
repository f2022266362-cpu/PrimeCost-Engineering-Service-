import React, { useState, useCallback } from 'react';
import SchemaManager from '../components/SchemaManager';
import ScrollReveal from '../components/ScrollReveal';

const pricingTiers = [
  {
    id: 'architectural',
    title: 'Architectural Drawings',
    price: '$0.45',
    unit: '/ sq ft',
    minOrder: 'Min. 1,000 sq ft',
    highlight: false,
    description: 'Permit-ready architectural drawing packages for residential and commercial construction.',
    includes: [
      'Site Plans & Elevations',
      'Dimensional Floor Plans',
      'Cross-Sections & Details',
      'Code Compliance Review',
      'Permit Submittal Set'
    ],
    turnaround: '5–10 business days',
    badge: null,
    color: '#1b3b6f'
  },
  {
    id: 'structural',
    title: 'Structural Engineering',
    price: '$0.78',
    unit: '/ sq ft',
    minOrder: 'Min. 1,000 sq ft',
    highlight: true,
    description: 'PE-stamped structural calculations, foundation designs, and framing drawings — the core of every permit set.',
    includes: [
      'Structural Calculations',
      'Foundation Design',
      'Framing & Shear Wall Plans',
      'PE Stamp Included',
      'Municipal Submittal Ready'
    ],
    turnaround: '5–7 business days',
    badge: 'Most Popular',
    color: '#c5a880'
  },
  {
    id: 'mep',
    title: 'MEP Engineering',
    price: '$1.30',
    unit: '/ sq ft',
    minOrder: 'Min. 1,000 sq ft',
    highlight: false,
    description: 'Full Mechanical, Electrical, and Plumbing engineering design for commercial and residential projects.',
    includes: [
      'HVAC Layout & Load Calcs',
      'Electrical Single-Line Diagrams',
      'Plumbing Riser Diagrams',
      'Energy Compliance (Title 24 / ComCheck)',
      'Fire Protection Coordination'
    ],
    turnaround: '7–12 business days',
    badge: null,
    color: '#1b3b6f'
  },
  {
    id: 'custom',
    title: 'Custom / Enterprise',
    price: 'Contact Us',
    unit: '',
    minOrder: 'All project sizes',
    highlight: false,
    description: 'Permit correction, sign & stamp only, pre-construction consulting, and full design-build project packages.',
    includes: [
      'Sign & Stamp Only Services',
      'Permit Correction Packages',
      'Pre-Construction Engineering',
      'Design-Build Contracts',
      'Multi-Phase Project Support'
    ],
    turnaround: 'Custom timeline',
    badge: null,
    color: '#64748b'
  }
];

const addOns = [
  { name: '3D Architectural Renderings', price: '$800', unit: 'per view', desc: 'Photorealistic CGI renders for marketing and approvals.' },
  { name: 'BIM / Clash Coordination', price: '$0.12', unit: '/ sq ft', desc: 'Navisworks clash analysis and coordination reports.' },
  { name: 'Geotechnical Review', price: '$350', unit: 'flat', desc: 'Review soils report and integrate into foundation design.' },
  { name: 'Rush Delivery (48–72 hrs)', price: '+30%', unit: 'surcharge', desc: 'Priority engineering queue for fast-track permit deadlines.' }
];

const faqs = [
  { q: 'Is the PE stamp included in the structural engineering rate?', a: 'Yes. The $0.78/sq ft structural engineering rate includes a PE stamp from a licensed engineer in your project\'s state. No hidden stamping fees.' },
  { q: 'What is the minimum project size?', a: 'Our standard minimum is 1,000 sq ft for residential and light commercial work. Contact us for smaller accessory structures or sign-stamp-only requests.' },
  { q: 'Do you offer first-project discounts?', a: 'Yes — all new clients receive a 15% discount on their first project. This is applied automatically when you request a consultation.' },
  { q: 'How do I pay?', a: 'We accept ACH bank transfer, credit card, and Zelle. A 50% deposit is required to begin work; the remaining 50% is due upon delivery.' },
  { q: 'Can I get a quote without knowing the exact square footage?', a: 'Yes. Send us your architectural plans or a scope description and we will provide a fixed-fee proposal within 24 hours.' }
];

const SERVICE_TYPES = [
  { id: 'architectural', label: 'Architectural Drawings', rate: 0.45 },
  { id: 'structural', label: 'Structural Engineering', rate: 0.78 },
  { id: 'mep', label: 'MEP Engineering', rate: 1.30 },
  { id: 'both_arch_struct', label: 'Architectural + Structural', rate: 0.45 + 0.78 },
  { id: 'full_service', label: 'Full Service (Arch + Struct + MEP)', rate: 0.45 + 0.78 + 1.30 }
];

export default function Pricing() {
  const [activeFaq, setActiveFaq] = useState(null);

  // Calculator state
  const [sqft, setSqft] = useState('');
  const [serviceType, setServiceType] = useState('structural');
  const [isFirstProject, setIsFirstProject] = useState(false);
  const [isRush, setIsRush] = useState(false);

  const calcResult = useCallback(() => {
    const area = parseFloat(sqft);
    if (!area || area <= 0) return null;
    const selected = SERVICE_TYPES.find(s => s.id === serviceType);
    if (!selected) return null;
    let base = area * selected.rate;
    if (isFirstProject) base = base * 0.85;
    if (isRush) base = base * 1.30;
    return { base: Math.round(base), min: Math.round(base * 0.9), max: Math.round(base * 1.15) };
  }, [sqft, serviceType, isFirstProject, isRush]);

  const result = calcResult();

  const formatUSD = (n) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);

  return (
    <div>
      <SchemaManager
        title="Pricing — Structural Engineering & Design Rates | PRIMECOST"
        description="Transparent pricing for PE-stamped structural engineering ($0.78/sq ft), architectural drawings ($0.45/sq ft), and MEP engineering ($1.30/sq ft). First project 15% off."
        schemaType="Service"
        schemaData={{ name: 'Engineering & Design Pricing', description: 'Transparent rates for structural, architectural, and MEP engineering services.' }}
      />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0c1f3d 0%, #1b3b6f 60%, #1e4a8a 100%)', padding: '5rem 0 3rem', color: '#fff', textAlign: 'center' }}>
        <div className="container">
          <span style={{ fontSize: '0.8rem', fontWeight: '700', color: '#c5a880', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Transparent Rates</span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontFamily: "'Outfit', sans-serif", fontWeight: '800', marginTop: '0.5rem', marginBottom: '1rem' }}>
            Clear, Upfront Engineering Pricing
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#cbd5e1', maxWidth: '600px', margin: '0 auto 1.5rem' }}>
            No hidden fees, no hourly surprises. Every project priced by square footage with PE stamp included.
          </p>
          <div style={{ display: 'inline-block', background: 'rgba(197,168,128,0.15)', border: '1px solid rgba(197,168,128,0.4)', borderRadius: '10px', padding: '0.75rem 2rem' }}>
            <span style={{ color: '#f1c27d', fontWeight: '700', fontSize: '1rem' }}>🎉 New Clients: 15% Off First Project — Applied Automatically</span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section style={{ padding: '5rem 0', backgroundColor: '#f8fafc' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem', alignItems: 'stretch' }}>
              {pricingTiers.map((tier) => (
                <div key={tier.id} style={{
                  backgroundColor: tier.highlight ? '#0c1f3d' : '#ffffff',
                  borderRadius: '16px',
                  padding: '2.25rem',
                  border: tier.highlight ? '2px solid #c5a880' : '1px solid #e2e8f0',
                  boxShadow: tier.highlight ? '0 20px 60px rgba(0,0,0,0.18)' : '0 4px 12px rgba(0,0,0,0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden',
                  transform: tier.highlight ? 'scale(1.03)' : 'none',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }}>
                  {tier.badge && (
                    <div style={{ position: 'absolute', top: '1rem', right: '1rem', backgroundColor: '#c5a880', color: '#0c1f3d', fontSize: '0.7rem', fontWeight: '800', padding: '0.3rem 0.8rem', borderRadius: '999px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      {tier.badge}
                    </div>
                  )}
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: tier.highlight ? 'linear-gradient(90deg, #c5a880, #f1c27d)' : 'linear-gradient(90deg, #1b3b6f, #2a5298)' }} />

                  <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: tier.highlight ? '#c5a880' : '#1b3b6f', marginBottom: '1rem' }}>{tier.title}</h3>
                  <div style={{ marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: tier.price === 'Contact Us' ? '1.5rem' : '2.5rem', fontWeight: '800', color: tier.highlight ? '#fff' : '#0f172a', fontFamily: "'Outfit', sans-serif" }}>{tier.price}</span>
                    {tier.unit && <span style={{ fontSize: '0.9rem', color: tier.highlight ? '#94a3b8' : '#64748b', marginLeft: '0.25rem' }}>{tier.unit}</span>}
                  </div>
                  <span style={{ fontSize: '0.8rem', color: tier.highlight ? '#64748b' : '#94a3b8', display: 'block', marginBottom: '1.25rem' }}>{tier.minOrder}</span>

                  <p style={{ fontSize: '0.88rem', color: tier.highlight ? '#cbd5e1' : '#475569', lineHeight: '1.6', marginBottom: '1.5rem', flexGrow: 0 }}>{tier.description}</p>

                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem', flexGrow: 1 }}>
                    {tier.includes.map((item, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: tier.highlight ? '#e2e8f0' : '#334155', marginBottom: '0.5rem' }}>
                        <span style={{ color: tier.highlight ? '#c5a880' : '#1b3b6f', fontWeight: '700', flexShrink: 0 }}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div style={{ borderTop: `1px solid ${tier.highlight ? 'rgba(255,255,255,0.1)' : '#f1f5f9'}`, paddingTop: '1rem', marginBottom: '1.5rem' }}>
                    <span style={{ fontSize: '0.8rem', color: tier.highlight ? '#94a3b8' : '#64748b' }}>⏱ Turnaround: <strong style={{ color: tier.highlight ? '#cbd5e1' : '#334155' }}>{tier.turnaround}</strong></span>
                  </div>

                  <a href="mailto:info@primecost.biz" style={{
                    display: 'block',
                    textAlign: 'center',
                    padding: '0.85rem',
                    borderRadius: '8px',
                    fontWeight: '700',
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                    backgroundColor: tier.highlight ? '#c5a880' : '#1b3b6f',
                    color: tier.highlight ? '#0c1f3d' : '#fff',
                    transition: 'opacity 0.2s'
                  }}>
                    {tier.price === 'Contact Us' ? 'Get Custom Quote' : 'Request a Quote'}
                  </a>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing Calculator */}
      <section style={{ padding: '5rem 0', backgroundColor: '#fff', borderTop: '1px solid #e2e8f0' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: '700', color: '#c5a880', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Instant Estimate Tool</span>
            <h2 style={{ fontSize: '2rem', color: '#1b3b6f', marginTop: '0.5rem', fontFamily: "'Outfit', sans-serif" }}>Project Cost Calculator</h2>
            <p style={{ color: '#64748b', marginTop: '0.5rem' }}>Get a real-time engineering cost estimate based on your project size and service selection.</p>
          </div>

          <div style={{ backgroundColor: '#f8fafc', borderRadius: '16px', padding: '2.5rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              {/* Sq Ft Input */}
              <div>
                <label style={{ display: 'block', fontWeight: '600', color: '#334155', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Project Square Footage</label>
                <input
                  type="number"
                  min="0"
                  placeholder="e.g. 2500"
                  value={sqft}
                  onChange={e => setSqft(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    border: '2px solid #e2e8f0',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    outline: 'none',
                    fontFamily: "'Inter', sans-serif",
                    boxSizing: 'border-box',
                    backgroundColor: '#fff',
                    transition: 'border-color 0.2s'
                  }}
                  onFocus={e => e.target.style.borderColor = '#1b3b6f'}
                  onBlur={e => e.target.style.borderColor = '#e2e8f0'}
                />
              </div>

              {/* Service Type */}
              <div>
                <label style={{ display: 'block', fontWeight: '600', color: '#334155', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Service Type</label>
                <select
                  value={serviceType}
                  onChange={e => setServiceType(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    border: '2px solid #e2e8f0',
                    borderRadius: '8px',
                    fontSize: '0.95rem',
                    outline: 'none',
                    fontFamily: "'Inter', sans-serif",
                    boxSizing: 'border-box',
                    backgroundColor: '#fff',
                    appearance: 'auto'
                  }}
                >
                  {SERVICE_TYPES.map(s => (
                    <option key={s.id} value={s.id}>{s.label} — ${s.rate.toFixed(2)}/sq ft</option>
                  ))}
                </select>
              </div>

              {/* Checkboxes */}
              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', cursor: 'pointer', fontSize: '0.9rem', color: '#334155', fontWeight: '500' }}>
                  <input
                    type="checkbox"
                    checked={isFirstProject}
                    onChange={e => setIsFirstProject(e.target.checked)}
                    style={{ width: '18px', height: '18px', accentColor: '#1b3b6f', cursor: 'pointer' }}
                  />
                  First Project (15% off)
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', cursor: 'pointer', fontSize: '0.9rem', color: '#334155', fontWeight: '500' }}>
                  <input
                    type="checkbox"
                    checked={isRush}
                    onChange={e => setIsRush(e.target.checked)}
                    style={{ width: '18px', height: '18px', accentColor: '#1b3b6f', cursor: 'pointer' }}
                  />
                  Rush Delivery (+30%)
                </label>
              </div>

              {/* Result */}
              {result ? (
                <div style={{
                  background: 'linear-gradient(135deg, #0c1f3d, #1b3b6f)',
                  borderRadius: '12px',
                  padding: '2rem',
                  color: '#fff',
                  textAlign: 'center',
                  animation: 'fadeIn 0.3s ease'
                }}>
                  <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '600' }}>Estimated Project Cost</p>
                  <div style={{ fontSize: '3rem', fontWeight: '800', fontFamily: "'Outfit', sans-serif", color: '#c5a880' }}>
                    {formatUSD(result.base)}
                  </div>
                  <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginTop: '0.5rem' }}>
                    Range: {formatUSD(result.min)} — {formatUSD(result.max)}
                  </p>
                  <p style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '0.75rem' }}>
                    * Estimate based on standard rates. Final quote provided after plan review.
                  </p>
                  <a href="mailto:info@primecost.biz" style={{
                    display: 'inline-block',
                    marginTop: '1.25rem',
                    backgroundColor: '#c5a880',
                    color: '#0c1f3d',
                    padding: '0.75rem 2rem',
                    borderRadius: '8px',
                    fontWeight: '700',
                    fontSize: '0.9rem',
                    textDecoration: 'none'
                  }}>
                    Request Fixed Quote →
                  </a>
                </div>
              ) : sqft && parseFloat(sqft) > 0 ? null : (
                <div style={{ backgroundColor: '#e0e7ff', borderRadius: '10px', padding: '1.25rem', textAlign: 'center', color: '#3730a3', fontSize: '0.9rem', fontWeight: '500' }}>
                  Enter your square footage above to see an instant estimate.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Add-ons Table */}
      <section style={{ padding: '4rem 0', backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: '700', color: '#c5a880', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Optional Enhancements</span>
            <h2 style={{ fontSize: '1.9rem', color: '#1b3b6f', marginTop: '0.5rem', fontFamily: "'Outfit', sans-serif" }}>Add-On Services</h2>
          </div>
          <ScrollReveal>
            <div style={{ backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
              {addOns.map((addon, idx) => (
                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem 1.75rem', borderBottom: idx < addOns.length - 1 ? '1px solid #f1f5f9' : 'none', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div>
                    <p style={{ fontWeight: '700', color: '#0f172a', fontSize: '0.95rem', marginBottom: '0.2rem' }}>{addon.name}</p>
                    <p style={{ color: '#64748b', fontSize: '0.83rem' }}>{addon.desc}</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontWeight: '800', color: '#1b3b6f', fontSize: '1.1rem' }}>{addon.price}</span>
                    <span style={{ color: '#94a3b8', fontSize: '0.8rem', marginLeft: '0.25rem' }}>{addon.unit}</span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQs */}
      <section style={{ padding: '4rem 0', backgroundColor: '#fff' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: '700', color: '#c5a880', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Pricing FAQs</span>
            <h2 style={{ fontSize: '1.9rem', color: '#1b3b6f', marginTop: '0.5rem', fontFamily: "'Outfit', sans-serif" }}>Common Pricing Questions</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {faqs.map((faq, idx) => (
              <div key={idx} style={{ backgroundColor: '#f8fafc', borderRadius: '10px', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  style={{ width: '100%', background: 'none', border: 'none', padding: '1.2rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', textAlign: 'left', fontFamily: "'Inter', sans-serif" }}
                >
                  <span style={{ fontWeight: '600', color: '#0f172a', fontSize: '0.95rem' }}>{faq.q}</span>
                  <span style={{ color: '#1b3b6f', fontSize: '1.2rem', flexShrink: 0, marginLeft: '1rem', transition: 'transform 0.2s', transform: activeFaq === idx ? 'rotate(45deg)' : 'none' }}>+</span>
                </button>
                {activeFaq === idx && (
                  <div style={{ padding: '0 1.5rem 1.2rem', animation: 'fadeIn 0.25s ease' }}>
                    <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: '1.7' }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, #c5a880, #d4b896)', padding: '3.5rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.9rem', color: '#0c1f3d', fontFamily: "'Outfit', sans-serif", fontWeight: '800', marginBottom: '0.75rem' }}>
            Ready to Get Your Fixed-Fee Engineering Quote?
          </h2>
          <p style={{ color: '#2d3748', fontSize: '1rem', marginBottom: '1.75rem' }}>
            Send us your plans or project description — we'll respond with a detailed proposal within 24 hours.
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
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }
      `}</style>
    </div>
  );
}
