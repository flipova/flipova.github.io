import { useEffect, useState } from 'react';
import { useI18n } from './i18n.js';
import { projects } from './links.js';
import { fetchReleases } from './releases.js';

function storage() {
  try {
    return window.sessionStorage;
  } catch {
    return null;
  }
}

function ReleaseList({ project }) {
  const { t, locale } = useI18n();
  const [state, setState] = useState({ status: 'loading', releases: [] });

  useEffect(() => {
    let live = true;
    fetchReleases(project.releases, { storage: storage() })
      .then((releases) => live && setState({ status: 'ready', releases }))
      .catch(() => live && setState({ status: 'unavailable', releases: [] }));
    return () => {
      live = false;
    };
  }, [project.releases]);

  const date = (iso) => (iso ? t('releases.on', { date: new Intl.DateTimeFormat(locale, { dateStyle: 'long' }).format(new Date(iso)) }) : '');
  const name = t(`projects.${project.id}.name`);

  return (
    <div className="release-block">
      <h3>{name}</h3>
      <div aria-live="polite">
        {state.status === 'loading' ? <p className="muted">{t('releases.loading')}</p> : null}
        {state.status === 'unavailable' ? <p className="muted">{t('releases.unavailable')}</p> : null}
        {state.status === 'ready' && state.releases.length === 0 ? <p className="muted">{t('releases.empty')}</p> : null}
        {state.releases.length ? (
          <ul className="releases">
            {state.releases.map((release) => (
              <li key={release.tag}>
                <a href={release.url}>{release.name}</a>
                {release.prerelease ? <span className="tag">{t('releases.prerelease')}</span> : null}
                <span className="muted">{date(release.date)}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      <p><a href={`https://github.com/${project.releases}/releases`}>{t('releases.all')}<span className="visually-hidden"> ({name})</span></a></p>
    </div>
  );
}

export default function Releases() {
  const { t } = useI18n();
  const watched = projects.filter((project) => project.releases);
  if (!watched.length) return null;
  return (
    <section className="section" aria-labelledby="releases-title">
      <div className="section-head">
        <h2 id="releases-title">{t('releases.title')}</h2>
        <p>{t('releases.lede')}</p>
      </div>
      {watched.map((project) => <ReleaseList key={project.id} project={project} />)}
    </section>
  );
}
