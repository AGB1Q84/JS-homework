// Lesson 1 home work
// 1 experience
let str = "Hello World";
console.log(str);

//2 experience
let str1 = "Hello";
let str2 = "World";
console.log(str1, str2);

//3 experience
let name = "Benazir";
console.log("Hello", name);

//4 experience
let age = "25";
console.log("Мне", age, "лет");

//5 experience
// let mname = prompt("Введите Ваше имя");
// alert("Ваше имя" + mname);

//6 experience
// let num = prompt("Введите число");
// alert(num * 2);

//7 experience
let str3 = "abcde";
let firstS = str3[0];
let secondS = str3[2];
let thirdS = str3[4];
console.log(firstS);
console.log(secondS);
console.log(thirdS);

//8 experience
let number1 = "12345";
let product =
  parseInt(number1[0]) *
  parseInt(number1[1]) *
  parseInt(number1[2]) *
  parseInt(number1[3]) *
  parseInt(number1[4]);
console.log("Произведение чисел 12345; " + number1 + "=" + product);

//9 experience
let secInMinute = 60;
let secInHour = secInMinute * 60;
let secInDay = secInHour * 24;
let secInMonthJanMrMayJulAugOctDec = secInDay * 31;
let secInMonthApJnNov = secInDay * 30;
let secInMonthFeb1 = secInDay * 28;
let secInMonthFeb2 = secInDay * 29;
let secInYear = 366 * 86400;
console.log("Секунд в минуте", secInMinute);
console.log("Секунд в часе", secInHour);
console.log("Секунд в дне", secInDay);
console.log("Секунд в месяце из 31 дня", secInMonthJanMrMayJulAugOctDec);
console.log("Секунд в месяце из 30 дня", secInMonthApJnNov);
console.log(
  "Конечно же, как всегда февраль отличается. Секунды в феврале, если 28 дней",
  secInMonthFeb1
);
console.log("Секунды в феврале, если 29 дней", secInMonthFeb2);
console.log("Секунд в году", secInYear);

// 10 experience
let time = new Date();
let hour = time.getHours();
let minute = time.getMinutes();
let second = time.getSeconds();
let formattedTime = hour + ":" + minute + ":" + second;
console.log("Текущее время:" + formattedTime);
