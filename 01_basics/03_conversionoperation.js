let score = "46" // In this case when "null" and "undefined" entered the output given like "object" and "undefined".

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "46" => 46
// "46abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1

let booleanIsloggedIn = Boolean(isLoggedIn)
console.log(booleanIsloggedIn);

// 1 => true; 0 => false
// "" => false
// "jeeban" => true

let someNumber = 46

let stringNumber = string(someNumber)

console.log(stringNumber);
console.log(typeof stringNumber);

// ************************** operations ***************************

let value = 3
let negValue = -value
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
//console.log(2%3);

let str1 = "hello"
let str2 = "jeeban"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log( (3 + 4) * 5 % 3 );

console.log(true);
console.log(+true);
console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++;
console.log(gameCounter);
