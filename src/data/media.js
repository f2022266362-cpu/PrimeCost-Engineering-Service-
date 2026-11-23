/**
 * Real photography, self-hosted (public/images/photos) so it loads fast and
 * never depends on a third-party CDN. Source: Unsplash photos published under
 * CC0 (public domain) — free for commercial use, no attribution required.
 * Each photo ships at 900px and 1800px wide (WebP).
 */
const P = (slug, alt) => ({ slug, alt });

export const photos = {
  glassCorner:    P('glass-corner', 'Glass-clad building corner against a clear blue sky'),
  skylineSunset:  P('skyline-sunset', 'City skyline at sunset'),
  bridgeCables:   P('bridge-cables', 'Suspension bridge tower and steel cables'),
  deskDrafting:   P('desk-drafting', 'Engineer working at a drafting desk'),
  orangeTowers:   P('orange-towers', 'Glass towers glowing orange, looking up'),
  steelBridge:    P('steel-bridge', 'Steel truss bridge structure'),
  whiteTerraces:  P('white-terraces', 'White stepped concrete facade'),
  officeNight:    P('office-night', 'Office tower with lit floors at night'),
  forestBridge:   P('forest-bridge', 'Arch bridge spanning a forested valley'),
  structureLines: P('structure-lines', 'Structural frame lines of a modern building'),
  facadeGrid:     P('facade-grid', 'Precast facade with a regular window grid'),
  blueTower:      P('blue-tower', 'Curved glass tower against a blue sky'),
  welder:         P('welder', 'Welder at work on a steel connection'),
  glassUp:        P('glass-up', 'Glass skyscraper seen from below'),
  whiteBalconies: P('white-balconies', 'White residential facade with balconies'),
  lightFacade:    P('light-facade', 'Facade with vertical light strips'),
  balconyBlock:   P('balcony-block', 'Residential block with balconies'),
  brickTower:     P('brick-tower', 'Brick high-rise against a blue sky'),
  laSunset:       P('la-sunset', 'Downtown skyline in orange haze'),
  bwTowers:       P('bw-towers', 'Historic towers in black and white'),
  cloudTower:     P('cloud-tower', 'Residential tower under dramatic clouds'),
  finFacade:      P('fin-facade', 'Building facade with vertical fins'),
  goldFacade:     P('gold-facade', 'Angular gold and glass facade'),
  towersUp:       P('towers-up', 'Four towers seen from street level'),
  fogTower:       P('fog-tower', 'Glass towers disappearing into fog'),
  fogTowers:      P('fog-towers', 'High-rises in morning fog'),
  orangeFacade:   P('orange-facade', 'Orange and red industrial facade'),
  laNight:        P('la-night', 'City towers and freeway at night'),
  brooklyn:       P('brooklyn', 'Suspension bridge over a river'),
  cityDown:       P('city-down', 'Looking down between city towers at night'),
  nycSkyline:     P('nyc-skyline', 'Waterfront skyline under a pastel sky'),
  flatiron:       P('flatiron', 'Wedge-shaped historic building against the sky'),
  pyramid:        P('pyramid', 'Angular building facade rising to a point'),
};

export const photoUrl = (p, w = 1800) => `/images/photos/${p.slug}-${w <= 900 ? 900 : 1800}.webp`;

export const photoSrcSet = (p) =>
  `/images/photos/${p.slug}-900.webp 900w, /images/photos/${p.slug}-1800.webp 1800w`;
