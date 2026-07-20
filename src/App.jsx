import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';
import IndustryPage from './pages/IndustryPage';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import About from './pages/About';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import ServiceAreas from './pages/ServiceAreas';
import Pricing from './pages/Pricing';
import Career from './pages/Career';
import Founder from './pages/Founder';
import AllServices from './pages/AllServices';
import FAQPage from './pages/FAQPage';
import ProposalModal from './components/ProposalModal';
import ConsultationModal from './components/ConsultationModal';

import PrimaryButton from './components/ui/PrimaryButton';
import { ArrowUp } from 'lucide-react';

// Scroll Restoration Utility
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

// Optimized Scroll Progress Bar Component
function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
          if (totalScroll > 0) {
            setProgress((window.scrollY / totalScroll) * 100);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="scroll-progress-bar" 
      style={{ width: `${progress}%` }} 
    />
  );
}

// Optimized Back To Top Button Component
function BackToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isOverThreshold = window.scrollY > 300;
          setShow(prev => (prev !== isOverThreshold ? isOverThreshold : prev));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button 
      onClick={scrollToTop} 
      className={`back-to-top-btn ${show ? 'show' : ''}`}
      aria-label="Back to Top"
    >
      <ArrowUp size={20} />
    </button>
  );
}

export default function App() {
  const [isProposalOpen, setIsProposalOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const location = useLocation();
  const [navigating, setNavigating] = useState(false);

  useEffect(() => {
    setNavigating(true);
    const timer = setTimeout(() => {
      setNavigating(false);
    }, 550); // match CSS page transition animation length
    return () => clearTimeout(timer);
  }, [location.pathname]);

  const openProposal = () => setIsProposalOpen(true);
  const closeProposal = () => setIsProposalOpen(false);

  const openConsultation = () => setIsConsultationOpen(true);
  const closeConsultation = () => setIsConsultationOpen(false);

  return (
    <div style={styles.appWrapper} className="blueprint-grid">
      <ScrollToTop />
      

      {/* Top Window Viewport Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Accessible Skip links */}
      <a href="#main-content" className="skip-link">Skip to Content</a>
      <a href="#footer-section" className="skip-link">Skip to Footer</a>

      {/* Top Loading Progress Bar for router transitions */}
      {navigating && <div className="page-loading-bar" />}

      {/* Header Sticky Navigation (shrinking on scroll) */}
      <Header 
        onOpenConsultation={openConsultation} 
        onOpenProposal={openProposal} 
      />
      
      {/* Main Content Router with swipe animation */}
      <main 
        id="main-content"
        style={styles.mainContent} 
        key={location.pathname} 
        className="page-transition-swipe"
      >
        <Routes location={location}>
          <Route path="/" element={<Home onOpenConsultation={openConsultation} onOpenProposal={openProposal} />} />
          <Route path="/services" element={<AllServices />} />
          <Route path="/services/:serviceId" element={<ServicePage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/industries/:industryId" element={<IndustryPage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/service-areas" element={<ServiceAreas />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/career" element={<Career />} />
          <Route path="/founder" element={<Founder />} />
          
          {/* Fallback to Home */}
          <Route path="*" element={<Home onOpenConsultation={openConsultation} onOpenProposal={openProposal} />} />
        </Routes>
      </main>

      {/* Footer Details & Badges */}
      <Footer 
        onOpenConsultation={openConsultation} 
        onOpenProposal={openProposal} 
      />

      {/* Pop-up Scoping Proposal Form Modal */}
      <ProposalModal 
        isOpen={isProposalOpen} 
        onClose={closeProposal} 
      />

      {/* Pop-up Calendar Scheduling Modal */}
      <ConsultationModal 
        isOpen={isConsultationOpen} 
        onClose={closeConsultation} 
      />

      {/* Floating Interactive Chatbot Widget */}
      <Chatbot 
        onOpenConsultation={openConsultation} 
        onOpenProposal={openProposal} 
      />

      {/* Back-to-Top Floating Button */}
      <BackToTopButton />

      {/* Sticky mobile CTA bar */}
      <div className="sticky-mobile-cta">
        <PrimaryButton 
          variant="primary" 
          onClick={openProposal}
          style={{ width: '100%', borderRadius: '8px', padding: '0.6rem' }}
        >
          Get a Quote
        </PrimaryButton>
      </div>
    </div>
  );
}

const styles = {
  appWrapper: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    position: 'relative'
  },
  mainContent: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    position: 'relative'
  }
};
export { styles };
