Arrow Functions

--> The arrow function is one of the features introduced in the es6 version of JavaScript. It allows you to create functions in a cleaner way copared to regular functions. Here are some of the valid syntax for arrow function:

() => expression

(param1, paramN) => expression

() => {
statements
}

(param1, paramN) => {
statements
}

Callback Functions

A callback is a function passed as an argument to another function.

//function
function greet(name, callback) {
console.log('Hi', ' ', name);
callback();
}

//callback function
function callMe() {
console.log('I am callback function');
}

//passing function as an argument
greet('peter', callMe);

Arrow Callback Functions

--> find() return the first value of an array element that passes a test

--> findidex() returns the first index of an array element that passes a test

--> forEach() calls a function for each element

--> map() creates a new array with the results of calling a function for every array element.

--> filter() returns a new array with all elements that pass the test defined by the given function.

--> every() check whether all the elements of the array satisfy the given condition or not.

--> some() check whether at least one of the lements of the array satisfies the given condition or not.
