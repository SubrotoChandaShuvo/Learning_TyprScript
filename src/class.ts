class Animal {
    name: string;
    species: string;
    sound: string;

    constructor(name: string, species: string, sound: string) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
}

const dog = new Animal("Bulu", "Dog", "Woof");
console.log(dog.name); // Bulu
console.log(dog.species); // Dog
console.log(dog.sound); // Woof

const cat = new Animal("Mimi", "Cat", "Meow");
console.log(cat.name); // Mimi
console.log(cat.species); // Cat
console.log(cat.sound); // Meow