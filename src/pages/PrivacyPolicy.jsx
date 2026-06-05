import React, { useEffect, useState } from 'react';
import { Shield, Eye, Lock, Database, Bell, Trash2, Mail, ChevronDown } from 'lucide-react';

const sections = [
  {
    id: 'information-collected',
    icon: <Database size={22} />,
    title: '1. Information We Collect',
    content: [
      {
        subtitle: 'Personal Identification Information',
        text: 'When you engage with PRIMECOST (PrimeCost Engineering & Design LLC), we may collect: full name, company or organization name, email address, phone number, mailing address, project type and details, and billing information. This information is collected when you request a proposal, schedule a consultation, submit a contact form, or engage our services contractually.',
      },
      {
        subtitle: 'Automatically Collected Data',
        text: 'Our website automatically collects certain technical data including your IP address, browser type and version, operating system, pages visited, time spent on pages, referring URL, and device identifiers. We use cookies and similar technologies to enhance your browsing experience and analyze site traffic.',
      },
      {
        subtitle: 'Project & Design Data',
        text: 'If you share architectural plans, site surveys, sketches, BIM files, or other project documentation for scoping or estimation purposes, this data is treated as confidential project information and is handled with the strictest professional discretion.',
      },
    ],
  },
  {
    id: 'how-we-use',
    icon: <Eye size={22} />,
    title: '2. How We Use Your Information',
    content: [
      {
        subtitle: 'Service Delivery',
        text: 'We use your personal information to provide architectural design, structural engineering, MEP engineering, BIM modeling, and pre-construction bidding services. This includes communicating project status, delivering deliverables, issuing invoices, and coordinating with sub-consultants where applicable.',
      },
      {
        subtitle: 'Communication & Support',
        text: 'Your contact information is used to respond to inquiries, provide project updates, schedule consultations, and send relevant industry insights. We may occasionally send newsletters or case study updates related to our engineering and design services. You may opt out at any time.',
      },
      {
        subtitle: 'Legal & Compliance',
        text: 'We may use your data to fulfill legal obligations, enforce contracts, resolve disputes, and comply with applicable federal, state, and international regulations including those governing licensed engineering practice in Texas and across all U.S. states and European jurisdictions where we operate.',
      },
      {
        subtitle: 'Analytics & Improvement',
        text: 'Aggregated, anonymized data helps us understand how clients use our website and services so we can continuously improve our offerings, user experience, and service quality.',
      },
    ],
  },
  {
    id: 'data-sharing',
    icon: <Shield size={22} />,
    title: '3. Data Sharing & Third Parties',
    content: [
      {
        subtitle: 'We Do Not Sell Your Data',
        text: 'PRIMECOST does not sell, trade, rent, or otherwise transfer your personal information to outside parties for their marketing purposes under any circumstances.',
      },
      {
        subtitle: 'Trusted Service Providers',
        text: 'We may share information with trusted third-party service providers who assist us in website hosting, email communications, payment processing, CRM management, and cloud storage. These providers are contractually obligated to keep your information confidential and use it solely to perform services on our behalf.',
      },
      {
        subtitle: 'Professional Collaborators',
        text: 'In some project scenarios, we may share relevant project data with licensed sub-consultants, engineers of record, or permit expeditors working under our direct supervision. Any data shared is limited to what is strictly necessary for project completion.',
      },
      {
        subtitle: 'Legal Disclosures',
        text: 'We may disclose information when required by law, court order, or government authority; when we believe disclosure is necessary to protect our rights or the safety of others; or in connection with a business acquisition, merger, or asset sale.',
      },
    ],
  },
  {
    id: 'data-security',
    icon: <Lock size={22} />,
    title: '4. Data Security',
    content: [
      {
        subtitle: 'Security Measures',
        text: 'We implement industry-standard security measures to protect your personal information, including SSL/TLS encryption for data in transit, secure cloud storage with access controls, restricted employee access on a need-to-know basis, regular security audits and vulnerability assessments, and two-factor authentication for internal systems.',
      },
      {
        subtitle: 'Data Breach Protocol',
        text: 'In the unlikely event of a data breach, we will notify affected individuals and relevant authorities as required by applicable law, including the Texas Identity Theft Enforcement and Protection Act and EU GDPR Article 33 requirements, within 72 hours of becoming aware of the breach.',
      },
    ],
  },
  {
    id: 'cookies',
    icon: <Database size={22} />,
    title: '5. Cookies & Tracking Technologies',
    content: [
      {
        subtitle: 'Types of Cookies We Use',
        text: 'Essential Cookies: Required for website functionality and security. Analytics Cookies: Help us understand traffic patterns (Google Analytics). Preference Cookies: Remember your settings and preferences. Marketing Cookies: May be used to serve relevant professional content (LinkedIn, Google Ads).',
      },
      {
        subtitle: 'Cookie Control',
        text: 'You may configure your browser to reject cookies or to notify you when cookies are being sent. Note that disabling certain cookies may affect website functionality. You can also opt out of Google Analytics tracking by installing the Google Analytics Opt-out Browser Add-on.',
      },
    ],
  },
  {
    id: 'your-rights',
    icon: <Bell size={22} />,
    title: '6. Your Rights & Choices',
    content: [
      {
        subtitle: 'Access & Portability',
        text: 'You have the right to request a copy of the personal data we hold about you in a structured, commonly used, and machine-readable format.',
      },
      {
        subtitle: 'Correction & Update',
        text: 'You may request correction of inaccurate or incomplete personal information at any time by contacting our privacy team.',
      },
      {
        subtitle: 'Deletion ("Right to be Forgotten")',
        text: 'Subject to our legal retention obligations, you may request deletion of your personal data. We will comply within 30 days unless we are legally required to retain certain records.',
      },
      {
        subtitle: 'Opt-Out of Marketing',
        text: 'You may unsubscribe from marketing emails at any time by clicking "Unsubscribe" in any email or contacting us at Frank.moore@primecost.biz.',
      },
      {
        subtitle: 'CCPA Rights (California Residents)',
        text: 'California residents have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what categories of personal information we collect, the right to opt out of the "sale" of personal information (we do not sell data), and the right to non-discrimination for exercising your privacy rights.',
      },
    ],
  },
  {
    id: 'retention',
    icon: <Trash2 size={22} />,
    title: '7. Data Retention',
    content: [
      {
        subtitle: 'Retention Periods',
        text: 'We retain personal information for as long as necessary to fulfill the purposes described in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. Project files and engineering documents are typically retained for a minimum of 10 years in accordance with professional engineering record-keeping standards. Marketing preferences and non-client inquiry data are retained for 3 years.',
      },
    ],
  },
  {
    id: 'contact',
    icon: <Mail size={22} />,
    title: '8. Contact Our Privacy Team',
    content: [
      {
        subtitle: 'Privacy Inquiries',
        text: 'For any privacy-related questions, data access requests, or concerns, please contact: Frank Moore, CEO — PrimeCost Engineering & Design LLC. Email: Frank.moore@primecost.biz | Phone: (832) 234-6456 | Address: 440 Louisiana St, Houston, TX 77002. We aim to respond to all privacy inquiries within 5 business days.',
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

export default function PrivacyPolicy() {
  const [openSection, setOpenSection] = useState('information-collected');
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
            <Shield size={16} />
            <span>Legal</span>
          </div>
          <h1 style={styles.heroTitle}>Privacy Policy</h1>
          <p style={styles.heroSub}>
            PrimeCost Engineering & Design LLC — Last Updated: June 1, 2025
          </p>
          <p style={styles.heroDesc}>
            We are committed to protecting your personal information with transparency,
            integrity, and professional discretion. This policy explains how PRIMECOST
            collects, uses, and safeguards your data.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container" style={styles.main}>
        {/* Intro Card */}
        <div style={styles.introCard}>
          <p style={styles.introText}>
            By accessing our website or engaging our engineering and architectural design services,
            you agree to the data practices described in this Privacy Policy. PRIMECOST operates
            across all 50 U.S. states, with 7 regional sub-offices, and provides services
            throughout Europe — we are committed to complying with all applicable privacy laws
            including GDPR, CCPA, and Texas Privacy statutes.
          </p>
          <div style={styles.introMeta}>
            <span style={styles.metaTag}>Effective: June 1, 2025</span>
            <span style={styles.metaTag}>Applies To: PrimeCost Engineering & Design LLC</span>
            <span style={styles.metaTag}>Jurisdiction: United States & European Union</span>
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
          <h3 style={styles.ctaTitle}>Questions About Your Privacy?</h3>
          <p style={styles.ctaText}>
            Our team is here to help. Reach out directly to Frank Moore, CEO, for any privacy-related inquiries.
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
