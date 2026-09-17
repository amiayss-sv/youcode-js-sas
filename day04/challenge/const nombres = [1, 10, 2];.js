const nombres = [1, 10, 2];

// Tri par défaut
nombres.sort();

console.log(nombres);

nombres.sort((a, b) => a - b);

console.log(nombres);