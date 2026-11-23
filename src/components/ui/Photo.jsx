import { useState } from 'react';
import { photoUrl, photoSrcSet } from '../../data/media';

const FALLBACK =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 10"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#D6ECFB"/><stop offset="1" stop-color="#FBF7EE"/></linearGradient></defs><rect width="16" height="10" fill="url(#g)"/></svg>',
  );

/**
 * Responsive photo with graceful fallback: if the remote image fails,
 * it swaps to a local asset so a slot is never left broken.
 */
export default function Photo({
  photo,
  sizes = '100vw',
  width = 1800,
  className = '',
  eager = false,
  fallback = FALLBACK,
  alt,
  ...rest
}) {
  const [failed, setFailed] = useState(false);
  if (!photo) return null;
  return (
    <img
      src={failed ? fallback : photoUrl(photo, width)}
      srcSet={failed ? undefined : photoSrcSet(photo)}
      sizes={sizes}
      alt={alt ?? photo.alt}
      className={className}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={eager ? 'high' : undefined}
      onError={() => setFailed(true)}
      draggable="false"
      {...rest}
    />
  );
}
