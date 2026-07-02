import React, { useState } from 'react';
import { X, Calendar, Clock, Video, Phone, MapPin, CheckCircle } from 'lucide-react';
import { saveLeadToSheet } from '../utils/sheetsLogger';

export default function ConsultationModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const timeSlots = [
    '09:00 AM - 10:00 AM',
    '10:30 AM - 11:30 AM',
    '01:00 PM - 02:00 PM',
    '02:30 PM - 03:30 PM',
    '04:00 PM - 05:00 PM'
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    format: 'Video Call',
    date: '',
    timeSlot: timeSlots[0],
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Generate next 7 business days for selection
  const getAvailableDates = () => {
    const dates = [];
    let current = new Date();
    let count = 0;
    while (count < 8) {
      current.setDate(current.getDate() + 1);
      const day = current.getDay();
      // Skip Sundays (0)
      if (day !== 0) {
        dates.push(new Date(current));
        count++;
      }
    }
    return dates;
  };

  const availableDates = getAvailableDates();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDateSelect = (dateStr) => {
    setFormData(prev => ({
      ...prev,
      date: dateStr
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.date) {
      alert("Please select a consultation date.");
      return;
    }
    setIsSubmitting(true);

    const subject = `Consultation Request: ${formData.name}`;
    const body = `Details:\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\nFormat: ${formData.format}\nDate: ${formData.date}\nTime Slot: ${formData.timeSlot}\nNotes: ${formData.notes}`;
    const mailtoUrl = `mailto:Frank.moore@primecost.biz?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Save to Google Sheets then redirect
    saveLeadToSheet({
      type: 'consultation',
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company || '',
      format: formData.format,
      date: formData.date,
      timeSlot: formData.timeSlot,
      notes: formData.notes || ''
    }).finally(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      window.location.href = mailtoUrl;
    });
  };

  const formatDateLabel = (d) => {
    return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };

  const formatDateValue = (d) => {
    return d.toISOString().split('T')[0];
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.backdrop} onClick={onClose} />
      <div style={styles.modal} className="animate-fade-in">
        <button style={styles.closeBtn} onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {!isSuccess ? (
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.header}>
              <h2 style={styles.title}>Schedule a Consultation</h2>
              <p style={styles.subtitle}>
                Book a 30-minute scoping session with Frank Moore (CEO) or Harold Sterling, PE (VP Engineering) to align on pre-construction details.
              </p>
            </div>

            <div style={styles.row}>
              <div style={styles.col}>
                <label style={styles.label}>Your Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Frank Castle"
                  style={styles.input}
                />
              </div>
              <div style={styles.col}>
                <label style={styles.label}>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. frank@buildingco.com"
                  style={styles.input}
                />
              </div>
            </div>

            <div style={styles.row}>
              <div style={styles.col}>
                <label style={styles.label}>Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. (747) 223-7816"
                  style={styles.input}
                />
              </div>
              <div style={styles.col}>
                <label style={styles.label}>Company Name</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="e.g. Castle General Contractors"
                  style={styles.input}
                />
              </div>
            </div>

            <div style={styles.col}>
              <label style={styles.label}>Consultation Format *</label>
              <div style={styles.formatGroup}>
                <label style={{
                  ...styles.formatOption,
                  ...(formData.format === 'Video Call' ? styles.formatOptionActive : {})
                }}>
                  <input
                    type="radio"
                    name="format"
                    value="Video Call"
                    checked={formData.format === 'Video Call'}
                    onChange={handleChange}
                    style={styles.radioHidden}
                  />
                  <Video size={16} />
                  <span>Google Meet / Zoom</span>
                </label>

                <label style={{
                  ...styles.formatOption,
                  ...(formData.format === 'Phone Call' ? styles.formatOptionActive : {})
                }}>
                  <input
                    type="radio"
                    name="format"
                    value="Phone Call"
                    checked={formData.format === 'Phone Call'}
                    onChange={handleChange}
                    style={styles.radioHidden}
                  />
                  <Phone size={16} />
                  <span>Telephone</span>
                </label>

                <label style={{
                  ...styles.formatOption,
                  ...(formData.format === 'Office Visit' ? styles.formatOptionActive : {})
                }}>
                  <input
                    type="radio"
                    name="format"
                    value="Office Visit"
                    checked={formData.format === 'Office Visit'}
                    onChange={handleChange}
                    style={styles.radioHidden}
                  />
                  <MapPin size={16} />
                  <span>Houston HQ Visit</span>
                </label>
              </div>
            </div>

            <div style={styles.col}>
              <label style={styles.label}>Select Available Date *</label>
              <div style={styles.dateGrid}>
                {availableDates.map((date, idx) => {
                  const val = formatDateValue(date);
                  const isActive = formData.date === val;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleDateSelect(val)}
                      style={{
                        ...styles.dateBtn,
                        ...(isActive ? styles.dateBtnActive : {})
                      }}
                    >
                      <Calendar size={14} />
                      <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>{formatDateLabel(date)}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div style={styles.col}>
              <label style={styles.label}>Select Time Slot (Central Time) *</label>
              <div style={styles.timeGrid}>
                {timeSlots.map((slot, idx) => {
                  const isActive = formData.timeSlot === slot;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, timeSlot: slot }))}
                      style={{
                        ...styles.timeBtn,
                        ...(isActive ? styles.timeBtnActive : {})
                      }}
                    >
                      <Clock size={14} />
                      <span>{slot}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div style={styles.col}>
              <label style={styles.label}>Briefly Describe Your Project Goals</label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Scope size, location, expected structural or permit dependencies..."
                style={{ ...styles.input, ...styles.textarea }}
              />
            </div>

            <button type="submit" disabled={isSubmitting} style={styles.submitBtn}>
              {isSubmitting ? 'Securing Calendar Slot...' : 'Confirm Consultation Booking'}
            </button>
          </form>
        ) : (
          <div style={styles.successBox} className="animate-fade-in">
            <CheckCircle size={64} style={styles.successIcon} />
            <h3 style={styles.successTitle}>Consultation Confirmed!</h3>
            <p style={styles.successText}>
              Your scoping call has been scheduled successfully. Calendar invitations have been dispatched.
            </p>
            <div style={styles.ticketCard}>
              <p><strong>Attendee:</strong> {formData.name} ({formData.company || 'Private Project'})</p>
              <p><strong>Host:</strong> Harold Sterling, PE (VP Engineering) &amp; Frank Moore (CEO)</p>
              <p><strong>Format:</strong> {formData.format}</p>
              <p><strong>Date:</strong> {formData.date}</p>
              <p><strong>Time Slot:</strong> {formData.timeSlot} (Central Time)</p>
            </div>
            <p style={styles.successNotice}>
              A calendar invite with video links or telephone instructions has been sent to <strong>{formData.email}</strong>.
            </p>
            <button style={styles.closeSuccessBtn} onClick={onClose}>
              Return to Website
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem'
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(15, 23, 42, 0.65)',
    backdropFilter: 'blur(8px)',
  },
  modal: {
    position: 'relative',
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    width: '100%',
    maxWidth: '650px',
    maxHeight: '90vh',
    overflowY: 'auto',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    padding: '2.5rem',
    zIndex: 1001,
  },
  closeBtn: {
    position: 'absolute',
    top: '1.25rem',
    right: '1.25rem',
    background: 'none',
    border: 'none',
    color: '#64748b',
    cursor: 'pointer',
    padding: '0.25rem',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.2s',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.2rem',
  },
  header: {
    marginBottom: '0.2rem',
  },
  title: {
    fontSize: '1.75rem',
    color: '#0f172a',
    marginBottom: '0.5rem',
  },
  subtitle: {
    fontSize: '0.9rem',
    color: '#64748b',
    lineHeight: '1.5'
  },
  row: {
    display: 'flex',
    gap: '1rem',
  },
  col: {
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
    minHeight: '70px',
    resize: 'vertical',
  },
  formatGroup: {
    display: 'flex',
    gap: '0.75rem',
  },
  formatOption: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    border: '1px solid #cbd5e1',
    borderRadius: '8px',
    padding: '0.75rem',
    cursor: 'pointer',
    fontSize: '0.85rem',
    fontWeight: '500',
    backgroundColor: '#f8fafc',
    transition: 'all 0.2s',
    textAlign: 'center',
  },
  formatOptionActive: {
    borderColor: '#1b3b6f',
    backgroundColor: 'rgba(27, 59, 111, 0.05)',
    color: '#1b3b6f',
    boxShadow: '0 0 0 2px rgba(27, 59, 111, 0.1)',
  },
  radioHidden: {
    display: 'none',
  },
  dateGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '0.5rem',
  },
  dateBtn: {
    padding: '0.6rem 0.25rem',
    border: '1px solid #cbd5e1',
    borderRadius: '8px',
    backgroundColor: '#f8fafc',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.25rem',
    fontSize: '0.75rem',
    color: '#475569',
    transition: 'all 0.2s',
  },
  dateBtnActive: {
    borderColor: '#c5a880',
    backgroundColor: 'rgba(197, 168, 128, 0.1)',
    color: '#a98d63',
    boxShadow: '0 0 0 2px rgba(197, 168, 128, 0.1)',
  },
  timeGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '0.5rem',
  },
  timeBtn: {
    padding: '0.6rem',
    border: '1px solid #cbd5e1',
    borderRadius: '8px',
    backgroundColor: '#f8fafc',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    fontSize: '0.8rem',
    color: '#475569',
    transition: 'all 0.2s',
  },
  timeBtnActive: {
    borderColor: '#1b3b6f',
    backgroundColor: 'rgba(27, 59, 111, 0.05)',
    color: '#1b3b6f',
    boxShadow: '0 0 0 2px rgba(27, 59, 111, 0.1)',
  },
  submitBtn: {
    backgroundColor: '#1b3b6f',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    padding: '0.9rem',
    fontWeight: '600',
    fontSize: '1rem',
    cursor: 'pointer',
    boxShadow: '0 4px 6px -1px rgba(27, 59, 111, 0.2)',
    transition: 'all 0.2s',
    marginTop: '0.5rem',
  },
  successBox: {
    textAlign: 'center',
    padding: '1.5rem 0',
  },
  successIcon: {
    color: '#10b981',
    marginBottom: '1rem',
  },
  successTitle: {
    fontSize: '1.8rem',
    color: '#0f172a',
    marginBottom: '0.75rem',
  },
  successText: {
    color: '#475569',
    fontSize: '1rem',
    marginBottom: '1.5rem',
    lineHeight: '1.6',
  },
  ticketCard: {
    backgroundColor: '#f8fafc',
    border: '1px solid #e2e8f0',
    borderRadius: '12px',
    padding: '1.25rem',
    textAlign: 'left',
    display: 'inline-block',
    width: '100%',
    marginBottom: '1.5rem',
    fontSize: '0.9rem',
    color: '#334155',
    lineHeight: '1.8',
  },
  successNotice: {
    fontSize: '0.85rem',
    color: '#64748b',
    marginBottom: '1.5rem',
  },
  closeSuccessBtn: {
    backgroundColor: '#1b3b6f',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    padding: '0.8rem 2rem',
    fontWeight: '600',
    cursor: 'pointer',
    boxShadow: '0 4px 6px -1px rgba(27, 59, 111, 0.2)',
    transition: 'all 0.2s',
  }
};
export { styles };
