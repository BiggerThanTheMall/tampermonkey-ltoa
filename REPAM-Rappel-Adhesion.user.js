// ==UserScript==
// @name         REPAM – Rappel frais d’adhésion association
// @namespace    https://github.com/BiggerThanTheMall/tampermonkey-ltoa
// @version      3.3.0
// @description  Rappel : REPAM facture 20€ de frais d’adhésion à l’association
// @author       REPAM
// @match        https://its.pwa-assurance.fr/repam/*
// @run-at       document-end
// @grant        none

// @updateURL    https://raw.githubusercontent.com/BiggerThanTheMall/tampermonkey-ltoa/main/REPAM-Rappel-Adhesion.user.js
// @downloadURL  https://raw.githubusercontent.com/BiggerThanTheMall/tampermonkey-ltoa/main/REPAM-Rappel-Adhesion.user.js
// ==/UserScript==


(function() {
    'use strict';

    const banner = document.createElement('div');
    banner.className = 'repam-frais-banner';
    banner.innerHTML = `
        <div class="banner-inner">
            <div class="icon-circle">
                ⚠️
            </div>
            <div class="content">
                <div class="badge-info">ATTENTION</div>
                <div class="text">
                    Frais d'adhésion association REPAM : <span class="price">+20€</span>
                </div>
                <div class="subtext">Facturés sur la 1ère échéance par REPAM</div>
                <div class="subtext-small">Non reversés • N'apparaît pas sur le devis</div>
            </div>
            <button class="btn-close">×</button>
        </div>
    `;

    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(450px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }

        @keyframes glow {
            0%, 100% {
                box-shadow: 0 4px 20px rgba(255, 86, 115, 0.2);
            }
            50% {
                box-shadow: 0 6px 30px rgba(255, 86, 115, 0.35);
            }
        }

        .repam-frais-banner {
            position: fixed;
            top: 15px;
            right: 25px;
            z-index: 999999;
            width: 450px;
            background: #ffffff;
            border-radius: 16px;
            border: 2px solid #ff5673;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif;
            animation: slideIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1),
                       glow 2.5s ease-in-out infinite;
        }

        .repam-frais-banner .banner-inner {
            display: flex;
            align-items: center;
            gap: 16px;
            padding: 20px 22px;
        }

        .repam-frais-banner .icon-circle {
            flex-shrink: 0;
            width: 46px;
            height: 46px;
            background: linear-gradient(135deg, #ff5673 0%, #ff7891 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            box-shadow: 0 4px 12px rgba(255, 86, 115, 0.3);
        }

        .repam-frais-banner .content {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 5px;
        }

        .repam-frais-banner .badge-info {
            display: inline-block;
            background: #ff5673;
            color: #ffffff;
            font-size: 10px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 0.8px;
            padding: 4px 10px;
            border-radius: 20px;
            width: fit-content;
        }

        .repam-frais-banner .text {
            font-size: 15px;
            font-weight: 600;
            color: #2c3e50;
            line-height: 1.4;
        }

        .repam-frais-banner .price {
            display: inline-block;
            background: linear-gradient(135deg, #4a5fc1 0%, #5d72d4 100%);
            color: #ffffff;
            font-weight: 800;
            font-size: 16px;
            padding: 3px 12px;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(74, 95, 193, 0.25);
        }

        .repam-frais-banner .subtext {
            font-size: 13px;
            color: #7f8c8d;
            font-weight: 500;
            margin-top: 2px;
        }

        .repam-frais-banner .subtext-small {
            font-size: 11px;
            color: #e74c3c;
            font-weight: 600;
            margin-top: 1px;
        }

        .repam-frais-banner .btn-close {
            flex-shrink: 0;
            width: 32px;
            height: 32px;
            background: #f8f9fa;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            color: #95a5a6;
            font-size: 22px;
            font-weight: 300;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.2s ease;
            line-height: 1;
        }

        .repam-frais-banner .btn-close:hover {
            background: #ff5673;
            color: #ffffff;
            border-color: #ff5673;
            transform: scale(1.08);
        }

        /* Responsive */
        @media (max-width: 1024px) {
            .repam-frais-banner {
                width: 420px;
                right: 20px;
            }
        }

        @media (max-width: 768px) {
            .repam-frais-banner {
                width: calc(100% - 40px);
                right: 20px;
                top: 12px;
            }
            .repam-frais-banner .banner-inner {
                padding: 16px 18px;
            }
        }
    `;

    document.head.appendChild(style);
    document.body.appendChild(banner);

    // Fermeture avec animation
    const closeBtn = banner.querySelector('.btn-close');
    closeBtn.addEventListener('click', () => {
        banner.style.animation = 'slideIn 0.4s ease reverse';
        setTimeout(() => {
            banner.remove();
            // localStorage.setItem('repam_frais_adhesion_dismissed', '1');
        }, 350);
    });
})();
