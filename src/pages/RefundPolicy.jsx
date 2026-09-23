import React, { useEffect, useState } from 'react';
import SchemaManager from '../components/SchemaManager';
import { FileText, ClipboardList, Ban, Coins, Receipt, Mail, ChevronDown } from 'lucide-react';

const sections = [
  {
    id: 'scope-of-services',
    icon: <ClipboardList size={22} />,
    title: '1. Professional Consulting Services',
    content: [
      {
        subtitle: 'Engineering & Design Nature',
        text: 'PRIMECOST (PrimeCost Engineering & Design LLC) provides specialized professional engineering, architectural design, MEP coordination, BIM modeling, and pre-construction drafting services. Because our services consist of professional consulting, engineering analysis, calculations, and custom design labor, fees are billed based on time, effort, and technical expertise applied to your project.',
      },
      {
        subtitle: 'Code Compliance and Approval Disclaimer',
        text: 'While we guarantee that all deliverables stamp-ready and fully compliant with the applicable local, state, and national building codes at the time of design, we cannot guarantee that local municipal building departments or permitting authorities will approve plans without comments or revisions. Revisions required by municipal agencies to obtain a permit are handled under the project scope guidelines, and building department rejection is not grounds for a refund.',
      },
    ],
  },
  {
    id: 'deposit-policy',
    icon: <Coins size={22} />,
    title: '2. Initial Deposits & Kickoff Fees',
    content: [
      {
        subtitle: 'Deposit Requirement',
        text: 'Most projects require an initial deposit or retainer fee (typically 30% to 50% of the total contract value) before scheduling, engineering analysis, or schematic layout begins. This deposit secures engineering resources and allows our team to initiate formal project kickoff.',
      },
      {
        subtitle: 'Non-Refundability of Kickoff Deposits',
        text: 'Once engineering analysis, custom drafting, or site data scoping has commenced, the initial deposit is strictly non-refundable. If a project is cancelled by the client immediately after signing but before any design labor is performed, a refund of the deposit minus a $250 administrative setup fee may be requested.',
      },
    ],
  },
  {
    id: 'milestone-payments',
    icon: <Receipt size={22} />,
    title: '3. Milestone Billed Deliverables',
    content: [
      {
        subtitle: 'Phase-Based Milestones',
        text: 'For larger structural and architectural packages, projects are divided into distinct milestones (e.g., Phase 1: Schematic Layouts, Phase 2: Design Development, Phase 3: Construction Documents & PE Stamp). Payments are due upon the completion or submission of each phase as outlined in the contract.',
      },
      {
        subtitle: 'Submission Non-Refundability',
        text: 'Once a milestone deliverable is submitted to the Client for review, or submitted to the municipal authority for permitting, the fees paid for that phase are 100% non-refundable. Under no circumstances will refunds be issued for completed, stamped, or delivered design packages.',
      },
    ],
  },
  {
    id: 'cancellations',
    icon: <Ban size={22} />,
    title: '4. Project Cancellation & Contract Termination',
    content: [
      {
        subtitle: 'Cancellation Notice',
        text: 'Either party may terminate the project agreement upon fourteen (14) days written notice. Notice of termination must be sent in writing to Frank Moore, CEO, at Frank.moore@primecost.biz.',
      },
      {
        subtitle: 'Settlement of Hours Worked',
        text: 'Upon receipt of a cancellation notice, all design and engineering work will cease. The Client will be invoiced for all professional design hours, engineering analysis time, and sub-consultant costs incurred up to the end of the 14-day notice period, calculated at our standard hourly rates. If the total accumulated hours exceed the deposits paid, the Client is obligated to settle the outstanding balance. If the deposits exceed the hours worked, the unused portion of the funds will be refunded.',
      },
    ],
  },
  {
    id: 'refund-request',
    icon: <Mail size={22} />,
    title: '5. Refund Request and Processing',
    content: [
      {
        subtitle: 'Submitting a Request',
        text: 'All requests for refunds or invoice disputes must be submitted in writing. The request must include: Client name, project address, contract date, detailed description of the dispute, and clear justification for the refund. Send all requests to Frank Moore, CEO, at Frank.moore@primecost.biz.',
      },
      {
        subtitle: 'Processing Timeframe',
        text: 'We review all claims within ten (10) business days of receipt. If a partial refund is approved under the cancellation settlement terms, the payment will be processed via bank wire transfer or the original credit card payment method within thirty (30) business days. Refunds will only be issued to the individual or business entity listed on the original contract.',
      },
    ],
  },
];

