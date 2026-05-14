// Function
// arow function, normal function

function addNormal(num1 :number , num2: number) : number{
    return num1 + num2;
}

const addArrow = (num1: number, num2: number): number  => {
    return num1 + num2;
}


// object => function => method

const poorUser = {
    name: 'Subroto',
    balance: 5,
    addBalance(value: number): number {
        return this.balance + value;
    },
}

poorUser.addBalance(1000)

// callback function
const arr: number[] = [1, 2, 3, 4, 5];

const sqrArr = arr.map((num: number): number => num * num);