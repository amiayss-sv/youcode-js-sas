# 🔎 Jour 06 — Recherche

[← Tableau de bord](./README.md) · [Exercices guidés →](./02-guides.md)

> [!NOTE]
> Le but n'est pas de copier une définition. Prépare une explication simple et un exemple personnel.

## Mode d'emploi

1. Recherche la notion.
2. Reformule la réponse avec tes propres mots.
3. Ajoute un petit exemple lorsque c'est possible.
4. Coche la question une fois que tu peux l'expliquer sans lire.

## Questions


### Question 01

> Quelle est la différence entre la notation pointée (`objet.propriete`) et la notation crochets (`objet["propriete"]`) ? Quand est-il obligatoire d'utiliser les crochets ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**
La notation pointée objet.propriete permet d’accéder directement à une propriété dont le nom est connu.
notation crochets (`objet["propriete"]` permet aussi d’accéder à une propriété, mais elle est obligatoire lorsque le nom de la propriété est stocké dans une variable(dynamique) ou contient des caractères spéciaux/espaces.

> À compléter avec mes propres mots.

---

### Question 02

> Que se passe-t-il si on tente d'accéder à une propriété qui n'existe pas dans un objet ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.
JavaScript retourne undefined.
---

### Question 03

> Comment ajouter une nouvelle propriété à un objet déjà existant ?
 objet.propriete = valeur
- [ ] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

---

### Question 04

> Comment supprimer une propriété d'un objet (mot-clé spécifique) ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**
delete objet.propriete;
> À compléter avec mes propres mots.

---

### Question 05

> Quelle est la boucle spécifique recommandée pour parcourir les *clés* d'un objet ? (`for...of` ou `for...in`) ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**
La boucle recommandée pour parcourir les clés d’un objet est for...in

for...in : parcourt les clés d’un objet.
 for...of : parcourt les valeurs d’un objet itérable comme un tableau.
> À compléter avec mes propres mots.

---

### Question 06

> Qu'est-ce que le mot-clé `this` lorsqu'il est utilisé à l'intérieur d'une méthode (une fonction) d'un objet ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**
this désigne l’objet courant, c’est-à-dire l’objet auquel appartient la méthode:l’objet qui appelle la méthode.
> À compléter avec mes propres mots.

---

### Question 07

> Qu'est-ce que le format **JSON** (JavaScript Object Notation) par rapport à un objet JavaScript classique ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**
JSON est un format texte utilisé pour échanger ou stocker des données. Il ressemble beaucoup à un objet JavaScript, mais ce n’est pas exactement la même chose;ne peut pas contenir de fonctions, contrairement à un objet JavaScript.
> À compléter avec mes propres mots.

---

### Question 08

> Quelle méthode native permet de convertir un objet JS en chaîne JSON (String) ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**
la methode JSON.stringify()
> À compléter avec mes propres mots.

---

### Question 09

> Quelle méthode native permet de convertir une chaîne JSON en objet JS ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**
la methode JSON.parse()
> À compléter avec mes propres mots.

---

### Question 10

> Comme les tableaux, les objets sont assignés par "référence". Que cela signifie-t-il si vous faites `const obj2 = obj1;` et que vous modifiez `obj2` ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**
Cela signifie que obj1 et obj2 pointent vers le même objet en mémoire; Donc, si tu modifies obj2, obj1 sera aussi modifié;Parce que obj2 = obj1 ne crée pas une copie de l’objet, Les deux variables font référence au même objet.

> À compléter avec mes propres mots.


## ✅ Validation de la recherche

- [ ] Je peux expliquer au moins trois réponses sans lire mes notes.
- [ ] J'ai noté les notions que je dois encore clarifier.
