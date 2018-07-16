// Spread Operator "..."
/*
 combination this two array
 [ 20, 30, 40]
 [10, 50]
*/
let a = [20, 30, 40];
let b = [10, ...a, 50];
console.log(b);

// another example like above
let c = ["Nima", 'Mary'];
let d = ["Alice", ...c];
console.log(d);


// example with function
// alternative to *arg in python
function collect(...a) {
    console.log(a);
}

collect(1, 2, 3, 4, 5);
collect(1, 2);
collect('Nima', 'Mary');