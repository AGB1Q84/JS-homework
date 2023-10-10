// первое задание
let number1 = 0;
let number2 = -1;
let number3 = 4;

if (number1 > number3) {
  console.log(number1, number3, number2);
} else {
  console.log(number3, number1, number2);
}

// // второе задание
let num1 = prompt("Введите 1-е число:");
let num2 = prompt("Введите 2-е число:");

if (num1 > num2) {
  console.log("Это число больше" + num2);
} else if (num2 > num1) {
  console.log("Это число больше" + num1);
} else if ((num1 = num2)) {
  console.log("Эти числа равны");
}
// третье задание
let numeral1 = -6;
let numeral2 = -3;
let numeral3 = -6;
let numeral4 = 0;
let numeral5 = -1;

let maxNumeral = numeral4;

if (numeral1 > numeral2) {
  maxNumeral = numeral2;
}
if (numeral2 < numeral3) {
  maxNumeral = numeral3;
}
if (numeral3 < numeral4) {
  maxNumeral = numeral4;
}
if (numeral5 > numeral4) {
  maxNumeral = numeral4;
}
console.log(maxNumeral);

// 4задание
var x = 10,
  y = 7;
var comparison = x > y ? "x больше у" : "x меньше у";
console.log(comparison);

// 5 задание
let evenAndOddNum = prompt("Введите число:");

if (evenAndOddNum % 2 === 0) {
  console.log("Число " + evenAndOddNum + " четное");
} else {
  console.log("Число " + evenAndOddNum + " нечетное");
}
// 6 задание
let wholeNum = prompt("Введите число:");

if (wholeNum == 0) {
  alert("Число " + wholeNum + " ноль");
} else if (wholeNum > 0 && wholeNum < 10) {
  alert("Число " + wholeNum + " однозначное положительное");
} else if (wholeNum >= 10 && wholeNum < 100) {
  alert("Число " + wholeNum + " двухзначное положительное");
} else if (wholeNum >= 100) {
  alert("Число " + wholeNum + " положительное трехзначное и более");
} else if (wholeNumum < 0 && wholeNum > -10) {
  alert("Число " + wholeNum + " однозначное отрицательное");
} else if (wholeNum <= -10 && wholeNum > -100) {
  alert("Число " + wholeNum + " двухзначное отрицательное");
} else {
  alert("Число " + wholeNum + " отрицательное трехзначное и более");
}
