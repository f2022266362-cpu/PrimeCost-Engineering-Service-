import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu, X, ChevronDown, Calendar,
  Building2, Ruler, Layers, Zap, HardHat, Monitor,
  Mountain, ClipboardList, DollarSign, Search, FileCheck,
  ScanLine, Wrench, Leaf, Handshake, Star
} from 'lucide-react';
import PrimaryButton from './ui/PrimaryButton';

// ─── Service icon map ─────────────────────────────────────────────────────────
const serviceItems = [
  { to: '/services/structural-engineering',  Icon: Building2,     label: 'Structural Engineering' },
  { to: '/services/civil-engineering',        Icon: Ruler,         label: 'Civil Engineering' },
  { to: '/services/architectural-design',     Icon: Layers,        label: 'Architectural Design' },
  { to: '/services/mep-engineering',          Icon: Zap,           label: 'MEP Engineering' },
  { to: '/services/construction-services',    Icon: HardHat,       label: 'Construction Services' },
  { to: '/services/bim-cad',                  Icon: Monitor,       label: 'BIM & Digital Engineering' },
  { to: '/services/geotechnical-engineering', Icon: Mountain,      label: 'Geotechnical Engineering' },
  { to: '/services/project-management',       Icon: ClipboardList, label: 'Project Management' },
  { to: '/services/cost-estimation',          Icon: DollarSign,    label: 'Cost Estimation & QS' },
  { to: '/services/inspection-assessment',    Icon: Search,        label: 'Inspection & Assessment' },
  { to: '/services/permits-compliance',       Icon: FileCheck,     label: 'Permits & Compliance' },
  { to: '/services/surveying',                Icon: ScanLine,      label: 'Surveying' },
  { to: '/services/specialty-engineering',    Icon: Wrench,        label: 'Specialty Engineering' },
  { to: '/services/sustainability',           Icon: Leaf,          label: 'Sustainability' },
  { to: '/services/consultation',             Icon: Handshake,     label: 'Consultation' },
];

