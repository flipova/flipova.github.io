<!-- corral:section:start id="cover" type="cover" locked="true" order="0" after="" -->
**STRATÉGIES ET CONFORMITÉ**

**Sécurité et conformité**

Hors du portail · Secrets · Contenu servi

**Informations du document**

|                        |                                     |
|------------------------|-------------------------------------|
| **Titre du document**  | <!--auto:doc.title-->Strategies et Conformite<!--/auto--> |
| **Référence**          | <!--auto:doc.ref-->FLP-SEC-001<!--/auto--> |
| **Version**            | <!--auto:doc.version-->0.1<!--/auto--> |
| **Date**               | <!--auto:doc.date-->13/11/2026<!--/auto--> |
| **Propriétaire**       | <!--auto:doc.owner-->@dadflip<!--/auto--> |
| **Statut de révision** | <!--auto:doc.status-->Brouillon<!--/auto--> |
| **Relecteurs**         | @dadflip                          |

<!-- corral:section:end id="cover" -->

<!-- corral:section:start id="sec-1" type="section" title="Présentation du document" level="1" order="1" after="cover" -->
# 1. Présentation du document

## 1.1 Objectif

Dire ce qui protège le dépôt, la chaîne et le site publié.

## 1.2 Périmètre

Le dépôt, la CI et le contenu servi sur GitHub Pages.

## 1.3 Public concerné

Les développeurs qui découvrent les projets ouverts de Flipova, les mainteneurs du portail, l’exploitation, les relecteurs.

<!-- corral:section:end id="sec-1" -->

<!-- corral:section:start id="sec-2" type="section" title="Données et secrets" level="1" order="2" after="sec-1" -->
# 2. Données et secrets

Le site est public et statique : il ne reçoit, ne stocke et n’émet aucune donnée. Aucun secret n’est lu au build ni au runtime, aucun fichier `.env` n’est versionné (`.gitignore`). Les contrôles `secrets` (detect-secrets) et `sast` (Semgrep) de la CI le vérifient.

<!-- corral:section:end id="sec-2" -->

<!-- corral:section:start id="sec-3" type="section" title="Ce qui reste hors du portail" level="1" order="3" after="sec-2" -->
# 3. Ce qui reste hors du portail

Le portail ne nomme aucun dépôt, paquet, service ou secret interne : un test de la CI échoue si un nom interne apparaît dans les données, les textes ou la page. Les paquets privés `@flipova/assets` et `@flipova/languages` ne servent qu’à construire la page ; la CI les installe avec `ORG_READ_TOKEN`, un secret d’organisation en lecture seule, utilisé par `ci/lib/git-auth` dans les tâches `verify`, `deliver` et `docs`. Le jeton n’est jamais affiché ni écrit dans le dépôt.

<!-- corral:section:end id="sec-3" -->

<!-- corral:section:start id="sec-4" type="section" title="Contenu servi" level="1" order="4" after="sec-3" -->
# 4. Contenu servi

Aucun script tiers, aucune police ou image chargée depuis un autre domaine : les polices et le logo sont copiés dans `dist/` par le build. La seule requête externe est la lecture des versions sur `api.github.com` (adresse fixe, sans jeton ; une adresse de version qui n’est pas sur `github.com` est écartée). La commande copiée dans le presse-papiers est celle affichée, rien d’autre.

<!-- corral:section:end id="sec-4" -->

<!-- corral:section:start id="sec-5" type="section" title="Dépendances" level="1" order="5" after="sec-4" -->
# 5. Dépendances

Dependabot propose les mises à jour (`.github/dependabot.yml`) et `npm audit` rapporte les failles connues sans bloquer (avec `npm audit fix` comme réparation dans le runner).

<!-- corral:section:end id="sec-5" -->

<!-- corral:section:start id="sec-6" type="section" title="Annexes et références" level="1" order="6" after="sec-5" -->
# 6. Annexes et références

## Documents associés

FLP-ARC-001 (architecture), FLP-SPC-001 (exigences), FLP-DEV-001 (développeur), FLP-OPS-001 (opérations), FLP-SEC-001 (sécurité), FLP-PRJ-001 (projet), FLP-DEC-001 (décisions).

## Journal des modifications

| Version | Date | Changement |
| --- | --- | --- |
| 0.1 | 2026-11-13 | Création : premier jeu de documents du dépôt |

<!-- corral:section:end id="sec-6" -->
