
## Luxury Auto Detailing — Vite + React + Tailwind

Scripts:
- `npm i` installe les dépendances
- `npm run dev` lance le serveur de dev (port 8080)
- `npm run build` génère le build de prod dans `dist`
- `npm run preview` sert le build localement

Démarrage rapide:
```sh
git clone <YOUR_GIT_URL>
cd LuxuryAutoDetailling
npm i
npm run dev
```

Build local:
```sh
npm run build
npm run preview
```

Déploiement GitHub Pages:
- Le branchement `main` déclenche automatiquement un déploiement via GitHub Actions.
- Le site est construit dans `dist` puis déployé sur GitHub Pages.
- React Router (SPA) est supporté via une copie de `index.html` en `404.html`.

Configuration importante:
- Base Vite en production: `"/LuxuryAutoDetailling/"` (voir `vite.config.ts: base`).
  - Si vous renommez le dépôt, mettez à jour ce chemin.
- Les actions se trouvent dans `.github/workflows/pages.yml`.

Prérequis:
- Node.js 18+
- npm 10+
