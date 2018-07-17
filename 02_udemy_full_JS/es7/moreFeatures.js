// create a object
let obj = {a: 'One', b: 'two', c: 'three'};
let keys = Object.keys(obj);
let values = Object.values(obj);
let entries = Object.entries(obj);
// now see the result
console.log(keys);
console.log(values);
console.log(entries);

// now
for (let entry of entries){
    console.log(`key: ${entry[0]}, value: ${entry[1]}`);
}

