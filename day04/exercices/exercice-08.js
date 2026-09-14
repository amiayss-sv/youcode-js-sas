/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · EXERCICE 08 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * RECHERCHE DU MAXIMUM ET MINIMUM
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction qui parcourt un tableau de nombres aléatoires et retourne le plus grand et le plus petit nombre, SANS utiliser Math.max ni Math.min.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-08
 * ▶️ Commande : node day04/exercices/exercice-08.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

function trouverExtremes(nombres) {
    let maximum = nombres[0];
    let minimum = nombres[0];

    for (let i = 0; i < nombres.length; i++) {

        if (nombres[i] > maximum) {
            maximum = nombres[i];
        }

        if (nombres[i] < minimum) {
            minimum = nombres[i];
        }
    }

    return {
        maximum: maximum,
        minimum: minimum
    };
}

let nombres = [7, 2, 15, 4, 9];

let resultat = trouverExtremes(nombres);

console.log("Le maximum est :", resultat.maximum);
console.log("Le minimum est :", resultat.minimum);