import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, Clock, ShieldCheck, 
  Send, HelpCircle, Landmark, Globe, Award 
} from 'lucide-react';
import SchemaManager from '../components/SchemaManager';
import ScrollReveal from '../components/ScrollReveal';

export default function About() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Scoping Inquiry',
    message: ''
  });
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      setFormData({ name: '', email: '', phone: '', subject: 'General Scoping Inquiry', message: '' });
    }, 1200);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div style={styles.containerPage}>
      <SchemaManager 
        title="Contact & Corporate Headquarters" 
        description="Connect with CEO Frank Moore and President Hal Jordan at the Houston HQ. View hours, payment methods, and contact numbers."
      />

      {/* Header Banner */}
      <section style={styles.banner}>
        <div style={styles.bannerOverlay} />
        <div className="container" style={styles.bannerContent}>
          <span style={styles.bannerTag}>CORPORATE HEADQUARTERS</span>
          <h1 style={styles.bannerTitle}>Contact PRIMECOST</h1>
          <p style={styles.bannerDesc}>
            Connect with our pre-construction leadership, schedule site visits, and coordinate PE stamps.
          </p>
        </div>
      </section>

      {/* CEO Story Section */}
      <section style={styles.ceoStorySection}>
        <div className="container" style={styles.ceoStoryContainer}>
          <div style={styles.ceoStoryImageWrapper}>
            <ScrollReveal>
              <img src="/ceo-frank.jpg" alt="Frank Moore - CEO of PRIMECOS" style={styles.ceoImage} />
              <div style={styles.ceoBadge}>
                <strong style={{ fontWeight: '700', fontSize: '1.1rem' }}>Frank Moore</strong>
                <span style={{ fontSize: '0.8rem', color: '#c5a880', fontWeight: '600' }}>CEO & Founder (Age 35)</span>
              </div>
            </ScrollReveal>
          </div>
          <div style={styles.ceoStoryContent}>
            <ScrollReveal style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <span style={styles.ceoTag}>FOUNDER STORY</span>
              <h2 style={styles.ceoTitle}>From Dallas Draftsman to Pre-Construction Pioneer</h2>
              <p style={styles.ceoText}>
                Born in Dallas, Texas, Frank Moore (35) didn't have a traditional path to corporate leadership. Raised in a working-class neighborhood, his childhood was defined by a curiosity about how structures are built. However, breaking into the professional drafting world was a steep uphill climb.
              </p>
              <p style={styles.ceoText}>
                Frank began his journey by working exhausting double shifts as an apprentice junior draftsman. He labored over manual drafting boards during the day and attended night classes to earn his architectural engineering credentials. Sleeping on the drafting desks, skipping meals, and facing constant gatekeeping only fueled his determination.
              </p>
              <p style={styles.ceoText}>
                Through years of struggle and financial hardship, Frank noticed that developers and contractors were consistently bogged down by slow response times and disconnected designs from separate architectural and engineering firms. This inspired him to create <strong>PRIMECOST</strong> (PrimeCost Engineering & Design LLC)—a one-stop pre-construction powerhouse that integrates architectural styling, structural integrity, and MEP efficiency under a single roof.
              </p>
              <p style={styles.ceoText}>
                "I founded PRIMECOST to eliminate the struggle of pre-construction bottlenecks," says Frank. "We build your project virtually first so that your field crews can execute flawlessly." Today, Frank's Dallas-born grit has built a firm that guarantees scoping reviews under 24 hours.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Coverage & Offices Section */}
      <section style={{ ...styles.ceoStorySection, backgroundColor: '#f1f5f9' }}>
        <div className="container">
          <ScrollReveal>
            <div style={styles.sectionHeader}>
              <span style={styles.ceoTag}>GLOBAL FOOTPRINT</span>
              <h2 style={styles.ceoTitle}>Nationwide PE Stamps & European Service Coverage</h2>
              <p style={styles.ceoText}>
                PRIMECOST operates across **all 50 US States**, providing Professional Engineer (PE) stamped drawings, structural calculations, and permit sets tailored to local building codes. In addition, we deliver architectural drawings, MEP coordination, 3D visualizations, and BIM models to developers and builders **throughout Europe** (including the UK, Germany, France, Italy, and the Netherlands), matching Eurocodes and international standards.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h3 style={{ ...styles.sidebarTitle, marginTop: '2.5rem', marginBottom: '1.5rem' }}>Our 7 State Sub-Offices</h3>
            <div style={styles.officesGrid}>
              <div style={styles.officeCard} className="glass">
                <h4 style={styles.officeState}>Texas (Houston HQ)</h4>
                <p style={styles.officeAddress}>440 Louisiana St, Suite 900</p>
                <p style={styles.officeCity}>Houston, TX 77002</p>
              </div>
              <div style={styles.officeCard} className="glass">
                <h4 style={styles.officeState}>California</h4>
                <p style={styles.officeAddress}>100 Pine St, Suite 1250</p>
                <p style={styles.officeCity}>San Francisco, CA 94111</p>
              </div>
              <div style={styles.officeCard} className="glass">
                <h4 style={styles.officeState}>New York</h4>
                <p style={styles.officeAddress}>120 Broadway, 28th Floor</p>
                <p style={styles.officeCity}>New York, NY 10271</p>
              </div>
              <div style={styles.officeCard} className="glass">
                <h4 style={styles.officeState}>Florida</h4>
                <p style={styles.officeAddress}>801 Brickell Ave, Suite 900</p>
                <p style={styles.officeCity}>Miami, FL 33131</p>
              </div>
              <div style={styles.officeCard} className="glass">
                <h4 style={styles.officeState}>Illinois</h4>
                <p style={styles.officeAddress}>233 S Wacker Dr (Willis Tower)</p>
                <p style={styles.officeCity}>Chicago, IL 60606</p>
              </div>
              <div style={styles.officeCard} className="glass">
                <h4 style={styles.officeState}>Georgia</h4>
                <p style={styles.officeAddress}>1170 Peachtree St NE, Suite 1200</p>
                <p style={styles.officeCity}>Atlanta, GA 30309</p>
              </div>
              <div style={styles.officeCard} className="glass">
                <h4 style={styles.officeState}>Washington</h4>
                <p style={styles.officeAddress}>701 5th Ave, Suite 4200</p>
                <p style={styles.officeCity}>Seattle, WA 98104</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="container" style={styles.layoutGrid}>
        
        {/* Left Side: Contact Form and Map */}
        <div style={styles.formCol}>
          {/* Inquiry Form */}
          <div style={styles.sectionCard} className="glass">
            <h2 style={styles.sectionTitle}>Transmit a Message to Our Engineers</h2>
            
            {isSent ? (
              <div style={styles.successBox}>
                <ShieldCheck size={48} style={styles.successIcon} />
                <h3 style={styles.successTitle}>Inquiry Logged Successfully</h3>
                <p style={styles.successText}>
                  Your message has been routed to Frank Moore and Hal Jordan's direct intake inbox. Expect a response under 2 hours.
                </p>
                <button onClick={() => setIsSent(false)} style={styles.btnReset}>Send Another Message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.formRow}>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Your Name *</label>
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      value={formData.name} 
                      onChange={handleChange} 
                      placeholder="e.g. Tony Stark"
                      style={styles.input}
                    />
                  </div>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Email Address *</label>
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      value={formData.email} 
                      onChange={handleChange} 
                      placeholder="e.g. tony@stark.com"
                      style={styles.input}
                    />
                  </div>
                </div>

                <div style={styles.formRow}>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange} 
                      placeholder="e.g. (832) 234-6456"
                      style={styles.input}
                    />
                  </div>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Subject</label>
                    <select 
                      name="subject" 
                      value={formData.subject} 
                      onChange={handleChange} 
                      style={styles.input}
                    >
                      <option value="General Scoping Inquiry">General Scoping Inquiry</option>
                      <option value="Zoning & Building Permit Scopes">Zoning & Building Permit Scopes</option>
                      <option value="Structural Load Calculations">Structural Load Calculations</option>
                      <option value="BIM Coordinator Contract">BIM Coordinator Contract</option>
                    </select>
                  </div>
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>Message Details *</label>
                  <textarea 
                    name="message" 
                    required 
                    value={formData.message} 
                    onChange={handleChange} 
                    placeholder="Provide details about your project address, structural loads, or design questions..."
                    style={{ ...styles.input, ...styles.textarea }}
                  />
                </div>

                <button type="submit" disabled={isSending} style={styles.submitBtn}>
                  {isSending ? 'Transmitting...' : 'Send Message'}
                  {!isSending && <Send size={16} />}
                </button>
              </form>
            )}
          </div>

          {/* Interactive Map skeleton */}
          <div style={styles.sectionCard} className="glass">
            <h2 style={styles.sectionTitle}>Office Location</h2>
            <p style={{ ...styles.paragraph, marginBottom: '1.5rem' }}>
              Located in the heart of Houston's Theater District, at the iconic Bank of America Tower.
            </p>
            <div style={styles.mapSkeleton}>
              <MapPin size={32} style={styles.mapPinIcon} />
              <div style={styles.mapText}>
                <strong>PRIMECOST Office</strong><br />
                <span>440 Louisiana St, Suite 900</span><br />
                <span>Houston, TX 77002</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Contact info & Hours */}
        <div style={styles.infoCol}>
          {/* Executive Leadership */}
          <div style={styles.sidebarCard} className="glass">
            <h3 style={styles.sidebarTitle}>Executive Officers</h3>
            <div style={styles.leaderList}>
              <div style={styles.leaderItem}>
                <img src="/ceo-frank.jpg" alt="Frank Moore" style={styles.avatarImg} />
                <div>
                  <h4 style={styles.leaderName}>Frank Moore</h4>
                  <p style={styles.leaderRole}>Chief Executive Officer</p>
                  <a href="mailto:Frank.moore@primecost.biz" style={styles.leaderEmail}>Frank.moore@primecost.biz</a>
                </div>
              </div>
              
              <div style={styles.leaderItem}>
                <div style={styles.avatarSkeleton}>HJ</div>
                <div>
                  <h4 style={styles.leaderName}>Hal Jordan</h4>
                  <p style={styles.leaderRole}>President & Director of Engineering</p>
                  <a href="mailto:Frank.moore@primecost.biz" style={styles.leaderEmail}>Intake: Hal Jordan</a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div style={styles.sidebarCard} className="glass">
            <h3 style={styles.sidebarTitle}>Communication Channels</h3>
            <div style={styles.commGrid}>
              <div style={styles.commItem}>
                <Phone size={16} style={styles.iconGold} />
                <div>
                  <p style={styles.commLabel}>Main Office Line</p>
                  <a href="tel:+18322346456" style={styles.commVal}>(832) 234-6456</a>
                </div>
              </div>

              <div style={styles.commItem}>
                <Phone size={16} style={styles.iconGold} />
                <div>
                  <p style={styles.commLabel}>Corporate Accounts</p>
                  <a href="tel:+17472237816" style={styles.commVal}>(747) 223-7816</a>
                </div>
              </div>

              <div style={styles.commItem}>
                <Mail size={16} style={styles.iconGold} />
                <div>
                  <p style={styles.commLabel}>Business Inquiries</p>
                  <a href="mailto:Frank.moore@primecost.biz" style={styles.commVal}>Frank.moore@primecost.biz</a>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div style={styles.sidebarCard} className="glass">
            <h3 style={styles.sidebarTitle}>Business Operations Hours</h3>
            <ul style={styles.hoursList}>
              <li style={styles.hoursItem}>
                <span>Monday - Friday</span>
                <strong>9:00 AM - 6:00 PM</strong>
              </li>
              <li style={styles.hoursItem}>
                <span>Saturday</span>
                <strong>10:00 AM - 4:00 PM</strong>
              </li>
              <li style={{ ...styles.hoursItem, color: '#ef4444' }}>
                <span>Sunday</span>
                <strong>CLOSED</strong>
              </li>
            </ul>
          </div>

          {/* Payment Methods */}
          <div style={styles.sidebarCard} className="glass">
            <h3 style={styles.sidebarTitle}>Payment & Terms</h3>
            <p style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '1.25rem', lineHeight: '1.5' }}>
              We facilitate bank-certified escrows and offer fast pre-construction billing options.
            </p>
            <div style={styles.payGrid}>
              <div style={styles.payBadge}>Credit/Debit</div>
              <div style={styles.payBadge}>PayPal</div>
              <div style={styles.payBadge}>Bank Transfer</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

