// const myArray = [2, 3, 4, 3, 5, 8, 9, 3, 2, 5, 6];
// const mySet = new Set(myArray);

// console.log(myArray);
// console.log(mySet);

// const uniqueArray = [...mySet];
// console.log(uniqueArray);

// const _myarray = [1, 2, 3, 4, 5, 5];
// const _myset = new Set(_myarray);

// _myset.add(6);
// console.log(_myset);

// _myset.add("7");
// console.log(_myset);

// _myset.add({ channeName: "JavaScript Mastery", className: "finel" });
// console.log(_myset);

// _myset.delete(3);
// console.log(_myset);

// _myset.clear();
// console.log(_myset);

// console.log(_myset.has(2));
// console.log(_myset.size);

// Map

/*
const _mymap = new Map([
  ["name", "john"],
  ["surname", "doe"],
]);

console.log(_mymap);
*/

const _myobject = {};
const _a = {};
const _b = {};
/*
_myobject[_a] = "a";
_myobject[_b] = "b";
*/
const _mymap = new Map([
  [_a, "a"],
  [_b, "b"],
]);
// _mymap.set({}, "c");
// _mymap.set("d", "d");
// _mymap.delete(_a);
console.log(_mymap.has(_a)); // true
console.log(_mymap.has(_b)); // true
console.log(_mymap.has("a")); // false
console.log(_mymap.size); // 2
console.log(_mymap);
