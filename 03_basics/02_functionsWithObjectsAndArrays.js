// Functions with Objects and Arrays

function add(...value) {
  // Rest Operator(All argument values packed in 1 array)
  return value;
}
let answer = add(2, 5, 8, 1, 3, 6); // output [2, 5, 8]

// console.log(typeof answer);
// console.log(answer);

let userData = {
  name: "Hashim",
  age: 23,
};

function handleOnject() {
  //   console.log(`User name is ${userData.name} and age is ${userData.age}`);
}
handleOnject(userData);

handleOnject({
  name: "hm3630450@gmail.com",
  age: 18,
});

let numbers = [2, 5, 1, 7, 3, 9];
function num(data) {
  return data[4];
}
// console.log(num(numbers));
// console.log(num(["b", "x", "r", "d", "o"]));