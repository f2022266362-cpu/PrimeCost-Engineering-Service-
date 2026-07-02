import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Award, FileText } from 'lucide-react';

export default function Footer({ onOpenConsultation, onOpenProposal }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      {/* Visually hidden links for SEO indexing */}
      <div style={styles.visuallyHidden}>
        <a href="https://www.linkedin.com">LinkedIn</a>
        <a href="https://www.crunchbase.com">Crunchbase</a>
        <a href="https://www.alignable.com">Alignable</a>
        <a href="https://www.bark.com">Bark</a>
        <a href="https://www.houzz.com/professionals">Houzz Professionals</a>
        <a href="https://www.buildzoom.com">BuildZoom</a>
        <a href="https://www.thebluebook.com">The Blue Book Building & Construction Network</a>
        <a href="https://www.constructconnect.com">ConstructConnect</a>
        <a href="https://www.construction.com">Dodge Construction Network</a>
        <a href="https://www.thomasnet.com">ThomasNet</a>
        <a href="https://www.manta.com">Manta Business Directory</a>
        <a href="https://www.hotfrog.com">Hotfrog</a>
        <a href="https://www.cylex.us.com">Cylex US</a>
        <a href="https://www.brownbook.net">Brownbook</a>
        <a href="https://www.bizhwy.com">Bizhwy</a>
        <a href="https://www.tupalo.com">Tupalo</a>
        <a href="https://www.fyple.com">Fyple</a>
        <a href="https://www.ezlocal.com">EZLocal</a>
        <a href="https://www.local.com">Local.com</a>
        <a href="https://www.chamberofcommerce.com">Chamber of Commerce</a>
        <a href="https://www.yellowpages.com">Yellow Pages</a>
        <a href="https://www.yelp.com">Yelp</a>
        <a href="https://www.bbb.org">Better Business Bureau</a>
        <a href="https://www.mapquest.com">MapQuest</a>
        <a href="https://www.merchantcircle.com">MerchantCircle</a>
        <a href="https://foursquare.com">Foursquare</a>
        <a href="https://business.nextdoor.com">Nextdoor Business</a>
        <a href="https://www.usdirectory.com">US Directory</a>
        <a href="https://www.businessdirectoryusa.com">Business Directory USA</a>
        <a href="https://www.showmelocal.com">ShowMeLocal</a>
        <a href="https://www.engineering.com">Engineering.com</a>
        <a href="https://www.enr.com">Engineering News-Record</a>
        <a href="https://www.asce.org">American Society of Civil Engineers</a>
        <a href="https://www.nspe.org">National Society of Professional Engineers</a>
        <a href="https://www.aia.org">American Institute of Architects</a>
        <a href="https://www.agc.org">Associated General Contractors of America</a>
        <a href="https://www.abc.org">Associated Builders and Contractors</a>
        <a href="https://www.bdcnetwork.com">Building Design+Construction</a>
        <a href="https://www.constructiondive.com">Construction Dive</a>
        <a href="https://www.forconstructionpros.com">For Construction Pros</a>
        <a href="https://archinect.com">Archinect</a>
        <a href="https://www.archdaily.com">ArchDaily</a>
        <a href="https://www.designboom.com">designboom</a>
        <a href="https://worldarchitecture.org">World Architecture Community</a>
        <a href="https://www.constructionexec.com">Construction Executive</a>
        <a href="https://www.buildingconnected.com">BuildingConnected</a>
        <a href="https://www.procore.com">Procore</a>
        <a href="https://www.planhub.com">PlanHub</a>
        <a href="https://www.bidclerk.com">BidClerk</a>
        <a href="https://www.constructconnect.com/construct-a-lead">ConstructConnect Lead Management</a>
        <a href="https://medium.com">Medium</a>
        <a href="https://substack.com">Substack</a>
        <a href="https://www.blogger.com">Blogger</a>
        <a href="https://wordpress.com">WordPress</a>
        <a href="https://www.tumblr.com">Tumblr</a>
        <a href="https://www.quora.com">Quora</a>
        <a href="https://www.reddit.com">Reddit</a>
        <a href="https://dev.to">Dev.to</a>
        <a href="https://hashnode.com">Hashnode</a>
        <a href="https://vocal.media">Vocal Media</a>
        <a href="https://www.behance.net">Behance</a>
        <a href="https://dribbble.com">Dribbble</a>
        <a href="https://www.pinterest.com">Pinterest</a>
        <a href="https://www.youtube.com">YouTube</a>
        <a href="https://vimeo.com">Vimeo</a>
        <a href="https://www.facebook.com/business">Facebook Business</a>
        <a href="https://www.instagram.com">Instagram</a>
        <a href="https://x.com">X (formerly Twitter)</a>
        <a href="https://www.tiktok.com">TikTok</a>
        <a href="https://www.threads.net">Threads</a>
        <a href="https://www.goodfirms.co">GoodFirms</a>
        <a href="https://clutch.co">Clutch</a>
        <a href="https://www.designrush.com">DesignRush</a>
        <a href="https://www.topdevelopers.co">TopDevelopers</a>
        <a href="https://techbehemoths.com">TechBehemoths</a>
        <a href="https://upcity.com">UpCity</a>
        <a href="https://www.g2.com">G2</a>
        <a href="https://www.trustpilot.com">Trustpilot</a>
        <a href="https://www.sitejabber.com">Sitejabber</a>
        <a href="https://reviewfoxy.com">ReviewFoxy</a>
        <a href="https://www.asaonline.com">American Subcontractors Association</a>
        <a href="https://www.nahb.org">National Association of Home Builders</a>
        <a href="https://www.concrete.org">American Concrete Institute</a>
        <a href="https://www.csiresources.org">Construction Specifications Institute</a>
        <a href="https://engineeringmanagementinstitute.org">Engineering Management Institute</a>
        <a href="https://www.constructionbusinessowner.com">Construction Business Owner</a>
        <a href="https://www.builderonline.com">BUILDER Online</a>
        <a href="https://www.construction-today.com">Construction Today</a>
        <a href="https://theconstructor.org">The Constructor</a>
        <a href="https://www.civilax.com">Civilax</a>
        <a href="https://www.engineeringclicks.com">Engineering Clicks</a>
        <a href="https://constructech.com">Constructech</a>
        <a href="https://aec-business.com">AEC Business</a>
        <a href="https://www.constructionplacements.com">Construction Placements</a>
        <a href="https://www.civildigital.com">CivilDigital</a>
        <a href="https://engineeringdiscoveries.com">Engineering Discoveries</a>
        <a href="https://www.angi.com">Angi</a>
        <a href="https://www.homeadvisor.com">HomeAdvisor</a>
        <a href="https://www.thumbtack.com">Thumbtack</a>
        <a href="https://www.networx.com">Networx</a>
        <a href="https://porch.com">Porch</a>
        <a href="https://www.fixr.com">Fixr</a>
        <a href="https://www.hometalk.com">Hometalk</a>
        <a href="https://www.contractors.com">Contractors.com</a>
        <a href="https://www.buildzoom.com/contractors">BuildZoom Contractors</a>
        <a href="https://www.constructconnect.com/networking-events">ConstructConnect Networking Events</a>
      </div>
      <div className="container">
        <div style={styles.grid}>
          {/* Company Details Column */}
          <div style={styles.colLarge}>
            <Link to="/" style={styles.logoBox}>
              <img src="/logo.png" alt="PRIMECOST Structural Engineering Services Houston logo" style={styles.logoImg} loading="lazy" />
            </Link>
            <p style={styles.aboutText}>
              Delivering high-end architectural drawings, structural calculations, MEP schematics, BIM models, and pre-construction bidding packages. Engineering your vision with precision since 2005.
            </p>
            <div style={styles.leadership}>
              <h5 style={styles.smallHeading}>Executive Leadership</h5>
              <p style={styles.leaderText}><strong>CEO:</strong> Frank Moore</p>
              <p style={styles.leaderText}><strong>President:</strong> Harold Sterling, PE</p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div style={styles.col}>
            <h4 style={styles.heading}>Services</h4>
            <ul style={styles.list}>
              <li><Link to="/services/structural-engineering" style={styles.link}>Structural Engineering</Link></li>
              <li><Link to="/services/sign-stamp-services" style={styles.link}>Sign & Stamp Services</Link></li>
              <li><Link to="/services/permit-correction" style={styles.link}>Permit Correction</Link></li>
              <li><Link to="/services/architectural-design" style={styles.link}>Architectural Design</Link></li>
              <li><Link to="/services/home-design" style={styles.link}>Home Design</Link></li>
              <li><Link to="/services/interior-design" style={styles.link}>Interior Design</Link></li>
              <li><Link to="/services/exterior-design" style={styles.link}>Exterior Design</Link></li>
              <li><Link to="/services/construction-services" style={styles.link}>General Construction</Link></li>
              <li><Link to="/services/mep-engineering" style={styles.link}>MEP Engineering</Link></li>
              <li><Link to="/services/bim-cad" style={styles.link}>BIM & CAD Drafting</Link></li>
            </ul>
          </div>

          {/* Sectors Column */}
          <div style={styles.col}>
            <h4 style={styles.heading}>Industries</h4>
            <ul style={styles.list}>
              <li><Link to="/industries/residential" style={styles.link}>Residential Custom Homes</Link></li>
              <li><Link to="/industries/multifamily" style={styles.link}>Apartments & Mixed-Use</Link></li>
              <li><Link to="/industries/commercial" style={styles.link}>Commercial Office & Retail</Link></li>
              <li><Link to="/industries/industrial" style={styles.link}>Warehouses & Plants</Link></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div style={styles.col}>
            <h4 style={styles.heading}>Legal</h4>
            <ul style={styles.list}>
              <li><Link to="/privacy-policy" style={styles.link}>Privacy Policy</Link></li>
              <li><Link to="/terms-conditions" style={styles.link}>Terms &amp; Conditions</Link></li>
              <li><a href="mailto:Frank.moore@primecost.biz" style={styles.link}>Contact Legal</a></li>
            </ul>
            <div style={styles.complianceBadges}>
              <span style={styles.compBadge}>GDPR Compliant</span>
              <span style={styles.compBadge}>CCPA Compliant</span>
            </div>
            <div style={styles.logoRow}>
              <a href="https://www.bbb.org" target="_blank" rel="noopener noreferrer" className="footer-badge-link" style={styles.badgeLink}>
                <img src="/bbb.png" alt="PRIMECOST BBB Accredited Structural Engineering Houston" style={styles.bbbBadgeImg} loading="lazy" />
              </a>
              <a href="https://business.yelp.com" target="_blank" rel="noopener noreferrer" className="footer-badge-link" style={styles.badgeLink}>
                <img src="/yelp.png" alt="PRIMECOST Yelp Rated Houston Structural Engineering Firm" style={styles.yelpBadgeImg} loading="lazy" />
              </a>
            </div>
          </div>

          {/* Contact & Hours Column */}
          <div style={styles.colLarge}>
            <h4 style={styles.heading}>Contact & Location</h4>
            <div style={styles.contactDetails}>
              <div style={styles.contactItem}>
                <MapPin size={18} style={styles.icon} />
                <span>440 Louisiana St, Houston, TX 77002</span>
              </div>
              <div style={styles.contactItem}>
                <Phone size={18} style={styles.icon} />
                <div>
                  <a href="tel:+18322346456" style={styles.link}>Main: (832) 234-6456</a><br />
                  <a href="tel:+17472237816" style={styles.link}>Corporate: (747) 223-7816</a>
                </div>
              </div>
              <div style={styles.contactItem}>
                <Mail size={18} style={styles.icon} />
                <a href="mailto:Frank.moore@primecost.biz" style={styles.link}>Frank.moore@primecost.biz</a>
              </div>
              <div style={styles.contactItem}>
                <Clock size={18} style={styles.icon} />
                <div>
                  <span>Mon - Fri: 9:00 AM - 6:00 PM</span><br />
                  <span>Sat: 10:00 AM - 4:00 PM</span><br />
                  <span style={{ color: '#ef4444' }}>Sun: Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mid section: Payments and trust certificates */}
        <div style={styles.midSection}>
          <div style={styles.badges}>
            <div style={styles.badgeItem}>
              <Award size={18} />
              <span>AIA Member Firm</span>
            </div>
            <div style={styles.badgeItem}>
              <ShieldCheck size={18} />
              <span>Licensed PE (TX #48291)</span>
            </div>
            <div style={styles.badgeItem}>
              <FileText size={18} />
              <span>BIM Certified (Autodesk)</span>
            </div>
          </div>
          <div style={styles.paymentMethods}>
            <span style={styles.paymentTitle}>We Accept:</span>
            <span style={styles.paymentBadge}>Credit/Debit</span>
            <span style={styles.paymentBadge}>PayPal</span>
            <span style={styles.paymentBadge}>Bank Transfer</span>
          </div>
        </div>

        {/* Bottom section: Copyright */}
        <div style={styles.bottomSection}>
          <p>© 2005 PRIMECOST (PrimeCost Engineering & Design LLC). All rights reserved.</p>
          <div style={styles.bottomLinks}>
            <span onClick={onOpenProposal} style={styles.footerCta}>Request Scoping Bid</span>
            <span>•</span>
            <span onClick={onOpenConsultation} style={styles.footerCta}>Schedule Free Scoping Call</span>
            <span>•</span>
            <Link to="/privacy-policy" style={styles.legalLink}>Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms-conditions" style={styles.legalLink}>Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#090d16',
    color: '#94a3b8',
    padding: '4rem 0 2rem 0',
    borderTop: '1px solid #1e293b',
    fontSize: '0.88rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr 1fr 1fr 2fr',
    gap: '2rem',
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
    height: '45px',
    borderRadius: '4px',
    backgroundColor: '#ffffff',
    padding: '2px',
  },
  aboutText: {
    lineHeight: '1.6',
    color: '#cbd5e1',
  },
  leadership: {
    marginTop: '0.5rem',
  },
  smallHeading: {
    color: '#c5a880',
    fontSize: '0.85rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginBottom: '0.4rem',
  },
  leaderText: {
    color: '#e2e8f0',
    fontSize: '0.82rem',
  },
  heading: {
    color: '#ffffff',
    fontFamily: "'Outfit', sans-serif",
    fontSize: '1.1rem',
    fontWeight: '600',
    position: 'relative',
    paddingBottom: '0.5rem',
    borderBottom: '2px solid #1b3b6f',
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
    color: '#c5a880',
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
    borderTop: '1px solid #1e293b',
    borderBottom: '1px solid #1e293b',
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
  paymentMethods: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',
    flexWrap: 'wrap',
  },
  paymentTitle: {
    fontSize: '0.82rem',
    color: '#cbd5e1',
    marginRight: '0.2rem',
  },
  paymentBadge: {
    border: '1px solid #334155',
    backgroundColor: '#0f172a',
    borderRadius: '4px',
    padding: '0.25rem 0.6rem',
    fontSize: '0.75rem',
    color: '#e2e8f0',
    fontWeight: '500',
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
    color: '#c5a880',
    fontWeight: '600',
  },
  legalLink: {
    color: '#64748b',
    textDecoration: 'none',
    transition: 'color 0.2s',
  },
  complianceBadges: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
    marginTop: '0.5rem',
  },
  compBadge: {
    background: 'rgba(34,197,94,0.08)',
    border: '1px solid rgba(34,197,94,0.2)',
    color: '#86efac',
    borderRadius: '4px',
    padding: '0.2rem 0.6rem',
    fontSize: '0.72rem',
    fontWeight: '600',
    letterSpacing: '0.5px',
    width: 'fit-content',
  },
  logoRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem',
    marginTop: '1.2rem',
    flexWrap: 'wrap',
  },
  badgeLink: {
    display: 'inline-block',
    transition: 'transform 0.2s ease-in-out, opacity 0.2s',
  },
  bbbBadgeImg: {
    height: '55px',
    width: 'auto',
    borderRadius: '4px',
    display: 'block',
  },
  yelpBadgeImg: {
    height: '45px',
    width: 'auto',
    borderRadius: '50%',
    display: 'block',
    backgroundColor: '#ffffff',
    padding: '2px',
  },
  texasBadgeImg: {
    height: '45px',
    width: 'auto',
    borderRadius: '50%',
    display: 'block',
    backgroundColor: '#ffffff',
    padding: '2px',
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

// Add responsive footer grid media query behavior
if (typeof document !== 'undefined') {
  const footerMedia = `
    @media (max-width: 1024px) {
      footer div.container > div {
        grid-template-columns: repeat(2, 1fr) !important;
      }
    }
    @media (max-width: 600px) {
      footer div.container > div {
        grid-template-columns: 1fr !important;
      }
    }
    footer a:hover {
      color: #c5a880 !important;
    }
    .footer-badge-link:hover {
      transform: translateY(-2px);
      opacity: 0.9;
    }
  `;
  const styleSheet = document.createElement("style");
  styleSheet.innerText = footerMedia;
  document.head.appendChild(styleSheet);
}
export { styles };
