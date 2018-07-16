// variable are in two parts:
// variable and constant
// in early version of Ecma script we user var keyword bt in ES6 we use let

// for define a variable in ES6
let x = 10;
// we can change in variable
x = 20;
// another changes
x += 1;
console.log(x);

// for define a constant in ES6
const y = 10;
// note that we can't change the y
// we can't re assign y

const names = ['Nima', 'Mary'];
// we  can push anything in this array
names.push('Sina');
// we can't assign any items in array with const
console.log(names);


// another concept with example

// The 'var' keyword actually does not allow block scoping. Re-using the same variable with 'var' twice in coding blocks will overwrite data.

let limit = 200;
{
    let limit = 10;
    console.log('backstage limit', limit);
}
console.log('overall concert limit', limit);
    // local scope ant global scope
// if we use var instead of let, we can change in variable

const limit_2 = 200;
{
    const limit_2 = 10;
    console.log('backstage limit_2', limit_2);
}
console.log('overall concert limit_2', limit_2);

    // this is the power and benefits of blocks and scope in JS


// another concept
// block scoping makes the variable private
function hello() {
    let message = "Hello";
    console.log(message)
}

function greeting() {
    let message = "How are you?";
    console.log(message);
}

hello();
greeting();
