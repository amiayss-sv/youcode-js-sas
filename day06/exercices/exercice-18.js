/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 18 · NIVEAU 3 : DÉFI (AVANCÉS)
 * COMPARAISON D'OBJETS (DEEP EQUAL CONCEPT)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Écrivez une fonction sontIdentiques(obj1, obj2) qui vérifie si deux objets littéraux (sans objets imbriqués) ont exactement les mêmes clés et les mêmes valeurs.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-18
 * ▶️ Commande : node day06/exercices/exercice-18.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

function sontIdentiques(obj1, obj2) {
    const cles1 = Object.keys(obj1);
    const cles2 = Object.keys(obj2);

    // Vérifier le nombre de clés
    if (cles1.length !== cles2.length) {
        return false;
    }

    // Vérifier les valeurs
    for (let cle of cles1) {
        if (obj1[cle] !== obj2[cle]) {
            return false;
        }
    }

    return true;
}

const obj1 = { nom: "Ali", age: 20 };
const obj2 = { nom: "Ali", age: 20 };
console.log(sontIdentiques(obj1, obj2));