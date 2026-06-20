import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Calendar } from 'lucide-react';

export default function Header({ onOpenConsultation, onOpenProposal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const toggleDropdown = (name) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  const isActive = (path) => location.pathname === path;
  const isSubActive = (prefix) => location.pathname.startsWith(prefix);

  return (
    <header style={{
      ...styles.header,
      ...(scrolled ? styles.headerScrolled : {})
    }} className="glass">
      <div style={styles.topBar}>
        <div className="container" style={styles.topBarContent}>
          <div style={styles.topContact}>
            <span style={styles.contactItem}><Phone size={13} /> Main: <a href="tel:+18322346456">(832) 234-6456</a></span>
            <span style={styles.contactDivider}>|</span>
            <span style={styles.contactItem}>Corporate: <a href="tel:+17472237816">(747) 223-7816</a></span>
          </div>
          <div style={styles.topPromo}>
            <span>Guaranteed Scoping Bid Under 24 Hrs</span>
          </div>
        </div>
      </div>

      <div style={styles.navBar}>
        <div className="container" style={styles.navContent}>
          <Link to="/" style={styles.logoLink}>
            <img src="/logo.png" alt="PRIMECOST" style={styles.logoImg} className="logo-animate" />
          </Link>

          {/* Desktop Navigation */}
          <nav style={styles.desktopNav} className="desktopNav">
            <Link to="/" style={isActive('/') ? styles.activeNavLink : styles.navLink}>Home</Link>
            
            {/* Services Dropdown */}
            <div 
              style={styles.dropdownContainer}
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button style={{
                ...(isSubActive('/services') ? styles.activeNavLink : styles.navLink),
                ...styles.dropdownBtn
              }}>
                Services <ChevronDown size={14} />
              </button>
              {activeDropdown === 'services' && (
                <div style={styles.dropdownMenu} className="animate-fade-in">
                  <Link to="/services/architectural-design" style={styles.dropdownItem}>Architectural Design</Link>
                  <Link to="/services/structural-engineering" style={styles.dropdownItem}>Structural Engineering</Link>
                  <Link to="/services/mep-engineering" style={styles.dropdownItem}>MEP Engineering</Link>
                  <Link to="/services/bim-cad" style={styles.dropdownItem}>BIM & CAD Services</Link>
                  <Link to="/services/interior-design" style={styles.dropdownItem}>Interior Design</Link>
                  <Link to="/services/visualization" style={styles.dropdownItem}>3D Visualization</Link>
                  <Link to="/services/quantity-takeoff" style={styles.dropdownItem}>Quantity Takeoff</Link>
                  <Link to="/services/cost-estimation" style={styles.dropdownItem}>Cost Estimation</Link>
                  <Link to="/services/shop-drawings" style={styles.dropdownItem}>Shop Drawings</Link>
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div 
              style={styles.dropdownContainer}
              onMouseEnter={() => setActiveDropdown('industries')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button style={{
                ...(isSubActive('/industries') ? styles.activeNavLink : styles.navLink),
                ...styles.dropdownBtn
              }}>
                Industries <ChevronDown size={14} />
              </button>
              {activeDropdown === 'industries' && (
                <div style={styles.dropdownMenu} className="animate-fade-in">
                  <Link to="/industries/residential" style={styles.dropdownItem}>Residential Projects</Link>
                  <Link to="/industries/multifamily" style={styles.dropdownItem}>Multifamily Projects</Link>
                  <Link to="/industries/commercial" style={styles.dropdownItem}>Commercial Projects</Link>
                  <Link to="/industries/industrial" style={styles.dropdownItem}>Industrial Projects</Link>
                </div>
              )}
            </div>

            <Link to="/portfolio" style={isActive('/portfolio') ? styles.activeNavLink : styles.navLink}>Portfolio</Link>
            <Link to="/blog" style={isSubActive('/blog') ? styles.activeNavLink : styles.navLink}>GEO Content Hub</Link>
            <Link to="/about" style={isActive('/about') ? styles.activeNavLink : styles.navLink}>Contact & HQ</Link>
          </nav>

          <div style={styles.ctaGroup} className="ctaGroup">
            <button 
              onClick={onOpenProposal} 
              style={{ ...styles.proposalBtn }} 
              className="btn btn-outline animate-bounce"
            >
              Request Proposal
            </button>
            <button 
              onClick={onOpenConsultation} 
              style={{ ...styles.consultBtn }}
              className="btn btn-primary pulse-glow animate-pulse"
            >
              <Calendar size={16} />
              Schedule Consultation
            </button>
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
        <div style={styles.mobileDrawer} className="animate-fade-in">
          <div style={styles.mobileNavLinks}>
            <Link to="/" style={styles.mobileLink}>Home</Link>
            
            {/* Mobile Services */}
            <div>
              <button style={styles.mobileDropdownBtn} onClick={() => toggleDropdown('services')}>
                Services <ChevronDown size={16} style={{
                  transform: activeDropdown === 'services' ? 'rotate(180deg)' : 'rotate(0)',
                  transition: 'transform 0.2s'
                }} />
              </button>
              {activeDropdown === 'services' && (
                <div style={styles.mobileSubMenu}>
                  <Link to="/services/architectural-design" style={styles.mobileSubLink}>Architectural Design</Link>
                  <Link to="/services/structural-engineering" style={styles.mobileSubLink}>Structural Engineering</Link>
                  <Link to="/services/mep-engineering" style={styles.mobileSubLink}>MEP Engineering</Link>
                  <Link to="/services/bim-cad" style={styles.mobileSubLink}>BIM & CAD Services</Link>
                  <Link to="/services/interior-design" style={styles.mobileSubLink}>Interior Design</Link>
                  <Link to="/services/visualization" style={styles.mobileSubLink}>3D Visualization</Link>
                </div>
              )}
            </div>

            {/* Mobile Industries */}
            <div>
              <button style={styles.mobileDropdownBtn} onClick={() => toggleDropdown('industries')}>
                Industries We Serve <ChevronDown size={16} style={{
                  transform: activeDropdown === 'industries' ? 'rotate(180deg)' : 'rotate(0)',
                  transition: 'transform 0.2s'
                }} />
              </button>
              {activeDropdown === 'industries' && (
                <div style={styles.mobileSubMenu}>
                  <Link to="/industries/residential" style={styles.mobileSubLink}>Residential Projects</Link>
                  <Link to="/industries/multifamily" style={styles.mobileSubLink}>Multifamily Projects</Link>
                  <Link to="/industries/commercial" style={styles.mobileSubLink}>Commercial Projects</Link>
                  <Link to="/industries/industrial" style={styles.mobileSubLink}>Industrial Projects</Link>
                </div>
              )}
            </div>

            <Link to="/portfolio" style={styles.mobileLink}>Portfolio</Link>
            <Link to="/blog" style={styles.mobileLink}>GEO Content Hub</Link>
            <Link to="/about" style={styles.mobileLink}>Contact & HQ</Link>

            <div style={styles.mobileCtaGroup}>
              <button onClick={() => { setIsOpen(false); onOpenProposal(); }} style={styles.mobileProposalBtn}>
                Request a Proposal
              </button>
              <button onClick={() => { setIsOpen(false); onOpenConsultation(); }} style={styles.mobileConsultBtn}>
                <Calendar size={16} /> Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

const styles = {
  header: {
    position: 'sticky',
    top: 0,
    width: '100%',
    zIndex: 100,
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
  },
  headerScrolled: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.07)',
  },
  topBar: {
    backgroundColor: '#0f172a',
    color: '#cbd5e1',
    padding: '0.4rem 0',
    fontSize: '0.78rem',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
  },
  topBarContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  topContact: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.3rem',
  },
  contactDivider: {
    color: '#475569',
  },
  topPromo: {
    fontWeight: '600',
    color: '#c5a880',
  },
  navBar: {
    padding: '0.75rem 0',
  },
  navContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoLink: {
    display: 'flex',
    alignItems: 'center',
  },
  logoImg: {
    height: '85px',
    width: 'auto',
    borderRadius: '4px',
    animation: 'pulseLogo 3s ease-in-out infinite',
  },
  desktopNav: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.75rem',
  },
  navLink: {
    fontSize: '0.9rem',
    fontWeight: '600',
    color: '#334155',
    padding: '0.5rem 0',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    border: 'none',
    background: 'none',
  },
  activeNavLink: {
    fontSize: '0.9rem',
    fontWeight: '700',
    color: '#1b3b6f',
    padding: '0.5rem 0',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    border: 'none',
    background: 'none',
    borderBottom: '2px solid #c5a880',
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
    left: '0',
    backgroundColor: '#ffffff',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    borderRadius: '8px',
    padding: '0.75rem 0',
    minWidth: '220px',
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #e2e8f0',
    marginTop: '0.5rem',
  },
  dropdownItem: {
    padding: '0.6rem 1.25rem',
    fontSize: '0.85rem',
    fontWeight: '500',
    color: '#475569',
    transition: 'all 0.15s',
  },
  ctaGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  proposalBtn: {
    padding: '0.6rem 1.25rem',
    fontSize: '0.85rem',
  },
  consultBtn: {
    padding: '0.6rem 1.25rem',
    fontSize: '0.85rem',
  },
  mobileToggle: {
    display: 'none',
    background: 'none',
    border: 'none',
    color: '#0f172a',
    cursor: 'pointer',
  },
  mobileDrawer: {
    position: 'fixed',
    top: '80px',
    left: 0,
    width: '100%',
    height: 'calc(100vh - 80px)',
    backgroundColor: '#ffffff',
    zIndex: 99,
    padding: '2rem 1.5rem',
    overflowY: 'auto',
    borderTop: '1px solid #e2e8f0',
  },
  mobileNavLinks: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
  },
  mobileLink: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#0f172a',
    paddingBottom: '0.5rem',
    borderBottom: '1px solid #f1f5f9',
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
    color: '#0f172a',
    paddingBottom: '0.5rem',
    borderBottom: '1px solid #f1f5f9',
    cursor: 'pointer',
    textAlign: 'left',
  },
  mobileSubMenu: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.8rem',
    padding: '0.75rem 1rem 0.25rem 1rem',
    backgroundColor: '#f8fafc',
    borderRadius: '8px',
    marginTop: '0.4rem',
  },
  mobileSubLink: {
    fontSize: '0.95rem',
    color: '#475569',
    fontWeight: '500',
  },
  mobileCtaGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    marginTop: '1.5rem',
  },
  mobileProposalBtn: {
    backgroundColor: 'transparent',
    border: '2px solid #1b3b6f',
    color: '#1b3b6f',
    padding: '0.8rem',
    borderRadius: '8px',
    fontWeight: '600',
    cursor: 'pointer',
    textAlign: 'center',
  },
  mobileConsultBtn: {
    backgroundColor: '#1b3b6f',
    border: 'none',
    color: '#ffffff',
    padding: '0.8rem',
    borderRadius: '8px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
  },
  
  // Hover behaviors handled via inline-conditional activeDropdown checking
};

// Add CSS selectors dynamically for hover effects
if (typeof document !== 'undefined') {
  const hoverStyles = `
    .nav-link:hover { color: #1b3b6f !important; }
    .dropdown-item:hover { background-color: #f1f5f9; color: #1b3b6f !important; }
  `;
  const styleSheet = document.createElement("style");
  styleSheet.innerText = hoverStyles;
  document.head.appendChild(styleSheet);
}
export { styles };
