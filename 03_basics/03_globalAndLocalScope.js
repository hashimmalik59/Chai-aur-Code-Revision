// Global and Local Scope

// let block scope {}
// const block scope {}
// var global scope

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
  console.log(true);
}

// console.log(a); // ReferenceError: b is not defined
// console.log(b); // ReferenceError: b is not defined

console.log(c);