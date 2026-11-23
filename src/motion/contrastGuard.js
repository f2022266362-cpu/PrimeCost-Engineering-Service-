/**
 * Legacy pages set colours inline and reuse the same accent on light and dark
 * panels. After each route renders, nudge those few accent colours to the
 * accessible variant for the background they actually sit on (WCAG AA).
 */
const parse = (c) => {
  const m = c && c.match(/rgba?\(([^)]+)\)/);
  if (!m) return null;
  const [r, g, b, a = 1] = m[1].split(',').map((v) => parseFloat(v));
  return { r, g, b, a };
};

const lum = ({ r, g, b }) => {
  const f = (v) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
};

const same = (c, [r, g, b]) => Math.abs(c.r - r) < 3 && Math.abs(c.g - g) < 3 && Math.abs(c.b - b) < 3;

const bgOf = (el) => {
  for (let n = el; n && n.nodeType === 1; n = n.parentElement) {
    const c = parse(getComputedStyle(n).backgroundColor);
    if (c && c.a > 0.6) return c;
  }
  return { r: 251, g: 247, b: 238, a: 1 }; // cream page
};

const LIGHT_ORANGE = [[255, 138, 92], [255, 90, 31]];
const DARK_ORANGE = [177, 58, 11];
const SLATE = [[94, 107, 122], [79, 91, 106], [90, 107, 132]];
const WHITE = [255, 255, 255];

export function guardContrast(root = document.body) {
  if (typeof window === 'undefined') return;
  root.querySelectorAll('[style*="color"]').forEach((el) => {
    const fg = parse(getComputedStyle(el).color);
    if (!fg) return;
    const bg = bgOf(el);
    const bgL = lum(bg);
    if (bgL > 0.4 && LIGHT_ORANGE.some((c) => same(fg, c))) el.style.color = '#B13A0B';
    else if (bgL < 0.2 && same(fg, DARK_ORANGE)) el.style.color = '#FF8A5C';
    else if (bgL < 0.2 && SLATE.some((c) => same(fg, c))) el.style.color = '#AFC0D4';
    else if (same(fg, WHITE) && LIGHT_ORANGE.some((c) => same(bg, c))) el.style.color = '#0B1B2B';
  });
}
