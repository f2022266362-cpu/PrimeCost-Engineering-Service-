// Build-time prerender: turns the React SPA into real HTML pages Google can read.
// Runs after `vite build` (client) and `vite build --ssr` (server bundle).
// Output per route:  dist/index.html, dist/about.html, dist/services/structural-engineering.html ...
// Also writes: dist/404.html, dist/sitemap.xml, dist/robots.txt
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const SITE_URL = 'https://www.primecost.biz';

const { render, getRoutes } = await import(pathToFileURL(path.join(root, 'dist-server', 'entry-server.js')).href);
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');

const esc = (s = '') => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const safeJson = (o) => JSON.stringify(o).replace(/</g, '\\u003c');

function buildPage(url, { html, head }, data) {
  const canonical = SITE_URL + (url === '/' ? '/' : url);
  const tags = [
    `<title>${esc(head.title)}</title>`,
    `<meta name="description" content="${esc(head.description)}" />`,
    `<meta name="robots" content="${head.noindex ? 'noindex, follow' : 'index, follow'}" />`,
    head.noindex ? '' : `<link rel="canonical" href="${canonical}" />`,
    `<meta property="og:type" content="${url.startsWith('/blog/') ? 'article' : 'website'}" />`,
    `<meta property="og:site_name" content="PRIMECOST" />`,
    `<meta property="og:title" content="${esc(head.title)}" />`,
    `<meta property="og:description" content="${esc(head.description)}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:image" content="${SITE_URL}/logo.png" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    ...head.schemas.map((s) => `<script type="application/ld+json" class="prerender-schema">${safeJson(s)}</script>`),
    data ? `<script>window.__PRERENDER_DATA__=${safeJson(data)}</script>` : '',
  ].filter(Boolean).join('\n    ');

  return template
    .replace(/<title>[\s\S]*?<\/title>/, '')
    .replace(/<meta name="description"[^>]*>/, '')
    .replace('</head>', `    ${tags}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);
}

function outFile(url) {
  if (url === '/') return path.join(dist, 'index.html');
  return path.join(dist, url.slice(1) + '.html');
}

const routes = getRoutes();
const indexable = [];

for (const url of routes) {
  let data = null;
  const blog = url.match(/^\/blog\/([^/]+)$/);
  if (blog) {
    const f = path.join(root, 'public', 'content', 'blog', `${blog[1]}.json`);
    if (fs.existsSync(f)) data = { blogPost: JSON.parse(fs.readFileSync(f, 'utf8')) };
  }
  const result = render(url, data);
  const file = outFile(url);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, buildPage(url, result, data));
  if (!result.head.noindex) indexable.push(url);
  console.log(`  prerendered ${url}${result.head.noindex ? '  (noindex)' : ''}`);
}

// 404 page
fs.writeFileSync(path.join(dist, '404.html'), buildPage('/404', render('/__not-found__'), null));

// sitemap.xml (only indexable pages)
const today = new Date().toISOString().slice(0, 10);
const priority = (u) => (u === '/' ? '1.0' : u.startsWith('/services') ? '0.9' : u.startsWith('/industries') ? '0.8' : u.startsWith('/blog/') ? '0.7' : ['/privacy-policy', '/terms-conditions', '/refund-policy'].includes(u) ? '0.3' : '0.6');
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexable.map((u) => `  <url><loc>${SITE_URL}${u === '/' ? '/' : u}</loc><lastmod>${today}</lastmod><priority>${priority(u)}</priority></url>`).join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap);

// robots.txt
fs.writeFileSync(path.join(dist, 'robots.txt'), `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`);

fs.rmSync(path.join(root, 'dist-server'), { recursive: true, force: true });
console.log(`\n✓ ${routes.length} pages prerendered, ${indexable.length} in sitemap.xml`);
