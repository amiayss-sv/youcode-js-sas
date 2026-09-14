/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 02 · EXERCICE 16 · NIVEAU 3 : DÉFI (AVANCÉS)
 * SAPIN CENTRÉ
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Allez plus loin, dessinez une pyramide centrée de 5 lignes :
 *
 *     *
 *    *
 *   *
 *  *
 * -
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-16
 * ▶️ Commande : node day02/exercices/exercice-16.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

// les lignes 
for (let i = 1; i <= 5; i++) {

    // Espaces
    for (let j = 1; j <= 5 - i; j++) {
        process.stdout.write(" ");
    }

    // Étoiles
    for (let j = 1; j <= 2 * i -1; j++) {
        process.stdout.write("*");
    }

    console.log();
}