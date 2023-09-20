const name = "jeeban"
const repoCount = 18

 // console.log(name + repoCount + " value")

 console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

 const gameName = new String('jeeban-rd')

 console.log(gameName[0]);
 console.log(gameName.__proto__);


 console.log(gameName.length);
 console.log(gameName.toUpperCase());
 console.log(gameName.charAt(2));
 console.log(gameName.indexOf('e'));

 const newString = gameName.substring(0, 4)
 console.log(newString);

 const anotherString = gameName.slice(-9, 4)
 console.log(anotherString);

 const newStringOne = "    jeeban     "
 console.log(newStringOne);
 console.log(newStringOne.trim());

 const url = "https://jeeeban.com/jeeban%20ranjan"

 console.log(url.replace('%20', '-'))

 console.log(url.includes('jeeban'))

 console.log(gameName.split('-'))


