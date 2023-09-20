// primitive

// 7 types : String, Number, Boolean, Null, Undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


const bigNumber = 78468908906578n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myobj = {

    name: "jeeban",
    age: 20,
}

const myFunction = function(){
    console.log("Hello World");
}


console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof scoreValue);
console.log(typeof myFunction);
console.log(typeof anotherId);



// ************************************************************


// stack (primitive), Heap,(Non-primitive)


let myYoutubename = "jeebanranjandotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(anothername);
console.log(myYoutubename);


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne
userTwo.email = "jeeban@google.com"

console.log(userOne.email);
console.log(userTwo.email);
