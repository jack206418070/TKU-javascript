// Create some arrays
const numbers = [43,56,33,23,44,36,5,2019,81,01];
const numbers2 = new Array(22,45,33,76,54,30,32);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear','Pineapple','lemon'];
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
val = numbers.push(87)
console.log(val)
// Add on to front
val = numbers.unshift(87)
console.log(val)
// Take off from end
val = numbers.pop()
console.log(val)
// Take off from front
val = numbers.shift()
console.log(val)
// Splice values
numbers.splice(0,1)
console.log(numbers)
// Reverse
numbers.reverse()
console.log(numbers)
// Concatenate array
val = numbers.concat(numbers2)
console.log(val)

// Sorting arrays
val = fruit.sort()
console.log(val)
// Use the "compare function"
val = numbers.sort(function(a,b){return a-b})
console.log(val)
// // Reverse sort
val = numbers.sort(function(a,b){return b-a})
console.log(val)