export default function Header({ onOpenConsultation, onOpenProposal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 30;
          setScrolled(prev => (prev !== isScrolled ? isScrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const isActive    = (path)   => location.pathname === path;
  const isSubActive = (prefix) => location.pathname.startsWith(prefix);

  return (
    <header style={{
      ...styles.header,
      height: scrolled ? '90px' : '105px',
      ...(scrolled ? styles.headerScrolled : styles.headerUnscrolled)
    }}>
      <div style={styles.navBar}>
        <div className="container" style={styles.navContent}>
          {/* Logo */}
          <Link to="/" style={styles.logoLink} className="logo-hover-rotate">
            <img src="/logo-new.png" alt="PRIMECOST Logo" style={{ ...styles.logoImg, height: scrolled ? '86px' : '103px' }} />
          </Link>

          {/* Desktop Navigation Capsule */}
          <div style={styles.navCapsule} className="desktop-nav-capsule">
            <nav style={styles.desktopNav}>
              <Link to="/" style={isActive('/') ? styles.activeNavLink : styles.navLink} className="nav-link-underline">Home</Link>

              {/* ── Services Dropdown ── */}
              <div
                style={styles.dropdownContainer}
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button style={{ ...(isSubActive('/services') ? styles.activeNavLink : styles.navLink), ...styles.dropdownBtn }}>
                  Services <ChevronDown size={13} style={{ transition: 'transform 0.2s', transform: activeDropdown === 'services' ? 'rotate(180deg)' : 'rotate(0)' }} />
                </button>

                {/* Invisible bridge — fills gap between button and panel so cursor doesn't leave hover zone */}
                {activeDropdown === 'services' && (
                  <div style={styles.dropdownBridge} />
                )}

                {activeDropdown === 'services' && (
                  <div
                    style={styles.dropdownMenu}
                    className="animate-fade-in"
                  >
                    <div style={styles.dropdownGrid}>
                      {serviceItems.map(({ to, Icon, label }) => (
                        <Link key={to} to={to} style={styles.dropdownItem} className="dropdown-item">
                          <span style={styles.dropdownIconWrap}>
                            <Icon size={15} strokeWidth={1.8} />
                          </span>
                          <span>{label}</span>
                        </Link>
                      ))}
                    </div>
                    <div style={styles.dropdownFooter}>
                      <Link to="/services" style={styles.viewAllLink} className="dropdown-item">
                        <Star size={14} style={{ color: '#C89A45' }} />
                        <span>View All Services</span>
                        <span style={{ marginLeft: 'auto' }}>→</span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link to="/portfolio" style={isActive('/portfolio') ? styles.activeNavLink : styles.navLink} className="nav-link-underline">Projects</Link>
              <Link to="/founder"   style={isActive('/founder')   ? styles.activeNavLink : styles.navLink} className="nav-link-underline">Founder</Link>
              <Link to="/about"     style={isActive('/about')     ? styles.activeNavLink : styles.navLink} className="nav-link-underline">About</Link>
              <Link to="/career"    style={isActive('/career')    ? styles.activeNavLink : styles.navLink} className="nav-link-underline">Career</Link>
              <Link to="/blog"      style={isActive('/blog')      ? styles.activeNavLink : styles.navLink} className="nav-link-underline">Blog</Link>
              <Link to="/faq"       style={isActive('/faq')       ? styles.activeNavLink : styles.navLink} className="nav-link-underline">FAQ</Link>
            </nav>

            <PrimaryButton
              onClick={onOpenProposal}
              variant="primary"
              style={{ padding: '0.5rem 1.1rem', borderRadius: '30px', fontSize: '0.72rem' }}
            >
              Get a Quote <span style={{ marginLeft: '4px' }}>→</span>
            </PrimaryButton>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            style={styles.mobileToggle}
            className="mobileToggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div style={styles.mobileDrawer} className="animate-fade-in glass-panel-dark">
          <div style={styles.mobileNavLinks}>
            <Link to="/" style={styles.mobileLink}>Home</Link>

            {/* Mobile Services */}
            <div>
              <button style={styles.mobileDropdownBtn} onClick={() => toggleDropdown('services')}>
                Services <ChevronDown size={16} style={{ transform: activeDropdown === 'services' ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }} />
              </button>
              {activeDropdown === 'services' && (
                <div style={styles.mobileSubMenu}>
                  {serviceItems.map(({ to, Icon, label }) => (
                    <Link key={to} to={to} style={styles.mobileSubLink} onClick={() => setIsOpen(false)}>
                      <Icon size={15} strokeWidth={1.8} style={{ color: '#C89A45', flexShrink: 0 }} />
                      {label}
                    </Link>
                  ))}
                  <Link to="/services" style={{ ...styles.mobileSubLink, color: '#C89A45', fontWeight: 700 }} onClick={() => setIsOpen(false)}>
                    <Star size={15} style={{ color: '#C89A45', flexShrink: 0 }} />
                    View All Services →
                  </Link>
                </div>
              )}
            </div>

            <Link to="/portfolio" style={styles.mobileLink}>Projects</Link>
            <Link to="/founder"   style={styles.mobileLink}>Founder</Link>
            <Link to="/about"     style={styles.mobileLink}>About</Link>
            <Link to="/career"    style={styles.mobileLink}>Career</Link>
            <Link to="/blog"      style={styles.mobileLink}>Blog</Link>
            <Link to="/faq"       style={styles.mobileLink} onClick={() => setIsOpen(false)}>FAQ</Link>

            <div style={styles.mobileCtaGroup}>
              <PrimaryButton onClick={() => { setIsOpen(false); onOpenProposal(); }} variant="outline" style={{ width: '100%', borderColor: '#ffffff', color: '#ffffff' }}>
                Request a Proposal
              </PrimaryButton>
              <PrimaryButton onClick={() => { setIsOpen(false); onOpenConsultation(); }} variant="secondary" style={{ width: '100%' }}>
                <Calendar size={16} /> Schedule Consultation
              </PrimaryButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

const styles = {
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 100,
    transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
    display: 'flex',
    alignItems: 'center'
  },
  headerUnscrolled: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  headerScrolled: {
    backgroundColor: 'rgba(255, 255, 255, 0.55)',
    backdropFilter: 'blur(18px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.45)',
    boxShadow: '0 12px 40px rgba(15, 36, 70, 0.12)',
  },
  navBar: { width: '100%' },
  navContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  logoLink: { display: 'flex', alignItems: 'center' },
  logoImg: { transition: 'height 0.3s cubic-bezier(0.22, 1, 0.36, 1)', width: 'auto' },
  navCapsule: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.38)',
    backdropFilter: 'blur(24px) saturate(200%)',
    WebkitBackdropFilter: 'blur(24px) saturate(200%)',
    border: '1px solid rgba(255, 255, 255, 0.55)',
    borderRadius: '9999px',
    padding: '0.25rem 0.25rem 0.25rem 1.5rem',
    gap: '1.5rem',
    boxShadow: '0 15px 35px rgba(15, 36, 70, 0.05), inset 0 0 15px rgba(255, 255, 255, 0.2)',
  },
  desktopNav: { display: 'flex', alignItems: 'center', gap: '0.9rem' },
  navLink: {
    fontSize: '0.82rem',
    fontWeight: '700',
    color: '#050D1F',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    padding: '0.4rem 0',
    cursor: 'pointer',
    border: 'none',
    background: 'none',
    display: 'flex',
    alignItems: 'center',
    position: 'relative'
  },
  activeNavLink: {
    fontSize: '0.82rem',
    fontWeight: '800',
    color: '#050D1F',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    padding: '0.4rem 0',
    cursor: 'pointer',
    border: 'none',
    background: 'none',
    borderBottom: '2px solid #C89A45',
    display: 'flex',
    alignItems: 'center',
  },
  dropdownContainer: { position: 'relative' },
  dropdownBtn: { gap: '0.25rem' },

  // Invisible 12px tall bridge that fills the gap so cursor doesn't leave the hover zone
  dropdownBridge: {
    position: 'absolute',
    top: '100%',
    left: '-30px',
    right: '-30px',
    height: '16px',
    zIndex: 102,
  },

  dropdownMenu: {
    position: 'absolute',
    top: 'calc(100% + 16px)',   // aligns with bottom of bridge
    left: '50%',
    transform: 'translateX(-50%)',
    width: '640px',
    zIndex: 101,
    borderRadius: '16px',
    overflow: 'hidden',
    backgroundColor: 'rgba(255,255,255,0.97)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(15,36,70,0.12)',
    boxShadow: '0 24px 60px rgba(15,36,70,0.18), 0 4px 16px rgba(0,0,0,0.06)',
  },
  dropdownGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '0',
    padding: '0.5rem',
  },
  dropdownItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',
    padding: '0.6rem 0.9rem',
    fontSize: '0.84rem',
    fontWeight: '600',
    color: '#0F2446',         // dark, clearly readable
    borderRadius: '10px',
    transition: 'all 0.15s ease',
    textDecoration: 'none',
  },
  dropdownIconWrap: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '28px',
    height: '28px',
    borderRadius: '7px',
    backgroundColor: 'rgba(200,154,69,0.12)',
    color: '#C89A45',
    flexShrink: 0,
  },
  dropdownFooter: {
    borderTop: '1px solid rgba(15,36,70,0.08)',
    padding: '0.4rem 0.5rem',
    backgroundColor: 'rgba(200,154,69,0.04)',
  },
  viewAllLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.5rem 0.9rem',
    fontSize: '0.84rem',
    fontWeight: '700',
    color: '#C89A45',
    borderRadius: '10px',
    textDecoration: 'none',
  },
  mobileToggle: {
    display: 'none',
    background: 'none',
    border: 'none',
    color: '#0F2446',
    cursor: 'pointer',
  },
  mobileDrawer: {
    position: 'fixed',
    top: '78px',
    left: 0,
    width: '100%',
    height: 'calc(100vh - 78px)',
    zIndex: 99,
    padding: '2rem 1.5rem',
    overflowY: 'auto',
  },
  mobileNavLinks: { display: 'flex', flexDirection: 'column', gap: '1.25rem' },
  mobileLink: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#ffffff',
    paddingBottom: '0.5rem',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  },
  mobileDropdownBtn: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    background: 'none',
    border: 'none',
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#ffffff',
    paddingBottom: '0.5rem',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    cursor: 'pointer',
    textAlign: 'left',
  },
  mobileSubMenu: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.8rem',
    padding: '0.75rem 1rem 0.25rem 1rem',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '8px',
    marginTop: '0.4rem',
  },
  mobileSubLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',
    fontSize: '0.95rem',
    color: 'rgba(255, 255, 255, 0.85)',
    fontWeight: '500',
    textDecoration: 'none',
  },
  mobileCtaGroup: { display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1.5rem' }
};

// Add CSS selectors dynamically for hover effects & active states
if (typeof document !== 'undefined') {
  const hoverStyles = `
    .nav-link-underline::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: #C89A45;
      transition: width var(--duration-fast) var(--ease-out);
    }
    .nav-link-underline:hover::after {
      width: 100%;
    }
    
    .dropdown-item:hover {
      background-color: rgba(200, 154, 69, 0.1) !important;
      color: #C89A45 !important;
    }
    
    .primary-glow-hover:hover {
      box-shadow: 0 12px 24px rgba(15, 36, 70, 0.25), 0 0 12px rgba(200, 154, 69, 0.35) !important;
      transform: translateY(-2px);
    }
    
    @media (max-width: 991px) {
      .desktop-nav-capsule { display: none !important; }
      .mobileToggle { display: block !important; }
    }
    @media (min-width: 992px) {
      .desktop-nav-capsule { display: flex !important; }
      .mobileToggle { display: none !important; }
    }
  `;
  const styleSheet = document.createElement("style");
  styleSheet.innerText = hoverStyles;
  document.head.appendChild(styleSheet);
}
export { styles };
