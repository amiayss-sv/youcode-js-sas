/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · EXERCICE 12 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * LE DÉDOUBLONNEUR
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Écrivez une fonction qui prend un tableau avec des doublons [1, 2, 2, 3, 4, 4, 5] et retourne un nouveau tableau sans doublons.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-12
 * ▶️ Commande : node day04/exercices/exercice-12.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

 
const doublons = [1, 2, 2, 3, 4, 4, 5]
function supprimerDoublons(doublons) {
    const tabl=[]
for(let i=0;i<doublons.length;i++){
    if (tabl.includes(doublons[i]))
        continue;
   else
      tabl.push(doublons[i])
}
    return tabl ;
}
let resultat = supprimerDoublons(doublons);

console.log(resultat);