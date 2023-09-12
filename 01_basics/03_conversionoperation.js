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