import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@flipova/assets/fonts/fonts.css';
import favicon from '@flipova/assets/visuals/logos/flipova-icon-favicon.png';
import './index.css';
import App from './App.jsx';
import { I18nProvider } from './i18n.js';
import { followColorScheme } from './theme.js';

// The theme is on the page before the first paint: no flash of the wrong colours.
followColorScheme();
const icon = document.createElement('link');
Object.assign(icon, { rel: 'icon', type: 'image/png', href: favicon });
document.head.appendChild(icon);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <I18nProvider>
      <App />
    </I18nProvider>
  </StrictMode>,
);
