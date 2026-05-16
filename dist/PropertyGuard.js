"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product = {
    id: 101,
    name: "Keyboard",
    price: 50,
};
function getProductProp(obj, key) {
    return obj[key];
}
console.log(getProductProp(product, "name")); // Keyboard
console.log(getProductProp(product, "price")); // 50
//# sourceMappingURL=PropertyGuard.js.map