/**
 * JOUR 04 — GUIDE 02
 * Parcourir avec for...of
 *
 * OBJECTIF
 * Vous avez notes = [12, 15, 8, 19]. Calculez la moyenne des notes en parcourant le tableau.
 *
 * Aide : consulte ../02-guides.md seulement si tu bloques.
 */
'use strict';

let sum = 0;
let notes = [12, 15, 8, 19];

for (let i = 0; i <= 3; i++) {
    sum = sum + notes[i];
}

let moy = sum / 4;

console.log(`La moyenne des notes est ${moy}`);