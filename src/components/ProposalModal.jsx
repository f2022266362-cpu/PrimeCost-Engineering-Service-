import React, { useState } from 'react';
import { X, Send, CheckCircle2, FileUp, ShieldCheck } from 'lucide-react';
import { saveLeadToSheet } from '../utils/sheetsLogger';

export default function ProposalModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: 'Commercial',
    scope: 'Full Architectural & Structural Engineering',
    area: '',
    location: '',
    details: '',
    acceptTerms: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [fileName, setFileName] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.acceptTerms) {
      alert("Please accept the terms to request a proposal.");
      return;
    }
    setIsSubmitting(true);

    const subject = `PRIMECOS Proposal Request: ${formData.projectType} Project`;
    const body = `Intake details from website proposal request:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company || 'N/A'}
Project Type: ${formData.projectType}
Target Area: ${formData.area} sq ft
Location: ${formData.location}
Service Scopes: ${formData.scope}
Attached file name: ${fileName || 'None'}

Details & Key Challenges:
${formData.details || 'None provided'}

---
Sent via PRIMECOS pre-construction portal.`;

    const mailtoUrl = `mailto:Frank.moore@primecost.biz?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Save to Google Sheets then redirect
    saveLeadToSheet({
      type: 'proposal',
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company || '',
      projectType: formData.projectType,
      area: formData.area,
      location: formData.location,
      scope: formData.scope,
      fileName: fileName || 'None',
      details: formData.details || ''
    }).finally(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      window.location.href = mailtoUrl;
    });
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
              <h2 style={styles.title}>Request a Design Proposal</h2>
              <p style={styles.subtitle}>
                Provide details about your project and receive a custom scoping estimate and architectural breakdown within 24 hours.
              </p>
            </div>

            <div style={styles.row}>
              <div style={styles.col}>
                <label style={styles.label}>Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  style={styles.input}
                />
              </div>
              <div style={styles.col}>
                <label style={styles.label}>Corporate Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. john@developer.com"
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
                  placeholder="e.g. (832) 234-6456"
                  style={styles.input}
                />
              </div>
              <div style={styles.col}>
                <label style={styles.label}>Company / Agency Name</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="e.g. Apex Developments"
                  style={styles.input}
                />
              </div>
            </div>

            <div style={styles.row}>
              <div style={styles.col}>
                <label style={styles.label}>Project Type *</label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  style={styles.input}
                >
                  <option value="Residential">Residential (Custom/Luxury/Renovation)</option>
                  <option value="Multifamily">Multifamily (Apartments/Condos/Mixed-Use)</option>
                  <option value="Commercial">Commercial (Office/Retail/Restaurant)</option>
                  <option value="Industrial">Industrial (Warehouse/Mfg/Processing)</option>
                </select>
              </div>
              <div style={styles.col}>
                <label style={styles.label}>Target Area (sq. ft.) *</label>
                <input
                  type="number"
                  name="area"
                  required
                  value={formData.area}
                  onChange={handleChange}
                  placeholder="e.g. 15000"
                  style={styles.input}
                />
              </div>
            </div>

            <div style={styles.col}>
              <label style={styles.label}>Project Address / City / Region *</label>
              <input
                type="text"
                name="location"
                required
                value={formData.location}
                onChange={handleChange}
                placeholder="e.g. Houston, TX (or exact address)"
                style={styles.input}
              />
            </div>

            <div style={styles.col}>
              <label style={styles.label}>Service Scopes Needed</label>
              <select
                name="scope"
                value={formData.scope}
                onChange={handleChange}
                style={styles.input}
              >
                <option value="Full Architectural & Structural Engineering">Architectural & Structural (Permit-Ready)</option>
                <option value="Architectural Design & 3D Visuals">Architectural Design & 3D Visualization</option>
                <option value="Structural & MEP Engineering Package">Structural & MEP Coordination</option>
                <option value="BIM Clash Detection & Coordination">BIM Modeling & Clash Detection</option>
                <option value="Interior Space Planning & Fitout">Interior Design & Space Planning</option>
              </select>
            </div>

            <div style={styles.col}>
              <label style={styles.label}>Project Details & Key Challenges</label>
              <textarea
                name="details"
                value={formData.details}
                onChange={handleChange}
                placeholder="Share any structural challenges, architectural goals, or design requirements..."
                style={{ ...styles.input, ...styles.textarea }}
              />
            </div>

            <div style={styles.col}>
              <label style={styles.label}>Attach Site Plan, Sketch or Existing Drawings</label>
              <div style={styles.fileUploadBox}>
                <input
                  type="file"
                  id="file-upload-proposal"
                  onChange={handleFileChange}
                  style={styles.fileInputHidden}
                  accept=".pdf,.dwg,.rvt,.zip,.jpg,.png"
                />
                <label htmlFor="file-upload-proposal" style={styles.fileLabel}>
                  <FileUp size={24} style={styles.fileIcon} />
                  <span>{fileName ? `Selected: ${fileName}` : 'Choose File (PDF, DWG, RVT, ZIP, JPG, PNG)'}</span>
                </label>
              </div>
            </div>

            <div style={styles.termsBox}>
              <input
                type="checkbox"
                id="acceptTerms"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleChange}
                style={styles.checkbox}
              />
              <label htmlFor="acceptTerms" style={styles.termsLabel}>
                I authorize PRIMECOS to analyze these files and contact me regarding this design bid estimate.
              </label>
            </div>

            <button type="submit" disabled={isSubmitting} style={styles.submitBtn}>
              {isSubmitting ? 'Generating Scoping Bid...' : 'Submit Proposal Request'}
              {!isSubmitting && <Send size={18} />}
            </button>
          </form>
        ) : (
          <div style={styles.successBox} className="animate-fade-in">
            <CheckCircle2 size={64} style={styles.successIcon} />
            <h3 style={styles.successTitle}>Proposal Request Received!</h3>
            <p style={styles.successText}>
              Thank you, <strong>{formData.name}</strong>. Our engineering and pre-construction bidding team has received your files and details.
            </p>
            <div style={styles.ticketCard}>
              <p><strong>Ticket reference:</strong> PM-{Math.floor(Math.random() * 90000) + 10000}</p>
              <p><strong>Project:</strong> {formData.projectType} ({formData.area} sq.ft.)</p>
              <p><strong>Location:</strong> {formData.location}</p>
              <p><strong>Expected Scoping Bid:</strong> Within 24 business hours</p>
            </div>
            <p style={styles.successNotice}>
              A confirmation email and initial intake questionnaire have been sent to <strong>{formData.email}</strong>.
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
  closeBtnHover: {
    backgroundColor: '#f1f5f9'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.2rem',
  },
  header: {
    marginBottom: '0.5rem',
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
    transition: 'all 0.2s',
    outline: 'none',
  },
  textarea: {
    minHeight: '80px',
    resize: 'vertical',
  },
  fileUploadBox: {
    border: '2px dashed #cbd5e1',
    borderRadius: '8px',
    backgroundColor: '#f8fafc',
    padding: '1rem',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'border-color 0.2s',
  },
  fileInputHidden: {
    display: 'none',
  },
  fileLabel: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem',
    cursor: 'pointer',
    color: '#475569',
    fontSize: '0.85rem',
  },
  fileIcon: {
    color: '#1b3b6f',
  },
  termsBox: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.5rem',
    marginTop: '0.5rem',
  },
  checkbox: {
    marginTop: '0.2rem',
    cursor: 'pointer',
  },
  termsLabel: {
    fontSize: '0.8rem',
    color: '#475569',
    lineHeight: '1.4',
    cursor: 'pointer',
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
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
