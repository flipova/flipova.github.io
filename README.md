# flipova.github.io

flipova.github.io — part of the flipova workspace.

```bash
git clone https://github.com/flipova/flipova.github.io.git
```

## Delivery

`main` is production. Work lands on `dev` and travels the channels one at a
time (`dev -> alpha -> beta -> rc -> main`). A release tag is what ships, and
`corral promote` cuts it. The pipeline is `.github/workflows/release.yml` —
adapt its steps to this repository.

## Environment

Configuration and secrets live in the **workspace vault**, never in a file
inside this repository. `ENVIRONMENT.md` lists the keys it needs;
`corral vault resolve` shows the values.

## License

MIT — see `LICENSE`.
