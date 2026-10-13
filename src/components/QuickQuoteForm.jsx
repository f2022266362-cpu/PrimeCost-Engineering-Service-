import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { saveLeadToSheet } from '../utils/sheetsLogger';

// Short inline quote form shown on blog posts and service pages.
// Sends through the same EmailJS template as the proposal modal.
export default function QuickQuoteForm({ source = 'Website', heading = 'Get a quote from a licensed engineer' }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', details: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');
    try {
      await emailjs.send(
        'service_d8j1sej',
        'template_db31n9m',
        {
          full_name: form.name,
          corporate_email: form.email,
          phone: form.phone,
          company: '',
          project_type: 'Quick quote',
          target_area: '',
          address: '',
          service_scope: `Quick quote form: ${source}`,
          message: form.details,
        },
        '0X16ZaXaNEcpPNsbo'
      );
      saveLeadToSheet({ type: 'quick_quote', source, ...form });
      setStatus('sent');
      setForm({ name: '', email: '', phone: '', details: '' });
    } catch (err) {
      console.error('[PRIMECOST] Quick quote failed:', err);
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <section style={styles.box} aria-live="polite">
        <h2 style={styles.heading}>Thanks, we received your request.</h2>
        <p style={styles.sub}>
          An engineer will get back to you by email or phone. For anything urgent, call{' '}
          <a href="tel:+18322346456" style={styles.link}>(832) 234-6456</a>.
        </p>
      </section>
    );
  }

  return (
    <section style={styles.box} className="quick-quote">
      <h2 style={styles.heading}>{heading}</h2>
      <p style={styles.sub}>
        Tell us what you need. PE-licensed in 49 states. Prefer to talk?{' '}
        <a href="tel:+18322346456" style={styles.link}>Call (832) 234-6456</a>.
      </p>
      <form onSubmit={onSubmit} style={styles.form}>
        <div style={styles.row} className="quick-quote-row">
          <input name="name" value={form.name} onChange={onChange} required placeholder="Your name" aria-label="Your name" style={styles.input} />
          <input name="email" type="email" value={form.email} onChange={onChange} required placeholder="Email" aria-label="Email" style={styles.input} />
          <input name="phone" type="tel" value={form.phone} onChange={onChange} placeholder="Phone (optional)" aria-label="Phone" style={styles.input} />
        </div>
        <textarea
          name="details" value={form.details} onChange={onChange} required rows={3}
          placeholder="What do you need? e.g. PE stamp for steel shop drawings in Texas, permit corrections, foundation letter..."
          aria-label="Project details" style={{ ...styles.input, resize: 'vertical' }}
        />
        <button type="submit" disabled={status === 'sending'} style={styles.button}>
          {status === 'sending' ? 'Sending...' : 'Request a Quote'}
        </button>
        {status === 'error' && (
          <p style={styles.error}>
            Sorry, that did not go through. Please email{' '}
            <a href="mailto:Frank.moore@primecost.biz" style={styles.link}>Frank.moore@primecost.biz</a> or call{' '}
            <a href="tel:+18322346456" style={styles.link}>(832) 234-6456</a>.
          </p>
        )}
      </form>
    </section>
  );
}

const styles = {
  box: {
    backgroundColor: '#0F2446', color: '#ffffff', borderRadius: '14px',
    padding: '1.75rem', margin: '2.5rem 0',
  },
  heading: { fontSize: '1.3rem', fontWeight: 800, margin: '0 0 0.4rem 0', color: '#ffffff' },
  sub: { fontSize: '0.92rem', color: '#cbd5e1', margin: '0 0 1.1rem 0', lineHeight: 1.5 },
  link: { color: '#C89A45', fontWeight: 700 },
  form: { display: 'flex', flexDirection: 'column', gap: '0.75rem' },
  row: { display: 'flex', gap: '0.75rem', flexWrap: 'wrap' },
  input: {
    flex: '1 1 180px', padding: '0.75rem 0.9rem', borderRadius: '8px', border: '1px solid #334155',
    fontSize: '0.95rem', color: '#0f172a', backgroundColor: '#ffffff', fontFamily: 'inherit', backgroundImage: 'none', boxSizing: 'border-box',
  },
  button: {
    alignSelf: 'flex-start', backgroundColor: '#C89A45', color: '#0F2446', border: 'none',
    borderRadius: '8px', padding: '0.8rem 1.6rem', fontWeight: 800, fontSize: '0.95rem', cursor: 'pointer',
  },
  error: { fontSize: '0.88rem', color: '#fecaca', margin: 0 },
};
