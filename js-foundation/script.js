// primitive Data types
// string,number,boolean,null,undefined
let rohit = 6000;
let happy = rohit;
rohit = rohit - 1000;
console.log(rohit, happy);

// reference (non primitive) data types

// array, object and functions(apart from these 3 everything is primitive data type)

let array = ["apple", "banana", "orange"];
let array2 = array;
array2.pop();
console.log(array, array2);

// we will remove from one array another array will also change, because they both reference the same array object.
// instead of copying(assigning) value its assigning reference
