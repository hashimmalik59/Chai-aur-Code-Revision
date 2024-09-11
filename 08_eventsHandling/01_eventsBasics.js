let ul = document.querySelector('ul');
let portfolio1 = document.getElementById('portfolio1');
let portfolio2 = document.getElementById('portfolio2');
let portfolio3 = document.getElementById('portfolio3');
let portfolio4 = document.getElementById('portfolio4');
console.log(ul);
console.log(portfolio1);
console.log(portfolio2);
console.log(portfolio3);
console.log(portfolio4);

// ul.addEventListener('click', () => {
//     console.log("ul is clicked");
// }, false)
// portfolio.addEventListener('click', (e) => {
//     console.log("image3 is clicked");
//     e.stopPropagation(); // it will not goes/bubble on top elements
// }, false) // this is default methtod and event bubbling bottom to top

//////////////////////////////////////////////////////////////

// ul.addEventListener('click', () => {
//     console.log("ul is clicked");
// }, true)
// portfolio.addEventListener('click', () => {
//     console.log("image3 is clicked");
// }, true) // this is not a default methtod and event capturing top to bottom

let link = document.querySelector('a')
// console.log(link);

portfolio1.addEventListener('click', () => {
    // console.log(`portfolio is clicked`);
})
link.addEventListener('click', (a) => {
    a.stopPropagation();
    a.preventDefault(); // this method will prevents the specific element
    // console.log(`link is clicked`);
})


// mini project
// portfolio1.addEventListener('click', () => {
//     portfolio1.style.display = 'none'
// })
// portfolio2.addEventListener('click', () => {
//     portfolio2.style.display = 'none'
// })
// portfolio3.addEventListener('click', () => {
//     portfolio3.style.display = 'none'
// })
// portfolio4.addEventListener('click', () => {
//     portfolio4.style.display = 'none'
// })