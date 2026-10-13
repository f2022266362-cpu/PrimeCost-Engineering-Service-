import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import SchemaManager from '../components/SchemaManager';
import QuickQuoteForm from '../components/QuickQuoteForm';
import cityPages from '../data/cityPages';
import { serviceHref } from '../data/serviceLinks';
import NotFound from './NotFound';

const SERVICE_LABELS = {
  'structural-engineering': 'Structural Engineering',
  'permit-correction': 'Permit Corrections',
  'inspection-assessment': 'Structural Inspection & Assessment',
  'architectural-design': 'Architectural Design',
  'mep-engineering': 'MEP Engineering',
  'construction-services': 'Construction Services',
};

const GUIDES = [
  { to: '/blog/foundation-engineer-letter-houston', label: 'Foundation engineer letters: what they include and cost' },
  { to: '/blog/houston-permit-rejected', label: 'Permit rejected? How to get approved on resubmittal' },
  { to: '/blog/pe-stamping-services', label: 'PE stamping services: getting drawings sealed right' },
];

export default function CityPage() {
  const { citySlug } = useParams();
  const page = cityPages[citySlug];
  if (!page) return <NotFound />;

  return (
    <div style={styles.page}>
      <SchemaManager
        title={page.metaTitle}
        description={page.metaDescription}
        schemaType="Service"
        schemaData={{
          name: `Structural Engineering in ${page.city}, TX`,
          description: page.metaDescription,
          areaServed: { '@type': 'City', name: `${page.city}, TX` },
        }}
      />
      <SchemaManager
        title={page.metaTitle}
        description={page.metaDescription}
        schemaType="FAQ"
        schemaData={{ questions: page.faq }}
      />

      <article className="container" style={styles.article}>
        <span style={styles.tag}><MapPin size={14} /> {page.city}, TX · {page.county}</span>
        <h1 style={styles.title}>{page.h1}</h1>

        <div style={styles.contactStrip}>
          <strong style={{ color: '#0F2446' }}>Project in {page.city}?</strong>{' '}
          Talk to a licensed engineer: <a href="tel:+18322346456" style={styles.link}>(832) 234-6456</a>{' '}
          or <a href={`mailto:Frank.moore@primecost.biz?subject=${encodeURIComponent(`Quote request: ${page.city}, TX`)}`} style={styles.link}>email your plans</a>.
        </div>

        {page.intro.map((p, i) => <p key={i} style={styles.p}>{p}</p>)}

        <h2 style={styles.h2}>Structural Engineering Services in {page.city}</h2>
        <ul style={styles.serviceList}>
          {page.services.map((id) => (
            <li key={id}>
              <Link to={serviceHref(id)} style={styles.serviceLink}>
                <CheckCircle size={16} style={{ color: '#C89A45', flexShrink: 0 }} />
                {SERVICE_LABELS[id] || id}
                <ArrowRight size={14} style={{ marginLeft: 'auto' }} />
              </Link>
            </li>
          ))}
        </ul>

        <h2 style={styles.h2}>What We Plan For in {page.city}</h2>
        {page.local.map((item, i) => (
          <div key={i} style={styles.localItem}>
            <h3 style={styles.h3}>{item.title}</h3>
            <p style={{ ...styles.p, marginBottom: 0 }}>{item.desc}</p>
          </div>
        ))}

        <h2 style={styles.h2}>Why PRIMECOST</h2>
        <p style={styles.p}>
          Our Houston office is at 440 Louisiana St, Suite 900, and our engineers hold PE licenses across 49 states, including Texas.
          We prepare sealed drawings and calculations, answer plan review comments, and stay with your project until it is approved.
          PRIMECOST is BBB accredited.
        </p>

        <QuickQuoteForm source={`City page: ${page.city}, TX`} heading={`Get a quote for your ${page.city} project`} />

        <h2 style={styles.h2}>Frequently Asked Questions</h2>
        {page.faq.map((q, i) => (
          <div key={i} style={styles.faqItem}>
            <h3 style={styles.faqQ}>{q.question}</h3>
            <p style={styles.faqA}>{q.answer}</p>
          </div>
        ))}

        <h2 style={styles.h2}>Helpful Guides</h2>
        <ul style={styles.plainList}>
          {GUIDES.map((g) => <li key={g.to}><Link to={g.to} style={styles.link}>{g.label}</Link></li>)}
        </ul>

        <h2 style={styles.h2}>Nearby Areas We Serve</h2>
        <p style={styles.p}>
          {page.nearby.filter((s) => cityPages[s]).map((s, i, arr) => (
            <React.Fragment key={s}>
              <Link to={`/structural-engineer/${s}`} style={styles.link}>{cityPages[s].city}, TX</Link>
              {i < arr.length - 1 ? ' · ' : ''}
            </React.Fragment>
          ))}
          {' · '}<Link to="/services/structural-engineering" style={styles.link}>Houston, TX</Link>
          {' · '}<Link to="/service-areas" style={styles.link}>All service areas</Link>
        </p>
      </article>
    </div>
  );
}

const styles = {
  page: { backgroundColor: '#f8fafc', paddingTop: '6.5rem', paddingBottom: '4rem', minHeight: '100vh' },
  article: {
    backgroundColor: '#ffffff', maxWidth: '860px', borderRadius: '16px',
    boxShadow: '0 10px 30px -12px rgba(0,0,0,0.15)', padding: '2rem 2.25rem', marginTop: '2rem',
  },
  tag: { display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.8rem', color: '#c5a880', fontWeight: 700, letterSpacing: '0.5px' },
  title: { fontSize: '2.2rem', color: '#0f172a', lineHeight: 1.2, margin: '0.5rem 0 1rem' },
  contactStrip: {
    backgroundColor: '#fdf8f0', borderLeft: '4px solid #c5a880', borderRadius: '6px',
    padding: '0.85rem 1rem', fontSize: '0.92rem', color: '#334155', lineHeight: 1.5, marginBottom: '1.5rem',
  },
  link: { color: '#0F2446', fontWeight: 700, textDecoration: 'underline' },
  p: { fontSize: '1rem', lineHeight: 1.7, color: '#334155', marginBottom: '1rem' },
  h2: { fontSize: '1.45rem', color: '#0F2446', margin: '2rem 0 0.9rem', fontWeight: 800 },
  h3: { fontSize: '1.05rem', color: '#0F2446', margin: '0 0 0.35rem' },
  serviceList: { listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.6rem' },
  serviceLink: {
    display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.8rem 1rem', borderRadius: '8px',
    border: '1px solid #e2e8f0', backgroundColor: '#f8fafc', color: '#0F2446', fontWeight: 700, textDecoration: 'none', fontSize: '0.92rem',
  },
  localItem: { padding: '1rem 1.1rem', borderRadius: '8px', border: '1px solid #e2e8f0', marginBottom: '0.75rem' },
  faqItem: { padding: '1.1rem', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0', marginBottom: '0.75rem' },
  faqQ: { fontSize: '0.98rem', color: '#0F2446', margin: '0 0 0.4rem 0' },
  faqA: { fontSize: '0.9rem', color: '#475569', margin: 0, lineHeight: 1.55 },
  plainList: { paddingLeft: '1.2rem', lineHeight: 1.9 },
};
