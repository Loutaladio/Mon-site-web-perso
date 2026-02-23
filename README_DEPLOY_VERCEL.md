Déploiement Vercel — instructions rapides

Nom du projet (à utiliser dans Vercel) : loutaladiodanickarcel

1) Connexion
- Crée un compte sur https://vercel.com/ si nécessaire.
- Liais ton dépôt GitHub/GitLab/Bitbucket contenant ce projet.

2) Importer le projet
- Dans Vercel, clique sur "New Project" → "Import Git Repository".
- Choisis le repo et, lors du réglage, mets le "Project Name" sur : `loutaladiodanickarcel`.
- Root directory : `/`.

3) Variables d'environnement
- Si tu utilises Google Analytics, ajoute `GA_MEASUREMENT_ID` dans les Environment Variables (Production).

4) Paramètres de build
- Framework: Static Site (aucun builder requis). Build Command: none. Output Directory: `/`.

5) Fichiers importants inclus
- `vercel.json` : headers de sécurité, redirections et optimisation d'images (WebP/AVIF).
- `sitemap.xml` : mis à jour pour pointer vers `https://loutaladiodanickarcel.vercel.app/`.
- JSON-LD : tous les fichiers incluent maintenant `@id` pointant vers `/g/11myr7bvs4` et `url` vers le domaine Vercel.

6) Après déploiement
- Soumets `https://loutaladiodanickarcel.vercel.app/sitemap.xml` à Google Search Console (inspection → "soumettre un sitemap").
- Inspecte et demande l'indexation de `/` et `/Livres.html`.

Commandes utiles (si tu déploies via Vercel CLI):

```bash
# installer vercel CLI
npm i -g vercel
# lier le projet au compte et définir le nom
vercel login
vercel --prod --name loutaladiodanickarcel
```

Support: si tu veux, je peux générer le fichier `.github/workflows/vercel-deploy.yml` pour déployer automatiquement à chaque push sur `main`.
