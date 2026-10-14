// ==UserScript==
// @name         LTOA - Pack Outils Tampermonkey
// @namespace    https://github.com/BiggerThanTheMall/tampermonkey-ltoa
// @version      1.1.0
// @description  Point d'entrée unique pour installer ou remettre à jour les outils LTOA.
// @author       LTOA Assurances
// @match        https://courtage.modulr.fr/*
// @run-at       document-idle
// @grant        GM_openInTab
// @updateURL    https://raw.githubusercontent.com/BiggerThanTheMall/tampermonkey-ltoa/main/LTOA-Pack-Install.user.js
// @downloadURL  https://raw.githubusercontent.com/BiggerThanTheMall/tampermonkey-ltoa/main/LTOA-Pack-Install.user.js
// ==/UserScript==

(function () {
    'use strict';

    const SCRIPTS = [
        ['Rapport quotidien V5 · v5.7.1', 'https://raw.githubusercontent.com/BiggerThanTheMall/G-n-re-un-rapport-d-activit-quotidien-complet-emails-t-ches-journalisation-vulgaris-e-/main/LTOA-Modulr-Rapport-Quotidien.user.js'],
        ['Tâche automatique changement état devis · v11.3.0', 'https://raw.githubusercontent.com/BiggerThanTheMall/tache_automatique/main/creation_tache_automatique_changement_etat_devis.user.js'],
        ['Terminer et dupliquer tâche · v2.3', 'https://raw.githubusercontent.com/BiggerThanTheMall/terminer-et-dupliquer-tache/main/terminer-et-dupliquer-tache.user.js'],
        ['Dupliquer et associer client · v1.9.1', 'https://raw.githubusercontent.com/BiggerThanTheMall/Duplique-une-fiche-client-et-l-associe-automatiquement-au-client-d-origine/main/Modulr-Dupliquer-Associer-Client.user.js'],
        ['Association rapide fiches récentes · v1.1.0', 'https://raw.githubusercontent.com/BiggerThanTheMall/classer_mail_fiche_recentes/main/Modulr-Association-Rapide.user.js'],
        ['Aperçu email centré · v1.0.1', 'https://raw.githubusercontent.com/BiggerThanTheMall/Modulr-Apercu-Email-Centre.user.js/main/Modulr-Apercu-Email-Centre.user.js'],
        ['Boutons copie rapide · v2.0.1', 'https://raw.githubusercontent.com/BiggerThanTheMall/ModulR-Boutons-Copie/main/Modulr-Boutons-Copie-Rapide.user.js'],
        ['Affichage âge client · v1.1.1', 'https://raw.githubusercontent.com/BiggerThanTheMall/ModulR-Affichage-Age/main/Modulr-Affichage-Age.user.js'],
        ['Âge dirigeants entreprise · v2.2', 'https://raw.githubusercontent.com/BiggerThanTheMall/-l-ge-et-la-date-de-naissance-de-TOUS-les-dirigeants/main/Modulr-Age-Dirigeants-Entreprise.user.js'],
        ['Création devis en masse · v1.7', 'https://raw.githubusercontent.com/BiggerThanTheMall/cr-er-plusieurs-devis-simultan-ment/main/modulr-creation-devis-en-masse-iframes.user.js'],
        ['Export client ModulR vers OGGO / AXA · v4.10.1', 'https://raw.githubusercontent.com/BiggerThanTheMall/Exporte-automatiquement-un-client-de-Modulr-vers-OGGO-Data-ou-AXA-Particulier-Entreprise-/main/Modulr-Export-Client-OGGO-AXA.user.js'],
        ['OGGO Projet chaud · v1.5', 'https://raw.githubusercontent.com/BiggerThanTheMall/OGGO-DATA-Projet-Chaud/main/OGGO-Projet-Chaud-Auto.user.js'],
        ['OCR documents vers ModulR · v10.2.2', 'https://raw.githubusercontent.com/BiggerThanTheMall/Auto-remplissage-CRM-Modulr---OCR-CNI-Permis-Passeport-KBIS-via-Gemini/main/Modulr-Remplissage-Auto-OCR-V9.user.js'],
        ['Correcteur email Gemini · v3.4.0', 'https://raw.githubusercontent.com/BiggerThanTheMall/modulr-gemini-email-corrector/main/Modulr_-_Correcteur_Email_Gemini.user.js'],
        ['Dictée email · v3.1.1', 'https://raw.githubusercontent.com/BiggerThanTheMall/ecriture_mail_reconnaissance_vocale/main/micro_mail_vocal.user.js'],
        ['Assistant vocal notes et tâches · v9.8.4', 'https://raw.githubusercontent.com/BiggerThanTheMall/ajout_notes_et_taches_par_prise__2_note_vocale/main/ajout_note_et_tache_vocale.user.js'],
        ['Liaison DER mail · v8.2', 'https://raw.githubusercontent.com/BiggerThanTheMall/ajouter-der-mail/main/bouton-DER-mail.user.js'],
        ['Import Aircall · v1.2.2', 'https://raw.githubusercontent.com/BiggerThanTheMall/modulr-aircall-import/main/modulr-aircall-import.user.js'],
        ['Déclaration AGIS · v1.1.6', 'https://raw.githubusercontent.com/BiggerThanTheMall/declaration-agis/main/declaration-agis-automatique.user.js'],
        ['Déclaration CIEL · v1.0.18', 'https://raw.githubusercontent.com/BiggerThanTheMall/declaration-ciel/main/declaration-ciel-automatique.user.js'],
        ['REPAM rappel adhésion · v3.3.1', 'https://raw.githubusercontent.com/BiggerThanTheMall/tampermonkey-ltoa/main/REPAM-Rappel-Adhesion.user.js'],
        ['Export ModulR vers KOALAH · v0.3.8', 'https://raw.githubusercontent.com/BiggerThanTheMall/export_modulr_koalah/main/export_modulr_koalah.user.js']
    ];

    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

    async function openAll() {
        const button = document.getElementById('ltoa-pack-open-all');
        if (button) {
            button.disabled = true;
            button.textContent = 'Ouverture en cours…';
        }

        for (const [, url] of SCRIPTS) {
            GM_openInTab(url, { active: false, insert: true, setParent: true });
            await sleep(350);
        }

        if (button) {
            button.disabled = false;
            button.textContent = `Ouvrir les ${SCRIPTS.length} installations / mises à jour`;
        }
    }

    function showPack() {
        document.getElementById('ltoa-pack-overlay')?.remove();

        const overlay = document.createElement('div');
        overlay.id = 'ltoa-pack-overlay';
        overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:2147483647;display:flex;align-items:center;justify-content:center;font-family:Arial,sans-serif;';

        const modal = document.createElement('div');
        modal.style.cssText = 'width:min(760px,92vw);max-height:86vh;overflow:auto;background:#fff;color:#222;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,.35);padding:22px;';

        const title = document.createElement('h2');
        title.textContent = 'Pack outils LTOA';
        title.style.margin = '0 0 8px';
        modal.appendChild(title);

        const info = document.createElement('p');
        info.textContent = 'Un clic ouvre tous les scripts. Tampermonkey demandera ensuite de confirmer chaque installation / mise à jour.';
        info.style.cssText = 'margin:0 0 16px;color:#555;line-height:1.45;';
        modal.appendChild(info);

        const openAllBtn = document.createElement('button');
        openAllBtn.id = 'ltoa-pack-open-all';
        openAllBtn.textContent = `Ouvrir les ${SCRIPTS.length} installations / mises à jour`;
        openAllBtn.style.cssText = 'width:100%;padding:12px 16px;border:0;border-radius:8px;background:#193552;color:white;font-weight:700;cursor:pointer;margin-bottom:16px;';
        openAllBtn.onclick = openAll;
        modal.appendChild(openAllBtn);

        const list = document.createElement('div');
        list.style.cssText = 'display:grid;gap:7px;';
        SCRIPTS.forEach(([name, url], index) => {
            const row = document.createElement('div');
            row.style.cssText = 'display:flex;align-items:center;gap:10px;padding:8px 10px;border:1px solid #e5e5e5;border-radius:7px;';

            const label = document.createElement('span');
            label.textContent = `${index + 1}. ${name}`;
            label.style.cssText = 'flex:1;font-size:13px;';

            const btn = document.createElement('button');
            btn.textContent = 'Installer';
            btn.style.cssText = 'padding:6px 10px;border:1px solid #193552;border-radius:6px;background:white;color:#193552;cursor:pointer;font-weight:600;';
            btn.onclick = () => GM_openInTab(url, { active: true, insert: true, setParent: true });

            row.append(label, btn);
            list.appendChild(row);
        });
        modal.appendChild(list);

        const close = document.createElement('button');
        close.textContent = 'Fermer';
        close.style.cssText = 'width:100%;padding:10px;margin-top:16px;border:0;border-radius:8px;background:#eee;cursor:pointer;';
        close.onclick = () => overlay.remove();
        modal.appendChild(close);

        overlay.appendChild(modal);
        overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });
        document.body.appendChild(overlay);
    }

    const launcher = document.createElement('button');
    launcher.textContent = 'Pack LTOA';
    launcher.title = 'Installer / mettre à jour les outils LTOA';
    launcher.style.cssText = 'position:fixed;right:18px;bottom:18px;z-index:2147483646;padding:9px 13px;border:0;border-radius:8px;background:#193552;color:white;font:bold 12px Arial,sans-serif;cursor:pointer;box-shadow:0 3px 12px rgba(0,0,0,.25);';
    launcher.onclick = showPack;
    document.body.appendChild(launcher);
})();
