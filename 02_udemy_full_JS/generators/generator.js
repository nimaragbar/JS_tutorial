// use * to define generator
function* letterMaker() {
    yield 'a';
    yield 'b';
    yield 'c';
}

// create a new instance of our generator
let letterGen = letterMaker();
console.log(letterGen.next()); // to access the value use .value at the end of line
console.log(letterGen.next());
console.log(letterGen.next());
// we reach the limit and the next is undefined
console.log(letterGen.next());

// another example
function* countMaker() {
    let count = 0;
    while (count< 3){
        yield count += 1
    }
}

let countGen = countMaker();
console.log(countGen.next().value);
console.log(countGen.next().value);
console.log(countGen.next().value);