Filters in JavaScript Arrays

The filter() method returns a new array with all elements that pass the test defined by the given function.

--> filter() does not change the original array.
--> filter() does not execute a callback for array elements without values

let newArray = oldArray.filter((currentValue, index, array) {
//Returns element to new Array
});

Map in JavaScript Arrays

--> The map() method create a new array with the results of calling a function for every array element.

--> map() does not change the original array.
--> map() executes callback once for each array element in order.

let newArray = oldArray.map((currentValue, index, array) {
//Return element to new array
})
