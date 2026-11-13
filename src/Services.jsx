import Icon from './Icon.jsx';
import { useI18n } from './i18n.js';
import { services } from './links.js';

export default function Services() {
  const { t } = useI18n();
  return (
    <section className="section" aria-labelledby="services-title">
      <div className="section-head">
        <h2 id="services-title">{t('services.title')}</h2>
        <p>{t('services.lede')}</p>
      </div>
      <ul className="rows">
        {services.map((service) => (
          <li className="row" key={service.id}>
            <div className="row-text">
              <h3>{t(`services.${service.id}.name`)}</h3>
              <p>{t(`services.${service.id}.summary`)}</p>
            </div>
            <div className="row-actions">
              <ul className="links">
                <li>
                  <a href={service.url}>
                    <Icon name="globe" />
                    {t('services.open')}
                    <span className="visually-hidden"> ({t(`services.${service.id}.name`)})</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
