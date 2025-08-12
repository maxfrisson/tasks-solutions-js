let mango = (quantity, price) => (quantity - Math.floor(quantity /3)) * price;

console.log(mango(3,3));
console.log(mango(9,5));
console.log(mango(5,52));