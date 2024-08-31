// Control Flow

// if else

if (false) {
  // The "if" condition will be executed in 1 case when condition is truthy
  //   console.log("Yes");
} else {
  // The else condition will be be executed in 1 case when consition is falsy
  //   console.log("No");
}

let temperature = 40;
if (temperature === 40) {
  //   console.log(`temperature is equals to ${temperature}`);
} else {
  //   console.log(`temperature is greater then ${temperature}`);
}

let gameScore = 1000;
if (gameScore > 100) {
  let power = "fly";
  // console.log(`User power is ${power}`);
}
// console.log(`User power is ${power}`); // ReferenceError: power is not defined(Block Scope)

let remainingBalance = 500;
// if (remainingBalance > 499) console.log('Balance is 500'); // Implicit Scope(Code assumes there is block scope)

let score = 100;
if (score < 75) {
  console.log("less then 75");
} else if (score < 50) {
  // Nested if Statement
  console.log("less then 50");
} else if (score < 25) {
  console.log("less then 50");
} else {
  // console.log("Score is equal to 100");
}

let isDegree = true;
let age = 20;
if (isDegree && age >= 20) {
  // console.log("Welcome to Fast Univerity");
} else {
  console.log("Try Again");
}

let believe = true;
let goodDeeds = true;
if (believe && goodDeeds) {
  // console.log("Jannat");
} else {
  console.log("Jahannum");
}

let isUserLoggedInFromGoogle = true;
let isUserLoggedInFromEmail = false;
if (isUserLoggedInFromEmail || isUserLoggedInFromGoogle) {
  // console.log("Now purchase our courses");
}

let bulb = true;
if (!bulb) {
  console.log("off");
} else {
  // console.log("on");
}