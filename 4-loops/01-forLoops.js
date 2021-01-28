/*
    - Loops offer us a quick and easy way to do something repeatedly.

    - There are many different kinds of loops, but they all essentially do the same thing: repeat until a specified condition evaluates to false.
        - for Loops
        - forIn loops
        - forOf loops
        - while Loops
        - do while loops
        - labeled loops
        - break loops
        - continue loops

    NOTE: there is a danger of infinite loops

    - for loops take in 3 required parameters (separated by semicolon)
        1. the initial expression
        2. condition
        3. increment expression
*/

//        1.      2.     3. 
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// Challenge: using a for loop, count to 20, by 2s
for (let f = 0; f < 21; f += 2) {
    console.log(f);
}

// Challenge: using a for loop, count from 10 to 0, going down by 1.
for (let g = 10; g >= 0; g -= 1) {
    console.log(g);
}

// Challenge: using a for loop, count from 0, going down by 2s to -24.
for (let h = 0; h >= -24; h -= 2) {
    console.log(h);
}

// Challenge: using a for loop, loop through a name and display each letter individually.
let myName = "spongebob";

for (let i = 0; i < myName.length; i++) {
    let c = myName[i];
    console.log(c);
}

// Challenge: Make a for loop where you add up all numbers from 1 to 50 (should equal 1275)
let sum = 0;

for (let i = 0; i <= 50; i++) {
    sum += i
}

console.log (sum);