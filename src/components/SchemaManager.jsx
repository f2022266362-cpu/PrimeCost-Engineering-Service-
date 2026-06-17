import { useEffect } from 'react';

/**
 * SchemaManager handles injecting page-specific SEO metadata and JSON-LD scripts into the head.
 * Supported schemas:
 * - Organization (for company profile)
 * - Service (for Geo-Optimized Service Pages)
 * - FAQ (for FAQs)
 * - Review (for Customer Reviews)
 * - Project (for Portfolio Cases)
 */
export default function SchemaManager({ title, description, schemaType, schemaData }) {
  useEffect(() => {
    // 1. Set standard page titles and meta descriptions
    document.title = title ? `${title} | PRIMECOST` : 'PRIMECOST - Engineering, Architectural Design & Pre-Construction';
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description || 'Complete structural, architectural, MEP design, BIM modeling, and pre-construction solutions.');

    // 2. Clear old JSON-LD script tags injected by SchemaManager
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"].primecos-schema');
    existingScripts.forEach(script => script.remove());

    // 3. Create new schema object
    const schemasToInject = [];

    // Base Organization Schema (always present)
    const orgSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "PRIMECOST",
      "url": window.location.origin,
      "logo": `${window.location.origin}/logo.png`,
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
        "streetAddress": "440 Louisiana St",
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
      "image": "https://www.primecost.biz/logo.png",
      "url": "https://www.primecost.biz",
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
            "areaServed": ["US", "CA"],
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

        default:
          break;
      }
    }

    // Inject scripts
    schemasToInject.forEach(schemaObj => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.className = 'primecos-schema';
      script.text = JSON.stringify(schemaObj);
      document.head.appendChild(script);
    });

    // Cleanup scripts on unmount
    return () => {
      const cleanupScripts = document.querySelectorAll('script[type="application/ld+json"].primecos-schema');
      cleanupScripts.forEach(script => script.remove());
    };
  }, [title, description, schemaType, schemaData]);

  return null;
}
