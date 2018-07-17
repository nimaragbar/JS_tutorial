// map method

// consider this array
let values = [20, 30, 40];

// define a arrow function
let double = (n) => {
    return n * 2;
};

// now we want to double all values in array by this function

let doubled = values.map(double);
console.log(doubled);

// a shorter method for this:
// put function in map argument
let doubled2 = values.map((n) => {
    return n * 2;
});
console.log(doubled2);

// even shorter
let double3 = values.map((n) => n*2);
console.log(double3);


// filter method

let points = [7, 22, 16, 14, 5];
let highScores = points.filter((n) => n > 15);
console.log(highScores);

// from hard way
let highScores2 = points.filter((n) => {
    return n > 15;
});
console.log(highScores2);

