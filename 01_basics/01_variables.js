// Variables (let var const)

const userId = 2355655;
// userId = 34243423; // TypeError: Assignment to constant variable.
let userId = 33534345; // SyntaxError: Identifier 'userId' has already been declared
// console.log(userId);

// const (Not redeclare and also not reassign)
// let (Not redeclare and reassign)
// var (redeclare and also reassign)

// Prefer not to use 'var' because of block scope