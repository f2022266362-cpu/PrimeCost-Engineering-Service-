import { useEffect, useId } from 'react';
import { useLocation } from 'react-router-dom';
import { SITE_URL, isServer } from '../seo/site';
import { collect } from '../seo/ssrCollector';

const BRAND = 'PRIMECOST';
const DEFAULT_TITLE = 'PRIMECOST - Engineering, Architectural Design & Pre-Construction';
const DEFAULT_DESC = 'Complete structural, architectural, MEP design, BIM modeling, and pre-construction solutions.';

export function formatTitle(title) {
  if (!title) return DEFAULT_TITLE;
  return title.toUpperCase().includes(BRAND) ? title : `${title} | ${BRAND}`;
}

/**
 * Pure function: builds the JSON-LD objects for a page.
 * Used both in the browser (effect below) and at build time (prerender).
 * Supported schemaType: Service, FAQ, Project, Review, BlogPosting
 */
const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const SEGMENT_LABELS = {
  services: { name: 'Services', path: '/services' },
  blog: { name: 'Blog', path: '/blog' },
  'structural-engineer': { name: 'Service Areas', path: '/service-areas' },
};

function breadcrumbFor(path, title) {
  if (!path || path === '/' || path === '/404' || path.startsWith('/__')) return null;
  const segs = path.replace(/\/+$/, '').split('/').filter(Boolean);
  const pageName = (title || '').split('|')[0].trim() || segs[segs.length - 1];
  const items = [{ name: 'Home', url: `${SITE_URL}/` }];
  if (segs.length > 1 && SEGMENT_LABELS[segs[0]]) {
    const parent = SEGMENT_LABELS[segs[0]];
    items.push({ name: parent.name, url: SITE_URL + parent.path });
  }
  items.push({ name: pageName, url: SITE_URL + path });
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((it, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": it.name,
      "item": it.url
    }))
  };
}

/**
 * Pure function: builds the JSON-LD objects for a page.
 * Used both in the browser (effect below) and at build time (prerender).
 * Supported schemaType: Service, FAQ, Project, Review, BlogPosting
 */
export function buildSchemas({ schemaType, schemaData, path, title }) {
  const schemasToInject = [];

  const address = {
    "@type": "PostalAddress",
    "streetAddress": "440 Louisiana St, Suite 900",
    "addressLocality": "Houston",
    "addressRegion": "TX",
    "postalCode": "77002",
    "addressCountry": "US"
  };

  // One business entity (ProfessionalService is a kind of Organization).
  // Every other schema points back to it by @id so search engines and AI
  // answer engines see a single, consistent PRIMECOST entity.
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": ORG_ID,
    "name": "PRIMECOST",
    "alternateName": "PRIMECOST Engineering Services",
    "url": SITE_URL,
    "logo": { "@type": "ImageObject", "url": `${SITE_URL}/logo.png` },
    "image": `${SITE_URL}/og-default.jpg`,
    "description": "Houston-based structural engineering firm providing PE-stamped structural, MEP and architectural drawings, permit corrections and pre-construction services for contractors, architects and developers in 49 U.S. states.",
    "email": "Frank.moore@primecost.biz",
    "telephone": "+1-832-234-6456",
    "priceRange": "$$",
    "address": address,
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 29.7615,
      "longitude": -95.3675
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+1-832-234-6456",
        "email": "Frank.moore@primecost.biz",
        "contactType": "customer service",
        "areaServed": "US",
        "availableLanguage": "en"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+1-747-223-7816",
        "contactType": "sales",
        "areaServed": "US",
        "availableLanguage": "en"
      }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "16:00"
      }
    ],
    "areaServed": [
      { "@type": "Country", "name": "United States" },
      ...["Houston", "Sugar Land", "Katy", "Spring", "Cypress", "Pearland", "The Woodlands", "Montgomery", "Conroe"]
        .map((name) => ({ "@type": "City", "name": name, "containedInPlace": { "@type": "State", "name": "Texas" } }))
    ],
    "knowsAbout": [
      "Structural engineering", "PE stamped drawings", "MEP engineering", "Architectural design",
      "Foundation design", "Steel connection design", "Shop drawings", "BIM and Revit modeling",
      "Permit corrections", "Civil engineering", "Geotechnical engineering", "Cost estimation"
    ],
    "founder": {
      "@type": "Person",
      "name": "Frank Moore",
      "jobTitle": "CEO"
    },
    "employee": [
      {
        "@type": "Person",
        "name": "Hal Jordan",
        "jobTitle": "President"
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/primecost-biz",
      "https://www.facebook.com/primecost-biz"
    ]
  };
  schemasToInject.push(orgSchema);

  schemasToInject.push({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    "url": SITE_URL,
    "name": "PRIMECOST",
    "inLanguage": "en-US",
    "publisher": { "@id": ORG_ID }
  });

  const crumbs = breadcrumbFor(path, title);
  if (crumbs) schemasToInject.push(crumbs);

  // Dynamic Schema Injection based on page type
  if (schemaType && schemaData) {
    switch (schemaType) {
      case 'Service':
        schemasToInject.push({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": schemaData.name,
          "description": schemaData.description,
          "serviceType": schemaData.name,
          "provider": { "@id": ORG_ID },
          ...(path ? { "url": SITE_URL + path } : {}),
          "areaServed": schemaData.areaServed || "US",
          "offers": {
            "@type": "Offer",
            "priceCurrency": "USD"
          }
        });
        break;
        
      case 'FAQ':
        if (schemaData.questions && schemaData.questions.length > 0) {
          schemasToInject.push({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": schemaData.questions.map(q => ({
              "@type": "Question",
              "name": q.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": q.answer
              }
            }))
          });
        }
        break;

      case 'Project':
        schemasToInject.push({
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          "name": schemaData.name,
          "headline": schemaData.name,
          "description": schemaData.scope || schemaData.description,
          "locationCreated": {
            "@type": "Place",
            "name": schemaData.location
          },
          "creator": { "@id": ORG_ID },
          "genre": schemaData.buildingType
        });
        break;

      case 'Review':
        schemasToInject.push({
          "@context": "https://schema.org",
          "@type": "Review",
          "itemReviewed": {
            "@id": ORG_ID
          },
          "author": {
            "@type": "Person",
            "name": schemaData.author
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": schemaData.rating || "5",
            "bestRating": "5"
          },
          "reviewBody": schemaData.body
        });
        break;

      case 'BlogPosting':
        schemasToInject.push({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": schemaData.headline,
          "description": schemaData.description,
          "mainEntityOfPage": schemaData.url,
          "author": { "@type": "Organization", "@id": ORG_ID, "name": "PRIMECOST Engineering Team", "url": `${SITE_URL}/about` },
          "publisher": { "@id": ORG_ID },
          "image": schemaData.image || `${SITE_URL}/og-default.jpg`,
          "inLanguage": "en-US",
          ...(schemaData.datePublished ? { "datePublished": schemaData.datePublished, "dateModified": schemaData.dateModified || schemaData.datePublished } : {}),
          ...(schemaData.keywords ? { "keywords": schemaData.keywords } : {})
        });
        break;

      default:
        break;
    }
  }

  return schemasToInject;
}

