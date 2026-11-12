# Site CV - Mounir Hadir (QA Analyst)

Site vitrine bilingue (FR / EN) : `index.html` (français), `en.html` (anglais).

## Contenu

| Fichier | Rôle |
|---|---|
| `index.html` | page française |
| `en.html` | page anglaise |
| `assets/styles.css` | styles du site (thème sombre) |
| `assets/print.css` | mise en page A4 pour `Cmd + P` / PDF |
| `assets/app.js` | animations, accordéon, copie de l'e-mail, bascule FR/EN |
| `logos-web/` | logos convertis en vrai PNG (versions web légères) |
| `mounir-web.jpg` | photo optimisée |
| `CV-Mounir-Hadir-FR.pdf` / `-EN.pdf` | versions PDF à envoyer aux recruteurs |

Aucune dépendance à installer : le site est statique (HTML / CSS / JS).

## Mise en ligne sur GitHub Pages (gratuit)

1. Créer un dépôt **public** sur github.com, par exemple `site-cv`.
2. Envoyer les fichiers :

```bash
git remote add origin https://github.com/<PSEUDO>/site-cv.git
git push -u origin main
```

3. Dans le dépôt : **Settings → Pages**, puis *Source* = `Deploy from a branch`,
   *Branch* = `main`, dossier `/ (root)`, **Save**.
4. Attendre 1 à 2 minutes. Le site est en ligne sur :
   `https://<pseudo>.github.io/site-cv/`

Liens PDF directs une fois en ligne :

- `https://<pseudo>.github.io/site-cv/CV-Mounir-Hadir-FR.pdf`
- `https://<pseudo>.github.io/site-cv/CV-Mounir-Hadir-EN.pdf`

## Alternative sans ligne de commande

Le dossier `a-televerser-sur-github/` contient exactement les fichiers à publier
(copie de travail, générée automatiquement). Sur la page du dépôt vide :
*uploading an existing file* → glisser `index.html`, `en.html`,
`assets/`, `logos-web/`, `mounir-web.jpg` → **Commit changes**.

## Mettre à jour le site

```bash
git add -A
git commit -m "Mise à jour du contenu"
git push
```

GitHub Pages republie automatiquement en une minute environ.
