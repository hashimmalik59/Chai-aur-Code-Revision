// Truthy and Falsy

let userEmail = [];
if (userEmail) {
  //   console.log("Having email");
} else {
  console.log("Don't having email");
}

// falsy values
// false, 0, -0, BigInt, 0n, "", null, undefined, NaN

// truthy values
// "0", "false", " ", [], {}, fucntion(){}

if (userEmail.length === 0) {
  // checking our array is not empty
  // console.log('Array is Empty');
}
let emptyObject = {};
if (Object.keys(emptyObject).legnth === 0) {
  // checking our object is not empty
  // console.log('Object is Empty');
}

// Nullish Coalescing Operator (??): null undefined

let value;
// value = 3 ?? 8; // output 3
// value = null ?? 1; // output 1
// value = undefined ?? 9; // output 9
value = null ?? 4 ?? 2; // output 4
// console.log(value);

// Ternary Operator (checking two condition)
// condition ? true : false

let age = 23;
// age >= 18 ? console.log("Adult") : console.log("Not Adult");

let isDegree = true;
// isDegree ? console.log("Congratulations for getting Job!") : console.log("Try Again");