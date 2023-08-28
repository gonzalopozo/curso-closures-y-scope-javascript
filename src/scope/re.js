// Var
var firstName; // Declaración (se le asigna un valor undefined)
firstName = 'Oscar'; // Asignación
console.log(firstName);

var lastName = "David"; // Declaración y asignación
lastName = 'Ana'; // Reasignación
console.log(lastName);

var secondName = 'David'; // Declaración y asignación
var secondName = 'Ana'; // Redeclaración y reasignación
console.log(secondName);

//  Let
let fruit = 'Apple'; // Declaración y asignación
fruit = 'Kiwi'; // Reasignación
console.log(fruit);

let fruit = 'Banana'; // Con let tu no puedes redeclarar, pero si reasignar
console.log(fruit);

// Const
const animal =  'dog'; // Declaración y asignación
animal = 'cat'; // Con const tu no puedes redeclarar y tampoco reasignar
const animal = 'snake'; // Con const tu no puedes redeclarar y tampoco reasignar
console.log(animal);

const vehicles = [];
vehicles.push("🚗");
console.log(vehicles);

vehicles.pop();
console.log(vehicles);