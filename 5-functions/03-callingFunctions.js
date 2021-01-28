function hello() {
    console.log('hey there');
}

// hello(); // correct
// hello // nothing - no parenthesis means the function will not run
// console.log(hello);
// console.log(hello()); // function invocations happen immediately - in this case, our function of hello is running before the console.log statement, leaving us with an empty console.log printing undefined.

// Challenge: Create a function that, when invoked, lists out numbers 1-10.

function counting() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

counting();


// Challenge: Given the array, create a function that lists out the values individually.

let arr = ['This', 'is', 'really', 'cool'];

function cool() {
    for (let cool of arr) {
        console.log(cool);
    }
}

cool();