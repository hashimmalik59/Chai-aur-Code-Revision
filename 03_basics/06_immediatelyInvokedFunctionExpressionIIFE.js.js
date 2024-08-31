// Immediately Invoked Function Expression IIFE

// IIFE (Global scope pollution se bahne k liye hum IIFE use kartte hain)

(function firstName(name) {
  // named IIFE
  console.log(name);
})("Hashim");

// TypeError: (intermediate value)(...) is not a function
// The error was happened due to not write semicolon ";" after firstName function

((name) => {
  // Arrow IIFE
  console.log(name);
})("Malik");