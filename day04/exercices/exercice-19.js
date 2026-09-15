/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · EXERCICE 19 · NIVEAU 3 : DÉFI (AVANCÉS)
 * RECHERCHE BINAIRE (CONCEPT DE BASE)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Contrairement à la recherche linéaire (parcourir tout le tableau un par un), la recherche binaire cherche un élément dans un tableau TRIÉ en coupant l'espace de recherche en deux à chaque fois. Essayez de comprendre et d'implémenter ce concept pour trouver l'index de 45 dans [10, 20, 30, 40, 45, 50, 60].
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-19
 * ▶️ Commande : node day04/exercices/exercice-19.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
function rechercheMilieu(tableau){
let debut = 0;
let fin = tableau.length - 1;
while(debut<fin){
    milieu=(debut + fin) / 2
    if(milieu = 45)
        return milieu;
    else if ( milieu < 45)
        return "déplacer debut à droite"
    else 
        return "déplacer fin à gauche";
}
const tableau=[10, 20, 30, 40, 45, 50, 60]
console.log(rechercheMilieu(tableau))
 
}
