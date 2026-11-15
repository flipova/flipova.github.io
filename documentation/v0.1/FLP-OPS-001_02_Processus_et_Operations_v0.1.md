<!-- corral:section:start id="cover" type="cover" locked="true" order="0" after="" -->
**PROCESSUS ET OPÉRATIONS**

**Exploitation**

Publication · Environnements · Retour arrière

**Informations du document**

|                        |                                     |
|------------------------|-------------------------------------|
| **Titre du document**  | <!--auto:doc.title-->Processus et Operations<!--/auto--> |
| **Référence**          | <!--auto:doc.ref-->FLP-OPS-001<!--/auto--> |
| **Version**            | <!--auto:doc.version-->0.1<!--/auto--> |
| **Date**               | <!--auto:doc.date-->13/11/2026<!--/auto--> |
| **Propriétaire**       | <!--auto:doc.owner-->@dadflip<!--/auto--> |
| **Statut de révision** | <!--auto:doc.status-->Brouillon<!--/auto--> |
| **Relecteurs**         | @dadflip                          |

<!-- corral:section:end id="cover" -->

<!-- corral:section:start id="sec-1" type="section" title="Présentation du document" level="1" order="1" after="cover" -->
# 1. Présentation du document

## 1.1 Objectif

Décrire comment une modification arrive sur `https://flipova.github.io` et comment la retirer.

## 1.2 Périmètre

La chaîne `.github/workflows/release.yml`, générée par Corral à partir de `ci/ci.yml`.

## 1.3 Public concerné

Les développeurs qui découvrent les projets ouverts de Flipova, les mainteneurs du portail, l’exploitation, les relecteurs.

<!-- corral:section:end id="sec-1" -->

<!-- corral:section:start id="sec-2" type="section" title="Pipeline" level="1" order="2" after="sec-1" -->
# 2. Pipeline

Un seul fichier de workflow, `release.yml`, avec les tâches `integrity`, `verify`, `security`, `deliver`, `docs`, `pages` et `summary`. Sur une pull request vers `main`, la CI vérifie et construit le site sans rien publier.

<!-- corral:section:end id="sec-2" -->

<!-- corral:section:start id="sec-3" type="section" title="Publier" level="1" order="3" after="sec-2" -->
# 3. Publier

La publication se fait par un tag, comme pour les autres dépôts : `dev`, `alpha`, `beta`, `rc`, `main`, puis `corral promote`. Pour un tag, préversion comprise :

1. `verify` et `security` passent ;
2. `docs` construit le site (`npm run build`, dossier `dist/`) ;
3. `deliver` s’exécute dans l’environnement GitHub de la version (`production` pour un tag stable, après l’approbation prévue) ;
4. `pages` publie le site sur GitHub Pages.

Les préversions (`alpha`, `beta`, `rc`) publient aussi le site : la documentation suit la version qui vient d’être livrée. L’étape `deliver` ne publie aucun paquet : le site est le livrable (FLP-DEC-001, D-6).

<!-- corral:section:end id="sec-3" -->

<!-- corral:section:start id="sec-4" type="section" title="Environnements" level="1" order="4" after="sec-3" -->
# 4. Environnements

| Environnement | Rôle |
| --- | --- |
| `staging` | tags `alpha`, `beta`, `rc` : même chaîne, livraison dans son propre environnement |
| `production` | tag stable : livraison puis publication, après approbation |

Aucune variable ne diffère d’un environnement à l’autre (ENVIRONMENT.md).

<!-- corral:section:end id="sec-4" -->

<!-- corral:section:start id="sec-5" type="section" title="Réglages à faire une fois" level="1" order="5" after="sec-4" -->
# 5. Réglages à faire une fois

| Réglage | Où |
| --- | --- |
| Source de GitHub Pages : « GitHub Actions » | Settings, Pages |
| Secret d’organisation `ORG_READ_TOKEN` (lecture seule) | Settings, Secrets |
| Environnement `production` avec approbation | Settings, Environments |

<!-- corral:section:end id="sec-5" -->

<!-- corral:section:start id="sec-6" type="section" title="Retour arrière" level="1" order="6" after="sec-5" -->
# 6. Retour arrière

Publier de nouveau le tag précédent : `workflow_dispatch` sur ce tag, ou relancer son exécution. Le site est entièrement reconstruit, rien n’est modifié à la main sur GitHub Pages.

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
