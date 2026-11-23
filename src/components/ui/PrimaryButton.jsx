
const VARIANT_CLASS = {
  primary: 'pc-btn--primary',
  secondary: 'pc-btn--accent',
  accent: 'pc-btn--accent',
  outline: 'pc-btn--outline',
  'ghost-light': 'pc-btn--ghost-light',
};

export default function PrimaryButton({
  children,
  onClick = null,
  type = 'button',
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'ghost-light'
  size = 'md',
  className = '',
  style = {},
  icon = null,
  ...rest
}) {
  const classes = [
    'pc-btn',
    VARIANT_CLASS[variant] || VARIANT_CLASS.primary,
    size === 'sm' ? 'pc-btn--sm' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <button type={type} onClick={onClick} style={style} className={classes} {...rest}>
      {children}
      {icon && <span aria-hidden="true" style={{ display: 'inline-flex' }}>{icon}</span>}
    </button>
  );
}
