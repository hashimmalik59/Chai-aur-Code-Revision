// Function and Parameters in JS

// Function: A Specific task in block of code with invoke is called Function

function sumTwoNumbers(number1, number2) {
  // (parameters)

  //   console.log(number1 + number2);

  // let data = number1 + number2;
  // return data;

  return number1 + number2; // we can storing return value into new variable but not store in console.log()

  console.log("Hashim"); // unreachable code never executes after "return" keyword
}

let answer = sumTwoNumbers(3, 5); // (arguments) // invoke(call)
// console.log(answer); // output undefined

// sumTwoNumbers // reference
// sumTwoNumbers() // () execute
// reference + execute = invkoke

function userLoggedInMessage(name = 'Hashim') { // name = 'Hashim' its a by default execution 
  let message = ` just logged in`;
  return name + message;
}
console.log(userLoggedInMessage('Malik'));