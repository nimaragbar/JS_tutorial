function count(x) {
    let numbers = [];
    if (x % 2 === 0) {
        for (let i = 0; i < x; i += 2) {
            numbers.push(i);
        }
    } else {
        for (let i = 1; i < x; i += 2) {
            numbers.push(i);
        }
    }
    return numbers;
}

console.log(count(8));
console.log(count(7))