/**
 * SchemaManager sets page title, meta description, robots, canonical and JSON-LD.
 * - In the browser: updates <head> via an effect (scoped per instance, so two
 *   SchemaManagers on one page no longer delete each other's schema).
 * - During prerender: records the same data for scripts/prerender.mjs.
 */
export default function SchemaManager({ title, description, schemaType, schemaData, noindex = false }) {
  const instanceId = useId();
  const { pathname } = useLocation();
  const path = pathname.replace(/\/+$/, '') || '/';

  if (isServer) {
    collect({
      title: formatTitle(title),
      description: description || DEFAULT_DESC,
      noindex,
      schemas: buildSchemas({ schemaType, schemaData, path, title }),
    });
  }

  useEffect(() => {
    document.title = formatTitle(title);

    const setMeta = (attr, key, value) => {
      let el = document.head.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    };

    const desc = description || DEFAULT_DESC;
    setMeta('name', 'description', desc);
    setMeta('property', 'og:title', formatTitle(title));
    setMeta('property', 'og:description', desc);
    setMeta('name', 'robots', noindex ? 'noindex, follow' : 'index, follow');

    const path = window.location.pathname.replace(/\/+$/, '') || '/';
    const canonicalUrl = SITE_URL + (path === '/' ? '/' : path);
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);
    setMeta('property', 'og:url', canonicalUrl);

    // Remove JSON-LD baked in by the prerender (the live page now owns <head>)
    document.querySelectorAll('script[type="application/ld+json"].prerender-schema').forEach((el) => el.remove());

    // Inject this instance's schema, skipping anything already on the page
    const existing = new Set(
      [...document.querySelectorAll('script[type="application/ld+json"].primecos-schema')].map((el) => el.text)
    );
    const added = [];
    buildSchemas({ schemaType, schemaData, path, title }).forEach((schemaObj) => {
      const text = JSON.stringify(schemaObj);
      if (existing.has(text)) return;
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.className = 'primecos-schema';
      script.dataset.owner = instanceId;
      script.text = text;
      document.head.appendChild(script);
      added.push(script);
    });

    // Cleanup only the scripts THIS instance added
    return () => added.forEach((el) => el.remove());
  }, [title, description, schemaType, schemaData, noindex, instanceId, path]);

  return null;
}
