// Arrays part 2 in JS

let IndianCricketTeamTopPlayers = ["Kohli", "Rohit", "Bhumrah"];

let PakistanCricketTeamTopPlayers = ["Babar", "Rizwan", "Shaheen"];

// console.log(IndianCricketTeamTopPlayers);
// console.log(PakistanCricketTeamTopPlayers);

// IndianCricketTeamTopPlayers.push(PakistanCricketTeamTopPlayers); // push method will work on existing array

// console.log(IndianCricketTeamTopPlayers);
// console.log(IndianCricketTeamTopPlayers[3]);
// console.log(IndianCricketTeamTopPlayers[3][0]);

let allPlayers = IndianCricketTeamTopPlayers.concat(
  // concat will returns new array
  PakistanCricketTeamTopPlayers
);
// console.log(allPlayers);

let allTopPlayers = [
  ...PakistanCricketTeamTopPlayers, // This triple '...' is called Spread Operator
  ...IndianCricketTeamTopPlayers, // This method is concat multiple array(Best practice to use Spread Operator for concatination)
];
// console.log(allPlayers);

let numbersArray = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];

// console.log(numbersArray);
// console.log(numbersArray.flat(Infinity)); // This flat method will convert all sub-arrays into one array

let notArray = Array.isArray("Hashim");
// console.log(notArray); // output false
let isArray = Array.from("Hashim");
// console.log(isArray); // output ['H','a','s','h','i','m']
let isObject = Array.from({ name: "Hashim", age: 23 });
// console.log(isObject);

let vegatble1 = "Tomatoe";
let vegatble2 = "Potato";
let vegatble3 = "Chilli";

// console.log(Array.of(vegatble1, vegatble2, vegatble3)); // this 'of' method will converting elements to array