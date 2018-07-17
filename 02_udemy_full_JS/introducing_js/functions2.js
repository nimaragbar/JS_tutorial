// usual function
function hello() {
    console.log("Hello World");
}

hello();

// now see this way for create "Anonymous Function"
// or function expression
let hi = function () {
    console.log("Hello World");
};

hi();

/*
This is a anonymous function that has no name
but work properly as usual function
setTimeout will run argument after a time (on milliseconds)
 */
setTimeout(function () {
    console.log("Hi !!!");
}, 2000); // this function will run after 2 sec.
/* now change the structure for creating arrow function
specially designed in ES6
 */
setTimeout(() => { //arrow function is anonymous by default
    console.log('This is a arrow function');
}, 3000);

let arrowFunction = () => {
    console.log('Ho ho !');
};
arrowFunction();