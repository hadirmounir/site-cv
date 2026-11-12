# Site CV - Mounir Hadir (QA Analyst)

Site vitrine bilingue (FR / EN), theme sombre, sans dependance a installer.

- `index.html` : page francaise - `en.html` : page anglaise
- Bouton **Telecharger le CV** en bas de page (fichiers PDF a la racine du site)

## Contenu du depot

| Fichier | Role |
|---|---|
| `index.html` | page francaise |
| `en.html` | page anglaise |
| `assets/styles.css` | styles du site (theme sombre) |
| `assets/print.css` | mise en page A4 pour `Cmd + P` |
| `assets/app.js` | animations, accordeon, copie de l'e-mail, bascule FR/EN |
| `logos-web/` | logos en vrai PNG (versions web legeres) |
| `mounir-web.jpg` | photo optimisee |
| `CV-Mounir-Hadir-FR.pdf` | CV francais (6 pages A4) - telecharge depuis le site |
| `CV-Mounir-Hadir-EN.pdf` | CV anglais (6 pages A4) - telecharge depuis le site |
| `.nojekyll` | evite le traitement Jekyll de GitHub Pages |

## Publier sur GitHub Pages (gratuit, etape par etape)

### Methode A - sans ligne de commande (recommandee)

1. Creer un compte sur github.com si besoin.
2. Aller sur **github.com/new**.
   - *Repository name* : `site-cv`
   - *Visibility* : **Public** (obligatoire pour Pages en gratuit)
   - Cliquer **Create repository**.
3. Sur la page du depot vide, cliquer **uploading an existing file**
   (ou *Add file* > *Upload files*).
4. Glisser **tout le contenu** du dossier `a-televerser-sur-github/` :
   `index.html`, `en.html`, `assets/`, `logos-web/`,
   `mounir-web.jpg`, `CV-Mounir-Hadir-FR.pdf`, `CV-Mounir-Hadir-EN.pdf`, `.nojekyll`.
   Important : glisser les fichiers eux-memes, pas le dossier parent.
5. Ecrire un message (ex. `Version initiale`) puis **Commit changes**.
6. Aller dans **Settings** (roue crantee en haut du depot) > **Pages**.
7. Section *Build and deployment* :
   - *Source* : **Deploy from a branch**
   - *Branch* : **main** - dossier **/ (root)**
   - Cliquer **Save**.
8. Attendre 1 a 2 minutes, rafraichir la page **Pages** : l'URL s'affiche.

Le site est en ligne sur `https://<pseudo>.github.io/site-cv/`
(et `.../site-cv/en.html` pour la version anglaise).

### Methode B - en ligne de commande

```bash
cd ~/Desktop/Mon-Site-CV
git remote add origin https://github.com/<PSEUDO>/site-cv.git
git push -u origin main
```

Puis meme etape **Settings > Pages** (source `main`, dossier `/ (root)`).

### Domaine racine (optionnel)

Pour avoir `https://<pseudo>.github.io` sans `/site-cv/`, nommer le depot
exactement `<pseudo>.github.io`.

## Verifier apres la mise en ligne

- La page d'accueil s'affiche (themes, logos, photo).
- La bascule FR / EN fonctionne (drapeaux).
- Le bouton **Telecharger le CV (PDF)** en bas de page declenche bien le
  telechargement et non l'ouverture dans l'onglet.
- Liens directs :
  `https://<pseudo>.github.io/site-cv/CV-Mounir-Hadir-FR.pdf`

## Mettre a jour le site

```bash
cd ~/Desktop/Mon-Site-CV
git add -A
git commit -m "Mise a jour du contenu"
git push
```

GitHub Pages republie automatiquement en une minute environ.
(Pour la methode A : *Add file* > *Upload files*, puis remplacer les fichiers.)

## Notes

- Le depot public rend le code et les PDF visibles par tous, y compris
  l'e-mail et le telephone presents dans le HTML.
- `assets/fonts/` et `print-src/` sont des sources locales de generation des
  PDF : elles ne sont pas necessaires en ligne.
