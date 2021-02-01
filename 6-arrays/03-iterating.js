/*
    - forEach() method
        - the forEach() method executes a function once for each element in an array
        - the forEach() method essentially does the same thing as a for loop or for of loop. Both iterate over the properties in an array.
*/

let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

// regular for loop
for (let i = 0; i < food.length; i++) {
    console.log(food[i]);
}

// forEach method - function declaration
food.forEach(function(foodItem) {
    console.log(foodItem);
})

/*
CHALLENGE
************
    - (Go look at MDN docs if you need a reminder):
    - Create an array containing movies
    - Use the .forEach() method to list your movies
    - Add another movie at the end of the array
    - And replace one of your existing movies with another one
*/

let movies = ['In and Of Itself', 'Good Boys', 'Driveways', 'Boyhood', 'The Way Way Back']
movies.forEach(function(movieList) {
    console.log(movieList);
})

// fat arrow version
movies.forEach(movie => console.log(movie)); // remember that parenthesis are not needed when only a single parameter is present when working with fat arrow functions.

movies.push('The Speed Cubers');
console.log(movies);

movies.splice(3, 1, 'The Forty-Year-Old Version');
console.log(movies);