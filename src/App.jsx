import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';
import IndustryPage from './pages/IndustryPage';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import NotFound from './pages/NotFound';
import CityPage from './pages/CityPage';
import About from './pages/About';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import RefundPolicy from './pages/RefundPolicy';
import ServiceAreas from './pages/ServiceAreas';
import Pricing from './pages/Pricing';
import Career from './pages/Career';
import Founder from './pages/Founder';
import AllServices from './pages/AllServices';
import FAQPage from './pages/FAQPage';
import ProposalModal from './components/ProposalModal';
import ConsultationModal from './components/ConsultationModal';
import MotionLayer from './motion/MotionLayer';

import PrimaryButton from './components/ui/PrimaryButton';
import { ArrowUp, ArrowUpRight, Phone } from 'lucide-react';

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
      <MotionLayer />
      

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
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/about" element={<About />} />
          {/* Blog posts link to /contact — the contact form lives on /about */}
          <Route path="/contact" element={<Navigate to="/about" replace />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/service-areas" element={<ServiceAreas />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/career" element={<Career />} />
          <Route path="/founder" element={<Founder />} />
          <Route path="/structural-engineer/:citySlug" element={<CityPage />} />
          
          {/* Real 404 (noindex) instead of duplicating the homepage */}
          <Route path="*" element={<NotFound />} />
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
        <a href="tel:+18322346456" className="sticky-call-btn" aria-label="Call PRIMECOST at (832) 234-6456">
          <Phone size={17} strokeWidth={2} /> Call
        </a>
        <a
          href="https://wa.me/18322346456"
          target="_blank"
          rel="noopener noreferrer"
          className="sticky-wa-btn"
          aria-label="Chat with PRIMECOST on WhatsApp"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91A9.9 9.9 0 0 0 12.04 2Zm5.8 14.06c-.24.68-1.42 1.3-1.95 1.34-.5.05-.97.23-3.27-.68-2.77-1.09-4.52-3.92-4.66-4.1-.13-.18-1.11-1.48-1.11-2.82 0-1.34.7-2 .95-2.27.25-.27.54-.34.72-.34h.52c.17 0 .39-.06.61.47.24.56.8 1.94.87 2.08.07.14.12.3.02.48-.09.18-.14.3-.27.46-.14.16-.29.36-.41.48-.14.14-.28.29-.12.56.16.27.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.21 1.37.27.14.43.11.59-.07.16-.18.68-.79.86-1.06.18-.27.36-.23.61-.14.25.09 1.59.75 1.86.89.27.14.45.2.52.32.07.11.07.66-.17 1.34Z" />
          </svg>
        </a>
        <PrimaryButton 
          variant="secondary" 
          onClick={openProposal}
          style={{ flex: 1 }}
          icon={<ArrowUpRight size={16} strokeWidth={2} />}
        >
          Get a Proposal
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
