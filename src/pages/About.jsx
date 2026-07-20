import React, { useState } from 'react';
import { MapPin, Mail, Phone, Clock, Send, ShieldCheck } from 'lucide-react';
import emailjs from '@emailjs/browser';
import SchemaManager from '../components/SchemaManager';
import ScrollReveal from '../components/ScrollReveal';
import GlassCard from '../components/ui/GlassCard';
import PrimaryButton from '../components/ui/PrimaryButton';

export default function About() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', subject: 'General Inquiry', message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    try {
      await emailjs.send(
        'service_d8j1sej',
        'template_db31n9m',
        {
          full_name:        form.name,
          corporate_email:  form.email,
          phone:            form.phone,
          service_scope:    form.subject,
          message:          form.message,
        },
        '0X16ZaXaNEcpPNsbo'
      );
      setIsSent(true);
      setForm({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
    } catch (err) {
      console.error(err);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div style={{ paddingTop: '7rem', minHeight: '100vh', background: '#f8fafc' }}>
      <SchemaManager
        title="Contact Us | PRIMECOST Engineering"
        description="Get in touch with PRIMECOST. Send us a message, visit our Houston HQ, or email our scoping desk."
      />

      {/* ── Page Header ── */}
      <div style={styles.pageHeader}>
        <div className="container">
          <ScrollReveal variant="fade-up">
            <span style={styles.tag}>GET IN TOUCH</span>
            <h1 style={styles.pageTitle}>Contact Us</h1>
            <p style={styles.pageSubtitle}>
              Send us your project details and our team will respond within 24 hours.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* ── Main Grid: Form + Info ── */}
      <section style={styles.section}>
        <div className="container" style={styles.grid}>

          {/* ── LEFT: Contact Form ── */}
          <ScrollReveal variant="fade-right">
            <GlassCard style={styles.formCard}>
              <h2 style={styles.cardTitle}>Send Us a Message</h2>
              <p style={styles.cardSubtitle}>
                Fill in your details and we'll get back to you within 24 hours.
              </p>

              {isSent ? (
                <div style={styles.successBox}>
                  <ShieldCheck size={48} style={{ color: '#10b981', marginBottom: '1rem' }} />
                  <h3 style={styles.successTitle}>Message Sent!</h3>
                  <p style={styles.successText}>
                    Thank you, <strong>{form.name || 'there'}</strong>. Our team will be in touch shortly.
                  </p>
                  <button style={styles.resetBtn} onClick={() => setIsSent(false)}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={styles.form}>
                  {/* Row 1 */}
                  <div style={styles.row}>
                    <div style={styles.group}>
                      <label style={styles.label}>Full Name *</label>
                      <input
                        name="name" type="text" required
                        placeholder="John Doe"
                        value={form.name} onChange={handleChange}
                        style={styles.input}
                      />
                    </div>
                    <div style={styles.group}>
                      <label style={styles.label}>Email Address *</label>
                      <input
                        name="email" type="email" required
                        placeholder="john@company.com"
                        value={form.email} onChange={handleChange}
                        style={styles.input}
                      />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div style={styles.row}>
                    <div style={styles.group}>
                      <label style={styles.label}>Phone Number</label>
                      <input
                        name="phone" type="tel"
                        placeholder="(832) 234-6456"
                        value={form.phone} onChange={handleChange}
                        style={styles.input}
                      />
                    </div>
                    <div style={styles.group}>
                      <label style={styles.label}>Subject</label>
                      <select
                        name="subject"
                        value={form.subject} onChange={handleChange}
                        style={styles.input}
                      >
                        <option>General Inquiry</option>
                        <option>Structural Engineering</option>
                        <option>MEP Engineering</option>
                        <option>Architectural Design</option>
                        <option>BIM & CAD Drafting</option>
                        <option>Request a Quote</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div style={styles.group}>
                    <label style={styles.label}>Message *</label>
                    <textarea
                      name="message" required rows={5}
                      placeholder="Describe your project, location, scope or any questions..."
                      value={form.message} onChange={handleChange}
                      style={{ ...styles.input, resize: 'vertical', minHeight: '120px', fontFamily: 'inherit' }}
                    />
                  </div>

                  <PrimaryButton
                    type="submit"
                    variant="primary"
                    style={{ width: '100%', marginTop: '0.5rem', padding: '0.9rem' }}
                    icon={<Send size={16} />}
                  >
                    {isSending ? 'Sending...' : 'Send Message'}
                  </PrimaryButton>
                </form>
              )}
            </GlassCard>
          </ScrollReveal>

          {/* ── RIGHT: Location + Email + Map ── */}
          <div style={styles.infoCol}>
            <ScrollReveal variant="fade-left">

              {/* Location Card */}
              <GlassCard style={styles.infoCard}>
                <div style={styles.infoIconBox}>
                  <MapPin size={22} style={{ color: '#C89A45' }} />
                </div>
                <div>
                  <h3 style={styles.infoTitle}>Company Location</h3>
                  <p style={styles.infoText}>440 Louisiana St, Suite 900</p>
                  <p style={styles.infoText}>Houston, TX 77002</p>
                  <a
                    href="https://maps.google.com/?q=440+Louisiana+St+Suite+900+Houston+TX"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.infoLink}
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </GlassCard>

              {/* Email Card */}
              <GlassCard style={styles.infoCard}>
                <div style={styles.infoIconBox}>
                  <Mail size={22} style={{ color: '#C89A45' }} />
                </div>
                <div>
                  <h3 style={styles.infoTitle}>Email Us</h3>
                  <a href="mailto:Frank.moore@primecost.biz" style={styles.infoLink}>
                    Frank.moore@primecost.biz
                  </a>
                  <br />
                  <a href="mailto:bids@primecost.biz" style={{ ...styles.infoLink, marginTop: '0.25rem', display: 'inline-block' }}>
                    bids@primecost.biz
                  </a>
                </div>
              </GlassCard>

              {/* Phone Card */}
              <GlassCard style={styles.infoCard}>
                <div style={styles.infoIconBox}>
                  <Phone size={22} style={{ color: '#C89A45' }} />
                </div>
                <div>
                  <h3 style={styles.infoTitle}>Phone</h3>
                  <a href="tel:8322346456" style={styles.infoLink}>(832) 234-6456</a>
                  <br />
                  <a href="tel:7472237816" style={{ ...styles.infoLink, marginTop: '0.25rem', display: 'inline-block' }}>
                    (747) 223-7816
                  </a>
                </div>
              </GlassCard>

              {/* Hours Card */}
              <GlassCard style={styles.infoCard}>
                <div style={styles.infoIconBox}>
                  <Clock size={22} style={{ color: '#C89A45' }} />
                </div>
                <div>
                  <h3 style={styles.infoTitle}>Business Hours</h3>
                  <p style={styles.infoText}>Mon – Fri: 9:00 AM – 6:00 PM</p>
                  <p style={styles.infoText}>Sat: 10:00 AM – 4:00 PM</p>
                  <p style={{ ...styles.infoText, color: '#ef4444' }}>Sun: Closed</p>
                </div>
              </GlassCard>

              {/* Google Map */}
              <div style={styles.mapWrap}>
                <iframe
                  title="PRIMECOST Houston HQ"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.136894085444!2d-95.36746862378992!3d29.762145375065096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b322744c80cb%3A0xeab50d32bb5848bb!2s440%20Louisiana%20St%20%23900%2C%20Houston%2C%20TX%2077002!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%" height="100%"
                  style={{ border: 0, borderRadius: '12px' }}
                  allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

            </ScrollReveal>
          </div>

        </div>
      </section>
    </div>
  );
}

