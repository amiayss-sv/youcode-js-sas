/**
 * ─────────────────────────────────────────────────────────────
 * Jour 05 · EXERCICE 16 · NIVEAU 3 : DÉFI (AVANCÉS)
 * EXTRACTION DE HASHTAGS
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * À partir d'un tweet : "Beau temps à #Nador aujourd'hui avec la team #YouCode !", extrayez tous les hashtags et retournez-les dans un tableau ["#Nador", "#YouCode"].
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-16
 * ▶️ Commande : node day05/exercices/exercice-16.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

let tweet = "Beau temps à #Nador aujourd'hui avec la team #YouCode !";

let resultat = tweet.match(/#\w+/g); //Cherche dans cette chaîne les éléments qui correspondent à ma regex

console.log(resultat);


/*#       → cherche le caractère #
\w      → cherche un caractère alphanumérique (lettre, chiffre ou _)
+       → un ou plusieurs caractères
g       → cherche toutes les occurrences */