<!-- corral:section:start id="cover" type="cover" locked="true" order="0" after="" -->
**PROJET ET LIVRAISON**

**Charte du projet**

Périmètre · Livrables · Risques · Gouvernance

**Informations du document**

|                        |                                     |
|------------------------|-------------------------------------|
| **Titre du document**  | <!--auto:doc.title-->Projet et Livraison<!--/auto--> |
| **Référence**          | <!--auto:doc.ref-->FLP-PRJ-001<!--/auto--> |
| **Version**            | <!--auto:doc.version-->0.1<!--/auto--> |
| **Date**               | <!--auto:doc.date-->13/11/2026<!--/auto--> |
| **Propriétaire**       | <!--auto:doc.owner-->@dadflip<!--/auto--> |
| **Statut de révision** | <!--auto:doc.status-->Brouillon<!--/auto--> |
| **Relecteurs**         | @dadflip                          |

<!-- corral:section:end id="cover" -->

<!-- corral:section:start id="sec-1" type="section" title="Présentation du document" level="1" order="1" after="cover" -->
# 1. Présentation du document

## 1.1 Objectif

Fixer le périmètre du dépôt, ses livrables et ses risques.

## 1.2 Périmètre

Le portail développeur `flipova.github.io`.

## 1.3 Public concerné

Les développeurs qui découvrent les projets ouverts de Flipova, les mainteneurs du portail, l’exploitation, les relecteurs.

<!-- corral:section:end id="sec-1" -->

<!-- corral:section:start id="sec-2" type="section" title="Périmètre" level="1" order="2" after="sec-1" -->
# 2. Périmètre

Dans le périmètre : la page d’accueil des développeurs (projets open source, versions, sites et services publics) et la chaîne de publication. Hors périmètre : la documentation des projets, les produits eux-mêmes, tout ce qui est interne à Flipova.

<!-- corral:section:end id="sec-2" -->

<!-- corral:section:start id="sec-3" type="section" title="Livrables" level="1" order="3" after="sec-2" -->
# 3. Livrables

| Livrable | État |
| --- | --- |
| Portail React/Vite (projets, versions, services, deux langues, deux thèmes) | livré |
| Surface `developers` de `@flipova/languages` | livré avec ce dépôt |
| Pipeline Corral (un `release.yml`, GitHub Pages) | livré |
| Documentation `documentation/v0.1` | livrée |

<!-- corral:section:end id="sec-3" -->

<!-- corral:section:start id="sec-4" type="section" title="Risques" level="1" order="4" after="sec-3" -->
# 4. Risques

| Risque | Réponse |
| --- | --- |
| Le verrou pointe vers une version de `@flipova/languages` sans la surface `developers` | fusionner `flipova.languages`, puis `npm update @flipova/languages` (FLP-DEC-001, O-5) |
| Un projet affiché n’est pas (ou plus) public | le test refuse un dépôt hors de l’organisation et tout nom interne ; vérifier la visibilité à chaque ajout |
| GitHub limite les lectures sans jeton (60 par heure et par adresse) | cache de session de dix minutes ; en cas d’échec, la page renvoie vers les versions sur GitHub |

<!-- corral:section:end id="sec-4" -->

<!-- corral:section:start id="sec-5" type="section" title="Gouvernance" level="1" order="5" after="sec-4" -->
# 5. Gouvernance

Les modifications passent par pull request ; la liste évolue avec les projets rendus publics (Corral, avec sa version publique) et les services publics ; elle suit le plan de conformité (flipova.backend, FLP-OPS-003).

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
