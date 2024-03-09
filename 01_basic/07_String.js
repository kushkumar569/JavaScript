const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");     // generally not use this

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);     // use this
 
const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)    // print in reverse order starting with 4th index
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());             // remove space

const url = "https://hitesh.com/hitesh%20choudhary"
 
console.log(url.replace('%20', '-'))     // replace %20 to -

console.log(url.includes('sundar'))        // return false since url not cointanis sunder

console.log(gameName.split('-'));           // gamename split where - is occur in gamename