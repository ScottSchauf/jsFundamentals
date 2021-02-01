/*
    - the return keyword allows us to take data from inside of a function, and return it so we can access it and use that data elsewhere in the application
*/

let resource = '|=========|';

//               ironRod = '|=========|';
function machine(ironRod) {
    let screws;

    if(ironRod) {
        screws = '|---  |---  |---  |---';
    } else {
        console.log('not fed any resources');
    }

    return screws;
}

let powerOn = machine(resource); // argument
console.log(powerOn);


// block body arrow function
let myName = (fName, lName) => {
    let fullName = `${fName} ${lName}`;

    return fullName;
}

let powerOn = myName('Spongebob', 'Squarepants');
console.log(powerOn);

// Concise Body Arrow Function - return happens by default with concise body arrow functions
let myName = (fName, lName) => `${fName} ${lName}`;

let powerOn = myName('Patrick', 'Star');
console.log(powerOn);

/*
CHALLENGE
************
    Make a tip calculator using a function
    Have it RETURN the value
    Capture that returned value in a VARIABLE
    Print that variable
*/

function tipCalc(bill) {
    let tip = (bill * 0.25);

    return tip;
}

let totalTip = tipCalc(25.50);
console.log(totalTip);