// For in loop
// for in using on objects in many cases, not a main purpose of using on objects

let Extensions = {
    js: 'JavaScript',
    py: 'Python',
    cpp: "C++"
}
console.log(Extensions);

for (let key in Extensions) { // key is key of object and Extensions is value of object
    // console.log(`${key} extension for ${Extensions[key]}`); //
}