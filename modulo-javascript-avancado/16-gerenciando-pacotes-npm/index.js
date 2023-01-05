let kindOf = require("kind-of"); // O require é um método nativo do Node

let testeDeBoolean = true;
let testeDeNumber = 47;
let testeDeString = "Isto é uma string";
let testeDeArray = [1, 2, 3];

console.log(kindOf(testeDeString));

// Output: boolean