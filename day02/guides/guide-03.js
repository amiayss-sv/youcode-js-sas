/**
 * JOUR 02 — GUIDE 03
 * Les boucles imbriquées (Grille)
 *
 * OBJECTIF
 * Affichez un carré de 3 lignes et 3 colonnes rempli d'étoiles *.
 *
 * Aide : consulte ../02-guides.md seulement si tu bloques.
 */
'use strict';

// Boucle pour les 3 lignes
for (let i = 1; i <= 3; i++) {

    // Boucle pour les 3 colonnes
    for (let j = 1; j <= 3; j++) {
       
process.stdout.write("* ");

}
 // Passer à la ligne suivante
    console.log();
}