// Build-time renderer used by scripts/prerender.mjs (never shipped to browsers).
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from './App.jsx';
import { startCollecting, stopCollecting } from './seo/ssrCollector';
import { servicesData } from './pages/ServicePage';
import { industriesData } from './pages/IndustryPage';
import articles from './data/blogArticles';

// Every indexable URL on the site. New pages/services/posts are picked up automatically.
export function getRoutes() {
  const staticRoutes = [
    '/', '/services', '/about', '/portfolio', '/blog', '/pricing', '/faq',
    '/service-areas', '/career', '/founder',
    '/privacy-policy', '/terms-conditions', '/refund-policy',
  ];
  return [
    ...staticRoutes,
    ...Object.keys(servicesData).map((id) => `/services/${id}`),
    ...Object.keys(industriesData).map((id) => `/industries/${id}`),
    ...articles.map((a) => `/blog/${a.id}`),
  ];
}

export function render(url, data = null) {
  globalThis.__PRERENDER_DATA__ = data;
  startCollecting();
  const html = renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </React.StrictMode>
  );
  const head = stopCollecting();
  globalThis.__PRERENDER_DATA__ = null;
  return { html, head };
}
