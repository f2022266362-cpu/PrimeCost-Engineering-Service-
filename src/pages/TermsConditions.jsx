import React, { useEffect, useState } from 'react';
import { FileText, Scale, CreditCard, AlertTriangle, CheckCircle, XCircle, Clock, ChevronDown, Mail } from 'lucide-react';

const sections = [
  {
    id: 'acceptance',
    icon: <CheckCircle size={22} />,
    title: '1. Acceptance of Terms',
    content: [
      {
        subtitle: 'Agreement to Terms',
        text: 'By accessing the PRIMECOST website (primecost.biz) or engaging PrimeCost Engineering & Design LLC for any architectural, structural, MEP, BIM, interior design, or pre-construction services, you confirm that you have read, understood, and agree to be bound by these Terms & Conditions. If you do not agree to these terms, you must discontinue use of our website and services immediately.',
      },
      {
        subtitle: 'Eligibility',
        text: 'You represent that you are at least 18 years of age, have the legal authority to enter into a binding agreement, and are engaging our services for lawful purposes only. Business representatives affirm they have authority to bind their organization to these terms.',
      },
      {
        subtitle: 'Updates to Terms',
        text: 'PRIMECOST reserves the right to modify these Terms & Conditions at any time. Changes are effective upon posting to this page. Continued use of our services after modifications constitutes your acceptance of the revised terms. We recommend reviewing this page periodically.',
      },
    ],
  },
  {
    id: 'services',
    icon: <FileText size={22} />,
    title: '2. Services & Scope of Work',
    content: [
      {
        subtitle: 'Service Offerings',
        text: 'PRIMECOST provides professional engineering and architectural design services including: Architectural Design & Construction Drawings, Structural Engineering Calculations & Plans, MEP (Mechanical, Electrical, Plumbing) Engineering, BIM Modeling & CAD Documentation, Interior Space Planning & FF&E, 3D Rendering & Visualization, Pre-Construction Bid Packages & Cost Estimation, and Permit Coordination Support.',
      },
      {
        subtitle: 'Project Scope Agreement',
        text: 'All services are rendered pursuant to a signed Scope of Work (SOW) or Service Agreement. The SOW defines deliverables, timelines, revision rounds, submission formats, and fee structures. Any work outside the agreed scope will require a written change order and may incur additional charges.',
      },
      {
        subtitle: 'Geographic Coverage',
        text: 'PRIMECOST operates across all 50 U.S. states with 7 regional sub-offices, and provides services throughout Europe. We are licensed and insured in accordance with the engineering and architectural practice requirements of each jurisdiction in which we operate. International service terms may be supplemented by jurisdiction-specific addenda.',
      },
      {
        subtitle: 'Professional Standards',
        text: 'All engineering deliverables are produced by or under the supervision of licensed Professional Engineers (PE) and Registered Architects (RA) holding valid licenses. PRIMECOST maintains full professional liability (E&O) insurance and general liability coverage.',
      },
    ],
  },
  {
    id: 'payment',
    icon: <CreditCard size={22} />,
    title: '3. Payment Terms & Fees',
    content: [
      {
        subtitle: 'Fee Structure',
        text: 'Fees are established per project through our scoping and proposal process. PRIMECOST offers both fixed-fee and hourly rate engagements depending on project type and complexity. All fees are quoted in US Dollars (USD) unless otherwise stated in writing.',
      },
      {
        subtitle: 'Payment Schedule',
        text: 'Standard payment terms are: 50% deposit due upon project kickoff, 25% due upon design development completion, and 25% due upon final deliverable submission. Milestone schedules may vary per project agreement. All payments are due within 10 business days of invoice issuance.',
      },
      {
        subtitle: 'Accepted Payment Methods',
        text: 'We accept payment via credit card (Visa, Mastercard, American Express, Discover), debit card, PayPal, ACH bank transfer, and wire transfer. All payments are processed through secure, PCI-compliant payment processors.',
      },
      {
        subtitle: 'Late Payments',
        text: 'Invoices unpaid after 30 days are subject to a 1.5% monthly late fee on the outstanding balance. PRIMECOST reserves the right to pause or suspend services on accounts with overdue balances. A reactivation fee may apply upon payment resolution.',
      },
      {
        subtitle: 'Taxes',
        text: 'Client is responsible for any applicable state, local, or international taxes, duties, or levies arising from the purchase of services. PRIMECOST will collect and remit sales tax where required by law.',
      },
    ],
  },
  {
    id: 'intellectual-property',
    icon: <Scale size={22} />,
    title: '4. Intellectual Property & Deliverables',
    content: [
      {
        subtitle: 'Ownership of Deliverables',
        text: 'Upon receipt of full payment, Client is granted a non-exclusive, non-transferable license to use the project deliverables (drawings, models, calculations, specifications) for the specified project only. PRIMECOST retains all copyright, moral rights, and other intellectual property rights in all work product, methodologies, templates, and underlying tools.',
      },
      {
        subtitle: 'Engineering Seals & Stamps',
        text: 'Stamped and sealed engineering documents are issued solely for the specific project, jurisdiction, and purpose stated in the SOW. Reuse of sealed documents for other projects, sites, or purposes without PRIMECOST\'s written consent is strictly prohibited and may constitute engineering fraud under applicable state laws.',
      },
      {
        subtitle: 'Client-Provided Materials',
        text: 'Client warrants they hold all rights to any materials, surveys, plans, or data they provide to PRIMECOST, and grants us a license to use such materials solely for project delivery. Client indemnifies PRIMECOST against any third-party intellectual property claims arising from client-supplied materials.',
      },
      {
        subtitle: 'Portfolio Usage',
        text: 'PRIMECOST reserves the right to include project images, renderings, and general descriptions in our portfolio, case studies, and marketing materials unless the client requests confidentiality in writing at project initiation.',
      },
    ],
  },
  {
    id: 'revisions',
    icon: <Clock size={22} />,
    title: '5. Revisions, Change Orders & Timelines',
    content: [
      {
        subtitle: 'Included Revisions',
        text: 'Each project agreement specifies the number of included revision rounds. Standard engagements typically include 2 rounds of revisions per design phase. Revisions are defined as modifications within the original approved scope; scope changes require a change order.',
      },
      {
        subtitle: 'Change Orders',
        text: 'Any modifications to the agreed scope, program, structural system, or design intent must be documented in a written Change Order executed by both parties before additional work commences. Change orders will specify the additional fee, timeline impact, and deliverables.',
      },
      {
        subtitle: 'Project Timelines',
        text: 'PRIMECOST will provide estimated timeline milestones in the project agreement. Timelines are contingent upon timely client feedback and approvals. Delays caused by client inaction, incomplete information, or scope changes may extend project completion dates proportionally without liability to PRIMECOST.',
      },
    ],
  },
  {
    id: 'liability',
    icon: <AlertTriangle size={22} />,
    title: '6. Limitation of Liability & Warranties',
    content: [
      {
        subtitle: 'Professional Warranty',
        text: 'PRIMECOST warrants that services will be performed in a competent and professional manner, consistent with the standard of care exercised by qualified engineers and architects practicing in the same field and region. This warranty does not guarantee any specific outcome, approval, or permit issuance.',
      },
      {
        subtitle: 'Limitation of Liability',
        text: 'To the maximum extent permitted by applicable law, PRIMECOST\'s aggregate liability for any claims arising from a specific project shall not exceed the total fees actually paid by Client for that project. In no event shall PRIMECOST be liable for indirect, incidental, consequential, punitive, or special damages, including loss of profits, revenue, or opportunity.',
      },
      {
        subtitle: 'Force Majeure',
        text: 'PRIMECOST shall not be liable for delays or failures in performance resulting from acts beyond our reasonable control, including natural disasters, pandemics, government actions, labor disputes, power outages, cyberattacks, or third-party infrastructure failures.',
      },
      {
        subtitle: 'Third-Party Approvals',
        text: 'PRIMECOST does not guarantee permit issuance, plan check approval, or regulatory authority acceptance. Such determinations rest with the applicable authorities. We will provide compliant documents but cannot be held responsible for changes in code interpretation or regulatory requirements.',
      },
    ],
  },
  {
    id: 'termination',
    icon: <XCircle size={22} />,
    title: '7. Termination & Cancellation',
    content: [
      {
        subtitle: 'Termination by Client',
        text: 'Client may terminate a project agreement with 14 days written notice. Upon termination, Client is obligated to pay for all work completed to date, including time incurred for demobilization. The initial deposit is non-refundable once design work has commenced.',
      },
      {
        subtitle: 'Termination by PRIMECOST',
        text: 'PRIMECOST reserves the right to terminate services with 7 days written notice if: (a) Client fails to make timely payment, (b) Client engages in abusive or unlawful conduct toward our staff, or (c) project conditions make it impossible or illegal to continue. In such cases, fees are due for all work completed.',
      },
      {
        subtitle: 'Effect of Termination',
        text: 'Upon termination, each party returns or destroys confidential materials of the other party (subject to legal retention obligations). Deliverables completed and paid for are transferred to Client; incomplete deliverables and engineering seals are retained by PRIMECOST.',
      },
    ],
  },
  {
    id: 'governing-law',
    icon: <Scale size={22} />,
    title: '8. Governing Law & Dispute Resolution',
    content: [
      {
        subtitle: 'Governing Law',
        text: 'These Terms & Conditions are governed by and construed in accordance with the laws of the State of Texas, United States of America, without regard to conflict of law principles. For European engagements, EU consumer protection regulations apply where mandated by law.',
      },
      {
        subtitle: 'Informal Resolution',
        text: 'Prior to initiating formal proceedings, both parties agree to attempt good-faith negotiation to resolve any dispute within 30 days of written notice identifying the issue.',
      },
      {
        subtitle: 'Binding Arbitration',
        text: 'If informal resolution fails, disputes shall be resolved by binding arbitration administered by the American Arbitration Association (AAA) under its Commercial Arbitration Rules, with proceedings conducted in Houston, Texas. Both parties waive the right to jury trial.',
      },
      {
        subtitle: 'Venue',
        text: 'For matters not subject to arbitration, each party consents to exclusive jurisdiction and venue in the state and federal courts located in Harris County, Texas.',
      },
    ],
  },
  {
    id: 'contact-legal',
    icon: <Mail size={22} />,
    title: '9. Legal Notices & Contact',
    content: [
      {
        subtitle: 'Legal Correspondence',
        text: 'All legal notices must be sent in writing to: Frank Moore, CEO — PrimeCost Engineering & Design LLC. Email: Frank.moore@primecost.biz | Phone: (832) 234-6456 | Mailing Address: 440 Louisiana St, Houston, TX 77002. Notices sent by email are effective upon sender receiving a delivery confirmation. Notices sent by certified mail are effective 3 business days after mailing.',
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

export default function TermsConditions() {
  const [openSection, setOpenSection] = useState('acceptance');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(timer);
  }, []);

  const toggle = (id) => setOpenSection(openSection === id ? null : id);

  return (
    <div style={{ ...styles.page, opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)' }}>
      {/* Hero Banner */}
      <div style={styles.hero}>
        <div style={styles.heroOverlay} />
        <div className="container" style={styles.heroContent}>
          <div style={styles.badge}>
            <FileText size={16} />
            <span>Legal</span>
          </div>
          <h1 style={styles.heroTitle}>Terms & Conditions</h1>
          <p style={styles.heroSub}>
            PrimeCost Engineering & Design LLC — Effective: June 1, 2025
          </p>
          <p style={styles.heroDesc}>
            These Terms & Conditions govern your use of PRIMECOST's website and professional
            engineering & architectural design services. Please read carefully before engaging our services.
          </p>
        </div>
      </div>

      {/* Quick Nav */}
      <div style={styles.quickNav}>
        <div className="container">
          <div style={styles.quickNavInner}>
            <span style={styles.quickNavLabel}>Jump to Section:</span>
            {sections.map((s) => (
              <button
                key={s.id}
                style={styles.quickNavBtn}
                onClick={() => setOpenSection(s.id)}
              >
                {s.title.split('.')[0]}.
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container" style={styles.main}>
        {/* Intro Card */}
        <div style={styles.introCard}>
          <p style={styles.introText}>
            These Terms & Conditions ("Agreement") constitute a legally binding agreement between you
            ("Client") and PrimeCost Engineering & Design LLC, doing business as PRIMECOST
            ("Company", "we", "us", "our"), a Texas limited liability company. PRIMECOST serves
            clients across all U.S. states, maintains 7 regional offices, and provides services in Europe.
            Our principal office is located at 440 Louisiana St, Houston, TX 77002.
          </p>
          <div style={styles.disclaimer}>
            <AlertTriangle size={16} style={{ color: '#f59e0b', flexShrink: 0, marginTop: '2px' }} />
            <p style={styles.disclaimerText}>
              This document is a legal agreement. If you have questions about these terms before engaging
              our services, please contact us at Frank.moore@primecost.biz before proceeding.
            </p>
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
          <h3 style={styles.ctaTitle}>Have Questions About Our Terms?</h3>
          <p style={styles.ctaText}>
            Our team is transparent and approachable. Contact Frank Moore, CEO, directly to discuss any terms before signing an engagement.
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
    background: 'linear-gradient(135deg, #0a1628 0%, #0f1f3a 40%, #12243d 100%)',
    padding: '5rem 0 4rem',
    overflow: 'hidden',
  },
  heroOverlay: {
    position: 'absolute',
    inset: 0,
    backgroundImage: 'radial-gradient(ellipse at 30% 50%, rgba(197,168,128,0.08) 0%, transparent 60%)',
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
  quickNav: {
    background: '#0a111e',
    borderBottom: '1px solid #1e293b',
    padding: '1rem 0',
    overflowX: 'auto',
  },
  quickNavInner: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    flexWrap: 'wrap',
  },
  quickNavLabel: {
    color: '#64748b',
    fontSize: '0.8rem',
    fontWeight: '600',
    whiteSpace: 'nowrap',
    marginRight: '0.25rem',
  },
  quickNavBtn: {
    background: 'rgba(197,168,128,0.08)',
    border: '1px solid rgba(197,168,128,0.2)',
    color: '#c5a880',
    borderRadius: '6px',
    padding: '0.25rem 0.65rem',
    fontSize: '0.75rem',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'background 0.2s',
  },
  main: {
    padding: '4rem 0 5rem',
  },
  introCard: {
    background: 'linear-gradient(135deg, rgba(27,59,111,0.2) 0%, rgba(197,168,128,0.04) 100%)',
    border: '1px solid rgba(197,168,128,0.2)',
    borderRadius: '16px',
    padding: '2rem 2.5rem',
    marginBottom: '3rem',
  },
  introText: {
    color: '#cbd5e1',
    lineHeight: '1.8',
    fontSize: '0.96rem',
    marginBottom: '1.25rem',
  },
  disclaimer: {
    display: 'flex',
    gap: '0.75rem',
    background: 'rgba(245,158,11,0.07)',
    border: '1px solid rgba(245,158,11,0.2)',
    borderRadius: '10px',
    padding: '1rem 1.25rem',
  },
  disclaimerText: {
    color: '#fbbf24',
    fontSize: '0.87rem',
    lineHeight: '1.6',
    margin: 0,
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
