# flipova.github.io

The developer portal of Flipova, published at <https://flipova.github.io>: the open source projects Flipova
publishes, how to install them, where their documentation and code are, their latest releases, and the public
sites and services. Nothing private is shown.

It is a static React and Vite site. Addresses and texts are written once:

| What | Where it is written |
| --- | --- |
| projects, services, packages, install commands, addresses | `links.yaml` |
| every displayed text (French and English) | `@flipova/languages`, surface `developers` |
| logo, fonts, colours of both themes (styling only) | `@flipova/assets` |

## Work on it

```bash
npm ci          # the private git dependencies need access to the Flipova organization
npm run dev     # http://localhost:5173
npm test        # Vitest: data, texts, links, releases, rendered page, contrast, nothing private
npm run lint
npm run build   # dist/
```

No environment variable is needed. `ENVIRONMENT.md` says why.

## Add a tool

1. A block in `links.yaml` (`id`, `group`, `access`, `source`, and `package`, `install`, `docs` when it has them).
2. Its name and summary in `flipova.languages`, surface `developers`, in French and English.
3. `npm test`: it refuses a tool without texts, with an unknown group or with a non-https address.

## Delivery

`main` is production. Work lands on `dev` and travels the channels one at a time
(`dev -> alpha -> beta -> rc -> main`). A stable release tag builds the site, waits for the approval of the
`production` environment, then publishes it to GitHub Pages. The pipeline is `.github/workflows/release.yml`,
generated from `ci/ci.yml` (`corral ci sync`). The documentation is in `documentation/v0.1`.

## License

MIT, see `LICENSE`.
