import { Fragment } from 'react';

/**
 * Splits plain text into word spans for the masked "rise" reveal.
 * Renders normally on the server; the motion layer animates `.rv-w > span`.
 */
export default function SplitWords({ text, className = '' }) {
  const words = String(text).split(' ');
  return words.map((w, i) => (
    <Fragment key={`${w}-${i}`}>
      <span className={`rv-w ${className}`}><span>{w}</span></span>
      {i < words.length - 1 ? ' ' : null}
    </Fragment>
  ));
}

/** Words that brighten one by one as you scroll through them (scrubbed). */
export function ScrubWords({ text, className = '' }) {
  const words = String(text).split(' ');
  return words.map((w, i) => (
    <Fragment key={`${w}-${i}`}>
      <span className={`sw ${className}`}>{w}</span>
      {i < words.length - 1 ? ' ' : null}
    </Fragment>
  ));
}
