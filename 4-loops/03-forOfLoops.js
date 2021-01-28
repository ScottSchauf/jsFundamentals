/*
    - whereas for in loops look at the enumerable properties, for of loops look at the iterable properties.
        - iterable meaning able to parse through with numbers

    - for of loops are best suited for working with arrays.
*/

// the below cose doesn't work - object properties are enumerable, not iterable
let student = {
    name: 'Peter',
    awesome: true,
    degree: 'javascript',
    week: 1
}

for (let item of student) {
    console.log(item);
}

let catArray = ['tabby', 'british shorthair', 'burmese', 'main coon', 'rag doll'];

for (let cat of catArray) {
    console.log(cat, 'says meow');
}