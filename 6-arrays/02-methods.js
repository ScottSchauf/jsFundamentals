let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

// push: allows us to add one or more items to the end of an array
food.push('Pizza');
console.log('push:', food);

// splice: allows us to remove, replace, or add new elements to the array
food.splice(4, 1)
console.log('splice:', food);

food.splice(2, 0, 'Lollipops');
console.log('splice 2:', food);

// pop: removes the last item of an array
food.pop();
console.log('pop:', food);

// shift: allows us to remove the first item of an array
food.shift();
console.log('shift:', food);

// unshift: allows us to add one or more elements to the beginning of an array
food.unshift('Popcorn', 'Steak');
console.log('unshift:', food);