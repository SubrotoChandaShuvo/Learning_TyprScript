type CartItem = {
name: string;
price: number;
quantity?: number;
};

function calculateTotal({ price, quantity = 1 }: CartItem): number {
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