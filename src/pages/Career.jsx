import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, ArrowRight, Send, CheckCircle2 } from 'lucide-react';
import SchemaManager from '../components/SchemaManager';
import ScrollReveal from '../components/ScrollReveal';
import GlassCard from '../components/ui/GlassCard';
import SectionHeading from '../components/ui/SectionHeading';
import PrimaryButton from '../components/ui/PrimaryButton';
import Badge from '../components/ui/Badge';

const openings = [
  {
    id: 1,
    title: 'Structural Engineer (PE)',
    department: 'Engineering',
    type: 'Full-Time',
    location: 'Houston, TX / Remote',
    description: 'Design and review structural systems for commercial and residential projects. PE license required.',
    requirements: ['Licensed PE (any state)', '5+ years structural design', 'Proficiency in ETABS, SAP2000, RISA-3D', 'AutoCAD / Revit experience'],
  },
  {
    id: 2,
    title: 'Architectural Drafter',
    department: 'Design',
    type: 'Full-Time',
    location: 'Remote',
    description: 'Produce permit-ready architectural drawings for residential and commercial projects using AutoCAD and Revit.',
    requirements: ['2+ years drafting experience', 'AutoCAD & Revit proficiency', 'Knowledge of IBC building codes', 'Detail-oriented with fast turnaround'],
  },
  {
    id: 3,
    title: 'MEP Engineer',
    department: 'Engineering',
    type: 'Full-Time',
    location: 'Houston, TX / Hybrid',
    description: 'Design mechanical, electrical, and plumbing systems for a variety of commercial and industrial projects.',
    requirements: ['BS in Mechanical or Electrical Engineering', '3+ years MEP design experience', 'Revit MEP & AutoCAD', 'Title 24 / ComCheck knowledge'],
  },
  {
    id: 4,
    title: 'BIM Coordinator',
    department: 'BIM & Technology',
    type: 'Full-Time',
    location: 'Remote',
    description: 'Manage BIM models, run clash detection, and coordinate multidisciplinary design teams on large-scale projects.',
    requirements: ['Revit & Navisworks expert', 'BIM coordination experience', 'Knowledge of LOD standards', 'Strong communication skills'],
  },
  {
    id: 5,
    title: 'Project Manager',
    department: 'Operations',
    type: 'Full-Time',
    location: 'Houston, TX',
    description: 'Oversee multiple engineering and design projects from intake through permit submission, ensuring on-time delivery.',
    requirements: ['3+ years project management', 'Construction/engineering background', 'PMP certification (preferred)', 'Client-facing communication skills'],
  },
  {
    id: 6,
    title: 'Business Development Associate',
    department: 'Sales & Growth',
    type: 'Full-Time',
    location: 'Remote / Houston, TX',
    description: 'Generate leads, build contractor relationships, and grow PRIMECOST\'s national client base.',
    requirements: ['Sales experience in construction/AEC', 'Strong networking skills', 'CRM proficiency', 'Self-motivated & goal-oriented'],
  },
];

