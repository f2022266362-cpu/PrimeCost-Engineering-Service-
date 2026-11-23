# PRIMECOST — Design System (Master) · v2 "Calm Electric"

Clean, calm and premium, with motion. Cream-white base, light-blue calm,
electric-green signal, spark-orange action, deep ink for type and dark stages.

## Color
| Token | Hex | Use |
|---|---|---|
| `--cream` | #FBF7EE | Page background |
| `--cream-2` | #F3ECDD | Alternate surfaces |
| `--ink` | #0B1B2B | Type, dark stages, primary buttons |
| `--sky` / `--sky-2` | #D6ECFB / #A8D4F5 | Calm bands, hover fills, testimonials |
| `--sky-deep` | #1F6FB2 | Serif accent words, links, focus ring |
| `--volt` | #2EF58A | Live dots, highlights, progress — fill only (never text on light) |
| `--spark` | #FF5A1F | Primary CTA fill (ink text on it) |
| `--spark-text` | #C2410C | Orange as text on light (AA) |

## Type (self-hosted @fontsource)
- Display: **Bricolage Grotesque** variable — 600–750, tight tracking, width 80–92
- Accent: **Newsreader Italic** — single words inside headlines
- Text/UI: **Hanken Grotesk**
- Labels: **IBM Plex Mono** uppercase

## Shape
Radii 10 / 14 / 20 / 28 / 40 px and full pills. Soft shadows only (`--shadow-1/2`).

## Motion (GSAP + ScrollTrigger + Lenis)
- `src/motion/MotionLayer.jsx` — smooth scroll, first-visit intro counter, curtain page
  transitions, custom cursor (+ `data-cursor="Label"`), magnetic buttons (`data-magnetic`).
- Declarative reveals: `data-split` (word rise; wrap words with `<SplitWords/>`),
  `data-reveal` (fade-rise), `data-clip` (rounded clip reveal), `data-parallax="0.1"`,
  `data-count="49"`, `data-scrub-words` (+ `<ScrubWords/>`).
- Home choreography lives in `src/pages/Home.jsx` (hero window expand, pinned
  drawing→reality, horizontal projects, process rail).
- Everything respects `prefers-reduced-motion`.

## Imagery
Real photography via `src/data/media.js` + `<Photo/>` (responsive srcset, graceful fallback).
