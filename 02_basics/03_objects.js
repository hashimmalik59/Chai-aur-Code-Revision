// Objects in JS

// Singleton (Creating object with contructor is called Singleton)

// object.create // contructor method

// Object Literals (Whenever we declared with literals then its not Singleton)
let mySymbol = Symbol("abc");
let myData = {
  name: "Hashim",
  age: 23,
  isAdult: true,
  [mySymbol]: "djsdfjdsjf", // correct ssyntax of writing Symbol in Objects
};

// console.log(myData);

// console.log(myData.name[2]); // accessing only string character with this code is valid

// console.log(myData["name"]); // thats the best way to write any key with sqaure brackets + ''

// console.log(myData[mySymbol]); // correct ssyntax of writing Symbol in Objects
// Object.freeze(myData); // After this Object.freeze(objectName) the code is not changed after this statement

myData.name = "Malik";
// console.log(myData);

myData.hello = function () {
  // console.log("Hello JavaSscript");
};
myData.hello2 = function () {
  // console.log(`Hello ${myData.name}`);
  // console.log(`Hello ${this.name}`);
};
// console.log(myData.hello());
// console.log(myData.hello2());