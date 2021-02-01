/*
    - Parameters are placeholders for information that will pass into our function.
    - They are placed inside of the parenthesis.
    - Parameters are separated by a comma.
*/

//              ticket = 'cheese pizza'
function scott(ticket) {
    console.log(`I exchanged my ticket for a ${ticket}`);
}

scott('cheese pizza') // 'cheese pizza' is the argument

//

let resource = "|===========|";

function machine(ironRod) {
    console.log(ironRod);
}

machine(resource); // argument

/*
CHALLENGE
************
    - Write a function that takes two parameters:
        - one parameter is for a first name,
        - the other parameter is for a last name;
        - have them come together in a variable inside the function.
        - console.log 'Hello, my name is <your name>'
        - call (or invoke) your function
*/

function myName(firstName, lastName) {
    let fullName = firstName + ' ' + lastName;
    console.log(`Hello, my name is ${fullName}`);
}

myName('Scott', 'Schauf');