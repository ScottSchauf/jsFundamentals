/*
    Arrow Functions: (or Fat Arrow Functions) were introduced in ES6 as an alternative to traditional function expressions. They allow us to write shorter function expressions. They are NOT declarationgs, so they do not get hoisted.
*/

//  (1)     (2)
let hi = () => {
    console.log('hi');
}

// 1. Assigning a variable to the fat arrow function
// 2. We use a fat arrow, denoted by the "=>", to signify that it is a function.

// Arrow functions can have either a "Concise Body" or a "Block Body"

// Concise Body: provides an implicit return value by default. A concise body is denoted by the lack of brackets. It saves time and lines of code.
let hi = () => console.log('hi');
hi();

// Block Body: requires an explicit return value. A block body is denoted by the brackets after the "fat arrow".
// The Block body must have a return in the body of the function. (Anything between the curly braces).
let hi = () => {
    console.log('hi');
    console.log('Oh hi Mark');
}
hi();

// Concise vs. Block
// Concise
let character = x => console.log(`${x} is my favorite character!`);
character('Sailor Moon');

// Block
let characters = (x, y) => {
    console.log(`I like Parks and Rec. My favorite characters are ${x} and ${y}`);
}
characters('Leslie Knope', 'Ron Swanson');