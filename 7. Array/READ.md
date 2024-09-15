Creating Array in JavaScript

--> An array is an object that can store multiple values at once. For example,

const word = ['hello', 'word', 'welcome'];

--> The easiest way to create an array is by using an array literal[]. For example,

const array1 = ['eat', 'sleep'];

--> You can access elements of an array using (0, 1, 2, ....). For example,

const myArray = ['h', 'e', 'i', 'i', 'o'];

// first element
console.log(myArray[0]); // "h"
// second element
console.log(myArray[1]); // "e"

Array Properties

--> Array in JavaScript can be mixed data types. For example

const newData = ['work', 'exercise', 4, true, 3.1, [1, 2.4]];

--> You can find the length of an element (the number of elements in an array) using the length property. For example,

const newData = ['work', 'exercise', 1, true];
const length = newData.length;

Common Array Methods

--> indexOf() searches an element of an array and return its position

--> includes() checks if an array contains a specified element

--> push() aads a new element to the end of an array and returns the new length of an array

--> unshift() adds a new element to the beginning of an array and returns the new length of an array

--> pop() removes the last element of an array and returns the removed element

--> shift() removes the first element of an array and returns the removed element

--> sort() sorts the element alphabetically in strings and in ascending order

-- slice() selects the port of an array and returns the new array
