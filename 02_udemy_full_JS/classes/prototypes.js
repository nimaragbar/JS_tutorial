// prototypes are a simple demonstration of class
function Wizard(name, house, pet) {
    this.name = name;
    this.house = house;
    this.pet = pet;

    // we use arrow function to simplify this function
    this.greet = () => `I'm ${this.name } form ${this.house}`


}

Wizard.prototype.pet_name;
Wizard.prototype.info = function() {
    return `I have ${this.pet} named ${this.pet_name}`
};

let herry = new Wizard("Harry Potter", "Gryffindor", "owl");
herry.pet_name = "Hedwig";
console.log(herry);
console.log(herry.greet());
console.log(herry.info());
