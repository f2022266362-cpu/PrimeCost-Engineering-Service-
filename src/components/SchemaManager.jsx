import { useEffect, useId } from 'react';
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
export function buildSchemas({ schemaType, schemaData }) {
  const schemasToInject = [];

  // Base Organization Schema (always present)
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PRIMECOST",
    "url": SITE_URL,
    "logo": `${SITE_URL}/logo.png`,
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+1-832-234-6456",
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
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "440 Louisiana St, Suite 900",
      "addressLocality": "Houston",
      "addressRegion": "TX",
      "postalCode": "77002",
      "addressCountry": "US"
    },
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
    ]
  };
  schemasToInject.push(orgSchema);

  // Base ProfessionalService Schema (always present, targets nationwide US and local markets)
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "PRIMECOST",
    "image": `${SITE_URL}/logo.png`,
    "url": SITE_URL,
    "telephone": "+1-832-234-6456",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "440 Louisiana St, Suite 900",
      "addressLocality": "Houston",
      "addressRegion": "TX",
      "postalCode": "77002",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 29.7615,
      "longitude": -95.3675
    },
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
    "areaServed": ["US", "Houston", "Sugar Land", "Katy", "Spring", "Cypress", "Pearland", "The Woodlands"],
    "sameAs": [
      "https://www.linkedin.com/company/primecost-biz",
      "https://www.facebook.com/primecost-biz"
    ]
  };
  schemasToInject.push(localBusinessSchema);


  // Dynamic Schema Injection based on page type
  if (schemaType && schemaData) {
    switch (schemaType) {
      case 'Service':
        schemasToInject.push({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": schemaData.name,
          "description": schemaData.description,
          "provider": {
            "@type": "LocalBusiness",
            "name": "PRIMECOST",
            "address": orgSchema.address
          },
          "areaServed": "US",
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
          "creator": {
            "@type": "Organization",
            "name": "PRIMECOST"
          },
          "genre": schemaData.buildingType
        });
        break;

      case 'Review':
        schemasToInject.push({
          "@context": "https://schema.org",
          "@type": "Review",
          "itemReviewed": {
            "@type": "LocalBusiness",
            "name": "PRIMECOST",
            "image": orgSchema.logo,
            "address": orgSchema.address
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
          "author": { "@type": "Organization", "name": "PRIMECOST Engineering Team" },
          "publisher": {
            "@type": "Organization",
            "name": "PRIMECOST",
            "logo": { "@type": "ImageObject", "url": `${SITE_URL}/logo.png` }
          },
          ...(schemaData.datePublished ? { "datePublished": schemaData.datePublished } : {}),
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

  if (isServer) {
    collect({
      title: formatTitle(title),
      description: description || DEFAULT_DESC,
      noindex,
      schemas: buildSchemas({ schemaType, schemaData }),
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
    buildSchemas({ schemaType, schemaData }).forEach((schemaObj) => {
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
  }, [title, description, schemaType, schemaData, noindex, instanceId]);

  return null;
}
