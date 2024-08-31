// This and Arrow Function in JS

let userData = {
  name: "Hashim",
  age: 23,
  welcomeMessage: function () {
    // console.log(`${userData.name}, welcome to my room`);
    // console.log(`${this.name}, welcome to my room`); // 'this' keyword is refer to the given object best way write
  },
};
userData.welcomeMessage();
userData.name = "Hashim Malik";
userData.welcomeMessage();

function chai() {
  let name = "Hashim";
  // console.log(this.name); // output undefined (due to "this" keyword was not works on except object)
}
chai();

let code = () => {
  // Arrow Function
  let name = "Hashim";
  //   console.log(this.name);
};
code();

let addTwoNumbers = (number1, number2) => {
  return number1 + number2; // explicit return
};
// console.log(addTwoNumbers(3, 7));

let multiplyTwoNumbers = (value1, value2) => value1 * value2; // implicit return (This code is used in React JS)
// console.log(multiplyTwoNumbers(4, 7));

// let objectInFunction = () => {
// return { name: "Hashim", age: 23 }; // declaring object in function
// };
// console.log(objectInFunction());

let objectInFunction = () => ({ name: "Hashim" }); // declaring object in function
// console.log(objectInFunction());