import { readFileSync } from 'node:fs';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { parse } from 'yaml';

const LINKS = new URL('./links.yaml', import.meta.url);
const VIRTUAL = 'virtual:flipova-links';

/**
 * links.yaml is the one place where the tools, their packages and their addresses are written. This plugin hands it to
 * the page as a module, so the page never carries a second copy and a change of the file is a change of the site.
 */
function links() {
  return {
    name: 'flipova-links',
    resolveId: (id) => (id === VIRTUAL ? `\0${VIRTUAL}` : null),
    load(id) {
      if (id !== `\0${VIRTUAL}`) return null;
      this.addWatchFile(LINKS.pathname);
      return `export default ${JSON.stringify(parse(readFileSync(LINKS, 'utf8')))};`;
    },
  };
}

export default defineConfig({
  plugins: [react(), links()],
  base: '/',
  test: {
    environment: 'node',
    include: ['tests/**/*.test.{js,jsx}'],
  },
});
