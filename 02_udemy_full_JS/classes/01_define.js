class Animal {
    constructor(name, height) {
        this.name = name;   // this == self in python
        this.height = height;
    }
    hello() {
        console.log(`Hi! I'm ${this.name} from the Animal kingdom!`);
    }
}

// create a object from our class
let king = new Animal('Mufasa', 4.5);
console.log(king);

// hello is a method (python)
king.hello();

// let create child class (Inheritance)
class Lion extends Animal {
    constructor(name, height, color){
        super(name, height);
        this.color = color;
    }

    hello(){
        console.log(`Hi! I'm ${this.name} from Pride Rock!`);
    }
}

let son = new Lion("Simba", 2, "golden");
console.log(son);
son.hello();
