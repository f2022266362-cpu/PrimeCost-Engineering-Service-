// Some service cards use a different id than the page that actually covers them.
// Point those links at the real page so users and Google land on the right content.
const LINK_ALIASES = { 'permits-compliance': 'permit-correction' };

export const serviceHref = (id) => `/services/${LINK_ALIASES[id] || id}`;
