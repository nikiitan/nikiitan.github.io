# Niki · Personal Website

React + Vite personal site for GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

## Build for GitHub Pages

```bash
npm run build
```

Static files are written to `docs/` (with `.nojekyll` so GitHub Pages skips Jekyll).

## GitHub Pages setup

Repo: [nikiitan/nikiitan.github.io](https://github.com/nikiitan/nikiitan.github.io)

1. Push `main` (includes `docs/`).
2. On GitHub: **Settings → Pages**.
3. Source: **Deploy from a branch**.
4. Branch: `main`, folder: `/docs`, then **Save**.
5. Site URL: https://nikiitan.github.io (may take a few minutes).

See [Configuring a publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).
