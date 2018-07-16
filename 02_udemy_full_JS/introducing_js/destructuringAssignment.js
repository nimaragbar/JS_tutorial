// consider this simple assignment
let z=[4, 5, 6];
let four = z[0];
let five = z[1];
console.log(four, five);
// in shorter way
let [four2, five2] = z;
console.log(four2, five2);

// another example:
let names = ["Nima", "Sina", "Mary"];
let [nima, sina] = names;
console.log(nima, sina);

// example with object
let king = {name: "Nima", age: 28};
/*
let name = king.name;
let age = king.age;
console.log(name, age);
 */
// now with shorter way
let {name, age} = king;
console.log(name, 'age');

// another example:
let son = {name2: 'Sina', parents: 2};
let name2, parents;
// we can't define this assignment in block {} so we must define this block in ({})
({name2, parents} = son);
console.log(name2, parents);