export default function Career() {
  const [activeJob, setActiveJob] = useState(null);
  const [applied, setApplied] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleApply = (e) => {
    e.preventDefault();
    const job = openings.find(j => j.id === activeJob);
    const subject = `Job Application: ${job?.title}`;
    const body = `Applicant: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`;
    window.location.href = `mailto:Frank.moore@primecost.biz?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setApplied(true);
    setActiveJob(null);
  };

  return (
    <div style={{ paddingTop: '7rem', position: 'relative' }}>
      <SchemaManager
        title="Careers at PRIMECOST | Engineering & Design Jobs"
        description="Join the PRIMECOST team. We're hiring structural engineers, MEP engineers, BIM coordinators, architects, and project managers nationwide."
      />

      {/* Hero Banner */}
      <section style={styles.hero}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <ScrollReveal variant="fade-up">
            <Badge variant="gold" style={{ marginBottom: '1.25rem' }}>WE'RE HIRING</Badge>
            <h1 style={{ ...styles.heroTitle, fontSize: 'clamp(2.1rem, 6vw, 3.8rem)' }}>Build the Future<br />With Us</h1>
            <p style={styles.heroSub}>
              Join a fast-growing structural engineering and design firm trusted by developers,
              architects, and contractors across all 50 states.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
              <a href="#openings">
                <PrimaryButton variant="primary" icon={<ArrowRight size={16} />}>
                  View Open Positions
                </PrimaryButton>
              </a>
              <a href="mailto:Frank.moore@primecost.biz">
                <PrimaryButton variant="outline" style={{ borderColor: '#0F2446', color: '#0F2446' }}>
                  Send Your Resume
                </PrimaryButton>
              </a>
            </div>
          </ScrollReveal>
        </div>
        <div style={styles.heroBg} />
      </section>

      {/* Why Join Us */}
      <section style={styles.section}>
        <div className="container">
          <SectionHeading
            tag="WHY PRIMECOST"
            title="A Place to Grow Your Career"
            subtitle="We invest in our people with competitive pay, remote flexibility, mentorship, and meaningful work that shapes communities."
          />
          <div style={styles.perksGrid} className="career-perks-grid">
            {[
              { icon: '🏠', title: 'Remote-First', desc: 'Work from anywhere. Most roles are fully remote or hybrid.' },
              { icon: '📈', title: 'Career Growth', desc: 'Clear advancement paths from junior to senior to PE licensure support.' },
              { icon: '💰', title: 'Competitive Pay', desc: 'Market-rate salaries + performance bonuses for top contributors.' },
              { icon: '🛠️', title: 'Latest Tools', desc: 'Revit, ETABS, Navisworks, Bluebeam — we keep you equipped.' },
              { icon: '🤝', title: 'Team Culture', desc: 'Collaborative, inclusive environment with expert mentors.' },
              { icon: '🌎', title: 'Nationwide Impact', desc: 'Work on projects across all 50 U.S. states and growing.' },
            ].map((perk, i) => (
              <ScrollReveal key={i} variant="fade-up" style={{ transitionDelay: `${i * 0.07}s` }}>
                <GlassCard style={styles.perkCard} hoverLift>
                  <span style={styles.perkIcon}>{perk.icon}</span>
                  <h4 style={styles.perkTitle}>{perk.title}</h4>
                  <p style={styles.perkDesc}>{perk.desc}</p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section style={{ ...styles.section, backgroundColor: '#f8fafc' }} id="openings">
        <div className="container">
          <SectionHeading
            tag="OPEN POSITIONS"
            title="Current Job Openings"
            subtitle="Don't see your role? Send your CV to Frank.moore@primecost.biz — we're always looking for great talent."
          />
          <div style={styles.jobsGrid} className="career-jobs-grid">
            {openings.map((job, i) => (
              <ScrollReveal key={job.id} variant="fade-up" style={{ transitionDelay: `${i * 0.08}s` }}>
                <GlassCard style={styles.jobCard} hoverLift>
                  <div style={styles.jobTop}>
                    <div>
                      <Badge variant="primary" style={{ marginBottom: '0.6rem', fontSize: '0.68rem' }}>{job.department}</Badge>
                      <h3 style={styles.jobTitle}>{job.title}</h3>
                    </div>
                  </div>

                  <div style={styles.jobMeta}>
                    <span style={styles.metaTag}><MapPin size={13} /> {job.location}</span>
                    <span style={styles.metaTag}><Clock size={13} /> {job.type}</span>
                  </div>

                  <p style={styles.jobDesc}>{job.description}</p>

                  <ul style={styles.reqList}>
                    {job.requirements.map((req, ri) => (
                      <li key={ri} style={styles.reqItem}>
                        <CheckCircle2 size={13} style={{ color: '#10b981', flexShrink: 0 }} />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    style={styles.applyBtn}
                    onClick={() => { setActiveJob(job.id); setApplied(false); }}
                  >
                    Apply Now <ArrowRight size={14} />
                  </button>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {activeJob && (
        <div style={styles.overlay}>
          <div style={styles.backdrop} onClick={() => setActiveJob(null)} />
          <div style={styles.modal} className="animate-fade-in">
            <button style={styles.closeBtn} onClick={() => setActiveJob(null)}>✕</button>
            <h2 style={styles.modalTitle}>Apply — {openings.find(j => j.id === activeJob)?.title}</h2>
            <p style={styles.modalSub}>Fill in your details and we'll get back to you within 48 hours.</p>
            <form onSubmit={handleApply} style={styles.form}>
              <input name="name" required placeholder="Full Name *" value={form.name} onChange={handleChange} style={styles.input} />
              <input name="email" type="email" required placeholder="Email Address *" value={form.email} onChange={handleChange} style={styles.input} />
              <input name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} style={styles.input} />
              <textarea name="message" placeholder="Brief intro / cover note..." value={form.message} onChange={handleChange} style={{ ...styles.input, minHeight: '90px', resize: 'vertical' }} />
              <button type="submit" style={styles.submitBtn}>
                <Send size={16} /> Submit Application
              </button>
            </form>
          </div>
        </div>
      )}

      {applied && (
        <div style={styles.toast} className="animate-fade-in">
          <CheckCircle2 size={18} style={{ color: '#10b981' }} />
          Application submitted! We'll be in touch soon.
        </div>
      )}
    </div>
  );
}

const styles = {
  hero: {
    padding: '5rem 0 6rem 0',
    position: 'relative',
    overflow: 'hidden',
    background: 'linear-gradient(135deg, #f0f4ff 0%, #e8eef8 60%, #fdf6e8 100%)',
    borderBottom: '1px solid #e2e8f0',
  },
  heroBg: {
    position: 'absolute', top: 0, right: 0, bottom: 0,
    width: '45%',
    background: 'linear-gradient(135deg, transparent 0%, rgba(200,154,69,0.06) 100%)',
    zIndex: 1,
  },
  heroTitle: {
    fontSize: '3.8rem',
    fontWeight: '850',
    color: '#0F2446',
    fontFamily: "'Outfit', sans-serif",
    lineHeight: '1.1',
    letterSpacing: '-0.02em',
    marginBottom: '1.25rem',
  },
  heroSub: {
    fontSize: '1.1rem',
    color: '#475569',
    lineHeight: '1.7',
    maxWidth: '560px',
  },
  section: {
    padding: '5.5rem 0',
  },
  perksGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1.5rem',
    marginTop: '3rem',
  },
  perkCard: {
    padding: '2rem 1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    height: '100%',
  },
  perkIcon: { fontSize: '2rem' },
  perkTitle: {
    fontSize: '1.1rem',
    fontWeight: '800',
    color: '#0F2446',
    fontFamily: "'Outfit', sans-serif",
  },
  perkDesc: {
    fontSize: '0.88rem',
    color: '#64748b',
    lineHeight: '1.55',
  },
  jobsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1.75rem',
    marginTop: '3rem',
  },
  jobCard: {
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    height: '100%',
  },
  jobTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  jobTitle: {
    fontSize: '1.25rem',
    fontWeight: '800',
    color: '#0F2446',
    fontFamily: "'Outfit', sans-serif",
  },
  jobMeta: {
    display: 'flex',
    gap: '0.75rem',
    flexWrap: 'wrap',
  },
  metaTag: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.3rem',
    fontSize: '0.8rem',
    color: '#64748b',
    fontWeight: '600',
    backgroundColor: '#f1f5f9',
    padding: '0.25rem 0.65rem',
    borderRadius: '999px',
  },
  jobDesc: {
    fontSize: '0.9rem',
    color: '#475569',
    lineHeight: '1.55',
  },
  reqList: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
    marginTop: '0.25rem',
  },
  reqItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.4rem',
    fontSize: '0.84rem',
    color: '#475569',
  },
  applyBtn: {
    marginTop: 'auto',
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
    backgroundColor: '#0F2446',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    padding: '0.7rem 1.25rem',
    fontWeight: '700',
    fontSize: '0.88rem',
    cursor: 'pointer',
    alignSelf: 'flex-start',
    transition: 'all 0.2s ease',
  },
  overlay: {
    position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
    zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem',
  },
  backdrop: {
    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
    backgroundColor: 'rgba(15,23,42,0.6)', backdropFilter: 'blur(8px)',
  },
  modal: {
    position: 'relative', backgroundColor: '#ffffff', borderRadius: '16px',
    width: '100%', maxWidth: '520px', maxHeight: '90vh', overflowY: 'auto',
    padding: '2.5rem', zIndex: 1001, boxShadow: '0 25px 50px rgba(0,0,0,0.2)',
  },
  closeBtn: {
    position: 'absolute', top: '1.25rem', right: '1.25rem',
    background: 'none', border: 'none', fontSize: '1.1rem',
    cursor: 'pointer', color: '#64748b',
  },
  modalTitle: {
    fontSize: '1.6rem', fontWeight: '800', color: '#0F2446',
    fontFamily: "'Outfit', sans-serif", marginBottom: '0.4rem',
  },
  modalSub: { fontSize: '0.9rem', color: '#64748b', marginBottom: '1.5rem' },
  form: { display: 'flex', flexDirection: 'column', gap: '1rem' },
  input: {
    padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #cbd5e1',
    fontSize: '0.95rem', color: '#0f172a', backgroundColor: '#f8fafc',
    outline: 'none', fontFamily: 'inherit', width: '100%',
  },
  submitBtn: {
    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
    backgroundColor: '#0F2446', color: '#ffffff', border: 'none',
    borderRadius: '8px', padding: '0.85rem', fontWeight: '700', fontSize: '0.95rem',
    cursor: 'pointer', marginTop: '0.5rem',
  },
  toast: {
    position: 'fixed', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
    backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px',
    padding: '0.85rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem',
    boxShadow: '0 8px 24px rgba(0,0,0,0.1)', zIndex: 9999,
    fontSize: '0.9rem', fontWeight: '600', color: '#0F2446',
  },
};

// Responsive
if (typeof document !== 'undefined') {
  const s = document.createElement('style');
  s.innerText = `
    @media (max-width: 991px) {
      .career-perks-grid { grid-template-columns: repeat(2, 1fr) !important; }
      .career-jobs-grid  { grid-template-columns: 1fr !important; }
    }
    @media (max-width: 576px) {
      .career-perks-grid { grid-template-columns: 1fr !important; }
    }
  `;
  document.head.appendChild(s);
}
