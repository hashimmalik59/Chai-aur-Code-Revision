// for each Loop

let heroes = ["SuperMan", "BatMan", "FlashMan", "GreenLantern", "Hulk"];

heroes.forEach(function (index) {
    //     console.log(index);
})

heroes.forEach((data) => { // better way to write froEach loop
    //     console.log(data);
})

function array(value) { // another way of using forEach loop
    // console.log(value);
}
heroes.forEach(array);

heroes.forEach((a, b, c) => {
    // console.log(a,b,c); // a = arrays element, b = arrays index, and c = whole array
})


let languagesDetails = [
    {
        languageName: 'JavaScript',
        languageExtension: "JS"
    },
    {
        languageName: 'Python',
        languageExtension: "py"
    },
    {
        languageName: 'C++',
        languageExtension: "cpp"
    },
];
languagesDetails.forEach((data) => {
    // console.log(data.languageName);
    // console.log(data.languageExtension);
})