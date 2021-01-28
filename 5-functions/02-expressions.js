// function expressions are stored in a variable

// function expression
let hello = function () { // a function without a name is an anonymous function
    console.log('hey there');
}

hello();

/*
    - difference between function declarations and function expressions:
        - function declarations get hoisted
        - function expressions do not get hoisted
*/