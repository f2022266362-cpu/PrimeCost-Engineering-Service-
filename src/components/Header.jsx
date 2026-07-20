import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Calendar } from 'lucide-react';
import PrimaryButton from './ui/PrimaryButton';

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

  const isActive = (path) => location.pathname === path;
  const isSubActive = (prefix) => location.pathname.startsWith(prefix);

  return (
    <header style={{
      ...styles.header,
      height: scrolled ? '90px' : '105px',
      ...(scrolled ? styles.headerScrolled : styles.headerUnscrolled)
    }}>
      <div style={styles.navBar}>
        <div className="container" style={styles.navContent}>
          {/* Logo container with 2° hover rotation */}
          <Link to="/" style={styles.logoLink} className="logo-hover-rotate">
            <img src="/logo-new.png" alt="PRIMECOS Logo" style={{ ...styles.logoImg, height: scrolled ? '86px' : '103px' }} />
          </Link>

          {/* Desktop Navigation Capsule */}
          <div style={styles.navCapsule} className="desktop-nav-capsule">
            <nav style={styles.desktopNav}>
              {/* Home */}
              <Link to="/" style={isActive('/') ? styles.activeNavLink : styles.navLink} className="nav-link-underline">Home</Link>

              {/* Services Dropdown */}
              <div
                style={styles.dropdownContainer}
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button style={{ ...(isSubActive('/services') ? styles.activeNavLink : styles.navLink), ...styles.dropdownBtn }}>
                  Services <ChevronDown size={13} style={{ transition: 'transform 0.2s', transform: activeDropdown === 'services' ? 'rotate(180deg)' : 'rotate(0)' }} />
                </button>
                {activeDropdown === 'services' && (
                  <div style={{ ...styles.dropdownMenu, minWidth: '620px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0' }} className="animate-fade-in glass-panel">
                    <Link to="/services/structural-engineering" style={styles.dropdownItem}>🏗️ Structural Engineering</Link>
                    <Link to="/services/civil-engineering" style={styles.dropdownItem}>🛣️ Civil Engineering</Link>
                    <Link to="/services/architectural-design" style={styles.dropdownItem}>📐 Architectural Design</Link>
                    <Link to="/services/mep-engineering" style={styles.dropdownItem}>⚡ MEP Engineering</Link>
                    <Link to="/services/construction-services" style={styles.dropdownItem}>🔨 Construction Services</Link>
                    <Link to="/services/bim-cad" style={styles.dropdownItem}>💻 BIM & Digital Engineering</Link>
                    <Link to="/services/geotechnical-engineering" style={styles.dropdownItem}>🌍 Geotechnical Engineering</Link>
                    <Link to="/services/project-management" style={styles.dropdownItem}>📋 Project Management</Link>
                    <Link to="/services/cost-estimation" style={styles.dropdownItem}>💰 Cost Estimation & QS</Link>
                    <Link to="/services/inspection-assessment" style={styles.dropdownItem}>🔍 Inspection & Assessment</Link>
                    <Link to="/services/permits-compliance" style={styles.dropdownItem}>📄 Permits & Compliance</Link>
                    <Link to="/services/surveying" style={styles.dropdownItem}>📏 Surveying</Link>
                    <Link to="/services/specialty-engineering" style={styles.dropdownItem}>🌉 Specialty Engineering</Link>
                    <Link to="/services/sustainability" style={styles.dropdownItem}>🌿 Sustainability</Link>
                    <Link to="/services/consultation" style={styles.dropdownItem}>🤝 Consultation</Link>
                    <div style={{ gridColumn: '1 / -1', borderTop: '1px solid rgba(15,36,70,0.08)', padding: '0.5rem 1rem' }}>
                      <Link to="/services" style={{ ...styles.dropdownItem, color: '#C89A45', fontWeight: 700 }}>⭐ View All Services →</Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Projects */}
              <Link to="/portfolio" style={isActive('/portfolio') ? styles.activeNavLink : styles.navLink} className="nav-link-underline">Projects</Link>

              {/* Founder */}
              <Link to="/founder" style={isActive('/founder') ? styles.activeNavLink : styles.navLink} className="nav-link-underline">Founder</Link>

              {/* About */}
              <Link to="/about" style={isActive('/about') ? styles.activeNavLink : styles.navLink} className="nav-link-underline">About</Link>

              {/* Career */}
              <Link to="/career" style={isActive('/career') ? styles.activeNavLink : styles.navLink} className="nav-link-underline">Career</Link>

              {/* Blog */}
              <Link to="/blog" style={isActive('/blog') ? styles.activeNavLink : styles.navLink} className="nav-link-underline">Blog</Link>

              {/* FAQ */}
              <Link to="/faq" style={isActive('/faq') ? styles.activeNavLink : styles.navLink} className="nav-link-underline">FAQ</Link>
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
                  <Link to="/services/structural-engineering" style={styles.mobileSubLink} onClick={() => setIsOpen(false)}>🏗️ Structural Engineering</Link>
                  <Link to="/services/civil-engineering" style={styles.mobileSubLink} onClick={() => setIsOpen(false)}>🛣️ Civil Engineering</Link>
                  <Link to="/services/architectural-design" style={styles.mobileSubLink} onClick={() => setIsOpen(false)}>📐 Architectural Design</Link>
                  <Link to="/services/mep-engineering" style={styles.mobileSubLink} onClick={() => setIsOpen(false)}>⚡ MEP Engineering</Link>
                  <Link to="/services/construction-services" style={styles.mobileSubLink} onClick={() => setIsOpen(false)}>🔨 Construction Services</Link>
                  <Link to="/services/bim-cad" style={styles.mobileSubLink} onClick={() => setIsOpen(false)}>💻 BIM & Digital</Link>
                  <Link to="/services/geotechnical-engineering" style={styles.mobileSubLink} onClick={() => setIsOpen(false)}>🌍 Geotechnical</Link>
                  <Link to="/services/project-management" style={styles.mobileSubLink} onClick={() => setIsOpen(false)}>📋 Project Management</Link>
                  <Link to="/services/cost-estimation" style={styles.mobileSubLink} onClick={() => setIsOpen(false)}>💰 Cost Estimation</Link>
                  <Link to="/services/inspection-assessment" style={styles.mobileSubLink} onClick={() => setIsOpen(false)}>🔍 Inspection</Link>
                  <Link to="/services/permits-compliance" style={styles.mobileSubLink} onClick={() => setIsOpen(false)}>📄 Permits</Link>
                  <Link to="/services/surveying" style={styles.mobileSubLink} onClick={() => setIsOpen(false)}>📏 Surveying</Link>
                  <Link to="/services/specialty-engineering" style={styles.mobileSubLink} onClick={() => setIsOpen(false)}>🌉 Specialty Engineering</Link>
                  <Link to="/services/sustainability" style={styles.mobileSubLink} onClick={() => setIsOpen(false)}>🌿 Sustainability</Link>
                  <Link to="/services/consultation" style={styles.mobileSubLink} onClick={() => setIsOpen(false)}>🤝 Consultation</Link>
                  <Link to="/services" style={{ ...styles.mobileSubLink, color: '#C89A45', fontWeight: 700 }} onClick={() => setIsOpen(false)}>⭐ View All Services →</Link>
                </div>
              )}
            </div>

            {/* Projects */}
            <Link to="/portfolio" style={styles.mobileLink}>Projects</Link>

            {/* Mobile Founder */}
            <Link to="/founder" style={styles.mobileLink}>Founder</Link>

            {/* About */}
            <Link to="/about" style={styles.mobileLink}>About</Link>

            {/* Career */}
            <Link to="/career" style={styles.mobileLink}>Career</Link>

            {/* Blog */}
            <Link to="/blog" style={styles.mobileLink}>Blog</Link>

            {/* FAQ */}
            <Link to="/faq" style={styles.mobileLink} onClick={() => setIsOpen(false)}>FAQ</Link>

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
  navBar: {
    width: '100%',
  },
  navContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  logoLink: {
    display: 'flex',
    alignItems: 'center',
  },
  logoImg: {
    transition: 'height 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
    width: 'auto',
  },
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
  desktopNav: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.9rem',
  },
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
  dropdownContainer: {
    position: 'relative',
  },
  dropdownBtn: {
    gap: '0.25rem',
  },
  dropdownMenu: {
    position: 'absolute',
    top: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    marginTop: '0.75rem',
    width: '220px',
    padding: '0.5rem 0',
    zIndex: 101,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
  },
  dropdownItem: {
    padding: '0.6rem 1.25rem',
    fontSize: '0.85rem',
    fontWeight: '500',
    color: '#0F2446',
    transition: 'all 0.2s ease',
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
  mobileNavLinks: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
  },
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
    fontSize: '0.95rem',
    color: 'rgba(255, 255, 255, 0.7)',
    fontWeight: '500',
  },
  mobileCtaGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    marginTop: '1.5rem',
  }
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
      background-color: rgba(200, 154, 69, 0.1);
      color: #C89A45 !important;
      padding-left: 1.5rem;
    }
    
    .primary-glow-hover:hover {
      box-shadow: 0 12px 24px rgba(15, 36, 70, 0.25), 0 0 12px rgba(200, 154, 69, 0.35) !important;
      transform: translateY(-2px);
    }
    
    @media (max-width: 991px) {
      .desktop-nav-capsule {
        display: none !important;
      }
      .mobileToggle {
        display: block !important;
      }
    }
    @media (min-width: 992px) {
      .desktop-nav-capsule {
        display: flex !important;
      }
      .mobileToggle {
        display: none !important;
      }
    }
  `;
  const styleSheet = document.createElement("style");
  styleSheet.innerText = hoverStyles;
  document.head.appendChild(styleSheet);
}
export { styles };
