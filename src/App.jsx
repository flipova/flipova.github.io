import CopyCommand from './CopyCommand.jsx';
import Icon from './Icon.jsx';
import Projects from './Projects.jsx';
import Releases from './Releases.jsx';
import Services from './Services.jsx';
import logoOnLight from '@flipova/assets/visuals/logos/flipova-inline-color.png';
import logoOnDark from '@flipova/assets/visuals/logos/flipova-inline-color-on-dark.png';
import { locales, useI18n } from './i18n.js';
import { hero, projectById, site } from './links.js';

function Header() {
  const { t, locale, setLocale } = useI18n();
  return (
    <header className="top">
      <a className="logo" href="/" aria-label={t('header.home')}>
        <picture>
          <source media="(prefers-color-scheme: dark)" srcSet={logoOnDark} />
          <img src={logoOnLight} width="500" height="500" alt="" />
        </picture>
      </a>
      <nav aria-label={t('header.language')} className="languages">
        {locales.map((code) => (
          <button key={code} type="button" lang={code} aria-pressed={code === locale} onClick={() => setLocale(code)}>
            {code.toUpperCase()}
          </button>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  const { t } = useI18n();
  const project = projectById(hero.project);
  return (
    <section className="hero" aria-labelledby="hero-title">
      <h1 id="hero-title">{t('hero.title')}</h1>
      <p className="lede">{t('hero.lede')}</p>
      <p className="hero-step">{t('hero.install')}</p>
      <CopyCommand command={project.install} large />
      <p className="hero-link">
        <a href={project.docs}>
          <Icon name="book" size={18} />
          {t('hero.docs')}
        </a>
      </p>
    </section>
  );
}

function Footer() {
  const { t } = useI18n();
  return (
    <footer className="foot">
      <p>{t('footer.note')}</p>
      <ul>
        <li><a href={site.source}>{t('footer.source')}</a></li>
        <li><a href={site.license}>{t('footer.license')}</a></li>
      </ul>
    </footer>
  );
}

export default function App() {
  const { t } = useI18n();
  return (
    <>
      <a className="skip" href="#content">{t('skip')}</a>
      <Header />
      <main id="content">
        <Hero />
        <Projects />
        <Releases />
        <Services />
      </main>
      <Footer />
    </>
  );
}
