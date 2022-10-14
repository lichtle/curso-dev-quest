/* Operadores lógicos servem para validar dados ou verificar condições.

== significa igual. Se a for 5 e b for 5, a == b retorna true. Por conta da tipagem fraca do JS, esse operador desconsidera o tipo da variável. Logo, se a for 5 (number) e b for "5" (string), a == b também retornará true

=== significa idêntico. Esse operador considera tanto o valor quanto o tipo da variável. Logo, se a for 5 (number) e b for "5" (string), a === b retornará false

!= significa diferente, desconsiderando o tipo da variável. Logo, se a for 5 (number) e b for "5" (string), a === b retornará true

!== significa não idêntico, considerando o tipo da variável. Logo, se a for 5 (number) e b for "5" (string), a === b retornará false */

const a = 5;
const b = "5";

console.log(a == b); // Retorna true
console.log(a === b); // Retorna false
console.log(a != b); // Retorna false
console.log(a !== b); // Retorna true

const c = 3;
const d = 3;

// < significa "menor que"

console.log(c < d); // Retorna false

// <= significa "menor ou igual a"

console.log(c <= d); // Retorna true

// > significa "maior que"

console.log(c > d); // Retorna false

// >= significa "maior que"

console.log(c >= d); // Retorna true

const e = 4;
const f = 4;

// && verifica se ambas as condições são verdadeiras. Se sim, retorna true. Se uma das condições for falsa, retorna false

console.log(e === f && e <= f); // Retorna true pois tanto a primeira quanto a segunda condição são verdadeiras

console.log(e === f && e < f); // Retorna false pois apenas uma das condições é verdadeira

const g = 6;
const h = 6;

// || verifica se alguma das condições é verdadeira. Se sim, retorna true. Se ambas forem falsas, retorna false

console.log(g === h || e < f); // Retorna true pois uma das condições (nesse caso, a primeira) é verdadeira

console.log(e > f && e < f); // Retorna false pois ambas as condições são falsas

const i = 7;
const j = 7;

// ! inverte o resultado da verificação. O que é true se torna false e vice-versa

console.log(!(i === j)); // Seria true, mas como estamos usando o operador ! de inversão, seu resultado agora é false

console.log(!(i !== j)); // Seria false, mas como estamos usando o operador ! de inversão, seu resultado agora é true
