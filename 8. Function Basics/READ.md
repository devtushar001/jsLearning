Function in JavaScript

--> A function is a block of code that performs a specific task. Dividing a complex problem into smaller chunks makes our program easy to understand and reusable. The syntax of function is as follows:

function name(param1, param2, param3) {
// code to be executed
return something;
}

Function Expression

A function expression is very similar to and has almost the same syntax as a function declaration. The main difference between a function expression and a function declartion is the function name, which can be omitted in functin expressions to create anaonymous functions.

const variable = function (param1, param2, param3) {
// code to be executed
return something;
}

Nested function

--> We may nest a function within another function. The nested (inner) function is private to its containing (outer) function.

function addSquare(a, b) {
function square(x) {
return x \* X;
}
return square(a) + square(b);
}

const a = addSquare(2, 3); //return 13
const b = addSquare(3, 4); //return 34
