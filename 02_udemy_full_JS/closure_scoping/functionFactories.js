const addSuffix = (x) => {
    const concat = (y) => {
        return y + x;
    };
    return concat;
};

let add_ness = addSuffix('ness');
console.log(add_ness);
let h = add_ness("Happi");
console.log(h);

// another suffix
let add_ful = addSuffix('ful');
let f = add_ful("fruit");
console.log(f);


// create another function factories based on math
const product = (x) => {
    return y => {
        return y * x;
    }
};

let mult5 = product(5);
let g = mult5(3);
console.log(g);

// simplifying and reduce the function factories
const product2 = (x) => y => y * x;
let mult4 = product2(4);
console.log(mult4(3));
