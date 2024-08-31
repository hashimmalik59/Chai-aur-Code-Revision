// Strings in JS

let name = "Hashim Malik";
let age = 23;

// console.log("My name is " + name + " and my age is " + age);
// console.log(`My name is ${name} and my age is ${age}`); // This method is called String interpolation
// Best Pratice to use backtick `` and best for readability

let fullName = new String("  Hashim    "); // This is Object method with constructor

// console.log(fullName);
// console.log(fullName[0]); // we can also access characters with index
// console.log(fullName.__proto__); // Accessing the methods of string
// console.log(fullName.toUpperCase()); // Coverting our strings in Upper case
// Note:- It cannot change in original value due to stack memory
// console.log(fullName.charAt(3)); // checking the index where character is available or not
// console.log(fullName.indexOf('s')); // finding the character index
// console.log(fullName.substring(0,5)); // Getting string with Starting and Ending index(last index is not include)
// console.log(fullName.length); // Accessing the length of a strings
// console.log(fullName);
// console.log(fullName.trim()); // This method is using for removing white spaces

let myURL = 'https://www.hashdev.com%20hashimmalik'
// console.log(myURL);
// console.log(myURL.replace('www', 'xxx')); // it will remove searchValue with replaceValue
// console.log(myURL.includes('hashdev')); // check the word is available or not(answer in Boolean)
// console.log(myURL.includes('halwa')); // output false

let favouriteGame = 'Call&Of&Duty';
// console.log(favouriteGame);
// console.log(favouriteGame.split('&')); // Slitting the given character (part of string)