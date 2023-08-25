// Variables

var a; // Declarando
var b = 'b'; // Declaramos y asignamos
b = 'bb'; // Reasignación
var a = 'aa'; // Redeclaración


// Global Scope
var fruit = 'Apple'; // Variable Global
console.log(fruit);

function bestFruit() {
    console.log(fruit);
}

bestFruit();


function countries() {
    country = 'Colombia'; // Asignación sin declaración
    console.log(country);
}

countries();
console.log(country);