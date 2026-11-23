/**
 * Hand-built structural elevation (SVG) used as a motion graphic.
 * Every stroke has pathLength="1" so GSAP can "draw" it with strokeDashoffset.
 * Classes: .bp-line (primary), .bp-thin (secondary), .bp-dim (dimensions),
 * .bp-text (annotations), .bp-accent (highlight strokes).
 */
const floors = [118, 156, 194, 232, 270, 308, 346, 384, 422];
const cols = [255, 310, 365];
const wingFloors = [298, 336, 374, 412];

export default function BlueprintDrawing({ className = '', idPrefix = 'bp' }) {
  return (
    <svg
      className={`bp ${className}`}
      viewBox="0 0 640 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Animated structural elevation drawing of a mid-rise building with a tower crane"
    >
      <defs>
        <pattern id={`${idPrefix}-grid`} width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0H0V20" className="bp-grid" />
        </pattern>
        <marker id={`${idPrefix}-tick`} viewBox="0 0 10 10" refX="5" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M1 9L9 1" className="bp-tickmark" />
        </marker>
      </defs>

      <rect width="640" height="520" fill={`url(#${idPrefix}-grid)`} className="bp-gridfill" />

      {/* Ground + foundations */}
      <path pathLength="1" className="bp-line" d="M20 460H620" />
      {[200, ...cols, 420, 490, 560].map((x) => (
        <path key={`p${x}`} pathLength="1" className="bp-thin" d={`M${x} 460V492M${x - 12} 492H${x + 12}`} />
      ))}
      <path pathLength="1" className="bp-thin bp-dash" d="M20 478H620" />

      {/* Tower */}
      <path pathLength="1" className="bp-line" d="M200 460V80H420V460" />
      <path pathLength="1" className="bp-line" d="M280 80V56H340V80" />
      {floors.map((y) => (
        <path key={`f${y}`} pathLength="1" className="bp-thin" d={`M200 ${y}H420`} />
      ))}
      {cols.map((x) => (
        <path key={`c${x}`} pathLength="1" className="bp-thin" d={`M${x} 80V460`} />
      ))}

      {/* Braced bay */}
      {floors.slice(0, -1).map((y, i) => (
        <path key={`b${y}`} pathLength="1" className="bp-accent" d={`M200 ${y}L255 ${floors[i + 1]}M255 ${y}L200 ${floors[i + 1]}`} />
      ))}

      {/* Windows */}
      {floors.slice(0, -1).map((y) =>
        [310, 365].map((x) => (
          <path key={`w${x}-${y}`} pathLength="1" className="bp-thin" d={`M${x + 10} ${y + 9}H${x + 45}V${y + 30}H${x + 10}Z`} />
        )),
      )}

      {/* Wing */}
      <path pathLength="1" className="bp-line" d="M420 260H560V460" />
      {wingFloors.map((y) => (
        <path key={`wf${y}`} pathLength="1" className="bp-thin" d={`M420 ${y}H560`} />
      ))}
      <path pathLength="1" className="bp-thin" d="M490 260V460" />
      <path pathLength="1" className="bp-accent" d="M420 260L490 298L560 260" />

      {/* Column grid bubbles */}
      {[200, ...cols, 420].map((x, i) => (
        <g key={`g${x}`}>
          <path pathLength="1" className="bp-dim" d={`M${x} 80V30`} strokeDasharray="0" />
          <circle cx={x} cy="20" r="10" pathLength="1" className="bp-thin" />
          <text x={x} y="24" textAnchor="middle" className="bp-text">{String.fromCharCode(65 + i)}</text>
        </g>
      ))}

      {/* Vertical dimension */}
      <path pathLength="1" className="bp-dim" d="M170 80V460" markerStart={`url(#${idPrefix}-tick)`} markerEnd={`url(#${idPrefix}-tick)`} />
      <text x="160" y="270" textAnchor="middle" className="bp-text" transform="rotate(-90 160 270)">38&apos;-0&quot; T.O. PARAPET</text>

      {/* Level datums */}
      {[
        [80, 'ROOF  +38.00'],
        [270, 'L5  +19.00'],
        [460, 'L1  ±0.00'],
      ].map(([y, t]) => (
        <g key={`l${y}`}>
          <path pathLength="1" className="bp-dim" d={`M566 ${y}H600`} />
          <path pathLength="1" className="bp-accent" d={`M600 ${y}l-6 -8h12z`} />
          <text x="604" y={y - 12} textAnchor="end" className="bp-text">{t}</text>
        </g>
      ))}

      {/* Tower crane */}
      <path pathLength="1" className="bp-line" d="M100 460V40M120 460V40" />
      <path
        pathLength="1"
        className="bp-thin"
        d="M100 440L120 420L100 400L120 380L100 360L120 340L100 320L120 300L100 280L120 260L100 240L120 220L100 200L120 180L100 160L120 140L100 120L120 100L100 80L120 60L100 40"
      />
      <path pathLength="1" className="bp-line" d="M50 40H330M70 40V28H130V40" />
      <path pathLength="1" className="bp-thin" d="M110 14L50 40M110 14L330 40M110 14V40" />
      <path pathLength="1" className="bp-accent" d="M290 40V150" />
      <path pathLength="1" className="bp-accent" d="M282 150H298V162H282Z" />
    </svg>
  );
}