const styles = {
  pageHeader: {
    padding: '3.5rem 0 3rem 0',
    background: 'linear-gradient(135deg, #f0f4ff 0%, #e8eef8 100%)',
    borderBottom: '1px solid #e2e8f0',
    textAlign: 'center',
  },
  tag: {
    display: 'inline-block',
    fontSize: '0.72rem',
    fontWeight: '700',
    color: '#C89A45',
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    marginBottom: '0.75rem',
  },
  pageTitle: {
    fontSize: '3rem',
    fontWeight: '850',
    color: '#0F2446',
    fontFamily: "'Outfit', sans-serif",
    lineHeight: 1.15,
    marginBottom: '0.75rem',
  },
  pageSubtitle: {
    fontSize: '1.05rem',
    color: '#64748b',
    maxWidth: '480px',
    margin: '0 auto',
    lineHeight: 1.6,
  },
  section: {
    padding: '5rem 0 6rem 0',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1.15fr 1fr',
    gap: '2.5rem',
    alignItems: 'start',
  },
  /* Form card */
  formCard: {
    padding: '2.75rem',
    height: '100%',
  },
  cardTitle: {
    fontSize: '1.65rem',
    fontWeight: '800',
    color: '#0F2446',
    fontFamily: "'Outfit', sans-serif",
    marginBottom: '0.4rem',
  },
  cardSubtitle: {
    fontSize: '0.92rem',
    color: '#64748b',
    marginBottom: '2rem',
    lineHeight: 1.55,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.1rem',
  },
  row: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem',
  },
  group: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.35rem',
  },
  label: {
    fontSize: '0.78rem',
    fontWeight: '700',
    color: '#0F2446',
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
  },
  input: {
    padding: '0.75rem 1rem',
    borderRadius: '8px',
    border: '1.5px solid #e2e8f0',
    fontSize: '0.9rem',
    color: '#0F2446',
    background: '#ffffff',
    outline: 'none',
    transition: 'border-color 0.2s',
    width: '100%',
    boxSizing: 'border-box',
  },
  /* Success box */
  successBox: {
    textAlign: 'center',
    padding: '2.5rem 1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  successTitle: {
    fontSize: '1.6rem',
    fontWeight: '800',
    color: '#0F2446',
    fontFamily: "'Outfit', sans-serif",
    marginBottom: '0.5rem',
  },
  successText: {
    color: '#64748b',
    fontSize: '0.95rem',
    lineHeight: 1.55,
    marginBottom: '1.5rem',
  },
  resetBtn: {
    background: 'none',
    border: '1.5px solid #0F2446',
    color: '#0F2446',
    padding: '0.6rem 1.5rem',
    borderRadius: '8px',
    fontWeight: '700',
    fontSize: '0.88rem',
    cursor: 'pointer',
  },
  /* Right column */
  infoCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.1rem',
  },
  infoCard: {
    padding: '1.4rem 1.6rem',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1.1rem',
  },
  infoIconBox: {
    width: '42px',
    height: '42px',
    borderRadius: '10px',
    background: 'rgba(200,154,69,0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  infoTitle: {
    fontSize: '1rem',
    fontWeight: '800',
    color: '#0F2446',
    fontFamily: "'Outfit', sans-serif",
    marginBottom: '0.35rem',
  },
  infoText: {
    fontSize: '0.88rem',
    color: '#64748b',
    lineHeight: 1.5,
    margin: '0.1rem 0',
  },
  infoLink: {
    fontSize: '0.88rem',
    color: '#C89A45',
    fontWeight: '600',
    textDecoration: 'none',
    display: 'inline-block',
    marginTop: '0.2rem',
  },
  mapWrap: {
    height: '220px',
    borderRadius: '12px',
    overflow: 'hidden',
    border: '1px solid #e2e8f0',
  },
};
