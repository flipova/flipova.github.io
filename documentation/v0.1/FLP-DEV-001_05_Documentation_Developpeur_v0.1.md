<!-- corral:section:start id="cover" type="cover" locked="true" order="0" after="" -->
**DOCUMENTATION DÉVELOPPEUR**

**Guide du développeur**

Lancer · Ajouter un projet ou un service · Modifier un texte · Tester

**Informations du document**

|                        |                                     |
|------------------------|-------------------------------------|
| **Titre du document**  | <!--auto:doc.title-->Documentation Developpeur<!--/auto--> |
| **Référence**          | <!--auto:doc.ref-->FLP-DEV-001<!--/auto--> |
| **Version**            | <!--auto:doc.version-->0.1<!--/auto--> |
| **Date**               | <!--auto:doc.date-->13/11/2026<!--/auto--> |
| **Propriétaire**       | <!--auto:doc.owner-->@dadflip<!--/auto--> |
| **Statut de révision** | <!--auto:doc.status-->Brouillon<!--/auto--> |
| **Relecteurs**         | @dadflip                          |

<!-- corral:section:end id="cover" -->

<!-- corral:section:start id="sec-1" type="section" title="Présentation du document" level="1" order="1" after="cover" -->
# 1. Présentation du document

## 1.1 Objectif

Permettre de lancer le portail, d’y ajouter un projet, un service ou un texte, et de le tester.

## 1.2 Périmètre

Le travail dans ce dépôt. Le travail dans `flipova.assets` (mise en forme) et `flipova.languages` (textes) est décrit dans leurs propres documents.

## 1.3 Public concerné

Les développeurs qui découvrent les projets ouverts de Flipova, les mainteneurs du portail, l’exploitation, les relecteurs.

<!-- corral:section:end id="sec-1" -->

<!-- corral:section:start id="sec-2" type="section" title="Lancer le portail" level="1" order="2" after="sec-1" -->
# 2. Lancer le portail

```bash
npm ci          # les dépendances privées demandent un accès à l'organisation (voir FLP-SEC-001)
npm run dev     # http://localhost:5173
npm run build   # produit dist/
npm test        # Vitest
npm run lint
```

Aucune variable d’environnement n’est nécessaire.

<!-- corral:section:end id="sec-2" -->

<!-- corral:section:start id="sec-3" type="section" title="Ajouter un projet ou un service" level="1" order="3" after="sec-2" -->
# 3. Ajouter un projet ou un service

Le portail ne montre que du public : un projet open source (dépôt public, paquet sur un registre public), un site ou un service public. Rien d’interne n’y a sa place.

1. Ajouter un bloc à `links.yaml` : sous `projects` (`id`, `source`, et `package`, `install`, `docs`, `npm`, `releases` si le projet en a) ou sous `services` (`id`, `url`).
2. Ajouter ses textes dans `flipova.languages`, surface `developers`, en français puis en anglais : `projects.<id>.name` et `.summary`, ou `services.<id>.name` et `.summary`.
3. Lancer `npm test` : le test refuse un texte manquant, une adresse qui n’est pas en https, un dépôt hors de l’organisation ou un nom interne.

Rien n’est à modifier dans `src/`. Corral s’ajoutera de la même façon quand sa version publique existera.

<!-- corral:section:end id="sec-3" -->

<!-- corral:section:start id="sec-4" type="section" title="Modifier un texte" level="1" order="4" after="sec-3" -->
# 4. Modifier un texte

Le texte se change dans `flipova.languages` (surface `developers`), jamais dans ce dépôt. Une fois publié, `npm update @flipova/languages` met à jour le verrou de ce dépôt.

<!-- corral:section:end id="sec-4" -->

<!-- corral:section:start id="sec-5" type="section" title="Mise en forme" level="1" order="5" after="sec-4" -->
# 5. Mise en forme

La mise en forme lit `@flipova/assets` (ces paquets sont privés, ils ne servent qu’à construire la page, qui n’en nomme aucun). Les polices viennent de `@flipova/assets/fonts/fonts.css`, les logos de `@flipova/assets/visuals/logos/`, les couleurs du registre de `@flipova/assets/theme/design-theme`. `src/theme.js` les met en variables CSS (`--primary`, `--background`…) ; `src/index.css` ne cite que ces variables.

<!-- corral:section:end id="sec-5" -->

<!-- corral:section:start id="sec-6" type="section" title="Écrire dans les deux langues" level="1" order="6" after="sec-5" -->
# 6. Écrire dans les deux langues

Une clé ajoutée au français sans équivalent anglais fait échouer les tests de `flipova.languages` (parité des clés). Les noms propres (Foundation, Flippa AI…) ne se traduisent pas.

<!-- corral:section:end id="sec-6" -->

<!-- corral:section:start id="sec-7" type="section" title="Annexes et références" level="1" order="7" after="sec-6" -->
# 7. Annexes et références

## Documents associés

FLP-ARC-001 (architecture), FLP-SPC-001 (exigences), FLP-DEV-001 (développeur), FLP-OPS-001 (opérations), FLP-SEC-001 (sécurité), FLP-PRJ-001 (projet), FLP-DEC-001 (décisions).

## Journal des modifications

| Version | Date | Changement |
| --- | --- | --- |
| 0.1 | 2026-11-13 | Création : premier jeu de documents du dépôt |

<!-- corral:section:end id="sec-7" -->
