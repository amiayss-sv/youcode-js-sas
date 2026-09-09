# 🔎 Jour 02 — Recherche

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

> Quelle est la différence d'usage principale entre une boucle `for` et une boucle `while` ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**
for : nombre de répétitions connu ou parcours.
while : répétition basée principalement sur une condition.

> À compléter avec mes propres mots.

---

### Question 02

> À quoi sert la boucle `do...while` et en quoi diffère-t-elle de `while` ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**

La boucle `do...while` s’exécute au moins une fois, puis elle continue tant que la condition est vraie. Contrairement à `while`, qui vérifie la condition avant la première exécution.


> À compléter avec mes propres mots.

---

### Question 03

> Que se passe-t-il si vous oubliez d'incrémenter ou de modifier la condition d'arrêt dans une boucle `while` ? Comment appelle-t-on ce problème ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**

boucle infinie

> À compléter avec mes propres mots.

---

### Question 04

> À quoi sert le mot-clé `break` à l'intérieur d'une boucle ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**
 `break` permet de sortir immédiatement d’une boucle


> À compléter avec mes propres mots.

---

### Question 05

> À quoi sert le mot-clé `continue` à l'intérieur d'une boucle ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**

`continue` permet de sauter l’itération actuelle et de passer à l’itération suivante de la boucle.


> À compléter avec mes propres mots.

---

### Question 06

> Dans la structure `for(initialisation; condition; incrémentation)`, dans quel ordre exact ces trois parties sont-elles exécutées ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**

 1 : Initialisation  2 : condition 3 : incrémentation 
> À compléter avec mes propres mots.

---

### Question 07

> Est-il possible de déclarer la variable d'initialisation en dehors de la boucle `for` ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**

Oui, il est possible

> À compléter avec mes propres mots.

---

### Question 08

> Qu'est-ce qu'une boucle imbriquée (nested loop) et quand en avons-nous besoin ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**

Une boucle imbriquée est une boucle placée à l’intérieur d’une autre boucle. On l’utilise par exemple pour parcourir des tableaux à deux dimensions, comme des lignes et des colonnes.

> À compléter avec mes propres mots.

---

### Question 09

> Quel est le risque majeur en termes de performances lorsqu'on utilise de multiples boucles imbriquées ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**
 le temps d’exécution augmente fortement lorsque le nombre de boucles imbriquées augmente
> À compléter avec mes propres mots.

---

### Question 10

> Peut-on utiliser un `switch` à l'intérieur d'une boucle ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**


totalement possible:
on peut utiliser un `switch` à l’intérieur d’une boucle. Le `switch` permet de choisir une action selon une valeur à chaque itération de la boucle.
 exemple :
for (let i = 1; i <= 3; i++) {
    switch (i) {
        case 1:
            console.log("Lundi");
            break;
        case 2:
            console.log("Mardi");
            break;
        case 3:
            console.log("Mercredi");
            break;
    }
}
> À compléter avec mes propres mots.


## ✅ Validation de la recherche

- [ ] Je peux expliquer au moins trois réponses sans lire mes notes.
- [ ] J'ai noté les notions que je dois encore clarifier.
