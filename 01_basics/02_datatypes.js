// Data types and ECMA Script

"use strict" // treat all JS code as newer version
alert( 3 + 3 ) // we are using NodeJS, not browser

// semicolon ';' is optional in JS but in some cases required

// Primitve Datatypes
let name = "Hashim"; // String: everything wrritten in between single or double quotes is called string
let age = 23; // Number: every variable was wriitern in numbers is called is numbers
let isAdult = true; // Boolean: true or false
let number = BigInt(123); // BitInt : was also a number but used for big numbers
let x = null; // null: Having a empty value (standalone value)
let y; // undefined: not defining a value
let z = Symbol("789") // Symbol: Using for uniqueness

// Non-Primitive/Reference Datatypes
// Object

// Typeof: Knowing the data type of a variables like this;
console.log(typeof null); // object