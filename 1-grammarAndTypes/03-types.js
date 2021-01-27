/*
Booleans: has only two possible values TRUE or FALSE
*/

let on = true;
console.log(on);

let off = false;
console.log(off);

/*
NULL: null is an empty value. It is an empty container. Nothing is in it, still exists as a space to fill.
*/

let empty = null;
console.log(empty);

/*
UNDEFINED: no value is assigned and does not act as an empty container
*/

let undef;
console.log(undef);

/*
NULL vs UNDEFINED: 
Null:
    - Null is like a container with nothing in it.
    - Undefined is when a variable has never been intialized, or hasn't been created yet.

    Think of variables with null and undefined as packages coming out of UPS.
    Null packages are packages that were intentionally packed up with nothing, but have been assembled.
    Undefined packages are basically boxes that need to be assembled and given something to ship.


*/

/*
NUMBERS: numbers are literally just numbers. Don't need to write anything special in JS.
*/

let degrees = 90;
console.log(degrees);

let precise = 999999999999999; //15 9s
console.log(precise); //15 9s

let rounded = 9999999999999999;
console.log(rounded); //16 9s: JS gives you space for 15 9s before it rounds up.

let notQuite = 0.2 + 0.1;
console.log(notQuite); //JS rounds out at a certain number, so if math is needed, beware!

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10
console.log(numbersAreHard);

/*
STRINGS: strings are a DataType to represent text and are wrapped in a single quote ('') or double quotes ("")
*/

let stringOne = "Oh hi Mark";
let stringTwo = 'Oh hi Mark';

console.log(stringOne, stringTwo); //same output

//Numbers vs Strings
let first = 1050 + 100;
let second = '1050' + '100'; //String Concatenation

console.log(first);
console.log(second);

/*
OBJECTS: are used to store many values instead of a singular value
     - denoted by {}
*/

let frodo = {
    race: 'hobbit',
    rings: 1,
    cloak: true
}

console.log(frodo);
console.log(typeof frodo);

/*
ARRAYS: are containers that hold lists of items
    - denoted with []
    - don't have to be the same dataType
*/

let list = [ 'item1', undefined, 3 ];
//   (1)    (2)             (3)
/*
1. name of the array or list;
2. arrays use square brackets.
3. Each item, regardless of dataType, and is separated by commas
*/

let burritos = ['large', 4, true];
console.log(burritos);

console.log(typeof burritos);
//Arrays are also containers that can hold multiple dataTypes. So JS has classified arrays as objects and not it's own dataType.

/*
    - When JS sees that we're trying to combine two or more numbers, it adds the values together using the built-in math functionality. 
    - When JS sees us trying to add together one or more strings, instead of using the built-in math functionality, it combines the two strings instead without synthesizing the values.
*/

let example = 1050 + '100'; // coersion JS assumes that the user made a mistake and that we're trying to concatenate two strings, instead of trying to do math with the values.
console.log(example);
console.log(typeof example);

/*
    Challenge:
    Set 7 (or 8) variables:
    firstName
    lastName
    houseNumber
    aptNumber (if applicable)
    street
    city
    state
    zipcode
    Set each variable to its respective type.
    console.log your whole address (with a space between variables).
*/

let firstName = 'Scott';
let lastName = 'Schauf';
let houseNumber = 123;
let aptNumber = null;
let street = 'Main St.';
let city = 'Louisville';
let state = 'Kentucky';
let zipcode = 40245;

console.log(firstName, lastName);
console.log(houseNumber, street);
console.log(city, state, zipcode);

console.log(firstName, lastName + ',', houseNumber, street + ',', city + ',', state, zipcode); // string concatenation
console.log(`${firstName} ${lastName}, ${houseNumber} ${street}, ${city}, ${state} ${zipcode}`) // string interpolation
console.log(`Hello, my name is ${firstName}`);


/*
    String Properties
    - properties are qualities that are associated with a datatype
*/

let myName = "Scott";
console.log(myName.length);

/*
    String Methods
    - methods are tools that help us manipulate the data
        - .properties / .methods()
            *no parenthesis for properties*
*/

let myNameIs = "Scott";
console.log(myNameIs.toUpperCase());

let hometown = 'my hometown is louisville';
console.log(hometown.includes('louisville')); //method that checks if a certain string is included in another string.

// Challenge: Use google, find MDN documentation for Strings, research and use the split method to get an array back from this string

let sent = "This sentence will be split into individual parts";
console.log(sent.split(" "));

