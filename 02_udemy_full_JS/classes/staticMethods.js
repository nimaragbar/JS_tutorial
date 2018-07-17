// for create a static method in JS
class Calculator {
    static multiply(a, b) {
        return a * b;
    }

    static add(a, b){
        return a + b;
    }
}

// we not create a new instance for this class, just use of it static method
let a = Calculator.multiply(5, 7);
console.log(a);

let b = Calculator.add(1, 2);
console.log(b);



