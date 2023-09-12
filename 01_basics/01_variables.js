const accountId = 14453
let accountEmail = "jeeban@google.com"
var accountpassword = "12345"
accountCity = "jaipur"
let accountState;

//accountId = 2 //not allowed

accountEmail = "jd@jd.com"
accountpassword ="21212121"
accountCity = "Bengaluru"

console.log(accountId)


/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId , accountEmail, accountpassword, accountCity, accountState])