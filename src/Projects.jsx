import CopyCommand from './CopyCommand.jsx';
import Icon from './Icon.jsx';
import { useI18n } from './i18n.js';
import { projects } from './links.js';

function Project({ project }) {
  const { t } = useI18n();
  const name = t(`projects.${project.id}.name`);
  const hidden = <span className="visually-hidden"> ({name})</span>;
  return (
    <li className="row">
      <div className="row-text">
        <h3>{name}</h3>
        <p>{t(`projects.${project.id}.summary`)}</p>
      </div>
      <div className="row-actions">
        {project.install ? <CopyCommand command={project.install} /> : null}
        <ul className="links">
          {project.docs ? (
            <li><a href={project.docs}><Icon name="book" />{t('actions.docs')}{hidden}</a></li>
          ) : null}
          <li><a href={project.source}><Icon name="code" />{t('actions.source')}{hidden}</a></li>
          {project.npm ? (
            <li><a href={project.npm}><Icon name="package" />{t('actions.npm')}{hidden}</a></li>
          ) : null}
        </ul>
      </div>
    </li>
  );
}

export default function Projects() {
  const { t } = useI18n();
  return (
    <section className="section" aria-labelledby="projects-title">
      <div className="section-head">
        <h2 id="projects-title">{t('projects.title')}</h2>
        <p>{t('projects.lede')}</p>
      </div>
      <ul className="rows">
        {projects.map((project) => <Project key={project.id} project={project} />)}
      </ul>
    </section>
  );
}
