<!-- corral:section:start id="cover" type="cover" locked="true" order="0" after="" -->
**SYSTÈME ET ARCHITECTURE**

**Document d’architecture**

Portail développeur · Site statique · Sources de contenu

**Informations du document**

|                        |                                     |
|------------------------|-------------------------------------|
| **Titre du document**  | <!--auto:doc.title-->Systeme et Architecture<!--/auto--> |
| **Référence**          | <!--auto:doc.ref-->FLP-ARC-001<!--/auto--> |
| **Version**            | <!--auto:doc.version-->0.1<!--/auto--> |
| **Date**               | <!--auto:doc.date-->13/11/2026<!--/auto--> |
| **Propriétaire**       | <!--auto:doc.owner-->@dadflip<!--/auto--> |
| **Statut de révision** | <!--auto:doc.status-->Brouillon<!--/auto--> |
| **Relecteurs**         | @dadflip                          |

<!-- corral:section:end id="cover" -->

<!-- corral:section:start id="sec-1" type="section" title="Présentation du document" level="1" order="1" after="cover" -->
# 1. Présentation du document

## 1.1 Objectif

Décrire ce que fait `flipova.github.io`, comment il est construit, d’où vient chaque information affichée, et ce qu’il ne fait pas.

## 1.2 Périmètre

Le dépôt : `src/` (l’application), `links.yaml` (projets et services), `ci/`, `tests/`. Hors périmètre : la documentation de chaque projet, qui reste sur son propre site, et tout ce qui est interne à Flipova.

## 1.3 Public concerné

Les développeurs qui découvrent les projets ouverts de Flipova, les mainteneurs du portail, l’exploitation, les relecteurs.

<!-- corral:section:end id="sec-1" -->

<!-- corral:section:start id="sec-2" type="section" title="Contexte" level="1" order="2" after="sec-1" -->
# 2. Contexte

## 2.1 Énoncé du problème

Un développeur qui arrive chez Flipova ne sait pas quels projets sont ouverts, comment les installer, où lire leur documentation ni quelle version est sortie. Les liens existaient, écrits à la main dans le code de la page, et pointaient en partie vers une adresse (`dev.flipova.fr`) qui ne correspond à aucun site publié.

## 2.2 État actuel

Un site React et Vite, sans serveur, publié sur GitHub Pages à la racine de l’organisation. Il présente les projets open source (aujourd’hui Foundation ; Corral s’y ajoutera avec sa version publique) avec leur commande d’installation et leurs liens, les dernières versions lues sur GitHub, puis les sites et services publics.

<!-- corral:section:end id="sec-2" -->

<!-- corral:section:start id="sec-3" type="section" title="Vue d’ensemble" level="1" order="3" after="sec-2" -->
# 3. Vue d’ensemble

```text
links.yaml ─────────────┐   projets et services : adresses, paquet, commande
@flipova/languages ─────┤   les textes (surface developers : fr, en)
@flipova/assets ────────┼─▶  vite build ─▶ dist/ ─▶ GitHub Pages
  fonts, logo, thème ───┘                             │
                              api.github.com ◀────────┘  versions, lues à l’ouverture
```

Une adresse ou une commande n’est écrite que dans `links.yaml`, un texte que dans `@flipova/languages`. La police, le logo et les couleurs ne servent qu’à la mise en forme et viennent de `@flipova/assets`.

<!-- corral:section:end id="sec-3" -->

<!-- corral:section:start id="sec-4" type="section" title="Composants" level="1" order="4" after="sec-3" -->
# 4. Composants

| Fichier | Rôle |
| --- | --- |
| `links.yaml` | source des projets et des services, lue par un plugin Vite (`virtual:flipova-links`) |
| `src/links.js` | expose les projets et les services à la page |
| `src/releases.js` | lit les dernières versions d’un dépôt public (API GitHub), réponse gardée dix minutes dans la session |
| `src/i18n.js` | langue d’ouverture (choix mémorisé, puis langue du navigateur, puis français) et traducteur |
| `src/theme.js` | rôles du thème Flipova en variables CSS, thème clair ou sombre selon le navigateur |
| `src/App.jsx`, `Projects.jsx`, `Releases.jsx`, `Services.jsx`, `CopyCommand.jsx` | la page |
| `src/index.css` | la mise en page : aucune couleur ni police écrite en dur |

<!-- corral:section:end id="sec-4" -->

<!-- corral:section:start id="sec-5" type="section" title="Données et contenu" level="1" order="5" after="sec-4" -->
# 5. Données et contenu

Un projet de `links.yaml` a : `id`, `source` (dépôt public), et selon le cas `package`, `install` (la commande copiée), `docs`, `npm` et `releases` (le dépôt dont on liste les versions). Un service a : `id` et `url`. Leurs textes sont `projects.<id>.name` et `.summary`, `services.<id>.name` et `.summary`, dans la surface `developers` de `@flipova/languages`.

<!-- corral:section:end id="sec-5" -->

<!-- corral:section:start id="sec-6" type="section" title="Hébergement" level="1" order="6" after="sec-5" -->
# 6. Hébergement

Le dépôt s’appelle `flipova.github.io` : GitHub le sert à la racine de `https://flipova.github.io`. Les dépôts de projet qui publient leur propre site (Foundation, sous `/foundation/`) cohabitent, chacun avec son déploiement.

<!-- corral:section:end id="sec-6" -->

<!-- corral:section:start id="sec-7" type="section" title="Ce que le portail ne fait pas" level="1" order="7" after="sec-6" -->
# 7. Ce que le portail ne fait pas

Il ne duplique pas la documentation des projets, n’héberge aucun service, ne montre aucun projet privé, ne collecte aucune donnée (aucun compteur, aucun cookie) et ne dépend d’aucune variable d’environnement. Sa seule requête externe est la lecture des versions publiques sur `api.github.com`.

<!-- corral:section:end id="sec-7" -->

<!-- corral:section:start id="sec-8" type="section" title="Annexes et références" level="1" order="8" after="sec-7" -->
# 8. Annexes et références

## Documents associés

FLP-ARC-001 (architecture), FLP-SPC-001 (exigences), FLP-DEV-001 (développeur), FLP-OPS-001 (opérations), FLP-SEC-001 (sécurité), FLP-PRJ-001 (projet), FLP-DEC-001 (décisions).

## Journal des modifications

| Version | Date | Changement |
| --- | --- | --- |
| 0.1 | 2026-11-13 | Création : premier jeu de documents du dépôt |

<!-- corral:section:end id="sec-8" -->
