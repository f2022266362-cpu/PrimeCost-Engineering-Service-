
export default function SectionHeading({
  tag = '',
  title,
  subtitle = '',
  align = 'center', // 'left' | 'center'
  dark = false,
  style = {},
}) {
  return (
    <div className={`pc-section-head ${align === 'center' ? 'is-center' : ''}`} style={style}>
      {tag && <span className={`pc-eyebrow ${dark ? 'on-dark' : ''}`}>{tag}</span>}
      <h2 className="pc-section-head__title section-heading-title" style={dark ? { color: '#fff' } : undefined}>
        {title}
      </h2>
      {subtitle && (
        <p className="pc-section-head__sub" style={dark ? { color: 'rgba(255,255,255,0.68)' } : undefined}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
