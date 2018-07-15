// array literal
let selectedColors = ['red', 'blue'];
console.log(selectedColors);

// index of array
console.log(selectedColors[0]);

// expand array
selectedColors[2] = 'green';
console.log(selectedColors);
// So the length of array are dynamic and can be changed later

// we can store difference types in a array
selectedColors[3] = 1;
console.log(selectedColors);

// Technically the array is a object
// it has a bunch of key, value paris properties
console.log(typeof selectedColors);
// types of array in JS == Object

// length of array
console.log(selectedColors.length);