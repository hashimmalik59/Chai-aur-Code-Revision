// Data types Conversion and Confusion

let age = '23abc';
// console.log(typeof age);
// console.log(typeof age);
let newAge = Number(age);
// console.log(typeof newAge);
// console.log(newAge); // output NaN

// let age = null;
// console.log(typeof age);
// console.log(typeof age);
// let newAge = Number(age);
// console.log(typeof newAge);
// console.log(newAge); // output 0

// let age = true;
// console.log(typeof age);
// console.log(typeof age);
// let newAge = Number(age);
// console.log(typeof newAge);
// console.log(newAge); // output 1

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let adult = 23;
let isAdultBoolean = Boolean(adult);
// console.log(isAdultBoolean); // output true

// 1 => true
// 0 => false

// let age = 23;
// let ageInString = String(age);
// console.log(ageInString);
// console.log(typeof ageInString);