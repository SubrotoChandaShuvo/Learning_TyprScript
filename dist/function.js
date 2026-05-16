"use strict";
// Function
// arow function, normal function
Object.defineProperty(exports, "__esModule", { value: true });
function addNormal(num1, num2) {
    return num1 + num2;
}
const addArrow = (num1, num2) => {
    return num1 + num2;
};
// object => function => method
const poorUser = {
    name: 'Subroto',
    balance: 5,
    addBalance(value) {
        return this.balance + value;
    },
};
poorUser.addBalance(1000);
// callback function
const arr = [1, 2, 3, 4, 5];
const sqrArr = arr.map((num) => num * num);
//# sourceMappingURL=function.js.map