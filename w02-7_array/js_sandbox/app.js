// Create some arrays
const numbers = [43,56,33,23,44,36,5,2019,81,01];
const numbers2 = new Array(22,45,33,76,54,30,32);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear','Pineapple'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1,name:'Jack'}, new Date()];

let val;

// Get array length
val = numbers.length
console.log(val)
// Check if is array
val = Array.isArray(numbers)
console.log(val)
// Get single value
val = numbers[3]
console.log(val)
// Insert into array
numbers[3] = 50
console.log(numbers)
// Find index of value
val = numbers.indexOf(2019)
console.log(val)
// MUTATING ARRAYS
// Add on to end

// Add on to front

// Take off from end

// Take off from front

// Splice values

// Reverse

// Concatenate array

// Sorting arrays
// Use the "compare function"

// // Reverse sort

