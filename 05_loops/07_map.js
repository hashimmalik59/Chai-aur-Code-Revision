// map
// map methon will work(iterate) on all elements 
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(numbers);

// let newNumber = numbers.map((value) => value ** 2)
console.log(newNumber);

let newChainNumber = numbers // chaining method
    .map((data) => (data + 1)) // not use a semicolon after any statement else it will shown an SyntaxError:    Unexpected token '.'
    .map((data) => (data * 2))
    .map((data) => (data * 1))
    .filter((data) => (data >= 5));
console.log(newChainNumber);