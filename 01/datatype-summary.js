//  Primitive
//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const name = "Abhi"
const score = 100; // Number
const isLoggedIn = false; // Boolean
const outsideTemp = null; // Null ==> empty
let userEmail; // undefined
const id = Symbol('123'); // symbol ==> Unique every time
const anotherId = Symbol('123');
// const bigNumber = 3456543576654356754n // BigInt

console.log(id === anotherId); // false


// Reference (Non primitive)
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction) // function or function object
console.log(typeof heros) // object
console.log(typeof myObj) // object
