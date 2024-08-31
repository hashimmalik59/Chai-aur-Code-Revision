// Arrays in JS

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]; // Arrays is writter in square brackets "[]"

// console.log(numbers);
// console.log(numbers[0]); // array is always starting with "0"

let myArray = new Array("Hashim", "Ahmad", "Malik");
// myArray.push("name", "allNames"); // push is a method of an array(adding two or more elements at the end of an array)
// myArray.pop(); // pop is also a method of an array(removing two or more elements at the end of an array)
// myArray.pop(); // pop is also a method of an array(removing two or more elements at the end of an array)
// myArray.unshift(123); // unshift is a method of an array(adding two or more elements at the start of an array)
// myArray.shift(); // shift is a method of an array(removing two or more elements at the start of an array)
// myArray.shift(); // shift is a method of an array(removing two or more elements at the start of an array)

// console.log(myArray);

// console.log(myArray.includes("Ahmad")); // output true (finding 'Ahmad' is includes in the array)
// console.log(myArray.includes('abc')); // output false (finding 'abc' is includes in the array)
// console.log(myArray.indexOf('Malik')); // output 2 (finding the specific elment is on which index)

// console.log(myArray[0]);
// console.log(myArray[1]);
// console.log(myArray[2]);

let length = [3, 5, 889, 2, 1];
let age = [6, 4, 5, 64, 23, 54];
age = length.join(); // converts into string

// console.log(length);
// console.log(age);

// console.log(typeof age);
// console.log(typeof length);

// Slice, Splice

let fruits = ["Apple", "Banana", "Mango"];
let vegetables = ["Potato", "Tomatoe", "Chilli"];

let goFruit = fruits.slice(0,2); // Slice is a method of an array(it returns a piece of array and last index is not add)
let goVegetables = vegetables.splice(2,1,'Beetroot');

console.log(fruits);
console.log(vegetables);

console.log(goFruit);
console.log(goVegetables);
