import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, ArrowLeft, Clock, ChevronRight } from 'lucide-react';
import SchemaManager from '../components/SchemaManager';

const articles = [
  {
    id: 'choose-structural-engineer',
    title: 'How to Choose the Right Structural Engineer for Your Residential Project',
    category: 'Structural',
    readTime: '15 min read',
    summary: 'Selecting the right structural engineer ensures your home is safe, compliant, and structurally sound. Learn the exact criteria, red flags, and interview questions to find the best fit.'
  },
  {
    id: 'permit-approval-mistakes',
    title: '10 Common Mistakes That Delay Building Permit Approval',
    category: 'Construction',
    readTime: '15 min read',
    summary: 'Avoid expensive building permit delays. Explore the most common architectural design errors, structural mismatch flaws, and zoning oversights.'
  },
  {
    id: 'autocad-vs-revit',
    title: 'AutoCAD vs Revit: Which Software Is Better for Construction Projects?',
    category: 'BIM',
    readTime: '12 min read',
    summary: 'A side-by-side comparison of 2D CAD drafting vs 3D intelligent BIM modeling for project timelines, revision workflows, and multidisciplinary coordination.'
  },
  {
    id: 'structural-steel-shop-drawings',
    title: 'Complete Guide to Structural Steel Shop Drawings',
    category: 'Structural',
    readTime: '14 min read',
    summary: 'Master the shop drawings approval process. Learn about fabricator standards, connections engineering, and preventing field rework.'
  },
  {
    id: 'as-built-drawings-importance',
    title: 'What Are As-Built Drawings and Why Are They Important?',
    category: 'Construction',
    readTime: '12 min read',
    summary: 'Explore the critical role of as-built records in renovations, building code compliance, and modern scan-to-BIM digital workflows.'
  },
  {
    id: 'residential-vs-commercial-engineering',
    title: 'Residential vs Commercial Structural Engineering: Key Differences',
    category: 'Structural',
    readTime: '13 min read',
    summary: 'Discover the distinct building codes, load conditions, material specifications, and engineering requirements between housing and commercial builds.'
  },
  {
    id: 'bim-coordination-cost-reduction',
    title: 'How BIM Coordination Reduces Construction Costs and Rework',
    category: 'BIM',
    readTime: '15 min read',
    summary: 'How 3D clash detection, Navisworks reviews, and multi-discipline BIM coordination prevent structural errors and on-site rebuilds.'
  },
  {
    id: 'construction-documents-guide',
    title: 'Everything You Need to Know About Construction Documents',
    category: 'Construction',
    readTime: '12 min read',
    summary: 'A complete pre-construction guide to CSI divisions, engineering specifications, and bid package drawing sets.'
  },
  {
    id: 'foundation-design-basics',
    title: 'Foundation Design Basics: Types, Process, and Engineering Considerations',
    category: 'Structural',
    readTime: '14 min read',
    summary: 'Learn how structural engineers design concrete slab-on-grade, post-tension slabs, and deep foundation piers matching local soil profiles.'
  },
  {
    id: 'outsource-cad-drafting',
    title: 'Top 10 Reasons to Outsource CAD Drafting Services',
    category: 'BIM',
    readTime: '12 min read',
    summary: 'Discover the business benefits of outsourced drafting, BIM modeling scale, Revit family creation, and cost-efficiency.'
  }
];

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [loadingArticleId, setLoadingArticleId] = useState(null);
  const modalRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (selectedArticle && modalRef.current) {
      modalRef.current.scrollTop = 0;
    }
  }, [selectedArticle]);

  const categories = ['All', 'Architectural', 'Structural', 'MEP', 'BIM', 'Construction'];

  const handleSelectArticle = async (art) => {
    setLoadingArticleId(art.id);
    try {
      const res = await fetch(`/content/blog/${art.id}.json`);
      if (!res.ok) throw new Error('Failed to fetch article JSON');
      const data = await res.json();
      setSelectedArticle(data);
    } catch (err) {
      console.error(err);
      // Fallback
      setSelectedArticle(art);
    } finally {
      setLoadingArticleId(null);
    }
  };

  const filteredArticles = articles.filter(art => {
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          art.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || art.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={styles.containerPage}>
      <SchemaManager 
        title="GEO Content Hub & Authority Blog" 
        description="Read comprehensive technical articles on architectural design standards, structural engineering calculations, commercial MEP codes, and 3D BIM clash detection workflows."
      />

      {/* Hero Header */}
      <section style={styles.heroSection}>
        <div className="container" style={styles.heroContent}>
          <span style={styles.tag}>AUTHORITY KNOWLEDGE</span>
          <h1 style={styles.title}>GEO Content Hub</h1>
          <p style={styles.subtitle}>
            Read comprehensive guides on code reviews, framing calculations, MEP load splits, and constructability optimization from our design staff.
          </p>
        </div>
      </section>

      {/* Control Bar: Search & Category Tabs */}
      <section style={styles.controlSection}>
        <div className="container" style={styles.controlsRow}>
          {/* Search Input */}
          <div style={styles.searchBox}>
            <Search size={18} style={styles.searchIcon} />
            <input 
              type="text" 
              placeholder="Search guides, codes, calculations..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={styles.searchInput}
            />
          </div>

          {/* Category Filters */}
          <div style={styles.filtersBox}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  ...styles.catBtn,
                  ...(activeCategory === cat ? styles.catBtnActive : {})
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Listing */}
      <section style={styles.articlesSection}>
        <div className="container">
          {filteredArticles.length > 0 ? (
            <div className="grid-cols-3" style={styles.articlesGrid}>
              {filteredArticles.map((art) => (
                <div key={art.id} style={styles.artCard} className="glass">
                  <div style={styles.artHeader}>
                    <span style={styles.artCat}>{art.category.toUpperCase()}</span>
                    <span style={styles.artTime}><Clock size={12} /> {art.readTime}</span>
                  </div>
                  <h3 style={styles.artCardTitle}>{art.title}</h3>
                  <p style={styles.artSummary}>{art.summary}</p>
                  <button 
                    onClick={() => handleSelectArticle(art)} 
                    style={styles.readMoreBtn}
                    disabled={loadingArticleId === art.id}
                  >
                    {loadingArticleId === art.id ? 'Loading Guide...' : 'Read Technical Guide'} <ChevronRight size={14} />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div style={styles.noResults}>
              <p>No technical guides found matching your query. Please search using alternative pre-construction terms.</p>
            </div>
          )}
        </div>
      </section>

      {/* Full Article Reader Overlay */}
      {selectedArticle && (
        <div style={styles.overlay}>
          {selectedArticle.metaTitle && (
            <SchemaManager
              title={selectedArticle.metaTitle}
              description={selectedArticle.metaDescription}
              schemaType={selectedArticle.faq ? "FAQ" : null}
              schemaData={selectedArticle.faq ? { questions: selectedArticle.faq } : null}
            />
          )}
          <div style={styles.overlayBackdrop} onClick={() => setSelectedArticle(null)} />
          <div ref={modalRef} style={styles.modal} className="animate-fade-in">
            <button style={styles.closeBtn} onClick={() => setSelectedArticle(null)}>
              <ArrowLeft size={18} /> <span>Back to Content Hub</span>
            </button>

            <div style={styles.modalHeader}>
              <span style={styles.modalCat}>{selectedArticle.category.toUpperCase()} | {selectedArticle.readTime}</span>
              <h1 style={styles.modalTitle}>{selectedArticle.title}</h1>
              <div style={styles.metaRow}>
                <span style={styles.metaItem}><User size={14} /> PRIMECOS Technical Staff</span>
                <span style={styles.metaItem}><Calendar size={14} /> Published 2026</span>
              </div>
            </div>

            {/* Dynamically Inject HTML Content */}
            <div 
              className="article-content-body"
              style={styles.articleContent}
              dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
            />

            {/* FAQ Accordion Section */}
            {selectedArticle.faq && selectedArticle.faq.length > 0 && (
              <div style={{ marginTop: '2.5rem', borderTop: '1.5px solid #f1f5f9', paddingTop: '2rem' }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#0F2446', marginBottom: '1.25rem', fontFamily: "'Outfit', sans-serif" }}>
                  Frequently Asked Questions (FAQ)
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {selectedArticle.faq.map((item, index) => (
                    <div key={index} style={{ padding: '1.25rem', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                      <strong style={{ display: 'block', fontSize: '0.95rem', color: '#0F2446', marginBottom: '0.4rem' }}>
                        {item.question}
                      </strong>
                      <p style={{ fontSize: '0.88rem', color: '#475569', margin: 0, lineHeight: '1.5' }}>
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div style={styles.ctaBox}>
              <h4 style={styles.ctaHeading}>Need Scaffolded Design Support on This Topic?</h4>
              <p style={styles.ctaText}>
                We calculate structural load schedules, draw permit blueprints, and coordination sets matching these exact industry standards.
              </p>
              <Link to="/about" style={styles.ctaBtnLink} onClick={() => setSelectedArticle(null)}>
                Connect With Engineering Team
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  containerPage: {
    backgroundColor: '#f8fafc',
    paddingTop: '6.5rem',
    paddingBottom: '4rem',
    minHeight: '100vh',
  },
  heroSection: {
    backgroundColor: '#0f172a',
    color: '#ffffff',
    padding: '3rem 0 2.5rem 0',
  },
  heroContent: {
    maxWidth: '800px',
  },
  tag: {
    fontSize: '0.8rem',
    fontWeight: '700',
    color: '#c5a880',
    letterSpacing: '1.5px',
    display: 'block',
    marginBottom: '0.5rem',
    textTransform: 'uppercase',
  },
  title: {
    fontSize: '2.5rem',
    color: '#ffffff',
    marginBottom: '0.75rem',
    fontFamily: "'Outfit', sans-serif",
  },
  subtitle: {
    fontSize: '1rem',
    color: '#94a3b8',
    lineHeight: '1.5',
  },
  controlSection: {
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #e2e8f0',
    padding: '1.25rem 0',
  },
  controlsRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '1.5rem',
    flexWrap: 'wrap',
  },
  searchBox: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #cbd5e1',
    borderRadius: '8px',
    padding: '0.5rem 1rem',
    backgroundColor: '#f8fafc',
    flex: 1,
    minWidth: '260px',
    maxWidth: '400px',
  },
  searchIcon: {
    color: '#64748b',
    marginRight: '0.5rem',
  },
  searchInput: {
    border: 'none',
    background: 'none',
    outline: 'none',
    fontSize: '0.9rem',
    color: '#0f172a',
    width: '100%',
  },
  filtersBox: {
    display: 'flex',
    gap: '0.5rem',
    flexWrap: 'wrap',
  },
  catBtn: {
    padding: '0.45rem 0.9rem',
    border: '1px solid #e2e8f0',
    borderRadius: '6px',
    backgroundColor: '#f8fafc',
    color: '#475569',
    fontWeight: '600',
    fontSize: '0.8rem',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  catBtnActive: {
    backgroundColor: '#1b3b6f',
    borderColor: '#1b3b6f',
    color: '#ffffff',
  },
  articlesSection: {
    padding: '2.5rem 0',
  },
  articlesGrid: {
    marginTop: '0.5rem',
  },
  artCard: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '1.75rem',
    border: '1px solid #e2e8f0',
    display: 'flex',
    flexDirection: 'column',
    transition: 'all 0.2s',
  },
  artHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '0.75rem',
  },
  artCat: {
    fontSize: '0.75rem',
    fontWeight: '700',
    color: '#c5a880',
    letterSpacing: '1px',
  },
  artTime: {
    fontSize: '0.75rem',
    color: '#64748b',
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
  },
  artCardTitle: {
    fontSize: '1.15rem',
    color: '#0f172a',
    marginBottom: '0.6rem',
    lineHeight: '1.3',
    fontWeight: '700',
  },
  artSummary: {
    fontSize: '0.86rem',
    color: '#475569',
    lineHeight: '1.5',
    marginBottom: '1.25rem',
    flexGrow: 1,
  },
  readMoreBtn: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#1b3b6f',
    fontWeight: '700',
    fontSize: '0.88rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
    padding: 0,
    alignSelf: 'flex-start',
  },
  noResults: {
    textAlign: 'center',
    padding: '3rem 0',
    color: '#64748b',
  },
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
    padding: '1.5rem',
  },
  overlayBackdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(15, 23, 42, 0.65)',
    backdropFilter: 'blur(6px)',
  },
  modal: {
    position: 'relative',
    backgroundColor: '#ffffff',
    width: '100%',
    maxWidth: '800px',
    maxHeight: '90vh',
    borderRadius: '16px',
    overflowY: 'auto',
    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
    padding: '2rem 2.25rem',
    zIndex: 1001,
    display: 'flex',
    flexDirection: 'column',
  },
  closeBtn: {
    alignSelf: 'flex-start',
    backgroundColor: 'transparent',
    border: 'none',
    color: '#1b3b6f',
    fontWeight: '700',
    fontSize: '0.88rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
    marginBottom: '1rem',
    padding: 0,
  },
  modalHeader: {
    borderBottom: '1.5px solid #f1f5f9',
    paddingBottom: '1rem',
    marginBottom: '1.25rem',
  },
  modalCat: {
    fontSize: '0.8rem',
    color: '#c5a880',
    fontWeight: '700',
    letterSpacing: '1px',
    display: 'block',
    marginBottom: '0.5rem',
  },
  modalTitle: {
    fontSize: '2.2rem',
    color: '#0f172a',
    lineHeight: '1.2',
    marginBottom: '0.75rem',
  },
  metaRow: {
    display: 'flex',
    gap: '1.5rem',
    fontSize: '0.82rem',
    color: '#64748b',
  },
  metaItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.3rem',
  },
  articleContent: {
    fontSize: '1rem',
    lineHeight: '1.7',
    color: '#334155',
    flexGrow: 1,
  },
  ctaBox: {
    backgroundColor: '#f8fafc',
    border: '1px solid #e2e8f0',
    borderRadius: '12px',
    padding: '2rem',
    marginTop: '3rem',
    textAlign: 'center',
  },
  ctaHeading: {
    fontSize: '1.15rem',
    color: '#0f172a',
    marginBottom: '0.5rem',
  },
  ctaText: {
    fontSize: '0.9rem',
    color: '#475569',
    lineHeight: '1.5',
    marginBottom: '1.25rem',
  },
  ctaBtnLink: {
    display: 'inline-block',
    backgroundColor: '#1b3b6f',
    color: '#ffffff',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    fontWeight: '600',
    fontSize: '0.9rem',
    boxShadow: '0 4px 6px -1px rgba(27, 59, 111, 0.2)',
  }
};

// Add styles dynamically for article body formatting
if (typeof document !== 'undefined') {
  const articleStyles = `
    .art-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 25px -5px rgba(0,0,0,0.06);
      border-color: #cbd5e1 !important;
    }
    .article-content-body h2 {
      font-size: 1.6rem;
      color: #0f172a;
      margin-top: 2rem;
      margin-bottom: 1rem;
      font-family: 'Outfit', sans-serif;
    }
    .article-content-body h3 {
      font-size: 1.25rem;
      color: #1b3b6f;
      margin-top: 1.5rem;
      margin-bottom: 0.8rem;
      font-family: 'Outfit', sans-serif;
    }
    .article-content-body h4 {
      font-size: 1.05rem;
      color: #0f172a;
      margin-top: 1rem;
      margin-bottom: 0.5rem;
    }
    .article-content-body p {
      margin-bottom: 1.25rem;
    }
    .article-content-body ul {
      margin-bottom: 1.5rem;
      padding-left: 1.5rem;
    }
    .article-content-body li {
      margin-bottom: 0.5rem;
    }
    .article-content-body table {
      width: 100%;
      border-collapse: collapse;
      margin: 1.5rem 0;
    }
    .article-content-body th, .article-content-body td {
      border: 1px solid #cbd5e1;
      padding: 0.75rem;
      text-align: left;
    }
    .article-content-body th {
      background-color: #f1f5f9;
      font-weight: bold;
    }
  `;
  const styleSheet = document.createElement("style");
  styleSheet.innerText = articleStyles;
  document.head.appendChild(styleSheet);
}
