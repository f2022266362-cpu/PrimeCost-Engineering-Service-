import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Calendar, FileText } from 'lucide-react';

const WHATSAPP_NUMBER = '18322346456';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20PRIMECOST%2C%20I%20would%20like%20to%20chat%20with%20a%20live%20assistant%20about%20my%20project.`;

const FAQ_DATA = [
  // Architectural & Engineering
  {
    question: "What is architectural design?",
    answer: "Architectural design is the process of creating building layouts, floor plans, elevations, and construction documents for residential and commercial projects. Our architectural design services cover everything from conceptual layouts to full permit-ready construction documentation."
  },
  {
    question: "Do you provide permit-ready drawings?",
    answer: "Yes! We provide permit-ready architectural drawings that comply with local building codes and regulations. Our drawings are accepted by municipal building departments across all 50 US states, including Houston, TX permitting centers."
  },
  {
    question: "What is structural engineering?",
    answer: "Structural engineering ensures that buildings are safe, stable, and capable of supporting loads. Our structural engineering services include PE-stamped calculations, foundation design, framing plans, and steel connection details for all project types."
  },
  {
    question: "What is MEP engineering?",
    answer: "MEP stands for Mechanical, Electrical, and Plumbing engineering. Our MEP engineering services Houston and nationwide include HVAC layouts, electrical single-line diagrams, plumbing isometrics, load calculations, and fire protection design."
  },
  {
    question: "What is BIM modeling?",
    answer: "Building Information Modeling (BIM) is a digital representation of a building's physical and functional characteristics. Our BIM modeling for contractors helps detect clashes before construction begins, reducing costly field modifications and rework."
  },
  {
    question: "What are shop drawings?",
    answer: "Shop drawings are detailed construction drawings used by contractors and fabricators. They bridge the gap between design documents and field execution. We provide structural steel shop drawings, MEP shop drawings, architectural shop drawings, and as-built drawings."
  },
  {
    question: "What is quantity takeoff?",
    answer: "Quantity takeoff measures the quantities of materials required for a construction project. Our quantity takeoff services use industry-standard software like Bluebeam and PlanSwift to deliver highly accurate material counts for all trades."
  },
  {
    question: "What is construction estimating?",
    answer: "Construction estimating calculates total project costs before construction begins. Our construction estimating services cover labor, materials, equipment, and overhead, delivering fast turnaround estimates that help contractors bid competitively and win more projects."
  },
  {
    question: "Do you provide AutoCAD drafting services?",
    answer: "Yes! We provide professional AutoCAD drafting services, 2D CAD drafting, Revit BIM modeling, and digital conversion of PDF blueprints to fully coordinated CAD or BIM models."
  },
  {
    question: "What industries do you serve?",
    answer: "We serve residential (custom homes, additions, ADUs), multifamily (apartments, condos, mixed-use), commercial (offices, restaurants, retail), and industrial (warehouses, manufacturing plants, cold storage) sectors nationwide."
  },
  // Cost Estimation & Takeoff
  {
    question: "Why are accurate estimates important?",
    answer: "Accurate construction cost estimates help avoid budget overruns, improve project planning, and ensure competitive bids. Our estimates are market-based and highly detailed, covering every trade and CSI division."
  },
  {
    question: "Do you provide residential estimating services?",
    answer: "Yes! We provide comprehensive residential estimating services for custom homes, additions, renovations, ADUs, and luxury estates. Our residential estimates are broken down by trade and CSI division for maximum clarity."
  },
  {
    question: "Do you provide commercial estimating services?",
    answer: "Yes! Our commercial estimating services cover office buildings, retail centers, restaurants, mixed-use developments, and tenant improvements. We deliver fast turnaround commercial bid estimates with full material and labor breakdowns."
  },
  {
    question: "What software do you use for takeoffs?",
    answer: "We use industry-standard digital takeoff software including Bluebeam, PlanSwift, and On-Screen Takeoff (OST). These tools ensure color-coded markups and highly accurate quantity calculations down to the last unit."
  },
  {
    question: "What is material takeoff?",
    answer: "Material takeoff identifies and quantifies all materials needed for construction. Our material quantity takeoff services cover concrete, drywall, lumber, steel, rebar, roofing, flooring, electrical, plumbing, and MEP materials."
  },
  {
    question: "Can you estimate renovation projects?",
    answer: "Yes! We estimate full renovation projects including gut rehabs, additions, conversions, and tenant improvements. Our renovation estimates include scope-of-work breakdowns, material costs, and labor rate analysis by trade."
  },
  {
    question: "What is a bid estimate?",
    answer: "A bid estimate is a detailed cost projection that helps contractors submit competitive project bids. Our bid support services include quantity takeoffs, labor pricing, material costs, and professionally formatted bid proposals."
  },
  {
    question: "Do you provide concrete takeoffs?",
    answer: "Yes! We provide precise concrete estimating services including slab on grade, footings, columns, walls, and elevated slabs. Concrete quantities are calculated by cubic yards with waste factor allowances."
  },
  {
    question: "Do you provide drywall takeoffs?",
    answer: "Yes! Our drywall takeoff service covers all interior wall and ceiling assemblies, providing board counts, framing lengths, tape, mud, and finishing materials — all broken out by room and floor."
  },
  {
    question: "Do you provide electrical takeoffs?",
    answer: "Yes! We provide complete electrical estimating services and electrical takeoff quantities covering conduit, wire, panels, devices, fixtures, and gear — organized by division and floor level."
  },
  {
    question: "Do you provide plumbing takeoffs?",
    answer: "Yes! Our plumbing estimating services include pipe runs, fittings, fixtures, water heaters, and rough-in assemblies for both residential and commercial projects."
  },
  {
    question: "Do you provide roofing estimates?",
    answer: "Yes! We provide roofing estimates including material takeoffs for shingles, underlayment, decking, metal roofing, TPO/EPDM flat roofing systems, and gutters — by square footage and linear foot."
  },
  {
    question: "Do you provide steel takeoffs?",
    answer: "Yes! Our structural steel estimates include wide flange beams, columns, connections, HSS tubing, base plates, and anchor bolts — all broken down by weight and piece count."
  },
  {
    question: "Do you provide lumber takeoffs?",
    answer: "Yes! We provide detailed lumber takeoffs for wood framing, wall studs, joists, rafters, and engineered lumber — organized by linear feet and board counts per plan set."
  },
  // BIM, CAD & Drafting
  {
    question: "What is CAD drafting?",
    answer: "CAD drafting creates technical drawings using computer-aided design software like AutoCAD. Our CAD drafting services cover architectural drawings, structural details, MEP schematics, shop drawings, and as-built documentation."
  },
  {
    question: "Do you provide Revit services?",
    answer: "Yes! We provide full Revit BIM modeling services for architectural, structural, and MEP disciplines. Our Revit models support LOD 100 through LOD 500 (facility management level) and come with BIM Execution Plans (BEP)."
  },
  {
    question: "What is clash detection?",
    answer: "Clash detection identifies spatial conflicts between building systems — for example, where an HVAC duct intersects a structural beam. We use Navisworks to run automated clash detection and resolve all conflicts before construction begins."
  },
  {
    question: "What is an as-built drawing?",
    answer: "An as-built drawing reflects the final constructed conditions, showing all field modifications made during construction. We compile coordinated as-built CAD and BIM models for facilities management, permitting record sets, and building owners."
  },
  {
    question: "What is 3D modeling?",
    answer: "3D modeling creates realistic digital representations of projects. We provide 3D BIM models for coordination, 3D rendering for marketing, and 3D animations for stakeholder presentations using Revit, SketchUp, Lumion, and Enscape."
  },
  {
    question: "Can you convert PDF drawings to CAD?",
    answer: "Yes! We specialize in converting PDF blueprints, paper drawings, and raster scans into fully editable AutoCAD DWG files or intelligent Revit BIM models — preserving all drawing dimensions and details."
  },
  {
    question: "What is BIM coordination?",
    answer: "BIM coordination aligns architectural, structural, and MEP systems within a single federated 3D model. Our BIM coordination services use Navisworks to detect and resolve clashes before they become costly field change orders."
  },
  {
    question: "Do you provide BIM consulting?",
    answer: "Yes! We offer BIM consulting and BIM management services including BIM Execution Plan (BEP) development, model auditing, LOD specification, and federated model setup for large commercial and multifamily projects."
  },
  // Residential Construction
  {
    question: "Can you design custom homes?",
    answer: "Yes! We design fully custom luxury homes, including all architectural drawings, structural calculations, MEP schematics, and 3D visualizations needed for permit approval and construction. We serve all 50 US states."
  },
  {
    question: "Do you provide home addition plans?",
    answer: "Yes! We provide detailed home addition drawings, structural calculations for new floor or room additions, foundation extension details, and permit-ready documentation approved by local building departments."
  },
  {
    question: "Can you help with renovation drawings?",
    answer: "Yes! We prepare architectural and structural drawings for full gut renovations, kitchen remodels, bathroom expansions, and whole-home remodels — all permit-ready for local building department submittals."
  },
  {
    question: "What documents are needed for a home permit?",
    answer: "Typically, a residential building permit requires a site plan, floor plan, building elevations, foundation plan, structural details, and mechanical/electrical/plumbing schematics — all of which we compile into a complete permit set."
  },
  {
    question: "Can you create ADU plans?",
    answer: "Yes! We design Accessory Dwelling Unit (ADU) plans, including detached garage conversions, backyard cottages, and basement conversions. Our ADU permit sets comply with California, Texas, and all state ADU codes."
  },
  {
    question: "Can you design luxury homes?",
    answer: "Yes! PRIMECOST specializes in luxury residential design — delivering high-end architectural drawings, custom interior design, 3D photorealistic renderings, structural engineering, and MEP coordination for premium custom homes."
  },
  {
    question: "Can you help with residential code compliance?",
    answer: "Yes! Our architects and engineers review all designs against local building codes, IBC, IRC, and state-specific amendments. We ensure every project meets zoning, fire, structural, and energy code requirements before submittal."
  },
  // Commercial Construction
  {
    question: "Do you design office buildings?",
    answer: "Yes! We provide complete architectural, structural, and MEP drawings for office buildings, tenant improvements, and commercial office parks — including permit-ready documentation for fast municipal approvals."
  },
  {
    question: "Do you provide retail store plans?",
    answer: "Yes! We design retail stores, strip centers, and franchise build-outs with ADA-compliant floor plans, storefront elevations, commercial MEP schematics, and full permit sets for national retailers and developers."
  },
  {
    question: "Can you design restaurants?",
    answer: "Yes! Our restaurant design services include commercial kitchen layouts, hood exhaust schematics, grease trap design, ADA-compliant restroom layouts, structural plans, and health department-ready permit packages."
  },
  {
    question: "Do you create warehouse drawings?",
    answer: "Yes! We design warehouse and industrial facility drawings including structural steel frames, mezzanine systems, dock design, mechanical exhaust systems, fire suppression, and full permit documentation."
  },
  {
    question: "Do you design mixed-use buildings?",
    answer: "Yes! Mixed-use development is one of our core specialties. We handle full coordination of residential, retail, parking, and lobby levels — delivering integrated architectural, structural, and MEP documentation for the full building."
  },
  {
    question: "Do you provide tenant improvement plans?",
    answer: "Yes! Our tenant improvement (TI) services include space planning, architectural drawings, MEP redesign for new tenant layouts, ADA compliance review, and permit-ready documentation for landlords and tenants."
  },
  {
    question: "Do you provide value engineering?",
    answer: "Yes! Our value engineering services identify cost-saving alternatives without compromising structural integrity or design intent. We evaluate materials, framing systems, and mechanical strategies to reduce overall project budgets."
  },
  // SEO-Driven Q&A
  {
    question: "What are construction estimating services?",
    answer: "Construction estimating services are professional analyses that calculate the total cost of a construction project, including materials, labor, equipment, and overhead. PRIMECOST provides fast, accurate construction estimating services for residential, commercial, and industrial projects nationwide."
  },
  {
    question: "How much does construction estimating cost?",
    answer: "Construction estimating fees vary by project complexity and scope. PRIMECOST offers free initial scoping consultations and provides competitive, value-based estimating service fees — often a fraction of what in-house estimating costs contractors and developers."
  },
  {
    question: "What is the best estimating company in the USA?",
    answer: "PRIMECOST (PrimeCost Engineering & Design LLC) is a leading construction estimating company in the USA, based in Houston, TX. We deliver highly accurate estimates, quantity takeoffs, and pre-construction support to contractors and developers across all 50 states."
  },
  {
    question: "What is quantity surveying?",
    answer: "Quantity surveying is the professional measurement and pricing of all materials and work required for a construction project. It is used to prepare tender documents, cost plans, and contract valuations. PRIMECOST's quantity surveying services cover residential, commercial, and industrial scopes."
  },
  {
    question: "What is construction budgeting?",
    answer: "Construction budgeting is the process of allocating financial resources across all phases of a construction project. Our construction budgeting services include preliminary estimates, trade breakdowns, contingency planning, and cost control strategies."
  },
  {
    question: "What is pre-construction planning?",
    answer: "Pre-construction planning involves all activities completed before ground-breaking, including design development, engineering, permitting, cost estimation, and procurement strategy. PRIMECOST specializes in full-service pre-construction planning and documentation."
  },
  {
    question: "What is construction cost management?",
    answer: "Construction cost management is the process of controlling project spending from initial estimate to final accounting. Our cost management services include detailed cost breakdowns, change order analysis, value engineering, and budget tracking support."
  },
  {
    question: "How can BIM reduce project costs?",
    answer: "BIM reduces project costs by detecting clashes before construction, improving coordination between trades, reducing RFIs, and minimizing expensive field change orders. Studies show BIM-coordinated projects save 5-15% on construction costs."
  },
  {
    question: "What is a permit drawing set?",
    answer: "A permit drawing set is a collection of architectural, structural, and MEP drawings submitted to the local building department for construction permit approval. Our permit drawing sets are comprehensive, code-compliant, and engineered for fast municipal approval."
  },
  {
    question: "What is structural design?",
    answer: "Structural design is the engineering process that determines the size, placement, and strength of structural elements — beams, columns, foundations, and connections — to safely support all loads. Our structural design services include full PE-stamped calculations."
  },
  {
    question: "What is foundation engineering?",
    answer: "Foundation engineering designs the below-grade structural system that transfers building loads to the soil. We provide shallow foundation designs (slabs, footings), deep foundation designs (piles, piers), and expansive clay soil solutions for Texas and nationwide projects."
  },
  {
    question: "What is commercial estimating?",
    answer: "Commercial estimating is the detailed cost analysis of commercial construction projects, including office buildings, retail centers, restaurants, warehouses, and multifamily developments. PRIMECOST provides fast turnaround commercial estimating services nationwide."
  },
  {
    question: "What is residential estimating?",
    answer: "Residential estimating is the detailed cost analysis of home construction projects, including custom homes, additions, renovations, and ADUs. Our residential estimating services cover all trades and are broken down by CSI division."
  },
  {
    question: "What is drywall estimating?",
    answer: "Drywall estimating quantifies interior wall and ceiling assemblies — board sheets, framing studs, mud, tape, screws, and trim — for accurate bidding. Our drywall takeoff services are organized room-by-room for maximum precision."
  },
  {
    question: "What is concrete estimating?",
    answer: "Concrete estimating calculates the volume of concrete (in cubic yards) for slabs, footings, walls, and structural elements. Our concrete estimating services account for mix design, waste factor, forming, and rebar quantities."
  },
  {
    question: "What is electrical estimating?",
    answer: "Electrical estimating quantifies conduit, wire, devices, panels, and fixtures for construction bidding. Our electrical estimating services are organized by floor level and NEC code division, helping electricians submit accurate and competitive bids."
  },
  {
    question: "What is plumbing estimating?",
    answer: "Plumbing estimating quantifies pipe, fittings, fixtures, water heaters, and rough-in materials for construction bidding. Our plumbing estimating services cover both residential and commercial systems, organized by building system."
  },
  {
    question: "What is roofing estimating?",
    answer: "Roofing estimating calculates roofing material quantities — shingles, underlayment, decking, ridge caps, and accessories — for accurate bidding. Our roofing estimates cover asphalt shingle, metal, TPO, EPDM, and all flat roofing systems."
  },
  {
    question: "Can you work on projects nationwide?",
    answer: "Yes! PRIMECOST provides engineering, estimating, and architectural design services across all 50 US states. We are headquartered in Houston, TX, and serve clients in California, Florida, New York, Arizona, Georgia, and everywhere in between."
  },
  {
    question: "Do you provide online estimating services?",
    answer: "Yes! We are a fully remote-capable virtual estimating company. All project files can be submitted digitally, and we deliver completed takeoffs and estimates electronically — making our services available to contractors and developers nationwide."
  },
  {
    question: "Do you offer fast turnaround estimates?",
    answer: "Yes! PRIMECOST offers industry-leading fast turnaround estimates — scoping reviews within 24 hours and full quantity takeoffs typically delivered within 2 to 5 business days depending on project complexity."
  },
  {
    question: "Can you support contractors?",
    answer: "Absolutely! We are a trusted partner for general contractors and subcontractors. From bid preparation to shop drawings, quantity takeoffs, and structural calculations, our construction consulting services help contractors win projects and execute flawlessly."
  },
  {
    question: "Can you support architects?",
    answer: "Yes! We partner with architects to provide structural engineering calculations, MEP coordination, BIM modeling, and construction documentation support — acting as a seamless extension of your design team."
  },
  {
    question: "Can you support developers?",
    answer: "Yes! We support real estate developers with full-service pre-construction packages including architectural design, structural engineering, MEP systems, cost estimation, quantity takeoffs, and permit drawing sets from a single coordinated source."
  },
  {
    question: "Do you provide BIM outsourcing services?",
    answer: "Yes! PRIMECOST provides BIM outsourcing services for architectural firms, engineering companies, and construction managers who need additional modeling capacity. Our team is proficient in Revit, Navisworks, AutoCAD, and BIM 360."
  },
  {
    question: "Do you provide drafting outsourcing services?",
    answer: "Yes! We provide complete CAD and BIM drafting outsourcing services, including 2D AutoCAD drafting, Revit modeling, shop drawing preparation, and as-built documentation — with fast turnaround and professional quality."
  },
  {
    question: "Do you provide engineering consulting?",
    answer: "Yes! Our engineering consulting services include structural design review, MEP system analysis, code compliance consulting, value engineering, and pre-construction advisory services for residential, commercial, and industrial projects."
  },
  {
    question: "Why choose PrimeCost?",
    answer: "PRIMECOST is a one-stop pre-construction powerhouse combining architectural design, structural engineering, MEP design, BIM modeling, cost estimating, and quantity takeoff under one roof. We guarantee scoping reviews under 24 hours and deliver permit-ready, PE-stamped documentation."
  },
  {
    question: "How do I request a proposal?",
    answer: "You can request a free scoping proposal by clicking the 'Request Proposal' button in the navigation, filling out our quick online form, or by emailing CEO Frank Moore directly at Frank.moore@primecost.biz. We respond within 24 hours — guaranteed."
  },
  {
    question: "How quickly can I receive a quote?",
    answer: "We guarantee an initial scoping review and quote within 24 hours of receiving your project files. Full detailed estimates are typically delivered within 2 to 5 business days depending on project scope and complexity."
  },
  {
    question: "How do I get started with my project?",
    answer: "Getting started is easy! Click 'Schedule Consultation' to book a free call with our engineering team, or click 'Request Proposal' to submit your project details. You can also reach us directly at (832) 234-6456 or Frank.moore@primecost.biz."
  },
  {
    question: "What services do you offer?",
    answer: "We provide complete pre-construction engineering and architectural design solutions. This includes Architectural Design, Structural Engineering (PE-stamped), MEP Engineering, BIM & CAD Modeling, Quantity Takeoff, Cost Estimation, Shop Drawings, Interior Space Planning, and 3D Visualizations — nationwide."
  },
  {
    question: "How do I schedule a consultation?",
    answer: "Click the 'Schedule Consultation' button in the navigation header or use the button below. All submissions are personally reviewed by CEO Frank Moore. You can also WhatsApp us at +1 (832) 234-6456 for immediate assistance."
  },
  {
    question: "Where is your headquarters located?",
    answer: "Our corporate office is at 440 Louisiana St, Suite 900, Houston, TX 77002, in the heart of Houston's Theater District. We serve clients nationwide and internationally."
  }
];

export default function Chatbot({ onOpenConsultation, onOpenProposal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! Welcome to PRIMECOST. I am your virtual pre-construction assistant. How can I help you with your project today?",
      sender: "bot",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messageEndRef = useRef(null);

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const handleSendMessage = (text) => {
    if (!text.trim()) return;

    const userMsg = {
      id: Date.now(),
      text,
      sender: "user",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages(prev => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      let responseText = "Thank you for reaching out! For detailed engineering inquiries, please submit a proposal request, WhatsApp us at +1 (832) 234-6456, or email CEO Frank Moore at Frank.moore@primecost.biz.";
      
      const query = text.toLowerCase();
      const matchedFaq = FAQ_DATA.find(faq =>
        faq.question.toLowerCase().split(" ").some(word => word.length > 4 && query.includes(word)) ||
        query.includes(faq.question.toLowerCase().substring(0, 20))
      );

      if (matchedFaq) {
        responseText = matchedFaq.answer;
      } else if (query.includes("consult") || query.includes("schedule") || query.includes("book")) {
        responseText = "Would you like to schedule a free consultation with our engineers? Click the button below or WhatsApp us instantly at +1 (832) 234-6456.";
      } else if (query.includes("proposal") || query.includes("quote") || query.includes("cost") || query.includes("price")) {
        responseText = "You can request a free scoping proposal — we respond under 24 hours. Click the proposal button below, or chat with us live on WhatsApp at +1 (832) 234-6456.";
      } else if (query.includes("whatsapp") || query.includes("chat") || query.includes("live") || query.includes("call") || query.includes("phone")) {
        responseText = `You can reach our live team instantly on WhatsApp! Tap the green WhatsApp button on the screen, or click here: wa.me/${WHATSAPP_NUMBER}. Our main phone is (832) 234-6456.`;
      }

      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        text: responseText,
        sender: "bot",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isCta: responseText.includes("button below")
      }]);
    }, 1000);
  };

  const handleFaqClick = (faq) => {
    handleSendMessage(faq.question);
  };

  // Show only first 8 FAQs as quick replies in the chat UI
  const quickFaqs = FAQ_DATA.slice(0, 8);

  return (
    <div style={styles.chatbotContainer}>
      {/* WhatsApp Floating Button */}
      {!isOpen && (
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={styles.whatsappFloatingBtn}
          aria-label="Chat with live assistant on WhatsApp"
          title="Chat with Live Assistant on WhatsApp"
        >
          {/* WhatsApp SVG icon */}
          <svg viewBox="0 0 32 32" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.61 1.832 6.51L4 29l7.698-1.8A12.94 12.94 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3z" fill="#25D366"/>
            <path d="M22.11 19.463c-.296-.148-1.747-.862-2.018-.96-.271-.099-.468-.148-.665.148-.198.296-.763.96-.936 1.157-.172.198-.345.222-.641.074-.296-.148-1.249-.46-2.378-1.469-.879-.785-1.473-1.754-1.645-2.05-.172-.296-.018-.456.129-.603.132-.132.296-.345.444-.517.148-.173.197-.296.296-.494.099-.197.05-.37-.025-.518-.074-.148-.665-1.602-.911-2.194-.24-.576-.484-.498-.665-.507l-.567-.01c-.197 0-.518.074-.789.37-.271.296-1.036 1.013-1.036 2.47 0 1.458 1.061 2.868 1.209 3.066.148.197 2.087 3.188 5.06 4.473.707.305 1.259.487 1.689.623.71.225 1.356.193 1.866.117.569-.085 1.747-.714 1.994-1.403.246-.69.246-1.28.172-1.403-.074-.123-.271-.197-.567-.345z" fill="#fff"/>
          </svg>
          <span style={styles.whatsappBadge}>Chat with Live Assistant</span>
        </a>
      )}

      {/* Chat Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          style={styles.floatingBtn}
          className="pulse-glow"
          aria-label="Open support chat"
        >
          <MessageSquare size={24} />
          <span style={styles.badge}>Live Chat</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div style={styles.chatWindow} className="glass">
          {/* Header */}
          <div style={styles.chatHeader}>
            <div style={styles.avatarContainer}>
              <div style={styles.botAvatar}>PC</div>
              <div>
                <h4 style={styles.botName}>PRIMECOST Assistant</h4>
                <p style={styles.botStatus}>Online • Fast Scoping</p>
              </div>
            </div>
            <div style={styles.headerActions}>
              {/* WhatsApp button in chat header */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.whatsappHeaderBtn}
                title="Chat with Live Assistant on WhatsApp"
                aria-label="Open WhatsApp chat"
              >
                <svg viewBox="0 0 32 32" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.61 1.832 6.51L4 29l7.698-1.8A12.94 12.94 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3z" fill="#25D366"/>
                  <path d="M22.11 19.463c-.296-.148-1.747-.862-2.018-.96-.271-.099-.468-.148-.665.148-.198.296-.763.96-.936 1.157-.172.198-.345.222-.641.074-.296-.148-1.249-.46-2.378-1.469-.879-.785-1.473-1.754-1.645-2.05-.172-.296-.018-.456.129-.603.132-.132.296-.345.444-.517.148-.173.197-.296.296-.494.099-.197.05-.37-.025-.518-.074-.148-.665-1.602-.911-2.194-.24-.576-.484-.498-.665-.507l-.567-.01c-.197 0-.518.074-.789.37-.271.296-1.036 1.013-1.036 2.47 0 1.458 1.061 2.868 1.209 3.066.148.197 2.087 3.188 5.06 4.473.707.305 1.259.487 1.689.623.71.225 1.356.193 1.866.117.569-.085 1.747-.714 1.994-1.403.246-.69.246-1.28.172-1.403-.074-.123-.271-.197-.567-.345z" fill="#fff"/>
                </svg>
                <span style={{ fontSize: '0.72rem', fontWeight: '600' }}>WhatsApp</span>
              </a>
              <button onClick={() => setIsOpen(false)} style={styles.closeBtn}>
                <X size={18} />
              </button>
            </div>
          </div>

          {/* WhatsApp banner inside chat */}
          <div style={styles.whatsappBanner}>
            <svg viewBox="0 0 32 32" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
              <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.61 1.832 6.51L4 29l7.698-1.8A12.94 12.94 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3z" fill="#25D366"/>
              <path d="M22.11 19.463c-.296-.148-1.747-.862-2.018-.96-.271-.099-.468-.148-.665.148-.198.296-.763.96-.936 1.157-.172.198-.345.222-.641.074-.296-.148-1.249-.46-2.378-1.469-.879-.785-1.473-1.754-1.645-2.05-.172-.296-.018-.456.129-.603.132-.132.296-.345.444-.517.148-.173.197-.296.296-.494.099-.197.05-.37-.025-.518-.074-.148-.665-1.602-.911-2.194-.24-.576-.484-.498-.665-.507l-.567-.01c-.197 0-.518.074-.789.37-.271.296-1.036 1.013-1.036 2.47 0 1.458 1.061 2.868 1.209 3.066.148.197 2.087 3.188 5.06 4.473.707.305 1.259.487 1.689.623.71.225 1.356.193 1.866.117.569-.085 1.747-.714 1.994-1.403.246-.69.246-1.28.172-1.403-.074-.123-.271-.197-.567-.345z" fill="#fff"/>
            </svg>
            <span>Prefer live help?</span>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={styles.whatsappBannerLink}>
              Chat with a Live Assistant on WhatsApp →
            </a>
          </div>

          {/* Messages Area */}
          <div style={styles.messagesContainer}>
            {messages.map((msg) => (
              <div
                key={msg.id}
                style={{
                  ...styles.messageRow,
                  justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start'
                }}
              >
                <div
                  style={{
                    ...styles.messageBubble,
                    backgroundColor: msg.sender === 'user' ? '#1b3b6f' : '#ffffff',
                    color: msg.sender === 'user' ? '#ffffff' : '#334155',
                    border: msg.sender === 'bot' ? '1px solid #e2e8f0' : 'none',
                    borderRadius: msg.sender === 'user' ? '12px 12px 2px 12px' : '12px 12px 12px 2px'
                  }}
                >
                  <p style={styles.messageText}>{msg.text}</p>

                  {msg.isCta && (
                    <div style={styles.inlineCtaGroup}>
                      <button
                        onClick={() => { setIsOpen(false); onOpenConsultation(); }}
                        style={styles.inlineCtaBtnPrimary}
                      >
                        <Calendar size={12} /> Schedule Now
                      </button>
                      <button
                        onClick={() => { setIsOpen(false); onOpenProposal(); }}
                        style={styles.inlineCtaBtnSecondary}
                      >
                        <FileText size={12} /> Request Proposal
                      </button>
                      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={styles.inlineCtaBtnWhatsApp}>
                        <svg viewBox="0 0 32 32" width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.61 1.832 6.51L4 29l7.698-1.8A12.94 12.94 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3z" fill="#25D366"/>
                          <path d="M22.11 19.463c-.296-.148-1.747-.862-2.018-.96-.271-.099-.468-.148-.665.148-.198.296-.763.96-.936 1.157-.172.198-.345.222-.641.074-.296-.148-1.249-.46-2.378-1.469-.879-.785-1.473-1.754-1.645-2.05-.172-.296-.018-.456.129-.603.132-.132.296-.345.444-.517.148-.173.197-.296.296-.494.099-.197.05-.37-.025-.518-.074-.148-.665-1.602-.911-2.194-.24-.576-.484-.498-.665-.507l-.567-.01c-.197 0-.518.074-.789.37-.271.296-1.036 1.013-1.036 2.47 0 1.458 1.061 2.868 1.209 3.066.148.197 2.087 3.188 5.06 4.473.707.305 1.259.487 1.689.623.71.225 1.356.193 1.866.117.569-.085 1.747-.714 1.994-1.403.246-.69.246-1.28.172-1.403-.074-.123-.271-.197-.567-.345z" fill="#fff"/>
                        </svg>
                        WhatsApp Us
                      </a>
                    </div>
                  )}

                  <span style={{
                    ...styles.messageTime,
                    color: msg.sender === 'user' ? 'rgba(255,255,255,0.7)' : '#94a3b8'
                  }}>{msg.time}</span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div style={styles.messageRow}>
                <div style={{ ...styles.messageBubble, backgroundColor: '#ffffff', border: '1px solid #e2e8f0' }}>
                  <div style={styles.typingIndicator}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messageEndRef} />
          </div>

          {/* FAQ Quick Replies */}
          <div style={styles.faqSlider}>
            <p style={styles.faqLabel}>Frequently Asked:</p>
            <div style={styles.faqItemsWrapper}>
              {quickFaqs.map((faq, idx) => (
                <button
                  key={idx}
                  onClick={() => handleFaqClick(faq)}
                  style={styles.faqBadge}
                  className="faqBadge"
                >
                  {faq.question}
                </button>
              ))}
            </div>
          </div>

          {/* Input Panel */}
          <form
            onSubmit={(e) => { e.preventDefault(); handleSendMessage(inputValue); }}
            style={styles.inputPanel}
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask a question or type details..."
              style={styles.chatInput}
            />
            <button type="submit" style={styles.sendBtn} disabled={!inputValue.trim()}>
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

const styles = {
  chatbotContainer: {
    position: 'fixed',
    bottom: '24px',
    right: '24px',
    zIndex: 9999,
    fontFamily: "'Inter', sans-serif",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '12px',
  },
  whatsappFloatingBtn: {
    backgroundColor: '#25D366',
    color: '#ffffff',
    border: 'none',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 8px 30px rgba(37, 211, 102, 0.45)',
    transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    position: 'relative',
    textDecoration: 'none',
  },
  whatsappBadge: {
    position: 'absolute',
    top: '-4px',
    right: '-4px',
    backgroundColor: '#0f172a',
    color: '#ffffff',
    fontSize: '0.6rem',
    fontWeight: '700',
    padding: '2px 5px',
    borderRadius: '10px',
    border: '2px solid #ffffff',
    whiteSpace: 'nowrap',
    maxWidth: '100px',
  },
  floatingBtn: {
    backgroundColor: '#1b3b6f',
    color: '#ffffff',
    border: 'none',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 8px 30px rgba(27, 59, 111, 0.4)',
    transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: '-4px',
    right: '-4px',
    backgroundColor: '#c5a880',
    color: '#0f172a',
    fontSize: '0.65rem',
    fontWeight: '700',
    padding: '2px 6px',
    borderRadius: '10px',
    border: '2px solid #ffffff',
  },
  chatWindow: {
    width: '380px',
    height: '560px',
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 12px 40px rgba(15, 23, 42, 0.15)',
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.97)',
    border: '1px solid rgba(255, 255, 255, 0.5)',
    animation: 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
  },
  chatHeader: {
    backgroundColor: '#0f172a',
    color: '#ffffff',
    padding: '1rem 1.25rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
  },
  avatarContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  botAvatar: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    backgroundColor: '#1b3b6f',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '700',
    fontSize: '0.85rem',
    border: '2px solid #c5a880',
  },
  botName: {
    fontSize: '0.92rem',
    fontWeight: '700',
    color: '#ffffff',
    margin: 0,
    fontFamily: "'Outfit', sans-serif",
  },
  botStatus: {
    fontSize: '0.72rem',
    color: '#10b981',
    margin: 0,
    fontWeight: '500',
  },
  headerActions: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  whatsappHeaderBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    backgroundColor: '#25D366',
    color: '#ffffff',
    border: 'none',
    borderRadius: '20px',
    padding: '0.3rem 0.65rem',
    cursor: 'pointer',
    textDecoration: 'none',
    fontSize: '0.72rem',
    fontWeight: '700',
    transition: 'opacity 0.2s',
  },
  closeBtn: {
    background: 'none',
    border: 'none',
    color: '#94a3b8',
    cursor: 'pointer',
    padding: '4px',
    borderRadius: '50%',
    transition: 'background-color 0.2s',
  },
  whatsappBanner: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    backgroundColor: '#f0fdf4',
    borderBottom: '1px solid #bbf7d0',
    padding: '0.5rem 1rem',
    fontSize: '0.78rem',
    color: '#166534',
  },
  whatsappBannerLink: {
    color: '#15803d',
    fontWeight: '700',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
  },
  messagesContainer: {
    flex: 1,
    overflowY: 'auto',
    padding: '1.25rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    backgroundColor: '#f8fafc',
  },
  messageRow: {
    display: 'flex',
    gap: '0.5rem',
    alignItems: 'flex-end',
    maxWidth: '85%',
  },
  messageBubble: {
    padding: '0.75rem 1rem',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.02)',
    position: 'relative',
  },
  messageText: {
    fontSize: '0.88rem',
    lineHeight: '1.45',
    margin: 0,
  },
  messageTime: {
    display: 'block',
    fontSize: '0.65rem',
    marginTop: '4px',
    textAlign: 'right',
  },
  inlineCtaGroup: {
    display: 'flex',
    gap: '0.4rem',
    marginTop: '0.75rem',
    flexWrap: 'wrap',
  },
  inlineCtaBtnPrimary: {
    backgroundColor: '#1b3b6f',
    color: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    padding: '0.4rem 0.6rem',
    fontSize: '0.72rem',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },
  inlineCtaBtnSecondary: {
    backgroundColor: 'transparent',
    border: '1px solid #1b3b6f',
    color: '#1b3b6f',
    borderRadius: '4px',
    padding: '0.4rem 0.6rem',
    fontSize: '0.72rem',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },
  inlineCtaBtnWhatsApp: {
    backgroundColor: '#25D366',
    color: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    padding: '0.4rem 0.6rem',
    fontSize: '0.72rem',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    textDecoration: 'none',
  },
  faqSlider: {
    padding: '0.5rem 1rem 0.75rem 1rem',
    backgroundColor: '#ffffff',
    borderTop: '1px solid #e2e8f0',
    borderBottom: '1px solid #e2e8f0',
  },
  faqLabel: {
    fontSize: '0.72rem',
    fontWeight: '700',
    color: '#64748b',
    textTransform: 'uppercase',
    marginBottom: '0.4rem',
    letterSpacing: '0.5px',
  },
  faqItemsWrapper: {
    display: 'flex',
    gap: '0.4rem',
    overflowX: 'auto',
    paddingBottom: '4px',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
  },
  faqBadge: {
    backgroundColor: '#f1f5f9',
    color: '#475569',
    border: '1px solid #cbd5e1',
    borderRadius: '12px',
    padding: '0.35rem 0.75rem',
    fontSize: '0.78rem',
    fontWeight: '500',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    transition: 'all 0.2s',
    outline: 'none',
  },
  inputPanel: {
    padding: '0.75rem 1rem',
    backgroundColor: '#ffffff',
    display: 'flex',
    gap: '0.5rem',
    alignItems: 'center',
  },
  chatInput: {
    flex: 1,
    border: '1px solid #cbd5e1',
    borderRadius: '24px',
    padding: '0.6rem 1.2rem',
    fontSize: '0.88rem',
    outline: 'none',
    backgroundColor: '#f8fafc',
  },
  sendBtn: {
    backgroundColor: '#1b3b6f',
    color: '#ffffff',
    border: 'none',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.2s',
  },
  typingIndicator: {
    display: 'flex',
    gap: '4px',
    padding: '4px 8px',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

// Inject chatbot animation styles dynamically
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = `
    @keyframes slideUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .faqItemsWrapper::-webkit-scrollbar {
      display: none;
    }
    .faqBadge:hover {
      background-color: #e2e8f0 !important;
      color: #1b3b6f !important;
    }
    .whatsappFloatingBtn:hover {
      transform: scale(1.08);
      box-shadow: 0 12px 35px rgba(37, 211, 102, 0.55) !important;
    }
    .whatsappHeaderBtn:hover {
      opacity: 0.85;
    }
  `;
  document.head.appendChild(styleSheet);
}
