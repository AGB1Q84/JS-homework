// циклы
// const cyc = [
//   { name: "Macbook", price: 2000, color: "red" },
//   { name: "Asus", price: 500, color: "green" },
//   { name: "Acer", price: 500, color: "black" },
//   { name: "Acer", price: 500, color: "silver" },
//   { name: "Linux", price: 800, color: "silver" },
//   { name: "Lenovo", price: 900, color: "black" },
//   { name: "Delli", price: 1000, color: "white silver" },
// ];
// for (const { name, price, color } of cyc) {
//   console.log(`Price of ${name} is ${price}$ and ${color}`);
// }

// const cyc2 = {
//   Macbook: 2000,
//   Asus: 500,
//   Acer: 500,
//   Acer: 500,
//   Linux: 800,
//   Lenovo: 900,
//   Delli: 1000,
// };
// for (const key in cyc2) {
//   const price = cyc2[key];
//   console.log(`Price of ${key} is ${price}$`);
// }

// задача по циклам. Надо сделать треугольник из #
const cycle = "";
for (i = 0; i <= 7; i++) {
  console.log("#".repeat(i));
}

let cycle2 = " ";
for (let i = 1; i < 101; i++) {
  cycle2 = cycle2 + i + " ";
}
console.log(cycle2);

let cycle3 = " ";
for (let i = 11; i < 33; i++) {
  cycle3 = cycle3 + i + " ";
}
console.log(cycle3);

let cycle4 = " ";
for (let i = 0; i < 100; i += 2) {
  cycle4 = cycle4 + i + " ";
}
console.log(cycle4);

let cycle5 = 0;
for (let i = 1; i <= 100; i++) {
  cycle5 = cycle5 + i;
}
console.log(cycle5);

let cycle6 = [1, 2, 3, 4, 5];
for (let i = 0; i < cycle6.length; i++) {
  console.log(cycle6[i]);
}

let cycle7 = [1, 2, 3, 4, 5];
let result = 0;
for (let i = 0; i < cycle7.length; i++) {
  result += cycle7[i];
}
console.log(result);

let obj = { Коля: "200", Вася: "300", Петя: "400" };
for (let prop in obj) {
  console.log(`${Коля} + "-" + "зарплата" + ${200} + "долларов"`);
}
