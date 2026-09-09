/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 01 · CHALLENGE
 * LE SIMULATEUR DE PRÊT BANCAIRE
 * ─────────────────────────────────────────────────────────────
 *
 * 🏆 MISSION
 * Vous allez coder le cœur logique d'une application de crédit bancaire.
 *
 * Consignes :
 * 1. L'utilisateur fournit 3 données (variables) : montantEmprunte (ex: 100000), dureeEnMois (ex: 24), revenuMensuel (ex: 8000).
 * 2. Vérifiez si l'utilisateur est éligible : la mensualité estimée (montantEmprunte / dureeEnMois) ne doit pas dépasser 30% de son revenuMensuel.
 * 3. S'il est éligible, affichez "Prêt accordé. Mensualité : [X] MAD".
 * 4. S'il n'est pas éligible, mais que son revenu est supérieur à 10000 MAD, proposez d'augmenter la durée. Sinon, affichez "Prêt refusé".
 *
 * Exemple de test : montant 100 000, 24 mois (mensualité: 4166.66). 30% de 8000 = 2400. Donc le prêt est refusé, et comme le revenu n'est pas > 10000, "Prêt refusé".
 *
 * 📖 Consigne détaillée : ./README.md
 * ▶️ Commande : node day01/challenge/challenge.js
 */
'use strict';

// Découpe d'abord le problème en petites étapes.

let montantEmprunte = 100000;
let dureeEnMois = 24;
let revenuMensuel = 8000;

// Calcul de la mensualité
let mensualite = montantEmprunte / dureeEnMois;

// Calcul de la limite : 30% du revenu mensuel (*0.3)
let limite = revenuMensuel * 0.30;

// Vérifier si la mensualité ne dépasse pas 30% du revenu
if (mensualite <= limite) {
    // Si oui, le prêt est accordé
    console.log("Prêt accordé. Mensualité :", mensualite, "MAD");
}

// Si le prêt n'est pas éligible, vérifier si le revenu dépasse 10000 MAD
else if (revenuMensuel > 10000) {
    // Proposer d'augmenter la durée du prêt
    console.log("Nous vous proposons d'augmenter la durée du prêt.");
}

// Si aucune des conditions précédentes n'est vraie
else {
   
    console.log("Prêt refusé");
}

