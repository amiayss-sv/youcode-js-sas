/**
 * JOUR 03 — GUIDE 02
 * Comprendre la Portée (Scope)
 *
 * OBJECTIF
 * Essayez de déclarer une variable à l'intérieur d'une fonction, et essayez de l'afficher console.log() à l'extérieur de la fonction. Que se passe-t-il ?
 *
 * Aide : consulte ../02-guides.md seulement si tu bloques.
 */
'use strict';

function testScope() { let secret = "123"; }
  testScope()
  console.log(secret);

  // une variable déclarée à l'intérieur d'une fonction lorsque on fait console log à l'éxtérieur on obtiens une erreur "secret is not defined ; Parce que la variable (secret) n'existe que dans le bloc de la fonction. C'est ça qu'on appelle le scope local.