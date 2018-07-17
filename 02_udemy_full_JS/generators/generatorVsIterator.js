const arrayIterator = (array) => {
    // in iterator we must define start point
    let index = 0;
    // return a object
    return {
        next: () => {
            if (index < array.length){
                let next = array[index];
                index += 1;
                return next;
            }
        }
    }
};

let iterator = arrayIterator([1, 2, 3]);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// now create this structure with generator
function* arrayGenerator() {
    // arguments is a built-in keyword that get the argument of our function
    for (let arg of arguments){
        yield arg;
    }
}

let generator = arrayGenerator(1, 2, 3);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);

// a simple way for that
function* arrayGenerator2() {
    yield* arguments;
}

let arrayGen2 = arrayGenerator2(1, 2, 3);
console.log(arrayGen2.next().value);
console.log(arrayGen2.next().value);
console.log(arrayGen2.next().value);