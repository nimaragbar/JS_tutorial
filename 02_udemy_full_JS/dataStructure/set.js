// all set inheritance from prototype

let a = new Set();

a.add(5);
a.add(43);
a.add("Woo");
a.add({x: 50, y: 200});

console.log(a);
// to see the size of a set must use size instead of len
console.log(a.size);

// check existence in a set
console.log(a.has(5));
console.log(a.has(7));


// let change a array into a set
let numbers = [5, 7, 8, 13, 17];
let numSet = new Set(numbers);
console.log(numSet);

console.log('-'.repeat(30));
// to iterate through a set
// use enhanced for lop
for (let item of numSet.values()){
    console.log(item);
}

// remember that sets has unique values
let chars = "Thisisabadstringthathasnomeaningonit";
let chars_arr =  chars.split("");
let chars_set = new Set(chars_arr);
console.log(chars_set);
