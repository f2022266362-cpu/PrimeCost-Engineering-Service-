// Tiny wrapper around GA4 so the app never crashes if gtag is blocked (ad blockers etc.)
export function trackEvent(name, params = {}) {
  try {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', name, params);
    }
  } catch {
    /* ignore tracking errors */
  }
}
