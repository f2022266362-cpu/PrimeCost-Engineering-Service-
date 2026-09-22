import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Clock, ChevronRight } from 'lucide-react';
import SchemaManager from '../components/SchemaManager';

import articles from '../data/blogArticles';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ['All', 'Architectural', 'Structural', 'MEP', 'BIM', 'Construction'];

  const filteredArticles = articles.filter(art => {
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          art.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || art.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={styles.containerPage}>
      <SchemaManager 
        title="Structural Engineering & Construction Blog" 
        description="Read comprehensive technical articles on architectural design standards, structural engineering calculations, commercial MEP codes, and 3D BIM clash detection workflows."
      />

      {/* Hero Header */}
      <section style={styles.heroSection}>
        <div className="container" style={styles.heroContent}>
          <span style={styles.tag}>AUTHORITY KNOWLEDGE</span>
          <h1 style={styles.title}>Engineering & Construction Guides</h1>
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
                  <h2 style={styles.artCardTitle}><Link to={`/blog/${art.id}`} style={{ color: 'inherit', textDecoration: 'none' }}>{art.title}</Link></h2>
                  <p style={styles.artSummary}>{art.summary}</p>
                  <Link to={`/blog/${art.id}`} style={{ ...styles.readMoreBtn, textDecoration: 'none' }}>
                    Read Technical Guide <ChevronRight size={14} />
                  </Link>
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
