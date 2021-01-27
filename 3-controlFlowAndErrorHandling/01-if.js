/*
    Conditionals
        - a falsy value is a value that is considered false when encountered in a boolean context.
            - there are six falsy values in JavaScript
                1. false
                2. 0
                3. "", '', ``
                4. null
                5. undefined
                6. NaN (not a number)
*/

if (undefined) {
    console.log('will it run?'); // This yields nothing because undefined is a falsy value, so the if statement is false.
}

let isOn = true;
if (isOn == true) {
    console.log('the light is on!');
}

if (isOn) {
    console.log('the light is on!');
}

let isOn = false;
if (isOn == false) {
    console.log('the light is off!');
}

/*
    - JavaScript allows us to reference a variable that's already been declared and assign it a new value (or reinitialize that variable), but we cannot devlare two variables with the same name.

    - General rule of thumnb:
        - when declaring a new variable, the variable name needs to be prefaced by one of our 3 available JS keywords to declare a new variable (var, let, const)
        - when assigning a new value to a variable that already exists, we simply just need to reference a variable that's already been named.
*/

let weather = 65;

if (weather < 70) {
    console.log('wear a jacket');
}