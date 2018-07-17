// simplest way to declare function in JS:
function print(input) {
    console.log(input);
}

print('Hello World');

// another way (learned on octave)
let printNew = function (a, b) {
    return a * b;
};

let outputOfPrint = printNew(10, 2);
console.log(outputOfPrint);