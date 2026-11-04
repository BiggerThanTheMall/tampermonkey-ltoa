# Installation des outils LTOA

Cette page est la référence unique pour l'installation des scripts Tampermonkey LTOA.

Les liens « Installer » ouvrent directement le fichier `.user.js` public dans Tampermonkey. Les dépôts privés nécessitent la procédure manuelle indiquée plus bas.

| Outil | Version vérifiée | Installation |
|---|---:|---|
| Assistant vocal Notes/Tâches | 9.8.4 | [Installer](https://raw.githubusercontent.com/BiggerThanTheMall/ajout_notes_et_taches_par_prise__2_note_vocale/main/ajout_note_et_tache_vocale.user.js) |
| Terminer & Dupliquer tâche | 2.3 | [Installer](https://raw.githubusercontent.com/BiggerThanTheMall/terminer-et-dupliquer-tache/main/terminer-et-dupliquer-tache.user.js) |
| Déclaration CIEL | 1.0.18 | [Installer](https://raw.githubusercontent.com/BiggerThanTheMall/declaration-ciel/main/declaration-ciel-automatique.user.js) |
| Aperçu email centré | 1.0.1 | [Installer](https://raw.githubusercontent.com/BiggerThanTheMall/Modulr-Apercu-Email-Centre.user.js/main/Modulr-Apercu-Email-Centre.user.js) |
| Affichage âge client | 1.1.1 | [Installer](https://raw.githubusercontent.com/BiggerThanTheMall/ModulR-Affichage-Age/main/Modulr-Affichage-Age.user.js) |
| Boutons copie rapide | 2.0.1 | [Installer](https://raw.githubusercontent.com/BiggerThanTheMall/ModulR-Boutons-Copie/main/Modulr-Boutons-Copie-Rapide.user.js) |
| OGGO Projet chaud | 1.5 | [Installer](https://raw.githubusercontent.com/BiggerThanTheMall/OGGO-DATA-Projet-Chaud/main/OGGO-Projet-Chaud-Auto.user.js) |
| Dupliquer & Associer Client | 1.9.1 | [Installer](https://raw.githubusercontent.com/BiggerThanTheMall/Duplique-une-fiche-client-et-l-associe-automatiquement-au-client-d-origine/main/Modulr-Dupliquer-Associer-Client.user.js) |
| Export ModulR → OGGO/AXA | 4.10.1 | [Installer](https://raw.githubusercontent.com/BiggerThanTheMall/Exporte-automatiquement-un-client-de-Modulr-vers-OGGO-Data-ou-AXA-Particulier-Entreprise-/main/Modulr-Export-Client-OGGO-AXA.user.js) |
| Âge dirigeants entreprise | 2.2 | [Installer](https://raw.githubusercontent.com/BiggerThanTheMall/-l-ge-et-la-date-de-naissance-de-TOUS-les-dirigeants/main/Modulr-Age-Dirigeants-Entreprise.user.js) |
| Création devis en masse | 2.0.1 | [Installer](https://raw.githubusercontent.com/BiggerThanTheMall/cr-er-plusieurs-devis-simultan-ment/main/modulr-creation-devis-en-masse-iframes.user.js) |
| OCR documents ModulR | 10.2.2 | [Installer](https://raw.githubusercontent.com/BiggerThanTheMall/Auto-remplissage-CRM-Modulr---OCR-CNI-Permis-Passeport-KBIS-via-Gemini/main/Modulr-Remplissage-Auto-OCR-V9.user.js) |
| Correcteur Email Gemini | 3.4.0 | [Installer](https://raw.githubusercontent.com/BiggerThanTheMall/modulr-gemini-email-corrector/main/Modulr_-_Correcteur_Email_Gemini.user.js) |
| Rapport Quotidien | 5.9.6 | [Installer](https://raw.githubusercontent.com/BiggerThanTheMall/G-n-re-un-rapport-d-activit-quotidien-complet-emails-t-ches-journalisation-vulgaris-e-/main/LTOA-Modulr-Rapport-Quotidien.user.js) |
| Tâche auto changement état devis | 11.3.0 | [Installer](https://raw.githubusercontent.com/BiggerThanTheMall/tache_automatique/main/creation_tache_automatique_changement_etat_devis.user.js) |
| Association rapide fiches récentes | 1.1.0 | [Installer](https://raw.githubusercontent.com/BiggerThanTheMall/classer_mail_fiche_recentes/main/Modulr-Association-Rapide.user.js) |
| Dictée email | 3.1.1 | [Installer](https://raw.githubusercontent.com/BiggerThanTheMall/ecriture_mail_reconnaissance_vocale/main/micro_mail_vocal.user.js) |
| Liaison DER mail | 8.2 | [Installer](https://raw.githubusercontent.com/BiggerThanTheMall/ajouter-der-mail/main/bouton-DER-mail.user.js) |
| Import Aircall | 1.2.2 | [Installer](https://raw.githubusercontent.com/BiggerThanTheMall/modulr-aircall-import/main/modulr-aircall-import.user.js) |
| Déclaration AGIS | 1.1.6 | [Installer](https://raw.githubusercontent.com/BiggerThanTheMall/declaration-agis/main/declaration-agis-automatique.user.js) |
| REPAM rappel adhésion | 3.3.1 | [Installer](https://raw.githubusercontent.com/BiggerThanTheMall/tampermonkey-ltoa/main/REPAM-Rappel-Adhesion.user.js) |
| Export ModulR → KOALAH — dépôt privé | 0.4.10 | [Ouvrir le fichier GitHub](https://github.com/BiggerThanTheMall/export_modulr_koalah/blob/main/export_modulr_koalah.user.js) — installation manuelle ci-dessous |

## Vérification des versions

Inventaire contrôlé le 4 novembre 2026 sur les branches `main` des 22 scripts. Les 21 liens d'installation publics ont été testés sans authentification : réponse HTTP 200 et contenu userscript. KOALAH reste privé : ses anciennes URL brutes renvoyaient HTTP 404 sans authentification. Comparez les versions indiquées à `@version` dans Tampermonkey.

## Installation et mise à jour de KOALAH (dépôt privé)

1. Se connecter à GitHub avec un compte autorisé à accéder au dépôt KOALAH.
2. Ouvrir le fichier via le lien du tableau et copier tout son contenu.
3. Dans Tampermonkey, ouvrir le script KOALAH existant, ou créer un nouveau script s'il n'est pas installé.
4. Remplacer tout le contenu, enregistrer avec `Ctrl + S`, puis recharger Modulr et Koalah.

La version 0.4.10 désactive les URL de mise à jour automatique qui renvoyaient 404. Les mises à jour de KOALAH restent manuelles tant qu'aucune adresse de distribution accessible à Tampermonkey n'est configurée. Le dépôt conserve sa confidentialité.

## Important

- Pour un collaborateur déjà équipé, ne réinstallez que les scripts dont la version installée est inférieure à celle affichée ici.
- Pour un nouveau poste, cette page sert de point d'entrée unique.
- Les scripts publics conservent leurs propres `@updateURL` et `@downloadURL` vérifiés. KOALAH utilise la procédure manuelle ci-dessus.
- Si un autre script installé affiche encore une ancienne adresse dans Tampermonkey, ouvrir son lien « Installer » une fois pour reprendre les métadonnées actuelles.
