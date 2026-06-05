import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Calendar, FileText, ChevronUp } from 'lucide-react';

const FAQ_DATA = [
  {
    question: "What services do you offer?",
    answer: "We provide complete pre-construction engineering and architectural design solutions. This includes Architectural Design, Structural Engineering (PE-stamped in TX), MEP Engineering (HVAC, Electrical, Plumbing), BIM & CAD Modeling (Revit coordination), Interior Space Planning, and 3D Visualizations."
  },
  {
    question: "How do I schedule a consultation?",
    answer: "You can click the 'Schedule Consultation' button in the navigation header or footer to choose a date/time. All submissions go directly to our CEO, Frank Moore, at Frank.moore@primecost.biz for personal scoping reviews."
  },
  {
    question: "How much does a scoping bid cost?",
    answer: "We provide scoping bids and initial consultations 100% free of charge. We guarantee a scoping bid response within 24 hours of receiving your files."
  },
  {
    question: "Who is your CEO Frank Moore?",
    answer: "Frank Moore (35) is our Chief Executive Officer. Born in Dallas, he worked double shifts as a junior draftsman and overcame significant struggles to build PRIMECOST into the premier design-engineering agency it is today."
  },
  {
    question: "Where is your headquarters located?",
    answer: "Our corporate office is at 440 Louisiana St, Suite 900, Houston, TX 77002, in the heart of Houston's Theater District."
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

    // Add user message
    const userMsg = {
      id: Date.now(),
      text,
      sender: "user",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages(prev => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      setIsTyping(false);
      let responseText = "Thank you for reaching out! I've noted your query. For detailed engineering inquiries, please submit a proposal request or email CEO Frank Moore directly at Frank.moore@primecost.biz.";
      
      // Match question
      const query = text.toLowerCase();
      const matchedFaq = FAQ_DATA.find(faq => 
        query.includes(faq.question.toLowerCase()) || 
        faq.question.toLowerCase().split(" ").some(word => word.length > 4 && query.includes(word))
      );

      if (matchedFaq) {
        responseText = matchedFaq.answer;
      } else if (query.includes("consult") || query.includes("schedule") || query.includes("book")) {
        responseText = "Would you like to schedule a consultation with our engineers? You can click the button below to open the calendar scheduler.";
      } else if (query.includes("proposal") || query.includes("quote") || query.includes("cost") || query.includes("price")) {
        responseText = "You can request a free scoping proposal under 24 hours. Click the proposal button below to fill out the scoping requirements.";
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

  return (
    <div style={styles.chatbotContainer}>
      {/* Floating Toggle Button */}
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
            <button onClick={() => setIsOpen(false)} style={styles.closeBtn}>
              <X size={18} />
            </button>
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
                {msg.sender === 'bot' && <div style={styles.messageAvatar}>Bot</div>}
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
                <div style={styles.messageAvatar}>Bot</div>
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
              {FAQ_DATA.map((faq, idx) => (
                <button 
                  key={idx} 
                  onClick={() => handleFaqClick(faq)}
                  style={styles.faqBadge}
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
    height: '520px',
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 12px 40px rgba(15, 23, 42, 0.15)',
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
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
  closeBtn: {
    background: 'none',
    border: 'none',
    color: '#94a3b8',
    cursor: 'pointer',
    padding: '4px',
    borderRadius: '50%',
    transition: 'background-color 0.2s',
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
  messageAvatar: {
    display: 'none', // hidden to keep UI clean, can show initials
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
    gap: '0.5rem',
    marginTop: '0.75rem',
    flexWrap: 'wrap',
  },
  inlineCtaBtnPrimary: {
    backgroundColor: '#1b3b6f',
    color: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    padding: '0.4rem 0.6rem',
    fontSize: '0.75rem',
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
    fontSize: '0.75rem',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
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
    scrollbarWidth: 'none', // Firefox
    msOverflowStyle: 'none',  // IE/Edge
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
    '&:hover': {
      backgroundColor: '#cbd5e1',
    }
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
  '@keyframes slideUp': {
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' }
  }
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
  `;
  document.head.appendChild(styleSheet);
}
