function createNewLI(newLanguge) {
    let newListItem = document.createElement('li')
    console.log(newListItem);
    newListItem.className = 'child'
    let myText = document.createTextNode(newLanguge)
    newListItem.appendChild(myText);
    let parent = document.querySelector('.language');
    parent.appendChild(newListItem)
}
createNewLI("Python");
createNewLI("C++");
createNewLI("Java");
createNewLI("Ruby");

// Edit
let secondChild = document.querySelector('li:nth-child(5)');
console.log(secondChild);
let newLI = document.createElement('li');
console.log(newLI);
// newLI.innerHTML = "Golang"; // best practice rather than using innerText or textContent
secondChild.outerHTML = `<li>TypeScript</li>`;
secondChild.replaceWith(newLI);

// Edit

// Remove
let childTwo = document.querySelector('li:nth-child(1)');
childTwo.remove();