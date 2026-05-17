class Person {
    name: string;
    age: number;
    address: string;

    constructor( name: string,  age: number,  address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    getSLeep(numberOfHours: number) {
        console.log(`${this.name} ${numberOfHours} ghonta ghumai`);
        
    }
}

class Student extends Person {}
const student1 = new Student(`Subroto`, 25, `Dhaka`);
student1.getSLeep(15);
// student1.name; // Subroto


class Teacher extends Person {

    designation: string;  // own property

    constructor( name: string,  age: number,  address: string, designation: string) {
        super(name, age, address);
        this.designation = designation;
    }


    takeClass(numberOfHours: number){
        console.log(`${this.name} is taking class for ${numberOfHours} hours`);
    }
}




const teacher1 = new Teacher(`Subroto`, 25, `Dhaka`, `Senior Teacher`);
teacher1.takeClass(3);