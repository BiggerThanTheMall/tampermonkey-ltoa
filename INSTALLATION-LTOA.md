# Installation des outils LTOA

Cette page est la référence unique pour l'installation des scripts Tampermonkey LTOA.

Les liens « Installer » ouvrent directement le fichier `.user.js` dans Tampermonkey. Le dépôt de chaque script doit être public pour permettre les mises à jour automatiques.

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
| Export ModulR → KOALAH | 0.4.11 | [Installer](https://raw.githubusercontent.com/BiggerThanTheMall/export_modulr_koalah/main/export_modulr_koalah.user.js) |

## Vérification des versions

Inventaire contrôlé le 4 novembre 2026 sur les branches `main` des 22 scripts. Les 21 liens d'installation publics ont été testés sans authentification : réponse HTTP 200 et contenu userscript. KOALAH nécessite le passage du dépôt en public dans les réglages GitHub ; tant que cette action n'est pas effectuée, son lien renvoie HTTP 404 sans authentification. Comparez les versions indiquées à `@version` dans Tampermonkey.

## Mise à jour automatique de KOALAH

Les adresses `@updateURL` et `@downloadURL` d'origine sont rétablies en version 0.4.11. Le nom et le namespace restent identiques.

Le dépôt `export_modulr_koalah` doit être public. Si son lien renvoie encore 404, passer le dépôt en public dans GitHub : Settings → General → Danger Zone → Change repository visibility → Make public.

Si la version 0.4.10 a été installée, ouvrir une fois le lien « Installer » de KOALAH pour réactiver les mises à jour automatiques. Les anciennes versions qui conservent l'URL d'origine pourront récupérer la nouvelle version automatiquement une fois le dépôt public.

## Important

- Pour un collaborateur déjà équipé, ne réinstallez que les scripts dont la version installée est inférieure à celle affichée ici.
- Pour un nouveau poste, cette page sert de point d'entrée unique.
- Les scripts conservent leurs adresses `@updateURL` et `@downloadURL` d'origine. La disponibilité automatique de KOALAH dépend du passage de son dépôt en public.
- Si un autre script installé affiche encore une ancienne adresse dans Tampermonkey, ouvrir son lien « Installer » une fois pour reprendre les métadonnées actuelles.
