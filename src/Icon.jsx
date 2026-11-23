const PATHS = {
  book: <><path d="M5 5.5A2.5 2.5 0 0 1 7.5 3H19v15H7.5A2.5 2.5 0 0 0 5 20.5z" /><path d="M5 20.5A2.5 2.5 0 0 0 7.5 23H19" /></>,
  code: <><path d="M8.5 7L3.5 12l5 5" /><path d="M15.5 7l5 5-5 5" /></>,
  package: <><path d="M12 3l8 4.2v9.6L12 21l-8-4.2V7.2z" /><path d="M4.3 7.4L12 11.5l7.7-4.1" /><path d="M12 11.5V21" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3c2.6 2.7 2.6 15.3 0 18" /><path d="M12 3c-2.6 2.7-2.6 15.3 0 18" /></>,
};

/** A small line icon. Decorative: the text next to it carries the meaning. */
export default function Icon({ name, size = 16 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {PATHS[name]}
    </svg>
  );
}
