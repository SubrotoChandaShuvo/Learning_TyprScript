type alfa = string | number;
const add = (a: alfa, b: alfa) => {
    if(typeof a === 'number' && typeof b === 'number') {
        return a + b;
    } else {
        return a.toString() + b.toString();
    }
}

console.log(add(5, 7)); //12
console.log(add(5, '7')); // 57
console.log(add('5', 7)); // 57
console.log(add('5', '7')); // 57