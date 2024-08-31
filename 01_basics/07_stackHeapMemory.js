// Stack and Heap Memory in JS

// Stack Memory (Primitive Datatype)
// Heap Memory (Reference Datatype)

let name = "Hashim Malik";
let newName = name;
newName = "Hashim Ahmad"; // Stack memory can not change in original value
// console.log(name);
// console.log(newName);

let myData = {
  name: "Hashim Malik",
  age: 23,
};
let myNewData = myData;
myNewData.name = "Hashim Ahmad"; // Heap memory can change in original and copy both value
// console.log(myData);
// console.log(myNewData.name);