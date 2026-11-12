# Site CV - Mounir Hadir (QA Analyst)

Site vitrine bilingue (FR / EN), theme sombre, sans dependance a installer.

- `index.html` : page francaise - `en.html` : page anglaise
- Bouton **Telecharger le CV** en bas de page (fichiers PDF a la racine du site)
- **Structure a plat** : tous les fichiers sont a la racine du depot. C'est
  indispensable, car c'est exactement ce que contient le depot GitHub
  (`hadirmounir/CV`). Les chemins `assets/...` et `logos-web/...` ne
  fonctionneraient pas et casseraient tout le design (404 sur le CSS).

## Contenu du depot

| Fichier | Role |
|---|---|
| `index.html` | page francaise |
| `en.html` | page anglaise |
| `styles.css` | styles du site (theme sombre) |
| `print.css` | mise en page A4 pour `Cmd + P` |
| `app.js` | animations, accordeon, copie de l'e-mail, bascule FR/EN |
| `*.png` (16) | logos en vrai PNG (versions web legeres) a la racine |
| `mounir-web.jpg` | photo optimisee |
| `CV-Mounir-Hadir-FR.pdf` | CV francais (6 pages A4) - telecharge depuis le site |
| `CV-Mounir-Hadir-EN.pdf` | CV anglais (6 pages A4) - telecharge depuis le site |
| `.nojekyll` | evite le traitement Jekyll de GitHub Pages |

## Site en ligne

- FR : https://hadirmounir.github.io/CV/
- EN : https://hadirmounir.github.io/CV/en.html
- PDF FR : https://hadirmounir.github.io/CV/CV-Mounir-Hadir-FR.pdf
- PDF EN : https://hadirmounir.github.io/CV/CV-Mounir-Hadir-EN.pdf

## Publier sur GitHub Pages (gratuit, etape par etape)

### Methode A - sans ligne de commande (recommandee)

1. Depot deja cree : **hadirmounir/CV** (Public) - rien a recreer.
2. Aller sur **github.com/hadirmounir/CV** > **Add file** > **Upload files**.
3. Glisser les fichiers a la racine du depot :
   `index.html`, `en.html`, `styles.css`, `print.css`, `app.js`,
   `mounir-web.jpg`, les 2 PDF et les 16 logos `.png`.
   Si un fichier existe deja, GitHub demande de confirmer l'ecrasement :
   **Yes, overwrite the file**.
4. Message de commit (ex. `Mise a jour`) puis **Commit changes**.
5. Attendre 1 a 2 minutes : GitHub Pages republie automatiquement.

### Methode B - en ligne de commande

```bash
cd ~/Desktop/Mon-Site-CV
git remote add origin https://github.com/hadirmounir/CV.git
git push -u origin main
```

### Domaine racine (optionnel)

Pour avoir `https://hadirmounir.github.io` sans `/CV/`, il faudrait un second
depot nomme exactement `hadirmounir.github.io`.

## Verifier apres la mise en ligne

- La page d'accueil s'affiche avec le theme sombre, les logos et la photo.
- La bascule FR / EN fonctionne (drapeaux dans la nav et le menu mobile).
- Le bouton **Telecharger le CV** en bas de page declenche bien le
  telechargement et non l'ouverture dans l'onglet.

## Mettre a jour le site

```bash
cd ~/Desktop/Mon-Site-CV
git add -A
git commit -m "Mise a jour du contenu"
git push
```

(Methode A : *Add file* > *Upload files*, puis remplacer les fichiers.)

## Notes

- Le depot public rend le code et les PDF visibles par tous, y compris
  l'e-mail et le telephone presents dans le HTML.
- `fonts/` et `print-src/` sont des sources locales de generation des
  PDF : elles ne sont pas necessaires en ligne.
