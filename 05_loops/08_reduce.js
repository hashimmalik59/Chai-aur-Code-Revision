// reduce

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr);

// let newArray = arr.reduce(function (accumulator, currentValue) {
//     console.log(`accumulator: ${accumulator} currentValue: ${currentValue}`);
//     return accumulator + currentValue
// }, 0):
// console.log(newArray); // output 45

let newArray2 = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // arrow function
// console.log(newArray2); // output 45

let shoppingCart = [
    { coursePrice: 999 },
    { coursePrice: 1999 },
    { coursePrice: 2999 },
    { coursePrice: 3999 }
]
let newCart = shoppingCart.reduce((accumulator, currentValue) => (accumulator + currentValue.coursePrice), 0);
console.log(newCart);