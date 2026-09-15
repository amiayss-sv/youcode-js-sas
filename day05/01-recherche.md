# 🔎 Jour 05 — Recherche

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

> En JavaScript, une chaîne de caractères (String) est-elle "mutable" (modifiable) ou "immuable" (immutable) ? Que cela implique-t-il quand on utilise `.toUpperCase()` ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**
 une chaîne de caractères (String) est immuable (immutable). Cela signifie qu'une fois créée, sa valeur en mémoire ne peut jamais être modifiée directement.

 .toUpperCase(): ne modifie pas la chaîne d'origine. À la place, il crée et retourne une toute nouvelle chaîne de caractères en majuscules.
> À compléter avec mes propres mots.

---

### Question 02

> Quelle est la différence entre `.slice()`, `.substring()` et `.substr()` ? Lequel est considéré comme déprécié ou moins recommandé ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**  

.slice(start, end) : extrait une partie d’une chaîne entre un index de début et un index de fin, et accepte les indices négatifs.
.substring(start, end) : extrait une partie d’une chaîne entre deux indices, mais ne gère pas les indices négatifs.
.substr(start, length) : extrait une partie d’une chaîne à partir d’un index en indiquant le nombre de caractères à prendre, mais cette méthode est dépréciée et moins recommandée.

> À compléter avec mes propres mots.

---

### Question 03

> Quelle méthode permet de transformer la chaîne `"A,B,C"` en un tableau `["A", "B", "C"]` ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**
la méthode .split() 

Elle permet de diviser une chaîne de caractères en tableau selon un séparateur.

"A,B,C".split(",") 
> À compléter avec mes propres mots.

---

### Question 04

> Quelle est la différence entre `.indexOf()` et `.search()` ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**
.indexOf() : recherche une chaîne de caractères précise et retourne l’index de sa première occurrence.
.search() : recherche une chaîne ou un motif avec une expression régulière (Regex) et retourne l’index du premier résultat.

> À compléter avec mes propres mots.

---

### Question 05

> À quoi servent les **Template Literals** (les backticks `` ` ``) par rapport aux simples quotes `'` ou doubles `"` ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**
Backticks ` ` = insérer des variables avec ${} + écrire facilement sur plusieurs lignes.
> À compléter avec mes propres mots.

---

### Question 06

> Comment vérifier de manière moderne si une chaîne *commence* par un mot spécifique ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**
.startsWith() : Elle permet de vérifier si une chaîne commence par un texte spécifique.
> À compléter avec mes propres mots.

---

### Question 07

> Quelle méthode permet d'enlever les espaces vides au début et à la fin d'une chaîne, mais pas au milieu ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**
la methode .trim()
> À compléter avec mes propres mots.

---

### Question 08

> Quelle est la différence de comportement entre `.replace("a", "b")` et `.replaceAll("a", "b")` ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**
.replace("a", "b") : remplace seulement la première occurrence de "a".
.replaceAll("a", "b") : remplace toutes les occurrences de "a".


> À compléter avec mes propres mots.

---

### Question 09

> Qu'est-ce qu'une Expression Régulière (Regex) et pourquoi l'utilise-t-on avec les strings ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**
Regex = une règle pour rechercher, vérifier ou remplacer certains modèles dans un texte
On l’utilise avec les strings pour faire des recherches plus précises que de simples mots.
expl :
let texte = "Bonjour 123";

texte.search(/[0-9]/);
=> segnifie qu'on chercher un chiffre entre 0 et 9 

> À compléter avec mes propres mots.

---

### Question 10

> Peut-on utiliser la propriété `.length` sur une chaîne vide `""` ? Quel sera le résultat ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**
  Oui, on peut utiliser .length sur une chaîne vide ;Une chaîne vide ne contient aucun caractère, donc sa longueur est 0

> À compléter avec mes propres mots.


## ✅ Validation de la recherche

- [ ] Je peux expliquer au moins trois réponses sans lire mes notes.
- [ ] J'ai noté les notions que je dois encore clarifier.
