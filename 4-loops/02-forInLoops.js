/*
    - for in loops are great for looping over values in an object
        - properties (or key value pairs) in an object are known as enumerable properties.
        - for in loops will loop over the enumerable properties of an object.

        - enumerable simply means 'countable'
*/

let student = {
    name: 'Peter',
    awesome: true,
    degree: 'javascript',
    week: 1
}

// console.log(student.name); // dot notation
// console.log(student['name']); // all keys in objects are strings by default.

for (let item in student) {
    // console.log(item);
    console.log(student[item]); // object bracket notation
}

let catArray = ['tabby', 'british shorthair', 'burmese', 'main coon', 'rag doll'];

for (let cat in catArray) {
    // console.log(cat);
    console.log(catArray[cat]);
}

// Challenge: Write a for in loop that capitalizes the first letter of a name, and lowercases the rest of the name.
let myName = 'sPonGeBoB'
let capName;

for (let i in myName) {
    if (i == 0) {
        capName = myName[i].toUpperCase();
    } else {
        capName += myName[i].toLowerCase();
    }
}

console.log(capName);