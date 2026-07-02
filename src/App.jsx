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
import ProposalModal from './components/ProposalModal';
import ConsultationModal from './components/ConsultationModal';

// Scroll Restoration Utility
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
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
    <div style={styles.appWrapper}>
      <ScrollToTop />
      
      {/* Top Loading Progress Bar */}
      {navigating && <div className="page-loading-bar" />}

      {/* Header Sticky Navigation */}
      <Header 
        onOpenConsultation={openConsultation} 
        onOpenProposal={openProposal} 
      />
      
      {/* Main Content Router with swipe animation */}
      <main style={styles.mainContent} key={location.pathname} className="page-transition-swipe">
        <Routes location={location}>
          <Route path="/" element={<Home onOpenConsultation={openConsultation} onOpenProposal={openProposal} />} />
          <Route path="/services/:serviceId" element={<ServicePage />} />
          <Route path="/industries/:industryId" element={<IndustryPage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/service-areas" element={<ServiceAreas />} />
          <Route path="/pricing" element={<Pricing />} />
          
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
    flexDirection: 'column'
  }
};
export { styles };
