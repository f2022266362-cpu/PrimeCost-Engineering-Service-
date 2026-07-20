import { useState, useMemo } from 'react';
import { ChevronDown, Search, MessageCircle } from 'lucide-react';
import SchemaManager from '../components/SchemaManager';
import ScrollReveal from '../components/ScrollReveal';
import { faqCategories } from '../data/faq';

export default function FAQPage() {
  const [search, setSearch] = useState('');
  const [openCategory, setOpenCategory] = useState('General Engineering');
  const [openFaq, setOpenFaq] = useState(null);

  const totalFaqs = faqCategories.reduce((acc, c) => acc + c.faqs.length, 0);

  // Search across all categories
  const searchResults = useMemo(() => {
    if (!search.trim()) return null;
    const q = search.toLowerCase();
    const results = [];
    faqCategories.forEach(cat => {
      cat.faqs.forEach(faq => {
        if (faq.question.toLowerCase().includes(q) || faq.answer.toLowerCase().includes(q)) {
          results.push({ ...faq, category: cat.category, icon: cat.icon });
        }
      });
    });
    return results;
  }, [search]);

  const activeCategoryData = faqCategories.find(c => c.category === openCategory);

  return (
    <div style={{ background: '#f4f7fb', minHeight: '100vh' }}>
      <SchemaManager
        title="Engineering FAQs — 400+ Questions Answered | PRIMECOST"
        description="Browse 400+ frequently asked questions about structural engineering, civil engineering, MEP, BIM, architectural design, permits, and more from PRIMECOST Engineering."
        schemaType="FAQ"
        schemaData={{ questions: faqCategories.flatMap(c => c.faqs).slice(0, 40) }}
      />

      {/* Hero Banner */}
      <div className="faq-hero-banner" style={{
        background: 'linear-gradient(135deg, #0F2446 0%, #1a3a6e 60%, #0F2446 100%)',
        padding: '9rem 1.5rem 5rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(200,154,69,0.15) 0%, transparent 60%), radial-gradient(circle at 80% 50%, rgba(200,154,69,0.1) 0%, transparent 60%)',
          pointerEvents: 'none'
        }} />
        <ScrollReveal variant="fade-up">
          <span style={{
            display: 'inline-block', background: 'rgba(200,154,69,0.2)',
            color: '#C89A45', fontSize: '0.75rem', fontWeight: 700,
            letterSpacing: '0.2em', textTransform: 'uppercase',
            padding: '0.4rem 1.2rem', borderRadius: '20px',
            border: '1px solid rgba(200,154,69,0.3)', marginBottom: '1.5rem'
          }}>
            {faqCategories.length} Categories · {totalFaqs}+ Questions Answered
          </span>
          <h1 style={{
            color: '#ffffff', fontSize: 'clamp(2rem, 5vw, 3.2rem)',
            fontWeight: 850, margin: '0 0 1rem', lineHeight: 1.15
          }}>
            Frequently Asked<br />
            <span style={{ color: '#C89A45' }}>Engineering Questions</span>
          </h1>
          <p style={{
            color: 'rgba(255,255,255,0.75)', fontSize: '1rem',
            maxWidth: '520px', margin: '0 auto 2.5rem'
          }}>
            Everything you need to know about our structural, civil, MEP, BIM, and construction services.
          </p>

          {/* Search */}
          <div style={{ maxWidth: '520px', margin: '0 auto', position: 'relative' }}>
            <Search size={18} style={{
              position: 'absolute', left: '1.1rem', top: '50%',
              transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.5)', pointerEvents: 'none'
            }} />
            <input
              type="text"
              placeholder="Search any question..."
              value={search}
              onChange={e => { setSearch(e.target.value); setOpenFaq(null); }}
              style={{
                width: '100%', padding: '0.95rem 1rem 0.95rem 3rem',
                borderRadius: '50px', border: '1.5px solid rgba(255,255,255,0.2)',
                background: 'rgba(255,255,255,0.1)', color: '#fff',
                fontSize: '0.95rem', backdropFilter: 'blur(10px)',
                outline: 'none', boxSizing: 'border-box'
              }}
            />
          </div>
        </ScrollReveal>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 1.5rem' }} className="faq-content-container">

        {/* Search Results */}
        {searchResults !== null ? (
          <div>
            <p style={{ color: '#556987', marginBottom: '1.5rem', fontWeight: 600 }}>
              {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} for "<strong style={{ color: '#0F2446' }}>{search}</strong>"
            </p>
            {searchResults.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '3rem', background: '#fff', borderRadius: '16px' }}>
                <p style={{ color: '#8a9bb5', fontSize: '1.05rem' }}>No questions found. Try a different search term.</p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {searchResults.map((faq, i) => (
                  <FaqItem
                    key={i}
                    faq={faq}
                    isOpen={openFaq === `search-${i}`}
                    onToggle={() => setOpenFaq(openFaq === `search-${i}` ? null : `search-${i}`)}
                    badge={`${faq.icon} ${faq.category}`}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="faq-main-layout">

            {/* Sidebar — Category List */}
            <div className="faq-sidebar-categories" style={{
              background: '#fff', borderRadius: '20px', padding: '1.25rem',
              border: '1px solid #e8eef5', boxShadow: '0 4px 20px rgba(15,36,70,0.05)',
              position: 'sticky', top: '100px'
            }}>
              <p style={{
                fontSize: '0.7rem', fontWeight: 700, color: '#C89A45',
                letterSpacing: '0.18em', textTransform: 'uppercase',
                marginBottom: '0.75rem', paddingBottom: '0.75rem',
                borderBottom: '1px solid #e8eef5'
              }}>Categories</p>
              {faqCategories.map(cat => (
                <button
                  key={cat.category}
                  onClick={() => { setOpenCategory(cat.category); setOpenFaq(null); }}
                  style={{
                    width: '100%', textAlign: 'left', display: 'flex',
                    alignItems: 'center', gap: '0.6rem',
                    padding: '0.65rem 0.85rem', borderRadius: '10px',
                    border: 'none', cursor: 'pointer', marginBottom: '0.2rem',
                    fontSize: '0.82rem', fontWeight: openCategory === cat.category ? 700 : 500,
                    background: openCategory === cat.category ? '#0F2446' : 'transparent',
                    color: openCategory === cat.category ? '#fff' : '#334155',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <span>{cat.icon}</span>
                  <span style={{ flex: 1 }}>{cat.category}</span>
                  <span style={{
                    fontSize: '0.65rem', fontWeight: 700,
                    background: openCategory === cat.category ? 'rgba(255,255,255,0.2)' : '#eef3fb',
                    color: openCategory === cat.category ? '#fff' : '#8a9bb5',
                    padding: '0.1rem 0.45rem', borderRadius: '10px'
                  }}>{cat.faqs.length}</span>
                </button>
              ))}
            </div>

            {/* FAQ List */}
            <div>
              {activeCategoryData && (
                <ScrollReveal variant="fade-up" key={openCategory}>
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: '0.75rem',
                    marginBottom: '1.5rem'
                  }}>
                    <span style={{ fontSize: '2rem' }}>{activeCategoryData.icon}</span>
                    <div>
                      <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F2446', margin: 0 }}>
                        {activeCategoryData.category}
                      </h2>
                      <p style={{ fontSize: '0.8rem', color: '#8a9bb5', margin: 0 }}>
                        {activeCategoryData.faqs.length} frequently asked questions
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {activeCategoryData.faqs.map((faq, i) => (
                      <FaqItem
                        key={i}
                        faq={faq}
                        isOpen={openFaq === `${openCategory}-${i}`}
                        onToggle={() => setOpenFaq(openFaq === `${openCategory}-${i}` ? null : `${openCategory}-${i}`)}
                      />
                    ))}
                  </div>
                </ScrollReveal>
              )}
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <ScrollReveal variant="fade-up">
          <div style={{
            marginTop: '5rem', textAlign: 'center',
            background: 'linear-gradient(135deg, #0F2446, #1a3a6e)',
            borderRadius: '24px', padding: '3.5rem 2rem',
          }}>
            <MessageCircle size={36} style={{ color: '#C89A45', marginBottom: '1rem' }} />
            <h2 style={{ color: '#fff', fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.75rem' }}>
              Still Have Questions?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '400px', margin: '0 auto 2rem' }}>
              Our licensed engineers are ready to answer any project-specific questions.
            </p>
            <a
              href="tel:+18322346456"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                background: '#C89A45', color: '#fff', padding: '0.9rem 2.25rem',
                borderRadius: '50px', fontWeight: 700, fontSize: '0.9rem',
                textDecoration: 'none', boxShadow: '0 8px 24px rgba(200,154,69,0.35)'
              }}
            >
              Call Us: (832) 234-6456
            </a>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}

function FaqItem({ faq, isOpen, onToggle, badge }) {
  return (
    <div
      style={{
        background: '#fff', borderRadius: '14px',
        border: `1.5px solid ${isOpen ? '#0F2446' : '#e8eef5'}`,
        overflow: 'hidden',
        boxShadow: isOpen ? '0 6px 24px rgba(15,36,70,0.08)' : '0 2px 8px rgba(15,36,70,0.04)',
        transition: 'all 0.2s ease'
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: '100%', textAlign: 'left', padding: '1.1rem 1.25rem',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: '1rem', border: 'none', background: 'none', cursor: 'pointer'
        }}
      >
        <div style={{ flex: 1 }}>
          {badge && (
            <span style={{
              display: 'inline-block', fontSize: '0.65rem', fontWeight: 700,
              color: '#C89A45', background: 'rgba(200,154,69,0.1)',
              padding: '0.15rem 0.5rem', borderRadius: '8px',
              marginBottom: '0.4rem'
            }}>{badge}</span>
          )}
          <p style={{
            margin: 0, fontSize: '0.9rem', fontWeight: 650,
            color: '#0F2446', lineHeight: 1.4
          }}>{faq.question}</p>
        </div>
        <ChevronDown
          size={18}
          style={{
            color: '#8a9bb5', flexShrink: 0,
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
            transition: 'transform 0.25s ease'
          }}
        />
      </button>
      {isOpen && (
        <div style={{
          padding: '0 1.25rem 1.1rem',
          fontSize: '0.875rem', color: '#475569', lineHeight: 1.7,
          borderTop: '1px solid #f1f5f9'
        }}>
          <div style={{ paddingTop: '0.75rem' }}>{faq.answer}</div>
        </div>
      )}
    </div>
  );
}
