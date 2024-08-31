// Numbers and Maths in JS

/////////////////////////////////////////// Number in JS

let age = 23;
// console.log(age);

const gameScore = new Number(999); // this method wil show also type and 100% given type

// console.log(gameScore);
// console.log(typeof gameScore);

// console.log(gameScore.toString().length); // Now it will converts into string so thats why length method is applied
// console.log(gameScore.toFixed(3)); // it will give you a dnumbers in decimal from with given parameter 999.000

let newNumber = 1353.7879;
// console.log(newNumber.toPrecision(2)); // it will precise the value and also round value

let hugeNumber = 10000000000;
// console.log(hugeNumber.toLocaleString()); // it will shown numbers in US standards like 10,000,000,000

///////////////////////////////////////////// Maths in JS

// console.log(Math); // Maths is a object and it will returns its properties

// console.log(Math.abs(-4)); // showing always and only negative to positive number
// console.log(Math.abs(4)); // its always applie on negative value

// console.log(Math.round(5.6)); // it will round of number due to his decimal value
// console.log(Math.round(5.4)); // it will round of number due to his decimal value

// console.log(Math.ceil(4.4)); // ceil means top it will round to top
// console.log(Math.floor(4.7)); // floor means bottom it will round to bottom

// console.log(Math.min(3, 6, 1, 7, 5)); // always pick minimum number
// console.log(Math.max(3, 6, 1, 7, 5)); // always pick maximum number

// console.log(Math.random()); // Math.random() will be executing among 0 and 1

// console.log(Math.floor(Math.random() * 6) + 1); // Ludo Dice formula
// console.log((Math.floor(Math.random()*10))+1);

let min = 10;
let max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);