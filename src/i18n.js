import { createContext, createElement, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { locales, sourceLocale, translator } from '@flipova/languages/developers';

export { locales };
const KEY = 'flipova-locale';

/** The locale to open with: the reader's last choice, else the browser's language, else the source locale. */
export function initialLocale(storage = safeStorage(), languages = typeof navigator === 'undefined' ? [] : navigator.languages ?? []) {
  const saved = storage?.getItem(KEY);
  if (saved && locales.includes(saved)) return saved;
  for (const tag of languages) {
    const language = String(tag).toLowerCase().split('-')[0];
    if (locales.includes(language)) return language;
  }
  return sourceLocale;
}

function safeStorage() {
  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

const Context = createContext({ t: translator(sourceLocale), locale: sourceLocale, setLocale: () => {} });

export function I18nProvider({ children, locale: forced }) {
  const [locale, setLocaleState] = useState(() => forced ?? initialLocale());
  const t = useMemo(() => translator(locale), [locale]);
  const setLocale = useCallback((next) => {
    setLocaleState(next);
    try {
      safeStorage()?.setItem(KEY, next);
    } catch {
      /* the choice is simply not remembered */
    }
  }, []);
  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = t('meta.title');
    document.querySelector('meta[name="description"]')?.setAttribute('content', t('meta.description'));
  }, [locale, t]);
  return createElement(Context.Provider, { value: { t, locale, setLocale } }, children);
}

export const useI18n = () => useContext(Context);
