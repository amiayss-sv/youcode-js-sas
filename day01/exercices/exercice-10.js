/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 01 · EXERCICE 10 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * CATÉGORIES D'ÂGE (IF / ELSE IF / ELSE)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Selon l'âge d'une personne, affichez sa catégorie :
 * - < 12 : "Enfant"
 * - Entre 12 et 17 : "Adolescent"
 * - Entre 18 et 64 : "Adulte"
 * - >= 65 : "Senior"
 * Exemple : age = 15 -> Adolescent
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-10
 * ▶️ Commande : node day01/exercices/exercice-10.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
let age = 15;
let categorie;

if (age < 12) {
    categorie = "Enfant";
}
else if (age <= 17) {
    categorie = "Adolescent";
}
else if (age <= 64) {
    categorie = "Adulte";
}
else {
    categorie = "Senior";
}

console.log(categorie);