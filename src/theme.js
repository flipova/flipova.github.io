import { designTheme } from '@flipova/assets/theme/design-theme';

/** The brand themes, as the registry of @flipova/assets publishes them: `light` and `dark` of the default variant. */
export const THEMES = { light: designTheme.themes.light, dark: designTheme.themes.dark };

const kebab = (name) => name.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`);

/** A role of the registry as a CSS custom property: `cardForeground` becomes `--card-foreground`. */
export function cssVariables(mode) {
  return Object.fromEntries(Object.entries(THEMES[mode].colors).map(([role, value]) => [`--${kebab(role)}`, value]));
}

/** Put the theme of the reader's colour scheme on the page, and follow the scheme when it changes. Returns the stop function. */
export function followColorScheme(root = document.documentElement, query = window.matchMedia('(prefers-color-scheme: dark)')) {
  const apply = () => {
    const mode = query.matches ? 'dark' : 'light';
    for (const [name, value] of Object.entries(cssVariables(mode))) root.style.setProperty(name, value);
    root.dataset.theme = mode;
  };
  apply();
  query.addEventListener('change', apply);
  return () => query.removeEventListener('change', apply);
}
