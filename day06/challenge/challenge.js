/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · CHALLENGE
 * LE POKEDEX (ANNUAIRE DE DONNÉES)
 * ─────────────────────────────────────────────────────────────
 *
 * 🏆 MISSION
 * Contexte : Vous devez gérer une mini-base de données d'utilisateurs.
 *
 * Consignes :
 * 1. Vous avez un tableau utilisateurs = [].
 * 2. Créez une fonction ajouterUtilisateur(nom, email) qui crée un objet { id, nom, email } (générez un ID unique simple) et l'ajoute au tableau.
 * 3. Créez une fonction trouverParEmail(email) qui retourne l'objet utilisateur correspondant.
 * 4. Créez une fonction supprimerParId(id) qui supprime l'utilisateur du tableau.
 * 5. Créez une fonction afficherAnnuaire() qui affiche joliment la liste complète dans la console.
 *
 * 📖 Consigne détaillée : ./README.md
 * ▶️ Commande : node day06/challenge/challenge.js
 */
'use strict';

// Découpe d'abord le problème en petites étapes.


let utilisateurs = [];

//  Ajouter un utilisateur
function ajouterUtilisateur(nom, email) {
    let id = utilisateurs.length + 1;

    let utilisateur = {
        id: id,
        nom: nom,
        email: email
    };

    utilisateurs.push(utilisateur);
}

// Trouver un utilisateur par email
function trouverParEmail(email) {
    for (let i = 0; i < utilisateurs.length; i++) {
        if (utilisateurs[i].email === email) {
            return utilisateurs[i];
        }
    } 

    return undefined;
}

// Supprimer un utilisateur par ID
function supprimerParId(id) {
    for (let i = 0; i < utilisateurs.length; i++) {
        if (utilisateurs[i].id === id) {
            utilisateurs.splice(i, 1);
            return;
        }
    }
}

//  Afficher tous les utilisateurs
function afficherAnnuaire() {
    console.log("Annuaire des utilisateurs :");

    for (let i = 0; i < utilisateurs.length; i++) {
    console.log(`ID : ${utilisateurs[i].id} | Nom : ${utilisateurs[i].nom} | Email : ${utilisateurs[i].email}` );
    }
}


ajouterUtilisateur("Adam", "adam@gmail.com");
ajouterUtilisateur("Sara", "sara@gmail.com");
ajouterUtilisateur("Anas", "Anas@gmail.com");

afficherAnnuaire();

console.log(trouverParEmail("sara@gmail.com"));

supprimerParId(2);

afficherAnnuaire();