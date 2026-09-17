/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · CHALLENGE
 * GESTION DE PANIER E-COMMERCE
 * ─────────────────────────────────────────────────────────────
 *
 * 🏆 MISSION
 * Contexte : Vous codez la logique du panier d'achat d'une boutique en ligne.
 *
 * Consignes :
 * 1. Vous avez un tableau représentant les ID des articles dans le panier : panier = [101, 105, 101, 102].
 * 2. Créez une fonction ajouterAuPanier(id) qui ajoute l'article au tableau.
 * 3. Créez une fonction retirerDuPanier(id) qui retire Toutes les occurrences de cet ID du panier (ex: retirer 101).
 * 4. (Bonus) Créez une fonction afficherQuantites() qui compte et affiche le panier sous forme : Article 101 : 2 exemplaires, Article 105 : 1 exemplaire...
 *
 * 📖 Consigne détaillée : ./README.md
 * ▶️ Commande : node day04/challenge/challenge.js
 */
'use strict';

const panier = [101, 105, 101, 102];

// Ajouter un article
function ajouterAuPanier(id) {
    panier.push(id);
}

// Retirer toutes les occurrences d'un article
function retirerDuPanier(id) {
    let nouveauPanier = [];

    for (let i = 0; i < panier.length; i++) {
        if (panier[i] !== id) {
            nouveauPanier.push(panier[i]);
        }
    }

    panier.length = 0;

    for (let i = 0; i < nouveauPanier.length; i++) {
        panier.push(nouveauPanier[i]);
    }
}

// Afficher les quantités
function afficherQuantites() {
    let quantites = {};

    for (let i = 0; i < panier.length; i++) {
        let id = panier[i];

        if (quantites[id]) {
            quantites[id]++;
        } else {
            quantites[id] = 1;
        }
    }

    for (let id in quantites) {
        console.log(`Article ${id} : ${quantites[id]} exemplaires`);
    }
}

afficherQuantites();