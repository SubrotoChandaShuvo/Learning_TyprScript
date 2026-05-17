// OOP : instance of type guard / type narrowing 

class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

        getSleep(numberOfHours: number) {
        console.log(`${this.name} is doing sleep for ${numberOfHours} hours.`);
    }
}

class Student extends Person {
    constructor(name: string) {
        super(name);
    }

    doStudy(numberOfHours: number) {
        console.log(`${this.name} is doing study for ${numberOfHours} hours.`);
    }

}

class Teacher extends Person {
    constructor(name: string) {
        super(name);
    }

    takeClass(numberOfHours: number) {
        console.log(`${this.name} is taking class for ${numberOfHours} hours.`);
    }
}


// function guard
 const isStudent = (user: Person)=> {
    return user instanceof Student; // true or  false //user is Student;
}

const isTeacher = (user: Person) => {
    return user instanceof Teacher; // true or false // user is Teacher
}

const getUserInfo = (user: Person) => {
    if(isStudent(user)) {
        user.doStudy(5);
    } 
    else if(isTeacher(user)) {
        user.takeClass(3);
    }
     else {
        user.getSleep(8);
    }

}

const student1 = new Student('MR. John');
const teacher1 = new Teacher('MR. Smith');
const person1 = new Person('MR. Doe');

getUserInfo(student1);
getUserInfo(teacher1);
getUserInfo(person1);