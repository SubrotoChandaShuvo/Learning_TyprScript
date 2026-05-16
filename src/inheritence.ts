class Student {

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

const student1 = new Student(`Subroto`, 25, `Dhaka`);

student1.getSLeep(15);