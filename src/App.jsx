import { useEffect, useMemo, useState } from 'react';

const links = [
  {
    label: 'Foundation',
    description: 'Design system — 9 thèmes, 23 layouts',
    url: 'https://dev.flipova.fr/foundation',
    accent: '#0071e3',
  },
  {
    label: 'Documentation',
    description: 'Guides, API reference et exemples',
    url: 'https://dev.flipova.fr',
    accent: '#5e5ce6',
  },
  {
    label: 'GitHub',
    description: 'Code source, issues et contributions',
    url: 'https://github.com/flipova/foundation',
    accent: '#48484a',
  },
  {
    label: 'Flippa AI',
    description: 'Assistant IA — bêta publique',
    url: 'https://flipova.fr/flippa',
    accent: '#ff9500',
  },
  {
    label: 'flipova.fr',
    description: 'Le site principal de la marque',
    url: 'https://flipova.fr',
    accent: '#8e8e93',
  },
];

function App() {
  const [score, setScore] = useState(0);
  const [visited, setVisited] = useState([]);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (!toast) return undefined;
    const id = window.setTimeout(() => setToast(null), 2200);
    return () => window.clearTimeout(id);
  }, [toast]);

  const progressLabel = useMemo(() => `${visited.length}/${links.length} explorés`, [visited.length]);

  const openLink = (item, index) => {
    setVisited((current) => (current.includes(index) ? current : [...current, index]));
    setScore((current) => current + 1);
    setToast({ title: item.label, subtitle: 'Ouvert dans un nouvel onglet' });
    window.open(item.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="app-shell">
      <div className="backdrop" />
      <header className="topbar">
        <div>
          <p className="eyebrow">Flipova Developers</p>
          <h1>Un espace de navigation pensé pour explorer rapidement les ressources Flipova.</h1>
        </div>
        <div className="pill-group">
          <span className="pill">Score {score}</span>
          <span className="pill">{progressLabel}</span>
        </div>
      </header>

      <main className="hero-grid">
        <section className="panel intro-panel">
          <p className="eyebrow">Nouveau portail</p>
          <h2>Une base React claire, modulaire et prête à évoluer.</h2>
          <p>
            Le site est maintenant structuré autour d’une app React/Vite pour faciliter la maintenance,
            l’ajout de contenus et le déploiement continu sur GitHub Pages.
          </p>
          <div className="chip-row">
            <span className="chip">React</span>
            <span className="chip">Vite</span>
            <span className="chip">GitHub Pages</span>
          </div>
        </section>

        <section className="panel room-panel" aria-label="Vue de l’espace de navigation">
          <div className="room-glow" />
          <div className="room-card">
            <div className="room-card__header">
              <span className="room-dot" />
              <span>Mission board</span>
            </div>
            <div className="room-card__body">
              {links.map((item, index) => (
                <button
                  key={item.label}
                  className={`room-item${visited.includes(index) ? ' visited' : ''}`}
                  type="button"
                  onClick={() => openLink(item, index)}
                >
                  <span className="room-item__dot" style={{ backgroundColor: item.accent }} />
                  <span>
                    <strong>{item.label}</strong>
                    <small>{item.description}</small>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>

      <section className="card-grid" aria-label="Liens rapides">
        {links.map((item, index) => (
          <article key={item.label} className="resource-card">
            <div className="resource-card__top">
              <span className="resource-card__dot" style={{ backgroundColor: item.accent }} />
              <span>{visited.includes(index) ? 'Visité' : 'À explorer'}</span>
            </div>
            <h3>{item.label}</h3>
            <p>{item.description}</p>
            <button type="button" onClick={() => openLink(item, index)}>
              Ouvrir
            </button>
          </article>
        ))}
      </section>

      {toast ? (
        <div className="toast" role="status" aria-live="polite">
          <strong>{toast.title}</strong>
          <span>{toast.subtitle}</span>
        </div>
      ) : null}
    </div>
  );
}

export default App;
