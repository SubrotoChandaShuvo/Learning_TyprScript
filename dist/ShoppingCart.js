"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateTotal({ price, quantity = 1 }) {
    return price * quantity;
}
const item1 = {
    name: "Book",
    price: 100
};
const item2 = {
    name: "Pen",
    price: 20,
    quantity: 4
};
console.log(calculateTotal(item1)); // 100
console.log(calculateTotal(item2)); // 80
//# sourceMappingURL=ShoppingCart.js.map