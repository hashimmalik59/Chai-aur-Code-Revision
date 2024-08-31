// Filter
// is using for accessing a specific data

let heroes = ['Superman', "Batman", "Flashman"];

// heroes.forEach((items) => {
//     console.log(items);
// });

let store = heroes.forEach((items) => {
    // console.log(items);
    return items; // output undefined
})
// console.log(store); // output undifined

// filter
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// let num = numbers.filter((numbers) => numbers > 5) // not scope so dont use return keyword
let num = numbers.filter((numbers) => { // opening scope then use return keyword
    return numbers > 5;
})
// console.log(num);

let PlayerDetails = [
    {
        PlayerName: "Virat Kohli",
        battingStyle: "Right",
        isDefence: true,
        isTopRanked: true,
        playerInternationalRuns: 20000,
        playerDebut: 2007
    },
    {
        PlayerName: "Babar Azam",
        battingStyle: "Right",
        isDefence: true,
        isTopRanked: true,
        playerInternationalRuns: 12000,
        playerDebut: 2015
    },
    {
        PlayerName: "Quinton De Cock",
        battingStyle: "Left",
        isDefence: false,
        isTopRanked: true,
        playerInternationalRuns: 15000,
        playerDebut: 2010
    },
    {
        PlayerName: "Khushdil Shah",
        battingStyle: "Left",
        isDefence: false,
        isTopRanked: false,
        playerInternationalRuns: 3000,
        playerDebut: 2018
    },
];
// console.log(PlayerDetails);

let cricketDetails = PlayerDetails.filter((elements) => (elements.isTopRanked === false)); // it will print the whole element of an object
// console.log(cricketDetails);

let playerRuns = PlayerDetails.filter((data) => (data.playerInternationalRuns > 16000));
// console.log(playerRuns);

let playerDebut = PlayerDetails.filter((value) => (value.playerDebut > 2010)); // implicit return
playerDebut = PlayerDetails.filter((value) => { return value.playerDebut > 2010 }); // explicit return
// console.log(playerDebut);

let arr = [];
let newArr = arr.forEach((num) => {
    if (num > 5) {
        arr.push(num)
    }
})
console.log(arr);