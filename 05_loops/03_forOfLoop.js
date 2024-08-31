// For of Loop
// using on Iteration on array

let name = 'Hashim';
for (let ID of name) {
    // console.log(`${ID} is my name Character`);
}

let map = new Map(); // Maps are used for unique values
map.set('Pak', 'Pakistan');
map.set('Tr1', 'Turkiye'); // key must need unique value doesn't matter
map.set('Tr2', 'Turkiye'); // also not executes because of same key
map.set('USA', 'United States of America');
map.set('Pak', 'Pakistan'); // not executes because of unique values
// console.log(map);

for (const key of map) { // Accessing keys and values with square brackets
    console.log(key);
}