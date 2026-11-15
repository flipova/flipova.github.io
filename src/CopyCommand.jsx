import { useEffect, useState } from 'react';
import { useI18n } from './i18n.js';

/** A command to run, in monospace, with a button that copies it and says so. */
export default function CopyCommand({ command, large = false }) {
  const { t } = useI18n();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return undefined;
    const id = window.setTimeout(() => setCopied(false), 2200);
    return () => window.clearTimeout(id);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
    } catch {
      /* the command stays selectable on the page */
    }
  };

  return (
    <div className={`command${large ? ' command-large' : ''}`}>
      <code>{command}</code>
      <button type="button" className="icon-button" onClick={copy} aria-label={t('actions.copy')} title={t('actions.copy')}>
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          {copied ? <path d="M5 12.5l4.5 4.5L19 7.5" /> : (<><rect x="8" y="8" width="11" height="11" rx="2.5" /><path d="M5 15V6.5A1.5 1.5 0 0 1 6.5 5H15" /></>)}
        </svg>
      </button>
      <span className="visually-hidden" role="status">{copied ? t('actions.copied') : ''}</span>
    </div>
  );
}
