import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Award, FileText, Star } from 'lucide-react';
import PrimaryButton from './ui/PrimaryButton';

export default function Footer({ onOpenConsultation, onOpenProposal }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer-section" style={styles.footer}>
      {/* Visually hidden links for SEO indexing */}
      <div style={styles.visuallyHidden}>
        <a href="https://www.linkedin.com">LinkedIn</a>
        <a href="https://www.crunchbase.com">Crunchbase</a>
        <a href="https://www.alignable.com">Alignable</a>
        <a href="https://www.bark.com">Bark</a>
        <a href="https://www.houzz.com">Houzz</a>
        <a href="https://www.buildzoom.com">BuildZoom</a>
      </div>

      <div className="container">
        
        {/* Massive 4-Column Layout */}
        <div style={styles.grid}>
          {/* Column 1: Brand details & Accreditations */}
          <div style={styles.colLarge}>
            <Link to="/" style={styles.logoBox} className="logo-hover-rotate">
              <img src="/logo.png" alt="PRIMECOST Logo" style={styles.logoImg} loading="lazy" />
            </Link>
            <p style={styles.aboutText}>
              Delivering high-end architectural drawings, structural calculations, MEP schematics, BIM models, and pre-construction bidding packages. Engineering your vision with precision since 2005.
            </p>
            
            {/* Trust Reviews Badge */}
            <div style={styles.reviewsBadge} className="glass-panel">
              <div style={{ display: 'flex', gap: '2px', color: '#C89A45' }}>
                <Star size={14} fill="#C89A45" />
                <Star size={14} fill="#C89A45" />
                <Star size={14} fill="#C89A45" />
                <Star size={14} fill="#C89A45" />
                <Star size={14} fill="#C89A45" />
              </div>
              <span style={styles.reviewsText}>
                <strong>4.9/5 Rating</strong> on Google Reviews
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div style={styles.col}>
            <h4 style={styles.heading}>Services</h4>
            <ul style={styles.list}>
              <li><Link to="/services/structural-engineering" style={styles.link}>Structural Engineering</Link></li>
              <li><Link to="/services/sign-stamp-services" style={styles.link}>Sign & Stamp Services</Link></li>
              <li><Link to="/services/permit-correction" style={styles.link}>Permit Correction</Link></li>
              <li><Link to="/services/architectural-design" style={styles.link}>Architectural Design</Link></li>
              <li><Link to="/services/mep-engineering" style={styles.link}>MEP Engineering</Link></li>
              <li><Link to="/services/bim-cad" style={styles.link}>BIM & CAD Drafting</Link></li>
            </ul>
          </div>

          {/* Column 3: Corporate Info & Social links */}
          <div style={styles.col}>
            <h4 style={styles.heading}>Quick Links</h4>
            <ul style={styles.list}>
              <li><Link to="/about" style={styles.link}>About Us</Link></li>
              <li><Link to="/portfolio" style={styles.link}>Case Studies</Link></li>
              <li><Link to="/pricing" style={styles.link}>Service Pricing</Link></li>
              <li><Link to="/service-areas" style={styles.link}>Service Areas</Link></li>
              <li><Link to="/privacy-policy" style={styles.link}>Privacy Policy</Link></li>
              <li><Link to="/terms-conditions" style={styles.link}>Terms &amp; Conditions</Link></li>
            </ul>
          </div>

          {/* Column 4: Address, Hours, & Contact details */}
          <div style={styles.colLarge}>
            <h4 style={styles.heading}>Contact & Location</h4>
            <div style={styles.contactDetails}>
              <div style={styles.contactItem}>
                <MapPin size={16} style={styles.icon} />
                <span>440 Louisiana St, Suite 900, Houston, TX 77002</span>
              </div>
              <div style={styles.contactItem}>
                <Phone size={16} style={styles.icon} />
                <div>
                  <a href="tel:+18322346456" style={styles.link}>Main: (832) 234-6456</a><br />
                  <a href="tel:+17472237816" style={styles.link}>Corporate: (747) 223-7816</a>
                </div>
              </div>
              <div style={styles.contactItem}>
                <Mail size={16} style={styles.icon} />
                <a href="mailto:Frank.moore@primecost.biz" style={styles.link}>Frank.moore@primecost.biz</a>
              </div>
              <div style={styles.contactItem}>
                <Clock size={16} style={styles.icon} />
                <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Accreditations and trust badges bar */}
        <div style={styles.midSection}>
          <div style={styles.badges}>
            <div style={styles.badgeItem}>
              <Award size={18} style={{ color: '#C89A45' }} />
              <span>AIA Member Firm</span>
            </div>
            <div style={styles.badgeItem}>
              <ShieldCheck size={18} style={{ color: '#C89A45' }} />
              <span>Licensed PE (Active in 50 States)</span>
            </div>
            <div style={styles.badgeItem}>
              <FileText size={18} style={{ color: '#C89A45' }} />
              <span>BIM Autodesk Certified</span>
            </div>
          </div>
          
          <div style={styles.logoRow}>
            <img src="/bbb.png" alt="BBB Accredited" style={styles.badgeImg} loading="lazy" />
            <img src="/yelp.png" alt="Yelp Rated" style={styles.badgeImgYelp} loading="lazy" />
          </div>
        </div>

        {/* Bottom copyright section */}
        <div style={styles.bottomSection}>
          <p>© {currentYear} PRIMECOST (PrimeCost Engineering & Design LLC). All rights reserved.</p>
          <div style={styles.bottomLinks}>
            <span onClick={onOpenProposal} style={styles.footerCta}>Request Scoping Bid</span>
            <span>•</span>
            <span onClick={onOpenConsultation} style={styles.footerCta}>Schedule Free Call</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#071328', // Extremely rich dark navy
    color: '#94a3b8',
    padding: '5rem 0 3rem 0',
    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
    fontSize: '0.88rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1.5fr 1fr 1fr 1.5fr',
    gap: '3rem',
    marginBottom: '3rem',
  },
  col: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  colLarge: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.2rem',
  },
  logoBox: {
    display: 'inline-block',
  },
  logoImg: {
    height: '58px',
    borderRadius: '4px',
    backgroundColor: '#ffffff',
    padding: '2px',
  },
  aboutText: {
    lineHeight: '1.6',
    color: '#cbd5e1',
  },
  reviewsBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '0.6rem 1rem',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '8px',
    width: 'fit-content'
  },
  reviewsText: {
    fontSize: '0.75rem',
    color: '#ffffff'
  },
  heading: {
    color: '#ffffff',
    fontFamily: "'Outfit', sans-serif",
    fontSize: '1.1rem',
    fontWeight: '700',
    position: 'relative',
    paddingBottom: '0.5rem',
    borderBottom: '2px solid #C89A45',
    alignSelf: 'flex-start',
  },
  list: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.6rem',
  },
  link: {
    color: '#94a3b8',
    transition: 'color 0.2s',
  },
  contactDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.85rem',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.75rem',
    lineHeight: '1.5',
  },
  icon: {
    color: '#C89A45',
    marginTop: '0.15rem',
    flexShrink: 0,
  },
  midSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1.5rem',
    padding: '2rem 0',
    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
    marginBottom: '2rem',
  },
  badges: {
    display: 'flex',
    gap: '1.5rem',
    flexWrap: 'wrap',
  },
  badgeItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#cbd5e1',
    fontWeight: '500',
    fontSize: '0.82rem',
  },
  logoRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  badgeImg: {
    height: '45px',
    width: 'auto',
    borderRadius: '4px',
  },
  badgeImgYelp: {
    height: '40px',
    width: 'auto',
    borderRadius: '50%',
    backgroundColor: '#ffffff',
    padding: '2px',
  },
  bottomSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
    fontSize: '0.8rem',
    color: '#64748b',
  },
  bottomLinks: {
    display: 'flex',
    gap: '0.75rem',
  },
  footerCta: {
    cursor: 'pointer',
    color: '#C89A45',
    fontWeight: '600',
  },
  visuallyHidden: {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: '0',
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    border: '0',
  },
};

// Add responsive styles dynamically
if (typeof document !== 'undefined') {
  const footerStyles = `
    @media (max-width: 991px) {
      footer div.container > div:first-child {
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 2rem !important;
      }
    }
    @media (max-width: 600px) {
      footer div.container > div:first-child {
        grid-template-columns: 1fr !important;
      }
      footer div.container > div:nth-child(2) {
        flex-direction: column !important;
        align-items: flex-start !important;
        gap: 1.5rem !important;
      }
    }
    footer a:hover {
      color: #C89A45 !important;
    }
  `;
  const styleSheet = document.createElement("style");
  styleSheet.innerText = footerStyles;
  document.head.appendChild(styleSheet);
}
export { styles };
