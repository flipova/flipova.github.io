<!-- corral:section:start id="cover" type="cover" locked="true" order="0" after="" -->
**SPÉCIFICATIONS ET EXIGENCES**

**Spécification**

Exigences · Règles vérifiées · Critères d’acceptation

**Informations du document**

|                        |                                     |
|------------------------|-------------------------------------|
| **Titre du document**  | <!--auto:doc.title-->Specifications et Exigences<!--/auto--> |
| **Référence**          | <!--auto:doc.ref-->FLP-SPC-001<!--/auto--> |
| **Version**            | <!--auto:doc.version-->0.1<!--/auto--> |
| **Date**               | <!--auto:doc.date-->13/11/2026<!--/auto--> |
| **Propriétaire**       | <!--auto:doc.owner-->@dadflip<!--/auto--> |
| **Statut de révision** | <!--auto:doc.status-->Brouillon<!--/auto--> |
| **Relecteurs**         | @dadflip                          |

<!-- corral:section:end id="cover" -->

<!-- corral:section:start id="sec-1" type="section" title="Présentation du document" level="1" order="1" after="cover" -->
# 1. Présentation du document

## 1.1 Objectif

Énoncer ce que le portail doit faire et les règles que la CI vérifie à chaque modification.

## 1.2 Périmètre

Le contenu et le comportement de la page, et la chaîne qui la publie.

## 1.3 Public concerné

Les développeurs qui découvrent les projets ouverts de Flipova, les mainteneurs du portail, l’exploitation, les relecteurs.

<!-- corral:section:end id="sec-1" -->

<!-- corral:section:start id="sec-2" type="section" title="Exigences fonctionnelles" level="1" order="2" after="sec-1" -->
# 2. Exigences fonctionnelles

| Id | Exigence |
| --- | --- |
| E-1 | La page présente chaque projet open source avec son résumé, sa commande d’installation et ses liens vers la documentation, le code et le paquet. |
| E-2 | La commande d’installation du projet mis en avant se copie en un clic, et la copie est annoncée aux lecteurs d’écran. |
| E-3 | La page est disponible en français et en anglais ; la langue d’ouverture est le dernier choix du lecteur, puis la langue du navigateur, puis le français. |
| E-4 | La page suit le thème clair ou sombre du navigateur. |
| E-5 | Une section liste les dernières versions de chaque projet (préversions signalées), avec un lien vers toutes les versions, et dit quand elles ne sont pas lisibles. |
| E-6 | Une section liste les sites et services publics. |
| E-7 | La page ne montre aucun dépôt, paquet ou service privé de Flipova. |

<!-- corral:section:end id="sec-2" -->

<!-- corral:section:start id="sec-3" type="section" title="Exigences non fonctionnelles" level="1" order="3" after="sec-2" -->
# 3. Exigences non fonctionnelles

| Id | Exigence |
| --- | --- |
| N-1 | Aucune couleur, police ou image n’est écrite dans le dépôt : la mise en forme vient de `@flipova/assets`. |
| N-2 | Aucun texte affiché n’est écrit dans le code : tout vient de `@flipova/languages`. |
| N-3 | Texte courant et boutons : contraste d’au moins 4,5 contre 1 dans les deux thèmes. |
| N-4 | Navigation au clavier complète, lien d’évitement, un seul titre de niveau 1, cibles d’au moins 44 pixels. |
| N-5 | Aucun défilement horizontal de 320 pixels de large à l’écran large. |
| N-6 | La seule requête externe à l’exécution est la lecture des versions publiques sur `api.github.com` ; si elle échoue, la page reste complète et renvoie vers GitHub. |

<!-- corral:section:end id="sec-3" -->

<!-- corral:section:start id="sec-4" type="section" title="Règles vérifiées par la CI" level="1" order="4" after="sec-3" -->
# 4. Règles vérifiées par la CI

`npm test` (Vitest) vérifie : chaque projet et chaque service a un nom et un résumé dans chaque langue ; chaque adresse est en https ; chaque dépôt est un dépôt de l’organisation et la commande d’installation nomme le paquet npm ; aucun nom de dépôt, de paquet ou de secret interne n’apparaît dans les données ni dans la page ; la page rendue contient les liens de chaque projet et service ; la lecture des versions (filtrage, limite, cache de dix minutes, échec explicite) ; les contrastes de texte atteignent 4,5. `npm run lint` applique ESLint, dont les règles des hooks React.

<!-- corral:section:end id="sec-4" -->

<!-- corral:section:start id="sec-5" type="section" title="Critères d’acceptation" level="1" order="5" after="sec-4" -->
# 5. Critères d’acceptation

La CI est verte, `npm run build` produit `dist/`, et la page se lit sans erreur dans les deux thèmes, en français et en anglais, de 320 à 1280 pixels de large.

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
