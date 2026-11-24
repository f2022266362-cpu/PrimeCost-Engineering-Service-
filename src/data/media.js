/**
 * Real photography, self-hosted (public/images/photos) so it loads fast and
 * never depends on a third-party CDN. Source: Unsplash photos published under
 * CC0 (public domain) — free for commercial use, no attribution required.
 * Each photo ships at 900px and 1800px wide (WebP).
 */
const P = (slug, alt, w = 1800, h = 1200) => ({ slug, alt, w, h });

export const photos = {
  glassCorner:    P('glass-corner', 'Glass-clad building corner against a clear blue sky', 1800, 1200),
  skylineSunset:  P('skyline-sunset', 'City skyline at sunset', 1800, 1200),
  bridgeCables:   P('bridge-cables', 'Suspension bridge tower and steel cables', 1800, 1200),
  deskDrafting:   P('desk-drafting', 'Engineer working at a drafting desk', 1800, 1012),
  orangeTowers:   P('orange-towers', 'Glass towers glowing orange, looking up', 1800, 1199),
  steelBridge:    P('steel-bridge', 'Steel truss bridge structure', 1800, 1200),
  whiteTerraces:  P('white-terraces', 'White stepped concrete facade', 1800, 1210),
  officeNight:    P('office-night', 'Office tower with lit floors at night', 1800, 1200),
  forestBridge:   P('forest-bridge', 'Arch bridge spanning a forested valley', 1800, 1348),
  structureLines: P('structure-lines', 'Structural frame lines of a modern building', 1800, 1350),
  facadeGrid:     P('facade-grid', 'Precast facade with a regular window grid', 1800, 1408),
  blueTower:      P('blue-tower', 'Curved glass tower against a blue sky', 1800, 1196),
  welder:         P('welder', 'Welder at work on a steel connection', 1800, 1199),
  glassUp:        P('glass-up', 'Glass skyscraper seen from below', 1800, 1012),
  whiteBalconies: P('white-balconies', 'White residential facade with balconies', 1800, 1201),
  lightFacade:    P('light-facade', 'Facade with vertical light strips', 1800, 1200),
  balconyBlock:   P('balcony-block', 'Residential block with balconies', 1800, 1200),
  brickTower:     P('brick-tower', 'Brick high-rise against a blue sky', 1800, 1200),
  laSunset:       P('la-sunset', 'Downtown skyline in orange haze', 1800, 1249),
  bwTowers:       P('bw-towers', 'Historic towers in black and white', 1800, 1195),
  cloudTower:     P('cloud-tower', 'Residential tower under dramatic clouds', 1800, 1192),
  finFacade:      P('fin-facade', 'Building facade with vertical fins', 1800, 1200),
  goldFacade:     P('gold-facade', 'Angular gold and glass facade', 1800, 1012),
  towersUp:       P('towers-up', 'Four towers seen from street level', 1800, 1200),
  fogTower:       P('fog-tower', 'Glass towers disappearing into fog', 1595, 1277),
  fogTowers:      P('fog-towers', 'High-rises in morning fog', 1800, 2400),
  orangeFacade:   P('orange-facade', 'Orange and red industrial facade', 1800, 1192),
  laNight:        P('la-night', 'City towers and freeway at night', 1800, 1200),
  brooklyn:       P('brooklyn', 'Suspension bridge over a river', 1800, 1066),
  cityDown:       P('city-down', 'Looking down between city towers at night', 1800, 1201),
  nycSkyline:     P('nyc-skyline', 'Waterfront skyline under a pastel sky', 1800, 1200),
  flatiron:       P('flatiron', 'Wedge-shaped historic building against the sky', 1800, 1200),
  pyramid:        P('pyramid', 'Angular building facade rising to a point', 1800, 1199),
};

export const photoUrl = (p, w = 1800) => `/images/photos/${p.slug}-${w <= 900 ? 900 : 1800}.webp`;

export const photoSrcSet = (p) =>
  `/images/photos/${p.slug}-900.webp 900w, /images/photos/${p.slug}-1800.webp 1800w`;
