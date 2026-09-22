// During build-time prerendering, SchemaManager can't touch the real <head>
// (effects don't run on the server). Instead it records what it WOULD have
// set here, and scripts/prerender.mjs writes it into the static HTML.

let collected = null;

export function startCollecting() {
  collected = { title: null, description: null, noindex: false, schemas: [] };
}

export function collect({ title, description, noindex, schemas }) {
  if (!collected) return;
  // Last title/description wins (same behaviour as the browser effect).
  if (title) collected.title = title;
  if (description) collected.description = description;
  if (noindex) collected.noindex = true;
  for (const s of schemas) {
    const key = JSON.stringify(s);
    if (!collected.schemas.some((x) => JSON.stringify(x) === key)) collected.schemas.push(s);
  }
}

export function stopCollecting() {
  const out = collected;
  collected = null;
  return out;
}

// Page data embedded into prerendered HTML (e.g. full blog article JSON),
// so the client doesn't need a second fetch and the server can render it.
export function getPrerenderData() {
  if (typeof window !== 'undefined') return window.__PRERENDER_DATA__ || null;
  return globalThis.__PRERENDER_DATA__ || null;
}
