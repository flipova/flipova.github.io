<!-- corral:section:start id="cover" type="cover" locked="true" order="0" after="" -->
**INDEX ET GUIDE DE LECTURE**

**Index de la documentation**

Carte des documents · Parcours de lecture · Conventions

**Informations du document**

|                        |                                     |
|------------------------|-------------------------------------|
| **Titre du document**  | <!--auto:doc.title-->Index et Guide de Lecture<!--/auto--> |
| **Référence**          | <!--auto:doc.ref-->FLP-000-001<!--/auto--> |
| **Version**            | <!--auto:doc.version-->0.1<!--/auto--> |
| **Date**               | <!--auto:doc.date-->13/11/2026<!--/auto--> |
| **Propriétaire**       | <!--auto:doc.owner-->@dadflip<!--/auto--> |
| **Statut de révision** | <!--auto:doc.status-->Brouillon<!--/auto--> |
| **Relecteurs**         | @dadflip                          |

<!-- corral:section:end id="cover" -->

<!-- corral:section:start id="sec-1" type="section" title="Présentation du document" level="1" order="1" after="cover" -->
# 1. Présentation du document

## 1.1 Objectif

Aider à trouver le bon document sur `flipova.github.io`, le portail développeur de Flipova, publié à la racine du site de l’organisation (`https://flipova.github.io`). Il ne montre que du public : projets open source, versions, sites et services publics.

## 1.2 Périmètre

Les huit documents du dépôt, version 0.1.

## 1.3 Public concerné

Les développeurs qui découvrent les projets ouverts de Flipova, les mainteneurs du portail, l’exploitation, les relecteurs.

<!-- corral:section:end id="sec-1" -->

<!-- corral:section:start id="sec-2" type="section" title="Les documents" level="1" order="2" after="sec-1" -->
# 2. Les documents

| Référence | Contenu |
| --- | --- |
| FLP-ARC-001 | ce que montre le portail, d’où vient chaque information, comment il est servi |
| FLP-SPC-001 | exigences et règles vérifiées par la CI |
| FLP-DEV-001 | ajouter un projet ou un service, modifier un texte, lancer et tester le portail |
| FLP-OPS-001 | publier : tags, environnements, GitHub Pages, retour arrière |
| FLP-SEC-001 | ce qui reste hors du portail, secrets, contenu servi |
| FLP-PRJ-001 | périmètre, livrables, risques, gouvernance |
| FLP-DEC-001 | registre des décisions et points ouverts |

<!-- corral:section:end id="sec-2" -->

<!-- corral:section:start id="sec-3" type="section" title="Par où commencer" level="1" order="3" after="sec-2" -->
# 3. Par où commencer

Ajouter un projet ou un service : FLP-DEV-001. Publier : FLP-OPS-001. Comprendre pourquoi rien de privé n’y figure : FLP-DEC-001 (D-3).

<!-- corral:section:end id="sec-3" -->

<!-- corral:section:start id="sec-4" type="section" title="Correspondance avec l’ancienne documentation" level="1" order="4" after="sec-3" -->
# 4. Correspondance avec l’ancienne documentation

Le dépôt n’avait pas de dossier `documentation/`. Le `README.md` reste la présentation courte. L’ancien contenu de la page (un « score » et des liens écrits à la main dans `App.jsx`) est remplacé : voir FLP-DEC-001 (D-1).

<!-- corral:section:end id="sec-4" -->

<!-- corral:section:start id="sec-5" type="section" title="Décisions de consolidation" level="1" order="5" after="sec-4" -->
# 5. Décisions de consolidation

Les décisions D-1 à D-9 de FLP-DEC-001 fixent le périmètre du portail. Elles s’alignent sur la documentation du backend (FLP-OPS-003 et FLP-DEC-001 du dépôt `flipova.backend`).

<!-- corral:section:end id="sec-5" -->

<!-- corral:section:start id="sec-6" type="section" title="Points ouverts" level="1" order="6" after="sec-5" -->
# 6. Points ouverts

Voir FLP-DEC-001, section 5 : source de GitHub Pages, secret `ORG_READ_TOKEN`, environnement `production`, services publics à ajouter, Corral public, mise à jour de `@flipova/languages`.

<!-- corral:section:end id="sec-6" -->

<!-- corral:section:start id="sec-7" type="section" title="Conventions" level="1" order="7" after="sec-6" -->
# 7. Conventions

Texte en français, code et identifiants en anglais. Chemins entre accents graves. Les balises `corral:section` délimitent les zones gérées par Corral.

<!-- corral:section:end id="sec-7" -->

<!-- corral:section:start id="sec-8" type="section" title="Contrôle qualité" level="1" order="8" after="sec-7" -->
# 8. Contrôle qualité

`corral docs test --repo flipova.github.io` (aucune zone vide) et `corral docs check --repo flipova.github.io` (balises valides, aucun motif sensible).

<!-- corral:section:end id="sec-8" -->

<!-- corral:section:start id="sec-9" type="section" title="Annexes et références" level="1" order="9" after="sec-8" -->
# 9. Annexes et références

## Documents associés

FLP-ARC-001 (architecture), FLP-SPC-001 (exigences), FLP-DEV-001 (développeur), FLP-OPS-001 (opérations), FLP-SEC-001 (sécurité), FLP-PRJ-001 (projet), FLP-DEC-001 (décisions).

## Journal des modifications

| Version | Date | Changement |
| --- | --- | --- |
| 0.1 | 2026-11-13 | Création : premier jeu de documents du dépôt |

<!-- corral:section:end id="sec-9" -->
