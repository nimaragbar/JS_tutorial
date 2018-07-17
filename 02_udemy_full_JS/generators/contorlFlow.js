// control flow of function with generator
function* evens() {
    let count = 0;
    while (true){
        count += 2;
        // every generator object has an done (true, false)
        let reset = yield count;
        if (reset){
            count = 0;
        }
    }
}

// we create a infinity lop with generator

// create new instance for our generator
let even_sequence = evens();
console.log(even_sequence.next().value);
console.log(even_sequence.next().value);
console.log(even_sequence.next().value);
// now reset our generator
console.log(even_sequence.next(true).value);
console.log(even_sequence.next().value);