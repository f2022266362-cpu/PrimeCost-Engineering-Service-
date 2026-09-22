import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import SchemaManager from '../components/SchemaManager';
import articles from '../data/blogArticles';
import { getPrerenderData } from '../seo/ssrCollector';
import { SITE_URL } from '../seo/site';
import NotFound from './NotFound';

// Each article is a real, crawlable URL: /blog/<id>
export default function BlogPost() {
  const { slug } = useParams();
  const meta = articles.find((a) => a.id === slug);

  // Prerendered pages embed the full article, so no fetch is needed on first load.
  const initial = (() => {
    const d = getPrerenderData();
    return d && d.blogPost && d.blogPost.id === slug ? d.blogPost : null;
  })();
  const [post, setPost] = useState(initial);

  useEffect(() => {
    if (!meta || (post && post.id === slug)) return;
    let cancelled = false;
    fetch(`/content/blog/${slug}.json`)
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error('not found'))))
      .then((d) => { if (!cancelled) setPost(d); })
      .catch(() => { if (!cancelled) setPost({ ...meta, content: `<p>${meta.summary}</p>` }); });
    return () => { cancelled = true; };
  }, [slug, meta, post]);

  if (!meta) return <NotFound />;

  const data = post || meta;
  const url = `${SITE_URL}/blog/${slug}`;

  return (
    <div style={styles.page}>
      <SchemaManager
        title={data.metaTitle || data.title}
        description={data.metaDescription || data.summary}
        schemaType="BlogPosting"
        schemaData={{
          headline: data.title,
          description: data.metaDescription || data.summary,
          url,
          keywords: data.focusKeyword,
        }}
      />
      {data.faq && data.faq.length > 0 && (
        <SchemaManager
          title={data.metaTitle || data.title}
          description={data.metaDescription || data.summary}
          schemaType="FAQ"
          schemaData={{ questions: data.faq }}
        />
      )}

      <article className="container" style={styles.article}>
        <Link to="/blog" style={styles.back}>
          <ArrowLeft size={18} /> <span>All Guides</span>
        </Link>

        <header style={styles.header}>
          <span style={styles.cat}>{data.category?.toUpperCase()} | {data.readTime}</span>
          <h1 style={styles.title}>{data.title}</h1>
          <div style={styles.metaRow}>
            <span style={styles.metaItem}><User size={14} /> PRIMECOST Engineering Team</span>
            <span style={styles.metaItem}><Calendar size={14} /> 2026</span>
          </div>
        </header>

        {post && post.content ? (
          <div
            className="article-content-body"
            style={styles.content}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        ) : (
          <p style={styles.content}>{meta.summary}</p>
        )}

        {data.faq && data.faq.length > 0 && (
          <section style={styles.faqSection}>
            <h2 style={styles.faqHeading}>Frequently Asked Questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {data.faq.map((item, i) => (
                <div key={i} style={styles.faqItem}>
                  <h3 style={styles.faqQ}>{item.question}</h3>
                  <p style={styles.faqA}>{item.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <aside style={styles.ctaBox}>
          <h2 style={styles.ctaHeading}>Need PE-stamped drawings for your project?</h2>
          <p style={styles.ctaText}>
            PRIMECOST provides structural, MEP and architectural engineering with PE licensing across 49 states.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/services/structural-engineering" style={styles.ctaBtn}>Structural Engineering</Link>
            <Link to="/services/permit-correction" style={styles.ctaBtnAlt}>Permit Corrections</Link>
          </div>
        </aside>
      </article>
    </div>
  );
}

const styles = {
  page: { backgroundColor: '#f8fafc', paddingTop: '6.5rem', paddingBottom: '4rem', minHeight: '100vh' },
  article: {
    backgroundColor: '#ffffff', maxWidth: '820px', borderRadius: '16px',
    boxShadow: '0 10px 30px -12px rgba(0,0,0,0.15)', padding: '2rem 2.25rem', marginTop: '2rem',
  },
  back: {
    color: '#1b3b6f', fontWeight: '700', fontSize: '0.88rem', display: 'inline-flex',
    alignItems: 'center', gap: '0.4rem', marginBottom: '1rem', textDecoration: 'none',
  },
  header: { borderBottom: '1.5px solid #f1f5f9', paddingBottom: '1rem', marginBottom: '1.25rem' },
  cat: { fontSize: '0.8rem', color: '#c5a880', fontWeight: '700', letterSpacing: '1px', display: 'block', marginBottom: '0.5rem' },
  title: { fontSize: '2.2rem', color: '#0f172a', lineHeight: '1.2', marginBottom: '0.75rem' },
  metaRow: { display: 'flex', gap: '1.5rem', fontSize: '0.82rem', color: '#64748b', flexWrap: 'wrap' },
  metaItem: { display: 'flex', alignItems: 'center', gap: '0.3rem' },
  content: { fontSize: '1rem', lineHeight: '1.7', color: '#334155' },
  faqSection: { marginTop: '2.5rem', borderTop: '1.5px solid #f1f5f9', paddingTop: '2rem' },
  faqHeading: { fontSize: '1.4rem', fontWeight: '800', color: '#0F2446', marginBottom: '1.25rem', fontFamily: "'Outfit', sans-serif" },
  faqItem: { padding: '1.25rem', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' },
  faqQ: { fontSize: '0.95rem', color: '#0F2446', margin: '0 0 0.4rem 0' },
  faqA: { fontSize: '0.88rem', color: '#475569', margin: 0, lineHeight: '1.5' },
  ctaBox: {
    backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px',
    padding: '2rem', marginTop: '3rem', textAlign: 'center',
  },
  ctaHeading: { fontSize: '1.15rem', color: '#0f172a', marginBottom: '0.5rem' },
  ctaText: { fontSize: '0.9rem', color: '#475569', lineHeight: '1.5', marginBottom: '1.25rem' },
  ctaBtn: {
    backgroundColor: '#0F2446', color: '#fff', padding: '0.7rem 1.4rem', borderRadius: '8px',
    fontWeight: '700', textDecoration: 'none', fontSize: '0.9rem',
  },
  ctaBtnAlt: {
    backgroundColor: 'transparent', color: '#0F2446', border: '1.5px solid #0F2446', padding: '0.7rem 1.4rem',
    borderRadius: '8px', fontWeight: '700', textDecoration: 'none', fontSize: '0.9rem',
  },
};
