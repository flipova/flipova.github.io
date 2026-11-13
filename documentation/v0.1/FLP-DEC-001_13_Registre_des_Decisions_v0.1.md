<!-- corral:section:start id="cover" type="cover" locked="true" order="0" after="" -->
**REGISTRE DES DÉCISIONS**

**Décisions**

Décisions D-1 à D-9 · Points ouverts

**Informations du document**

|                        |                                     |
|------------------------|-------------------------------------|
| **Titre du document**  | <!--auto:doc.title-->Registre des Decisions<!--/auto--> |
| **Référence**          | <!--auto:doc.ref-->FLP-DEC-001<!--/auto--> |
| **Version**            | <!--auto:doc.version-->0.1<!--/auto--> |
| **Date**               | <!--auto:doc.date-->13/11/2026<!--/auto--> |
| **Propriétaire**       | <!--auto:doc.owner-->@dadflip<!--/auto--> |
| **Statut de révision** | <!--auto:doc.status-->Brouillon<!--/auto--> |
| **Relecteurs**         | @dadflip                          |

<!-- corral:section:end id="cover" -->

<!-- corral:section:start id="sec-1" type="section" title="Présentation du document" level="1" order="1" after="cover" -->
# 1. Présentation du document

## 1.1 Objectif

Garder la trace de ce qui a été décidé pour ce dépôt, et de ce qui reste ouvert.

## 1.2 Périmètre

Le portail `flipova.github.io`.

## 1.3 Public concerné

Les développeurs qui découvrent les projets ouverts de Flipova, les mainteneurs du portail, l’exploitation, les relecteurs.

<!-- corral:section:end id="sec-1" -->

<!-- corral:section:start id="sec-2" type="section" title="Contexte" level="1" order="2" after="sec-1" -->
# 2. Contexte

Le portail était une page de démonstration. Il devient la porte d’entrée des développeurs vers ce que Flipova publie en open source, et applique les règles de l’écosystème (Corral, assets, languages).

<!-- corral:section:end id="sec-2" -->

<!-- corral:section:start id="sec-3" type="section" title="Décisions" level="1" order="3" after="sec-2" -->
# 3. Décisions

| Id | Décision |
| --- | --- |
| D-1 | Le portail est un site statique React/Vite à la racine de l’organisation. L’ancienne page (score, liens écrits dans le code) est remplacée. |
| D-2 | Rien n’est écrit deux fois : adresses et commandes dans `links.yaml`, textes dans `@flipova/languages` (surface `developers`) ; la mise en forme vient de `@flipova/assets`. |
| D-3 | Le portail ne montre que du public : projets open source (Foundation, puis Corral avec sa version publique), leurs versions, sites et services publics (clé d’API, ML et autres outils, quand ils existent). Aucun dépôt, paquet ou service privé n’y est nommé ; un test le vérifie. |
| D-4 | Aucune variable d’environnement. `ORG_READ_TOKEN` sert seulement à installer les dépendances privées. |
| D-5 | Chaque tag, préversion comprise, publie sur GitHub Pages après la livraison : la documentation suit la version livrée. |
| D-6 | `deliver` ne publie aucun paquet : le site est le livrable, publié par la tâche `pages`. |
| D-7 | Le thème suit le navigateur (clair ou sombre) ; la langue se choisit et se mémorise. |
| D-8 | Vite 8 et `@vitejs/plugin-react` 6 sont adoptés (les mises à jour que Dependabot proposait). |
| D-9 | Les dernières versions sont lues à l’ouverture sur l’API publique de GitHub, sans jeton, avec un cache de session de dix minutes : la liste reste à jour sans reconstruire le site, et un échec n’empêche pas la page de s’afficher. |

<!-- corral:section:end id="sec-3" -->

<!-- corral:section:start id="sec-4" type="section" title="Conséquences" level="1" order="4" after="sec-3" -->
# 4. Conséquences

Un projet ou un service ajouté demande un bloc dans `links.yaml` et deux textes dans `flipova.languages`. Les nouvelles versions apparaissent sans reconstruire le site.

<!-- corral:section:end id="sec-4" -->

<!-- corral:section:start id="sec-5" type="section" title="Points ouverts" level="1" order="5" after="sec-4" -->
# 5. Points ouverts

| Id | Point | Qui |
| --- | --- | --- |
| O-1 | Source de GitHub Pages sur « GitHub Actions » | administrateur |
| O-2 | Secret d’organisation `ORG_READ_TOKEN` | administrateur |
| O-3 | Environnement `production` avec approbation | administrateur |
| O-4 | Ajouter les services publics réels (clé d’API, ML…) : adresse et texte de chacun | propriétaire |
| O-5 | Après la fusion de `flipova.languages` : `npm update @flipova/languages` et valider le verrou | mainteneur |
| O-6 | Ajouter Corral dès que sa version publique existe | propriétaire |
| O-7 | `flipova.frontend` renvoie vers `https://dev.flipova.fr/foundation` : adresse à remplacer par `https://flipova.github.io/foundation/` | mainteneur |

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
