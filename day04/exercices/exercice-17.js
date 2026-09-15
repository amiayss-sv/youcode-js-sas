/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · EXERCICE 17 · NIVEAU 3 : DÉFI (AVANCÉS)
 * OCCURRENCES
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction qui prend un tableau de mots ["pomme", "banane", "pomme", "orange", "banane", "pomme"]. Comptez combien de fois chaque élément apparaît. (Vous pouvez afficher : "pomme: 3, banane: 2, orange: 1").
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-17
 * ▶️ Commande : node day04/exercices/exercice-17.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

function compterElements(tableau) {
    let compteur = {};

    for (let i = 0; i < tableau.length; i++) {
        let mot = tableau[i];

        if (compteur[mot]) {
            compteur[mot]++;
        } else {
            compteur[mot] = 1;
        }
    }

    return compteur;
}

const mots = ["pomme", "banane", "pomme", "orange", "banane", "pomme"];

console.log(compterElements(mots));