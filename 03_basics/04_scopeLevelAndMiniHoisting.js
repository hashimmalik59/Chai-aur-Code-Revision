// Scope Level and Mini Hoisting

function name() {
  let name = "Hashim";
  function age() {
    let myAge = 23;
    // console.log(name); // Exexcutes due to child to parent access
  }
  //   console.log(myAge); // myAge is not defined
  age();
}
name();

// function addNumber(num) {
//   return num + 1;
// }
// console.log(addNumber(9)); // output 10

console.log(addNumber(5)); // Expression Function cannot execute before initialization
let addNumber = function (num) { // ReferenceError: Cannot access 'addNumber' before initialization
  return num + 1;
};