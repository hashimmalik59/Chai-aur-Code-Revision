// Objects Part 2 in JS

let myData = new Object(); // Singleton Object
let myUser = {}; // Non-Sigleton Object

// console.log(myData); // Empty Object
// console.log(myUser); // Empty Object

let userData = {};

userData.name = "Hashim";
userData.fullName = {
  firstName: "Hashim",
  lastName: "Ahmad",
};
userData.age = 23;
userData.Adult = true;

// console.log(userData);

// console.log(userData.name);
// console.log(userData.age);
// console.log(userData.fullName);
// console.log(userData.fullName.firstName);

// console.log(userData?.fullName.firstName);

let obj1 = { 1: "a", 2: "b", 3: "c" };
let obj2 = { 1: "d", 2: "e", 3: "f" };
// let obj3 = Object.assign({}, obj1, obj2); // assigning multiple objects in 1 object
let obj3 = { ...obj1, ...obj2 }; // Spread Operator(merging multiple objects in 1 object)

// console.log(obj1);
// console.log(obj2);
// console.log(obj3);

let objectsInArray = [
  {
    id: 1,
    email: "hm3630450google.com",
  },
  {
    id: 2,
    email: "hm3630450microsoft.com",
  },
  {
    id: 3,
    email: "hm3630450apple.com",
  },
];
// let log1 = objectsInArray[0];
// let log2 = objectsInArray[1];
// let log3 = objectsInArray[2];
// console.log(log1);
// console.log(log2);
// console.log(log3);

// console.log(Object.keys(objectsInArray)); // shown in array form

// console.log(userData.hasOwnProperty('name')); // checking the given key is available or not in object

console.log(Object.keys(userData)); // finding the keys of object
console.log(Object.values(userData)); // finding the values of object
console.log(Object.entries(userData));