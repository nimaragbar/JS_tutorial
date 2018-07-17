// we want to check a number !! (number validation)

// check for finite
const addToCart = (item, number) => {
    return Number.isFinite(number)
};

console.log(addToCart('shirt', 5));
console.log(addToCart('shirt', Infinity));

// check for wire numbers
// Correct! JavaScript limits safe integers to values up to 2^53, which is checked by Number.isSafeInteger()
const addToCart2 = (item, number) => {
    return Number.isSafeInteger(number)
};

console.log(addToCart2('shirt', Math.pow(2, 54)));
