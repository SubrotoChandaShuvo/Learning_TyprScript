// Polymorphism  >> Bohurupi

class Person {
    getSleep() {
        console.log(`I am a normal Happy Person. I sleep for 8 hours.`);
    }
}

class Student extends Person {
    getSleep(){
        console.log(`I am a student. I sleep for 7 hours`);
        
    }
}

class NextLevelDeveloper extends Person {
    getSleep() {
        console.log(`I am a Next Level Developer. I sleep for 6 hours.`);
    }
}


const getSleepingHours = (param : Person) => {
    param.getSleep();
}

const person1 = new Person();
const person2 = new Student();
const person3 = new NextLevelDeveloper();

getSleepingHours(person3);

// person1.getSleep();
// student1.getSleep();
// nextLevelDeveloper1.getSleep();



class Shape {
    getArea() : number {
        return 0;
    }
}

class Circle extends Shape {
    // area = pi * r * r

    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }
    getArea() : number {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    // area = width * height

    width: number;
    height: number;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    getArea() : number {
        return this.width * this.height;
    }
}


const getArea = (param : Shape) => {
    console.log(param.getArea());
}

const shape1 = new Shape();
const circle1 = new Circle(5);
const rectangle1 = new Rectangle(4, 6);

getArea(shape1);
getArea(circle1);
getArea(rectangle1);