const firstName = 'Jack';
const lastName = 'Cheng';
const allName = firstName + lastName;
const age = 26;
const str = 'Hello there my name is Jack';
const tags = 'web design,web development,programming';

let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;
console.log(val);

// Append
val = 'Jack ';
val += 'Cheng';
console.log(val);

val = 'Hello, my name is ' + firstName + ' and I am ' + age;
console.log(val);

// Escaping
val =  `That's awesome, I can't wait. My name is ${allName}`;
console.log(val);

// Length
val = firstName.length;
console.log(val);

val = firstName.concat(' ',lastName);
console.log(val);

val = firstName.toUpperCase();
console.log(val);

val = firstName.toLowerCase();
console.log(val);

// indexOf()
val = firstName.indexOf('a')
console.log(val)
val = firstName.lastIndexOf('c')
console.log(val);
// charAt()
val = firstName.charAt('2')
console.log(val);
// get last char
val = firstName.charAt(firstName.length-1)
console.log(val);
// substring()
val = firstName.substring(1,4)
console.log(val);
// slice()
val = firstName.slice(0,3)
console.log(val);
val = firstName.slice(-3)
console.log(val);
// split()
val = str.split(' ')
console.log(val);
val = tags.split(',')
console.log(val);
// replace()

val = str.replace('Jack','Mary')
console.log(val);
// includes()
val = str.includes('Jack')
console.log(val);