function AccordionItem({ section, isOpen, toggle }) {
  return (
    <div style={itemStyles.wrapper}>
      <button style={itemStyles.header} onClick={toggle} aria-expanded={isOpen}>
        <div style={itemStyles.headerLeft}>
          <span style={itemStyles.icon}>{section.icon}</span>
          <span style={itemStyles.title}>{section.title}</span>
        </div>
        <ChevronDown
          size={20}
          style={{
            ...itemStyles.chevron,
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </button>
      <div
        style={{
          ...itemStyles.body,
          maxHeight: isOpen ? '2000px' : '0',
          opacity: isOpen ? 1 : 0,
          paddingTop: isOpen ? '1.5rem' : '0',
          paddingBottom: isOpen ? '1.5rem' : '0',
        }}
      >
        {section.content.map((item, i) => (
          <div key={i} style={itemStyles.contentBlock}>
            <h4 style={itemStyles.subtitle}>{item.subtitle}</h4>
            <p style={itemStyles.text}>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const itemStyles = {
  wrapper: {
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(197,168,128,0.15)',
    borderRadius: '12px',
    marginBottom: '0.85rem',
    overflow: 'hidden',
    transition: 'border-color 0.3s',
  },
  header: {
    width: '100%',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.2rem 1.5rem',
    color: '#e2e8f0',
    textAlign: 'left',
  },
  headerLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.85rem',
  },
  icon: {
    color: '#c5a880',
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    fontFamily: "'Outfit', sans-serif",
    fontWeight: '600',
    fontSize: '1rem',
  },
  chevron: {
    color: '#c5a880',
    transition: 'transform 0.35s ease',
    flexShrink: 0,
  },
  body: {
    overflow: 'hidden',
    transition: 'max-height 0.4s ease, opacity 0.3s ease, padding 0.3s ease',
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
  },
  contentBlock: {
    marginBottom: '1.2rem',
  },
  subtitle: {
    color: '#c5a880',
    fontFamily: "'Outfit', sans-serif",
    fontWeight: '600',
    fontSize: '0.92rem',
    marginBottom: '0.4rem',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  text: {
    color: '#94a3b8',
    lineHeight: '1.75',
    fontSize: '0.93rem',
  },
};

export default function RefundPolicy() {
  const [openSection, setOpenSection] = useState('scope-of-services');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(timer);
  }, []);

  const toggle = (id) => setOpenSection(openSection === id ? null : id);

  return (
    <div style={{ ...styles.page, opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)' }}>
      <SchemaManager title="Refund Policy" description="PRIMECOST refund and cancellation policy for engineering and design services." />
      {/* Hero Banner */}
      <div style={styles.hero}>
        <div style={styles.heroOverlay} />
        <div className="container" style={styles.heroContent}>
          <div style={styles.badge}>
            <FileText size={16} />
            <span>Policy</span>
          </div>
          <h1 style={styles.heroTitle}>Refund Policy</h1>
          <p style={styles.heroSub}>
            PrimeCost Engineering & Design LLC — Last Updated: August 6, 2026
          </p>
          <p style={styles.heroDesc}>
            Our goal is to deliver outstanding engineering, architectural design, and BIM modeling solutions.
            This policy outlines the financial terms governing project cancelations, deposits, and refunds.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container" style={styles.main}>
        {/* Intro Card */}
        <div style={styles.introCard}>
          <p style={styles.introText}>
            Because engineering, architectural design, and pre-construction estimation are service-based consulting
            businesses relying on custom labor, fees paid are subject to specific cancellation rules. Please review
            the milestone delivery rules and kickoff deposit guidelines before executing your service agreement.
          </p>
          <div style={styles.introMeta}>
            <span style={styles.metaTag}>Effective: August 6, 2026</span>
            <span style={styles.metaTag}>Applies To: PrimeCost Engineering & Design LLC</span>
            <span style={styles.metaTag}>Main Office: Sheridan, WY</span>
          </div>
        </div>

        {/* Accordion Sections */}
        <div style={styles.accordionWrapper}>
          {sections.map((sec) => (
            <AccordionItem
              key={sec.id}
              section={sec}
              isOpen={openSection === sec.id}
              toggle={() => toggle(sec.id)}
            />
          ))}
        </div>

        {/* Contact CTA */}
        <div style={styles.ctaCard}>
          <h3 style={styles.ctaTitle}>Billing or Refund Question?</h3>
          <p style={styles.ctaText}>
            Our billing team is available to assist you. If you have any inquiries regarding invoices or payments, reach out to us.
          </p>
          <a href="mailto:Frank.moore@primecost.biz" style={styles.ctaBtn}>
            <Mail size={18} />
            Frank.moore@primecost.biz
          </a>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    background: '#060b14',
    minHeight: '100vh',
    transition: 'opacity 0.5s ease, transform 0.5s ease',
  },
  hero: {
    position: 'relative',
    background: 'linear-gradient(135deg, #0a1628 0%, #0d1f3c 40%, #14243d 100%)',
    padding: '5rem 0 4rem',
    overflow: 'hidden',
  },
  heroOverlay: {
    position: 'absolute',
    inset: 0,
    backgroundImage: 'radial-gradient(ellipse at 70% 50%, rgba(197,168,128,0.08) 0%, transparent 60%)',
  },
  heroContent: {
    position: 'relative',
    maxWidth: '750px',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.4rem',
    background: 'rgba(197,168,128,0.12)',
    border: '1px solid rgba(197,168,128,0.3)',
    color: '#c5a880',
    borderRadius: '999px',
    padding: '0.3rem 0.9rem',
    fontSize: '0.78rem',
    fontWeight: '600',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    marginBottom: '1.2rem',
  },
  heroTitle: {
    fontFamily: "'Outfit', sans-serif",
    fontSize: 'clamp(2rem, 5vw, 3rem)',
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: '0.75rem',
    lineHeight: '1.2',
  },
  heroSub: {
    color: '#c5a880',
    fontSize: '0.9rem',
    fontWeight: '500',
    marginBottom: '1rem',
  },
  heroDesc: {
    color: '#94a3b8',
    lineHeight: '1.7',
    fontSize: '1rem',
    maxWidth: '640px',
  },
  main: {
    padding: '4rem 0 5rem',
  },
  introCard: {
    background: 'linear-gradient(135deg, rgba(27,59,111,0.25) 0%, rgba(197,168,128,0.05) 100%)',
    border: '1px solid rgba(197,168,128,0.2)',
    borderRadius: '16px',
    padding: '2rem 2.5rem',
    marginBottom: '3rem',
  },
  introText: {
    color: '#cbd5e1',
    lineHeight: '1.8',
    fontSize: '0.96rem',
    marginBottom: '1.5rem',
  },
  introMeta: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.6rem',
  },
  metaTag: {
    background: 'rgba(197,168,128,0.1)',
    border: '1px solid rgba(197,168,128,0.2)',
    color: '#c5a880',
    borderRadius: '6px',
    padding: '0.25rem 0.75rem',
    fontSize: '0.78rem',
    fontWeight: '500',
  },
  accordionWrapper: {
    marginBottom: '3rem',
  },
  ctaCard: {
    background: 'linear-gradient(135deg, #0d1f3c 0%, #111827 100%)',
    border: '1px solid rgba(197,168,128,0.25)',
    borderRadius: '16px',
    padding: '2.5rem',
    textAlign: 'center',
  },
  ctaTitle: {
    fontFamily: "'Outfit', sans-serif",
    color: '#ffffff',
    fontSize: '1.4rem',
    fontWeight: '700',
    marginBottom: '0.75rem',
  },
  ctaText: {
    color: '#94a3b8',
    marginBottom: '1.5rem',
    lineHeight: '1.6',
  },
  ctaBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.6rem',
    background: 'linear-gradient(135deg, #c5a880 0%, #a8855a 100%)',
    color: '#000000',
    borderRadius: '999px',
    padding: '0.7rem 1.8rem',
    fontWeight: '700',
    fontSize: '0.95rem',
    textDecoration: 'none',
    transition: 'opacity 0.2s',
  },
};
