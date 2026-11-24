import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import SplitWords from '../motion/SplitWords';
import './footer.css';

const serviceLinks = [
  ['/services/structural-engineering', 'Structural Engineering'],
  ['/services/sign-stamp-services', 'Sign & Stamp Services'],
  ['/services/permit-correction', 'Permit Correction'],
  ['/services/architectural-design', 'Architectural Design'],
  ['/services/mep-engineering', 'MEP Engineering'],
  ['/services/bim-cad', 'BIM & CAD Drafting'],
];

const firmLinks = [
  ['/about', 'About the Firm'],
  ['/portfolio', 'Projects'],
  ['/founder', 'Leadership'],
  ['/pricing', 'Service Pricing'],
  ['/service-areas', 'Service Areas'],
  ['/career', 'Careers'],
  ['/blog', 'Insights'],
];

const houstonAreas = [
  ['cypress-tx', 'Cypress'],
  ['katy-tx', 'Katy'],
  ['the-woodlands-tx', 'The Woodlands'],
  ['spring-tx', 'Spring'],
  ['sugar-land-tx', 'Sugar Land'],
  ['pearland-tx', 'Pearland'],
  ['montgomery-tx', 'Montgomery & Conroe'],
];

export default function Footer({ onOpenConsultation, onOpenProposal }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer-section" className="pc-footer">
      <div className="pc-footer__shell">
        <div className="pc-footer__glow" aria-hidden="true" />

        <div className="pc-footer__lead">
          <span className="pc-eyebrow on-dark is-volt">Start a project</span>
          <p className="pc-footer__statement" data-split>
            <SplitWords text="Have drawings to permit?" />{' '}
            <span className="serif-i pc-footer__accent"><SplitWords text="Let’s make them pass." /></span>
          </p>
          <div className="pc-footer__lead-cta">
            <button type="button" className="pc-btn pc-btn--accent" onClick={onOpenProposal} data-magnetic>
              Get a Proposal <span className="pc-btn__icon"><ArrowRight size={18} strokeWidth={2} /></span>
            </button>
            <button type="button" className="pc-btn pc-btn--ghost-light" onClick={onOpenConsultation}>
              Book a Consultation
            </button>
          </div>
        </div>

        <div className="pc-footer__grid">
          <div className="pc-footer__card">
            <span className="pc-footer__label">Talk to an engineer</span>
            <a href="tel:+18322346456" className="pc-footer__big">(832) 234-6456</a>
            <a href="mailto:Frank.moore@primecost.biz" className="pc-footer__mail">Frank.moore@primecost.biz <ArrowUpRight size={16} /></a>
            <span className="pc-footer__hours"><span className="pc-live" /> Mon – Sat · 9:00 AM – 6:00 PM</span>
          </div>

          <div>
            <h4 className="pc-footer__heading">Services</h4>
            <ul className="pc-footer__list">
              {serviceLinks.map(([to, label]) => <li key={to}><Link to={to}>{label}</Link></li>)}
              <li><Link to="/services" className="pc-footer__more">All services <ArrowUpRight size={14} /></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="pc-footer__heading">Firm</h4>
            <ul className="pc-footer__list">
              {firmLinks.map(([to, label]) => <li key={to}><Link to={to}>{label}</Link></li>)}
            </ul>
          </div>

          <div className="pc-footer__offices">
            <h4 className="pc-footer__heading">Offices</h4>
            <address>
              <span className="pc-footer__label">Main office · Wyoming</span>
              75 E 3rd St, Ste 7<br />Sheridan, WY 82801
            </address>
            <address>
              <span className="pc-footer__label">Houston office · Texas</span>
              440 Louisiana St, Suite 900<br />Houston, TX 77002
            </address>
            <a href="tel:+17472237816" className="pc-footer__corp">Corporate (747) 223-7816</a>
          </div>
        </div>

        <div className="pc-footer__areas">
          <span className="pc-footer__label">Houston area</span>
          <div>
            {houstonAreas.map(([slug, city]) => (
              <Link key={slug} to={`/structural-engineer/${slug}`} className="pc-footer__pill">{city}</Link>
            ))}
          </div>
        </div>

        <div className="pc-footer__trust">
          <ul>
            <li>PE Licensed · 49 States</li>
            <li>AIA Member Firm</li>
            <li>Autodesk BIM Certified</li>
          </ul>
          <div className="pc-footer__badges">
            <img src="/bbb-badge.webp" alt="BBB Accredited Business" width="96" height="96" loading="lazy" />
            <img src="/yelp-badge.webp" alt="Yelp" width="96" height="96" loading="lazy" />
            <a href="https://www.facebook.com/share/1cAJw4ejtE/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="pc-footer__social">Facebook <ArrowUpRight size={14} /></a>
            <a href="https://www.instagram.com/primecost_llc?igsh=MXJuMHhxYW5hMnZmeA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="pc-footer__social">Instagram <ArrowUpRight size={14} /></a>
          </div>
        </div>

        <div className="pc-footer__wordmark" aria-hidden="true">
          <span data-parallax="0.06">PRIMECOST</span>
        </div>

        <div className="pc-footer__bottom">
          <p>© {currentYear} PRIMECOST (PrimeCost Engineering &amp; Design LLC). All rights reserved.</p>
          <nav aria-label="Legal">
            <Link to="/privacy-policy">Privacy</Link>
            <Link to="/terms-conditions">Terms</Link>
            <Link to="/refund-policy">Refunds</Link>
            <Link to="/faq">FAQ</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
