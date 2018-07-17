// in normal we can't access to the local variable like secret (in this example)
let call = () => {
    let secret = 'ES6 rocks!';
    let reveal = () => {
        console.log(secret);
    };

    // reveal();
    return reveal;
};


// call();

let unveil = call();
unveil();