const styles = {
  containerPage: {
    backgroundColor: '#f8fafc',
    paddingBottom: '5rem',
  },
  banner: {
    position: 'relative',
    background: 'url("https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop") no-repeat center/cover',
    padding: '5rem 0',
    color: '#ffffff',
    marginBottom: '3rem',
  },
  bannerOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(15, 23, 42, 0.8)',
  },
  bannerContent: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '850px',
  },
  bannerTag: {
    fontSize: '0.78rem',
    fontWeight: '700',
    color: '#c5a880',
    letterSpacing: '1.5px',
    display: 'block',
    marginBottom: '0.5rem',
  },
  bannerTitle: {
    fontSize: '2.5rem',
    color: '#ffffff',
    marginBottom: '0.75rem',
    fontFamily: "'Outfit', sans-serif",
  },
  bannerDesc: {
    fontSize: '1rem',
    color: '#e2e8f0',
    lineHeight: '1.5',
  },
  layoutGrid: {
    display: 'flex',
    gap: '2.5rem',
  },
  formCol: {
    flex: '3',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  infoCol: {
    flex: '2',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    minWidth: '320px',
  },
  sectionCard: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    padding: '2.5rem',
    border: '1px solid #e2e8f0',
  },
  sectionTitle: {
    fontSize: '1.4rem',
    color: '#0f172a',
    marginBottom: '1.5rem',
    fontFamily: "'Outfit', sans-serif",
    borderBottom: '2px solid #f1f5f9',
    paddingBottom: '0.75rem',
  },
  paragraph: {
    fontSize: '0.92rem',
    lineHeight: '1.6',
    color: '#475569',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.2rem',
  },
  formRow: {
    display: 'flex',
    gap: '1rem',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    gap: '0.4rem',
  },
  label: {
    fontSize: '0.85rem',
    fontWeight: '600',
    color: '#334155',
  },
  input: {
    padding: '0.75rem 1rem',
    borderRadius: '8px',
    border: '1px solid #cbd5e1',
    fontSize: '0.95rem',
    color: '#0f172a',
    backgroundColor: '#f8fafc',
    outline: 'none',
  },
  textarea: {
    minHeight: '120px',
    resize: 'vertical',
  },
  submitBtn: {
    backgroundColor: '#1b3b6f',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    padding: '0.85rem',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    boxShadow: '0 4px 6px -1px rgba(27, 59, 111, 0.2)',
    alignSelf: 'flex-start',
    paddingLeft: '2rem',
    paddingRight: '2rem',
  },
  successBox: {
    textAlign: 'center',
    padding: '2rem 0',
  },
  successIcon: {
    color: '#10b981',
    marginBottom: '1rem',
  },
  successTitle: {
    fontSize: '1.5rem',
    color: '#0f172a',
    marginBottom: '0.5rem',
  },
  successText: {
    color: '#475569',
    fontSize: '0.95rem',
    marginBottom: '1.5rem',
    lineHeight: '1.6',
  },
  btnReset: {
    backgroundColor: '#1b3b6f',
    color: '#ffffff',
    border: 'none',
    borderRadius: '6px',
    padding: '0.6rem 1.5rem',
    fontWeight: '600',
    cursor: 'pointer',
  },
  mapSkeleton: {
    height: '220px',
    backgroundColor: '#e2e8f0',
    borderRadius: '12px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
    color: '#475569',
    border: '1px solid #cbd5e1',
    background: 'radial-gradient(circle, #cbd5e1 10%, #e2e8f0 70%)',
    position: 'relative',
    overflow: 'hidden',
  },
  mapPinIcon: {
    color: '#ef4444',
  },
  mapText: {
    textAlign: 'center',
    fontSize: '0.88rem',
    backgroundColor: 'rgba(255,255,255,0.9)',
    padding: '0.6rem 1.2rem',
    borderRadius: '8px',
    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
  },
  sidebarCard: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    padding: '1.75rem',
    border: '1px solid #e2e8f0',
  },
  sidebarTitle: {
    fontSize: '1.15rem',
    color: '#0f172a',
    fontFamily: "'Outfit', sans-serif",
    marginBottom: '1.25rem',
    paddingBottom: '0.5rem',
    borderBottom: '2px solid #1b3b6f',
    alignSelf: 'flex-start',
  },
  leaderList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
  },
  leaderItem: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
  },
  avatarSkeleton: {
    width: '42px',
    height: '42px',
    borderRadius: '50%',
    backgroundColor: '#1b3b6f',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '700',
    fontSize: '0.9rem',
    flexShrink: 0,
  },
  leaderName: {
    fontSize: '0.95rem',
    color: '#0f172a',
    fontWeight: '700',
  },
  leaderRole: {
    fontSize: '0.78rem',
    color: '#64748b',
  },
  leaderEmail: {
    fontSize: '0.78rem',
    color: '#c5a880',
    fontWeight: '600',
  },
  commGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  commItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.75rem',
  },
  iconGold: {
    color: '#c5a880',
    marginTop: '0.2rem',
  },
  commLabel: {
    fontSize: '0.75rem',
    color: '#64748b',
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  commVal: {
    fontSize: '0.9rem',
    color: '#0f172a',
    fontWeight: '700',
  },
  hoursList: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  hoursItem: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.88rem',
    borderBottom: '1px solid #f1f5f9',
    paddingBottom: '0.5rem',
  },
  payGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  payBadge: {
    backgroundColor: '#f1f5f9',
    color: '#475569',
    border: '1px solid #cbd5e1',
    borderRadius: '4px',
    padding: '0.3rem 0.6rem',
    fontSize: '0.78rem',
    fontWeight: '600',
  },
  avatarImg: {
    width: '42px',
    height: '42px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '2px solid #1b3b6f',
    flexShrink: 0,
  },
  ceoStorySection: {
    padding: '5rem 0',
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #e2e8f0',
  },
  ceoStoryContainer: {
    display: 'flex',
    gap: '4rem',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  ceoStoryImageWrapper: {
    flex: '1',
    minWidth: '280px',
    position: 'relative',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 20px 25px -5px rgba(15, 23, 42, 0.1)',
  },
  ceoImage: {
    width: '100%',
    height: 'auto',
    maxHeight: '450px',
    objectFit: 'cover',
    display: 'block',
  },
  ceoBadge: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    background: 'linear-gradient(to top, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.2) 100%)',
    padding: '1.5rem',
    color: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
  },
  ceoStoryContent: {
    flex: '1.5',
    minWidth: '320px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
  },
  ceoTag: {
    fontSize: '0.8rem',
    fontWeight: '700',
    color: '#c5a880',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
  },
  ceoTitle: {
    fontSize: '2.25rem',
    color: '#0f172a',
    fontFamily: "'Outfit', sans-serif",
    lineHeight: '1.25',
  },
  ceoText: {
    fontSize: '1rem',
    lineHeight: '1.6',
    color: '#475569',
  },
  sectionHeader: {
    maxWidth: '850px',
    marginBottom: '2.5rem',
  },
  officesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
    gap: '1.5rem',
    marginTop: '1.5rem',
  },
  officeCard: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '1.5rem',
    border: '1px solid #cbd5e1',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
  },
  officeState: {
    color: '#1b3b6f',
    fontSize: '1.1rem',
    fontWeight: '700',
    fontFamily: "'Outfit', sans-serif",
    marginBottom: '0.5rem',
  },
  officeAddress: {
    fontSize: '0.88rem',
    color: '#475569',
    lineHeight: '1.4',
  },
  officeCity: {
    fontSize: '0.88rem',
    color: '#64748b',
    fontWeight: '600',
  }
};

// Add responsive stylesheet behavior dynamically
if (typeof document !== 'undefined') {
  const aboutMedia = `
    @media (max-width: 1024px) {
      .containerPage > div.container {
        flex-direction: column !important;
      }
      .ceoStoryContainer {
        flex-direction: column !important;
        gap: 2rem !important;
      }
      .ceoStoryImageWrapper {
        width: 100% !important;
        max-width: 450px !important;
        margin: 0 auto !important;
      }
    }
    @media (max-width: 600px) {
      .formRow-custom {
        flex-direction: column !important;
        gap: 1.2rem !important;
      }
    }
  `;
  const styleSheet = document.createElement("style");
  styleSheet.innerText = aboutMedia;
  document.head.appendChild(styleSheet);
}
export { styles };
