// For Loop with Break and Continue

// for - loops through a block of code a number of times

for (let i = 0; i <= 10; i++) {
    const element = i;
    // console.log(element);
}

for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i + ' Even Number');
        continue; // it will not stop the statement continue it
        // break; // it will stop the statement(our condition will not executes after break keyword)
    }
    console.log(i);
}