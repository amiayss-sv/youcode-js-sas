/**
 * ─────────────────────────────────────────────────────────────
 * Jour 05 · EXERCICE 20 · NIVEAU 3 : DÉFI (AVANCÉS)
 * GÉNÉRATEUR DE SLUG SEO
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * En développement web, une URL amicale (Slug) transforme le titre d'un article en texte propre.
 * Transformez "Les 10 secrets de JavaScript !" en "les-10-secrets-de-javascript".
 * Règles : Tout en minuscules, remplacez les espaces par des tirets, supprimez les caractères de ponctuation (!, ?, etc.).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-20
 * ▶️ Commande : node day05/exercices/exercice-20.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

function creerSlug(titre) {
     let resultat = titre.toLowerCase()                                // minuscules

    resultat = resultat.replace(/[^\w\s]/g, "")      // supprimer les ponctuations                                          
    resultat = resultat.trim()
    resultat  = resultat.replace(/\s+/g, "-")  //  remplacer espaces par tirets
   

         return resultat ;  // retourner le résultat
}
console.log(creerSlug("Les 10 secrets de JavaScript !"))