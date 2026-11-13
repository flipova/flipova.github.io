import { describe, expect, it } from 'vitest';
import { renderToString } from 'react-dom/server';
import { dictionaries, locales, sourceLocale } from '@flipova/languages/developers';
import App from '../src/App.jsx';
import { I18nProvider, initialLocale } from '../src/i18n.js';
import { hero, projectById, projects, services, site } from '../src/links.js';
import { fetchReleases, parseReleases } from '../src/releases.js';
import { THEMES, cssVariables } from '../src/theme.js';

const lookup = (dict, path) => path.split('.').reduce((acc, part) => acc?.[part], dict);
const page = (locale) => renderToString(<I18nProvider locale={locale}><App /></I18nProvider>);
const allAddresses = () => [
  ...Object.values(site),
  ...projects.flatMap((p) => [p.docs, p.source, p.npm].filter(Boolean)),
  ...services.map((s) => s.url),
];

describe('links.yaml shows only what is public', () => {
  it('names each project and service once', () => {
    for (const list of [projects, services]) {
      const ids = list.map((x) => x.id);
      expect(new Set(ids).size).toBe(ids.length);
    }
  });

  it('only holds https addresses', () => {
    for (const url of allAddresses()) expect(url).toMatch(/^https:\/\//);
  });

  it('only lists open source repositories of the flipova organization, by their public address', () => {
    for (const p of projects) {
      expect(p.source, p.id).toMatch(/^https:\/\/github\.com\/flipova\/[\w.-]+$/);
      if (p.releases) expect(p.source, p.id).toBe(`https://github.com/${p.releases}`);
    }
  });

  it('is installable from a public registry: the command names the package', () => {
    for (const p of projects) {
      if (p.install) expect(p.install, p.id).toBe(`npm install ${p.package}`);
      if (p.npm) expect(p.npm, p.id).toBe(`https://www.npmjs.com/package/${p.package}`);
    }
  });

  it('shows the install command of the hero project, which has a documentation site', () => {
    const project = projectById(hero.project);
    expect(project.install).toBeTruthy();
    expect(project.docs).toBeTruthy();
  });

  it('names nothing private: no private repository, no internal package, no access label', () => {
    const everything = JSON.stringify({ projects, services, site }) + JSON.stringify(dictionaries);
    for (const word of ['flipova.assets', 'flipova.languages', 'flipova.frontend', 'flipova.backend', 'flipova.accounts', 'ORG_READ_TOKEN']) {
      expect(everything, word).not.toContain(word);
    }
    // what a reader sees and follows: texts and addresses (the files the build copies are not the page's content)
    const readable = (html) => html.replace(/ (src|srcSet)="[^"]*"/g, '');
    for (const locale of locales) expect(readable(page(locale))).not.toMatch(/flipova\.(assets|languages|frontend|backend|accounts)/);
  });
});

describe('the words', () => {
  it.each(locales)('%s has a name and a summary for every project and service', (locale) => {
    const dict = dictionaries[locale];
    for (const p of projects) {
      expect(lookup(dict, `projects.${p.id}.name`), `${locale} ${p.id}`).toBeTruthy();
      expect(lookup(dict, `projects.${p.id}.summary`), `${locale} ${p.id}`).toBeTruthy();
    }
    for (const s of services) {
      expect(lookup(dict, `services.${s.id}.name`), `${locale} ${s.id}`).toBeTruthy();
      expect(lookup(dict, `services.${s.id}.summary`), `${locale} ${s.id}`).toBeTruthy();
    }
  });

  it('opens in the saved language, then the browser one, then the source locale', () => {
    const store = (value) => ({ getItem: () => value });
    expect(initialLocale(store('en'), ['fr-FR'])).toBe('en');
    expect(initialLocale(store(null), ['de-DE', 'en-GB'])).toBe('en');
    expect(initialLocale(store('xx'), ['fr-CA'])).toBe('fr');
    expect(initialLocale(null, ['ja'])).toBe(sourceLocale);
  });
});

describe('the page', () => {
  it.each(locales)('renders every project and service in %s, with its links', (locale) => {
    const html = page(locale);
    for (const p of projects) {
      expect(html, p.id).toContain(dictionaries[locale].projects[p.id].name);
      expect(html, p.id).toContain(`href="${p.source}"`);
      if (p.docs) expect(html, p.id).toContain(`href="${p.docs}"`);
      if (p.install) expect(html, p.id).toContain(p.install);
      if (p.releases) expect(html, p.id).toContain(`href="https://github.com/${p.releases}/releases"`);
    }
    for (const s of services) expect(html, s.id).toContain(`href="${s.url}"`);
  });

  it('has one h1, a skip link, a main landmark and a labelled language switch', () => {
    const html = page('fr');
    expect(html.match(/<h1/g)).toHaveLength(1);
    expect(html).toContain('href="#content"');
    expect(html).toContain('<main id="content"');
    expect(html).toContain('aria-pressed="true"');
    expect(html).toMatch(/<nav aria-label="Langue"/);
  });
});

describe('the releases', () => {
  const release = (tag, extra = {}) => ({ tag_name: tag, name: tag, html_url: `https://github.com/flipova/foundation/releases/tag/${tag}`, published_at: '2026-11-10T10:00:00Z', prerelease: false, draft: false, ...extra });

  it('keeps tag, name, date, prerelease and address, drops drafts and foreign addresses, and caps the list', () => {
    const json = [release('v2.4.4'), release('v2.4.4-rc.1', { prerelease: true }), release('v0', { draft: true }), release('v1', { html_url: 'https://evil.example/x' }), release('v3'), release('v4'), release('v5'), release('v6')];
    const parsed = parseReleases(json, 3);
    expect(parsed.map((r) => r.tag)).toEqual(['v2.4.4', 'v2.4.4-rc.1', 'v3']);
    expect(parsed[1].prerelease).toBe(true);
    expect(parseReleases({ message: 'rate limit' })).toEqual([]);
  });

  it('asks GitHub once, then answers from the session cache for ten minutes', async () => {
    const store = new Map();
    const storage = { getItem: (k) => store.get(k) ?? null, setItem: (k, v) => store.set(k, v) };
    let calls = 0;
    const fetchImpl = async (url) => { calls += 1; expect(url).toBe('https://api.github.com/repos/flipova/foundation/releases?per_page=5'); return { ok: true, json: async () => [release('v2.4.4')] }; };
    expect((await fetchReleases('flipova/foundation', { fetchImpl, storage, now: 1000 }))[0].tag).toBe('v2.4.4');
    await fetchReleases('flipova/foundation', { fetchImpl, storage, now: 1000 + 60_000 });
    expect(calls).toBe(1);
    await fetchReleases('flipova/foundation', { fetchImpl, storage, now: 1000 + 11 * 60_000 });
    expect(calls).toBe(2);
  });

  it('fails loudly when GitHub does not answer, so the page can say so', async () => {
    await expect(fetchReleases('flipova/foundation', { fetchImpl: async () => ({ ok: false, status: 403 }) })).rejects.toThrow(/403/);
  });
});

describe('the theme', () => {
  it('turns the registry roles into custom properties', () => {
    const vars = cssVariables('light');
    expect(vars['--primary']).toBe(THEMES.light.colors.primary);
    expect(vars['--card-foreground']).toBe(THEMES.light.colors.cardForeground);
    expect(vars['--background']).not.toBe(cssVariables('dark')['--background']);
  });

  it('keeps the text of the page readable on its background in both themes (WCAG AA, 4.5)', () => {
    const lum = (hex) => {
      const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255).map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
      return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    };
    const ratio = (a, b) => (Math.max(lum(a), lum(b)) + 0.05) / (Math.min(lum(a), lum(b)) + 0.05);
    for (const mode of ['light', 'dark']) {
      const c = THEMES[mode].colors;
      expect(ratio(c.foreground, c.background), `${mode} text`).toBeGreaterThanOrEqual(4.5);
      expect(ratio(c.mutedForeground, c.background), `${mode} muted text`).toBeGreaterThanOrEqual(4.5);
      expect(ratio(c.primaryForeground, c.primary), `${mode} command`).toBeGreaterThanOrEqual(4.5);
    }
  });
});
