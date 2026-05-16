"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    name;
    age;
    address;
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    getSLeep(numberOfHours) {
        console.log(`${this.name} ${numberOfHours} ghonta ghumai`);
    }
}
const student1 = new Student(`Subroto`, 25, `Dhaka`);
student1.getSLeep(15);
//# sourceMappingURL=inheritence.js.map