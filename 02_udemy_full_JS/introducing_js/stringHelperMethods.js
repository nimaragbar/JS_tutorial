let b = 'Ho' + 'oo'.repeat(3);
console.log(b);
// or from template literal:
let c = `Ho${'oo'.repeat(3)}`;
console.log(c);

console.log('butterfly'.startsWith('butter'));
console.log('butterfly'.endsWith('fly'));
console.log('butterfly'.includes('te'));