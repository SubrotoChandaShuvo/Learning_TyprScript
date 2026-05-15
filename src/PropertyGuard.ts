const product = {
  id: 101,
  name: "Keyboard",
  price: 50
};

function getProductProp<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

console.log(getProductProp(product, "name")); // Keyboard

console.log(getProductProp(product, "price")); // 50